angular.module("GreedyGame").controller('mainController',
              ['$scope','$state', '$rootScope','MainService',
              function($scope, $state, $rootScope,MainService){

                  $scope.MainService =MainService
                  $scope.frmDate = ''
                  $scope.toDate =''
                  $('.datepicker').pickadate({
                      format: "yyyy,mmmm d",
                      selectMonths: true, // Creates a dropdown to control month
                      selectYears: 15, // Creates a dropdown of 15 years to control year,
                      today: 'Today',
                      clear: 'Clear',
                      close: 'Ok',
                      closeOnSelect: false, // Close upon selecting a date,
                      max: true
                  });


              }])
