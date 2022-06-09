function carregar(){
    var msgCumprimento = document.getElementById('msgCumprimento');
    var msg = window.document.getElementById('msg');
    var imagem = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    if(hora >= 0 && hora < 12 ) {
        //bom dia
        msg.innerHTML = `Agora são ${hora}:${minuto} AM.`
        imagem.src='assets/imagens/foto-dia.jpg';
        msgCumprimento.innerHTML = 'Bom dia!';
        document.body.style.background = "#f2cd9f"
    }else if (hora >=12 && hora <= 18){
        //boa tarde
        msg.innerHTML = `Agora são ${hora}:${minuto} AM.`
        imagem.src='assets/imagens/foto-tarde.jpg';
        msgCumprimento.innerHTML = 'Boa tarde!';
        document.body.style.background = "#C26A64"
    }else{
        //boa noite
        msg.innerHTML = `Agora são ${hora}:${minuto} PM.`
        imagem.src='assets/imagens/foto-noite.jpg';
        msgCumprimento.innerHTML = 'Boa Noite!';
        document.body.style.background = "#515154"
    }   
}

