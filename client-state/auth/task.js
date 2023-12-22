const signIn = document.getElementById('signin__btn');
const form = document.getElementById('signin__form');
const frame = document.getElementById('welcome');
const identify = document.getElementById('user_id');
const login = document.getElementsByName('login');
const pass = document.getElementsByName('password');


signIn.addEventListener('click', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    const url = 'https://students.netoservices.ru/nestjs-backend/auth';
    xhr.open('POST', url);

    const formData = new FormData(form);
    xhr.send(formData);
    

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            let jsonResponse = JSON.parse(xhr.response);
            if (jsonResponse.success === true) {
                frame.classList.add('welcome_active');
                identify.textContent = jsonResponse.user_id;
                localStorage.setItem('id', jsonResponse.user_id);
                login[0].value = null;
                pass[0].value = null;
                
                signIn.disabled = true;
                signIn.style.background = '#808080'; 
                signIn.style.cursor = 'not-allowed'

                frame.insertAdjacentHTML('afterend', `
                    <p>
                        <button id="logout">Разлогиниться</button>
                    </p
                `);
            }
            
            else {
                frame.classList.add('welcome_active');
                login[0].value = null;
                pass[0].value = null;
                frame.textContent = "Неверный логин/пароль";

                setTimeout(() => location.reload(), 1000);  
            }
        const logout = document.getElementById('logout');
        logout.addEventListener('click', () => {
            localStorage.clear();
            frame.textContent = "До новых встреч!";
            setTimeout(() => location.reload(), 2000);
        })
        }
    })
});

window.addEventListener('load', () => {
    if(localStorage.getItem('id')) {
        frame.classList.add('welcome_active');
        identify.textContent = localStorage.getItem('id');

        signIn.disabled = true;
        signIn.style.background = '#808080'; 
        signIn.style.cursor = 'not-allowed'

        frame.insertAdjacentHTML('afterend', `
                    <p>
                        <button id="logout">Разлогиниться</button>
                    </p
                `);

        const logout = document.getElementById('logout');
        logout.addEventListener('click', () => {
            localStorage.clear();
            frame.textContent = "До новых встреч!";
            setTimeout(() => location.reload(), 2000);
        })
    }
});