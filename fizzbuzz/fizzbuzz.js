function fizzbuzz() {
    for ( var i = 1; i <= 100; i++ ) {
        if ( i % 3 == 0 ) {
            console.log( "Fizz" );
        }
        if ( i % 5 == 0 ) {
            console.log( "buzz" );
        }
        if ( i % 3 == 0 && i % 5 == 0 ) {
            console.log( "fizzbuzz" );
        }
    }
}
fizzbuzz();







/*Using what we 've learned about loops and conditionals, solve this classic coding challenge (it'
s been a favorite in interviews
for years ).

Write a short program that prints each number from 1 to 100 on a new line.
For each multiple of 3, print "Fizz"
instead of the number.
For each multiple of 5, print "Buzz"
instead of the number.
For numbers which are multiples of both 3 and 5, print "FizzBuzz"
instead of the number.
Hint We may need to make use of the modulo operator a % b*/