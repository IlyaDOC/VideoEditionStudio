export default class ReviewItemComponent {
    constructor() {
        this.reviewItems = document.querySelectorAll(".review-item");
        this.onInit();
    }

    onInit() {
        if (this.reviewItems) {
            this.reviewItems.forEach((reviewItem) => {
                this.showMoreText(reviewItem);
            });
        }
    }

    showMoreText(reviewItem) {
        const reviewItemAction = reviewItem.querySelector(".review-item__action");
        reviewItemAction.addEventListener("click", () => {
            reviewItem.classList.toggle("review-showed");
            reviewItemAction.classList.toggle("show-more");
        })
    }
}
