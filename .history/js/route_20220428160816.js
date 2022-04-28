'use stict';

// function Route(name, htmlName, defaultRoute) {
//     try {
//         if(!name || !htmlName) {
//             throw 'error: name and htmlName params are mandatories';
//         }
//         this.constructor(name, htmlName, defaultRoute);
//     } catch (e) {
//         console.error(e);
//     }
// }

// Route.prototype = {
//     name: undefined,
//     htmlName: undefined,
//     default: undefined,
//     constructor: function (name, htmlName, defaultRoute) {
//         this.name = name;
//         this.htmlName = htmlName;
//         this.default = defaultRoute;
//     },
//     isActiveRoute: function (hashedPath) {
//         return hashedPath.replace('#', '') === this.name;
//     }
// };

class Route {
    constructor (pageName, htmlName, defaultRoute) {
        this.pageName = pageName;
        this.htmlName = htmlName;
        this.defaultRoute = defaultRoute;
    }

    isActiveRoute(hashedPath) {
        console.log(this.pageName);
        return hashedPath.replace('#', '') === this.pageName;
    }

    static {
        try {
            console.log(this.pageName);
            if(!this.pageName || !this.htmlName) {
                throw 'error: name and htmlName params are mandatories';
            }
            this.constructor(this.pageName, this.htmlName, this.defaultRoute);
        } catch (e) {
            console.error(e);
        }
    }
}