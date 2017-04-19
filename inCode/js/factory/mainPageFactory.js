angular.module('myApp')
    .factory('mainPageFactory', function ($resource) {
        let mainPageObj = {};

        let items = [];
        let query = $resource('',{},{
            getAllProduct:{
                method: 'GET',
                url: 'data.json',
                isArray: true
            }
        });

        mainPageObj.getItems = function () {
            return query.getAllProduct().$promise.then((response)=>{
                return items = response
            });
        };

        return mainPageObj
    });
