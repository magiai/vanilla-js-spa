'use strict';

function Router(routes) {
    try {
        if (!routes) {
            throw 'error: routes param is mandatory';
        }
        this.constructor(routes);
        this.init();
    } catch (e) {
        console.error(e);
    }
}

Router.prototype = {
    routes: undefined,
    rootElem: undefined,
    constructor: function (routes) {
        this.routes = routes;
        this.rootElem = document.getElementById('app');
    },
    init: function () {
        const filesRoutes = this.routes;
        (function(scope, filesRoutes) {
            window.addEventListener('hashchange', function (e) {
                scope.hasChanged(scope, filesRoutes);
            });
        })(this, filesRoutes);
        this.hasChanged(this, filesRoutes);
    },
    hasChanged: function(scope, filesRoutes){
        if (window.location.hash.length > 0) {
            for (let index = 0, length = filesRoutes.length; index < length; index++) {
                var route = filesRoutes[index];

                if(route.isActiveRoute(window.location.hash.substring(1))) {
                    scope.goToRoute(route.htmlName);
                }
            }
        } else {
            for (let index = 0, length = filesRoutes.length; index < length; index++) {
                var route = filesRoutes[index];
                if(route.default) {
                    scope.goToRoute(route.htmlName);
                }
            }
        }
    },
    goToRoute: function (htmlName) {
        (function(scope) {
            var url = 'views/' + htmlName,
                xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    scope.rootElem.innerHTML = this.responseText;
                }
            };
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this);
    }
};
