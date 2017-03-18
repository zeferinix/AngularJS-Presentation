(function() {
    'use strict';

    angular.module('app.controllers', [])

    .controller('HomeController', function HomeController($scope) {

    })

    .controller('IntroductionController', function IntroductionController($scope) {
        $scope.presenters = ['Cerino O. Ligutom III', 'Alexandros Pappas'];
        $scope.companyName = "Miller Development Solutions Inc.";
        $scope.agenda = "Demo for AngularJS";
    })

    .controller('Module1Controller', function Module1Controller($scope) {
        $scope.qty = 3;
        $scope.cost = 3;
        $scope.pay = function() {
            alert('Thanks!');
        }
    })

    .controller('Module2Controller', function Module2Controller() {
        var vm = this;

        vm.qty = 4;
        vm.cost = 4;
        vm.pay = function() {
            alert('Thanks!');
        }
    })

    .controller('Module3Controller', function Module1Controller($scope) {
        $scope.customSpice = 'wasabi';
        $scope.spice = 'very';

        $scope.spicy = function(spice) {
            $scope.spice = spice;
        };

        $scope.spicyList = ['nchongd', 'mexican', 'indian', 'chili', 'korean', 'wasabi'];
        $scope.customDropdownSpice = $scope.spicyList[0];

        $scope.spicy2 = function() {
            $scope.spice = $scope.customDropdownSpice
        }
    });

})();