(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope) {
        console.log("test")
        $scope.luckyFive =function() {
            $scope.data= Math.floor(Math.random() * 7)
            if($scope.data==5){
                $scope.result="🤑🤑🤑You Win🤑🤑🤑"
            } else {$scope.result="😥😥😥You Loose😥😥😥"}
        };
    }
})();
