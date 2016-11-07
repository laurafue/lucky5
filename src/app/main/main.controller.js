(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope) {
     $scope.lucky5 = function() {
         var rnd = function(){return Math.floor(Math.random() * 7 + 1)};
         $scope.result = [rnd(), rnd(), rnd()];
        };
    }
})();
