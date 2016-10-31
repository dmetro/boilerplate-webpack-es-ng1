"use strict";

function AppRootConfig($locationProvider, $stateProvider, $urlRouterProvider) {
    console.log("CONFIG init: layout");
    
    // -----------------------------------------------------------------------------------------------------
    $stateProvider.state("login", {
        url: "/login",
        template: `<app-login class="login"></app-login>`
    });
    
    // -----------------------------------------------------------------------------------------------------
    $stateProvider.state("profile", {
        url: "/:profileId",
        abstract: true,
        // =================================================================================================
        // one of the way to auth your User inside "resolve";
        // inject "$rootScope" to "authService" and if checked save there "profileId";
        // or use "$stateChangeStart" inside servise with "$rootScope" too;
        resolve: {
            isAuth: function (appAuthService) {
                "ngInject";
                if (!appAuthService.checkAuth()) {
                    return $q.reject("Error: NON Authorized");
                }
            }
        },
        // =================================================================================================
        template: `<app-profile profid="$ctrl.profileId" class="general__container profile"></app-profile>`,
        controller: function ($stateParams) {
            "ngInject";
            this.profileId = $stateParams.profileId;
        },
        controllerAs: "$ctrl"
    });
};

AppRootConfig.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];

export default AppRootConfig;






//    $urlRouterProvider.otherwise.$inject = ["$injector", "$location"];
//    $urlRouterProvider.otherwise(function ($injector, $location) {
//        let $state     = $injector.get("$state");
//        let $rootScope = $injector.get("$rootScope");
//        try {
//            if (!$rootScope.profileId) {
//                $state.go("login");
//            } else {
//                $state.go("profile.home", {profileId: $rootScope.profileId}, {location: true});
//            }
//        } catch (e) {
//            return "/login"
//        }
//    });