"use strict";

function AppRootConfig($locationProvider, $stateProvider, $urlRouterProvider) {
    console.log("CONFIG init: app-root");
    $urlRouterProvider.otherwise.$inject = ["$injector", "$location"];
    $urlRouterProvider.otherwise(function ($injector, $location) {
        let $state     = $injector.get("$state");
        // --------------------------------------------------
        // use "authServise" istead "$rootScope":
        let $rootScope = $injector.get("$rootScope");
        // --------------------------------------------------
        try {
            if (!$rootScope.profileId) {
                $state.go("login");
            } else {
                $state.go("profile.home", {profileId: $rootScope.profileId.toLowerCase()}, {location: true});
            }
        } catch (e) {
            return "/login"
        }
    });
    $stateProvider.state("login", {
        url: "/login",
        template: `<app-login class="general__container login"></app-login>`
    });
    $stateProvider.state("profile", {
        url: "/:profileId",
        abstract: true,
        resolve: {
            // ----------------------------------------------------------------------------------------------
            //_isAuth: function (AuthByResolveService) {
            //    "ngInject";
            //    //if (!appAuthService.checkAuth()) {
            //    //    return $q.reject("Error: NON Authorized");
            //    //}
            //},
            // ----------------------------------------------------------------------------------------------
            _info: function () {
                console.log("state-resolve: profile-state (auth here)");
            }
        },
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