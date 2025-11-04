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
├── app/                    # Applicazioni Fiori
│   ├── launchpad/         # Launchpad principale con tile
│   ├── orders/            # App Gestione Ordini
│   ├── products/          # App Catalogo Prodotti
│   └── customers/         # App Gestione Clienti
├── db/                     # Modello dati e dati di esempio
│   ├── schema.cds         # Definizione entità
│   └── data/              # File CSV con dati di esempio
└── srv/                    # Servizi CAP
    └── service.cds        # Definizione servizi OData
```

## Tecnologie Utilizzate

- SAP Cloud Application Programming Model (CAP)
- SAP Fiori Elements
- SAPUI5
- SQLite (database locale)
- OData V4

## Sviluppo

Per aggiungere nuove entità o modificare quelle esistenti:

1. Modifica il file `db/schema.cds`
2. Esponi le entità nei servizi in `srv/service.cds`
3. Aggiungi annotazioni UI in `app/[app-name]/annotations.cds`
4. Riavvia il server

## Note

- Il progetto utilizza SQLite come database locale per lo sviluppo
- I dati di esempio vengono caricati automaticamente all'avvio
- Le applicazioni utilizzano SAP Fiori Elements con template List Report e Object Page
