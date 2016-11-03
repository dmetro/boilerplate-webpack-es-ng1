"use strict";

function AppRootConfig($locationProvider, $stateProvider, $urlRouterProvider) {
    console.log("CONFIG init: app-root");
    
    $urlRouterProvider.otherwise.$inject = ["$injector", "$location"];
    
    $urlRouterProvider.otherwise(function ($injector, $location) {
        let $state     = $injector.get("$state");
        let $rootScope = $injector.get("$rootScope");
        let params = {profileId: $rootScope.profileId.toLowerCase()};
        let options = {location: true};
        // ----------------------------------------------------------
        $state.go("profile.home", params, options);
    });
    
    $stateProvider.state("login", {
        url: "/login",
        template: `<app-login class="general__container login"></app-login>`
    });
    
    $stateProvider.state("profile", {
        url: "/:profileId",
        abstract: true,
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












        // --------------------------------------------------------------------------------
        //resolve: {
        //    _isAuth: function ($q, $injector, $location, AuthByResolveService) {
        //        "ngInject";
        //        console.log("STATE-RESOLVE: profile");
        //        let $rootScope = $injector.get("$rootScope");
        //        let $state = $injector.get("$state");
        //        if (!AuthByResolveService.checkAuth(true)) {
        //            //console.log("NOT resolved");
        //            return $q.reject();
        //        } else {
        //            //console.log("resolved");
        //        }
        //    }
        //},
        // --------------------------------------------------------------------------------



    //$urlRouterProvider.otherwise(function ($injector, $location) {
    //    let $state     = $injector.get("$state");
    //    let $rootScope = $injector.get("$rootScope");
    //    try {
    //        if (!$rootScope.profileId) {
    //            $state.go("login");
    //        } else {
    //            $state.go("profile.home", {profileId: $rootScope.profileId.toLowerCase()}, {location: true});
    //        }
    //    } catch (e) {
    //        return "/login"
    //    }
    //});