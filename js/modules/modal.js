const openModal = (modalSelector, modalTimerId) => {
    const modalContactUs = document.querySelector(modalSelector)
    modalContactUs.classList.add('show')
    document.body.style.overflow = 'hidden'
    
    if (modalTimerId) {
        clearTimeout(modalTimerId)
    }
}

const closeModal = (modalSelector) => {
    const modalContactUs = document.querySelector(modalSelector)
    modalContactUs.classList.remove('show')
    document.body.style.overflow = ''
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    const btnsContactUs = document.querySelectorAll(triggerSelector),
          modalContactUs = document.querySelector(modalSelector)

    btnsContactUs.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId))
    })

    modalContactUs.addEventListener('click', e => {
        if (modalContactUs == e.target || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector)
        }
    })

    document.addEventListener('keydown', e => {
        if (e.code === 'Escape' && modalContactUs.classList.contains('show')) {
            closeModal(modalSelector)
        }
    })

    
    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId)
            window.removeEventListener('scroll', showModalByScroll)
        }
    }

    window.addEventListener('scroll', showModalByScroll)
}

export default modal
export {openModal, closeModal} 
