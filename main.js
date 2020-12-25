function onClickMenu() {

    var x = document.getElementById("sidebar-text");
    if (x.style.visibility == "visible" || x.style.visibility == "") {
        x.style.visibility = "hidden";
    } else {
        x.style.visibility = "visible";
    }
    // document.getElementById("sidebar-text")[0].style.visibility = "hidden";
}