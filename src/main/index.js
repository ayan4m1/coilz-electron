const { join } = require('path');
const { app, BrowserWindow } = require('electron');
const { writeFileSync } = require('fs');

const dev = process.env.NODE_ENV === 'development';

app.whenReady().then(async () => {
  const mainWindow = new BrowserWindow({
    icon: join(__dirname, 'icon.png'),
    title: 'Coilz',
    autoHideMenuBar: false,
    darkTheme: true,
    webPreferences: {
      devTools: true,
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: false,
      backgroundThrottling: false,
      preload: join(__dirname, 'preload.js')
    }
  });

  mainWindow.maximize();

  try {
    if (dev) {
      await mainWindow.loadURL(`http://localhost:9000`);
    } else {
      await mainWindow.loadURL(
        `file://${join(__dirname, '..', '..', 'dist', 'index.html')}`
      );
    }
  } catch (error) {
    writeFileSync(join(__dirname, 'test.log'), error.message);
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
