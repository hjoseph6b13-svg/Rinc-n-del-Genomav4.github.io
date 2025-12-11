// Datos curiosos sobre genética
const funFacts = [
    "Si desenrollaras todo el ADN de tu cuerpo, llegaría desde la Tierra hasta el Sol ¡y de vuelta más de 300 veces!",
    "Los humanos compartimos aproximadamente el 60% de nuestro ADN con los plátanos. 🍌",
    "Tu cuerpo produce alrededor de 25 millones de nuevas células cada segundo.",
    "El ADN fue descubierto por primera vez en 1869 por el biólogo suizo Friedrich Miescher.",
    "Compartimos el 98.8% de nuestro ADN con los chimpancés. 🐒",
    "Cada célula de tu cuerpo contiene aproximadamente 2 metros de ADN enrollado.",
    "Tu código genético es 99.9% idéntico al de cualquier otra persona en el planeta. ¡Por eso todos somos una familia! 🌍",
    "Una sola célula humana contiene aproximadamente 6 mil millones de pares de bases de ADN.",
    "Las diferencias en nuestro color de piel, ojos y cabello se deben a variaciones mínimas en nuestro ADN.",
    "Todos los humanos actuales descendemos de ancestros que vivieron en África hace miles de años. 🌍",
    "El color de la piel se determina por la cantidad de melanina, una proteína codificada en nuestro ADN.",
    "Los ribosomas, que fabrican proteínas, son las máquinas moleculares más antiguas que existen."
];

// Código genético completo
const geneticCode = {
    'UUU': 'Phe', 'UUC': 'Phe', 'UUA': 'Leu', 'UUG': 'Leu',
    'UCU': 'Ser', 'UCC': 'Ser', 'UCA': 'Ser', 'UCG': 'Ser',
    'UAU': 'Tyr', 'UAC': 'Tyr', 'UAA': 'STOP', 'UAG': 'STOP',
    'UGU': 'Cys', 'UGC': 'Cys', 'UGA': 'STOP', 'UGG': 'Trp',
    
    'CUU': 'Leu', 'CUC': 'Leu', 'CUA': 'Leu', 'CUG': 'Leu',
    'CCU': 'Pro', 'CCC': 'Pro', 'CCA': 'Pro', 'CCG': 'Pro',
    'CAU': 'His', 'CAC': 'His', 'CAA': 'Gln', 'CAG': 'Gln',
    'CGU': 'Arg', 'CGC': 'Arg', 'CGA': 'Arg', 'CGG': 'Arg',
    
    'AUU': 'Ile', 'AUC': 'Ile', 'AUA': 'Ile', 'AUG': 'Met',
    'ACU': 'Thr', 'ACC': 'Thr', 'ACA': 'Thr', 'ACG': 'Thr',
    'AAU': 'Asn', 'AAC': 'Asn', 'AAA': 'Lys', 'AAG': 'Lys',
    'AGU': 'Ser', 'AGC': 'Ser', 'AGA': 'Arg', 'AGG': 'Arg',
    
    'GUU': 'Val', 'GUC': 'Val', 'GUA': 'Val', 'GUG': 'Val',
    'GCU': 'Ala', 'GCC': 'Ala', 'GCA': 'Ala', 'GCG': 'Ala',
    'GAU': 'Asp', 'GAC': 'Asp', 'GAA': 'Glu', 'GAG': 'Glu',
    'GGU': 'Gly', 'GGC': 'Gly', 'GGA': 'Gly', 'GGG': 'Gly'
};

// Nombres completos de aminoácidos
const aminoAcidNames = {
    'Phe': 'Fenilalanina', 'Leu': 'Leucina', 'Ser': 'Serina', 'Tyr': 'Tirosina',
    'Cys': 'Cisteína', 'Trp': 'Triptófano', 'Pro': 'Prolina', 'His': 'Histidina',
    'Gln': 'Glutamina', 'Arg': 'Arginina', 'Ile': 'Isoleucina', 'Met': 'Metionina',
    'Thr': 'Treonina', 'Asn': 'Asparagina', 'Lys': 'Lisina', 'Val': 'Valina',
    'Ala': 'Alanina', 'Asp': 'Aspartato', 'Glu': 'Glutamato', 'Gly': 'Glicina',
    'STOP': 'Terminación'
};

