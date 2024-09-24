import tabs from './modules/tabs.js'
import timer from './modules/timer.js'
import modal from './modules/modal.js'
import slider from './modules/slider.js'
import calc from './modules/calc.js'
import cards from './modules/cards.js'
import forms from './modules/forms.js'
import { openModal } from './modules/modal.js'

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId ), 55000)

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
    timer('.timer', '2024-10-20')
    modal('[data-modal]', '.modal', modalTimerId)
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        total: '#total',
        current: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    })
    calc()
    cards()
    forms('form', modalTimerId)
   

})
