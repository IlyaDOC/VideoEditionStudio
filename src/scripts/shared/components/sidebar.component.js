import BodyOverflow from "../utils/body-overflow.js";
import Overlay from "../utils/overlay.js";

export default class SidebarComponent {
    constructor() {
        this.sidebarOpenButton = document.getElementById("sidebarShow");
        this.sidebarCloseButton = document.getElementById("sidebarClose");
        this.sidebarContacts = document.querySelector(".sidebar__contacts");
        this.sidebar = document.getElementById("sidebar");

        this.onInit();
    }

    onInit() {
        this.createSidebar();
        this.sidebarFunctionality();
        this.showSidebar();
        this.closeSidebar();
    }

    showSidebar() {
        this.sidebarOpenButton.addEventListener("click", () => {
            this.sidebar.classList.add("open");
            BodyOverflow.hidden();
            Overlay.showOverlay();
        });
    }

    closeSidebar() {
        this.sidebarCloseButton.addEventListener("click", () => {
            this.sidebar.classList.remove("open");
            BodyOverflow.visible();
            Overlay.hideOverlay();
        });

        const overlay = document.getElementById("overlay");
        overlay.addEventListener("click", () => {
            this.sidebar.classList.remove("open");
            Overlay.hideOverlay();
            BodyOverflow.visible();
        });
    }

    createSidebar() {
        this.copyNavMenuFromHeader();
        this.copyPhoneFromHeader();
        this.copySocialsFromHeader();
    }

    copyNavMenuFromHeader() {
        const headerNav = document.querySelector(".header__nav nav");
        const sidebarNav = document.querySelector(".sidebar__nav");

        if (headerNav && sidebarNav) {
            sidebarNav.append(headerNav.cloneNode(true));
        }
    }

    copyPhoneFromHeader() {
        const headerPhone = document.querySelector(".header__phone");
        if (headerPhone && this.sidebarContacts) {
            this.sidebarContacts.append(headerPhone.cloneNode(true));
        }
    }

    copySocialsFromHeader() {
        const headerSocials = document.querySelector(".header__socials");
        if (headerSocials && this.sidebarContacts) {
            this.sidebarContacts.append(headerSocials.cloneNode(true));
        }
    }

    sidebarFunctionality() {
        const dropdownElements = document.querySelectorAll(".sidebar .dropdown");
        if (dropdownElements) {
            dropdownElements.forEach(dropdownElement => {
                const dropdownTrigger = dropdownElement.querySelector(".dropdown-trigger");
                dropdownTrigger.addEventListener("click", () => {
                    dropdownElement.classList.toggle("dropdown-open");
                })
            });
        }

        const withSubmenuElement = document.querySelector(".sidebar .with-submenu");
        const submenuTrigger = withSubmenuElement.querySelector(".submenu-trigger");
        if (withSubmenuElement && submenuTrigger) {
            submenuTrigger.addEventListener("click", () => {
                withSubmenuElement.classList.toggle("submenu-open");
            })
        }

    }

}