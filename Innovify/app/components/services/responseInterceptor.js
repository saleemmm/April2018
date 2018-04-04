app.factory('responseInterceptor', ['$q', '$location', function ($q, location) {
    var responseInterceptor = {
        response: function (response) {
            if (response.data && response.data.status) {
                if (response.data.status == '404') {
                    location.path('/404');
                }
            }
        }, responseError: function (rejection) {
            location.path('/404');
        },
        request: function(config) {
           return config.headers['Authorization'] = '123456saleem09876';
        }
    };
    return responseInterceptor;
}]);


