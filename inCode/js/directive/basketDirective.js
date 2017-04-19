angular.module('myApp')
    .directive('basketDirective', function () {
        return {
            restrict: 'AE',
            scope: {},
            templateUrl: 'view/basketView.html',
            controllerAs: 'basketCtrl',
            controller: function (cookiesFactory, $cookies) {
                let vm = this;
                vm.showSelectedItems = function () {
                    vm.items = cookiesFactory.getItemArray();
                    vm.allPrice = cookiesFactory.showPrice();
                    vm.allCount = cookiesFactory.showCount();
                    vm.getCookiesItems = $cookies.getObject('items');
                    vm.cookieAllPrice = $cookies.get('cookiesAllPrice');
                    vm.cookieAllCount = $cookies.get('cookiesAllCount');
                };
                vm.showSelectedItems();

                vm.showDeafaultCookies = function () {
                    if (vm.cookieAllPrice == undefined) {
                        vm.allPrice = 0;
                        vm.allCount = 0;
                    }
                    else {
                        vm.allPrice = vm.cookieAllPrice;
                        vm.allCount = vm.cookieAllCount;
                        vm.items = vm.getCookiesItems
                    }
                };
                vm.showDeafaultCookies();

                vm.deleteItem = function (item) {
                    vm.items = cookiesFactory.deleteItems(item);
                    vm.allPrice = cookiesFactory.showPrice();
                    vm.allCount = cookiesFactory.showCount();
                };
            }
        }
    });