// Colores por tipo de aminoácido
const aminoAcidColors = {
    'Phe': '#95E1D3', 'Leu': '#95E1D3', 'Ile': '#95E1D3', 'Val': '#95E1D3', 'Met': '#95E1D3',
    'Ala': '#95E1D3', 'Gly': '#95E1D3', 'Pro': '#95E1D3', 'Trp': '#95E1D3',
    'Ser': '#4ECDC4', 'Thr': '#4ECDC4', 'Cys': '#4ECDC4', 'Tyr': '#4ECDC4', 'Asn': '#4ECDC4', 'Gln': '#4ECDC4',
    'Asp': '#FFB6B9', 'Glu': '#FFB6B9',
    'Lys': '#C7E9FF', 'Arg': '#C7E9FF', 'His': '#C7E9FF',
    'STOP': '#FFD93D'
};

// Datos para actividades de diversidad
const foodQuestions = [
    { food: 'Ceviche', region: 'Costa', emoji: '🐟' },
    { food: 'Pachamanca', region: 'Sierra', emoji: '🥔' },
    { food: 'Tacacho', region: 'Selva', emoji: '🍌' },
    { food: 'Rocoto Relleno', region: 'Sierra', emoji: '🌶️' },
    { food: 'Juane', region: 'Selva', emoji: '🍚' },
    { food: 'Parihuela', region: 'Costa', emoji: '🦐' }
];

let currentFoodQuestion = null;

// ============ TAB SYSTEM ============
function changeTab(tabId) {
    // Remove active class from all tabs and panes
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    
    // Add active class to selected tab and pane
    const selectedBtn = document.querySelector(`[data-tab="${tabId}"]`);
    const selectedPane = document.getElementById(`tab-${tabId}`);
    
    if (selectedBtn && selectedPane) {
        selectedBtn.classList.add('active');
        selectedPane.classList.add('active');
    }
    
    // Generate genetic code table if switching to that tab
    if (tabId === 'codigo') {
        generateGeneticCodeTable();
    }
}

// Initialize tabs
document.addEventListener('DOMContentLoaded', function() {
    // Add click listeners to tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            changeTab(tabId);
        });
    });
    
    // Initialize with random fact
    showRandomFact();
    
    // Generate genetic code table
    generateGeneticCodeTable();
});

// Fun Fact Generator
function showRandomFact() {
    const factText = document.getElementById('funFactText');
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    
    factText.style.opacity = '0';
    setTimeout(() => {
        factText.textContent = funFacts[randomIndex];
        factText.style.opacity = '1';
    }, 300);
}

// Generate Genetic Code Table
function generateGeneticCodeTable() {
    const tableContainer = document.getElementById('geneticTable');
    if (!tableContainer) return;

    const bases = ['U', 'C', 'A', 'G'];
    let html = '<div class="codon-grid">';

    for (let first of bases) {
        for (let second of bases) {
            for (let third of bases) {
                const codon = first + second + third;
                const amino = geneticCode[codon];
                const fullName = aminoAcidNames[amino];
                const color = aminoAcidColors[amino];
                
                html += `
                    <div class="codon-cell" style="background-color: ${color}20; border-color: ${color}" 
                         title="${fullName}">
                        <span class="codon-cell-code">${codon}</span>
                        <span class="codon-cell-amino">${amino}</span>
                    </div>
                `;
            }
        }
    }

    html += '</div>';
    tableContainer.innerHTML = html;
}

// Translation Simulation
function simulateTranslation() {
    const mrnaSeqs = [
        'AUG-UUU-GCA-UAA',
        'AUG-GGC-AAA-UGA',
        'AUG-CCC-UUA-UAG',
        'AUG-GUU-CAU-UAA'
    ];
    
    const randomMrna = mrnaSeqs[Math.floor(Math.random() * mrnaSeqs.length)];
    const codons = randomMrna.split('-');
    
    const simMrna = document.getElementById('simMrna');
    const simProtein = document.getElementById('simProtein');
    
    simMrna.textContent = randomMrna;
    simProtein.textContent = 'Traduciendo...';
    
    let proteinSequence = [];
    let index = 0;
    
    const interval = setInterval(() => {
        if (index < codons.length) {
            const codon = codons[index];
            const amino = geneticCode[codon];
            const fullName = aminoAcidNames[amino];
            
            if (amino === 'STOP') {
                proteinSequence.push(`[${amino}]`);
                clearInterval(interval);
                simProtein.textContent = proteinSequence.join(' - ') + ' ✓ Proteína completa';
            } else {
                proteinSequence.push(fullName);
                simProtein.textContent = proteinSequence.join(' - ') + '...';
            }
            index++;
        }
    }, 1000);
}

// ============ DIVERSITY ACTIVITIES ============

