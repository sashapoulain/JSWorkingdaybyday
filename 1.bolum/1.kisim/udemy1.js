let value;
value = 'şeyma' //bu string
value = 111; //bu number
let b = true; //BOOLEAN
let nullValue = null; //NULL
let und = undefined; //UNDEFINED



//stringe dönüştürme

let n = value.toString(); //stringe çevirdik numberı
let n2 = String(value) //stringe çevirmenin diğer yolu
let bS = String(b) //BOOLEAN TO STRING //TÜMÜ BU ŞEKİLDE STRINGE ÇEVİRİLEBİLİR
let f = function() { alert('hi') } //FONKSİYON
let fS = String(f) //FUNCTION TO String
let arr = [12, 13, 14] //ARRAY 
let arrS = String(arr) //ARR TO String






let pi = '3.14'; //string bir number
let piTn = Number(pi) //stringi number a çevirdik

let nll = null; //null
let piTnll = Number(nll); //null to number ve değeri 0 oldu

let t = 'hello world' //string
let ttT = Number(t); //değeri nan türü number oldu

let arr2 = [1, 2, 4, 3]; //object yani  array
let arrToN = Number([arr2]) //değeri nan türü number oldu


//MATH Objesi
let m = Math.PI; //değeri 3.14 türü number
let e = Math.E; //değeri 2.71 türü number





//1- ceil hep yukarı 
//2- floor hep aşağı
//3- round (buçuk ve üzerini yukarı diğerlerini aşağı yuvarlar)

//round .5(nokta 5) ve üzerini yukarı yuvarlar .5(nokta 5) den daha azını aşağı yuvarlar.
let u = Math.round(3.9) //değeri 4 number türünde
let u2 = Math.round(3.5) //değeri 4 number türünde
let u3 = Math.round(3.3);

//ceil hep yuvarı yuvarlar
let c = Math.ceil(2.6) //3
let c2 = Math.ceil(2.5) //3
let c3 = Math.ceil(2.4) //3

//floor aşağı yuvarlar
let f1 = Math.floor(2.6) //2
let f2 = Math.floor(2.5) //2
let f3 = Math.floor(2.4) //2


//sqrt karekök alır.
let s = Math.sqrt(16) //4
let s2 = Math.sqrt(64) //8


//abs mutlak değer alır
let a = Math.abs(-10); //10

//pow : sayının yanındaki sayı kuvvetini alır. 2 üzeri 4 nedir gibi
let p = Math.pow(2, 4) //16
let p2 = Math.pow(4, 3) //64



//max ve min değer
let maxV = Math.max(-1, 100, 3) //100
let minV = Math.min(-1, 100, 3) //-1



//random sayı 
let r = Math.floor(Math.random() * 10); //0 ve 10 arasında 0 dahil
let rBir = (Math.floor(Math.random() * 10) + 1); //0 ve 10 arasında 0 haric










document.body.innerHTML = `Value:  ${rBir} `;
// console.log(value);
// console.log(typeof value);