//settimeout milisaniye olarak yazılan zamandan sonra çalışan bir fonksiyondur. 2 saniye sonra naber yazdır gibi

setTimeout(() => {
    console.log('naber');
}, 2000);

//settimeintervalda clearinterval yapmadığın sürece verdiğin milisaniye aralığında çalışmaya devam eder. mesela 1 saniye aralıklarla i yi yaz gibi

// let i = 0;
// setInterval(() => {
//     i++;
//     console.log('sayı : ', i);
// }, 1000);

//durdur (id si btn olan buton) butonuna basınca çalışmayı durduracak.
let i = 0;
let value = setInterval(() => {
    i++;
    console.log('sayı : ', i);
}, 1000);

document.getElementById('btn').addEventListener('click', () => {
    clearInterval(value);
})