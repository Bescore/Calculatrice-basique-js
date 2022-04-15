var user = prompt( "Quel est votre prénom" );
var hello_user_name = document.querySelector( ".hello" );



//verif
while(user === "" || user===null){
    var user = prompt( "Quel est votre prénom" );
}

//afficher le nom de l'utilisateur sur la page
var p = document.createElement( "p" );
p.innerText="Bienvenue "+"sur ma calculatrice " +user
hello_user_name.appendChild( p )


