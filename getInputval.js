const inputf = document.querySelector('#inputval')
const tit = document.getElementById('title')
inputf.addEventListener('keyup', val)

function val(e) {
    console.log(e.target.value);
    //bu şekilde değeri alabiliriz ve kullanabiliriz
    tit.innerHTML = e.target.value; //title a dinamik bir şekilde aldığımız veriyi yazdırabiliriz
}