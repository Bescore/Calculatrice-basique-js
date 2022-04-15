/*var user = prompt( "Quel est votre prénom" );
var hello_user_name = document.querySelector( ".hello" );*/

//afficher le nom de l'utilisateur sur la page
/*var p = document.createElement( "p" );
p.innerText="Bienvenue "+user +" sur ma calculatrice"
hello_user_name.appendChild( p )*/

//recuperer les informations des champs

function calcule() {

    var first_number = parseInt(document.querySelector( "input[name=first_number]" ).value)
    var second_number = parseInt(document.querySelector( "input[name=second_number]" ).value)
    var opération = document.querySelector( "select" ).value
    var résultat = ""
    switch ( opération ) {
        case "+":
            résultat = first_number + second_number;
            alert( first_number + " + " + second_number + " = " + résultat )
            break;
        case "-":
            résultat = first_number - second_number
            alert( first_number + " - " + second_number + " = " + résultat )
            break;
        case "*":
            résultat = first_number * second_number
            alert( first_number + " * " + second_number + " = " + résultat )
            break;
        case "/":
            résultat = first_number / second_number
            alert( first_number + " / " + second_number + " = " + résultat )
            break;
        default:
            alert( "il y a une erreur quelque part fréro !" )
            break;
    }
}


//faire disparaitre, apparaitre la calculatrice
function appear() {
    var calculatrice = document.querySelector( ".container_2" )
    calculatrice.style.transform="scale(1)"
    
}
function disappear() {
    var calculatrice = document.querySelector( ".container_2" )
    calculatrice.style.transform="scale(0)"
    
}