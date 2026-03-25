const data = {
    domestic: [
        {"c": "AGR", "n": "Agra Airport, Uttar Pradesh"}, {"c": "AGX", "n": "Agatti, Lakshadweep"}, {"c": "AJL", "n": "Aizawl Airport, Mizoram"}, {"c": "AMD", "n": "Ahmedabad, Gujarat"}, {"c": "ATQ", "n": "Amritsar, Punjab"}, {"c": "AYJ", "n": "Ayodhya, Uttar Pradesh"}, {"c": "BBI", "n": "Bhubaneswar, Odisha"}, {"c": "BDQ", "n": "Vadodara, Gujarat"}, {"c": "BEK", "n": "Rae Bareli, Uttar Pradesh"}, {"c": "BHJ", "n": "Bhuj, Gujarat"}, {"c": "BHO", "n": "Bhopal, Madhya Pradesh"}, {"c": "BHU", "n": "Bhavnagar, Gujarat"}, {"c": "BLR", "n": "Bengaluru, Karnataka"}, {"c": "BOM", "n": "Mumbai, Maharashtra"}, {"c": "CCJ", "n": "Calicut, Kerala"}, {"c": "CCU", "n": "Kolkata, West Bengal"}, {"c": "CJB", "n": "Coimbatore, Tamil Nadu"}, {"c": "CNN", "n": "Kannur, Tamil Nadu"}, {"c": "COK", "n": "Kochi, Kerala"}, {"c": "DBR", "n": "Dibrugarh, Assam"}, {"c": "DED", "n": "Dehradun, Uttarakhand"}, {"c": "DEL", "n": "IG Airport, Delhi"}, {"c": "DGH", "n": "Deoghar, Jharkhand"}, {"c": "DHM", "n": "Dharamshala, Himachal Pradesh"}, {"c": "DIB", "n": "Dibrugarh, Assam"}, {"c": "DIU", "n": "Diu, Daman and Diu"}, {"c": "DMU", "n": "Dimapur, Nagaland"}, {"c": "GAU", "n": "Guwahati, Assam"}, {"c": "GAY", "n": "Gaya, Bihar"}, {"c": "GDB", "n": "Gondia, Maharashtra"}, {"c": "GOI", "n": "Dabolim Airport, Goa"}, {"c": "GOP", "n": "Gorakhpur, Uttar Pradesh"}, {"c": "GOX", "n": "Mopa, Goa"}, {"c": "GWL", "n": "Gwalior, Madhya Pradesh"}, {"c": "HBX", "n": "Hubli, Karnataka"}, {"c": "HDO", "n": "Ghaziabad, Uttar Pradesh"}, {"c": "HGI", "n": "Itanagar, Arunachal Pradesh"}, {"c": "HJR", "n": "Khajuraho, Madhya Pradesh"}, {"c": "HYD", "n": "Hyderabad, Telangana"}, {"c": "IDR", "n": "Indore, Madhya Pradesh"}, {"c": "IMF", "n": "Imphal, Manipur"}, {"c": "ISK", "n": "Nashik, Maharashtra"}, {"c": "IXA", "n": "Agartala, Tripura"}, {"c": "IXB", "n": "Siliguri, West Bengal"}, {"c": "IXC", "n": "Chandigarh"}, {"c": "IXD", "n": "Prayagraj, Uttar Pradesh"}, {"c": "IXE", "n": "Mangalore, Karnataka"}, {"c": "IXG", "n": "Belgaum, Karnataka"}, {"c": "IXI", "n": "Lilabari, Assam"}, {"c": "IXJ", "n": "Jammu, Jammu & Kashmir"}, {"c": "IXL", "n": "Leh, Ladakh"}, {"c": "IXM", "n": "Madurai, Tamil Nadu"}, {"c": "IXR", "n": "Ranchi, Jharkhand"}, {"c": "IXS", "n": "Silchar, Assam"}, {"c": "IXU", "n": "Aurangabad, Maharashtra"}, {"c": "IXY", "n": "Kandla, Gujarat"}, {"c": "IXZ", "n": "Port Blair, Andaman and Nicobar Islands"}, {"c": "JAI", "n": "Jaipur, Rajasthan"}, {"c": "JDH", "n": "Jodhpur, Rajasthan"}, {"c": "JGB", "n": "Jagdalpur, Chhattisgarh"}, {"c": "JLR", "n": "Jabalpur, Madhya Pradesh"}, {"c": "JRG", "n": "Jharsuguda, Odisha"}, {"c": "JRH", "n": "Jorhat, Assam"}, {"c": "JSA", "n": "Jaisalmer, Rajasthan"}, {"c": "KBK", "n": "Kushinagar, Uttar Pradesh"}, {"c": "KJB", "n": "Kurnool, Andhra Pradesh"}, {"c": "KLH", "n": "Kolhapur, Maharashtra"}, {"c": "KNU", "n": "Kanpur, Uttar Pradesh"}, {"c": "KQH", "n": "Kishangarh, Rajasthan"}, {"c": "LKO", "n": "Lucknow, Uttar Pradesh"}, {"c": "MAA", "n": "Chennai, Tamil Nadu"}, {"c": "MYQ", "n": "Mysore, Karnataka"}, {"c": "NAG", "n": "Nagpur, Maharashtra"}, {"c": "PAT", "n": "Patna, Bihar"}, {"c": "PBD", "n": "Porbandar, Gujarat"}, {"c": "PGH", "n": "Pantnagar, Uttarakhand"}, {"c": "PNQ", "n": "Pune, Maharashtra"}, {"c": "PNY", "n": "Pondicherry"}, {"c": "RAJ", "n": "Rajkot, Gujarat"}, {"c": "RDP", "n": "Durgapur, West Bengal"}, {"c": "RJA", "n": "Rajahmundry, Andhra Pradesh"}, {"c": "RPR", "n": "Raipur, Chhattisgarh"}, {"c": "RQY", "n": "Shivamogga, Karnataka"}, {"c": "SAG", "n": "Shirdi, Maharashtra"}, {"c": "SHL", "n": "Shillong, Meghalaya"}, {"c": "SLM", "n": "Salem, Tamil Nadu"}, {"c": "STV", "n": "Surat, Gujarat"}, {"c": "SXR", "n": "Srinagar, Jammu & Kashmir"}, {"c": "TCR", "n": "Tuticorin, Tamil Nadu"}, {"c": "TIR", "n": "Tirupati, Andhra Pradesh"}, {"c": "TRV", "n": "Trivandrum, Kerala"}, {"c": "TRZ", "n": "Trichy, Tamil Nadu"}, {"c": "UDR", "n": "Udaipur, Rajasthan"}, {"c": "VGA", "n": "Vijayawada, Andhra Pradesh"}, {"c": "VNS", "n": "Varanasi, Uttar Pradesh"}, {"c": "VTZ", "n": "Visakhapatnam, Andhra Pradesh"}
    ],
    intl: [
        {"c": "ATL", "n": "Hartsfield-Jackson Atlanta International Airport"}, {"c": "DXB", "n": "Dubai International Airport"}, {"c": "DFW", "n": "Dallas/Fort Worth International Airport"}, {"c": "HND", "n": "Tokyo Haneda Airport"}, {"c": "LHR", "n": "London Heathrow Airport"}, {"c": "DEN", "n": "Denver International Airport"}, {"c": "IST", "n": "Istanbul Airport"}, {"c": "ORD", "n": "O'Hare International Airport (Chicago)"}, {"c": "DEL", "n": "Indira Gandhi International Airport (Delhi)"}, {"c": "PVG", "n": "Shanghai Pudong International Airport"}, {"c": "LAX", "n": "Los Angeles International Airport"}, {"c": "CAN", "n": "Guangzhou Baiyun International Airport"}, {"c": "JFK", "n": "John F. Kennedy International Airport (New York)"}, {"c": "AMS", "n": "Amsterdam Airport Schiphol"}, {"c": "MAD", "n": "Madrid-Barajas Adolfo Suárez Airport"}, {"c": "FRA", "n": "Frankfurt Airport"}, {"c": "ICN", "n": "Seoul Incheon International Airport"}, {"c": "SIN", "n": "Singapore Changi Airport"}, {"c": "BCN", "n": "Barcelona-El Prat Airport"}, {"c": "MIA", "n": "Miami International Airport"}, {"c": "YYZ", "n": "Toronto Pearson International Airport"}, {"c": "PEK", "n": "Beijing Capital International Airport"}, {"c": "CLT", "n": "Charlotte Douglas International Airport"}, {"c": "PHX", "n": "Phoenix Sky Harbor International Airport"}, {"c": "IAH", "n": "Houston George Bush Intercontinental Airport"}, {"c": "EWR", "n": "Newark Liberty International Airport"}, {"c": "SEA", "n": "Seattle-Tacoma International Airport"}, {"c": "LGW", "n": "London Gatwick Airport"}, {"c": "GRU", "n": "São Paulo–Guarulhos International Airport"}, {"c": "BOS", "n": "Boston Logan International Airport"}, {"c": "MUC", "n": "Munich Airport"}, {"c": "LAS", "n": "Las Vegas Harry Reid International Airport"}, {"c": "SZX", "n": "Shenzhen Bao’an International Airport"}, {"c": "MEX", "n": "Mexico City International Airport"}, {"c": "PKX", "n": "Beijing Daxing International Airport"}, {"c": "SHA", "n": "Shanghai Hongqiao International Airport"}, {"c": "OSL", "n": "Oslo Gardermoen Airport"}, {"c": "ZRH", "n": "Zurich Airport"}, {"c": "CPH", "n": "Copenhagen Airport"}, {"c": "FCO", "n": "Rome Fiumicino Airport"}, {"c": "VIE", "n": "Vienna International Airport"}, {"c": "LIS", "n": "Lisbon Portela Airport"}, {"c": "DOH", "n": "Doha Hamad International Airport"}, {"c": "BKK", "n": "Suvarnabhumi Airport"}, {"c": "KUL", "n": "Kuala Lumpur International Airport"}, {"c": "HKG", "n": "Hong Kong International Airport"}, {"c": "MEL", "n": "Melbourne Airport"}, {"c": "SYD", "n": "Sydney Kingsford Smith Airport"}, {"c": "AKL", "n": "Auckland Airport"}
    ],
    airlines: [
        {"c": "EK", "n": "Emirates"}, {"c": "JL", "n": "Japan Airlines"}, {"c": "SQ", "n": "Singapore Airlines"}, {"c": "LH", "n": "Lufthansa"}, {"c": "AT", "n": "Royal Air Maroc"}, {"c": "BA", "n": "British Airways"}, {"c": "QR", "n": "Qatar Airways"}, {"c": "CX", "n": "Cathay Pacific"}, {"c": "KE", "n": "Korean Air"}, {"c": "NH", "n": "All Nippon Airways (ANA)"}, {"c": "BR", "n": "EVA Air"}, {"c": "AY", "n": "Finnair"}, {"c": "TG", "n": "Thai Airways"}, {"c": "VN", "n": "Vietnam Airlines"}, {"c": "MH", "n": "Malaysia Airlines"}, {"c": "WY", "n": "Oman Air"}, {"c": "TK", "n": "Turkish Airlines"}, {"c": "EY", "n": "Etihad Airways"}, {"c": "OZ", "n": "Asiana Airlines"}, {"c": "K6", "n": "Air Cambodia"}, {"c": "AZ", "n": "ITA Airways"}, {"c": "G9", "n": "Air Arabia"}, {"c": "AK", "n": "AirAsia"}, {"c": "KC", "n": "Air Astana"}, {"c": "AC", "n": "Air Canada"}, {"c": "CA", "n": "Air China"}, {"c": "AF", "n": "Air France"}, {"c": "AI", "n": "Air India"}, {"c": "MK", "n": "Air Mauritius"}, {"c": "HM", "n": "Air Seychelles"}, {"c": "TC", "n": "Air Tanzania"}, {"c": "QP", "n": "Akasa Air"}, {"c": "AA", "n": "American Airlines"}, {"c": "OS", "n": "Austrian Airlines"}, {"c": "OD", "n": "Batik Air Malaysia"}, {"c": "SN", "n": "Brussels Airlines"}, {"c": "CI", "n": "China Airlines"}, {"c": "DL", "n": "Delta Air Lines"}, {"c": "KB", "n": "Druk Air"}, {"c": "MS", "n": "EgyptAir"}, {"c": "LY", "n": "El Al Airlines"}, {"c": "ET", "n": "Ethiopian Airlines"}, {"c": "FJ", "n": "Fiji Airways"}, {"c": "W2", "n": "FlexFlight"}, {"c": "S9", "n": "FlyBig"}, {"c": "FZ", "n": "flydubai"}, {"c": "XY", "n": "Flynas"}, {"c": "GF", "n": "Gulf Air"}, {"c": "HR", "n": "Hahn Air"}, {"c": "6E", "n": "IndiGo"}, {"c": "J9", "n": "Jazeera Airways"}, {"c": "JQ", "n": "Jetstar"}, {"c": "KQ", "n": "Kenya Airways"}, {"c": "KU", "n": "Kuwait Airways"}, {"c": "JJ", "n": "LATAM Airlines Brasil"}, {"c": "LO", "n": "LOT Polish Airlines"}, {"c": "8M", "n": "Myanmar Airways Intl"}, {"c": "NO", "n": "Neos S.p.A"}, {"c": "NZ", "n": "Air New Zealand"}, {"c": "QF", "n": "Qantas"}, {"c": "RJ", "n": "Royal Jordanian"}, {"c": "RA", "n": "Royal Nepal"}, {"c": "WB", "n": "RwandAir"}, {"c": "OV", "n": "SalamAir"}, {"c": "SK", "n": "Scandinavian Airlines (SAS)"}, {"c": "TR", "n": "Scoot"}, {"c": "SA", "n": "South African Airways"}, {"c": "UL", "n": "SriLankan"}, {"c": "9I", "n": "Alliance Air"}, {"c": "SL", "n": "Thai Lion"}, {"c": "UK", "n": "Vistara"}, {"c": "VS", "n": "Virgin Atlantic"}, {"c": "UA", "n": "United Airlines"}, {"c": "US", "n": "US Airways"}
    ]
};

