function changeText() {
  var paragraph = document.getElementById("paragraphToChange");
  var newContent =
    "This is the new text! You can see that the text has changed.";

  paragraph.textContent = newContent;
}

window.onload = function () {
  console.log("The page has loaded successfully!");
  console.log(
    "The goal for this activity is logging a message to the console of the browser."
  );
};
