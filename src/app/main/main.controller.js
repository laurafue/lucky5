(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope) {
        console.log("test")
     $scope.first = null;
     $scope.seccond = null;
     $scope.third = null;
     function test() {
          var first=Math.floor(Math.random() * 7)
        };
    }
})();
