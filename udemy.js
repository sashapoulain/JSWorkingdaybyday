let value;
value = 'şeyma' //bu string
value = 111; //bu number
let n = value.toString(); //stringe çevirdik numberı
let n2 = String(value) //stringe çevirmenin diğer yolu
let b = true; //BOOLEAN
let nullValue = null; //NULL
let und = undefined; //UNDEFINED
let bS = String(b) //BOOLEAN TO STRING //TÜMÜ BU ŞEKİLDE STRINGE ÇEVİRİLEBİLİR
let f = function() { alert('hi') } //FONKSİYON
let fS = String(f) //FUNCTION TO S
let arr = [12, 13, 14] //ARRAY 
let arrS = String(arr) //ARR TO S
document.body.innerHTML = ` ${arrS} ${typeof arrS}`;
console.log(value);
console.log(typeof value);