angular.module('movieblog', ['movies'])
    .controller('BlogController', ['$http', function ($http) {
        var blog = this;
        blog.contents = [];
        $http.get('json/movies-data.json').success(function (data) {
            blog.contents = data;
        });
    }]);

//angular.module('movieblog', ['movies'])
//    .controller('BlogController', function (Movie) {
//        var blog = this;
//        blog.contents = [];
//        Movie.all()
//            .success(function (data) {
//                blog.contents = data;
//            });
//    });
