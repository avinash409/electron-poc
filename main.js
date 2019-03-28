const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path')
// import { createConnection } from 'typeorm';
// import { Item } from './src/assets/model/item.schema';



let win = null;

app.on('ready', _ => {
///////////////////////////////////**********************************************/
// const connection = await createConnection({
//   type: 'sqlite',
//   synchronize: true,
//   logging: true,
//   logger: 'simple-console',
//   database: './src/assets/data/database.sqlite',
//   entities: [ Item ],
// });
// debugger
// const itemRepo = connection.getRepository(Item);
// console.log("SQL Lite connected.......");
///////////////////////////////////**********************************************/

  win = new BrowserWindow({ width: 1000, height: 600 });

  //win.loadURL('http://localhost:4200');
  win.loadURL(url.format({
    pathname: path.join(__dirname, `/../../dist/angular-electron/index.html`),
    protocol: "file:",
    slashes: true
  }))

  //  close windo event will do gabrage collect
  win.on('closed', _ => {
    win = null;
  })

  // ipcMain.on('get-items', async (event, ...args)  => {
  //   try {
  //     debugger;
  //     event.returnValue = await itemRepo.find();
  //     console.log("SQL Lite connected.......");
  //   } catch (err) {
  //     console.log("SQL Lite connected.......");
  //     throw err;
  //   }
  // })

  win.webContents.openDevTools();
})

app.on('activate', _ => {
  if (win === null) {
    createWindow();
  }
})

app.on('window-all-closed', _ => {
  if (process.platform != 'darwin') {
    app.quit();
  }
})

// function createWindow() {
//   win = new BrowserWindow({ width: 800, height: 600 });

//   win.loadURL(
//     url.format({
//       pathname: path.join(__dirname, `/../../dist/angular-electron/index.html`),
//       protocol: "file:",
//       slashes: true,
//     })
//   );

//   win.webContents.openDevTools();



//   win.on("closed", () => {
//     win = null;
//   });
// }
