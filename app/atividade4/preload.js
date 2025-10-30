import {contextBridge} from 'electron'

contextBridge.exposeInMainWorld('api', {
    nome: 'Aplicacao Desktop',
    versaonode: ()=> console.log(`${process.versions.node}`),
    som: soma

})

function soma(a, b){
    return a+b
}