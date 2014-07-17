function testCtrl($http) {
    $http({
        method: 'GET',
        url: 'data.json'
    }).success(function(data, status, headers, config) {
        console.log("success...");
        console.log(data);
    }).error(function(data, status, headers, config) {
        console.log("error...");
    });
}
