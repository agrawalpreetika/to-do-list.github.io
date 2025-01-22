// Event listener for the entire todo list container
// basically e  is the element
document.getElementById("task-list").addEventListener("click", function (e) {
  // Check if the clicked element is the toggle icon (with class 'toggle-check')
  if (e.target.classList.contains("toggle-check")) {
    const icon = e.target;
    const text = icon.nextElementSibling; // The <span> element next to the icon

    // Toggle between fa-circle and fa-check-circle
    if (icon.classList.contains("fa-circle")) {
      icon.classList.remove("fa-circle");
      icon.classList.add("fa-check-circle");
      text.classList.add("strike"); // Add the strike-through effect
    } else {
      icon.classList.remove("fa-check-circle");
      icon.classList.add("fa-circle");
      text.classList.remove("strike"); // Remove the strike-through effect
    }
  }
});

// js for adding a task to the list

document
  .getElementById("add-task-button")
  .addEventListener("click", function () {
    const textInput = document.getElementById("task-input").value;
    if (textInput.trim() == "") {
      alert("Please enter a task :)");
    } else {
      const taskList = document.getElementById("task-list");
      const newtask = document.createElement("li");
      newtask.innerHTML = `<i class="far fa-circle toggle-check"></i><span class="item">${textInput}</span><i class="fa-regular fa-pen-to-square"></i>
          <i class="fa-regular fa-trash-can"></i>`;
      taskList.appendChild(newtask);
      document.getElementById("task-input").value = "";
    }
    saveData();
  });

// js for deleting a task from the list

document.getElementById("task-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash-can")) {
    e.target.parentElement.remove();
  }
  saveData();
});

// js for editing a task from the list

document.getElementById("task-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-pen-to-square")) {
    const text = e.target.previousElementSibling;
    const newText = prompt("Edit task", text.innerHTML);
    if (newText != "") {
      text.innerHTML = newText;
    } else {
      text.innerHTML = text.innerHTML;
    }
    saveData();
  }
});

function saveData() {
  const taskList = document.getElementById("task-list");
  localStorage.setItem("data", taskList.innerHTML);
}

function loadData() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = localStorage.getItem("data");
}

document.addEventListener("DOMContentLoaded", loadData);
