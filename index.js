const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');


const createTimerAnimator = () => {
    return (seconds) => {
        let timer = setInterval( () => {
            let currentTime = timeFormatting(seconds);
            if (seconds < 0) {
                clearInterval(timer);
                timerEl.innerHTML =  'Time is up';
            } else {
                timerEl.innerHTML =  currentTime;
                console.log('tic')
            }
            --seconds;
        }, 1000)

    };
};

// приводим значение в секундах к формату hh:mm:ss
const timeFormatting = (seconds) => {
    let hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secondsRemaining = seconds % 3600 % 60
    return `${twoDigitNumber(hours)}:${twoDigitNumber(minutes)}:${twoDigitNumber(secondsRemaining)}`
};

const twoDigitNumber = (number) => {
    return number.toString().padStart(2, '0')
};

const animateTimer = createTimerAnimator();

// Ограничиваем область вводимых в input значений. Допустимы только цифры.
inputEl.addEventListener('input', () => {
    inputEl.value = inputEl.value.replace(/\D+/g, '');
});

const startTimer = () => {
    const seconds = Number(inputEl.value);
    animateTimer(seconds);
    inputEl.value = '';
}

buttonEl.addEventListener('click', startTimer);
