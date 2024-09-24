function slider({container, slide, nextArrow, prevArrow, total, current, wrapper, field}) {

    const prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          currentSlide = document.querySelector(current),
          totalSlides = document.querySelector(total),
          slides = document.querySelectorAll(slide),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          width = window.getComputedStyle(slidesWrapper).width,
          slider = document.querySelector(container)


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
}

export default slider
