export default class HeaderComponent {
    constructor() {
        this.header = document.getElementById("header");
        this.onInit();
    }

    onInit() {
        this.headerScrollBehavior();
    }

    headerScrollBehavior() {
        window.addEventListener("scroll", ()=> {
            this.addOnscrollClass();
        });

        this.addOnscrollClass();
    }

    addOnscrollClass() {
        if (window.scrollY > 0) {
            this.header.classList.add("onscroll");
        } else {
            this.header.classList.remove("onscroll");
        }
    }
}