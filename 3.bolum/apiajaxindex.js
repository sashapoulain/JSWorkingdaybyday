document.getElementById('change').addEventListener('click', change)

function change() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.exchangerate.host/latest', true); //bunun 2.parametresi bu kez kendi serverımız değil uzak bi api olacak
    xhr.onload = function() {
        if (this.status) {
            const response = JSON.parse(this.responseText);
            const rate = response.rates.TRY
            const amount = Number(document.getElementById('amount').value);
            // console.log(rate);
            // console.log(amount);
            //şuan ikiside number amount de rate de 
            //kaç euro eder anlamak için ikisini çarpıyoruz.
            console.log(amount * rate);
            document.getElementById('tl').value = amount * rate;
            //alttaki inputa değerini yazdırıyoruz

        }
    }
    xhr.send();
}