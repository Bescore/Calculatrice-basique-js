//bulles d'informations
var first_value = document.querySelector( "input[name=first_number]" )
first_value.onmouseover = function infos_1 () {
    var informations = document.querySelector( "#informations" )
    informations.classList.add( "informations" )
    informations.innerText = "choisir un chiffre /nombre"

}



var second_value = document.querySelector( "input[name=second_number]" )
second_value.onmouseover = function infos_2 () {
    var informations = document.querySelector( "#informations" )
    informations.classList.add( "informations" )
    informations.innerText = "choisir un autre chiffre /nombre"

}


var third_value = document.querySelector( "#choix" )
third_value.onmouseover = function infos_3 () {
    var informations = document.querySelector( "#informations" )
    informations.classList.add( "informations" )
    informations.innerText = "choisir son opération"

}


var fourth_value = document.querySelector( "input[name=calcule]" )
fourth_value.onmouseover = function infos_4 () {
    var informations = document.querySelector( "#informations" )
    informations.classList.add( "informations" )
    informations.innerText = "Cliquez pour calculer"

}