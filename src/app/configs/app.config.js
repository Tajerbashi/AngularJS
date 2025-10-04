angular.module('myApp').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

  // Enable HTML5 mode for clean URLs (remove the '#' from URL)
  // Note: This requires server-side configuration for deep links
  // $locationProvider.html5Mode(true);

  $routeProvider
    .when('/home', {
      templateUrl: 'app/pages/dashboard/home/home.view.html',
      controller: 'HomeController',
      controllerAs: 'vm',
      css: 'app/pages/dashboard/home/home.style.css'
    })
    .when('/about', {
      templateUrl: 'app/pages/dashboard/about/about.view.html',
      controller: 'AboutController',
      controllerAs: 'vm',
      css: 'app/pages/dashboard/about/about.style.css'
    })
    .when('/contact', {
      templateUrl: 'app/pages/dashboard/contact/contact.view.html',
      controller: 'ContactController',
      controllerAs: 'vm',
      css: 'app/pages/dashboard/contact/contact.style.css'
    })
    .when('/forms', {
      templateUrl: 'app/pages/common/forms/forms.view.html',
      controller: 'FormsController',
      controllerAs: 'vm',
      css: 'app/pages/common/forms/forms.style.css'
    })
    .when('/form-validations', {
      templateUrl: 'app/pages/common/formValidations/formValidations.view.html',
      controller: 'FormValidationsController',
      controllerAs: 'vm',
      css: 'app/pages/common/formValidations/formValidations.style.css'
    })

    .otherwise({
      redirectTo: '/home'
    });
}]);