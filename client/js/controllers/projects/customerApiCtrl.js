myApp.controller('customerApiController', ['$scope', 'Api', function($scope, Api){
    $scope.form = {};
    $scope.customers = [];
    $scope.pageSize = 5;
    $scope.currentPage = 1;
    
    Api.Customer.query({}, function(data){
        $scope.customers = data;
    });
    
    $scope.deleteAll = function(){
        Api.Customer.delete({}, function(data){
            $scope.customers = [];
        })
    }
}]);