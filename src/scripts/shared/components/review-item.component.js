export default class ReviewItemComponent {
    constructor() {
        this.reviewItems = document.querySelectorAll(".review-item");
        this.onInit();
    }

    onInit() {
        if (this.reviewItems) {
            this.reviewItems.forEach((reviewItem) => {
                this.showMoreText(reviewItem);
                this.actionBtnVisibility(reviewItem);
                window.addEventListener("resize", this.actionBtnVisibility.bind(this, reviewItem));
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


    actionBtnVisibility(reviewItem) {
        const commentText = reviewItem.querySelector(".review-item__text p");
        const actionBtn = reviewItem.querySelector(".review-item__action");

        if (commentText.scrollHeight > commentText.clientHeight) {
            actionBtn.style.display = "block"
        } else {
            actionBtn.style.display = "none";
        }
    }
}
