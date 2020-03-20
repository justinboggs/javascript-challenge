// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// build the function to loop through and append the data to a table
function tableBuild(data) {
    tbody.html("");
    // Step 1: Loop Through `data` and console.log each ufo report object
    data.forEach((dataRow) => {
        // console.log(data);
        // Step 2:  Use d3 to append one table row `tr` for each ufo report object
        const row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            // console.log(key, value);
            // Append a cell to the row for each value
            // in the ufo report object
            let cell = row.append("td");
            cell.html(val);
        });
    });

};

function dtfilter() {
    const justin = d3.select("#datetime").property("value");
    // 
    let filteredData = tableData; 
    if (justin) {
        filteredData = filteredData.filter(row => row.datetime === justin)
    };
    tableBuild(filteredData);
};

// Attach to the 
d3.selectAll("#filter-btn").on("click", dtfilter);

// Build the table on page load
tableBuild(tableData);

