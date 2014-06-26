var myModule = angular.module("HelloAngular", []);

myModule.controller("helloAngular", ['$scope', '$http','$timeout','dateFilter', function ($scope, $http, $timeout, $dateFilter) {

    $http.get('HelloAngular3.json').success(function (data) {
        $scope.greeting = data;
    });
//	$scope.greeting={text:''};

    $scope.textchange = function (n, evt) {
        console.log( $dateFilter(new Date(), 'yyyy/MM/d H:mm:ss '));
        $scope.greeting = {text: n}
    };

//    $scope.li = 'adf';
    var lis = $scope.lis = [];
    $scope.addLi = function (li, event) {
        if(!li){
            return;
        }
        if(event.target.nodeName == 'BUTTON' || event.which == 13){
            lis.push(li);
            $scope.$apply();
        }
    };
    
    $scope.removeLi = function (index) {
        lis.splice(index,1);
    }
}]);


myModule.directive('onKeydown', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.bind('keydown', function () {
                scope.addLi(scope.li,event);
            });
        }
    }
});