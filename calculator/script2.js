var x = "";
var y = "";
var numx = "";
var numy = "";
var op = "";

function press( number ) {
    if ( op == "" ) {
        x = String( number );
        numx = numx.concat( x );
        document.querySelector( "#display" ).innerHTML = numx;
    }

    if ( op != "" ) {
        y = String( number );
        numy = numy.concat( y );
        document.querySelector( "#display" ).innerHTML = numy;
    }
}

function setOP( P ) {
    op = P;
    console.log( op );
}

function calculate() {
    if ( op == '+' ) {
        sum = numx + numy;
    }
    if ( op == '-' ) {
        sum = numx - numy;
    }
    if ( op == '*' ) {
        sum = numx * numy;
    }
    if ( op == '/' ) {
        sum = numx / numy;
    }
    document.querySelector( "#display" ).innerHTML = sum;
}

function clr() {
    sum = "";
    numx = "";
    numy = "";
    x = "";
    y = "";
    op = "";
    document.querySelector( "#display" ).innerHTML = 0;
}