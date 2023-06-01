//documenti for ile dümdüz kullanabiliriz
const elements = document.all;
for (let i = 0; i < elements.length; i++) {
    //  console.log(elements[i]);
}

//foreach ile documenti kullanmak için doc.all ı array e çevirmemiz gerekiyor.
const coll = Array.from(document.all)
coll.forEach(element => {
    console.log(element);
});
console.log(typeof coll);



//body e erişim
const body = document.body;
console.log(body);

//head e erişim
const head = document.head;
console.log(head);

//script e erişim
const script = document.scripts;
console.log(script);


//linklere erişim
const link = document.links;
console.log(link);


//attr lere erişim
const h1attr = document.querySelector('.baslik').getAttribute('class');
console.log(h1attr);


//innerHtml
const h1 = document.querySelector('.baslik');
h1.innerHTML = '<span style="color:red;">Baslik</span>'

//birden fazla elementlerde 
const li = document.querySelectorAll('li');
console.log(li);
//özellikle elementlerden birini seçmek queryselector ile çünkü yine bir tane seçiyoruz
const li2 = document.querySelector('li:nth-child(2)')
li2.style.color = 'green'
console.log(li2.textContent);

//eğer birden fazla aynı element varsa döngüye sokmadan işlem yapamazsın 
li.forEach(element => {
    //  element.style.background = 'yellow'
    //  element.innerHTML = '<span style="color:red">ds</span>'
});


//tek veya çift seçimi
const liodd = document.querySelectorAll('li:nth-child(odd)')
console.log(liodd);
//burada yine bir şey değiştirmek için döngüye girilmesi gerek
liodd.forEach(element => {
    element.style.color = 'pink'
});
// liodd.style.color = 'pink'



const lieven = document.querySelectorAll('li:nth-child(even)')
lieven.forEach(element => {
    element.style.fontSize = '2rem'
});


//childnodes vs children
//farkları şu childnodes boşluklarıda alır children sadece childrenları alır.
const cn = document.querySelector('ul');
console.log(cn.childNodes); //bu 7 çünkü boşluklarıda alır
console.log(cn.children); //bu 3 boşlukları değil yalnızca childrenları alır
console.log(cn.children.length); //children sayısı.
console.log(cn.children[1].textContent);
console.log(cn.firstElementChild); //ilk child
console.log(cn.lastElementChild); //son child
// console.log(cn.parentElement.parentElement);
console.log(cn.previousElementSibling)
console.log(cn.nextElementSibling);

//bu şekilde next prev üzerinde dolaşılabilir.
console.log(cn.firstElementChild.nextElementSibling.nextElementSibling.previousElementSibling);


//dinamik element oluşturma
const newLink = document.createElement('a');
newLink.id = 'link'
newLink.innerHTML = 'link'
newLink.href = 'https://www.google.com'
newLink.target = '_blank';
const tit = document.querySelector('.baslik')
tit.appendChild(newLink) //sonrasına ekler
tit.prepend(newLink) //öncesine ekler



//dinamik element silme
const lis = document.querySelectorAll('li');
console.log(lis[0].remove()); //ilk elemanı siler


//elementleri değiştirme (replaceWith ve replaceChild(newelement, oldelement))
const title = document.querySelector('.baslik');
console.log(title);
const title2 = document.createElement('h1');
title2.innerHTML = 'Başlık 2 değiştirildi';
title2.className = 'baslik2'
title.replaceWith(title2);
//child değiştirme olsaydı .replaceChild(newelement, oldelement) olurdu.