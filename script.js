// GLOBAL DATABASE (Extend this list as much as you want!)
const data = {
    domestic: [{"c":"AGR","n":"Agra"},{"c":"AGX","n":"Agatti"},{"c":"AMD","n":"Ahmedabad"},{"c":"ATQ","n":"Amritsar"},{"c":"AYJ","n":"Ayodhya"},{"c":"BBI","n":"Bhubaneswar"},{"c":"BDQ","n":"Vadodara"},{"c":"BHO","n":"Bhopal"},{"c":"BLR","n":"Bengaluru"},{"c":"BOM","n":"Mumbai"},{"c":"CCU","n":"Kolkata"},{"c":"COK","n":"Kochi"},{"c":"DEL","n":"Delhi"},{"c":"GAU","n":"Guwahati"},{"c":"GOI","n":"Goa"},{"c":"HYD","n":"Hyderabad"},{"c":"IXC","n":"Chandigarh"},{"c":"JAI","n":"Jaipur"},{"c":"LKO","n":"Lucknow"},{"c":"MAA","n":"Chennai"},{"c":"PNQ","n":"Pune"},{"c":"SXR","n":"Srinagar"},{"c":"TRV","n":"Trivandrum"},{"c":"VNS","n":"Varanasi"}],
    intl: [{"c":"DXB","n":"Dubai"},{"c":"LHR","n":"London Heathrow"},{"c":"SIN","n":"Singapore Changi"},{"c":"HND","n":"Tokyo Haneda"},{"c":"JFK","n":"New York JFK"},{"c":"FRA","n":"Frankfurt"},{"c":"CDG","n":"Paris"},{"c":"SYD","n":"Sydney"},{"c":"DOH","n":"Doha"},{"c":"BKK","n":"Bangkok"},{"c":"ICN","n":"Seoul"},{"c":"AMS","n":"Amsterdam"}],
    airlines: [{"c":"EK","n":"Emirates"},{"c":"SQ","n":"Singapore Airlines"},{"c":"LH","n":"Lufthansa"},{"c":"BA","n":"British Airways"},{"c":"QR","n":"Qatar Airways"},{"c":"AI","n":"Air India"},{"c":"6E","n":"IndiGo"},{"c":"UK","n":"Vistara"},{"c":"QP","n":"Akasa Air"}]
};

// CAREER DATA
let career = JSON.parse(localStorage.getItem('aeroCareerFinal')) || { xp: 0, log: [], weakSpots: [] };
let game = { queue: [], index: 0, stats: {}, isBoss: false, pathIndex: 0 };
let timer;

// SAVE & UI
function save() { localStorage.setItem('aeroCareerFinal', JSON.stringify(career)); }

function updateMenuUI() {
    let level = Math.floor(career.xp / 500) + 1;
    document.getElementById('display-lvl').innerText = level;
    document.getElementById('xp-bar-fill').style.width = (career.xp % 500 / 5) + "%";
    document.getElementById('current-xp').innerText = career.xp % 500;
    document.getElementById('weak-count').innerText = career.weakSpots.length;
    document.getElementById('license-rank').innerText = level > 5 ? "ATPL" : "PPL";
    const ranks = ["Student", "Cadet", "First Officer", "Captain", "Senior Captain", "Legend"];
    document.getElementById('display-rank-name').innerText = ranks[Math.min(level-1, 5)];
}

// GAME LOGIC
function startGame(mode) {
    game.isBoss = false;
    game.index = 0;
    game.stats = { c: 0, w: 0, p: 0, streak: 0 };
    game.queue = [...data[mode]].sort(() => Math.random() - 0.5).slice(0, 20);
    document.getElementById('menu').classList.remove('active');
    document.getElementById('game').classList.add('active');
    document.getElementById('route-tracker').style.display = 'none';
    nextQuestion();
}

function startFlightPath() {
    game.isBoss = true;
    game.pathIndex = 0;
    game.stats = { c: 0, w: 0, p: 0, streak: 0 };
    let pool = [...data.domestic, ...data.intl].sort(() => Math.random() - 0.5);
    game.queue = pool.slice(0, 5);
    document.getElementById('menu').classList.remove('active');
    document.getElementById('game').classList.add('active');
    document.getElementById('route-tracker').style.display = 'block';
    renderPath();
}

