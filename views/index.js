
  var app =angular.module('app', ["ngRoute"])


  app.controller('myCtrl', ['$scope','$http','$window',function($scope,$http,$window){
    $scope.myVar = true; //for show and hide in the html (signup and login) elements.
    $scope.addClickLogin = function(){  //login function
      var req = {
       method: 'POST',
       url: '/login',
       data: { username: $scope.loginUsername, password: $scope.loginPassword }
     }

     $http(req).then(function(data){
      $window.location.href = '/main.html'; //redirect the user to the main page if the username and password is correct

    }, function(err){console.log(err);
  alert("username or password is wrong") //stay on the login page if one of them is incorrect

})
     $scope.loginUsername=''; //empty the inputs after clicking the button
     $scope.loginPassword='';
   }

 
   $scope.addClick = function(){ //signup function
     if($scope.password === $scope.confirmPassword && $scope.password !== undefined && $scope.username && $scope.email){
       var req = {
         method: 'POST',
         url: '/signup',
         headers: {
           'Content-Type': 'application/json'
         },
         data: { username: $scope.username, password: $scope.password , email:$scope.email}
       }

       $http(req).then(function(data){console.log(data);
         $window.location.href = '/main.html'; //redirect the user to the main page if the username does not exist already


       }, function(){
         alert("username exists or empty inputs")
         });
     }
     else { // if the password doesn't match confirm password; it doesn't make an http request to the server.
       alert("password doesn't match or empty inputs, rewrite it again");
     }
     $scope.password='';
     $scope.confirmPassword ='';
   }
 }])
