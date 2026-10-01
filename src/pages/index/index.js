import Utils from "/js/utils.js";
import File from "/js/file.js";
import MdHandler from "/js/md_handler.js";

// 初始化函数
async function init() {
    document.getElementById("app-version").textContent = `${await Utils.getAppVersion()}`;
}
init();

// 接受md文件并启动查看器
async function launchViewer(mdFile) {
    const fileText = await File.read(mdFile);
    const htmlText = MdHandler.md2Html(fileText);
    sessionStorage.setItem("previewHtml", htmlText);
    window.location.href = "/pages/viewer/viewer.html";
}

document.getElementById("file-input").addEventListener("change", async function() {
    const file = this.files[0];
    launchViewer(file);
})
