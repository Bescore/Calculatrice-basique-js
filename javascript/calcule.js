

//recuperer les informations des champs
function cal ( event ) {
    event.preventDefault()

    var first_number = parseInt( document.querySelector( "input[name=first_number]" ).value )
    var second_number = parseInt( document.querySelector( "input[name=second_number]" ).value )
    var opération = document.querySelector( "select" ).value
    var compteur = 0


    //verif
    var reg = /^[0-9]*$/
    if ( !reg.test( first_number ) || !reg.test( second_number ) ) {
        alert( "je n'accepte que des chiffres, des nombres!" )
    } else {
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
        console.log( document.querySelector( "#compteur" ) )


    }

}