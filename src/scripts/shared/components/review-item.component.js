export default class ReviewItemComponent {
    constructor() {
        this.reviewItems = document.querySelectorAll(".review-item");
        this.onInit();
    }

    onInit() {
        if (this.reviewItems) {
            this.reviewItems.forEach((reviewItem) => {
                this.showMoreText(reviewItem);
                // this.hideActionButtonsOnCommentSymbolCount(reviewItem);
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

    // hideActionButtonsOnCommentSymbolCount(reviewItem) {
    //     const reviewItemAction = reviewItem.querySelector(".review-item__action");
    //     const reviewItemText = reviewItem.querySelector(".review-item__text p");
    //
    //     if (reviewItemText.textContent.length < 808) {
    //         reviewItemAction.style.display = "none";
    //     } else {
    //         reviewItemAction.style.display = "";
    //     }
    // }
}
