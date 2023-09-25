const secondHand = document.querySelector( "#seconds" );
const minuteHand = document.querySelector( "#minutes" );
const hourHand = document.querySelector( "#hour" );


function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}


setInterval( function () {
    var time = getSecondsSinceStartOfDay();
    console.log( time );
    var secondhandcount = time;
    var minutehandcount = time / 60;
    var hourhandcount = time / 3600;

    secondhandcount = secondhandcount + 6;
    minutehandcount = minutehandcount + 0.1;
    hourhandcount = hourhandcount + 0.01;
    console.log( secondhandcount );

    // your code here
    secondHand.style.transform = "rotate(" + secondhandcount + "deg)";
    minuteHand.style.transform = "rotate(" + minutehandcount + "deg)";
    hourHand.style.transform = "rotate(" + hourhandcount + "deg)";


}, 1000 );