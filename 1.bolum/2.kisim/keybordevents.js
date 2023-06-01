//KEYPRESS sadece harf ve sayıları görür diğer tuşlar görünmez
// document.addEventListener('keypress', run)

function run(e) {
    //  console.log('selam');
    //burada doc üzerinde harf ve rakamlara basarsak bu keypress eventi çalışıcak ama diğer tuşlara basarsan çalışmaz

    //  console.log(e.which); //e.which karakterin ascii tablosundaki değerini verir.
    //  console.log(e.key); //bu hangi tuşa basarsan onu yazdırır
}


//KEYDOWN bastığımız anda event oluşur tüm tuşları yazdırır

// document.addEventListener('keydown', run2)

// function run2(e) {
//     console.log(e.key); //neye basarsan yazdırır.
// }


//KEYUP tuşu bırakınca event tetiklenir bu da her şeyi gösterir.
document.addEventListener('keyup', run3)

function run3(e) {
    console.log(e.key); //neye basarsan yazdırır.
}