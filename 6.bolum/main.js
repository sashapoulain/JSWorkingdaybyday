// const person = {
//     age: 30,
//     tellAge: function() {
//         console.log(this.age);
//     }

// }
// person.tellAge();

//yukarıda this yazmazsak error alırız. this bulunulan person objesini işaret edip onun ageini istediğimizi gösteriyor.

//ama this tellAge func içinde person objesini gösterir. dışında ise this window objesini gösterir


// const person = {
//     age: 30,
//     tellAge: function() {
//             console.log(this);
//             console.log(this.age);
//             //this = window
//         }.bind(this)
//         //this = window
// }
// person.tellAge();

//burada bind ile this 'in window objesini göstermesini sağlıyoruz.

//bind yerine arrow function yazarsak da direkt this in window objesini göstermesini sağlarız



// const person = {
//     age: 30,
//     tellAge: () => {
//             console.log(this);
//             console.log(this.age);
//             //this = window
//         }
//         //this = window
// }
// person.tellAge();


//o zaman yani arrow function ve normal functionların böyle bir farkı var