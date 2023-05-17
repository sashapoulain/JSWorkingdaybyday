const inpt1 = document.getElementById('form1');
const inpt2 = document.getElementById('form2');

// inpt2.addEventListener('focus', function(e) {
//     console.log('selam');
//     console.log(e);
//     console.log(e.type);

//     //bu şekilde içine e gönderip tıklama eventi oluşturarak e eventinin bütün içini görebiliriz elementin classını id sini her şeyini
// })

//focus eventi tıklama yerine kullanılabilir ama e.preventDefault() bu eventle çalışmaz click ile çalışır.

// inpt1.addEventListener('click', (e) => {
//         console.log(e);
//         console.log(e.type);
//         console.log(e.target);
//         console.log(e.target.className);

//     })
//bu şekilde içine e gönderip tıklama eventi oluşturarak e eventinin bütün içini görebiliriz elementin classını id sini her şeyini



const forma = document.querySelector('#forma')
forma.addEventListener('submit', formFunc);

function formFunc(e) {
    console.log('m');
    e.preventDefault();
}

//form içinde gönderme için button kullan a linkini kullanırsan preventdefault yapamazsın