// from data.js
var tableData = data;

// Used Activity 3-Evr_D3_Table as an example

//Get reference to the table body
var tbody = d3.select("tbody");

//Console.log the tableData from data.js
console.log(tableData);

//Step 1: Loop through "data" and console.log for each alien report object
tableData.forEach(function(alienReport) {
    console.log(alienReport);
});

//Setp 2: Use D3 to append one table row "tr" for each alien report object
tableData.forEach(function(alienReport) {
    console.log(alienReport);
    var row = tbody.append("tr");
});

//Step 3: Use "object.entries" to console.log each alien report value
tableData.forEach(function(alienReport) {
    console.log(alienReport);
    var row = tbody.append("tr");

    Object.entries(alienReport).forEach(function([key, value]) {
        console.log(key, value);             
    });
});

//Step 4: Use d3 to append 1 cell per alien report value (datetime, city, state, country, shape, durationMinues, comments)
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

//Event Listener: Using inclass example #4

//Get reference to the button on the page with the id property set to "Filter Table"
var button = d3.select("#Filter Table");

//Getting a reference to the input element on the page with the id property set to "input-field"
var inputField = d3.select("#Enter a Date");

//This function is triggered when the button is clicked
function handleClick() { 
    console.log("A button was clicked!");

    // We can use d3 to see the object that dispatched the event
    console.log(d3.event.target);
}

// We can use the "on" function in d3 to attach an event to the handler function
button.on("click", handleClick);

//You can also define the click handler inline
button.on("click", function() {
    console.log("Hi, a button was clicked!")
    console.log(d3.event.target);
});

// Event handler select datetime
button.on("click", function() {
    d3.select(datetime);
});

//Input fields can trigger a change event when new text is entered
inputField.on("change", function() {
    var newText = d3.event.target.value;
    console.log(newText);
});