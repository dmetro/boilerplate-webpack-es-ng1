"use strict";

function AppRootRun($rootScope, $state) {
    $rootScope.profileId = "mr-heisenberg";
    console.log("RUN init: profileId -", $rootScope.profileId);
    
    // ------------------------------------------------------------------------------------------------------
    // https://github.com/angular-ui/ui-router/wiki#state-change-events
    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams, options) {
        console.log("$stateChangeStart ==================================================================");
        console.log(event);
        console.log(fromState, toState);
        console.log(fromParams, toParams);
        console.log(options);
        console.log("====================================================================================");
    });
}

AppRootRun.$inject = ["$rootScope", "$state"];

export default AppRootRun;