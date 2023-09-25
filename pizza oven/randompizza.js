function randompizzaOven() {

    var pizza = {
        crustType: [ "Thin Crust", "Deep Dish", "Hand Tossed" ],
        sauceType: [ "Marinara", "White Sauce", "Pesto" ],
        cheeses: [ "Mozzerella", "Parmesean", "Gouda" ],
        toppings: [ "Sausage", "Mushrooms", "Peppers" ]
    };
    pizza.crustType = [ pizza.crustType[ Math.floor( Math.random() * 3 ) ] ];
    pizza.sauceType = [ pizza.sauceType[ Math.floor( Math.random() * 3 ) ] ];
    pizza.cheeses = [ pizza.cheeses[ Math.floor( Math.random() * 3 ) ] ];
    pizza.toppings = [ pizza.toppings[ Math.floor( Math.random() * 3 ) ] ];
    return pizza;
}
var s1 = randompizzaOven();
console.log( s1 );