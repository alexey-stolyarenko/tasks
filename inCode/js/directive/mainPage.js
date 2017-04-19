angular.module('myApp')
    .directive('mainPage', function () {
        return {
            restrict: 'AE',
            scope: {},
            templateUrl: 'view/mainView.html',
            controllerAs: 'mainPageCtrl',
            controller: function (mainPageFactory, $cookies, cookiesFactory) {
                let vm = this;

                mainPageFactory.getItems().then((response)=> {
                    vm.items = response;
                });

                vm.cookieAllPrice = $cookies.get('cookiesAllPrice');
                vm.cookieAllCount = $cookies.get('cookiesAllCount');

                vm.showDeafaultCookies = function () {

                    if (vm.cookieAllPrice == undefined) {
                        vm.allPrice = cookiesFactory.showPrice();
                        vm.allCount = cookiesFactory.showCount();
                    }
                    else {
                        vm.allPrice = vm.cookieAllPrice;
                        vm.allCount = vm.cookieAllCount;
                    }
                };
                vm.showDeafaultCookies();

                vm.showTotalPrice = function () {
                    vm.allPrice = cookiesFactory.showPrice();
                    vm.allCount = cookiesFactory.showCount();
                };
            }
        }
    });
