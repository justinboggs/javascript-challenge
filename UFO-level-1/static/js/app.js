// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

// Step 1: Loop Through `data` and console.log each ufo report object
tableData.forEach(function (ufoReport) {
    console.log(ufoReport);
});

