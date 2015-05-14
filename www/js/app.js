// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


/*
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })

.state('checkin', {
      url: "/check-in",
          templateUrl: "templates/check-in.html",
          controller: "CheckinCtrl"
      }
    })
$urlRouterProvider.otherwise('/check-in');

});*/




.controller('MainCtrl', function($scope,$http) {
  $scope.showForm = true;
  
  console.log('Trying POST');
  $scope.RentMySpotForm = {};


  $scope.submit = function() {
    if(!$scope.RentMySpotForm.address1) {
      alert('Info required name is'+ $scope.RentMySpotForm.address1);
      return;
    }
    console.log('Trying POST');

$http.defaults.headers.post["Content-Type"] = "application/json";
 var request = $http({
            method: 'post',
            url: 'http://ec2-54-200-217-45.us-west-2.compute.amazonaws.com:8080/sparking/spot/rentMySpot',
            data: JSON.stringify($scope.RentMySpotForm),
            headers : {"Content-Type": 'application/json'}

        }).success(function (data, status, headers, config) {
            console.log("Success",data);
        }).error(function (data, status, headers, config) {
            console.log("Failed",data,status);
        });
    console.log('Trying POST : Data:'+JSON.stringify($scope.RentMySpotForm));
    $scope.showForm = false;
    $scope.RentMySpotForms.push($scope.RentMySpotForm);
  }
});
/*
.controller('MainCtrl', function($scope, $http) {
console.log('Success1');
var requestData = 
 {"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1};
$scope.conditions="HoT";
$scope.myForm = {};
       $scope.myForm.name = "";

     $http.defaults.headers.post["Content-Type"] = "application/json";
 var request = $http({
            method: 'post',
            url: 'http://ec2-54-200-217-45.us-west-2.compute.amazonaws.com:8080/sparking/spot/rentMySpot',
            data:{"address1":"2 Townsend St","address2":"Apt 1803","city":"San Francisco","state":"CA","zip":"94107","spotType":"Garage","rateHr":"10","rateMonthly":"400","description":"Great Spot","carSize":1} ,
            headers : {"Content-Type": 'application/json'}

        }).success(function (data, status, headers, config) {
            console.log("Success",data);
        }).error(function (data, status, headers, config) {
            console.log("Failed",data,status);
        });
    });

*/ 
/*$http.post('http://ec2-54-200-217-45.us-west-2.compute.amazonaws.com:8080/sparking/spot/rentMySpot',requestData, {
        headers: { 'Content-Type': 'application/json'}
    }).then(function(resp) {
    console.log('Success', resp.data);
    // For JSON responses, resp.data contains the result
  }, function(err) {
    console.error('ERR', err.status);
    // err.status will contain the status code
  })
})
*/

