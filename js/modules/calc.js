function calc() {
    const result = document.querySelector('.calculating__result span')

    let sex, ratio, height, weight, age 

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex')
    } else {
        sex = 'female'
        localStorage.setItem('sex', 'female')
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio')
    } else {
        ratio = 1.375
        localStorage.setItem('ratio', 1.375)
    }

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector)

        elements.forEach(el => {
            el.classList.remove(activeClass)
            if (el.getAttribute('id') === localStorage.getItem('sex')) {
                el.classList.add(activeClass)
            }
            if (el.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                el.classList.add(activeClass)
            }
        })
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active')
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active')


    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '_______'
            return
        }

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio)
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio)
        }
    }

    calcTotal()

    function getStaticInfo(selector, activeClass) {
        const elements = document.querySelectorAll(selector)

        elements.forEach(el => {
            el.addEventListener('click', e => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio')
                    localStorage.setItem('ratio', ratio)

                } else {
                    sex = e.target.getAttribute('id')
                    localStorage.setItem('sex', sex)
                }
    
                elements.forEach(el => {
                    el.classList.remove(activeClass)
                })
    
                e.target.classList.add(activeClass)
                calcTotal()
    
            })
        })
    }

    getStaticInfo('#gender div', 'calculating__choose-item_active')
    getStaticInfo('.calculating__choose_big div', 'calculating__choose-item_active')

    function checkInputValue(value) {
        if (value.match(/\D/)) {
            return
        }
        return value
    }

    function getDynamicInfo(selector) {
        const input = document.querySelector(selector)
        input.addEventListener('input', (e) => {
            
            if (e.target.value.match(/\D/)) {
                e.target.style.border = '2px solid red'
            } else {
                e.target.style.border = 'none'
            }

            switch(input.getAttribute('id')) {
                case 'height': 
                    height = checkInputValue(e.target.value)
                    break
                case 'weight': 
                    weight = checkInputValue(e.target.value)
                    break
                case 'age': 
                    age = checkInputValue(e.target.value)
                    break
            }
            calcTotal()
        })

    }

    getDynamicInfo('#height')
    getDynamicInfo('#weight')
    getDynamicInfo('#age')
}

export default calc
