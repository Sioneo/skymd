class Utils {
    static async getAppVersion() {
        const appVersion = await window.__TAURI__.app.getVersion();
        return appVersion;
    }
}

export default Utils;
