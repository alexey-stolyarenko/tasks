angular.module('myApp')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/main');
            $stateProvider
                .state('main', {
                    url:'/main',
                    template:'<main-page></main-page>'
                })
                .state('basket', {
                    url:'/basket',
                    template:'<basket-directive></basket-directive>'
                })
        }])