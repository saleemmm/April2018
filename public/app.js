var app = angular.module("app",["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "main.html"
        })
        .when("/main", {
            templateUrl : "main.html",
            controller : "mainCtrl"
        });

});