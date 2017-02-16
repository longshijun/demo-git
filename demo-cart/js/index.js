// /**
//  * Created by Administrator on 2016/11/1 0001.
//  */
// window.onload = function () {
//     var app = angular.module('myApp',[]);
//     app.controller('myController', ['$scope', '$http', function ($scope, $http) {
//         $http.get('js/hello.json').success(function (data) {
//             console.log(data);
//             $scope.$broadcast('data', data);
//         }).error(function (err) {
//             console.log(err);
//         });
//     }])
//
// }