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