//1- local storage a kaydedilen her şey string olarak kaydedilir.
//2- localstorage.setItem('hareket', 'squat') şeklinde kaydedilir
//3- getItem ile varolan verilere bakabiliriz fakat get itema yalnızca anahtar yazarız.
//localstorage.getItem('hareket')
//local st. clear ile temizlenir.
//localstorage.clear();
//bu şekilde sorgualama da yapabiliriz, örneğin burada anahtar null ise dene yazdır dedik
if (localStorage.getItem('anahtar') === null) {
    console.log('dene');
}


//local storaga a array yazmak
//json kullanırız json.stringify

const sayılar = ['bir', 'iki', 'üc', 'dört']
localStorage.setItem('sayı', JSON.stringify(sayılar));
console.log(typeof sayılar); //array bu şuan
//bu şekilde array gibi yazıyoruz localstorage a
//'sayı' bizim uydurduğumuz anahtar önemli olan json.stringify a yazdığımız değerdir

//bu değeri array gibi alıp array gibi kullanabiliriz

const arraydeger = localStorage.getItem('sayı') //burada uydurduğumuz değeri kullanmamız lazım
console.log(typeof arraydeger); //string
//bu değeri de  array gibi almak için parse kullanırız.
// const arraydeger2 = JSON.parse(localStorage.getItem('sayı')) //bu şekilde de json.parse yaparız
// console.log(typeof arraydeger2); 
const arraygibialmak = JSON.parse(arraydeger) //bu şekilde de array gibi alırız
console.log(typeof arraygibialmak);