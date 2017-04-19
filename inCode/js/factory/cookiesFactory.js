angular.module('myApp')
    .factory('cookiesFactory', function ($cookies) {
        let cookies = {};

        let itemArray = [];
        let allCount = 0;
        let allPrice = 0;

        function start() {
            let start = $cookies.getObject('items');
            if(start !== undefined){
                itemArray = start
            }
        }

        start();


        function saleFunction(salesItem, item) {
            if (salesItem.count < salesItem.sales) {
                salesItem.totalPrice = salesItem.count * item.productPrice;
            }
            else {
                let data = Math.floor(salesItem.count / salesItem.sales);
                salesItem.totalPrice = (salesItem.count - (data * 2)) * item.productPrice;
            }
        }

        function getPrice(item, count) {
            let salesItem = _.findWhere(itemArray, {id: item.id});
            salesItem.count += +count;
            salesItem.sales !== undefined ? saleFunction(salesItem, item) : salesItem.totalPrice = salesItem.count * salesItem.productPrice
        }

        function getTotal() {
            let testPrice = 0;
            let testCount = 0;
            itemArray.forEach(function (item, i, itemArray) {
                testPrice += itemArray[i].totalPrice;
                testCount += itemArray[i].count;
            });
            allPrice = testPrice;
            allCount = testCount
        }

        function setCookies() {
            let tempCook = {}
            tempCook.items = itemArray
            $cookies.putObject('items', tempCook.items)
            let cook = $cookies.getObject('items')
            return cook
        }


        cookies.selectedItems = function (item, count) {
            let itemId = _.findWhere(itemArray, {id: item.id});
            if (itemId == undefined) {
                itemArray.push(item);
                let salesItem = _.findWhere(itemArray, {id: item.id});
                salesItem.count += +count;
                (salesItem.sales !== undefined) ? saleFunction(salesItem, item) : salesItem.totalPrice = salesItem.count * salesItem.productPrice
            }
            else {
                getPrice(item, count);
            }
            getTotal();
            setCookies();
            cookies.setTotalPrice();
        };


        cookies.getItemArray = function () {

            return itemArray
        };


        cookies.deleteItems = function (item) {
            let itemId = _.findWhere(itemArray, {id: item.id});
            _.pull(itemArray, itemId);
            setCookies();
            getTotal();
            cookies.setTotalPrice();
            return itemArray


        };


        cookies.setTotalPrice = function () {
            $cookies.put('cookiesAllCount', allCount);
            $cookies.put('cookiesAllPrice', allPrice);
        };


        cookies.showPrice = function () {
            return allPrice
        };

        cookies.showCount = function () {
            return allCount
        };

        return cookies
    });
