/*function myFunction() {
    var x = document.getElementById( "myVideo" ).duration;
    document.getElementById( "demo" ).innerHTML = x;
}*/

function addShadow( element ) {
    console.log( element.classList );
    element.classList.add( "shadow" );
}

function removeShadow( element ) {
    element.classList.remove( "shadow" );
}

/*< button onclick = "playVid()"
type = "button" > Play Video < /button> <
    button onclick = "pauseVid()"
type = "button" > Pause Video < /button> */

var x = document.getElementById( "video" );

function playVid() {
    x.play();
}

function pauseVid() {
    x.pause();
}