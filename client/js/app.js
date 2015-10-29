var myApp = angular.module('myApp',['ngRoute', 'ui.bootstrap', 'ngResource']).
    config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider ){
        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
        $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'aboutCtrl'});
        $routeProvider.when('/projects', {templateUrl: '/partials/projects.html', controller: 'projectsCtrl'});
        $routeProvider.when('/projects/customerapi', {templateUrl: '/partials/projects/customerapi.html', controller: 'customerApiCtrl'});
        $routeProvider.otherwise({redirectTo:'/home'});
        
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    }]);
    