// Activity 1: Food Game
function startFoodGame() {
    const resultDiv = document.getElementById('foodGameResult');
    currentFoodQuestion = foodQuestions[Math.floor(Math.random() * foodQuestions.length)];
    
    resultDiv.innerHTML = `
        <h4>${currentFoodQuestion.emoji} ${currentFoodQuestion.food}</h4>
        <p>¿De qué región del Perú es este alimento?</p>
        <div style="display: flex; gap: 10px; justify-content: center; margin-top: 10px; flex-wrap: wrap;">
            <button onclick="checkFoodAnswer('Costa')" style="padding: 0.5rem 1rem; border: none; background: #4ECDC4; color: white; border-radius: 20px; cursor: pointer; font-weight: 600;">Costa 🌊</button>
            <button onclick="checkFoodAnswer('Sierra')" style="padding: 0.5rem 1rem; border: none; background: #96CEB4; color: white; border-radius: 20px; cursor: pointer; font-weight: 600;">Sierra ⛰️</button>
            <button onclick="checkFoodAnswer('Selva')" style="padding: 0.5rem 1rem; border: none; background: #95E1D3; color: white; border-radius: 20px; cursor: pointer; font-weight: 600;">Selva 🌴</button>
        </div>
    `;
}

function checkFoodAnswer(answer) {
    const resultDiv = document.getElementById('foodGameResult');
    
    if (answer === currentFoodQuestion.region) {
        resultDiv.innerHTML = `
            <div style="background: #95E1D3; padding: 1rem; border-radius: 8px; margin-top: 10px;">
                <p style="font-size: 1.2rem; font-weight: bold;">✅ ¡Correcto!</p>
                <p>${currentFoodQuestion.emoji} ${currentFoodQuestion.food} es de la ${currentFoodQuestion.region}</p>
                <p style="margin-top: 10px;">🧬 Cada región tiene alimentos diferentes porque tienen ecosistemas y climas distintos.</p>
                <button onclick="startFoodGame()" style="margin-top: 10px; padding: 0.5rem 1rem; border: none; background: #4ECDC4; color: white; border-radius: 20px; cursor: pointer; font-weight: 600;">Nuevo Juego</button>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div style="background: #FFB6B9; padding: 1rem; border-radius: 8px; margin-top: 10px;">
                <p style="font-size: 1.2rem; font-weight: bold;">❌ Intenta de nuevo</p>
                <p>${currentFoodQuestion.emoji} ${currentFoodQuestion.food} NO es de la ${answer}</p>
                <button onclick="startFoodGame()" style="margin-top: 10px; padding: 0.5rem 1rem; border: none; background: #4ECDC4; color: white; border-radius: 20px; cursor: pointer; font-weight: 600;">Intentar con otro alimento</button>
            </div>
        `;
    }
}

// Activity 2: Ecosystems
function showEcosystems() {
    const resultDiv = document.getElementById('ecosystemInfo');
    resultDiv.innerHTML = `
        <div style="text-align: left; line-height: 1.6;">
            <h4 style="margin-bottom: 10px;">🌍 Ecosistemas del Perú</h4>
            
            <div style="background: #C7E9FF; padding: 10px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🌊 Costa:</strong>
                <ul style="margin-left: 20px; margin-top: 5px;">
                    <li>Animales: Lobos marinos, pelícanos, anchovetas</li>
                    <li>Plantas: Algas marinas, totora</li>
                    <li>Clima: Seco, poca lluvia</li>
                </ul>
            </div>
            
            <div style="background: #95E1D3; padding: 10px; border-radius: 8px; margin-bottom: 10px;">
                <strong>⛰️ Sierra:</strong>
                <ul style="margin-left: 20px; margin-top: 5px;">
                    <li>Animales: Llamas, alpacas, cóndores, vicuñas</li>
                    <li>Plantas: Quinua, papa, maíz</li>
                    <li>Clima: Frío, con altitud</li>
                </ul>
            </div>
            
            <div style="background: #96CEB4; padding: 10px; border-radius: 8px;">
                <strong>🌴 Selva:</strong>
                <ul style="margin-left: 20px; margin-top: 5px;">
                    <li>Animales: Jaguares, guacamayos, monos, delfines rosados</li>
                    <li>Plantas: Árboles de caoba, plátano, cacao</li>
                    <li>Clima: Cálido y húmedo, mucha lluvia</li>
                </ul>
            </div>
            
            <p style="margin-top: 10px; font-weight: 600;">🧬 Cada especie tiene ADN adaptado a su ambiente específico.</p>
        </div>
    `;
}

