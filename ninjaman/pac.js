 var world = [
     [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
     [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
     [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
     [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
     [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
     [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
     [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
     [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
     [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
     [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
     [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
 ];




 var worldDict = {
     0: 'blank',
     1: 'wall',
     2: 'sushi',
     3: 'onigiri'
 };

 var score = 0;
 ( score = +score );

 function drawWorld() {
     output = "";

     for ( var row = 0; row < world.length; row++ ) {
         output += "<div class = 'row'></div>";
         for ( var x = 0; x < world[ row ].length; x++ ) {
             output += "<div class = '" + worldDict[ world[ row ][ x ] ] + "'></div>";
         }
         output += "</div>";
     }
     document.getElementById( 'world' ).innerHTML =
         output;
 }
 drawWorld();

 function randomWorld2() {
     for ( var y = 0; y < world.length; y++ ) {
         for ( var t = 0; t < world[ y ].length; t++ ) {
             if ( y > 0 && y < 10 && t > 0 && t < 15 ) {
                 world[ y ][ t ] = Math.floor( Math.random() * 4 );
             }
         }
     }
     console.log( world );
 }
 randomWorld2();

 var ninjaman = {
     x: 1,
     y: 1,
 };

 var bluey = {
     x: 14,
     y: 9,
 };

 /*function moveBluey() {
     var nl = ninjaman.x;
     var nt = ninjaman.y;
     var bl = bluey.x;
     var bt = bluey.y;
     if ( nl < bl && world[ bluey.y ][ bluey.x - 1 ] != 1 ) {
         bluey.x--;
     }
     if ( nl > bl && world[ bluey.y ][ bluey.x + 1 ] != 1 ) {
         bluey.x++;
     }
     if ( nt < bt && world[ bluey.y - 1 ][ bluey.x ] != 1 ) {
         bluey.y--;
     }
     if ( nt > bt && world[ bluey.y + 1 ][ bluey.x ] != 1 ) {
         bluey.y++;
     }
 }*/

 function drawNinjaman() {
     document.getElementById( 'ninjaman' ).style.top = ninjaman.y * 40 + 'px';
     document.getElementById( 'ninjaman' ).style.left = ninjaman.x * 40 + 'px';
 }
 drawNinjaman();

 function drawBluey() {
     document.getElementById( 'bluey' ).style.top = bluey.y * 40 + 'px';
     document.getElementById( 'bluey' ).style.left = bluey.x * 40 + 'px';
 }
 //drawBluey()


 document.onkeydown = function ( e ) {
     if ( e.keyCode == 37 ) {
         if ( world[ ninjaman.y ][ ninjaman.x - 1 ] != 1 ) {
             ninjaman.x = 0.2;
         }
     }
     if ( e.keyCode == 39 ) {
         if ( world[ ninjaman.y ][ ninjaman.x + 1 ] != 1 ) {
             ninjaman.x += 0.2;
         }
     }
     if ( e.keyCode == 38 ) {
         if ( world[ ninjaman.y - 1 ][ ninjaman.x ] != 1 ) {
             ninjaman.y -= 0.2;
         }
     }
     if ( e.keyCode == 40 ) {
         if ( world[ ninjaman.y + 1 ][ ninjaman.x ] != 1 ) {
             ninjaman.y += 0.2;
         }
     }
     drawNinjaman();
     drawBluey();
     //moveBluey();

     /*if ( world[ ninjaman.y ][ ninjaman.x ] == 2 ) {
         score += 10;
         console.log( score = +score );
     } else if ( world[ ninjaman.y ][ ninjaman.x ] == 3 ) {
         score += 5;
         console.log( score = +score );
     }*/
     world[ ninjaman.y ][ ninjaman.x ] = 0;
     drawNinjaman();
     drawWorld();
     //document.getElementById( "score" ).innerHTML = 'Score:' + score;
 };