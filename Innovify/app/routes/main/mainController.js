app.controller('mainCtrl',function($location, $scope, $window,$rootScope){
    $rootScope.islogin = false;
    $scope.logout = function () {
        $rootScope.islogin = false;
        localStorage.clear();
    }
});