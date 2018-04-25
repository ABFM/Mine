
var app =angular.module('app2',["ngRoute"]) //importing ngRoute is important for the config./routeProvider.
app.config(["$routeProvider", function($routeProvider) {
    $routeProvider // render one of these html pages inside the div of ng-view depending on route provided
    .when("/", {
      templateUrl : 'home.html'
    })
    .when("/Home", {
      templateUrl : 'home.html'
    })
    .when("/Videos", {
      templateUrl : 'categories.html'
    })
    .when("/Articles", {
      templateUrl : "categories.html"
    })
    .when("/Photos", {
      templateUrl : "categories.html"
    }) .when("/Music", {
      templateUrl : "categories.html"
    }) .when("/Others", {
      templateUrl : "categories.html"
    })
  }])
app.controller('myCtrl2', ['$scope','$http','$window',function($scope,$http,$window){

$scope.getVideos = function(){ //fetch the videos urls from the database
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


 $scope.getArticles = function(){ //nafs al eshi
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
 $scope.getOthers = function(){ //nafs al eshi
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

 $scope.getPhotos = function(){ //nafs al eshi
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
 $scope.getMusic = function(){ //nafs al eshi
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

$scope.addUrl = function (name,url, category){ // add url to the database
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
$window.location.reload() //to refresh the page in order to show the newly added url

}, function(err){
  console.log(err);

})

}



$scope.logout= function(){ //redirect the user to the login page.

  var req= {
    method: 'GET',
    url: '/logout'
  }
  $http(req).then(function(){
    $window.location.href = '/';
  },function(){})
}


$scope.init = function (){
  $scope.getUser()
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



$scope.getUser = function(){
  var req = {
 method: 'GET',
 url: '/getUser'
}

$http(req).then(function(data){
  $scope.user = data['data']
}, function(err){
  console.log(err);
})
}



$scope.delete = function(name, url){ //deletes a specific url.

  var req = {
   method: 'POST',
   url: '/delete',
   headers: {
     'Content-Type': 'application/json'
   },
   data: { name:name , url: url}
 }

 $http(req).then(function(data){
   $window.location.reload()
 }, function(err){

  console.log(err);
})
}
$scope.like = function(username,name){
  var req = {

   method: 'POST',
   url: '/like',
   headers: {
     'Content-Type': 'application/json'
   },
   data: { username:username,name:name }
 }

 $http(req).then(function(data){
  // $window.location.reload()

  $scope.search(username)

 }, function(err){
  // $scope.search(username)
  console.log(err);
})


}
$scope.unlike = function(username,name){
  var req = {
   method: 'POST',
   url: '/unlike',
   headers: {
     'Content-Type': 'application/json'
   },
   data: { username:username,name:name }
 }

 $http(req).then(function(data){
   console.log("success unlike")
 $scope.search(username)

 // $window.location.reload()
}, function(err){
  console.log(err);
})
}
$scope.import = function(username,name){
  var req = {

   method: 'POST',
   url: '/import',
   headers: {
     'Content-Type': 'application/json'
   },
   data: { username:username,name:name }
 }

 $http(req).then(function(data){
   console.log("success import")
 }, function(err){
  console.log(err);
})
}
$scope.search = function (username) {
$scope.searchUser = username;
  var req = {
   method: 'POST',
   url: '/searchUser',
   headers: {
     'Content-Type': 'application/json'
   },
   data: { username:username }
 }

 $http(req).then(function(data){
  for (var i = 0; i < data['data'].length; i++) {
   
    data['data'][i]['like'] =(data['data'][i].likesUsers.indexOf($scope.user.userName) !== -1)
       
  }
   $scope.usernames = data['data']
 }, function(err){
  console.log(err);
})

}



}])
