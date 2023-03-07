/**
 * Created by levi on 5/5/2017.
 */
function pageLoad() {
    alert("pageload function here");
    document.getElementById("ok").onclick = okayClick;
}

function okayClick() {
    alert("booyah");
}
window.onload = pageLoad;  // global code

