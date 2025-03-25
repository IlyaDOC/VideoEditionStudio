export default class SidebarComponent {
    constructor() {
        this.sidebarOpenButton = document.getElementById("sidebarShow");
        this.onInit();
    }

    onInit() {
        this.createSidebar();
    }

    showSidebar() {

    }

    closeSidebar() {

    }

    createSidebar() {
        this.copyNavMenuFromHeader();
    }

    copyNavMenuFromHeader() {
        const headerNav = document.querySelector(".header__nav nav");
        const sidebarNav = document.querySelector(".sidebar__nav");

        if (headerNav && sidebarNav) {
            sidebarNav.append(headerNav.cloneNode(true));
        }

        this.addShowdownFunctionality();
    }

    addShowdownFunctionality() {
        const sidebarNavSubmenu = document.querySelector(".sidebar__nav .with-submenu");
        const sidebarNavSubmenuTrigger = document.querySelector(".sidebar__nav .with-submenu > a");

        if (sidebarNavSubmenu) {
            sidebarNavSubmenu.setAttribute("data-showdown", "");
        }

        if (sidebarNavSubmenuTrigger) {
            sidebarNavSubmenuTrigger.setAttribute("data-trigger", "");
        }

    }
}