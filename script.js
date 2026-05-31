// Embed all Vega/Vega-Lite charts
// Note: actions=false hides the Vega editor controls for a cleaner submission.

const embedOpts = { actions: false };

function embedAll() {
  vegaEmbed("#vis1",  "charts/vis1_stops_map.json", embedOpts).catch(console.error);
  vegaEmbed("#vis2",  "charts/vis2_patronage_line.json", embedOpts).catch(console.error);
  vegaEmbed("#vis3",  "charts/vis3_mode_small_multiples.json", embedOpts).catch(console.error);
  vegaEmbed("#vis4",  "charts/vis4_population_density.json", embedOpts).catch(console.error);
  vegaEmbed("#vis5",  "charts/vis5_stop_density_heatmap.json", embedOpts).catch(console.error);
  vegaEmbed("#vis6",  "charts/vis6_patronage_forecast.json", embedOpts).catch(console.error);
  vegaEmbed("#vis7",  "charts/vis7_weekday_weekend_scatter.json", embedOpts).catch(console.error);
  vegaEmbed("#vis8",  "charts/vis8_monthly_heatmap.json", embedOpts).catch(console.error);
  vegaEmbed("#vis9",  "charts/vis9_transport_housing_scatter.json", embedOpts).catch(console.error);

  // FIX: your file is named vis10_supply_vs_use_share.json (not ..._use_shar.json)
  vegaEmbed("#vis10", "charts/vis10_supply_vs_use_share.json", embedOpts).catch(console.error);
}

// Run after the page has built all #vis* containers.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", embedAll);
} else {
  embedAll();
}