const { app, BrowserWindow, screen } = require("electron");

const QR_SIZE = 200;
const MARGIN = 10;

function createWindow() {
  const { width } = screen.getPrimaryDisplay().workAreaSize;

  const win = new BrowserWindow({
    width: QR_SIZE,
    height: QR_SIZE + 16,
    x: width - QR_SIZE - MARGIN,
    y: MARGIN,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
