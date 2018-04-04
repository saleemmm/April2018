app.controller('dashboardCtrl',function ($scope,$location) {
    $scope.registerDetails = JSON.parse(localStorage.getItem('loginDetails'));
});