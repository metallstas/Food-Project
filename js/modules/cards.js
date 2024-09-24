import { getResourse } from "../services/services"

function cards() {
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
    
        getResourse('http://localhost:3000/menu')
        .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => {
            new Menu(img, altimg, title, descr, price, '.menu .container').create()
        })
    })
}

export default cards
