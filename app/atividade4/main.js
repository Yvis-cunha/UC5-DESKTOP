import {app, BrowserWindow}from 'electron'

function criarjanela(){
    const janela = new BrowserWindow({
        width: 1000,
        height: 1000,
        title: "Aplicação Desktop",
        resizable: false,
        fullscreen: false,
        icon: 'img/moeda.png',
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: true,
            devTools: true // para adicionar depuração do sistema.

        }
               
    })
    janela.loadFile('index.html')
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