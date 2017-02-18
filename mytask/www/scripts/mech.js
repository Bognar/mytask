var app = angular.module("app", []);
app.controller("myCtrl", function($scope) {
    $scope.lista = ["Zadatak 1", "Zadatak 2"];
    $scope.click = function () {
        $scope.lista.push($scope.adding);

    }
    $scope.delete = function (x) {
        $scope.lista.splice(x, 1);
    }
});