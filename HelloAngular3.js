var myModule = angular.module("HelloAngular", []);

myModule.controller("helloAngular", ['$scope', '$http', '$timeout', 'dateFilter', function ($scope, $http, $timeout, $dateFilter) {

    $http.get('HelloAngular3.json').success(function (data) {
        $scope.greeting = data;
    });
//	$scope.greeting={text:''};

    $scope.textchange = function (n, evt) {
        console.log($dateFilter(new Date(), 'yyyy/MM/d H:mm:ss '));
        $scope.greeting = {text: n}
    };

//    $scope.li = 'adf';
    var lis = $scope.lis = [];
    for (var i = 0; i < 10; i++) {
        lis.push(i * 100);
    }
    $scope.addLi = function (li, event) {
        if (!li) {
            return;
        }
        if (event.target.nodeName == 'BUTTON' || event.which == 13) {
            lis.push(li);

//            lis.splice(2,0,li);
            if (event.which == 13) {
                $scope.$apply();
            }
        }
    };

    $scope.removeLi = function (index) {
        lis.splice(index, 1);
    };
    $scope.update = function () {
        lis[0] = 'new new...';
    };

}]);


myModule.directive('onKeydown', function ($rootScope) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('keydown', function () {
                scope.addLi(scope.newli, event);
            });

        }
    }
});

