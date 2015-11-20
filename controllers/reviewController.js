angular.module('movieblog')
    .controller("ReviewController", function () {
        this.review = {};
        this.addReview = function (content) {
            content.reviews.push(this.review);
            this.review = {};
        };
    });
