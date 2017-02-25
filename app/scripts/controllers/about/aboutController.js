'use strict';
function AboutController($log) {
    var vm = this;
    vm.speed = 500;
    $log.log('About Controller');

}

angular.module('gtoApp').controller('aboutCtrl', AboutController);
