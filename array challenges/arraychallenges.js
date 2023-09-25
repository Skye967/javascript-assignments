function highPass( arr, cutoff ) {
    var filteredArr = [];
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[ i ] > cutoff ) {
            filteredArr.push( arr[ i ] );
        }
    }
    return filteredArr;
}
var result = highPass( [ 6, 8, 3, 10, -2, 5, 9 ], 5 );
console.log( result ); // we expect back [6, 8, 10, 9]


function evensOfOdds( arr ) {
    var totalOdds = 0;
    var totalEvens = 0;
    // your code here
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[ i ] % 2 == 0 ) {
            totalEvens += arr[ i ];
        }
        if ( arr[ i ] % 2 == 1 ) {
            totalOdds += arr[ i ];
        }
    }
    if ( totalOdds > totalEvens ) {
        console.log( "Odds are larger." );
    }
    if ( totalEvens > totalOdds ) {
        console.log( "Evens are larger." );
    }
    if ( totalEvens == totalOdds ) {
        consle.log( "They're tied." );
    }
}

var result = evensOfOdds( [ 6, 8, 3, 10, -2, 5, 9 ] );
console.log( result ); // we expect back "evens are larger"



function betterThanAveragecopy( arr ) {
    var avg = 0;
    var sum = 0;
    var count = 0;
    for ( var i = 0; i < arr.length; i++ ) {
        sum += arr[ i ];
        avg = sum / arr.length;
    }
    console.log( avg );
    console.log( sum );
    for ( var a = 0; a < arr.length; a++ ) {
        if ( arr[ a ] > avg ) {
            count += 1;
        }
    }
    console.log( count );
    // calculate the average
    //var count = 0
    // count how many values are greated than the average
    return count;
}

var result = betterThanAveragecopy( [ 6, 8, 3, 10, -2, 5, 9 ] );
console.log( result ); // we expect back 4



function fibonacciArray( n ) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [ 0, 1 ];
    for ( var i = 0; i < n - 2; i++ ) {
        fibArr.push( fibArr[ i ] + fibArr[ i + 1 ] );
    }
    // your code here
    return fibArr;
}
var result = fibonacciArray( 10 );
console.log( result ); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]