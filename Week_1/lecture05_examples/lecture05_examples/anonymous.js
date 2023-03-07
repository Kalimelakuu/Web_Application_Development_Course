window.onload = function () {
    const okButton1 = document.getElementById("ok1");
    okButton1.onclick = okayClick;

    const okButton2 = document.getElementById("ok2");
    okButton2.onclick = function () {
        alert("OK2 clicked");
    };

    document.getElementById("ok3").onclick = function () {
        alert("OK3 clicked");
    };

};
function okayClick() {
    alert("OK1 clicked");
}
