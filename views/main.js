var app =angular.module('app2',["ngRoute"])
app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/Home", {
        templateUrl : 'home.html'
      })
    .when("/Videos", {
        templateUrl : 'videos.html'
      })
    .when("/Articles", {
        templateUrl : "Articles.html"
    })
     .when("/Photos", {
        templateUrl : "photos.html"
    }) .when("/Music", {
        templateUrl : "music.html"
    }) .when("/Others", {
        templateUrl : "others.html"
    })
}])
app.controller('myCtrl2', ['$scope','$http','$window',function($scope,$http,$window){
$scope.getVideos = function(){
    var req = {
 method: 'POST',
 url: '/fetch',
  headers: {
   'Content-Type': 'application/json'
 },
 data: { category:"videos" }
}

$http(req).then(function(data){
  $scope.urls = data['data']
}, function(err){console.log(err);

})
}

 $scope.getArticles = function(){
 var req = {
 method: 'POST',
 url: '/fetch',
  headers: {
   'Content-Type': 'application/json'
 },
 data: { category:"articles" }
}

$http(req).then(function(data){
  console.log(data['data'])
  $scope.urls = data['data']
}, function(err){console.log(err);

})
}
 $scope.getOthers = function(){
 var req = {
 method: 'POST',
 url: '/fetch',
  headers: {
   'Content-Type': 'application/json'
 },
 data: { category:"others" }
}

$http(req).then(function(data){
  console.log(data['data'])
  $scope.urls = data['data']
}, function(err){console.log(err);

})
}

 $scope.getPhotos = function(){
 var req = {
 method: 'POST',
 url: '/fetch',
  headers: {
   'Content-Type': 'application/json'
 },
 data: { category:"photos" }
}

$http(req).then(function(data){
  console.log(data['data'])
  $scope.urls = data['data']
}, function(err){console.log(err);

})
}
 $scope.getMusic = function(){
 var req = {
 method: 'POST',
 url: '/fetch',
  headers: {
   'Content-Type': 'application/json'
 },
 data: { category:"music" }
}

$http(req).then(function(data){
  console.log(data['data'])
  $scope.urls = data['data']
}, function(err){console.log(err);

})
}

$scope.addUrl = function (name,url, category){
console.log(category)
 var req = {
 method: 'POST',
 url: '/add',
 headers: {
   'Content-Type': 'application/json'
 },
 data: { name: name, url: url, category:category }
}

$http(req).then(function(data){
   console.log("hi hi hi hih i hi",data)
$window.location.reload()

}, function(err){console.log(err);
 //this.loginPassword = null


})

}

$scope.logout= function(){
  var req= {
    method: 'GET',
    url: '/logout'
  }
  $http(req).then(function(){
    $window.location.href = '/';
  },function(){})
}

$scope.init = function (){
  var route=$window.location.href.split("!")[1];
  switch (route) {
    case "/Videos":
      $scope.getVideos()
      break;
    case "/Articles":
      $scope.getArticles()
      break;
    case "/Photos":
      $scope.getPhotos()
      break;
    case "/Music":
      $scope.getMusic()
      break;
    case "/Others":
      $scope.getOthers()
      break;

}
}

$scope.delete = function(name){
  var req = {
 method: 'POST',
 url: '/delete',
  headers: {
   'Content-Type': 'application/json'
 },
 data: { name:name }
}

$http(req).then(function(data){
  console.log('alo alo lao')
 $window.location.reload()
}, function(err){
  console.log(err);
})
}

 $scope.search = function (username) {

    var req = {
 method: 'POST',
 url: '/searchUser',
  headers: {
   'Content-Type': 'application/json'
 },
 data: { username:username }
}

$http(req).then(function(data){
 $scope.usernames = data['data']
}, function(err){
  console.log(err);
})
 }


}])
