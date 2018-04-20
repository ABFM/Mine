var app =angular.module('app', ["ngRoute"])
// app.config(function($routeProvider) {
//     $routeProvider
//     .when("/", {
//         templateUrl : "main.html"
//     })
//     .when("/signup", {
//         templateUrl : "signup.html"
//     })
//     .when("/login", {
//         templateUrl : "login.html"
//     })
// })
app.controller('myCtrl', ['$scope','$http','$window',function($scope,$http,$window){
	
// $scope.component = 1

  	 this.addClickLogin = function(){
  	var req = {
 method: 'POST',
 url: '/login',
 headers: {
   'Content-Type': 'application/json'
 },
 data: { username: this.loginUsername, password: this.loginPassword }
}

$http(req).then(function(data){
	
	
	$window.location.href = '/main.html';

}, function(err){console.log(err);
	//this.loginPassword = null 
alert("username or password is wrong")

})}
	this.addClick = function(){
  	if(this.password === this.confirmPassword){
  	var req = {
 method: 'POST',
 url: '/signup',
 headers: {
   'Content-Type': 'application/json'
 },
 data: { username: this.username, password: this.password , email:this.email }
}

$http(req).then(function(data){console.log(data);
	$window.location.href = '/main.html';
console.log("hi2")}, function(){
	alert("username exists or empty inputs")
	console.log("hi")});
  }
else {
	alert("password doesn't match, rewrite it again");
}}


}])
app.component('main', {
  controller: 'myCtrl',
  templateUrl: "./main.html"
})
app.component('signup', {
  controller: 'myCtrl',
  templateUrl: "signup.html"
})