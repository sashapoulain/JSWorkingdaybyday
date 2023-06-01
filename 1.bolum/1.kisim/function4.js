function greet(name, age) {
    //eğer hiçbir şey yazılmadığında bir şey görünsün istiyorsak şunu yapabiliriz.
    if (typeof name === 'undefined') name = 'Bilgi Yok'
    if (typeof age === 'undefined') age = 'Bilgi Yok'
    console.log(`İsim : ${name} Yaş: ${age}`);
}
greet('şeyma', 30)

greet()


//daha kısa yukardaki şöyle yazılır
function merhaba(isim = 'bilgi yok', yas = 'bilgi yok') {
    console.log(`İsim : ${isim} Yaş: ${yas}`);
}
merhaba('şeyma')
merhaba('mert', 25)
merhaba()


function square(x) {
    return x * x;
    //returnden sonra kod çalışmaz return kodu bitirir.
    console.log('slm');
}

function cube(x) {
    return x * x * x;
}

let num = cube(square(2))
console.log(num);



//fonksiyonu değişkene atamak

const selamla = function() {
    console.log('selam');
}
selamla()

//hatta bu değişkene atanan fonksiyon içine değişken de gönderilebilir.

const selamla2 = function(name) {
    console.log('merhaba' + name);
}
selamla2('şeyma')



//obje içinde fonksiyon

const database = {
    host: 'localhost',
    add: function() {
        console.log('eklendi');
    },
    delete: function(id) {
        console.log(`Id: ${id} silindi`);
    }
}
console.log(database.host);
database.add();
database.delete(10);




var val1 = 10;
let val2 = 20;
const val3 = 30
console.log(val1, val2, val3);