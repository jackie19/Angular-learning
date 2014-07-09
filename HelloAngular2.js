var myModule = angular.module("HelloAngular", []);
myModule.controller("helloAngular", ['$scope', function HelloAngular($scope) {
    $scope.greeting = {text: 'Hello'};
    $scope.greeting.text1 = function (val) {
        return val || $scope.greeting.text;
    }
}]);