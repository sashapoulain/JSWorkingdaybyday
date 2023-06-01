//MOUSE EVENTLERİNDEN EN KULLANILABİLİRİ MOUSEENTER VE MOUSELEAVEDİR.

//mousedown = click eventine benziyor mouse a tıklayınca çalışır

const tit = document.querySelector('.title')
tit.addEventListener('mousedown', run)

function run(e) {
    console.log(e.type);
}


//mouseup tıklamadan elini çekince çalışır

const tit2 = document.querySelector('.title2')
tit2.addEventListener('mouseup', run)

function run(e) {
    console.log(e.type);
}


//mouseover event üzerine gelince çalışır 
const tit3 = document.querySelector('.title3');
tit3.addEventListener('mouseover', run)

function run(e) {
    console.log(e.type);
}

//mouseout eventi mouse ile element üzerinde çıkınca çalışır

const tit4 = document.querySelector('.title4')
tit4.addEventListener('mouseout', run)

function run(e) {
    console.log(e.type);
}


//NOT: MOUSEOVER VE MOUSEOUT İÇ İÇE ELEMENTLERDE HER ELEMENT DEĞİŞTİĞİNDE TEKRAR TEKRAR ÇALIŞIR
//BU ŞŞEKİLDE 3456 KEZ ÇALIŞSIN İSTEMİYORSAKK
//MOUSEENTER VE MOUSELEAVE KULLANABİLİRZ

//MOUSEENTER mouse ile elemente girdiğimizde çalışır

const card = document.querySelector('.card')
card.addEventListener('mouseenter', run)
card.addEventListener('mouseleave', run)

function run(e) {
    console.log(e.type);
    console.log(e.type);
}


//mouse leave