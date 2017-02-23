(function() {
    'use strict';
    function TestimonialsController($log, $scope, $interval) {
        var vm = this;
        $log.debug('Testimonials Controller');
        $interval(function(){
            var pt = angular.element('.wrapper')
                .addClass('hvr-glimmer');
        }, 6000);
        angular.element('.console button').on('click', function () {
            angular.element('.wrapper').removeClass('hvr-glimmer');
        });

    }

    angular.module('gtoApp').controller('testimonialsCtrl', TestimonialsController);
})();