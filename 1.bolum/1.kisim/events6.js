//domcontentloaded eventi sayfa yüklenince çalışır
document.addEventListener('DOMContentLoaded', () => {
    console.log('yüklendi');
})


const inpt1 = document.getElementById('form1');
const inpt2 = document.getElementById('form2');


//bu şekilde içine e gönderip tıklama eventi oluşturarak e eventinin bütün içini görebiliriz elementin classını id sini her şeyini.
inpt2.addEventListener('focus', function(e) {
    console.log('selam');
    console.log(e);
    console.log(e.type);

})

//NOT: focus eventi tıklama yerine kullanılabilir ama e.preventDefault() bu eventle çalışmaz click ile çalışır.


//bu şekilde içine e gönderip tıklama eventi oluşturarak e eventinin bütün içini görebiliriz elementin classını id sini her şeyini görebiliriz.
inpt1.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.className);
})



const forma = document.querySelector('#forma')
forma.addEventListener('submit', formFunc);

function formFunc(e) {
    console.log('m');
    e.preventDefault();
}

//form içinde gönderme için button kullan a linkini kullanırsan preventdefault yapamazsın.