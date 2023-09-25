myElement = document.querySelector( "#images" ).src;

function changepic() {
    document.querySelector( "#images" ).src = "./images/assets/succulents-2.jpg";
}

function changepic2() {
    document.querySelector( "#images" ).src = "./images/assets/succulents-1.jpg";
}

function removeCookie() {
    ( document.querySelector( ".btn" ).parentNode ).remove();
}


function cartAlert() {
    alert( "Cart is empty!" );
}