// Activity 3: Melanin Explanation
function explainMelanin() {
    const resultDiv = document.getElementById('melaninInfo');
    resultDiv.innerHTML = `
        <div style="text-align: left; line-height: 1.7;">
            <h4 style="margin-bottom: 10px;">🎨 El ADN y el Color de Piel</h4>
            
            <p style="margin-bottom: 10px;">El color de nuestra piel depende de una proteína llamada <strong>melanina</strong>.</p>
            
            <div style="background: #FFE5CC; padding: 10px; border-radius: 8px; margin-bottom: 10px;">
                <strong>☀️ Piel más oscura:</strong>
                <ul style="margin-left: 20px; margin-top: 5px;">
                    <li>Más melanina</li>
                    <li>Protección natural contra el sol</li>
                    <li>Común en lugares cálidos y soleados</li>
                </ul>
            </div>
            
            <div style="background: #FFE5E5; padding: 10px; border-radius: 8px; margin-bottom: 10px;">
                <strong>❄️ Piel más clara:</strong>
                <ul style="margin-left: 20px; margin-top: 5px;">
                    <li>Menos melanina</li>
                    <li>Mejor absorción de vitamina D del sol</li>
                    <li>Común en lugares fríos con menos sol</li>
                </ul>
            </div>
            
            <div style="background: #C7E9FF; padding: 10px; border-radius: 8px;">
                <strong>🧬 ¿Cómo funciona?</strong>
                <p style="margin-top: 5px;">Nuestro ADN tiene genes que controlan cuánta melanina produce nuestro cuerpo. Estos genes se heredan de nuestros padres.</p>
            </div>
            
            <p style="margin-top: 10px; font-weight: 600; background: #95E1D3; padding: 10px; border-radius: 8px;">
                ❤️ <strong>Recuerda:</strong> Todos los colores de piel son hermosos y especiales. Son adaptaciones que desarrollaron nuestros ancestros hace miles de años.
            </p>
        </div>
    `;
}

// Activity 4: Diversity Map
function showDiversityMap() {
    const resultDiv = document.getElementById('mapInfo');
    resultDiv.innerHTML = `
        <div style="text-align: left; line-height: 1.7;">
            <h4 style="margin-bottom: 10px;">🌍 Mapa de la Diversidad Humana</h4>
            
            <div style="background: #FFF4E0; padding: 10px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🌞 Regiones Ecuatoriales (cerca del ecuador):</strong>
                <ul style="margin-left: 20px; margin-top: 5px;">
                    <li>Mucho sol durante todo el año</li>
                    <li>Piel más oscura (más melanina)</li>
                    <li>Ejemplos: África Central, Sur de Asia</li>
                </ul>
            </div>
            
            <div style="background: #E0F4FF; padding: 10px; border-radius: 8px; margin-bottom: 10px;">
                <strong>❄️ Regiones Polares (lejos del ecuador):</strong>
                <ul style="margin-left: 20px; margin-top: 5px;">
                    <li>Menos sol, especialmente en invierno</li>
                    <li>Piel más clara (menos melanina)</li>
                    <li>Ejemplos: Norte de Europa, Siberia</li>
                </ul>
            </div>
            
            <div style="background: #F0E8FF; padding: 10px; border-radius: 8px; margin-bottom: 10px;">
                <strong>🌤️ Regiones Intermedias:</strong>
                <ul style="margin-left: 20px; margin-top: 5px;">
                    <li>Sol moderado</li>
                    <li>Tonos de piel intermedios</li>
                    <li>Ejemplos: Mediterráneo, América del Sur</li>
                </ul>
            </div>
            
            <div style="background: #95E1D3; padding: 10px; border-radius: 8px;">
                <p><strong>🧬 Dato científico:</strong> Todos los humanos tenemos el mismo tipo de piel, solo varía la cantidad de melanina que produce. ¡Somos 99.9% iguales genéticamente!</p>
            </div>
            
            <p style="margin-top: 10px; font-weight: 600; text-align: center;">
                🌈 La diversidad humana es el resultado de miles de años de adaptación a diferentes ambientes.
            </p>
        </div>
    `;
}

// Console welcome message
console.log('%c¡Bienvenido a El Rincón del Genoma!', 'color: #4ECDC4; font-size: 20px; font-weight: bold;');
console.log('%cExplora el fascinante mundo de la genética molecular y la diversidad', 'color: #45B7D1; font-size: 14px;');
console.log('%cADN → ARN → Proteínas → Diversidad 🌍', 'color: #96CEB4; font-size: 12px;');