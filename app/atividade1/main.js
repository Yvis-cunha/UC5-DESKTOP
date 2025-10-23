import {app, BrowserWindow}from 'electron'

function criarjanela(){
    const janela = new BrowserWindow({
        width: 500,
        height: 450,
        title: "Aplicação Desktop",
        resizable: false,
               
    })
    janela.loadFile('atividade1.html')    
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