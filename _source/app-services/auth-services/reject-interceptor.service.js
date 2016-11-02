"use strict";
// --------------------------------------------------------------------------------------------------------
// http://stepansuvorov.com/blog/tag/interceptor/


class RejectInterceptor {
    constructor($q, $injector) {
        this.name = "Auth-Rejector-Interceptor";
    }
    
    getResponceError(rejection) {
        let $state = $injector.get("$state");
        if (rejection.status === 401) {
            $state.go("login");
        }
        return $q.reject(rejection);
    }
};

RejectInterceptor.$inject = ["$q", "$injector"];

export default RejectInterceptor;