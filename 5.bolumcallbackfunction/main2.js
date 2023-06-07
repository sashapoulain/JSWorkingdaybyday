// function proccess1() {
//     console.log('Procces 1');
// }

// function proccess2() {
//     console.log('Proccess 2');
// }

// proccess1()
// proccess2()


//bu 2 fonksiyon mesela ard arda çalışır. önce birincisi sonra ikincisi çalışır.


//ama mesela asenkron bir durum olsaydı... mesela proc1 e geciktirme verseydik... önce 2 çalışırdı sonra gecikme sn göre 1 çalışırdı.


// function proccess1() {
//     setTimeout(() => {
//         console.log('Procces 1');
//     }, 3000);
// }

// function proccess2() {
//     console.log('Proccess 2');
// }

// proccess1()
// proccess2()


//burada önce 2 sonra 3 sn gecince 1.pros çalışır. Yani burada asenkron bir durum var

//diyelim ki 2.pros. 1 den sonra çalışmasını istersek o zaman pros.2 ye bir callback göndericez. mesela bir yerden veri gelince çalışmasını istediğimizde callback kullanıcaz

//örn

function proccess1(callback) {
    setTimeout(() => {
        console.log('Procces 1');
        callback();
    }, 3000);
}

function proccess2() {
    console.log('Proccess 2');
}

proccess1(proccess2)