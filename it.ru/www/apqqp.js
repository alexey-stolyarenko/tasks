

angular.module('angularApp',[])
    .controller('angularCtrl', function ($scope, $http) {




        $scope.getFunction = function () {
            $http.get('http://smktesting.herokuapp.com/api/products/').success(function (data) {
                $scope.get = data;
                console.log($scope.get)

                for(var i=0;i<$scope.get.length;i++){



                    $http.get('http://smktesting.herokuapp.com/api/reviews/'+ $scope.get[i].id).success(function (dat) {
                        $scope.show =dat
                        console.log($scope.show)
                        }
                    )


                }


            })

        }

        
        
        $scope.viewFunction = function (item) {
            $scope.showProduct1 = 'true';
            /*$scope.show = item;*/
            /*$http.get('http://smktesting.herokuapp.com/api/reviews/'+ $scope.show.id).success(function (data) {
                $scope.rev = data;
            }
            )*/
        }
        
        
        $scope.addNewUser = function (userDetails) {
            $scope.message = { "username" :  userDetails.name,
                                "password" : userDetails.password
            }
            $http( {
                url : 'http://smktesting.herokuapp.com/api/register/',
                method: "POST",
                data: $scope.message
            }

                ).success(function (dataUserReg) {
                $scope.newUserReg = dataUserReg;
                $('#formRegistration').hideModal();
            })

        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        })


   





























/*
angular.module('angularApp',[])
    .constant('baseUrl','http://127.0.0.1:2403/items')
        .controller('angularCtrl', function ($scope,$http, baseUrl) {

            // текущее педставление
            $scope.currentView = "table";

            // получение всех данных из модели
            $scope.refresh = function () {
                // HTTP GET
                // получение всех данных через GET запрос по адрес хранящемуся в baseUrl
                $http.get(baseUrl).success(function (data) {
                    $scope.items = data;
                });
            }

            // создание нового элемента
            $scope.create = function (item) {
                // HTTP POST
                // Отправка POST запроса для создания новой записи на сервере
                $http.post(baseUrl, item).success(function (item) {
                    $scope.items.push(item);
                    $scope.currentView = "table";
                });
            }

            // обновление элемента
            $scope.update = function (item) {
                // HTTP PUT
                // Отправка PUT запроса для обновления определенной записи на сервере
                $http({
                    url: baseUrl + item.id,
                    method: "PUT",
                    data: item
                }).success(function (modifiedItem) {
                    for (var i = 0; i < $scope.items.length; i++) {
                        if ($scope.items[i].id == modifiedItem.id) {
                            $scope.items[i] = modifiedItem;
                            break;
                        }
                    }
                    $scope.currentView = "table";
                });
            }

            // удаление элемента из модели
            $scope.delete = function (item) {
                // HTTP DELETE
                // отправка DELETE запроса по адресу http://localhost:2403/items/id что приводит к удалению записей на сервере
                $http({
                    method: "DELETE",
                    url: baseUrl + item.id
                }).success(function () {
                    $scope.items.splice($scope.items.indexOf(item), 1);
                });
            }

            // редеактирование существующего или создание нового элемента
            $scope.editOrCreate = function (item) {
                $scope.currentItem = item ? angular.copy(item) : {};
                $scope.currentView = "edit";
            }

            // сохранение изменений
            $scope.saveEdit = function (item) {
                // Если у элемента есть свойство id выполняем редактирование
                // В данной реализации новые элементы не получают свойство id поэтому редактировать их невозможно (будет исправленно в слудующих примерах)
                if (angular.isDefined(item.id)) {
                    $scope.update(item);
                } else {
                    $scope.create(item);
                }
            }

            // отмена изменений и возврат в представление table
            $scope.cancelEdit = function () {
                $scope.currentItem = {};
                $scope.currentView = "table";
            }

            $scope.refresh();
        });*/
