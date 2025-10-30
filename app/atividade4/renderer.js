console.log(`So:${process.platform}`)
console.log(`${process.chrome}`)
console.log(`Electron: ${process.versions.electron}`)
console.log(`mode: ${process.versions.node}`)

document.getElementById('texto').innerHTML = `${window.api.som(2,5)}`