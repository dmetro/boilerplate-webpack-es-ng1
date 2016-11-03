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
        console.log("PARAMS from:", fromParams);
        console.log("PARAMS to:\t", toParams);
        console.log("---------------------------------------------------");
        console.log("OPTIONS:", options);
        // --------------------------------------------------------------------------------------------------
        if(toState.name === "login") {
            console.log(" --------- You Should Authorize --------- ");
            return;
        }
        if (!AuthByEventService.checkAuth(true)) {
            event.preventDefault();
            $state.go("login");
            console.log(" --------- Non Authorized --------- ");
            return;
        }
        // --------------------------------------------------------------------------------------------------
        console.log("====================================================================================\n\n\n");
    });
}

AppRootRun.$inject = ["$rootScope", "$state", "$location", "AuthByEventService"];

export default AppRootRun;