angular.module('myApp')
    .directive('itemDirective', function () {
        return {
            restrict: 'AE',
            templateUrl: 'view/selectProductView.html',
            controllerAs: 'itemDirectiveCtrl',
            controller: function (mainPageFactory, $cookies, cookiesFactory) {
                let vm = this;
                vm.selectCount = 1;
                vm.addSelectItem = function (item) {
                    cookiesFactory.selectedItems(item, vm.selectCount);
                    vm.selectCount = 1;
                };
            }
        }
    });
