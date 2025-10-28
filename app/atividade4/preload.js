import {contextBridge} from 'electron'

contextBridge.exposeInMainWorld('api', {
    nome: 'Aplicacao Desktop',
    versaonode: ()=> console.log(`${process.versions.node}`),
    

})