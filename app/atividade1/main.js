import {app, BrowserWindow, Menu, Dialog, dialog}from 'electron'

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
    janela.webContents.on('did-frame-finish-load' , async()=>{
        await dialog.showMessageBox({
            type: 'info',
            title:'Bem-vindo',
            message: 'Foi iniciada'
        })
    })
    Menu.setApplicationMenu(Menu.buildFromTemplate(template)) // menu    
}
app.whenReady()
    .then(()=>{
        criarjanela()
        console.log("executando electron")
    })
    .catch((error)=>{
        console.log(error)
    })
    
    //criar menu na parte superior
 const template = [
    {label: "Aplicação", 
        submenu:[
            {label: "Novo", click: () => criarJanela()},
            {type: 'separator'},
            {label: "Sair", role: 'quit'}]}, 
    {label: "Sobre"},
    {label: 'Exibir', 
        submenu: [{label: 'Aparência', 
            submenu:[
                {label: 'Zoom+', type: 'radio', checked: false, 
                click: () => {
                    let janelaatual = janela.webContents.getZoomFactor()    
                    janela.webContents.setZoomFactor(0.1 + janelaatual)},
                accelerator: 'ctrl + =', },
                {label: 'Zoom-', role: 'zoomout'},
                {label: 'Trocar tema', type: 'checkbox', checked: false, 
                    click: () => nativeTheme.themeSource = 'dark'}                
            ]
        }]}
]   















// function criarjanela(){
//     const janela = new BrowserWindow({
//         width: 800,
//         height: 800
//     })
// }