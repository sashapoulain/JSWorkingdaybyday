const form = document.getElementById('form')
form.addEventListener('focus', run)
form.addEventListener('blur', run2)

function run(e) {
    console.log(e.type);
}

function run2(e) {
    console.log(e.type);
}





//paste eventi : inputa kopyalanan bi şeyi yapıştırdığında çalışır.
form.addEventListener('paste', run3)

function run3(e) {
    console.log(e.type);
}


//copy eventi ise kopyaladığın bir şey olduğunda çalışır

form.addEventListener('copy', run4)

function run4(e) {
    console.log(e.type);
}