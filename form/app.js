
function getForm () {
    event.preventDefault();
    var entre = document.getElementById( "chapeau" ).value
    var reg = /^(\d){3}/
    if ( !reg.test( entre ) ) {
        console.log( entre + " " + reg );
        document.getElementById( "chapeau" ).style.backgroundColor = "green";
    } else {
        //entre.focus();
        document.getElementById( "chapeau" ).style.backgroundColor = "red";
    }

}










