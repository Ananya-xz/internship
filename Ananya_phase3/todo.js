document.getElementById("addButton").addEventListener("click",function() {

    let input=document.getElementById("taskInput");
    let task=input.value;

    if(task=== "") {
        alert("Enter a task");
        return;
    }

    let li=document.createElement("li");

    let span=document.createElement("span");
    span.textContent=task;

    let editButton=document.createElement("button");
    editButton.textcontent="Edit";

    let saveButton=document.createElement("button");
    saveButton.textContent="save";
    saveButton.style.display="none";

        /*editButton.addEventListener("click",function() {
        if(editButton.textcontent ==="Edit") {
            let editInput=document.createElement("input");
            editInput.type="text";
            editInput.value=span.textContent;

            li.replaceChild(editInput,span);
            editButton.textContent="Save";
        } else {
            let editInput=li.querySelector("input");
            span.textContent=editInput.value;
            li.replaceChild(span,editInput);
            editButton.textContent="Edit";
        }

        let saveButton=document.createElement("button");
        saveButton.textContent="save";
        saveButton.style.display="none";*/

    let deleteButton=document.createElement("button");
    deleteButton.textContent="x";

    editButton.addEventListener("click",function() {
         let editInput=document.createElement("input");
            editInput.type="text";
            editInput.value=span.textContent;

            li.replaceChild(editInput,span);
            editButton.style.display="none";
            saveButton.style.display="inline";
    });

    saveButton.addEventListener("click",function() {
        let editInput=li.querySelector("input");
        span.textContent=editInput.value;
        li.replaceChild(span,editInput);
        saveButton.style.display="none";
        editButton.style.display="inline";
    });

    deleteButton.addEventListener("click",function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    input.value= "";
});