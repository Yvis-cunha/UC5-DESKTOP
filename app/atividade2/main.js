import {app, BrowserWindow}from 'electron'

function criarjanela(){
    const janela = new BrowserWindow({
        width: 500,
        height: 460,
        title: "Aplicação Desktop",
        resizable: false,
        fullscreen: false,
        icon: 'img/moeda.png',
        webPreferences:{
            nodeIntegration: false,
            contextIsolation: true,
            devTools: false // para adicionar depuração do sistema.
        }
               
    })
    janela.loadFile('converso.html')
    janela.removeMenu()    
}
app.whenReady()
    .then(()=>{
        criarjanela()
        console.log("executando electron")
    })
    .catch((error)=>{
        console.log(error)
    })   