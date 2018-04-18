angular.module('app', [])
.controller('myCtrl', ['$scope','$http',function($scope,$http){
$scope.component = 1
$scope.hello="hello"
// $scope.addClick=function (){
// console.log($scope.number)
// }

// $scope.items=["bushra","mohammed"]
}])
.component('login', {
  controller: 'myCtrl',
  template: `<div>
	<table>
		<tr>
			<th>
				<input type="text" ng-model="username">
			</th>
			<th>
				<input type="text" ng-model="password">
			</th>
			<th>
			<button type='button' class="btn btn-default center-block"> Login</button>
			</th>				
		</tr>
	</table>
</div>`
})
.component('signup', {
  controller: 'myCtrl',
  template: `<div>
	signup
</div>`
})