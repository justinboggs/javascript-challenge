// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// build the function to loop through and append the data to a table
function tableBuild(data) {
    // clear out existing data
    tbody.html("");
    // loop through each object in the data and append row and cells for each value
    data.forEach((dataRow) => {
        // append the row to the table body
        const row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            // look through the row in the dataRow and add each value to the table data
            let cell = row.append("td");
            cell.html(val);
        });
    });

};

// create datetime filter function
function dtfilter() {
    // collect the datetime value from the filter
    const justin = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // filter the data using the entered date
    if (justin) {
        // keep the rows in the table that match the filter value
        filteredData = filteredData.filter(row => row.datetime === justin)
    };
    // build the table using filtered data
    tableBuild(filteredData);
};

// listen for the button click
d3.selectAll("#filter-btn").on("click", dtfilter);

// build the table on page load
tableBuild(tableData);