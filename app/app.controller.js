// app/pages/app.controller.js
angular.module('myApp', [])  // defines the "myApp" module
    .controller('AppController', ['$http', '$scope', function ($http, $scope) {
        const vm = this;
        vm.users = [
            {name:'Ahmad1',email:'Ahmad1@mail.com'},
            {name:'Ahmad2',email:'Ahmad2@mail.com'},
            {name:'Ahmad3',email:'Ahmad3@mail.com'},
            {name:'Ahmad4',email:'Ahmad4@mail.com'},
            {name:'Ahmad5',email:'Ahmad5@mail.com'},
            {name:'Ahmad6',email:'Ahmad6@mail.com'},
            {name:'Ahmad7',email:'Ahmad7@mail.com'},
            {name:'Ahmad8',email:'Ahmad8@mail.com'},
        ];
        vm.newUser = {};

        // vm.loadUsers = function() {
        //   $http.get('/api/users').then(res => vm.users = res.data);
        // };
        $scope.UserModel = {
            username: 'Tajer',
            email: 'tajer@mail.com'
        }

        vm.addUser = function () {
            if (!vm.newUser.name) return;
            vm.users.push(vm.newUser);
            //   $http.post('/api/users', vm.newUser).then(() => {
            //     vm.newUser = {};
            //     vm.loadUsers();
            //   });
        };
        vm.edit = function (user) {
            console.log(user);
            vm.newUser = user;
        };

        vm.remove = function (user) {
            // $http.delete('/api/users/' + user._id).then(() => vm.loadUsers());
            
        };

        // initial load
        // vm.loadUsers();
    }]);
