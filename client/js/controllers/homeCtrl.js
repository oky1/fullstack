myApp.controller('homeCtrl', ['$scope', function($scope){
    $scope.myInterval = 4000;
    $scope.slides =[
        {image: "img/diamond-background.jpg", link: "http://oky.16mb.com"},
        {image: "img/explosion-in-space.jpg", link: "http://oky.16mb.com"},
        {image: "img/green-design.jpg", link: "http://oky.16mb.com"},
    ]
}]);