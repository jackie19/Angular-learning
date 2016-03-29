var app = angular.module('app', ['ui.router', 'oc.lazyLoad']);


app.config(
    ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$httpProvider',
        function ($controllerProvider, $compileProvider, $filterProvider, $provide) {

            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service;


        }
    ])


app.config(function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

    //ng模块
    $ocLazyLoadProvider.config({
        debug: false,
        events: true,
        modules: [
            {
                name: 'toaster',
                files: [
                    '../bower_components/angularjs-toaster/toaster.js',
                    '../bower_components/angularjs-toaster/toaster.css'
                ]
            }
        ]
    })


    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'tpls2/home.html'
        })


        .state('home.list', {
            url: '/list',
            templateUrl: 'tpls2/home-list.html',
            controller: function ($scope) {
                $scope.topics = ['Butterscotch', 'Black Current', 'Mango'];
            }
        })


        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a scoop of ice-cream. '
        })
        .state('about', {
            url: '/about',
            views: {
                '': {
                    templateUrl: 'tpls2/about.html',
                    controller: function ($scope, toaster) {
                        console.log(1111)
                        $scope.doClick = function () {
                            toaster.pop('warning', 'about', 'hello about');
                        };

                    },
                    resolve: {
                        deps: ['$ocLazyLoad',
                            function ($ocLazyLoad) {
                                return $ocLazyLoad.load('toaster') //加载 toaster
                            }]
                    }
                },
                'columnOne@about': {
                    template: '这里是第一列的内容'
                },
                'columnTwo@about': {
                    templateUrl: 'tpls2/table-data.html',
                    controller: 'Controller'
                }
            }
        });
});


app.controller('Controller', function ($scope) {
    $scope.message = 'test';
    $scope.topics = [{
        name: 'Butterscotch',
        price: 50
    }, {
        name: 'Black Current',
        price: 100
    }, {
        name: 'Mango',
        price: 20
    }];
});
