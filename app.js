var app = angular.module('valikko', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/sivu1', {
            templateUrl : '/sivut/sivu1.html',
            controller : 'controller'
        })
        .when('/sivu2', {
            templateUrl : '/sivut/sivu2.html',
            controller : 'controller'
        })
        .when('/sivu3', {
            templateUrl : '/sivut/sivu3.html',
            controller : 'controller'
        })
        .otherwise({
            redirectTo: '/sivu1'
        });
});

app.controller('controller', function($scope) {
    
});