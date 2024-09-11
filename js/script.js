'use strict'

window.addEventListener('DOMContentLoaded', () => {

    //Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items')

    const hideTabContent = () => {
        tabsContent.forEach(item => {
            item.classList.add('hide')
            item.classList.remove('show')
        })

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }

    const showTabContent = (i = 0) => {
        tabsContent[i].classList.add('show', 'fade')
        tabsContent[i].classList.remove('hide')
        tabs[i].classList.add('tabheader__item_active')
    }

    hideTabContent()
    showTabContent()

    tabsParent.addEventListener('click', event => {
        const target = event.target

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent()
                    showTabContent(i)   
                }
            })
        }
    })
        

    //Timer

    const deadLine = '2024-09-20'

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

    //Modal

    const btnsContactUs = document.querySelectorAll('[data-modal]'),
          modalContactUs = document.querySelector('.modal')
    
    const openModal = () => {
        modalContactUs.classList.add('show')
        document.body.style.overflow = 'hidden'
        clearTimeout(modalTimerId)
    }

    const closeModal = () => {
        modalContactUs.classList.remove('show')
        document.body.style.overflow = ''
    }

    btnsContactUs.forEach(btn => {
        btn.addEventListener('click', openModal)
    })

    modalContactUs.addEventListener('click', e => {
        if (modalContactUs == e.target || e.target.getAttribute('data-close') == '') {
            closeModal()
        }
    })

    document.addEventListener('keydown', e => {
        if (e.code === 'Escape' && modalContactUs.classList.contains('show')) {
            closeModal()
        }
    })

    const modalTimerId = setTimeout(openModal, 55000)

    // function showModalByScroll() {
    //     if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    //         openModal()
    //         window.removeEventListener('scroll', showModalByScroll)
    //     }
    // }

    // window.addEventListener('scroll', showModalByScroll)


    //Menu


    class Menu {
        constructor(img, alt, title, descr, price, parentSelector, ...classes) {
            this.img = img,
            this.alt = alt
            this.title = title,
            this.parent = document.querySelector(parentSelector)
            this.descr = descr,
            this.price = price,
            this.classes = classes
        }

        create() {
            const menu = document.createElement('div')
            if (this.classes.length === 0) {
                this.classes.push('menu__item')
            }
            this.classes.forEach(className => menu.classList.add(className))

            menu.innerHTML = `<img src=${this.img} alt=${this.alt}>
                              <h3 class="menu__item-subtitle">${this.title}</h3>
                              <div class="menu__item-descr">${this.descr}</div>
                              <div class="menu__item-divider"></div>
                              <div class="menu__item-price">
                                <div class="menu__item-cost">Цена:</div>
                                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                              </div>`

            this.parent.append(menu)
        }
    }

    fetch('db.json')
        .then(data => data.json())
        .then(res => console.log(res))

    new Menu(
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        229,
        '.menu__field .container',
        //'menu__item'

     ).create()

     new Menu(
        'img/tabs/elite.jpg',
        'elite',
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        550,
        '.menu__field .container',
        'menu__item'

     ).create()

     new Menu(
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        430,
        '.menu__field .container',
        'menu__item'

     ).create()

     //Forms

     const message = {
        loading: 'icons/spinner.svg',
        success: 'Спасибо, скоро мы с Вами свяжемся.',
        failure: 'Что-то пошло не так...',
     }

     const forms = document.querySelectorAll('form')

     forms.forEach(form => {
        postData(form)
     })

     function postData(form) {
        form.addEventListener('submit', e => {
            e.preventDefault()
            
            const statusMessage = document.createElement('img')
            statusMessage.classList.add('status')
            statusMessage.src = message.loading
            form.insertAdjacentElement('afterend', statusMessage)

            const formData = new FormData(form)

            const dataUser = {}
            console.log(formData)
            formData.forEach((value, key) => {
                dataUser[key] = value
            })

            console.log(dataUser)

            const json = JSON.stringify(dataUser)

            fetch('server.php', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: json,
            }).then(data => data.text())
            .then(data => {
                console.log(data)
                showThanksModal(message.success)
                statusMessage.remove()
            }).catch(() => {
                showThanksModal(message.failure)
            }).finally(() => {
                form.reset()
            })
        })
     }


    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog')
        prevModalDialog.classList.add('hide')

        openModal()

        const thanksModal = document.createElement('div')
        thanksModal.classList.add('modal__dialog')
        thanksModal.innerHTML = `
            <div class='modal__content'>
                <div class='modal__close' data-close>x</div>
                <div class='modal__title'>${message}</div>
            </div>
            `
        document.querySelector('.modal').append(thanksModal)

        setTimeout(() => {
            thanksModal.remove()
            prevModalDialog.classList.remove('hide')
            closeModal()
        }, 4000)
    }

})
