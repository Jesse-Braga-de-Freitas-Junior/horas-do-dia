function carregar() {
    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são exatamente ${hora} horas e ${minutos} minutos !`

    if (hora >= 5 && hora < 12) {
        msg.innerHTML += ` Hidrate-se, bom dia !`
        img.src = 'fotomanha.png'
        document.body.style.background = '#dca15c'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += ` Não esqueça de se hidratar, boa tarde !`
        img.src = 'fototarde.png'
        document.body.style.background = '#d56010'
    } else if (hora >= 18 && hora <=23) {
        msg.innerHTML += ` Se cuida boa noite !`
        img.src = 'fotonoite.png'
        document.body.style.background = '#023a76'
    } else if (hora >= 0 && hora < 5) {
        msg.innerHTML += ` Descanse, boa madrugada !`
        img.src = 'fotomadrugada.png'
        document.body.style.background = '#081b1f'
    }
}