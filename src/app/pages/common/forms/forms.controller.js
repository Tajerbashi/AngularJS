angular.module('myApp').controller('FormsController',
  ['$scope','$http', function ($scope, $http) {
    var vm = this;

    vm.pageTitle = 'Forms Page';
    $scope.pageTitle = 'Forms Page';
    $scope.welcomeMessage = 'Welcome to our AngularJS application!';



    $scope.user = {
      name: 'John',
      email: 'john@example.com'
    };

    $scope.save = function () {
      if ($scope.myForm.$valid) {
        // Save logic here
        console.log('Saving user:', $scope.user);

        // Reset form state after save
        $scope.myForm.$setPristine();
      }
    };

    $scope.reset = function () {
      $scope.user = {
        name: 'John',
        email: 'john@example.com'
      };
      $scope.myForm.$setPristine();
    };

    // Warn before leaving page with unsaved changes
    window.onbeforeunload = function () {
      if ($scope.myForm && $scope.myForm.$dirty) {
        return 'You have unsaved changes!';
      }
    };



    // // $setDirty()
    // // Manually mark form as dirty
    // $scope.myForm.$setDirty();
    // // Mark specific field as dirty
    // $scope.myForm.username.$setDirty();

    // // $setPristine()
    // // Reset form to pristine state
    // $scope.myForm.$setPristine();
    // // Reset specific field to pristine
    // $scope.myForm.username.$setPristine();


  }]);