import json, csv

STOPS_GEOJSON = "data/stops.geojson"
OUT_CSV = "data/supply_shares.csv"

with open(STOPS_GEOJSON, "r", encoding="utf-8") as f:
    gj = json.load(f)

counts = {}
total = 0
for feat in gj["features"]:
    mode = feat.get("properties", {}).get("MODE", "UNKNOWN")
    counts[mode] = counts.get(mode, 0) + 1
    total += 1

with open(OUT_CSV, "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["MODE", "SupplyShare", "StopCount"])
    for mode, c in sorted(counts.items(), key=lambda x: x[1], reverse=True):
        w.writerow([mode, c/total, c])

print("Wrote", OUT_CSV)