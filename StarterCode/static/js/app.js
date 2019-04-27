// from data.js
var tableData = data;

// Used Activity 3-Evr_D3_Table as an example

//Get reference to the table body
var tbody = d3.select("tbody");

//Console.log the tableData from data.js
console.log(tableData);

tableData.forEach(function(alienReport) {
    console.log(alienReport);
    var row = tbody.append("tr");

    Object.entries(alienReport).forEach(function([key, value]) {
        console.log(key, value);
        //Append a cell to the row for each value in the alienReport object
        var cell = row.append("td")
        cell.text(value);
    });
});

//Event Listener: Using inclass example #9

// Select the Filter Table button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

//delete tbody table before new filtered table inserted


// Prevent the page from refreshing
    d3.event.preventDefault();

// Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

// Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    var tbody = d3.select("tbody");
    tbody.selectAll("tr").remove();

    filteredData.forEach(function(alienReport) {
        console.log(alienReport);
        var row = tbody.append("tr");
    
        Object.entries(alienReport).forEach(function([key, value]) {
            console.log(key, value);
            //Append a cell to the row for each value in the alienReport object
            var cell = row.append("td")
            cell.text(value);
        });
    });

    console.log(filteredData);

});