let gameQueue = [];
let currentMode = 'domestic';
let stats = { tq: 0, c: 0, w: 0, p: 0 };
let currentQuestion = {};
let timerInterval;
let timeLeft = 10;
const MAX_QUESTIONS = 20;

// Helper to shuffle any array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function searchEngine() {
    let input = document.getElementById('search-input').value.toUpperCase().trim();
    let res = document.getElementById('search-results');
    if (input.length < 2) { res.innerHTML = ""; return; }
    const all = [...data.domestic, ...data.intl, ...data.airlines];
    let match = all.find(a => a.c === input) || all.find(a => a.n.toUpperCase().includes(input));
    if (match) { 
        res.innerHTML = `<div style="color:#2c3e50; padding:12px; background:#e1f5fe; border-radius:8px; border-left: 5px solid #3498db; text-align: left;">
            <small style="color:#3498db; font-weight:bold; display:block; font-size: 0.7em;">IDENTIFIED</small>
            <b>${match.c}</b> — ${match.n}</div>`; 
    } else { 
        res.innerHTML = "<div style='color:#e74c3c; padding:8px; font-size:0.85em;'>❌ No match found</div>"; 
    }
}

function startGame(mode) {
    stats = { tq: 0, c: 0, w: 0, p: 0 };
    currentMode = mode;
    
    // NO-REPEAT FIX: Create a shuffled queue of the selected data
    gameQueue = shuffle([...data[mode]]);
    
    document.getElementById('menu').classList.remove('active');
    document.getElementById('game').classList.add('active');
    document.getElementById('timer-container').style.display = "block";
    
    let labels = { 'domestic': 'Indian Airport', 'intl': 'International Airport', 'airlines': 'Airline Carrier' };
    document.getElementById('mode-label').innerText = labels[mode];
    
    updateUI();
    nextQuestion();
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 10;
    updateTimerBar();
    timerInterval = setInterval(() => {
        timeLeft -= 0.1;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswer(null); 
        }
        updateTimerBar();
    }, 100);
}

