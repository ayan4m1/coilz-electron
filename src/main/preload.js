// const { contextBridge, ipcRenderer } = require('electron');

// const sendMessage =
//   (name) =>
//   (...args) =>
//     ipcRenderer.send(name, ...args);

// const handleEvent = (name) => (callback) => ipcRenderer.on(name, callback);

// const invokeEvent =
//   (name) =>
//   (...args) =>
//     ipcRenderer.invoke(name, ...args);

// contextBridge.exposeInMainWorld('device', {
//   list: invokeEvent('list'),
//   connect: sendMessage('connect'),
//   disconnect: sendMessage('disconnect'),
//   onConnectionStateChange: handleEvent('onConnectionStateChange'),
//   onMessageReceived: handleEvent('onMessageReceived')
// });
