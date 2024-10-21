// Funktion zum Einfügen der Daten in die Tabelle
function insertDataIntoTable(data) {
    var tableBody = document.querySelector("#tabelleco2 tbody");

    // Schleife über jedes Element im JSON-Datensatz
    data.forEach(function (item) {
        // Erstelle eine neue Tabellenzeile
        var row = document.createElement("tr");

        // Erstelle Zellen für die Spalten und füge den Inhalt ein
        var lfdCell = document.createElement("td");
        lfdCell.textContent = item.lfd;
        row.appendChild(lfdCell);

        var landCell = document.createElement("td");
        landCell.textContent = item.land;
        row.appendChild(landCell);

        var unternehmenCell = document.createElement("td");
        unternehmenCell.textContent = item.unternehmen;
        row.appendChild(unternehmenCell);

        var jahrCell = document.createElement("td");
        jahrCell.textContent = item.jahr;
        row.appendChild(jahrCell);

        var emissionenCell = document.createElement("td");
        emissionenCell.textContent = item.emissionen;
        row.appendChild(emissionenCell);

        // Füge die Zeile zum Tabellenkörper hinzu
        tableBody.appendChild(row);
    });

}

function initTable() {
    var table = new DataTable('#tabelleco2', {
        // Optional: Hier weitere DataTables-Optionen anpassen
        paging: true,          // Seitenumschaltung aktivieren
        searching: true,       // Suchfeld aktivieren
        ordering: true,        // Sortierung aktivieren
        info: false,            // Informationen zur Tabelle anzeigen
        responsive: true,
        // Optionale Anpassungen
        language: {
            url: 'https://cdn.datatables.net/plug-ins/2.1.4/i18n/de-DE.json', // Deutsche Sprache
        },
        layout: {
            topStart: {
                pageLength: {
                    menu: [10, 50, 100, 250, 500] // Anzeige je Seite anpassen
                }
            }
        }
    });
}


// Abrufen der JSON-Daten aus der externen Datei
fetch('json/emissionen.json')
    .then(response => response.json())  // Konvertiere die Antwort zu JSON
    .then(data => insertDataIntoTable(data))  // Rufe die Funktion zum Einfügen der Daten auf
    .then(() => initTable()) // Initialisiere die Tabelle
    .catch(error => console.error('Fehler beim Abrufen der Daten:', error));  // Fehlermanagement
