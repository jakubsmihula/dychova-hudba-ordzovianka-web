# Dychová Hudba Ordžovianka - Oficiálna Webstránka

Moderná, responzívna webstránka pre dychovú hudbu Ordžovianka s elegantným dizajnom v modrej a červenej farebnej schéme.

## 🎵 Funkcie

### Domovská stránka
- Hero sekcia s hlavným názvom orchestru
- Sekcia s najnovšími informáciami a novinkami
- Navigačné tlačidlá na koncerty a kontakt

### Koncerty
- Interaktívny kalendár s označenými koncertmi
- Zoznam najbližších koncertov s detailmi
- Možnosť kliknúť na dátumy v kalendári pre zobrazenie detailov
- Navigácia medzi mesiacmi

### História
- Časová os s kľúčovými udalosťami orchestru
- Štatistiky a čísla o orchestri
- Vizuálne atraktívne zobrazenie histórie

### Kontakt
- Kontaktné informácie orchestru
- Newsletter formulár pre prihlásenie na novinky
- Validácia formulára a potvrdenie odoslania

## 🎨 Dizajn

- **Farebná schéma**: Modrá a červená podľa požiadaviek
- **Typografia**: Playfair Display pre nadpisy, Roboto pre text
- **Responzívny dizajn**: Optimalizované pre všetky zariadenia
- **Animácie**: Plynulé prechody a hover efekty
- **Moderný vzhľad**: Karty, tieňy a gradienty

## 🚀 Inštalácia a spustenie

1. **Inštalácia závislostí**:
   ```bash
   npm install
   ```

2. **Spustenie vývojového servera**:
   ```bash
   npm start
   ```

3. **Otvorenie v prehliadači**:
   Navigujte na `http://localhost:3000`

## 📁 Štruktúra projektu

```
dychova-hudba-ordzovianka/
├── index.html          # Hlavný HTML súbor
├── styles.css          # CSS štýly
├── script.js           # JavaScript funkcionalita
├── package.json        # Konfigurácia projektu
└── README.md           # Tento súbor
```

## 🛠️ Technológie

- **HTML5**: Semantická štruktúra
- **CSS3**: Moderné štýly s CSS Grid a Flexbox
- **JavaScript (ES6+)**: Interaktívna funkcionalita
- **Font Awesome**: Ikony
- **Google Fonts**: Typografia

## 📱 Responzívny dizajn

Webstránka je plne responzívna a optimalizovaná pre:
- Desktop počítače
- Tablety
- Mobilné telefóny

## 🎯 Hlavné funkcie

### Navigácia
- Fixná navigačná lišta s gradientom
- Mobilné menu s hamburger ikonou
- Plynulé prechody medzi sekciami

### Kalendár koncertov
- Interaktívny kalendár s označenými koncertmi
- Navigácia medzi mesiacmi
- Klikateľné dátumy s detailmi koncertov

### Newsletter
- Validovaný formulár
- Potvrdenie úspešného odoslania
- Súhlas so spracovaním údajov

### Animácie
- Scroll animácie pre karty a prvky
- Hover efekty na tlačidlách a kartách
- Plynulé prechody medzi sekciami

## 🎨 Vlastné nastavenia

### Zmena farieb
Farebná schéma je definovaná v CSS premenných v súbore `styles.css`:

```css
:root {
    --primary-blue: #1e3a8a;
    --secondary-blue: #3b82f6;
    --primary-red: #dc2626;
    --secondary-red: #ef4444;
    /* ... */
}
```

### Pridanie koncertov
Koncerty môžete pridať v súbore `script.js` v poli `concerts`:

```javascript
const concerts = [
    { date: '2024-12-15', title: 'Vianočný koncert', location: 'Kostol sv. Martina' },
    // Pridajte ďalšie koncerty...
];
```

## 📞 Kontaktné informácie

Pre zmeny kontaktných informácií upravte sekciu v `index.html`:

```html
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <div>
        <h4>Telefón</h4>
        <p>+421 2 123 456 78</p>
    </div>
</div>
```

## 🔧 Vývoj

### Pridanie nových sekcií
1. Pridajte novú sekciu do `index.html`
2. Pridajte navigačný odkaz
3. Upravte CSS štýly podľa potreby
4. Pridajte JavaScript funkcionalitu ak je potrebná

### Optimalizácia
- Obrázky sú optimalizované pre web
- CSS a JavaScript sú minifikované pre produkciu
- Používajú sa moderné webové štandardy

## 📄 Licencia

Tento projekt je vytvorený pre Dychovú hudbu Ordžovianka. Všetky práva vyhradené.

## 🤝 Príspevky

Pre príspevky do projektu:
1. Vytvorte fork projektu
2. Vytvorte feature branch
3. Urobte zmeny
4. Odošlite pull request

---

**Vytvorené s ❤️ pre Dychovú hudbu Ordžovianka** 