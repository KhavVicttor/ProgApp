function localizarString(){
    var id1 = document.getElementById("String").value;
    var id2 = document.getElementById("Substring").value;

    var posicao = id1.indexOf(id2);
    var resultado;

    if(posicao === -1){
        resultado = "Texto não encontrado";
    }else{
        resultado = "A posição do elemento é: " + posicao;
    }
    document.getElementById('resultado').innerHTML = resultado;
}