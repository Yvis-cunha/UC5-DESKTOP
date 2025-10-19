import {app, BrowserWindow}from 'electron'

const criarjanela = () =>{
    const janela = new BrowserWindow({
        width: 800,
        height: 600,
        
        
        
    })
    janela.loadFile('index.html')
    janela.setMenu(null); // remover o menu dentro da interface
    
}


console.log("executando electron")


app.whenReady().then(()=>{
    criarjanela()
})













// function criarjanela(){
//     const janela = new BrowserWindow({
//         width: 800,
//         height: 800
//     })
// }