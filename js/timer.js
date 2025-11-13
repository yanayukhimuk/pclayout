const timer = () => {
    const date = new Date();

    const daysBlock = document.querySelector('.timer__days')
    const hoursBlock = document.querySelector('.timer__hours')
    const minutesBlock = document.querySelector('.timer__minutes')
    const secondsBlock = document.querySelector('.timer__seconds')

    let interval

    const numWord = (value, words) => {
        value = Math.abs(value) % 100
        const lastNum = value % 10

        if (value > 10 & value < 20) return words[2]
        if (lastNum > 1 && lastNum < 5) return words[1]
        if (lastNum === 1) return words[0]
        return words[2]
    }

    const updateTimer = () => {
        const now = new Date();
        const dateDeadline = new Date('November 15, 2025 09:50:00').getTime()
        const timeRemain = dateDeadline - now.getTime();

        if (timeRemain <= 0) {
            clearInterval(interval);
            daysBlock.textContent = '00';
            hoursBlock.textContent = '00';
            minutesBlock.textContent = '00';
            secondsBlock.textContent = '00';

            const timerItems = document.querySelectorAll('.timer__count');
            timerItems.forEach((item) => {
                item.style.color = 'red';
            });

            return;
        }

        const days = Math.floor(timeRemain / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemain / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeRemain / (1000 * 60)) % 60);
        const seconds = Math.floor((timeRemain / 1000) % 60);

        const fDays = days < 10 ? '0' + days : days
        const fHours = hours < 10 ? '0' + hours : hours
        const fMinutes = minutes < 10 ? '0' + minutes : minutes
        const fSeconds = seconds < 10 ? '0' + seconds : seconds

        daysBlock.textContent = fDays
        hoursBlock.textContent = fHours
        minutesBlock.textContent = fMinutes
        secondsBlock.textContent = fSeconds

        daysBlock.nextElementSibling.textContent = numWord(days, ['День', 'Дня', 'Дней']);
        secondsBlock.nextElementSibling.textContent = numWord(seconds, ['Секунда', 'Секунды', 'Секунд'])
        minutesBlock.nextElementSibling.textContent = numWord(minutes, ['Минута', 'Минуты', 'Минут'])
        hoursBlock.nextElementSibling.textContent = numWord(hours, ['Час', 'Часа', 'Часов'])
    }

    updateTimer()
    interval = setInterval(updateTimer, 500)
}

timer()
