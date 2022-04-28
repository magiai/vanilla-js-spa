'use strict';

(function () {
    function init() {
        console.log('app');

        const router = new Router([
            new Route('home', 'home.html', true),
            new Route('about', 'about.html'),
            new Route('contact', 'contact.html'),
        ]);
    }
    init();
}());