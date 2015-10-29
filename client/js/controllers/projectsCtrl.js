myApp.controller('projectsCtrl', ['$scope',  function($scope){
    $scope.form = {};
    $scope.addToDatabase =function(){
        Api.Customer.save({}, $scope.form, function(){
            $scope.form = {};
        })
    }
}]);