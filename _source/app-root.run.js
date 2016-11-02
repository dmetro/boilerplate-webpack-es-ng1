"use strict";

function AppRootRun($rootScope, $state, AuthByEventService) {
    $rootScope.profileId = "UserName";
    console.log("RUN init: profileId -", $rootScope.profileId);
    //console.log(AuthByEventService);
    // ------------------------------------------------------------------------------------------------------
    // https://github.com/angular-ui/ui-router/wiki#state-change-events
    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams, options) {
        console.log("\n$stateChangeStart ==================================================================");
        console.log("profileId:", $rootScope.profileId);
        console.log("EVENT:", event);
        console.log("STATES:", fromState, toState);
        console.log("PARAMS:", fromParams, toParams);
        console.log("OPTIONS:", options);
        console.log("====================================================================================\n\n");
        // --------------------------------------------------------------------------------------------------
        //if (!AuthByEventService.checkAuth(toState)) {
        //    event.preventDefault();
        //    event.stopPropagation();
        //    $state.go("login");
        //}
        // --------------------------------------------------------------------------------------------------
    });
}

AppRootRun.$inject = ["$rootScope", "$state", "AuthByEventService"];

export default AppRootRun;