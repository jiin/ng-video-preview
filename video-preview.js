'use strict';

/* Directives */

angular.module('ngVideoPreview', ['ngSanitize']).
  directive('ngVideoPreview', ['$sce', function($sce) {
    return {
    	restrict: 'E',
    	scope: {
            source: '@',
            url: '@',
            playerWidth: '@',
            playerHeight: '@'
        },
    	transclude: true,
        replace: true,
    	template: '<div class="ngVideoPreview element">' +
                  ' <iframe width="{{width}}" height="{{height}}" ng-src="{{iframeSrc}}" frameborder="0" allowfullscreen></iframe>' +
                  '</div>',
        link: function($scope, $element, $attrs) {

            var v = '';
            
            $scope.width  = $scope.playerWidth  || 570;
            $scope.height = $scope.playerHeight || 325;

            var config = {
                'youtube': {
                    search: [
                        /youtu\.be\/(.+)/,
                        /youtube\.com\/watch\?v=(.+)/
                    ],
                    embed: '//www.youtube.com/embed/@',
                    index: 1
                },
                'vimeo': {
                    search: [
                        /vimeo\.com\/(.+)/,
                        /vimeo.com\/channels\/staffpicks\/(.+)/
                    ],
                    embed: '//player.vimeo.com/video/@',
                    index: 1
                },
                'bitlanders': {
                    search: [
                        /bitlanders\.com\/movie\/(.+)\/(\d+)/
                    ],
                    embed: '//bitlanders.com/embed/M@',
                    index: 2
                },
                'vine': {
                    search: [
                        /vine\.co\/v\/(.+)/
                    ],
                    embed: '//vine.co/v/@/embed/simple',
                    index: 1
                }
            };

            var tokens = config[$attrs.source];

            Object(tokens.search).forEach(function(t) {
                var domain = $attrs.url.substr($attrs.url.indexOf('://')+3),
                    match  = domain.match(t);

                if (match) v = match[tokens.index];
            });

            $scope.iframeSrc = $sce.trustAsResourceUrl(tokens.embed.replace('@', v));
    	},
    };
  }]);