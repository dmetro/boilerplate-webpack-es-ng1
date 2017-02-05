"use strict";

import AppLoginTmp   from "./tmp-state.app-login.html";
import AppProfileTmp from "./tmp-state.app-profile.html";


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
        template: AppLoginTmp
    });
    
    $stateProvider.state("profile", {
        url: "/:profileId",
        abstract: true,
        template: AppProfileTmp,
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