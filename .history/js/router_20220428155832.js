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
        for (let fileRoute of filesRoutes) {
            if (window.location.hash.length > 0 && fileRoute.isActiveRoute(window.location.hash.substring(1))) {
                scope.goToRoute(fileRoute.htmlName);
            } else if (fileRoute.default) {
                scope.goToRoute(fileRoute.htmlName);
            }
        }    
    },
    goToRoute: function (htmlName) {
        (function(scope) {
            let url = 'views/' + htmlName,
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
