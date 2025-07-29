// JavaScript thinking process

/*

Step 1: Problem ko breakdown kar
    
    Main question: User button dabayega, to kya hona chahiye?
    1. Input se text lena hai
    2. Kahi store karna hai
    3. Screen pe dikhana hai
    4. Input clear karna hai

Step 2: JavaScript planning approach

    Think like this:
    A) Pehle variables decide kar:

    // Kya chahiye?
    // - Input element pakadna hai
    // - Button element pakadna hai  
    // - Todos list pakadna hai
    // - Data store karne ke liye array

    B) Functions decide kar:
    // Kya kya functions banane honge?
    // - addTodo() - naya todo add karne ke liye
    // - displayTodos() - todos dikhane ke liye  
    // - clearInput() - input clear karne ke liye



Step 3: Coding approach

    Start with this mindset:
    1. Pehle elements pakad (getElementById)
    2. Event listener laga (button click)
    3. Step by step function bana (ek kaam = ek function)

*/

// Mark as complete - Easy start, confidence boost
// Local storage - Data persistence, foundation feature
// Priority levels - Visual enhancement
// Categories/tags - Organization
// Search/filter - User experience
// Due dates - Time management
// Drag & drop - Advanced interaction

const todoInput = document.getElementById("todo-input");
const btnAddTodo = document.getElementById("btn-add-todo");
const todosList = document.getElementById("todos-list");

btnAddTodo.addEventListener("click", addTodo);

let myTodos = [];
function addTodo() {
  // input se value
  const value = todoInput.value;
  if (value === "") {
    alert("Please add something!");
    return;
  }
  myTodos.push(value);
  todoInput.value = "";
  displayTodos();
}

function displayTodos() {
  todosList.innerHTML = "";

  myTodos.forEach(function (myTodo, index) {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo-item";
    const todoText = document.createElement("span");
    todoText.className = "todo-text";

    todoText.textContent = myTodo;
    todoDiv.appendChild(todoText);

    // edit btn
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit-btn";

    /// delete btn
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // div mai add
    todoDiv.appendChild(editBtn);
    todoDiv.appendChild(deleteBtn);

    // delete btn
    deleteBtn.addEventListener("click", function () {
      myTodos.splice(index, 1);
      displayTodos();
    });

    // edit btn
    editBtn.addEventListener("click", function () {
      const currentText = todoText.textContent;
      // console.log("Current text: ", currentText);

      const inputField = document.createElement("input");
      inputField.value = currentText;
      todoDiv.replaceChild(inputField, todoText);
      editBtn.textContent = "Save";

      editBtn.onclick = function () {
        const newValue = inputField.value;

        if (newValue.trim() !== "") {
          myTodos[index] = newValue;
          displayTodos();
        }
      };
    });

    todosList.appendChild(todoDiv);
  });
}
