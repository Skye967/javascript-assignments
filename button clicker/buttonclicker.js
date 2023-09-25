/*function myFunction() {
    document.getElementById( "demo" ).innerHTML = "Hello";
}*/


function pizzaOven() {
    var pizza = {
        crustType: [ "Thin Crust", "Deep Dish", "Hand Tossed" ],
        sauceType: [ "Marinara", "White Sauce", "Pesto" ],
        cheeses: [ "Mozzerella", "Parmesean", "Gouda" ],
        toppings: [ "Sausage", "Mushrooms", "Peppers" ]
    };
    document.getElementById( "crust" ).innerHTML = [ pizza.crustType[ Math.floor( Math.random() * 3 ) ] ];
    document.getElementById( "sauce" ).innerHTML = [ pizza.sauceType[ Math.floor( Math.random() * 3 ) ] ];
    document.getElementById( "cheese" ).innerHTML = [ pizza.cheeses[ Math.floor( Math.random() * 3 ) ] ];
    document.getElementById( "toppings" ).innerHTML = [ pizza.toppings[ Math.floor( Math.random() * 3 ) ] ];
    return pizza;
}
var s1 = pizzaOven();

console.log( s1 );



/*function Random() {
    var rnd = Math.floor( Math.random() * 1000000000 );
    document.getElementById( 'tb' ).value = rnd;
}*/