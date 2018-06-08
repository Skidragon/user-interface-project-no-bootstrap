
const components = {
    hamburger: document.querySelector('.nav-main__hamburger'),
};

class Hamburger {
    constructor(element) {
        this.element = element;
        this.btnStates = {
            hamburgerState: 'img/nav-hamburger.png',
            xState: 'img/nav-hamburger-close.png'
        };

        this.element.addEventListener('click', function() {
            if(this.element.getAttribute('src') === this.btnStates.hamburgerState) {
                this.element.setAttribute('src', this.btnStates.xState);
            }
            else {
                this.element.setAttribute('src', this.btnStates.hamburgerState);
            }
        }.bind(this));
    }
}

components.hamburger = new Hamburger(components.hamburger);
