//http status codes
//200 başarılı
//403 forbidden
//404 not found gibi gibi bir sürü var.

// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready


//ajax için xmlhttprequest den bir obje oluşturursak ajax işlemini gerçekleştirebiliriz
document.querySelector('#btn').addEventListener('click', function() {
    const xhr = new XMLHttpRequest(); //XMLHttpRequest den bir obje oluşturuyoruz.

    xhr.onload = function() {
        if (this.status == 200) {
            // console.log(this.responseText);
            document.getElementById('ajax').textContent = this.responseText;
        }
    }
    xhr.open('GET', 'text.txt', true)
    xhr.send();
})