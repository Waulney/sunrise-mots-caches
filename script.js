/* ==========================================================================
   SUNRISE AIRWAYS - MOTS CACHÉS AVIATION (SCRIPT JS TACTILE & MULTILINGUE)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // --- TRADUCTIONS DES INTERFACES ET TEXTES DU JEU ---
  const TRANSLATIONS = {
    fr: {
      titleText: "MOTS CACHÉS",
      sloganText: "Apprendre en jouant • Learn through play • Aprender jugando",
      langLabel: "Langue :",
      levelLabel: "Niveau :",
      restartBtn: "Recommencer",
      themeDark: "Mode Sombre",
      themeLight: "Mode Clair",
      wordsFoundLabel: "MOTS :",
      timeLabel: "TEMPS :",
      instructions: "<strong>Règle :</strong> Glissez votre doigt ou cliquez de la première à la dernière lettre d'un mot pour le valider. Découvrez les 20 niveaux thématiques dans la langue de votre choix !",
      winMsg: "Félicitations ! Niveau terminé en {time} !\nVoulez-vous passer au niveau suivant ?",
      gameCompleteMsg: "Bravo ! Vous avez complété tous les 20 niveaux de Sunrise Airways !"
    },
    en: {
      titleText: "WORD SEARCH",
      sloganText: "Learn through play • Apprendre en jouant • Aprender jugando",
      langLabel: "Language:",
      levelLabel: "Level:",
      restartBtn: "Restart",
      themeDark: "Dark Mode",
      themeLight: "Light Mode",
      wordsFoundLabel: "WORDS:",
      timeLabel: "TIME:",
      instructions: "<strong>Rule:</strong> Drag your finger or click from the first to the last letter of a word to select it. Explore all 20 aviation levels in your preferred language!",
      winMsg: "Congratulations! Level completed in {time}!\nDo you want to proceed to the next level?",
      gameCompleteMsg: "Bravo! You completed all 20 levels of Sunrise Airways!"
    },
    es: {
      titleText: "SOPA DE LETRAS",
      sloganText: "Aprender jugando • Apprendre en jouant • Learn through play",
      langLabel: "Idioma:",
      levelLabel: "Nivel:",
      restartBtn: "Reiniciar",
      themeDark: "Modo Oscuro",
      themeLight: "Modo Claro",
      wordsFoundLabel: "PALABRAS:",
      timeLabel: "TIEMPO:",
      instructions: "<strong>Regla:</strong> Desliza tu dedo o haz clic desde la primera hasta la última letra de una palabra para validarla. ¡Descubre los 20 niveles temáticos en el idioma que prefieras!",
      winMsg: "¡Felicidades! ¡Nivel completado en {time}!\n¿Quieres pasar al siguiente nivel?",
      gameCompleteMsg: "¡Bravo! ¡Has completado los 20 niveles de Sunrise Airways!"
    }
  };

  // --- BASE DE DONNÉES DES 20 NIVEAUX (3 LANGUES) ---
  const LEVELS = [
    {
      id: 1,
      title: { fr: "Niveau 1 : Personnel de Bord", en: "Level 1: Flight Crew", es: "Nivel 1: Tripulación de Vuelo" },
      words: {
        fr: ["PILOTE", "COPILOTE", "HOTESSE", "STEWARD", "CAPITAINE", "EQUIPAGE", "CABINE", "INSTRUCTEUR"],
        en: ["PILOT", "COPILOT", "ATTENDANT", "STEWARD", "CAPTAIN", "CREW", "CABIN", "INSTRUCTOR"],
        es: ["PILOTO", "COPILOTO", "AZAFATA", "STUART", "CAPITAN", "TRIPULACION", "CABINA", "INSTRUCTOR"]
      }
    },
    {
      id: 2,
      title: { fr: "Niveau 2 : Types d'Aéronefs", en: "Level 2: Aircraft Types", es: "Nivel 2: Tipos de Aeronaves" },
      words: {
        fr: ["AVION", "HELICO", "BOEING", "AIRBUS", "BOMBARDIER", "JET", "CESSNA", "BIPLACE"],
        en: ["PLANE", "HELICOPTER", "BOEING", "AIRBUS", "BOMBARDIER", "JET", "CESSNA", "BIPLANE"],
        es: ["AVION", "HELICOPTERO", "BOEING", "AIRBUS", "BOMBARDIER", "JET", "CESSNA", "BIPLAZA"]
      }
    },
    {
      id: 3,
      title: { fr: "Niveau 3 : Parties de l'Avion", en: "Level 3: Airplane Parts", es: "Nivel 3: Partes del Avión" },
      words: {
        fr: ["AILE", "COCKPIT", "REACTEUR", "FUSELAGE", "HUBLOT", "ROUE", "TRAIN", "EMPENAGE"],
        en: ["WING", "COCKPIT", "ENGINE", "FUSELAGE", "WINDOW", "WHEEL", "GEAR", "TAIL"],
        es: ["ALA", "CABINA", "MOTOR", "FUSELAJE", "VENTANILLA", "RUEDA", "TREN", "ALERON"]
      }
    },
    {
      id: 4,
      title: { fr: "Niveau 4 : À l'Aéroport", en: "Level 4: At the Airport", es: "Nivel 4: En el Aeropuerto" },
      words: {
        fr: ["TERMINAL", "PISTE", "PORTE", "BAGAGE", "ENREGISTRE", "DOUANE", "TARMAC", "CONTROLE"],
        en: ["TERMINAL", "RUNWAY", "GATE", "BAGGAGE", "CHECKIN", "CUSTOMS", "TARMAC", "CONTROL"],
        es: ["TERMINAL", "PISTA", "PUERTA", "EQUIPAJE", "CHECKIN", "ADUANA", "TARMAC", "CONTROL"]
      }
    },
    {
      id: 5,
      title: { fr: "Niveau 5 : Sécurité & Secours", en: "Level 5: Safety & Rescue", es: "Nivel 5: Seguridad y Rescate" },
      words: {
        fr: ["GILET", "MASQUE", "OXYGENE", "SECOURS", "EVACUER", "CEINTURE", "BALISE", "RADAR"],
        en: ["VEST", "MASK", "OXYGEN", "RESCUE", "EVACUATE", "BELT", "BEACON", "RADAR"],
        es: ["CHALECO", "MASCARA", "OXIGENO", "SOCORRO", "EVACUAR", "CINTURON", "BALIZA", "RADAR"]
      }
    },
    {
      id: 6,
      title: { fr: "Niveau 6 : Navigation Aérienne", en: "Level 6: Air Navigation", es: "Nivel 6: Navegación Aérea" },
      words: {
        fr: ["CAP", "ALTITUDE", "VITESSE", "ROUTE", "CARTE", "GPS", "HEMISPHERE", "HORIZON"],
        en: ["HEADING", "ALTITUDE", "SPEED", "ROUTE", "MAP", "GPS", "HEMISPHERE", "HORIZON"],
        es: ["RUMBO", "ALTITUD", "VELOCIDAD", "RUTA", "MAPA", "GPS", "HEMISFERIO", "HORIZONTE"]
      }
    },
    {
      id: 7,
      title: { fr: "Niveau 7 : Météo Aviation", en: "Level 7: Aviation Weather", es: "Nivel 7: Meteorología Aérea" },
      words: {
        fr: ["VENT", "NUAGE", "ORAGE", "GIVRE", "BROUILLARD", "PLUIE", "TURBULENCE", "TEMPETE"],
        en: ["WIND", "CLOUD", "STORM", "ICE", "FOG", "RAIN", "TURBULENCE", "TEMPEST"],
        es: ["VIENTO", "NUBE", "TORMENTA", "HIELO", "NIEBLA", "LLUVIA", "TURBULENCIA", "TEMPESTAD"]
      }
    },
    {
      id: 8,
      title: { fr: "Niveau 8 : Communications", en: "Level 8: Communications", es: "Nivel 8: Comunicaciones" },
      words: {
        fr: ["RADIO", "FREQUENCE", "ROGER", "MAYDAY", "PANPAN", "TOUR", "ANTENNE", "SIGNAL"],
        en: ["RADIO", "FREQUENCY", "ROGER", "MAYDAY", "PANPAN", "TOWER", "ANTENNA", "SIGNAL"],
        es: ["RADIO", "FRECUENCIA", "ROGER", "MAYDAY", "PANPAN", "TORRE", "ANTENA", "SENAL"]
      }
    },
    {
      id: 9,
      title: { fr: "Niveau 9 : Phases de Vol", en: "Level 9: Flight Phases", es: "Nivel 9: Fases del Vuelo" },
      words: {
        fr: ["DECOLLAGE", "MONTEE", "CROISIERE", "DESCENTE", "APPROCHE", "ATTERISSAGE", "ROULAGE", "ATTENTE"],
        en: ["TAKEOFF", "CLIMB", "CRUISE", "DESCENT", "APPROACH", "LANDING", "TAXI", "HOLDING"],
        es: ["DESPEGUE", "ASCENSO", "CRUCERO", "DESCENSO", "APROXIMACION", "ATERRIZAJE", "RODAJE", "ESPERA"]
      }
    },
    {
      id: 10,
      title: { fr: "Niveau 10 : Destinations Sunrise", en: "Level 10: Sunrise Destinations", es: "Nivel 10: Destinos Sunrise" },
      words: {
        fr: ["HAITI", "MIAMI", "CUBA", "DOMINIQUE", "PANAMA", "CARAIBES", "SANTO", "SANJUAN"],
        en: ["HAITI", "MIAMI", "CUBA", "DOMINICA", "PANAMA", "CARIBBEAN", "SANTO", "SANJUAN"],
        es: ["HAITI", "MIAMI", "CUBA", "DOMINICA", "PANAMA", "CARIBE", "SANTO", "SANJUAN"]
      }
    },
    {
      id: 11,
      title: { fr: "Niveau 11 : En Cabine", en: "Level 11: Inside the Cabin", es: "Nivel 11: En Cabina" },
      words: {
        fr: ["SIEGE", "TABLETTE", "RIDEAU", "CHARIOT", "REPAS", "CASQUE", "ECRAN", "CLASSE"],
        en: ["SEAT", "TRAY", "CURTAIN", "CART", "MEAL", "HEADSET", "SCREEN", "CLASS"],
        es: ["ASIENTO", "BANDEJA", "CORTINA", "CARRITO", "COMIDA", "AUDIFONOS", "PANTALLA", "CLASE"]
      }
    },
    {
      id: 12,
      title: { fr: "Niveau 12 : Opérations au Sol", en: "Level 12: Ground Operations", es: "Nivel 12: Operaciones en Tierra" },
      words: {
        fr: ["TRACTEUR", "PASSERELLE", "CARBURANT", "CARGO", "CALE", "NETTOYAGE", "GUIDAGE", "INSPECTION"],
        en: ["TRACTOR", "JETBRIDGE", "FUEL", "CARGO", "CHOCK", "CLEANING", "MARSHAL", "INSPECTION"],
        es: ["TRACTOR", "PASARELA", "COMBUSTIBLE", "CARGA", "CALZO", "LIMPIEZA", "GUIA", "INSPECCION"]
      }
    },
    {
      id: 13,
      title: { fr: "Niveau 13 : Documents & Billet", en: "Level 13: Travel Documents", es: "Nivel 13: Documentos y Billete" },
      words: {
        fr: ["PASSEPORT", "BILLET", "VISA", "PIECE", "TICKET", "RESERVATION", "ECHANGE", "VOL"],
        en: ["PASSPORT", "TICKET", "VISA", "IDENTITY", "BOARDING", "BOOKING", "EXCHANGE", "FLIGHT"],
        es: ["PASAPORTE", "BILLETE", "VISADO", "CEDULA", "BOLETO", "RESERVA", "CAMBIO", "VUELO"]
      }
    },
    {
      id: 14,
      title: { fr: "Niveau 14 : Instruments de Bord", en: "Level 14: Cockpit Instruments", es: "Nivel 14: Instrumentos de Vuelo" },
      words: {
        fr: ["ALTIMETRE", "COMPAS", "VARIO", "AEROFREIN", "GYROSCOPE", "MOTEUR", "CADRAN", "ECRAN"],
        en: ["ALTIMETER", "COMPASS", "VARIO", "AIRBRAKE", "GYROSCOPE", "ENGINE", "DIAL", "SCREEN"],
        es: ["ALTIMETRO", "BRUJULA", "VARIO", "AEROFRENO", "GIROSCOPIO", "MOTOR", "ESCALA", "PANTALLA"]
      }
    },
    {
      id: 15,
      title: { fr: "Niveau 15 : Métiers de l'Aviation", en: "Level 15: Aviation Jobs", es: "Nivel 15: Profesiones de Aviación" },
      words: {
        fr: ["AIGUILLEUR", "MECANICIEN", "AGENT", "PISTEUR", "CONVOYEUR", "CHEF", "DOUANIER", "INGENIEUR"],
        en: ["CONTROLLER", "MECHANIC", "AGENT", "MARSHAL", "DISPATCHER", "CHIEF", "OFFICER", "ENGINEER"],
        es: ["CONTROLADOR", "MECANICO", "AGENTE", "PISTERO", "DESPACHADOR", "JEFE", "ADUANERO", "INGENIERO"]
      }
    },
    {
      id: 16,
      title: { fr: "Niveau 16 : Termes Techniques", en: "Level 16: Technical Terms", es: "Nivel 16: Términos Técnicos" },
      words: {
        fr: ["TRAINEE", "PORTANCE", "POURSEE", "POIDS", "MACH", "PORTANT", "STABILITE", "PITCH"],
        en: ["DRAG", "LIFT", "THRUST", "WEIGHT", "MACH", "BEARING", "STABILITY", "PITCH"],
        es: ["ARRASTRE", "SUSTENTACION", "EMPUJE", "PESO", "MACH", "PORTANTE", "ESTABILIDAD", "PITCH"]
      }
    },
    {
      id: 17,
      title: { fr: "Niveau 17 : Histoire de l'Aviation", en: "Level 17: Aviation History", es: "Nivel 17: Historia de la Aviación" },
      words: {
        fr: ["AMELIA", "WRIGHT", "BLERIOT", "CONCORDE", "ZEPPELIN", "EPERVIER", "PIONNIER", "HELICE"],
        en: ["AMELIA", "WRIGHT", "BLERIOT", "CONCORDE", "ZEPPELIN", "HAWK", "PIONEER", "PROPELLER"],
        es: ["AMELIA", "WRIGHT", "BLERIOT", "CONCORDE", "ZEPPELIN", "GAVILAN", "MAMUT", "HELICE"]
      }
    },
    {
      id: 18,
      title: { fr: "Niveau 18 : Aéroports du Monde", en: "Level 18: World Airports", es: "Nivel 18: Aeropuertos del Mundo" },
      words: {
        fr: ["ORLY", "ROISSY", "KENNEDY", "MIAMI", "DUBAI", "HEATHROW", "PAP", "CAP"],
        en: ["ORLY", "ROISSY", "KENNEDY", "MIAMI", "DUBAI", "HEATHROW", "PAP", "CAP"],
        es: ["ORLY", "ROISSY", "KENNEDY", "MIAMI", "DUBAI", "HEATHROW", "PAP", "CAP"]
      }
    },
    {
      id: 19,
      title: { fr: "Niveau 19 : Confort & Service", en: "Level 19: Comfort & Service", es: "Nivel 19: Confort y Servicio" },
      words: {
        fr: ["BUSINESS", "PREMIUM", "BOISSON", "CONFORT", "ELEGANCE", "ACCUEIL", "SERVICE", "LOUNGE"],
        en: ["BUSINESS", "PREMIUM", "DRINK", "COMFORT", "ELEGANCE", "WELCOME", "SERVICE", "LOUNGE"],
        es: ["BUSINESS", "PREMIUM", "BEBIDA", "CONFORT", "ELEGANCIA", "ACOGIDA", "SERVICIO", "SALON"]
      }
    },
    {
      id: 20,
      title: { fr: "Niveau 20 : Grand Commandant", en: "Level 20: Master Captain", es: "Nivel 20: Gran Comandante" },
      words: {
        fr: ["FLOTTE", "SUCCES", "AVIONNERIE", "SUNRISE", "VOLANT", "REUSSITE", "SKY", "DESTINATION"],
        en: ["FLEET", "SUCCESS", "AVIATION", "SUNRISE", "WHEEL", "ACHIEVEMENT", "SKY", "DESTINATION"],
        es: ["FLOTA", "EXITO", "AVIACION", "SUNRISE", "VOLANTE", "TRIUNFO", "CIELO", "DESTINO"]
      }
    }
  ];

  // --- VARIABLES D'ÉTAT DU JEU ---
  const GRID_SIZE = 12;
  let currentLang = "fr";
  let currentLevelIndex = 0;
  let gridMatrix = [];
  let wordsToFind = [];
  let foundWords = new Set();
  
  // Sélection interactive tactile & souris
  let isSelecting = false;
  let startCell = null;
  let selectedCells = [];

  // Chronomètre
  let timerInterval = null;
  let secondsElapsed = 0;

  // --- ÉLÉMENTS DU DOM ---
  const langSelect = document.getElementById("langSelect");
  const levelSelect = document.getElementById("levelSelect");
  const restartBtn = document.getElementById("restartBtn");
  const themeToggle = document.getElementById("themeToggle");
  const wordGrid = document.getElementById("wordGrid");
  const wordList = document.getElementById("wordList");
  const categoryTitle = document.getElementById("categoryTitle");
  const foundCount = document.getElementById("foundCount");
  const timerDisplay = document.getElementById("timer");
  const gameSlogan = document.getElementById("gameSlogan");

  // --- INITIALISATION ---
  function init() {
    setupEventListeners();
    updateUIStrings();
    populateLevelSelect();
    loadLevel(0);
  }

  // --- ÉCOUTEURS D'ÉVÉNEMENTS GLOBAUX ---
  function setupEventListeners() {
    langSelect.addEventListener("change", (e) => {
      currentLang = e.target.value;
      updateUIStrings();
      populateLevelSelect();
      loadLevel(currentLevelIndex);
    });

    levelSelect.addEventListener("change", (e) => {
      loadLevel(parseInt(e.target.value, 10));
    });

    restartBtn.addEventListener("click", () => {
      loadLevel(currentLevelIndex);
    });

    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      themeToggle.textContent = isDark ? TRANSLATIONS[currentLang].themeLight : TRANSLATIONS[currentLang].themeDark;
    });

    // Mouvement tactile et souris sur toute la fenêtre pour un suivi fluide
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
  }

  // --- MISE À JOUR DES LIBELLÉS FR / EN / ES ---
  function updateUIStrings() {
    const t = TRANSLATIONS[currentLang];
    
    // Titre et slogan
    const titleSpan = document.querySelector(".game-title span");
    if (titleSpan) titleSpan.textContent = t.titleText;
    if (gameSlogan) gameSlogan.textContent = t.sloganText;

    // Étiquettes des sélecteurs
    const langLabel = document.querySelector(".lang-select-wrapper .level-label");
    if (langLabel) langLabel.textContent = t.langLabel;

    const levelLabel = document.querySelector(".level-select-wrapper .level-label");
    if (levelLabel) levelLabel.textContent = t.levelLabel;

    // Boutons
    restartBtn.textContent = t.restartBtn;
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.textContent = isDark ? t.themeLight : t.themeDark;

    // Statistiques & Instructions
    const statsBoxes = document.querySelectorAll(".stats-box span");
    if (statsBoxes.length >= 2) {
      statsBoxes[0].childNodes[0].textContent = t.wordsFoundLabel + " ";
      statsBoxes[1].childNodes[0].textContent = t.timeLabel + " ";
    }

    const instructionsP = document.querySelector(".game-instructions p");
    if (instructionsP) instructionsP.innerHTML = t.instructions;
  }

  function populateLevelSelect() {
    levelSelect.innerHTML = "";
    LEVELS.forEach((lvl, index) => {
      const opt = document.createElement("option");
      opt.value = index;
      opt.textContent = lvl.title[currentLang];
      levelSelect.appendChild(opt);
    });
  }

  // --- CHARGEMENT D'UN NIVEAU ---
  function loadLevel(index) {
    currentLevelIndex = index;
    levelSelect.value = index;

    const currentLevel = LEVELS[index];
    categoryTitle.textContent = currentLevel.title[currentLang];
    
    wordsToFind = currentLevel.words[currentLang].map(w => w.toUpperCase());
    foundWords.clear();

    resetTimer();
    startTimer();

    generateGrid();
    renderGrid();
    renderWordList();
    updateStats();
  }

  // --- CHRONOMÈTRE ---
  function startTimer() {
    clearInterval(timerInterval);
    secondsElapsed = 0;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      secondsElapsed++;
      updateTimerDisplay();
    }, 1000);
  }

  function resetTimer() {
    clearInterval(timerInterval);
    secondsElapsed = 0;
    updateTimerDisplay();
  }

  function updateTimerDisplay() {
    const mins = Math.floor(secondsElapsed / 60).toString().padStart(2, "0");
    const secs = (secondsElapsed % 60).toString().padStart(2, "0");
    timerDisplay.textContent = `${mins}:${secs}`;
  }

  // --- GÉNÉRATION DE LA GRILLE ---
  function generateGrid() {
    gridMatrix = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(""));

    const directions = [
      [0, 1],   // Horizontale
      [1, 0],   // Verticale
      [1, 1],   // Diagonale
      [-1, 1]   // Diagonale inversée
    ];

    wordsToFind.forEach(word => {
      let placed = false;
      let attempts = 0;

      while (!placed && attempts < 100) {
        attempts++;
        const dir = directions[Math.floor(Math.random() * directions.length)];
        const [dRow, dCol] = dir;

        const startRow = Math.floor(Math.random() * GRID_SIZE);
        const startCol = Math.floor(Math.random() * GRID_SIZE);

        if (canPlaceWord(word, startRow, startCol, dRow, dCol)) {
          for (let i = 0; i < word.length; i++) {
            gridMatrix[startRow + i * dRow][startCol + i * dCol] = word[i];
          }
          placed = true;
        }
      }
    });

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        if (!gridMatrix[r][c]) {
          gridMatrix[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
        }
      }
    }
  }

  function canPlaceWord(word, row, col, dRow, dCol) {
    const endRow = row + (word.length - 1) * dRow;
    const endCol = col + (word.length - 1) * dCol;

    if (endRow < 0 || endRow >= GRID_SIZE || endCol < 0 || endCol >= GRID_SIZE) {
      return false;
    }

    for (let i = 0; i < word.length; i++) {
      const r = row + i * dRow;
      const c = col + i * dCol;
      const char = gridMatrix[r][c];
      if (char !== "" && char !== word[i]) {
        return false;
      }
    }

    return true;
  }

  // --- RENDU DOM ---
  function renderGrid() {
    wordGrid.innerHTML = "";
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.row = r;
        cell.dataset.col = c;
        cell.textContent = gridMatrix[r][c];

        // Amorce de la sélection au contact (souris ou écran tactile)
        cell.addEventListener("pointerdown", (e) => handlePointerDown(e, r, c));

        wordGrid.appendChild(cell);
      }
    }
  }

  function renderWordList() {
    wordList.innerHTML = "";
    wordsToFind.forEach(word => {
      const li = document.createElement("li");
      li.classList.add("word-item");
      li.id = `word-${word}`;
      li.textContent = word;

      if (foundWords.has(word)) {
        li.classList.add("found");
      }

      wordList.appendChild(li);
    });
  }

  function updateStats() {
    foundCount.textContent = `${foundWords.size}/${wordsToFind.length}`;
  }

  // --- GESTION TACTILE & SOURIS OPTIMISÉE POUR SMARTPHONE ---
  function handlePointerDown(e, row, col) {
    e.preventDefault();
    isSelecting = true;
    startCell = { row, col };
    highlightSelection(row, col);
  }

  function handlePointerMove(e) {
    if (!isSelecting || !startCell) return;

    // elementFromPoint retrouve exactement la cellule sous le doigt pendant le glissement
    const targetElement = document.elementFromPoint(e.clientX, e.clientY);

    if (targetElement && targetElement.classList.contains("cell")) {
      const r = parseInt(targetElement.dataset.row, 10);
      const c = parseInt(targetElement.dataset.col, 10);
      if (!isNaN(r) && !isNaN(c)) {
        highlightSelection(r, c);
      }
    }
  }

  function handlePointerUp() {
    if (!isSelecting) return;
    isSelecting = false;

    const selectedWord = selectedCells.map(c => gridMatrix[c.row][c.col]).join("");
    const reversedWord = selectedWord.split("").reverse().join("");

    let matchedWord = null;
    if (wordsToFind.includes(selectedWord) && !foundWords.has(selectedWord)) {
      matchedWord = selectedWord;
    } else if (wordsToFind.includes(reversedWord) && !foundWords.has(reversedWord)) {
      matchedWord = reversedWord;
    }

    if (matchedWord) {
      foundWords.add(matchedWord);

      selectedCells.forEach(c => {
        const el = getCellElement(c.row, c.col);
        if (el) el.classList.add("found");
      });

      const wordItem = document.getElementById(`word-${matchedWord}`);
      if (wordItem) wordItem.classList.add("found");

      updateStats();
      checkLevelCompletion();
    }

    clearSelectionHighlight();
    startCell = null;
    selectedCells = [];
  }

  function highlightSelection(endRow, endCol) {
    clearSelectionHighlight();
    selectedCells = getLineCells(startCell.row, startCell.col, endRow, endCol);

    selectedCells.forEach(c => {
      const el = getCellElement(c.row, c.col);
      if (el) el.classList.add("selecting");
    });
  }

  function clearSelectionHighlight() {
    const cells = wordGrid.querySelectorAll(".cell.selecting");
    cells.forEach(el => el.classList.remove("selecting"));
  }

  function getCellElement(row, col) {
    return wordGrid.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
  }

  function getLineCells(r1, c1, r2, c2) {
    const cells = [];
    const deltaR = r2 - r1;
    const deltaC = c2 - c1;

    const distR = Math.abs(deltaR);
    const distC = Math.abs(deltaC);

    if (distR !== 0 && distC !== 0 && distR !== distC) {
      return [{ row: r1, col: c1 }];
    }

    const stepR = deltaR === 0 ? 0 : deltaR / distR;
    const stepC = deltaC === 0 ? 0 : deltaC / distC;

    const steps = Math.max(distR, distC);
    for (let i = 0; i <= steps; i++) {
      cells.push({
        row: r1 + i * stepR,
        col: c1 + i * stepC
      });
    }

    return cells;
  }

  // --- VÉRIFICATION DE VICTOIRE ---
  function checkLevelCompletion() {
    if (foundWords.size === wordsToFind.length) {
      clearInterval(timerInterval);

      setTimeout(() => {
        const t = TRANSLATIONS[currentLang];
        if (currentLevelIndex < LEVELS.length - 1) {
          const msg = t.winMsg.replace("{time}", timerDisplay.textContent);
          const next = confirm(msg);
          if (next) {
            loadLevel(currentLevelIndex + 1);
          }
        } else {
          alert(t.gameCompleteMsg);
        }
      }, 300);
    }
  }

  // Démarrage du jeu
  init();
});
