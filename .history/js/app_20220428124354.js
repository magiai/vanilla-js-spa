'use strict';

(function () {
    function init() {
        const router = new Router([
            new Route('home', 'home.html', true),
            new Route('schedule-meeting', 'steps/schedule-meeting.html'),
            new Route('choose-date', 'steps/choose-date.html'),
            new Route('contact-data', 'steps/contact-data.html'),
            new Route('verification-code', 'steps/verification-code.html'),
        ]);
    }
    init();
}());