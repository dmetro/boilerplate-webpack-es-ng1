"use strict";

function AppRootRun($rootScope, $state, AuthByEventService) {
    $rootScope.profileId = "user";
    console.log("RUN init: profileId -", $rootScope.profileId);
    // ------------------------------------------------------------------------------------------------------
    // https://github.com/angular-ui/ui-router/wiki#state-change-events
    //$rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams, options) {
    //    console.log("\n$stateChangeStart ==================================================================");
    //    console.log("EVENT:", event);
    //    console.log("------------------------");
    //    console.log("STATES from:", fromState);
    //    console.log("STATES to:\t", toState);
    //    console.log("PARAMS from:", fromParams);
    //    console.log("PARAMS to:\t", toParams);
    //    console.log("------------------------");
    //    console.log("OPTIONS:", options);
    //    console.log("------------------------");
    //    //if (!AuthByEventService.checkAuth(true)) {
    //    //    console.log("Error: NON Authorized");
    //    //    event.preventDefault();
    //    //    //$state.go("login");
    //    //}
    //    console.log("====================================================================================\n\n");
    //});
}

AppRootRun.$inject = ["$rootScope", "$state", "AuthByEventService"];

export default AppRootRun;