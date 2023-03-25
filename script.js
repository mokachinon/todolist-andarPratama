let todoName = document.getElementById("todo-name")
let btnSave = document.getElementById("btn-simpan")

btnSave.addEventListener("click", function () {
    if (todoName.value === "") {
        alert("Input tak boleh kosong")
    } else {
        let todoComplete = document.getElementById("incomplete-tasks")
        let todoHtml = todoComplete.innerHTML
        todoHtml +=
            `
        <li>
            <input type="checkbox" id="todoCheck">
            <label id="todoLabel">${todoName.value}</label>
            <input type="text" value="${todoName.value}">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </li>
        `
        todoComplete.innerHTML = todoHtml
        todoName.value = "";
        todoName.focus();
        let checkTodo = document.querySelectorAll("#todoCheck")
        for (let i = 0; i < checkTodo.length; i++) {
            const labelCheck = checkTodo[i];
            labelCheck.addEventListener("change", function () {
                let todoItem = this.parentNode;
                let todoList = todoItem.parentNode;
                if (this.checked) {
                    document.getElementById("completed-tasks").appendChild(todoItem);
                } else {
                    document.getElementById("incomplete-tasks").appendChild(todoItem);
                }
            })
        }

        let btnRemove = document.querySelectorAll(".delete");
        for (let i = 0; i < btnRemove.length; i++) {
            const deleted = btnRemove[i];
            deleted.addEventListener("click", function () {
                this.parentElement.remove()
            })
        }

        let editTodo = document.querySelectorAll("#incomplete-tasks .edit");
        for (let i = 0; i < editTodo.length; i++) {
            const editBtn = editTodo[i];
            editBtn.addEventListener("click", function () {
                let todoItem = this.parentNode;
                let todoLabel = todoItem.querySelector("label");
                let todoInput = todoItem.querySelector("input[type='text']");
                if (todoLabel.hasAttribute("contenteditable")) {
                    todoLabel.removeAttribute("contenteditable");
                    todoInput.setAttribute("disabled", true);
                    this.innerText = "Edit";
                } else {
                    todoLabel.setAttribute("contenteditable", true);
                    todoInput.removeAttribute("disabled");
                    todoLabel.focus();
                    this.innerText = "Save";
                }
            })
        }
    }
})