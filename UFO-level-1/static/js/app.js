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

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function () {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(report => tableData.datetime === inputValue);

    console.log(filteredData);

    // BONUS: Calculate summary statistics for the age field of the filtered data

    // // First, create an array with just the age values
    // var ages = filteredData.map(person => person.age);

    // // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
    // var mean = math.mean(ages);
    // var median = math.median(ages);
    // var mode = math.mode(ages);
    // var variance = math.var(ages);
    // var standardDeviation = math.std(ages);

    // // Then, select the unordered list element by class name
    // var list = d3.select(".summary");

    // // remove any children from the list to
    // list.html("");

    // // append stats to the list
    // list.append("li").text(`Mean: ${mean}`);
    // list.append("li").text(`Median: ${median}`);
    // list.append("li").text(`Mode: ${mode}`);
    // list.append("li").text(`Variance: ${variance}`);
    // list.append("li").text(`Standard Deviation: ${standardDeviation}`);
});
