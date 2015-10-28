var myApp = angular.module('myApp',['ngRoute', 'ui.bootstrap', 'ngResource']).
    config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider ){
        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeCtrl'});
        $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'aboutCtrl'});
        $routeProvider.when('/progects', {templateUrl: 'partials/progects.html', controller: 'progectsCtrl'});
        
        //When anyone navigates to /progects/:progect load the partial of the :progect.html
        //$routeProvider.when('/progects/:progect',
        //{templateUrl: function(params){
        //return 'partials/progects/' + params.progect + 'html'
        //},
        // controller: 'customerApiCtrl'});
        $routeProvider.when('/progects/customerapi',{templateUrl: 'partials/progects/customerapi.html',
            controller: 'progectsCtrl'});
        $routeProvider.otherwise({redirectTo:'/home'});
        
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    }]);
    