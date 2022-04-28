'use strict';

(function () {
    function init() {
        const router = new Router([
            new Route('home', 'home.html', true),
            new Route('about2', 'about.html'),
            new Route('contact', 'contact.html'),
        ]);
    }
    init();
}());