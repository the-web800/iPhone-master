function nextf() {
    var gettext = document.getElementById("textinp");
    var textv = gettext.value;
    var uncorrect = document.getElementById("notc");
    var whatcont = document.getElementById("whatc").textContent;
    if (textv == whatcont) {
        uncorrect.style.visibility = "hidden";
        window.location = "./type-7.html";
    } else {
        uncorrect.style.visibility = "visible";
    }
}
