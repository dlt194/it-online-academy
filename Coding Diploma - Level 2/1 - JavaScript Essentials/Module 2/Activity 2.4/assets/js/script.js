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

function syntaxPractice() {
  var myName = "Dan";
  var myAge = 30;
  var myHobby = "coding";
  var myFavoriteColor = "blue";
  var myFavoriteFood = "pizza";

  var paragraph = document.getElementById("syntaxTarget");

  var paragraphContent = `Hello, my name is ${myName}. I am ${myAge} years old. My hobby is ${myHobby}, my favorite color is ${myFavoriteColor}, and I love to eat ${myFavoriteFood}.`;

  paragraph.textContent = paragraphContent;
  console.log("Syntax practice completed successfully!");
  alert(
    "The click of the button should have changed the text in the paragraph! If you check your console, you will see the message that the syntax practice was completed successfully."
  );
}
