var app = angular.module('innovify-app', ['ngRoute', "ngStorage", 'pascalprecht.translate']);

app.config(["$routeProvider", "$httpProvider", "$translateProvider", function ($routeProvider, $httpProvider, $translateProvider) {
    /*  $httpProvider.interceptors.push('responseInterceptor');

      translateProvider.translations("US_EN", {
          "GREETING": "Hello !",
          "DESCRIPTION": "This is ademo app for multilingual support.",
          "LBL_SWITCH": "Click here for switching language between spanish to english",
          "CLICK": "Click"
      });
      $translateProvider.translations("SPANISH", {
          "GREETING": "Hola !",
          "DESCRIPTION": "Esta es una aplicacion de demostracion para soporte multilingue",
          "LBL_SWITCH": "Haga clic aquí para cambiar el idioma entre espanol al Ingles",
          "CLICK": "Click"
      });
      $translateProvider.preferredLanguage("US_EN");*/
    $routeProvider.when("/register", {
        templateUrl: "routes/register/register.html",
        controller: "registerCtrl"
    })
        .when('/login', {
            templateUrl: "routes/login/login.html",
            controller: 'loginCtrl'
        })
        .when('/logout', {
            templateUrl: "routes/register/register.html",
            controller: 'logoutCtrl'
        })
        .when("/dashboard", {
            templateUrl: "routes/dashboard/dashboard.html",
            controller: "dashboardCtrl"
        }).otherwise("/login");

}]);
