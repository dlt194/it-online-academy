function changeText() {
  var paragraph = document.getElementById("paragraphToChange");
  var newContent =
    "This is the new text! You can see that the text has changed.";

  paragraph.textContent = newContent;
}
