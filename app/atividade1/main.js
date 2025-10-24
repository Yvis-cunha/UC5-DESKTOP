import {app, BrowserWindow}from 'electron'

function criarjanela(){
    const janela = new BrowserWindow({
        width: 500,
        height: 450,
        title: "Aplicação Desktop",
        resizable: false,
        fullscreen: false,
        icon: 'caminho',
        webPreferences:{
            nodeIntegration: false,
            contextIsolation: true,
            devTools: false // para adicionar depuração do sistema.
        }
               
    })
    janela.loadFile('atividade1.html')
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















// function criarjanela(){
//     const janela = new BrowserWindow({
//         width: 800,
//         height: 800
//     })
// }