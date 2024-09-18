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

    const getResourse = async (url) => {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }
    
    getResourse('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new Menu(img, altimg, title, descr, price, '.menu .container').create()
            })
        })


     //Forms

     const message = {
        loading: 'icons/spinner.svg',
        success: 'Спасибо, скоро мы с Вами свяжемся.',
        failure: 'Что-то пошло не так...',
     }

     const forms = document.querySelectorAll('form')

     forms.forEach(form => {
        bindPostData(form)
     })

     const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        })

        return await res.json()
     }

     function bindPostData(form) {
        form.addEventListener('submit', e => {
            e.preventDefault()
            
            const statusMessage = document.createElement('img')
            statusMessage.classList.add('status')
            statusMessage.src = message.loading
            form.insertAdjacentElement('afterend', statusMessage)

            const formData = new FormData(form)

            const json = JSON.stringify(Object.fromEntries(formData.entries()))

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log('post', data)
                showThanksModal(message.success)
                statusMessage.remove()
            }).catch((err) => {
                showThanksModal(message.failure)
                console.log('ERROR', err)
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

    //Slider

    const prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          currentSlide = document.querySelector('#current'),
          totalSlides = document.querySelector('#total'),
          slides = document.querySelectorAll('.offer__slide'),
          slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          slidesField = document.querySelector('.offer__slider-inner'),
          width = window.getComputedStyle(slidesWrapper).width,
          slider = document.querySelector('.offer__slider')


    let indexSlide = 0
    let offset = 0
    const dots = []

    const getOnlyNum = str => +str.replace(/\D/g, '')

    if (slides.length < 10) {
        totalSlides.textContent = `0${slides.length}`
    } else {
        totalSlides.textContent = slides.length    
    }   
    
    const counterCurrent = (index) => {
        if (index < 10) {
            currentSlide.textContent = `0${index + 1}`
        }
        else {
            currentSlide.textContent = index + 1
        }
    }

    counterCurrent(indexSlide)

    slidesField.style.width = 100 * slides.length + '%'
    slidesField.style.display = 'flex'
    slidesField.style.transition = '0.5s all'

    slides.forEach(el => {
        el.style.width = width     
    })

    function setActiveDot(activeIndex) {
        dots.forEach(dot => dot.style.opacity = '.5')
        dots[activeIndex].style.opacity = 1
    }

    next.addEventListener('click', e => {
        if (offset == getOnlyNum(width) * (slides.length - 1)) {
            offset = 0
        } else {
            offset += getOnlyNum(width)
        }

        indexSlide++
        if (indexSlide > slides.length - 1) {
            indexSlide = 0
        }
        counterCurrent(indexSlide)
        slidesField.style.transform = `translateX(-${offset}px)`

        setActiveDot(indexSlide)
    })

    prev.addEventListener('click', e => {
        if (offset == 0) {
            offset = getOnlyNum(width) * (slides.length - 1)
        } else {
            offset -= getOnlyNum(width)
        }
        indexSlide--
              if (indexSlide < 0) {
            indexSlide = slides.length - 1
        }
        counterCurrent(indexSlide)
        slidesField.style.transform = `translateX(-${offset}px)`
        
        setActiveDot(indexSlide)
    })

    function createDot() {
        const dotWrapper = document.createElement('ol')
        dotWrapper.classList.add('dot__wrapper')

        slides.forEach((el, i) => {
            const dot = document.createElement('li')
            dot.setAttribute('data-slide-to', i)
            dot.classList.add('dot')
            dotWrapper.append(dot) 

            if (indexSlide === i) {
                dot.style.opacity = '1'
            }
            dots.push(dot)
        })

        slider.append(dotWrapper)
        

    }

    createDot()

    dots.forEach(dot => {
        dot.addEventListener('click', e => {
            const slideTo = +e.target.getAttribute('data-slide-to')
            indexSlide = slideTo
            offset = getOnlyNum(width) * (slideTo)
            slidesField.style.transform = `translateX(-${offset}px)`

            counterCurrent(indexSlide)
            setActiveDot(indexSlide)

        })
    })

})
