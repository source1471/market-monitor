require('electron-reload')(__dirname)
const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')
const shell = require('electron').shell

let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'src/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows in an array if your app supports multi windows, this is the time when you should delete the corresponding element.
    win = null
  })
    var menu = Menu.buildFromTemplate([
    {
        label: 'Menu',
        submenu: [
            {label:'Adjust Notification Value'},
            {
                label:'CoinMarketCap',
                click(){
                    shell.openExternal('http://coinmarketcap.com')//opens external marketplace
                },
                accelerator: 'CmdOrCtrl+Shift+C'//keyboard shortcut
            },
            {type: 'separator'},//seperates menu items
            {
                label:'Exit',
                click(){
                    app.quit()
                }
            }
        ]
    },
    {
        label: 'Info'//2nd menu
    }
    ])
    Menu.setApplicationMenu(menu); 
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})