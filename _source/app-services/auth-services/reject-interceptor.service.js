"use strict";
// --------------------------------------------------------------------------------------------------------
// http://stepansuvorov.com/blog/tag/interceptor/
// http://stepansuvorov.com/blog/2014/04/angularjs-interceptors-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80%D1%8B/


// --------------------------------------------------------------------------------------------------------
class AuthByResolveService {
    constructor($injected) {
        this._$injected = $injected;
    }
    checkReturnTrue() {
        return true;
    }
    checkReturnFalse() {
        return true;
    }
};

AuthByResolveService.$inject = ["$injected"];

export default AuthByResolveService;