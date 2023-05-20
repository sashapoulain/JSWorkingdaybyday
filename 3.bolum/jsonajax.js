document.getElementById('ajax').addEventListener('click', getEmployees)

function getEmployees() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'deneme.json', true);
    xhr.onload = function() {
        //tablo seçimi
        const table = document.getElementById('employees')
        if (xhr.status === 200) {
            const employees = JSON.parse(xhr.responseText)
            console.log(employees);
            //BUNU ALDIK ŞİMDİ BİZ BİR DÖNGÜ İLE BU ARRAY İÇİNDE GEZİNEBİLİRİZ
            //önce table içine ekleyeceğimiz için yukarıda bir yerde tablomuzu seçiyoruz
            employees.forEach(element => {
                table.innerHTML += `
                     <tr>
                        <td>${element.name}</td> 
                        <td>${element.age}</td>
                        <td>${element.maas}</td>
                     </tr>
                  `
            });
        }
    }
    xhr.send();
}