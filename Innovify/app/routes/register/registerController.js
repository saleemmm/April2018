app.controller('registerCtrl',function ($scope,$location) {
    $scope.newRegister = {};
    localStorage.clear();

    $scope.saveRegister = function () {
        console.log($scope.newRegister);
        localStorage.setItem('loginDetails',JSON.stringify($scope.newRegister));
        $scope.newRegister = {};
        $location.path('/login');
    }
});