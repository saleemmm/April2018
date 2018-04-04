app.controller('loginCtrl', function ($scope,$location,$rootScope) {
    $scope.newLogin = {};
    var registerDetails = JSON.parse(localStorage.getItem('loginDetails'));
    console.log(registerDetails);
    $scope.saveLogin = function () {
        console.log($scope.newLogin);
        if(!!registerDetails){
            if(registerDetails.email == $scope.newLogin.email && registerDetails.Password == $scope.newLogin.password){
                $rootScope.islogin = true;
                $location.path('/dashboard');
            }else{
                alert('Please check email or password incorrect');
            }
        }else{
            alert('Please invalid email');
        }

        //$scope.newLogin = {};
    };

    console.log("this is a controller login controller");
});
