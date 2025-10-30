import {app, BrowserWindow}from 'electron'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function criarjanela(){
    const janela = new BrowserWindow({
        width: 1000,
        height: 1000,
        title: "Aplicação Desktop",
        resizable: false,
        fullscreen: false,
        icon: 'img/moeda.png',
        webPreferences:{
            nodeIntegration: false,
            contextIsolation: true,
            devTools: true, // para adicionar depuração do sistema.
            preload: path.join(__dirname, 'preload.js'),
            sandbox: false

        }
               
    })
    janela.loadFile('calc.html')
    janela.removeMenu()
    janela.webContents.openDevTools()   
}
app.whenReady()
    .then(()=>{
        criarjanela()
        console.log("executando electron")
    })
    .catch((error)=>{
        console.log(error)
    })   