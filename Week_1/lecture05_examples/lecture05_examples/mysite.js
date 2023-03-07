// called when page loads; sets up event handlers
function pageLoad() {
    document.getElementById("ok").onclick = okayClick();
    return true; 
}

function okayClick() {
    alert("Hello World");
    return function(){
        alert("Now I attached a function!");
    };
}

window.onload = pageLoad;
