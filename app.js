/* ==========================================================================
   RISTORANTE MAMMA ROSA - JAVASCRIPT APP LOGIC
   ========================================================================== */

// 1. MENU DATA STRUCTURE
const menuData = [
    // ANTIPASTI DI MARE
    {
        id: "antipasto-1",
        title: "Bruschetta con pomodorini freschi",
        category: "antipasti",
        categoryName: "Antipasti",
        price: 7,
        description: "Pane tostato + pomodorini freschi + olio evo + origano + basilico. (A richiesta si può aggiungere la cipollina fresca).",
        allergens: ["glutine"],
        image: "assets/menu/BruschettePomodori.jpg"
    },
    {
        id: "antipasto-2",
        title: "Alici di Salerno fritte più menta, pepe e cipollina novella",
        category: "antipasti",
        categoryName: "Antipasti",
        price: 12,
        description: "Prima fritte e poi condite con menta fresca, pepe e cipollina novella fresca.",
        allergens: ["pesce", "glutine"],
        image: "assets/menu/AliceSalerno.jpg"
    },
    {
        id: "antipasto-3",
        title: "Alici Marinate",
        category: "antipasti",
        categoryName: "Antipasti",
        price: 8,
        description: "Alici marinate tradizionali della casa con limone e peperoncino.",
        allergens: ["pesce", "peperoncino"],
        image: "assets/menu/AliciMarinate.jpg"
    },
    {
        id: "antipasto-4",
        title: "Polpo verace all'insalata",
        category: "antipasti",
        categoryName: "Antipasti",
        price: 18,
        description: "Servito con patate lesse e pomodorini freschi all'insalata.",
        allergens: ["pesce"],
        image: "assets/menu/PolpoVerace.jpg"
    },
    {
        id: "antipasto-5",
        title: "Polpettine di Baccalà",
        category: "antipasti",
        categoryName: "Antipasti",
        price: 12,
        description: "Polpette fritte servite su crema di Ceci e Pecorino Romano DOP grattugiato.",
        allergens: ["glutine", "pesce", "lattosio"],
        image: "assets/menu/PolpetteBaccala.jpg"
    },
    {
        id: "antipasto-6",
        title: "Zuppa di Cozze alla Salernitana",
        category: "antipasti",
        categoryName: "Antipasti",
        price: 15,
        description: "Mamma Rosa è custode della ricetta semplicissima ma di origini molto antiche, composta da sole cozze con pomodorini, peperoncino, aglio, spaghetti fritti e basilico fresco ...Da non perdere...",
        allergens: ["glutine", "molluschi"],
        image: "assets/menu/zuppaCozze.jpg"
    },

    // PRIMI PIATTI DI MARE
    {
        id: "primo-1",
        title: "Paccheri alla Genovese di polpo più granella di pistacchio",
        category: "primi",
        categoryName: "Primi Piatti",
        price: 15,
        description: "Piatto Unico di Mamma Rosa, un 'MUST', con cipolla e polpo stufati insieme per 3 ore a fuoco lento, il piatto viene guarnito alla fine con granella di pistacchio...una Poesia!))",
        allergens: ["glutine", "molluschi", "frutta secca"],
        image: "assets/menu/PaccheriGenovese.jpg"
    },
    {
        id: "primo-2",
        title: "Scialatello del Porticciolo",
        category: "primi",
        categoryName: "Primi Piatti",
        price: 15,
        description: "Pasta fresca con frutti di mare e crostacei di stagione con datterini rossi freschi.",
        allergens: ["glutine", "crostacei", "molluschi"],
        image: "assets/menu/ScialatielloPorticciolo.jpg"
    },
    {
        id: "primo-3",
        title: "Linguine con Alici Marinate alla Mamma Rosa",
        category: "primi",
        categoryName: "Primi Piatti",
        price: 15,
        description: "Pasta Spaghetti/Linguine con Alici Marinate nella colatura di Alici e limone, pomodorini freschi, fresella tritata con aglio e prezzemolo, peperoncino fresco e peperone crusco.",
        allergens: ["glutine", "pesce"],
        image: "assets/menu/LinguineAlici.jpg"
    },

    // SECONDI PIATTI DI MARE
    {
        id: "secondo-1",
        title: "Fritto di Calamari + Gamberi + Alici",
        category: "secondi",
        categoryName: "Secondi Piatti",
        price: 18,
        description: "Fritto misto croccante di mare. Si può richiedere anche solo 'anellini'.",
        allergens: ["glutine", "molluschi", "crostacei"],
        image: "assets/menu/FrittataCalamariGamberiAlici.jpg"
    },
    {
        id: "secondo-2",
        title: "Grigliata di Pesce Misto del Giorno",
        category: "secondi",
        categoryName: "Secondi Piatti",
        price: 25,
        description: "Branzino(Spigola), Pesce Spada, Seppia, Gamberoni Argentina (surgelati a bordo).",
        allergens: ["pesce", "crostacei"],
        image: "assets/menu/GrigliataMisto.jpg"
    },
    {
        id: "secondo-3",
        title: "Orata Croccante (FRITTA)",
        category: "secondi",
        categoryName: "Secondi Piatti",
        price: 20,
        description: "Orata marinato con aglio e pepe, messa sottovuoto, poi fritta per intera ...uno spettacolo, croccante e molto saporito.",
        allergens: ["glutine", "pesce"],
        image: "assets/menu/OrataCroccante.jpg"
    },
    {
        id: "secondo-4",
        title: "Pesce Azzurro alla Scapece",
        category: "secondi",
        categoryName: "Secondi Piatti",
        price: 15,
        description: "Sgombro arrosto condito in salsa scapece (olio, aceto, menta).",
        allergens: ["pesce"],
        image: "assets/menu/PesceAzzurro.jpg"
    },
    {
        id: "secondo-5",
        title: "Tagliata di Tonno Rosso",
        category: "secondi",
        categoryName: "Secondi Piatti",
        price: 18,
        description: "Tonno Rosso locale, scottato e poi condito con Rucola, pomodorini, Pepe freschi e scaglie di provolone irpino.",
        allergens: ["pesce", "lattosio"],
        image: "assets/menu/TagliataTonno.jpg"
    },

    // I SAPORI DEL BACCALÀ
    {
        id: "baccala-1",
        title: "Cortecce alla Mamma Rosa",
        category: "baccala",
        categoryName: "I Sapori del Baccalà",
        price: 15,
        description: "Piatto storico del ristorante, tramandato dai genitori di Mamma Rosa, pasta fresca con olive nere, cipolla, capperi, pomodorini, Baccalà ed un pizzico di peperoncino.",
        allergens: ["glutine", "pesce"],
        image: "assets/menu/CortecceMamma.jpg"
    },
    {
        id: "baccala-2",
        title: "Baccalà alla Marinara",
        category: "baccala",
        categoryName: "I Sapori del Baccalà",
        price: 18,
        description: "Una specialità... con pomodorini, origano, peperoncino e peperoni cruschi di Senise.",
        allergens: ["pesce"],
        image: "assets/menu/BaccalaMarinara.jpg"
    },
    {
        id: "baccala-3",
        title: "Baccalà fritto",
        category: "baccala",
        categoryName: "I Sapori del Baccalà",
        price: 18,
        description: "Un pilastro del ristorante, semplicemente infarinato e poi fritto, da provare assolutamente.",
        allergens: ["glutine", "pesce"],
        image: "assets/menu/BaccalaFritto.jpg"
    },

    // NON SOLO PESCE
    {
        id: "nonpesce-1",
        title: "Bocconcini di Bufala Campana DOP e Prosciutto Crudo",
        category: "nonpesce",
        categoryName: "Non Solo Pesce",
        price: 10,
        description: "Bocconcini freschi di Mozzarella di Bufala Campana DOP e Prosciutto Crudo.",
        allergens: ["lattosio"],
        image: "assets/menu/BufalaProsciutto.jpg"
    },
    {
        id: "nonpesce-2",
        title: "INSALATA CAPRESE",
        category: "nonpesce",
        categoryName: "Non Solo Pesce",
        price: 12,
        description: "Mozzarella Fior di latte e cuore di bue con basilico fresco.",
        allergens: ["lattosio"],
        image: "assets/menu/Caprese.jpg"
    },
    {
        id: "nonpesce-3",
        title: "Gnocchi alla Sorrentina",
        category: "nonpesce",
        categoryName: "Non Solo Pesce",
        price: 15,
        description: "Gli gnocchi della tradizione con solo farina ed acqua, salsa di pomodoro, mozzarella e formaggio grattugiato.",
        allergens: ["glutine", "lattosio"],
        image: "assets/menu/GnocchiSorrentina.jpg"
    },
    {
        id: "nonpesce-4",
        title: "Costata di scottona di 400 grammi",
        category: "nonpesce",
        categoryName: "Non Solo Pesce",
        price: 25,
        description: "Servita con patatine fritte (surgelate).",
        allergens: [],
        image: "assets/menu/Scottona.jpg"
    },

    // CONTORNI
    {
        id: "contorno-1",
        title: "Contorno del giorno",
        category: "contorni",
        categoryName: "Contorni",
        price: 4,
        description: "Contorno espresso del giorno a scelta del nostro chef.",
        allergens: [],
        image: null
    },

    // DOLCI E FRUTTA
    {
        id: "dolce-1",
        title: "Sorbetto Limone della Costiera Amalfitana",
        category: "dolci",
        categoryName: "Dolci & Frutta",
        price: 7,
        description: "Artigianale, proveniente dalla costiera Amalfitana.",
        allergens: ["lattosio", "uova", "glutine"],
        image: "assets/menu/SorbettoLimone.jpg"
    },
    {
        id: "dolce-2",
        title: "Tiramisù Classico",
        category: "dolci",
        categoryName: "Dolci & Frutta",
        price: 7,
        description: "Ricetta classica fatta in casa con savoiardi e mascarpone.",
        allergens: ["lattosio"],
        image: "assets/menu/Tiramisu.jpg"
    },
    {
        id: "dolce-3",
        title: "Cheesecake fatta in casa",
        category: "dolci",
        categoryName: "Dolci & Frutta",
        price: 7,
        description: "Gusti disponibili: Amarena, Frutti di bosco, Cioccolato, Pistacchio, Cioccolato Bianco, Nocciola, Caramello.",
        allergens: ["glutine"],
        image: "assets/menu/CheeseCake.jpg"
    },
    {
        id: "dolce-4",
        title: "Delizia al limone 🍋 fatta in casa",
        category: "dolci",
        categoryName: "Dolci & Frutta",
        price: 7,
        description: "Delizia artigianale al limone della Costiera fatta in casa.",
        allergens: ["lattosio", "glutine"],
        image: "assets/menu/DeliziaAlLimone.jpg"
    },
    {
        id: "dolce-5",
        title: "Babà con crema e amarena",
        category: "dolci",
        categoryName: "Dolci & Frutta",
        price: 7,
        description: "Babà rigorosamente fatto in casa. Una poesia!",
        allergens: ["glutine", "lattosio", "uova"],
        image: "assets/menu/BabaCrema.jpg"
    },
    {
        id: "dolce-6",
        title: "Tartufo al cioccolato",
        category: "dolci",
        categoryName: "Dolci & Frutta",
        price: 7,
        description: "Tartufo classico al cioccolato.",
        allergens: ["lattosio", "uova"],
        image: "assets/menu/TartufoCioccolato.jpg"
    },

    // BEVANDE
    {
        id: "bevanda-1",
        title: "Bibita in Lattina da 0,33L",
        category: "bevande",
        categoryName: "Bevande",
        price: 3.5,
        description: "Coca-Cola, Fanta, Sprite, Coca-Zero, LemonSoda.",
        allergens: [],
        image: null
    },
    {
        id: "bevanda-2",
        title: "Acqua da 1/2 L (vetro)",
        category: "bevande",
        categoryName: "Bevande",
        price: 1.5,
        description: "Piatta Plose / Frizzante Ferrarelle.",
        allergens: [],
        image: null
    },
    {
        id: "bevanda-3",
        title: "Acqua da 0,75 L (vetro)",
        category: "bevande",
        categoryName: "Bevande",
        price: 2,
        description: "Liscia Natia / Gassata Ferrarelle.",
        allergens: [],
        image: null
    },
    {
        id: "bevanda-4",
        title: "Vino 0,75L della casa Bianco Fermo",
        category: "bevande",
        categoryName: "Bevande",
        price: 20,
        description: "Fiano 65% + Malvasia Bianca 35% IGT (Vino Fermo).",
        allergens: ["solfiti"],
        image: null
    },
    {
        id: "bevanda-5",
        title: "Vino 0,75L della casa Rosso fermo",
        category: "bevande",
        categoryName: "Bevande",
        price: 20,
        description: "Aglianico 100% Paestum IGT (Vino fermo).",
        allergens: ["solfiti"],
        image: null
    },
    {
        id: "bevanda-6",
        title: "Vino al calice",
        category: "bevande",
        categoryName: "Bevande",
        price: 7,
        description: "Calice di vino selezionato della casa.",
        allergens: ["solfiti"],
        image: null
    },
    {
        id: "bevanda-7",
        title: "Caffè",
        category: "bevande",
        categoryName: "Bevande",
        price: 1,
        description: "Caffè in cialde con possibilità di sceglierlo decaffeinato.",
        allergens: [],
        image: null
    },
    {
        id: "bevanda-8",
        title: "Vino Rosso Fermo 0,375 L",
        category: "bevande",
        categoryName: "Bevande",
        price: 12,
        description: "Aglianico 100% Paestum IGT (0.375L).",
        allergens: ["solfiti"],
        image: null
    },
    {
        id: "bevanda-9",
        title: "Vino bianco della casa fermo 0,375 L",
        category: "bevande",
        categoryName: "Bevande",
        price: 12,
        description: "Fiano 65% + Malvasia Bianca 35% IGT (0.375L).",
        allergens: ["solfiti"],
        image: null
    }
];

