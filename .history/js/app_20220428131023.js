'use strict';

(function () {
    function init() {
        const router = new Router([
            new Route('home', 'views/home.html', true),
            new Route('about', 'views/about.html'),
            new Route('contact', 'views/contact.html'),
        ]);
    }
    init();
}());