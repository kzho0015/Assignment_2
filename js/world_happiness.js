var vg_1 = "happiness_map.vg.json";
var vg_2 = "happiness_boxplot.vg.json";
var vg_3 = "happiness_boxplot2.vg.json";
var vg_4 = "happiness_stacked.vg.json";
var vg_5 = "happiness_matrix.vg.json";

vegaEmbed("#world_map", vg_1, { "actions": false }).then(function(result) { 
    //AccesstheVegaviewinstance (https://vega.github.io/vega/docs/api/view/)asresult.view 
}).catch(console.error);

vegaEmbed("#box_plot", vg_2, { "actions": false }).then(function(result) { 
  //AccesstheVegaviewinstance (https://vega.github.io/vega/docs/api/view/)asresult.view 
}).catch(console.error);

vegaEmbed("#box_plot2", vg_3, { "actions": false }).then(function(result) { 
  //AccesstheVegaviewinstance (https://vega.github.io/vega/docs/api/view/)asresult.view 
}).catch(console.error);

vegaEmbed("#stacked", vg_4, { "actions": false }).then(function(result) { 
  //AccesstheVegaviewinstance (https://vega.github.io/vega/docs/api/view/)asresult.view 
}).catch(console.error);

vegaEmbed("#matrix", vg_5, { "actions": false }).then(function(result) { 
  //AccesstheVegaviewinstance (https://vega.github.io/vega/docs/api/view/)asresult.view 
}).catch(console.error);