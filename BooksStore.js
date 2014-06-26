
var bookStoreModule = angular.module("my.new.module", []);
bookStoreModule.service('Book', ['$rootScope','$http', function ($rootScope, $http) {
    var service = {
        books: [
            {title: "《Ext江湖》", author: "大漠穷秋"},
            {title: "《ActionScript游戏设计基础（第二版）》", author: "大漠穷秋"}
        ],
        addBook: function () {
            $http.get('BookStore.json').success(function (book) {
                service.books.push(book);
                $rootScope.$broadcast('books.update');
            });
        }
    }
    return service;
}]);

bookStoreModule.controller("book.list", ['$scope', 'Book','$rootScope', function (scope, Book, rootScope) {
    scope.$on('books.update', function (event) {
        scope.books = Book.books;
//        scope.$apply();
    });
//    scope.books = Book.books;
    rootScope.$broadcast('books.update');
}]);

bookStoreModule.directive("addBookButton", ['Book', function (Book) {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                Book.addBook();

            });
        }
    }
}]);
