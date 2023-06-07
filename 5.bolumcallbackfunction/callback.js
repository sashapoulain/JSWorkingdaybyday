// const langs = ['html', 'css', 'js']

// function addLang(lang) {
//     setTimeout(() => {
//         langs.push(lang)
//         console.log('eklendi');
//     }, 2000);
// }

// function getAllLangs() {
//     setTimeout(() => {
//         langs.forEach(element => {
//             console.log(element);
//         });
//     }, 1000);
// }

// addLang('python');
// getAllLangs();

//şimdi burada önce 2 sn beklenir sonra langs içindekiler yazar ve en son 1 sn beklenir ve eklendi yazar
//ama python yazısını göremeyiz çünkü bu asenkron bir işlem 
//o da eklendi hatta ilk eklenen oydu ama biz göremedik
//görmek için callback kullanıcaz
//örn


const langs = ['html', 'css', 'js']

function addLang(lang, callback) {
    setTimeout(() => {
        langs.push(lang)
        console.log('eklendi');
        callback()
    }, 2000);
}

function getAllLangs() {
    setTimeout(() => {
        langs.forEach(element => {
            console.log(element);
        });
    }, 1000);
}

addLang('python', getAllLangs);