angular.module('myApp').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  
  // Enable HTML5 mode for clean URLs (remove the '#' from URL)
  // Note: This requires server-side configuration for deep links
  // $locationProvider.html5Mode(true);
  
  $routeProvider
    .when('/home', {
      templateUrl: 'app/pages/dashboard/home/home.view.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    .when('/about', {
      templateUrl: 'app/pages/dashboard/about/about.view.html',
      controller: 'AboutController',
      controllerAs: 'vm'
    })
    .when('/contact', {
      templateUrl: 'app/pages/dashboard/contact/contact.view.html',
      controller: 'ContactController',
      controllerAs: 'vm'
    })

    .otherwise({
      redirectTo: '/home'
    });
}]);