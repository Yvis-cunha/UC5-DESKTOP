import {app, BrowserWindow}from 'electron'

function criarjanela(){
    const janela = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Aplicação Desktop"
               
    })
    janela.loadFile('index.html')    
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