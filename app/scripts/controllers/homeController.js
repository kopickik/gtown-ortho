'use strict';

function HomeController($log, $rootScope, $scope, $state) {
    var vm = this;
    $log.debug('Home Controller', vm);

    var tests = [
      "Your bones don't break, mine do. That's clear.",
      "But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke.",
      "However unreal it may seem, we are connected, you and I.",
      "We're on the same curve, just on opposite ends.",
      "My money's in that office, right?",
      "Welcome to ",
      "Willkommen!",
      "Have you been eating cheese, Charlie?",
      "1337 || 7331",
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

    $scope.addTestsClass = function() {
        //$log.log('addTestsClass fired.');
        $scope.test = tests[_.random(6)];
        angular.element(".home-content h1")
            .removeClass(function(index, classPattern) {
            return (classPattern.match(/(^|\s)hvr-\S+/g) || []).join(' ');
        }).addClass(hoverClasses[_.random(6)]);
    };
}

angular.module('gtoApp').controller('homeCtrl', HomeController);
