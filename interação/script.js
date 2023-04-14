function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 6){
    //Boa Madrugada
    img.src = 'imagens/madrugada.jpg'
    document.body.style.background = '#010101'
} else if(hora >= 6 && hora < 12){
    //Bom Dia
    img.src = 'imagens/manha.jpg'
    document.body.style.background = '#f4e19e'
} else if(hora > 12 && hora <18){
    //Boa Tarde
    img.src = 'imagens/tarde.jpg'
    document.body.style.background = '#f13c00'
} else {
    //Boa Noite
    img.src = 'imagens/noite.jpg'
    document.body.style.background = '#252729'
}
}