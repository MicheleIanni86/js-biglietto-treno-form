// input dell'utente
const usernameInput = document.getElementById('userName');
const userkmInput = document.getElementById("userKm");
const userageInput = document.getElementById('userAge');
const resultPrice = document.getElementById('resultPrice');
const generateButtonInput = document.getElementById('generateButton');
const buttonDanger = document.getElementById('buttonErase');


const nameuserStamp = document.getElementById('nameuserStamp');
const tablefoot = document.getElementById('tablefoot');

// Evento bottone
generateButtonInput.addEventListener('click', function () {
    const username = usernameInput.value;
    console.log(username);

    const userkm = parseInt(userkmInput.value);
    console.log(userkm);

    const userage = userageInput.value;
    console.log(userage);

    // calcolo biglietto base
    const basePrice = userkm * 0.21;
    console.log(basePrice);

    // sconto minorenne
    if (userage == "minorenne") {
        document.getElementById('discount').innerText = "Offerta 20%";
        let price = basePrice;
        const discountperc = 20;
        const discount = price * discountperc / 100;
        finalprice = price - discount;
        console.log(finalprice);

        // sconto over 65
    } else if (userage == "over65") {
        document.getElementById('discount').innerText = "Offerta 40%";
        let price = basePrice;
        const discountperc = 40;
        const discount = price * discountperc / 100;
        finalprice = price - discount;
        console.log(finalprice);

        // tariffa base
    } else {
        document.getElementById('discount').innerText = "Tariffa Base";
        finalprice = basePrice;
        console.log(finalprice);

    }
    nameuserStamp.innerText = usernameInput.value;

    resultPrice.innerText = finalprice.toFixed(2);

    // numero random carrozza
    document.getElementById('carriage').innerText = Math.floor(Math.random() * 10 + 1);
    // numero random codice boglietto
    document.getElementById('ticket-pnr').innerText = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);

    tablefoot.classList.remove('d-none');
});

// FUNZIONE BOTTONE SCOMPARSA
buttonDanger.addEventListener('click', function () {
    tablefoot.classList.add('d-none');

});