let array = []; // Here we initialize an empty array, this will store elements that we will manipulate.

function displayArray() {
  const container = document.getElementById("arrayElements");
  container.innerHTML = "";

  array.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.textContent = `Item ${index + 1}: ${item}`;
    container.appendChild(itemDiv);
  });
}

// Here is our function to push elements into the array.
function addElement() {
  const elementInput = document.getElementById("elementInput").value.trim();

  if (elementInput !== "") {
    array.push(elementInput);
    displayArray();
    document.getElementById("elementInput").value = "";
  } else {
    alert("Please enter a valid element.");
  }
}

// Here is our function to remove elements from the array. It uses a switch statement
// to determine whether to remove the first or last element.
function removeElement(type) {
  if (array.length === 0) {
    alert("Array is empty. Nothing to remove.");
    return;
  }

  switch (type) {
    case "first":
      array.shift();
      break;
    case "last":
      array.pop();
      break;

    default:
      alert("Invalid removal type.");
      return;
  }

  displayArray();
}
