const {BrowserWindow} = require('electron').remote
const path = require('path')
const {shell} = require('electron')
const launchbtn = document.getElementById('launch')

launchbtn.addEventListener('click', (event) => {
  const modalPath = path.join('file://', __dirname, 'launch.html')
  let win = new BrowserWindow({ width: 400, height: 320 })

  win.on('close', () => { win = null })
  win.loadURL(modalPath)
  win.show()
})