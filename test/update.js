// Update text color based on checkbox state for a given div
function upcss(div, checkbox) {
  const span = div.querySelector("span");
  const paragraph = div.querySelector("p");

  if (checkbox.checked) {
    // Apply gray color when checkbox is checked
    span.style.color = "gray";
    paragraph.style.color = "gray";
  } else {
    // Revert to black color when checkbox is unchecked
    span.style.color = "black";
    paragraph.style.color = "black";
  }
}

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("checkbox-form");
  const addBoxButton = document.getElementById("add-box");
  let nextId = 2; // Start with the next available ID (assumes "1" is already used)

  // Add event listener to the "Add Box" button
  addBoxButton.addEventListener("click", () => {
    // Create a new div for the checkbox and associated elements
    const newDiv = document.createElement("div");

    // Create a new checkbox with incrementing ID
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.id = nextId;

    // Create a new span for the label
    const newSpan = document.createElement("span");
    newSpan.textContent = ` thing ${nextId}`;
    newSpan.style.color = "black";

    // Create a new paragraph for the description
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "dynamic content added";
    newParagraph.style.margin = "0px";
    newParagraph.style.color = "black";

    // Append elements to the new div
    newDiv.appendChild(newCheckbox);
    newDiv.appendChild(newSpan);
    newDiv.appendChild(newParagraph);

    // Append the new div to the form, before the "Add Box" button
    form.insertBefore(newDiv, addBoxButton);

    // Add an event listener to the new checkbox
    newCheckbox.addEventListener("input", () => upcss(newDiv, newCheckbox));

    // Increment the ID counter
    nextId++;
  });

  // Add event listeners to existing checkboxes
  const divs = document.querySelectorAll("form > div");
  divs.forEach((div) => {
    const checkbox = div.querySelector("input[type='checkbox']");
    checkbox.addEventListener("input", () => upcss(div, checkbox));
  });
});