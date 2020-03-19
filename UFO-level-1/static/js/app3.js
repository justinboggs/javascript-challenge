// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
// console.log(tableData);

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
            cell.text(val);
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


d3.selectAll("#filter-btn").on("click", dtfilter);

tableBuild(tableData);

