const userInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const darkMode = document.getElementById("dark-mode");
const tasksContainer = document.querySelector(".task-data");
const header = document.querySelector("h1")
const body = document.querySelector("body")

const todos = [];

const editButton = (todo) => {
  // Search current item with todo.id
  // Update item and update array
  // Rerender todos, call renderTodos function with updated array
};

const renderTodos = (todoList) => {
  tasksContainer.innerHTML = "";
  todoList.forEach((todo) => {
    const taskBox = document.createElement("div");
    taskBox.classList.add("tasks");
    taskBox.setAttribute("data-id", todo.id);

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("name", "todo-task");
    checkBox.classList.add("todo-task");
    checkBox.checked = todo.completed;
    checkBox.id = `checkBox-${todo.id}`;

    taskBox.append(checkBox);

    const label = document.createElement("label");
    label.setAttribute("for", "todo-task");
    label.classList.add("task");
    label.id = `task-text-${todo.id}`;
    label.textContent = todo.title;
    taskBox.append(label);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.id = `delete-${todo.id}`;
    deleteBtn.textContent = "DEL";
    taskBox.append(deleteBtn);
    deleteBtn.addEventListener("click", function () {
      if (checkBox.checked) {
        const index = todos.findIndex((t) => t.id === todo.id);
        if (index !== -1) {
          todos.splice(index, 1); // remove 1 item at found index
        }
        taskBox.remove();
      }
    });

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.id = `edit-${todo.id}`;
    editBtn.textContent = "ED";
    taskBox.append(editBtn);
    editBtn.addEventListener("click", () => {
      if (checkBox.checked) {
        const editInput = document.createElement("input");
        editInput.classList.add("edit-input");
        taskBox.append(editInput);

        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList.add("save-button");
        taskBox.append(saveBtn);

        saveBtn.addEventListener("click", () => {
          label.textContent = editInput.value;
          editInput.remove();
          saveBtn.remove();
          const index = todos.findIndex((t) => t.id === todo.id);
          if (index !== -1) {
            todos[index].title = editInput.value;
          }
        });
      }
    });

    tasksContainer.prepend(taskBox);
  });

};

addBtn.addEventListener("click", function () {
  todos.push({
    id: todos.length + 1,
    title: userInput.value,
    completed: false,
  });
  userInput.value = "";
  renderTodos(todos);
});



// darkMode.addEventListener("click", () => {
//     header.style.color = "white"
//     body.style.backgroundColor = "black"

// })

