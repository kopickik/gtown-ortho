'use strict';
function HomeController($log, $rootScope, $scope, $state) {
    var vm = this;
    $log.debug('Home Controller');

    var testes = [
        "Welcome to ",
        "Willkommen!",
        "Have you been eating cheese, Charlie?",
        "Bacon & Scrambled eggs!",
        ":) :) :(",
        "One more, 'cause Mickey loves ya!",
        "Scrambled helms & croquettes"
    ];
    // fade border-fade hollow trim ripple-out ripple-in outline-out outline-in round-corners
    // underline-from-left underline-from-center underline-from-right float-shadow
    var hoverClasses = [
        "hvr-fade",
        "hvr-border-fade",
        "hvr-outline-in",
        "hvr-underline-from-left",
        "hvr-underline-from-right",
        "hvr-underline-from-center",
        "hvr-float-shadow"
    ];

    $scope.addTestesClass = function() {
        //$log.log('addTestesClass fired.');
        $scope.test = testes[_.random(5)];
        angular.element(".home-content h1")
            .removeClass(function(index, classPattern) {
            return (classPattern.match(/(^|\s)hvr-\S+/g) || []).join(' ');
        }).addClass(hoverClasses[_.random(6)]);
    };

    if ($state.current.name === 'home') {
        angular.element('')
    }



}

angular.module('gtoApp').controller('homeCtrl', HomeController);
