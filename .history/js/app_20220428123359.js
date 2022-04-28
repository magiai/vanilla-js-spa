'use strict';

(function () {
    function init() {
        const router = new Router([
            new Route('home', 'home.html', 0, true),
            new Route('schedule-meeting', 'steps/schedule-meeting.html', 1),
            new Route('choose-date', 'steps/choose-date.html', 2),
            new Route('contact-data', 'steps/contact-data.html', 3),
            new Route('verification-code', 'steps/verification-code.html', 4),
        ]);
    }
    init();
}());