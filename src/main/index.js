const { join } = require('path');
const { app, BrowserWindow } = require('electron');

const dev = process.env.NODE_ENV === 'development';

app.whenReady().then(async () => {
  const mainWindow = new BrowserWindow({
    icon: join(__dirname, 'icon.png'),
    title: 'Coilz',
    autoHideMenuBar: true,
    darkTheme: true,
    webPreferences: {
      devTools: dev,
      webSecurity: !dev,
      contextIsolation: true,
      nodeIntegration: false,
      backgroundThrottling: false,
      preload: join(__dirname, 'preload.js')
    }
  });

  mainWindow.maximize();

  if (dev) {
    await mainWindow.loadURL(`http://localhost:9000`);
  } else {
    await mainWindow.loadURL(
      `file://${join(__dirname, '..', '..', 'dist', 'index.html')}`
    );
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
