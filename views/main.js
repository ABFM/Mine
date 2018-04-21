var app =angular.module('app2',["ngRoute"])
app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/videos", {
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
app.controller('myCtrl2', ['$scope','$http','$window','$location',function($scope,$http,$window,$location){
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
  console.log(data['data'])
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
  console.log(name)
 var req = {
 method: 'POST',
 url: '/add',
 headers: {
   'Content-Type': 'application/json'
 },
 data: { name: name, url: url, category:category }
}

$http(req).then(function(data){
  console.log("hi",data)
}, function(err){console.log(err);
 //this.loginPassword = null 
alert("username or password is wrong")

})
  $scope.name = ''
  $scope.url = ''
}





}])
