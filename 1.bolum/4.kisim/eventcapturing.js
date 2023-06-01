//e.target ile eventi yakalıyoruz
//e.target sayesinde basılan class ı yakalayıp işlem yaptırabiliriz
const card = document.querySelector('.card')
card.addEventListener('click', function(e) {
    console.log(e.target);
    if (e.target.id === 'sub') {
        console.log('deneme');
    }
})

//örneğin yukarıda card içinde bir yere tıklandığında id sub ise deneme yazdır dedik