angular.module('myApp').run(['$rootScope', 'cssInjector',
    function ($rootScope, cssInjector) {
        $rootScope.$on('$routeChangeStart', function () {
            cssInjector.removeAll();
        });

        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            if (current && current.css) {
                cssInjector.inject(current.css);
            }
        });
    }]);