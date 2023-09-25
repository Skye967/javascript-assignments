var cel = document.getElementById( "celcius" ).value;
var far = document.getElementById( "ferinheight" ).value;
var select = document.getElementById( "temperature" ).value;
console.log( select, far, cel );

var arr = [];
var degree = document.querySelectorAll( ".degrees" );
//console.log( document.querySelectorAll( ".degrees" ) );

for ( var i = 0; i < degree.length; i++ ) {

    arr.push( degree[ i ].innerHTML );
    degree[ i ].innerHTML = arr[ i ];
    //console.log( degree[ i ] );

}
console.log( arr );


function tempCon( element ) {
    if ( element.value == "F" ) {
        for ( var i = 0; i < arr.length; i++ ) {
            console.log( "F" );
            arr[ i ] = ( ( arr[ i ] * ( 9 / 5 ) ) + 32 ).toFixed( 1 );
            degree[ i ].innerHTML = arr[ i ];
        }
    }
    //console.log( degree[ i ].innerHTML );
    if ( element.value == "C" ) {

        for ( var i = 0; i < arr.length; i++ ) {
            arr[ i ] = ( ( arr[ i ] - 32 ) * ( 5 / 9 ) ).toFixed( 1 );
            degree[ i ].innerHTML = arr[ i ];
            console.log( "C" );
        }
    }
}
//console.log( arr );

function weatherAlert() {
    alert( "Incoming Weather Report" );
}


function closeCookie( element ) {
    ( element.parentNode ).remove();
}