// 2. STATE MANAGEMENT
let activeCategory = "all";
let activeAllergens = [];
let searchQuery = "";

// 3. DOM ELEMENTS
document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initOpeningHours();
    initMenu();
    initBackToTop();
    initMap();
});

// 4. NAVBAR & SCROLL CONTROLS
function initNavbar() {
    const navbar = document.getElementById("navbar");
    const mobileToggle = document.getElementById("mobileToggle");
    const navLinks = document.getElementById("navLinks");
    const allLinks = document.querySelectorAll(".nav-link");

    // Scroll Navbar Effect (Throttled with requestAnimationFrame for 60fps & zero layout thrashing)
    let isTicking = false;
    window.addEventListener("scroll", () => {
        if (!isTicking) {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                if (scrollY > 40) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }

                // Active Link highlighting based on scroll position
                const sections = document.querySelectorAll("section[id], footer[id]");
                let current = "";
                sections.forEach((section) => {
                    const sectionTop = section.offsetTop - 140;
                    if (scrollY >= sectionTop) {
                        current = section.getAttribute("id");
                    }
                });

                allLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${current}`) {
                        link.classList.add("active");
                    }
                });
                isTicking = false;
            });
            isTicking = true;
        }
    }, { passive: true });

    // Mobile Toggle
    mobileToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        const icon = mobileToggle.querySelector("i");
        if (navLinks.classList.contains("active")) {
            icon.className = "fa-solid fa-xmark";
        } else {
            icon.className = "fa-solid fa-bars";
        }
    });

    // Close menu when clicking link
    allLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            if (mobileToggle.querySelector("i")) {
                mobileToggle.querySelector("i").className = "fa-solid fa-bars";
            }
        });
    });
}

// 5. LIVE OPENING HOURS STATUS
function initOpeningHours() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, 2 = Tuesday...
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTimeInMinutes = hours * 60 + minutes;

    // Schedule ranges:
    // Lunch: 12:40 (760 mins) to 15:00 (900 mins)
    // Dinner: 19:30 (1170 mins) to 22:30 (1350 mins)
    const lunchStart = 12 * 60 + 40;
    const lunchEnd = 15 * 60;
    const dinnerStart = 19 * 60 + 30;
    const dinnerEnd = 22 * 60 + 30;

    let isOpen = false;
    let statusMsg = "";

    if (day === 1) { // Monday closed
        isOpen = false;
        statusMsg = "Chiuso Oggi (Riposo Settimanale)";
    } else {
        if ((currentTimeInMinutes >= lunchStart && currentTimeInMinutes <= lunchEnd) ||
            (currentTimeInMinutes >= dinnerStart && currentTimeInMinutes <= dinnerEnd)) {
            isOpen = true;
            statusMsg = "Aperto Ora • Ti aspettiamo!";
        } else if (currentTimeInMinutes < lunchStart) {
            statusMsg = "Chiuso Ora • Apre oggi alle 12:40";
        } else if (currentTimeInMinutes > lunchEnd && currentTimeInMinutes < dinnerStart) {
            statusMsg = "Chiuso Ora • Apre stasera alle 19:30";
        } else {
            statusMsg = "Chiuso Ora • Apre domani alle 12:40";
        }
    }

    // Hero Live Status
    const heroStatus = document.getElementById("heroLiveStatus");
    if (heroStatus) {
        const dot = heroStatus.querySelector(".status-dot");
        const text = heroStatus.querySelector(".status-text");
        if (isOpen) {
            dot.style.backgroundColor = "var(--green-open)";
            dot.style.boxShadow = "0 0 12px var(--green-open)";
        } else {
            dot.style.backgroundColor = "var(--coral-alert)";
            dot.style.boxShadow = "0 0 12px var(--coral-alert)";
        }
        text.textContent = statusMsg;
    }

    // Info Section Live Box
    const infoBox = document.getElementById("infoLiveStatusBox");
    if (infoBox) {
        const dot = infoBox.querySelector(".status-indicator-dot");
        const text = infoBox.querySelector(".status-indicator-text");
        if (isOpen) {
            dot.style.backgroundColor = "var(--green-open)";
        } else {
            dot.style.backgroundColor = "var(--coral-alert)";
        }
        text.textContent = statusMsg;
    }

    // Highlight current day in schedule list
    const dayMap = [6, 0, 1, 2, 3, 4, 5]; // maps JS getDay to schedule list order
    const scheduleItems = document.querySelectorAll(".schedule-list .schedule-item");
    if (scheduleItems && scheduleItems[dayMap[day]]) {
        scheduleItems[dayMap[day]].classList.add("today-highlight");
    }
}

// 6. MENU RENDERING & FILTERING
function initMenu() {
    const dishesGrid = document.getElementById("dishesGrid");
    const searchInput = document.getElementById("menuSearchInput");
    const clearSearchBtn = document.getElementById("clearSearchBtn");
    const categoryBtns = document.querySelectorAll("#categoryTabs .tab-btn");
    const allergenBtns = document.querySelectorAll("#allergenPills .pill-btn:not(.reset-pill)");
    const resetBtn = document.getElementById("resetFiltersBtn");

    // Initial render
    renderDishes();

    // Search Input Listener
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        clearSearchBtn.style.display = searchQuery.length > 0 ? "block" : "none";
        renderDishes();
    });

    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        clearSearchBtn.style.display = "none";
        renderDishes();
    });

    // Category Tabs Listener
    categoryBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            categoryBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.getAttribute("data-category");
            renderDishes();
        });
    });

    // Allergen Pills Listener
    allergenBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const allergen = btn.getAttribute("data-allergen");
            btn.classList.toggle("active");
            if (btn.classList.contains("active")) {
                activeAllergens.push(allergen);
            } else {
                activeAllergens = activeAllergens.filter((a) => a !== allergen);
            }
            renderDishes();
        });
    });

    // Reset Filters Button
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            resetAllMenuFilters();
        });
    }
}

function resetAllMenuFilters() {
    activeCategory = "all";
    activeAllergens = [];
    searchQuery = "";

    const searchInput = document.getElementById("menuSearchInput");
    const clearSearchBtn = document.getElementById("clearSearchBtn");
    if (searchInput) searchInput.value = "";
    if (clearSearchBtn) clearSearchBtn.style.display = "none";

    document.querySelectorAll("#categoryTabs .tab-btn").forEach((btn) => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-category") === "all") btn.classList.add("active");
    });

    document.querySelectorAll("#allergenPills .pill-btn").forEach((btn) => {
        btn.classList.remove("active");
    });

    renderDishes();
}

function renderDishes() {
    const dishesGrid = document.getElementById("dishesGrid");
    const emptyResults = document.getElementById("emptyResults");

    const filtered = menuData.filter((dish) => {
        // Category Filter
        const matchesCategory = activeCategory === "all" || dish.category === activeCategory;

        // Search Filter
        const matchesSearch = searchQuery === "" ||
            dish.title.toLowerCase().includes(searchQuery) ||
            dish.description.toLowerCase().includes(searchQuery) ||
            dish.categoryName.toLowerCase().includes(searchQuery);

        // Allergen Filter (showing dishes that match selected allergen tags)
        const matchesAllergens = activeAllergens.length === 0 ||
            activeAllergens.some((allergen) => dish.allergens.includes(allergen));

        return matchesCategory && matchesSearch && matchesAllergens;
    });

    if (filtered.length === 0) {
        dishesGrid.style.display = "none";
        emptyResults.style.display = "block";
        return;
    }

    dishesGrid.style.display = "grid";
    emptyResults.style.display = "none";

    dishesGrid.innerHTML = filtered.map((dish) => {
        const hasImage = dish.image !== null;
        const imageHTML = hasImage
            ? `<img src="${dish.image}" alt="${dish.title}" class="dish-img" width="320" height="210" loading="lazy">`
            : `<div class="dish-no-img-placeholder">
                <i class="fa-solid fa-utensils"></i>
                <span>Mamma Rosa</span>
               </div>`;

        const allergensHTML = dish.allergens.length > 0
            ? dish.allergens.map((a) => `<span class="allergen-tag"><i class="fa-solid fa-tag"></i> ${a}</span>`).join("")
            : `<span class="allergen-tag"><i class="fa-solid fa-check"></i> Senza Allergeni specificati</span>`;

        return `
            <div class="dish-card" data-category="${dish.category}">
                <div class="dish-img-wrapper" ${hasImage ? `onclick="openLightbox('${dish.image}', '${escapeQuotes(dish.title)}', '${escapeQuotes(dish.description)}')"` : ""}>
                    ${imageHTML}
                    <span class="dish-category-badge">${dish.categoryName}</span>
                </div>
                <div class="dish-body">
                    <div class="dish-header-row">
                        <h3 class="dish-name">${dish.title}</h3>
                        <span class="dish-price">${dish.price} €</span>
                    </div>
                    <p class="dish-desc">${dish.description}</p>
                    <div class="dish-allergens">
                        ${allergensHTML}
                    </div>
                    ${hasImage ? `
                        <div class="dish-card-actions">
                            <button class="btn-icon" title="Ingrandisci foto" onclick="openLightbox('${dish.image}', '${escapeQuotes(dish.title)}', '${escapeQuotes(dish.description)}')">
                                <i class="fa-solid fa-expand"></i>
                            </button>
                        </div>
                    ` : ""}
                </div>
            </div>
        `;
    }).join("");
}

function escapeQuotes(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, "&quot;");
}

// 7. LIGHTBOX MODAL HANDLER
function openLightbox(imgSrc, title, description) {
    const modal = document.getElementById("lightboxModal");
    const modalImg = document.getElementById("lightboxImg");
    const modalTitle = document.getElementById("lightboxTitle");
    const modalDesc = document.getElementById("lightboxDesc");

    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalDesc.textContent = description;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    const modal = document.getElementById("lightboxModal");
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "auto";
}

// Esc Key Listener for Lightbox
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    }
});

// 8. BACK TO TOP BUTTON
function initBackToTop() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    const copyrightYear = document.getElementById("copyrightYear");

    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
}

// 9. INTERACTIVE LEAFLET MAP INITIALIZATION
function initMap() {
    const mapContainer = document.getElementById("restaurantMap");
    if (!mapContainer || typeof L === "undefined") return;

    // Coordinates for Ristorante Mamma Rosa Salerno (Exact Pin)
    const salernoCoords = [40.6789376, 14.7647307];

    // Initialize Map with smooth scroll & drag
    const map = L.map("restaurantMap", {
        center: salernoCoords,
        zoom: 18,
        scrollWheelZoom: true,
        dragging: true,
        touchZoom: true
    });

    // Add Tile Layer (CartoDB Voyager)
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19
    }).addTo(map);

    // Custom Gold Marker Icon
    const goldIcon = L.divIcon({
        className: "custom-map-pin",
        html: `<div style="
            width: 38px;
            height: 38px;
            border-radius: 50%;
            background: linear-gradient(135deg, #f3e5ab 0%, #d4af37 100%);
            border: 3px solid #071326;
            box-shadow: 0 4px 15px rgba(212,175,55,0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #071326;
            font-size: 1.1rem;
        "><i class="fa-solid fa-utensils"></i></div>`,
        iconSize: [38, 38],
        iconAnchor: [19, 19],
        popupAnchor: [0, -19]
    });

    // Add Marker with Popup
    const marker = L.marker(salernoCoords, { icon: goldIcon }).addTo(map);

    const popupContent = `
        <div class="map-popup-card">
            <h4>Ristorante Mamma Rosa</h4>
            <p>Salerno, Italia • Cucina di Mare</p>
            <a href="https://maps.app.goo.gl/nM2Wo7g2tKGta2Ea7" target="_blank" rel="noopener noreferrer" style="
                display: inline-block;
                padding: 0.45rem 0.95rem;
                background: linear-gradient(135deg, #f3e5ab 0%, #d4af37 100%);
                color: #071326;
                border-radius: 20px;
                font-weight: 700;
                font-size: 0.8rem;
                text-decoration: none;
            ">Apri in Google Maps ➔</a>
        </div>
    `;

    marker.bindPopup(popupContent, { className: "custom-leaflet-popup" }).openPopup();
}

