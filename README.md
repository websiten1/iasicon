# IASICON — Website modern

Website static redesigned, în limba română, pentru IASICON S.A. — o companie românească de construcții fondată în 1958. Preia toate informațiile din site-ul original (http://92.87.201.194) și le prezintă într-o formă modernă, europeană, sobru instituțională.

## Structura

```
iasicon-modern/
├── index.html          # Pagina de pornire (hero, valori, stats, portofoliu selectat, certificări)
├── despre.html         # Istoric, performanță, excelență, timeline
├── servicii.html       # Domenii de expertiză + listă completă de servicii
├── portofoliu.html     # Toate lucrările (finalizate + în desfășurare), pe categorii
├── certificari.html    # ISO 9001, 14001, OHSAS 18001, AAC + Trofeele Calității
├── cariere.html        # Posturi disponibile, beneficii, cum aplici
├── convocator.html     # Relații cu investitorii / Convocator AGA
├── contact.html        # Date de contact, formular, hartă
├── styles.css          # Design system (tipografie, culori, componente)
├── script.js           # Nav mobile, reveal on scroll, tabs, form handler
└── README.md
```

## Design

Limbaj vizual inspirat din comunicarea instituțională europeană:

- **Paletă**: navy profund (`#0b1f3a`), acord cald „aramă” (`#b08a3f`), off-white de calcar (`#faf8f3`), albastru de accent (`#0a4d8c`).
- **Tipografie**: `Fraunces` (serif) pentru titluri — transmite heritage și eleganță — și `Inter` pentru body — modern, neutru, lizibil.
- **Componente**: header sticky cu bară superioară informativă, hero cu statistici live, cărți cu margine aurită, carduri de proiect cu gradient arhitectural, timeline, tabs pentru portofoliu, form de contact, hartă integrată.
- **Responsive**: mobil, tabletă, desktop. Menu hamburger sub 720px.
- **Accesibilitate**: contrast ridicat, label-uri pentru inputs, `aria-expanded` pentru meniu, focus vizibil.
- **Animații**: reveal subtil la scroll (IntersectionObserver). Fără elemente „zgomotoase”.

## Rulare locală

```bash
cd iasicon-modern
python3 -m http.server 8080
# apoi deschide http://localhost:8080
```

Sau deschide direct `index.html` într-un browser.

## Transparență & seriozitate

Site-ul accentuează:

- **Istoria**: 1958 fondare, 1992 privatizare, proiecte de restaurare finalizate 2007–2010.
- **Cifre**: 200+ angajați, cifră medie 51,2M RON, 6 Trofee ale Calității, 4 certificări.
- **Capital**: 100% românesc, privat.
- **Proiect european**: secțiune dedicată finanțării FEDR (POS CCE 2007–2013).
- **Relații investitori**: pagină dedicată pentru convocatoare AGA.
- **Cod fiscal vizibil** în top-bar și footer, pentru încredere.

## Conținutul preluat

Toate secțiunile originale sunt păstrate:

- Cele 7 pagini principale (Home, Despre, Servicii, Lucrări, Certificate, Convocator, Cariere) + Contact.
- Toate proiectele listate pe categorii (Restaurări, Civile/Industriale, Mediu, Drumuri).
- Lucrări finalizate și în desfășurare, ambele seturi complete.
- Lista de servicii integrale și diversificarea (hotel, imobiliar).
- Toate datele de contact oficiale și emailurile pe departamente.
- Nota privind proiectul finanțat din fonduri UE.
