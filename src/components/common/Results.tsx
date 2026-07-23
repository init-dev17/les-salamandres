import React, { useEffect, useState } from "react";
import Papa from "papaparse";

// Liste des URLs CSV publiées, une par onglet
//const SHEET_ID = "2PACX-1vSAeAyNBuZvn7LG_-GNqVS10kmDK0wXstfGqWpHuYXwFW6BonPN7HpeRlRVnn9DFLQeOEAC8_9w6voq";

const SHEET_URLS = [
  { name: "FootUS U18", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAeAyNBuZvn7LG_-GNqVS10kmDK0wXstfGqWpHuYXwFW6BonPN7HpeRlRVnn9DFLQeOEAC8_9w6voq/pub?gid=0&single=true&output=csv" },
  {
    name: "FootUS Séniors",
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAeAyNBuZvn7LG_-GNqVS10kmDK0wXstfGqWpHuYXwFW6BonPN7HpeRlRVnn9DFLQeOEAC8_9w6voq/pub?gid=767959993&single=true&output=csv",
  },
  {
    name: "Flag U17",
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAeAyNBuZvn7LG_-GNqVS10kmDK0wXstfGqWpHuYXwFW6BonPN7HpeRlRVnn9DFLQeOEAC8_9w6voq/pubhtml?gid=293425910&single=true",
  },
  {
    name: "Flag Séniors",
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAeAyNBuZvn7LG_-GNqVS10kmDK0wXstfGqWpHuYXwFW6BonPN7HpeRlRVnn9DFLQeOEAC8_9w6voq/pub?gid=1269097111&single=true&output=csv",
  },
  // ajoute les autres onglets…
];

type Row = Record<string, string>;

type SheetData = {
  name: string;
  data: Row[];
  loading: boolean;
  error?: string | null;
};

export default function AllSheetsTables() {
  const [sheetsData, setSheetsData] = useState<SheetData[]>(
    SHEET_URLS.map((s) => ({ name: s.name, data: [], loading: true, error: null }))
  );

  useEffect(() => {
    SHEET_URLS.forEach((sheet, index) => {
      Papa.parse<Row>(sheet.url, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          setSheetsData((prev) => {
            const copy = [...prev];
            copy[index] = {
              name: sheet.name,
              data: results.data,
              loading: false,
              error: null,
            };
            return copy;
          });
        },
        error: (err) => {
          setSheetsData((prev) => {
            const copy = [...prev];
            copy[index] = {
              name: sheet.name,
              data: [],
              loading: false,
              error: err.message,
            };
            return copy;
          });
        },
      });
    });
  }, []);

  return (
    <div>
      {sheetsData.map((sheet, i) => (
        <section key={i} style={{ marginBottom: "2rem" }}>
          <h2>{sheet.name}</h2>

          {sheet.loading && <p>Chargement de l’onglet {sheet.name}…</p>}
          {sheet.error && <p style={{ color: "red" }}>Erreur : {sheet.error}</p>}
          {!sheet.loading && !sheet.error && sheet.data.length === 0 && (
            <p>Aucune donnée dans l’onglet {sheet.name}.</p>
          )}
          {!sheet.loading && !sheet.error && sheet.data.length > 0 && (
            <table>
              <thead>
                <tr>
                  {Object.keys(sheet.data[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sheet.data.map((row, rIndex) => (
                  <tr key={rIndex}>
                    {Object.values(row).map((cell, cIndex) => (
                      <td key={cIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      ))}
    </div>
  );
}