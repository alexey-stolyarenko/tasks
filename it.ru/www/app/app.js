

angular.module('angularApp',[])
    .constant ('baseUrl', 'http://smktesting.herokuapp.com/')

    .controller('angularCtrl', function ($scope, $http, baseUrl) {

        $scope.aboutUser = {
            reg: 'Registration',
            aut: 'authorization',
            userName: '',
            password: '',
            access : '',
            message : ''
        };


        $scope.productsInfo = '';


        $scope.getFunction = function () {
            $http.get( baseUrl + 'api/products/').success(function (data) {
                $scope.getData = data;
            })
        };

        
        
        $scope.viewFunction = function (item) {
            $scope.showProducts = 'true';
            $scope.productsInfo = item;
            $http.get(baseUrl +'api/reviews/'+ $scope.productsInfo.id).success(function (data) {
                $scope.countOfProducts = data;
            })
        };
        
        
        $scope.addNewUser = function (aboutUser) {
            $http( {
                url :baseUrl + 'api/register/',
                method: "POST",
                data: {
                    "username" :  aboutUser.userName,
                    "password" : aboutUser.password
                }
            }
                ).success(function (dataUserReg) {
                console.log(dataUserReg)
                if(dataUserReg.success == true){
                    $('#submit').attr('data-dismiss', 'modal');
                    $scope.aboutUser.aut = $scope.aboutUser.userName;
                   $('li:last-child').attr('data-target','#test');
                    $scope.aboutUser.access = 'true'
                }
                else{
                    $scope.aboutUser.message = dataUserReg.message;
                }
            })
        };
        
        

        $scope.autorization = function (aboutUser) {
            $http({
                url: baseUrl + 'api/login/',
                method: "POST",
                data: {
                    "username" :  aboutUser.userName,
                    "password" : aboutUser.password
                }
            }).success(function (dataAboutAut) {
                if(dataAboutAut.success == true){
                    $scope.aboutUser.aut = $scope.aboutUser.userName;
                    $('li:last-child').attr('data-target','#test');
                    $scope.aboutUser.access = 'true';
                    $('#submit1').attr('data-dismiss', 'modal');
                }
            });

            $scope.reviewSubmit = function (product) {
                console.log(product);
                $http({
                    url: baseUrl + 'api/reviews/' + product.id,
                    method: "POST",
                    data: {}
                }).success(function (data) {
                    $scope.forReview = data;
                })
            }

            $scope.updateAccess =function () {
                $scope.aboutUser.access = '';
                $scope.aboutUser.message = '';
            }
            
            
            
            
            

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
