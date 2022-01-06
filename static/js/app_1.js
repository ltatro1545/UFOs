// import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

// Create function to build data based off data input
function buildTable(data) {
    // clear existing data (if any)
    tbody.html("");

    // loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // adds HTML tag to create row in table
        let row = tbody.append("tr");

        // reference one obj from array of UFO sightings
        // forEach((val) specifies we want one object per row
        Object.values(dataRow).forEach((val) => {
            // create var to append data to table
            let cell = row.append("td");
            // added value from object into the cell
            cell.text(val);
            }
        );
    });
}

// function to process clicks when filtering data
function handleClick() {

    // chain .property to d3.select to look for date values and store data to var
    let date = d3.select("#datetime").property("value");
    // set default filter variable
    let filteredData = tableData;

    // filter for date ( === means strict equality, compared to == meaning loose equality)
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    // rebuild table using filtered data
    // @NOTE if no date was entered, then filteredData will
    // be original tableData
    buildTable(filteredData);
}

// select filter button on click, executing the function
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);