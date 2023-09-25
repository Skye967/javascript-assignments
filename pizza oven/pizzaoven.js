function pizzaOven( crustType, sauceType, cheeses, toppings ) {
    var pizza = {
        crustType: [ "Thin Crust", "Deep Dish", "Hand Tossed" ],
        sauceType: [ "Marinara", "White Sauce", "Pesto" ],
        cheeses: [ "Mozzerella", "Parmesean", "Gouda" ],
        toppings: [ "Sausage", "Mushrooms", "Peppers" ]
    };
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var s1 = pizzaOven( "Hand Tossed", "Pesto", "Mozzerella", [ "Sausage", "Mushrooms", "Peppers" ] );
console.log( s1 );