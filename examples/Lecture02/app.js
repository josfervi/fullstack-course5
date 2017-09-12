// object literal
var student = {
  name: "",
  type: "student"
};

// Set up some listeners for different events

// Fire the contentLoaded function when the entire page
// is loaded and is intantiated inside the browser's memory
document.addEventListener('DOMContentLoaded', contentLoaded);

// Set up a keyup listener that fires the keyUp function
// when there is a keyup in the element whose id is 'name'
// (i.e. the input text box).
function contentLoaded(event) {
  document.getElementById('name').addEventListener("keyup", keyUp);
}

function keyUp(event) {
  calculateNumericOutput();
}

function calculateNumericOutput() {
  student.name = document.getElementById('name').value;

  var totalNameValue = 0;
  for (var i = 0; i < student.name.length; i++) {
    totalNameValue += student.name.charCodeAt(i);
  }

  // Insert result into page

  // Low Cohesion: this function is doing too much.
  /// It should just be computing totalNameValue,
  // not also builidng the string that is presented to the user.
  // The text should be moved to the presentation code, i.e. to index.html.
  var output = "Total Numeric value of person's name is " + totalNameValue;
  document.getElementById('output').innerText = output;
}
