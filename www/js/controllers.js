angular.module('starter.controllers', [])

.controller('BudapestCtrl', function($scope, CurrentTime) {
	myTimer();
  	var myVar = setInterval(function(){myTimer();},1000);
	function myTimer() {
    	var date = new Date();
  		var minutes = date.getMinutes();
  		var seconds = date.getSeconds();
  		var hours = (date.getHours() + date.getTimezoneOffset()/60 + 2)%12;
  		$scope.hourAngle = 30 * hours + minutes/2;
  		$scope.secondsAngle = 6 * seconds;
    	$scope.$apply();
	}
})

.controller('TokyoCtrl', function($scope, CurrentTime) {
  	myTimer();
  	var myVar = setInterval(function(){myTimer();},1000);
	function myTimer() {
    	var date = new Date();
  		var minutes = date.getMinutes();
  		var seconds = date.getSeconds();
  		var hours = (date.getHours() + date.getTimezoneOffset()/60 + 9)%12;
  		$scope.hourAngle = 30 * hours + minutes/2;
  		$scope.minuteAngle = 6 * minutes;
    	$scope.$apply();
	}
})

.controller('NewYorkCtrl', function($scope, CurrentTime) {
	myTimer();
  	var myVar = setInterval(function(){myTimer();},1000);
	function myTimer() {
    	var date = new Date();
  		var minutes = date.getMinutes();
  		var seconds = date.getSeconds();
  		var hours = (date.getHours() + date.getTimezoneOffset()/60 + 8)%12;
  		$scope.hourAngle = 30 * hours + minutes/2;
  		$scope.minuteAngle = 6 * minutes;
    	$scope.$apply();
	}
});
