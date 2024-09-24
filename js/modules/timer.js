function timer() {
    const deadLine = '2024-10-20'

    const getTimeRemaning = (endTime) => {
        let days, hours, minutes, seconds

        const total = Date.parse(endTime) - Date.parse(new Date())

        if (total > 0) {
              days = Math.floor(total / (1000 * 60 * 60 * 24))
              hours = Math.floor((total / (1000 * 60 * 60)) % 24)
              minutes = Math.floor((total / (1000 * 60)) % 60)
              seconds = Math.floor((total / 1000) % 60)
        } else {
              days = 0
              hours = 0
              minutes = 0
              seconds = 0
        }

        return {
            total,
            days,
            hours,
            minutes,
            seconds,
        }
    }

    const setClock = (selector, endTime) => {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds')

        updateClock()

        function addZero(num) {
            if (num < 10) {
                return `0${num}`
            } else {
                return num
            }
        }
        
        function updateClock() {
            const total = getTimeRemaning(endTime)

            days.innerText = addZero(total.days) 
            hours.innerText = addZero(total.hours) 
            minutes.innerText = addZero(total.minutes)
            seconds.innerText = addZero(total.seconds)
        }

        const timeInterval = setInterval(updateClock, 1000)

        if (total.total <= 0) {
            clearInterval(timeInterval)
        }
    }

    setClock('.timer', deadLine)
}

export default timer
