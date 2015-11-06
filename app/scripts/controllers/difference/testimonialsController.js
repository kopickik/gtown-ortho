(function() {
    'use strict';
    function TestimonialsController($log) {
        var vm = this;
        $log.debug('Testimonials Controller');
    }

    angular.module('gtoApp').controller('testimonialsCtrl', TestimonialsController);
})();