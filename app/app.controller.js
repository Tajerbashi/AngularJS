// app/pages/app.controller.js
angular.module('myApp', [])  // defines the "myApp" module
  .controller('AppController', ['$http','$scope', function($http,$scope) {
    const vm = this;
    vm.users = [];
    vm.newUser = {};
    
    // vm.loadUsers = function() {
    //   $http.get('/api/users').then(res => vm.users = res.data);
    // };
    $scope.UserModel = {
        username:'Tajer',
        email:'tajer@mail.com'
    }
    vm.addUser = function() {
      if (!vm.newUser.name) return;
      $http.post('/api/users', vm.newUser).then(() => {
        vm.newUser = {};
        vm.loadUsers();
      });
    };

    vm.remove = function(user) {
      $http.delete('/api/users/' + user._id).then(() => vm.loadUsers());
    };

    // initial load
    // vm.loadUsers();
  }]);
