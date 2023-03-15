import { getResource } from "../servises/servises";

function cards() {

    class MenuCard {
        constructor(img, alt, title, descr, price, parentSelector, ...classes) {
            this.img = img;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
        }

        render() {
            const card = document.createElement('div');

            if (this.classes.length == 0) {
                this.element = 'menu__item';
                card.classList.add(this.element);
            } else {
                this.classes.forEach(className => card.classList.add(className));
            }
            
            card.innerHTML = `
                <img src=${this.img} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Price:</div>
                    <div class="menu__item-total"><span>${this.price}</span> USD/day</div>
                </div>
            `;

            this.parent.append(card);
        }
    }

    getResource('/db.json')
        .then(data => {
            data.menu.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        })
}

export default cards;