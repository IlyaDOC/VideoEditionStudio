export class ServiceItemComponent {
    constructor() {
        this.serviceItems = document.querySelectorAll(".service-item");
        this.onInit();
    }

    onInit() {
        if (this.serviceItems && this.serviceItems.length > 0) {
            this.serviceItems.forEach((serviceItem) => {
                this.copyTitle(serviceItem);
            })
        }
    }

    copyTitle(serviceItem) {
        const serviceItemTitle = serviceItem.querySelector(".service-item__title");
        const hiddenTitle = serviceItem.querySelector(".service-item__hidden-title");
        hiddenTitle.textContent = serviceItemTitle.textContent;
    }
}