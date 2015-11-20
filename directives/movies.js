var app = angular.module('movies', []);
app.directive("blogContent", function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/blog-content.html'
    };
});
app.directive("reviewForm", function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/review-form.html'
    };
});
app.directive('movieTitle', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/movie-title.html'
    };
});
app.directive("movieDescription", function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/movie-description.html'
    };
});
app.directive("movieCast", function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/movie-cast.html'
    };
});
app.directive("movieTabs", function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/movie-tabs.html',
        controller: function () {
            this.tab = 1;
            this.selectTab = function (selTab) {
                this.tab = selTab;
            };
            this.isSelected = function (checkTab) {
                return this.tab === checkTab;
            };
        },
        controllerAs: 'panel'
    };
});
app.directive("movieLength", function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/movie-length.html'
    };
});
app.directive("movieGallery", function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/movie-gallery.html'
    };
});

app.directive("categoriesPanel", function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/categories-panel.html',
        scope: {
            activeCategory: "="
        },
        replace: true,
        link: function (scope, element, attrs) {
            //            var list
            scope.categories = [{
                "name": "Action"
            }, {
                "name": "Drama"
            }, {
                "name": "Horror"
            }, {
                "name": "Fiction"
            }, {
                "name": "Comedy"
            }];
            scope.getAllCategories = function () {
                scope.activeCategory = null;
            };
        },
        controller: function ($scope) {
            this.getActiveCategory = function () {
                return $scope.activeCategory;
            };
            this.setActiveCategory = function (category) {
//                alert("setting active or inactive");
                $scope.activeCategory = category;
            };
        }
    };
});

app.directive("categoryItem", function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/category-item.html',
        scope: {
            category: "="
        },
        require: "^categoriesPanel",
        link: function (scope, element, attrs, categoriesPanelCtrl) {
            scope.setActive = function () {
                categoriesPanelCtrl.setActiveCategory(scope.category);
            };
            scope.isCategoryActive = function () {
                return categoriesPanelCtrl.getActiveCategory() === scope.category;
            };
        }
    };
});
