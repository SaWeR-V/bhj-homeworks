const question = document.getElementById('poll__title');
const btns = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send()

xhr.addEventListener('load', () => {
    let questionArr = xhr.response;

    for (let elem in questionArr) {
        
        let survey = questionArr[elem];

        let title = survey.title;
        let answers = survey.answers;

        if (typeof(title) !== 'undefined') {
            question.insertAdjacentHTML('beforeend', title);
        }
        
        if (typeof(answers) !== 'undefined') {
            for (let answer of answers) {

                btns.insertAdjacentHTML('beforeend', `
                    <button class="poll__answer">${answer}</button>
                `)

                let options = btns.querySelectorAll('button.poll__answer');
                let optLastIndex = options.length - 1;

                options[optLastIndex].addEventListener('click', () => {
                    alert('Спасибо, ваш голос засчитан!')
                })
            }
        }
    }
})