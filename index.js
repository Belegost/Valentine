let question = document.querySelector('.question');
let answer = document.querySelector('.answer');
let questionButton = document.querySelector('.question__button');

questionButton.addEventListener('click', () => {
    question.hidden = true;
    answer.hidden = false;
})