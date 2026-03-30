function calcular(){

let precoAlcool= parseFloat(document.getElementById("alcool").value)

let precoGasolina= parseFloat(document.getElementById("gasolina").value)

if(precoAlcool<0 || precoGasolina<0){

    alert("Não aceita números negativos")
    return
}

if(isNaN(precoAlcool) || isNaN(precoGasolina)){

    alert("Coloque números válidos.")
    return
}

let resultado= precoAlcool/precoGasolina


if(resultado>=0.7){
    document.getElementById("resultado").
    innerHTML= "melhor usar álcool"
}else{

   document.getElementById("resultado").
    innerHTML= "melhor usar gasolina"

}

}