document.getElementById("liveInput").addEventListener("input",function() {
    let value=this.value;
    document.getElementById("preview").innerHTML=value;
});