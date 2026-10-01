// src-tauri/src/menu.rs
use tauri::menu::{Menu, MenuItem, Submenu};
use tauri::{AppHandle, Manager, Runtime};

/// 创建并设置应用菜单
pub fn setup_menu<R: Runtime>(app: &AppHandle<R>) -> tauri::Result<()> {
    let item_quit = MenuItem::with_id(app, "quit", "Quit", true, None::<&str>)?;
    let item_reload = MenuItem::with_id(app, "reload", "Reload", true, None::<&str>)?;

    let file = Submenu::with_items(app, "File", true, &[&item_reload, &item_quit])?;
    let menu = Menu::with_items(app, &[&file])?;

    app.set_menu(menu)?;
    Ok(())
}

/// 处理菜单点击事件
pub fn handle_menu_event<R: Runtime>(app: &AppHandle<R>, id: &str) {
    match id {
        "quit" => {
            app.exit(0);
        },
        "reload" => {
            if let Some(window) = app.get_webview_window("main") {
                let _ = window.eval("location.reload()");
                let _ = window.eval("location.href = '/pages/index/index.html'");
            }
        },
        _ => {}
    }
}
