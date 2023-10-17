var vg_1 = "happiness_map.vg.json";
var vg_2 = "happiness_boxplot.vg.json";
var vg_3 = "happiness_boxplot2.vg.json";
var vg_4 = "happiness_stacked_asia.vg.json";
var vg_5 = "happiness_stacked_africa.vg.json";
var vg_6 = "happiness_stacked_southAmerica.vg.json";
var vg_7 = "happiness_stacked_northAmerica.vg.json";
var vg_8 = "happiness_stacked_oceania.vg.json";
var vg_9 = "happiness_stacked_europe.vg.json";
var vg_10 = "happiness_parallel.vg.json"

// var vg_5 = "happiness_matrix.vg.json";

vegaEmbed("#world_map", vg_1, { "actions": false }).then(function(result) { 
    //AccesstheVegaviewinstance (https://vega.github.io/vega/docs/api/view/)asresult.view 
}).catch(console.error);

vegaEmbed("#box_plot", vg_2, { "actions": false }).then(function(result) { 
  //AccesstheVegaviewinstance (https://vega.github.io/vega/docs/api/view/)asresult.view 
}).catch(console.error);

vegaEmbed("#box_plot2", vg_3, { "actions": false }).then(function(result) { 
  //AccesstheVegaviewinstance (https://vega.github.io/vega/docs/api/view/)asresult.view 
}).catch(console.error);

vegaEmbed("#stacked_asia", vg_4, { "actions": false }).then(function(result) { 
  //AccesstheVegaviewinstance (https://vega.github.io/vega/docs/api/view/)asresult.view 
}).catch(console.error);

vegaEmbed("#stacked_africa", vg_5, { "actions": false }).then(function(result) { 
  //AccesstheVegaviewinstance (https://vega.github.io/vega/docs/api/view/)asresult.view 
}).catch(console.error);

vegaEmbed("#stacked_southAmerica", vg_6, { "actions": false }).then(function(result) { 
  //AccesstheVegaviewinstance (https://vega.github.io/vega/docs/api/view/)asresult.view 
}).catch(console.error);

vegaEmbed("#stacked_northAmerica", vg_7, { "actions": false }).then(function(result) { 
  //AccesstheVegaviewinstance (https://vega.github.io/vega/docs/api/view/)asresult.view 
}).catch(console.error);

vegaEmbed("#stacked_oceania", vg_8, { "actions": false }).then(function(result) { 
  //AccesstheVegaviewinstance (https://vega.github.io/vega/docs/api/view/)asresult.view 
}).catch(console.error);

vegaEmbed("#stacked_europe", vg_9, { "actions": false }).then(function(result) { 
  //AccesstheVegaviewinstance (https://vega.github.io/vega/docs/api/view/)asresult.view 
}).catch(console.error);

vegaEmbed("#parallel_region", vg_10, { "actions": false }).then(function(result) { 
  //AccesstheVegaviewinstance (https://vega.github.io/vega/docs/api/view/)asresult.view 
}).catch(console.error);

// vegaEmbed("#matrix", vg_5, { "actions": false }).then(function(result) { 
//   //AccesstheVegaviewinstance (https://vega.github.io/vega/docs/api/view/)asresult.view 
// }).catch(console.error);

