var app = angular.module('serviceModule', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/inputView',{
    controller: 'ctrlInput',
    templateUrl: "inputView.html"
  });

    $routeProvider.when('/displayView',{
    controller: 'ctrlDisplay',
    templateUrl: "displayView.html"
  });

  $routeProvider.when('/api',{
  controller: 'apiCtrl',
  templateUrl: "api.html"
});


  $routeProvider.otherwise({redirectTo:"/inputView"})

});
