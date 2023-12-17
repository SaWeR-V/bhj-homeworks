const loading = document.getElementById('loader');
let items = document.getElementById('items');

window.addEventListener('load', () => {
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
    xhr.responseType = 'json';
    xhr.send()

    xhr.onreadystatechange = () => {
        loading.classList.remove('loader_active')
    }

    xhr.addEventListener('load', () => {
        let responseArr = xhr.response;
        let valute = responseArr.response['Valute'];


    for (let val in valute) {

        let v = valute[val]

        let charCode = v.CharCode;
        let value = v.Value;

        items.insertAdjacentHTML('beforeend', `
            <div class="item">
                <div class="item__code">${charCode}</div>
                <div class="item__value">${value}</div>
                <div class="item__currency">руб.</div>
            </div>
        `)
    }
    })
})