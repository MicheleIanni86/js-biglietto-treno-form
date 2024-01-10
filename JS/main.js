// input dell'utente
const usernameInput = document.getElementById('userName');
console.log(usernameInput);
const userkmInput = document.getElementById("userKm");
const userageInput = document.getElementById('userAge');
const resultPrice = document.getElementById('resultPrice');
const generateButtonInput = document.getElementById('generateButton');




// calcolo biglietto base
generateButtonInput.addEventListener('click', function () {
    const username = usernameInput.value;
    console.log(username);

    const userkm = parseInt(userkmInput.value);
    console.log(userkm);

    const userage = userageInput.value;

    const basePrice = userkm * 0.21;
    console.log(basePrice);
    console.log(userage);
    if (userage == "minorenne") {
        let price = basePrice;
        const discountperc = 20;
        const discount = price * discountperc / 100;
        finalprice = price - discount;
    } else if (userage == "over65") {

        let price = basePrice;
        const discountperc = 40;
        const discount = price * discountperc / 100;
        finalprice = price - discount;

    } else {
        finalprice = basePrice;
    }

    resultPrice.innerText = finalprice.toFixed(2);

});
