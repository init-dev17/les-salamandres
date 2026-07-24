import { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";

const SHEET_URLS = [
  {
    name: "FootUS - Séniors",
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAeAyNBuZvn7LG_-GNqVS10kmDK0wXstfGqWpHuYXwFW6BonPN7HpeRlRVnn9DFLQeOEAC8_9w6voq/pub?gid=767959993&single=true&output=csv",
  },
  { 
    name: "FootUS - U18", url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAeAyNBuZvn7LG_-GNqVS10kmDK0wXstfGqWpHuYXwFW6BonPN7HpeRlRVnn9DFLQeOEAC8_9w6voq/pub?gid=0&single=true&output=csv" },
  {
    name: "Flag - Séniors",
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAeAyNBuZvn7LG_-GNqVS10kmDK0wXstfGqWpHuYXwFW6BonPN7HpeRlRVnn9DFLQeOEAC8_9w6voq/pub?gid=1269097111&single=true&output=csv",
  },
  {
    name: "Flag - U17",
    url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSAeAyNBuZvn7LG_-GNqVS10kmDK0wXstfGqWpHuYXwFW6BonPN7HpeRlRVnn9DFLQeOEAC8_9w6voq/pub?gid=293425910&single=true&output=csv",
  },
  
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
  const [selectedSheet, setSelectedSheet] = useState(0);
  const [selectedSeason, setSelectedSeason] = useState("Toutes");

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

  const currentSheet = sheetsData[selectedSheet];

  const seasons = useMemo(() => {
    if (!currentSheet || currentSheet.data.length === 0) return [];
    const unique = new Set<string>();
    for (const row of currentSheet.data) {
      if (row["Saison"]) unique.add(row["Saison"]);
    }
    return Array.from(unique).sort().reverse();
  }, [currentSheet]);

  const filteredData = useMemo(() => {
    if (!currentSheet) return [];
    if (selectedSeason === "Toutes") return currentSheet.data;
    return currentSheet.data.filter((row) => row["Saison"] === selectedSeason);
  }, [currentSheet, selectedSeason]);

  const selectClass =
    "text-black border border-gray-500 font-body font-medium text-sm tracking-wide px-4 py-2 cursor-pointer transition-colors rounded-3xl text-center focus:outline-none ";

  return (
    <div className="p-4 bg-gray-50">
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex flex-col gap-1">
          <label htmlFor="sheet-select" className="text-xs font-bold uppercase tracking-widest text-center text-packer-green/60">
            Compétition
          </label>
          <select
            id="sheet-select"
            className={selectClass}
            value={selectedSheet}
            onChange={(e) => {
              setSelectedSheet(Number(e.target.value));
              setSelectedSeason("Toutes");
            }}
          >
            {SHEET_URLS.map((sheet, i) => (
              <option key={i} value={i} className="bg-gray-50 text-left" >
                {sheet.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="season-select" className="text-xs font-bold uppercase tracking-widest text-center text-packer-green/60">
            Saison
          </label>
          <select
            id="season-select"
            className={selectClass}
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
          >
            <option value="Toutes">Toutes</option>
            {seasons.map((s) => (
              <option key={s} value={s} className="bg-gray-50 text-left">
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <section>
        {currentSheet?.loading && <p>Chargement de l'onglet {currentSheet.name}…</p>}
        {currentSheet?.error && <p className="text-red-600">Erreur : {currentSheet.error}</p>}
        {!currentSheet?.loading && !currentSheet?.error && filteredData.length === 0 && (
          <p>Aucune donnée pour cette sélection.</p>
        )}
        {!currentSheet?.loading && !currentSheet?.error && filteredData.length > 0 && (
          <div className="overflow-x-auto rounded-2xl">
            <table className="w-full border-collapse text-center">
              <thead>
                <tr>
                  {Object.keys(filteredData[0]).map((key) => (
                    <th
                      key={key}
                      className="bg-packer-green-light text-white font-normal text-xs tracking-widest px-4 py-3 text-center"
                    >
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, rIndex) => (
                  <tr
                    key={rIndex}
                    className={rIndex % 2 === 0 ? "bg-white" : "bg-salamandre-gray"}
                  >
                    {Object.values(row).map((cell, cIndex) => (
                      <td key={cIndex} className="px-1 py-2 text-sm border-b border-packer-green/10">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}