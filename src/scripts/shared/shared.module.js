import HeaderComponent from "./components/header.component.js";
import {actualYear} from "./utils/actual-year.js";
import SidebarComponent from "./components/sidebar.component.js";
import inputError from "./features/input-error.js";
import ReviewItemComponent from "./components/review-item.component.js";

export default class SharedModule {
    constructor() {
        this.onInit();
    }

    onInit() {
        new HeaderComponent();
        new SidebarComponent();
        actualYear();
        inputError();
        new ReviewItemComponent();
    }
}