import { openModal, closeModal } from "./modal"
import { postData } from "../services/services"

function forms(formSelector, modalTimerId) {
    const message = {
       loading: 'icons/spinner.svg',
       success: 'Спасибо, скоро мы с Вами свяжемся.',
       failure: 'Что-то пошло не так...',
    }

    const forms = document.querySelectorAll(formSelector)

    forms.forEach(form => {
       bindPostData(form)
    })

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

        openModal('.modal', modalTimerId)

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
            closeModal('.modal')
        }, 4000)
    }
}

export default forms
