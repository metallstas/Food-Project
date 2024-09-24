
function modal() {
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
}

export default modal