function nextQuestion() {
    if (game.index >= game.queue.length) return finish();
    
    let q = game.queue[game.index];
    let isRev = document.getElementById('reverse-mode-toggle').checked;
    let isHard = document.getElementById('hard-mode-toggle').checked;
    
    document.getElementById('q-type-label').innerText = isRev ? "Code ➔ Name" : "Name ➔ Code";
    document.getElementById('question-text').innerText = isRev ? q.c : q.n;
    
    let correct = isRev ? q.n : q.c;
    let pool = isRev ? [...data.domestic, ...data.intl].map(x => x.n) : [...data.domestic, ...data.intl, ...data.airlines].map(x => x.c);
    let opts = [correct, ...pool.filter(x => x !== correct).sort(() => Math.random() - 0.5).slice(0, 3)].sort();
    
    const box = document.getElementById('choices');
    box.innerHTML = '';
    opts.forEach(o => {
        let btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = o;
        btn.onclick = () => check(o, correct, q);
        box.appendChild(btn);
    });
    
    startTimer(isHard ? 5 : 10);
}

function renderPath() {
    if (game.pathIndex >= 5) return finish();
    let q = game.queue[game.pathIndex];
    document.getElementById('question-text').innerText = `STEP ${game.pathIndex + 1}: ${q.n}`;
    
    let routeDisplay = game.queue.map((item, i) => {
        if (i < game.pathIndex) return `<span style="color:green">${item.c}</span>`;
        return i === game.pathIndex ? `<span style="background:#fde047">?</span>` : `<span>...</span>`;
    }).join(" ➔ ");
    document.getElementById('route-display').innerHTML = routeDisplay;

    let pool = [...data.domestic, ...data.intl].map(x => x.c);
    let opts = [q.c, ...pool.filter(x => x !== q.c).sort(() => Math.random() - 0.5).slice(0, 3)].sort();
    
    const box = document.getElementById('choices');
    box.innerHTML = '';
    opts.forEach(o => {
        let btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = o;
        btn.onclick = () => {
            if (o === q.c) {
                game.pathIndex++; game.stats.c++; game.stats.p += 50;
                renderPath();
            } else {
                alert("CRASH! Incorrect route step. Mission Failed.");
                location.reload();
            }
        };
        box.appendChild(btn);
    });
}

function startTimer(sec) {
    let left = sec;
    clearInterval(timer);
    timer = setInterval(() => {
        left -= 0.1;
        document.getElementById('timer-bar').style.width = (left / sec * 100) + "%";
        if (left <= 0) { clearInterval(timer); check(null, "TIMEOUT", game.queue[game.index]); }
    }, 100);
}

function check(ans, correct, raw) {
    clearInterval(timer);
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    
    if (ans === correct) {
        game.stats.c++; game.stats.streak++;
        let xp = document.getElementById('hard-mode-toggle').checked ? 20 : 10;
        career.xp += xp; game.stats.p += xp;
        career.weakSpots = career.weakSpots.filter(w => w.c !== raw.c);
        document.getElementById('msg').innerHTML = "<span style='color:green'>✔ Correct</span>";
    } else {
        game.stats.w++; game.stats.streak = 0;
        if (!career.weakSpots.some(w => w.c === raw.c)) career.weakSpots.push(raw);
        document.getElementById('msg').innerHTML = `<span style='color:red'>✘ It was ${correct}</span>`;
    }
    
    game.index++;
    document.getElementById('q-count').innerText = `${game.index}/20`;
    document.getElementById('streak-box').innerText = `🔥 ${game.stats.streak}`;
    document.getElementById('xp-display').innerText = `PTS: ${game.stats.p}`;
    setTimeout(nextQuestion, 1200);
}

function finish() {
    document.getElementById('game').classList.remove('active');
    document.getElementById('results').classList.add('active');
    let acc = Math.round((game.stats.c / (game.isBoss ? 5 : 20)) * 100);
    career.log.push({ m: game.isBoss ? 'Path' : 'Quiz', a: acc, p: game.stats.p });
    save();
    document.getElementById('rank-display').innerText = acc === 100 ? "🥇 ACE PILOT" : "👨‍✈️ DEBRIEF COMPLETE";
    document.getElementById('final-stats').innerHTML = `<div class='stat-card'><small>XP</small><b>+${game.stats.p}</b></div><div class='stat-card'><small>ACCURACY</small><b>${acc}%</b></div>`;
}

function showTab(t) {
    let p = document.getElementById('tab-content');
    if (t === 'log') p.innerHTML = career.log.slice(-3).reverse().map(l => `<div>${l.m}: ${l.a}% (+${l.p} XP)</div>`).join('') || "No flights.";
    else p.innerHTML = career.weakSpots.slice(0, 5).map(w => `<div>${w.n} (${w.c})</div>`).join('') || "No weak spots!";
}

window.onload = updateMenuUI;