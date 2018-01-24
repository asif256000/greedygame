angular.module("GreedyGame", ['ui.router', 'satellizer'])
    .run(['$rootScope', '$state', '$stateParams', '$timeout', '$window',
        function($rootScope, $state, $stateParams, $timeout, $window) {

        }])

    .config(function ($stateProvider, $urlRouterProvider, $locationProvider,
                      $httpProvider){

        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("main", {
                url: "/",
                templateUrl: "partials/main.html",
                controller: "mainController",
            })

    })
