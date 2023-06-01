//bu bir obje (dümdüz obje)

const programmer = {
    name: 'Şeyma Yılmaz',
    age: 30,
    email: 'sashapoulain5@gmail.com',
    language: ['css', 'html', 'js'],
    address: {
        city: 'İzmir',
        street: 'Yaylacık',
    },
    work: function() {
        console.log('I am working');
    }
}




//nasıl ulaşırız console a yazdır.
console.log(programmer.language);
console.log(programmer['email']);
console.log(programmer.address.city);


//html içinde body e yazdır
// document.body.innerHTML = `<strong>İsim : </strong> ${programmer.name} <br> 
// <strong>Yaş : </strong> : ${programmer.age} <br>  <strong>Email : </strong> : ${programmer.email} <br> <strong>Diller : </strong> : ${programmer.language} <br>
// <strong>Adres : </strong> <br> <strong>şehir : </strong> ${programmer.address.city} <br> <strong>sokak : </strong>  ${programmer.address.street} <br>
// <strong>İş : </strong>  ${programmer.work} `;


//bu objelerden oluşan bir array
const programmers = [
    { name: 'Şeyma', age: 30 },
    { name: 'hande', age: 24 }
]

//nasıl ulaşırız
console.log(programmers[0].name);
console.log(programmers[0].age);
console.log(programmers[1].name);
console.log(programmers[1].age);





//ZAMAN OBJESİ
const now = new Date();
console.log(now);


//istediğimiz bir zamanı da oluşturabiliriz.

//örnek 1
const birthday = new Date('December 17, 1995 23:15:30');
console.log(birthday);

//örnek 2
const birthday2 = new Date('08-13-1992 08:15:00')
console.log(birthday2);

//örnek 3
const birthday3 = new Date('08/13/1992')
console.log(birthday3);


//Buradan istenilen herhangi bir bilgi alınabilir ay, yıl veya gün gibi
console.log(birthday3.getMonth() + 1); // 0 dan başlıyor  7 yazdırır tabi ağustos 8.aydır
console.log(birthday3.getDate()); //13.gün (bu 1 den başlıyor)
//bu şekilde dakika hatta saniyeye kadar alırız

//değer değiştirmek istersek...
birthday3.setMonth(1);
console.log(birthday3);
birthday3.setFullYear(1997)
console.log(birthday3);