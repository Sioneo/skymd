function init() {
    const html = sessionStorage.getItem("previewHtml");
    if (html) {
        document.getElementById("main-container").innerHTML = html;
        sessionStorage.removeItem("previewHtml");
    }
}

init();