function updateTimerBar() {
    const percentage = (timeLeft / 10) * 100;
    document.getElementById('timer-bar').style.width = percentage + "%";
}

function nextQuestion() {
    if (stats.tq >= MAX_QUESTIONS || stats.tq >= gameQueue.length) {
        showResults();
        return;
    }

    document.getElementById('msg').innerText = "";
    
    // Pull the next item from our unique shuffled queue
    currentQuestion = gameQueue[stats.tq]; 
    document.getElementById('question-text').innerText = currentQuestion.n;
    
    // Generate 3 random wrong answers from the full dataset
    let source = data[currentMode];
    let options = [currentQuestion.c];
    while(options.length < 4) {
        let r = source[Math.floor(Math.random() * source.length)].c;
        if(!options.includes(r)) options.push(r);
    }
    options = shuffle(options);

    const box = document.getElementById('choices');
    box.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = "option-btn";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt);
        box.appendChild(btn);
    });
    startTimer();
}

function checkAnswer(selected) {
    clearInterval(timerInterval);
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    stats.tq++; 
    
    if(selected === currentQuestion.c) {
        try { document.getElementById('snd-correct').play(); } catch(e){}
        document.getElementById('msg').innerHTML = "<span style='color:green'>Correct! ✅</span>";
        stats.c++; stats.p += 10;
    } else {
        try { document.getElementById('snd-wrong').play(); } catch(e){}
        let revealMsg = selected === null ? "Time Out!" : "Wrong!";
        document.getElementById('msg').innerHTML = `<span style='color:red; font-size: 0.9em;'>${revealMsg} It was ${currentQuestion.c}</span>`;
        stats.w++;
    }
    
    updateUI();
    setTimeout(nextQuestion, 3000); 
}

function showResults() {
    document.getElementById('game').classList.remove('active');
    document.getElementById('results').classList.add('active');
    
    const accuracy = Math.round((stats.c / stats.tq) * 100);
    let rank = "";
    
    if (accuracy === 100) rank = "🏆 SENIOR CAPTAIN";
    else if (accuracy >= 90) rank = "👨‍✈️ CAPTAIN";
    else if (accuracy >= 75) rank = "✈️ FIRST OFFICER";
    else if (accuracy >= 50) rank = "🛩️ CADET PILOT";
    else rank = "👨‍🔧 GROUND CREW";

    document.getElementById('rank-display').innerText = rank;
    document.getElementById('final-stats').innerHTML = `
        <div class="stat-card"><small>Total Score</small><b>${stats.p}</b></div>
        <div class="stat-card"><small>Accuracy</small><b>${accuracy}%</b></div>
        <div class="stat-card"><small>Correct</small><b>${stats.c}</b></div>
        <div class="stat-card"><small>Mistakes</small><b>${stats.w}</b></div>
    `;
}

function updateUI() {
    document.getElementById('tq').innerText = stats.tq;
    document.getElementById('correct').innerText = stats.c;
    document.getElementById('score').innerText = stats.p;
}