app.controller("ctrl_one", function ($scope, $translate) {
    $translate('GREETING').then(function (translation) {
        $scope.greetingText = translation;
        $scope.changeLanguage = function () {
            var language = $translate.use();
            if (language === "US_EN") {
                $translate.use("SPANISH");
            } else {
                $translate.use("US_EN");
            }
        }
    })
});
