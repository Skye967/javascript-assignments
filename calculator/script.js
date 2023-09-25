// parseFloat research


var arr = [];
var x = 0;
var arr2 = [];
var y = 0;
var op = '';
var arrx = [];
var x2 = 0;
var arry = [];
var y2 = 0;
[ 2, 4 ]

function press( number ) {
    if ( op === '' && y === 0 ) {
        arr.push( number );
        x = arr[ 0 ];
        for ( var i = 1; i < arr.length; i++ ) {
            x = x * 10 + arr[ i ];
            console.log( x );
        }
        document.querySelector( "#display" ).innerHTML = x;
    } else if ( op === '.' && y === 0 ) {
        arrx.push( number );
        x2 = arrx[ 0 ];
        console.log( number );
        for ( var q = 1; q < 10; q++ ) {
            for ( var u = 10; u < arrx.length; u * 10 ) {
                x2 = x2 + ( arrx[ q ] / u );
                console.log( q );
                console.log( x );
            }
        }
        x = x + x2;
        console.log( x );
        document.querySelector( "#display" ).innerHTML = x;
    } else if ( ( op != '' || op == '+' || op == '-' || op == '*' || op == '/' ) && x != 0 ) {
        arr2.push( number );
        y = arr2[ 0 ];
        for ( var j = 1; j < arr2.length; j++ ) {
            y = y * 10 + arr2[ j ];
        }
        console.log( y );
        document.querySelector( "#display" ).innerHTML = y;
    } else if ( op === '.' && x != 0 ) {
        arry.push( number );
        y2 = arrx[ 0 ];
        for ( var w = 1; w < arry.length; w++ ) {
            for ( var t = 10; t < arry.length; t * 10 ) {
                console.log( x );
                y2 = x2 + ( arrx( w ) / t );
            }
        }
        y = y + y2;
        console.log( x );
        document.querySelector( "#display" ).innerHTML = y;
    }
}

var sum;

function calculate() {
    if ( op == '+' ) {
        sum = x + y;
    }
    if ( op == '-' ) {
        sum = x - y;
    }
    if ( op == '*' ) {
        sum = x * y;
    }
    if ( op == '/' ) {
        sum = x / y;
    }
    document.querySelector( "#display" ).innerHTML = sum;
    console.log( sum );
}

function clr() {
    sum = 0;
    arr = [ 0 ];
    arr2 = [ 0 ];
    x = 0;
    y = 0;
    op = '';
    document.querySelector( "#display" ).innerHTML = 0;
}