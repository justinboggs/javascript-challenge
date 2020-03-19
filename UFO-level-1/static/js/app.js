// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
// console.log(tableData);

function tableBuild(data) {
    tbody.html("");
    
    // Step 1: Loop Through `data` and console.log each ufo report object
    tableData.forEach(function(data) {
        // console.log(data);
    });

    // Step 2:  Use d3 to append one table row `tr` for each ufo report object
    tableData.forEach(function(data) {
        // console.log(data);
        var row = tbody.append("tr");
    });

    // Step 3:  Use `Object.entries` to console.log each ufo report value
    tableData.forEach(function(data) {
        // console.log(data);
        var row = tbody.append("tr");

        Object.entries(data).forEach(function([key, value]) {
            // console.log(key, value);
        });
    });

    // Step 5: Use d3 to update each cell's text with
    // ufo report values (weekday, date, high, low)
    tableData.forEach(function(data) {
        // console.log(data);
        var row = tbody.append("tr");
        Object.entries(data).forEach(function([key, value]) {
            // console.log(key, value);
            // Append a cell to the row for each value
            // in the ufo report object
            var cell = row.append("td");
            cell.html(value);
        });
    });

};

function dtfilter() {
    const filterDate = d3.select("#datetime").property("value");
    // 
    let filteredData = tableData; 
    if (filterDate) {
        filteredData = filteredData.filter(row => row.datetime === filterDate)
    };
};

d3.selectAll("#filter-btn").on("click", dtfilter);



