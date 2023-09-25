function odds() {
    for ( var i = 0; i <= 20; i++ ) {
        if ( i % 2 == 1 ) {
            console.log( i );
        }
    }
}
odds();

function printSequence( arr ) {
    for ( i = 0; i < arr.length; i++ ) {
        console.log( arr[ i ] );
    }
}
printSequence( [ 4, 2.5, 1, -0.5, -2, -3.5 ] );

function sigma() {
    var sum = 0;
    for ( var i = 0; i <= 100; i++ ) {
        sum = sum + i;
    }
    console.log( sum );
}
sigma();

function factorial() {
    var product = 1;
    for ( var n = 1; product < 100000000; n++ ) {
        product = product * ( n + 1 );
    }
    return n;
}
console.log( factorial() );