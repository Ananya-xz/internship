function changeText() {
    let title=document.getElementById("title");
    title.innerHTML="Text Changed!";
}

function changeStyle() {
    let title=document.getElementById("title");

    title.style.color="blue";
    title.style.fontSize="30px";
}

function addItem() {
    let input=document.getElementById("itemInput").value;
    let list=document.getElementById("itemList");

    if(input==="") {
        alert("Enter something");
        return;
    }
    let items=input.split(",");
    items.forEach(function(item) {
        let li=document.createElement("li");
        li.textContent=item.trim();
        list.appendChild(li);
    });
    document.getElementById("itemInput").value="";
}

function removeItem() {
    let list=document.getElementById("itemList");
    if(list.lastChild) {
        list.removeChild(list.lastChild);
    } else {
        alert("no items to remove");
    }
}