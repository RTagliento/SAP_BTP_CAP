# SAP CAP Tile Navigation Project

Progetto SAP CAP con navigazione tramite tile, simile a SAP Work Zone.

## Struttura del Progetto

- **Launchpad**: Vista principale con 3 tile per la navigazione
- **Gestione Ordini**: Applicazione per gestire gli ordini
- **Catalogo Prodotti**: Applicazione per gestire il catalogo prodotti
- **Gestione Clienti**: Applicazione per gestire i clienti

## Prerequisiti

- Node.js (v18 o superiore)
- npm (v8 o superiore)

## Installazione

1. Installa le dipendenze:
```bash
npm install
```

2. Inizializza il database con i dati di esempio:
```bash
npm run deploy
```

## Avvio dell'Applicazione

Avvia il server CAP:
```bash
npm start
```

L'applicazione sarà disponibile su `http://localhost:4004`

## Navigazione

1. Apri il browser all'indirizzo: `http://localhost:4004/launchpad/index.html`
2. Vedrai 3 tile:
   - **Gestione Ordini** - Gestisci gli ordini clienti
   - **Catalogo Prodotti** - Gestisci i prodotti in catalogo
   - **Gestione Clienti** - Gestisci l'anagrafica clienti
3. Clicca su una tile per navigare all'applicazione corrispondente

## Servizi OData Disponibili

- `/orders` - Servizio per la gestione degli ordini
- `/products` - Servizio per la gestione dei prodotti
- `/customers` - Servizio per la gestione dei clienti

## Struttura delle Directory

```
.
├── app/                           # Applicazioni SAPUI5
│   ├── launchpad/                # Launchpad principale con tile
│   │   └── index.html           # Vista principale launchpad
│   ├── orders/                   # App Gestione Ordini
│   │   └── webapp/
│   │       ├── index.html       # Entry point
│   │       ├── mainView.view.xml        # Vista principale
│   │       └── mainView.controller.js   # Controller
│   ├── products/                 # App Catalogo Prodotti
│   │   └── webapp/
│   │       ├── index.html       # Entry point
│   │       ├── mainView.view.xml        # Vista principale
│   │       └── mainView.controller.js   # Controller
│   └── customers/                # App Gestione Clienti
│       └── webapp/
│           ├── index.html       # Entry point
│           ├── mainView.view.xml        # Vista principale
│           └── mainView.controller.js   # Controller
├── db/                           # Modello dati e dati di esempio
│   ├── schema.cds               # Definizione entità
│   └── data/                    # File CSV con dati di esempio
└── srv/                          # Servizi CAP
    └── service.cds              # Definizione servizi OData
```

## Tecnologie Utilizzate

- SAP Cloud Application Programming Model (CAP)
- SAPUI5 con pattern MVC (Model-View-Controller)
- XML Views per le interfacce utente
- JavaScript Controllers per la logica applicativa
- SQLite (database locale)
- OData V4

## Architettura delle Webapp

Ogni applicazione segue il pattern MVC classico di SAPUI5:

- **index.html**: File HTML basico che carica SAPUI5 e inizializza la vista
- **mainView.view.xml**: Vista XML con la struttura UI (tabelle, filtri, pulsanti)
- **mainView.controller.js**: Controller JavaScript con la logica applicativa

### Funzionalità implementate:

- Visualizzazione dati in tabelle responsive
- Ricerca e filtro dei dati
- Refresh dei dati
- Visualizzazione dettagli al click su elemento
- Navigazione back al launchpad
- Binding OData V4

## Sviluppo

Per modificare le applicazioni:

1. **Modificare la vista**: Edita i file `mainView.view.xml`
2. **Modificare la logica**: Edita i file `mainView.controller.js`
3. **Modificare i dati**: Edita `db/schema.cds` e `srv/service.cds`
4. **Riavvia il server**: `npm start`

Per aggiungere nuove viste:
1. Crea un nuovo file `.view.xml`
2. Crea il relativo `.controller.js`
3. Configura la navigazione nell'`index.html`

## Note

- Il progetto utilizza SQLite come database locale per lo sviluppo
- I dati di esempio vengono caricati automaticamente all'avvio
- Le applicazioni utilizzano SAPUI5 custom con pattern MVC
- Ogni webapp ha la sua view e controller indipendenti
- Il tema utilizzato è SAP Horizon
