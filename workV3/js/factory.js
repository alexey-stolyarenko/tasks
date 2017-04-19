app.factory('factoryApp', function ($http) {
    var factoryData = {};
    factoryData.getData = function (count) {
        return $http({
            url : 'https://randomuser.me/api/?results=' +count + '&inc=gender,name,login,dob,picture,phone,location,registered,email,cell,cell&nat=us&noinfo',
            method: 'GET'
        })
    };
    factoryData.changeObj  = function (item) {
        if(item.gender =='male'){
            item.gender ='img/male.png';
            item.registered = item.registered.substring(0,11);
            item.dob = item.dob.substring(0,11)
        }
        else if(item.gender =='female'){
            item.gender ='img/female.png';
            item.registered = item.registered.substring(0,11);
            item.dob = item.dob.substring(0,11)
        }
        return item
    };
    return factoryData;
});