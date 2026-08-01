# 🌊 Ristorante Mamma Rosa — Official Web Application

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=Leaflet&logoColor=white)](https://leafletjs.com/)
[![Responsive](https://img.shields.io/badge/Design-Responsive-brightgreen?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

> A modern, responsive, and luxury single-page web application built for **Ristorante Mamma Rosa** — an authentic seafood and traditional restaurant located in **Salerno, Italy**.

---

## 📸 Overview

**Ristorante Mamma Rosa** showcases the culinary excellence of Salernitan coastal gastronomy, featuring fresh catch-of-the-day dishes, legendary octopus Genovese paccheri, baccalà specialties, and authentic Campanian wines.

This web platform offers an elegant digital experience designed with a sleek ocean-and-gold aesthetic, glassmorphism UI elements, smooth micro-interactions, an interactive dynamic menu with live search & allergen filtering, an image modal lightbox, and an interactive Leaflet.js map.

---

## ✨ Key Features

- 🦞 **Interactive Dynamic Menu**:
  - Instant live search bar filtering dishes by name or ingredient in real-time.
  - Category tabs (*Antipasti, Primi Piatti, Secondi Piatti, Contorni, Desserts, Wine & Beverages*).
  - Clear visual allergen indicators (*Gluten, Crustaceans, Fish, Mollusks, Dairy, Nuts, Peanuts*).
- 🖼️ **High-Resolution Lightbox**:
  - Full-screen modal viewer for high-res food presentation.
  - Touch-swipe support and keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`).
- 📍 **Interactive Location Map**:
  - Embedded [Leaflet.js](https://leafletjs.com/) map centered at Salerno credentials with CartoDB Voyager tiles.
  - Custom gold pin icon with direct link to Google Maps navigation.
- 🍷 **Wine Cellar Showcase ("La Cantina")**:
  - Curated regional and national wine selection categorized into Whites, Reds, and Sparkling/Prosecco.
- 📱 **Mobile-First & Responsive Layout**:
  - Fluid mobile navigation drawer, touch-optimized cards, and call-to-action buttons (*Click-to-Call & Direct Directions*).
- ⚡ **Performance & SEO Optimized**:
  - Preloaded hero images (LCP optimized), non-render-blocking font and CSS delivery.
  - Open Graph metadata integration for optimized social media sharing.

---

## 🛠️ Tech Stack & Dependencies

### Core Technologies
- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`) for accessibility & SEO.
- **CSS3**: Vanilla CSS with custom CSS variables, CSS grid/flexbox, glassmorphism, keyframe animations, and minified production stylesheet (`styles.min.css`).
- **JavaScript (ES6+)**: Vanilla JS modular application logic (`app.js`) handling dynamic DOM rendering, state management, search indexing, event delegation, and interactive components.

### External Libraries & Services
- 🗺️ **[Leaflet.js v1.9.4](https://leafletjs.com/)** — Lightweight interactive maps engine.
- 🎨 **[FontAwesome v6.5.1](https://fontawesome.com/)** — Vector icon set for UI & navigation.
- 🔤 **[Google Fonts](https://fonts.google.com/)**:
  - `Playfair Display` (Luxury Headers & Branding)
  - `Cormorant Garamond` (Subheadings & Accents)
  - `Plus Jakarta Sans` (Clean Body Typography)
- 🗺️ **[CartoDB Voyager](https://carto.com/)** — Custom map tile provider.

---

## 📂 Directory Structure

```text
MammaRosa/
├── index.html        # Main HTML structure & SEO meta tags
├── app.js            # Main JavaScript app (Data, Search, Filters, Lightbox, Map)
├── styles.css        # Development source stylesheet
├── styles.min.css    # Production minified stylesheet
├── assets/           # Media assets directory
│   ├── header.jpg    # Hero background image
│   ├── menu/         # Food & beverage imagery, logo assets
│   └── ...           # Additional static image assets
└── README.md         # Project documentation
```

---

## 🚀 Getting Started

Since this is a lightweight, frontend-only project built with pure HTML, CSS, and JavaScript, no complex installation or build step is strictly required.

### 1. Clone or Download the Repository
```bash
git clone https://github.com/your-username/MammaRosa.git
cd MammaRosa
```

### 2. Run Locally
You can open `index.html` directly in any web browser, or serve it via a simple local HTTP server (recommended for optimal performance and Leaflet map loading):

#### Using VS Code Live Server extension:
Right-click `index.html` and select **"Open with Live Server"**.

#### Using Python (Built-in HTTP Server):
```bash
python3 -m http.server 8000
```
Then visit [`http://localhost:8000`](http://localhost:8000) in your browser.

#### Using Node.js (`npx serve`):
```bash
npx serve .
```

---

## 💻 Technical Highlights

### 1. Client-Side Data Rendering & Filtering
All menu items are stored in a structured JSON-like JS array inside [app.js](file:///home/administrator/workspace/personal/MammaRosa/app.js#L6-L200). The rendering pipeline dynamic filters data on user keystrokes without external API dependencies:
```javascript
// Live filtering logic snippet from app.js
const filtered = menuData.filter(item => {
    const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery) ||
                          item.description.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
});
```

### 2. Custom Leaflet.js Map Integration
Custom HTML/CSS marker pin styled with a gold metallic gradient and dark border overlay:
```javascript
const salernoCoords = [40.6789376, 14.7647307];
const map = L.map("restaurantMap", { center: salernoCoords, zoom: 18 });
```

---

## 📍 Restaurant Details

- **Location**: Salerno, Campania, Italy
- **Specialty**: Fresh Seafood & Traditional Salernitan Cuisine
- **Social Channels**:
  - 📸 [Instagram (@___mammarosa__)](https://www.instagram.com/___mammarosa__/)
  - 📘 [Facebook (Ristorante Mamma Rosa)](https://www.facebook.com/mammarosa.ristorantesalerno/?locale=it_IT)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

*Crafted with passion for authentic Italian seafood cuisine.* 🍝🍷
