"use strict";

function AppRootConfig($locationProvider, $stateProvider, $urlRouterProvider) {
    console.log("CONFIG init: app-root");
    $urlRouterProvider.otherwise.$inject = ["$injector", "$location"];
    $urlRouterProvider.otherwise(function ($injector, $location) {
        let $state     = $injector.get("$state");
        let $rootScope = $injector.get("$rootScope");
        try {
            if (!$rootScope.profileId) {
                $state.go("login");
            } else {
                $state.go("profile.home", {profileId: $rootScope.profileId}, {location: true});
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
            _info: function () {console.log("state-resolve: info from service");}
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