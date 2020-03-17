// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

// Step 1: Loop Through `data` and console.log each ufo report object
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
});

// Step 2:  Use d3 to append one table row `tr` for each weather report object
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
});

// Step 3:  Use `Object.entries` to console.log each weather report value
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
    });
});

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
// tableData.forEach(function(ufoReport) {
//     console.log(ufoReport);
//     var row = tbody.append("tr");

//     Object.entries(ufoReport).forEach(function([key, value]) {
//         // Append a cell to the row for each value
//         console.log(key, value);
//         // in the weather report object
//         var cell = row.append("td");
//     });
// });

// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td");
        cell.html(value);
    });
});

// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("filter-btn");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#input-field");

// This function is triggered when the button is clicked
function handleClick() {
    console.log("A button was clicked!");

    // We can use d3 to see the object that dispatched the event
    console.log(d3.event.target);
}