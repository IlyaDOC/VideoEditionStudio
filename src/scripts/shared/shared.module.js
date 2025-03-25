import HeaderComponent from "./components/header.component.js";
import {actualYear} from "./utils/actual-year.js";
import SidebarComponent from "./components/sidebar.component.js";
import {showdown} from "./features/showdown.js";

export default class SharedModule {
    constructor() {
        this.onInit();
    }

    onInit() {
        new HeaderComponent();
        new SidebarComponent();
        showdown();
        actualYear();
    }
}