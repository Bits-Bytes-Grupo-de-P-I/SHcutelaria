function AtivarMenu() {
    const navbar_reduzida = document.querySelector('.navbar-reduzida')
    navbar_reduzida.style.display = 'flex'
    const tres_barras = document.querySelector('.ativar-menu')
    tres_barras.style.zIndex = '-1'
}

function EsconderMenu() {
    const navbar_reduzida = document.querySelector('.navbar-reduzida')
    navbar_reduzida.style.display = 'none'
    const tres_barras = document.querySelector('.ativar-menu')
    tres_barras.style.zIndex = '1'
}