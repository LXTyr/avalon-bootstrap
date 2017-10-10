require.config({
    paths: {
        jquery: 'https://cdn.bootcss.com/jquery/1.9.1/jquery.min',
        bootstrap: 'https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min',
        avalon: 'vendor/avalon',
        modernizr: 'https://cdn.bootcss.com/modernizr/2.8.3/modernizr.min',
        domReady: 'https://cdn.bootcss.com/require-domReady/2.0.1/domReady.min',
        flexSlider: 'https://cdn.staticfile.org/flexslider/2.6.3/jquery.flexslider.min'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'flexSlider': {
            deps: ['jquery'],
            exports: 'jQuery.fn.flexslider'
        }
    }
});
require(['avalon', 'jquery', 'flexSlider', "domReady!", "bootstrap",  "modernizr"], function(avalon, $) {
    var vm = avalon.define({
        $id: "list",
        infoList: [
            {
                title: '第一个',
                desc: '第一个很厉害的人'
            },
            {
                title: '第二个',
                desc: '第二个很厉害的人'
            },
            {
                title: '第三个',
                desc: '第三个很厉害的人'
            }
        ]
    });
    avalon.scan(document.body);

    $('.flexslider.main').flexslider({
        animation: "slide",

        easing: "swing",
        direction: "horizontal",

        slideshowSpeed: 5000,
        directionNav: false

    });

    $('.flexslider.about').flexslider({
        animation: "fade",
        controlNav: false
    });

    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
});