"use strict";



function AppRootRun($rootScope, $state, $location, AuthByEventService) {
    // ------------------------------------------------------------------------------------------------------
    $rootScope.profileId = "user";
    console.log("RUN init: profileId -", $rootScope.profileId);
    // ------------------------------------------------------------------------------------------------------
    // https://github.com/angular-ui/ui-router/wiki#state-change-events
    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams, options) {
        // --------------------------------------------------------------------------------------------------
        console.log("\n\n$stateChangeStart ==================================================================");
        console.log("EVENT:", event);
        console.log("---------------------------------------------------");
        console.log("FROM STATE:\t", fromState);
        console.log("TO STATE:\t", toState);
        console.log("FROM PARAMS:", fromParams);
        console.log("TO PARAMS:\t", toParams);
        console.log("---------------------------------------------------");
        console.log("OPTIONS:", options);
        // --------------------------------------------------------------------------------------------------
        if(toState.name === "login") {
            return;
        }
        if (!AuthByEventService.checkAuth(true)) {
            event.preventDefault();
            $state.go("login");
            return;
        }
        // --------------------------------------------------------------------------------------------------
        console.log("====================================================================================\n\n\n");
    });
}

AppRootRun.$inject = ["$rootScope", "$state", "$location", "AuthByEventService"];

export default AppRootRun;