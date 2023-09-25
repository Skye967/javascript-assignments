function removeConnection( element ) {
    //document.getElementById( elem.id ).remove();
    ( element.parentNode ).remove();
}

function openForm() {
    document.getElementById( "myForm" ).style.display = "block";
}

function closeForm() {
    document.getElementById( "myForm" ).style.display = "none";
}

var nameElement = "name";
var nameElement = document.querySelector( "#name" );

function newName() {
    console.log( nameElement )
    console.log( document.getElementById( "input" ).value );
    nameElement.innerHTML = document.getElementById( "input" ).value;
}

var connectionsR = 2;
var connectionsRElement = document.querySelector( "#two" );

function subtract() {
    connectionsR--;
    connectionsRElement.innerHTML = connectionsR;
}

var connections = 500;
var connectionsElement = document.querySelector( "#five" );

function add() {
    connections++;
    connectionsElement.innerHTML = connections;
}