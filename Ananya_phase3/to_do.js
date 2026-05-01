function addTask() {
        let input = document.getElementById("taskInput");
        let taskText = input.value.trim();

        if (taskText === "") return;

        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = taskText;

        
        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "editBtn";

        editBtn.onclick = function() {
            let newTask = prompt("Edit your task:", span.textContent);
            if (newTask !== null && newTask.trim() !== "") {
                span.textContent = newTask;
            }
        };

    
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "deleteBtn";

        deleteBtn.onclick = function() {
            li.remove();
        };

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        document.getElementById("taskList").appendChild(li);

        input.value = "";
    }