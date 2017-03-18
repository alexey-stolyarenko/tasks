var app = angular.module('angularApp',[]);

    app.controller('angularCtrl', function ($scope, factoryApp) {
        $scope.male = [];
        $scope.female =[];
        $scope.countOfUsers = 11;
        $scope.sendMessage = function () {
            factoryApp.getData($scope.countOfUsers).success(function (data) {
                $scope.dataFromServer = data.results;
                $scope.dataFromServer.forEach(function(item){
                    if(item.gender =='male'){
                        $scope.male.push(item.gender)
                    }
                    else{
                        $scope.female.push(item.gender)
                    }
                })
            })
        };
        $scope.sendMessage();
        $scope.changeDataObj = function (item) {
           factoryApp.changeObj(item);
            return item
        };
        $scope.getChar = function () {
            google.charts.load('current', {'packages':['corechart']});
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {

                var data = google.visualization.arrayToDataTable([
                    ['Task', 'Hours per Day'],
                    ['male',     $scope.male.length],
                    ['female',    $scope.female.length]
                ]);
                var options = {
                    title: '',
                    legend: 'none',
                    width: 300,
                    height:300,
                    is3D:true,
                    slices:{
                        1:{offset:0.2}
                    },
                    colors: ['#7c888f','4b5459'],
                    backgroundColor: 'c9d0d6'
                };
                var chart = new google.visualization.PieChart(document.getElementById('piechart'));
                chart.draw(data, options);
            }
        };

$scope.findClick = function (info) {
    $('.panel-default').hide();
    $("h5:contains(" + info.toLowerCase() +")").closest('.panel-default').show();
}
    });