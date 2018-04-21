var app =angular.module('app', ["ngRoute"])


app.controller('myCtrl', ['$scope','$http','$window','$location',function($scope,$http,$window,$location){

  
 $scope.myVar = true
$scope.addClickLogin = function(){
  console.log('ay eshi!')
var req = {
 method: 'POST',
 url: '/login',
 data: { username: $scope.loginUsername, password: $scope.loginPassword }
}

$http(req).then(function(data){
  $window.location.href = '/main.html';
  
	
}, function(err){console.log(err);
	//this.loginPassword = null 
alert("username or password is wrong")

})
   $scope.loginUsername='';
   $scope.loginPassword='';
}
	$scope.addClick = function(){
  	if($scope.password === $scope.confirmPassword){
  	var req = {
 method: 'POST',
 url: '/signup',
 headers: {
   'Content-Type': 'application/json'
 },
 data: { username: $scope.username, password: $scope.password , email:$scope.email }
}

$http(req).then(function(data){console.log(data);
	$window.location.href = '/main.html';
  
  
}, function(){
	alert("username exists or empty inputs")
	console.log("hi")});
  }
else {
	alert("password doesn't match, rewrite it again");
}
$scope.username='';
$scope.password='';
$scope.email ='';
$scope.confirmPassword ='';
}
}])
app.component('main', {
  controller: 'myCtrl',
  templateUrl: "./main.html"
})
app.component('signup', {
  controller: 'myCtrl',
  templateUrl: "signup.html"
})