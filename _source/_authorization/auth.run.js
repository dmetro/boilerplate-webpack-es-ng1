"use strict";

function LayoutRun($rootScope, $state, authService) {
    $rootScope.profileId = "mr-heisenberg";
    console.log("RUN init: layout | profileId -", $rootScope.profileId);
    
    // ------------------------------------------------------------------------------------------------------
    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams, options) {
        console.log("$stateChangeStart ==================================================================");
        console.log(event);
        console.log(fromState, toState);
        console.log(fromParams, toParams);
        console.log(options);
        console.log("====================================================================================");

    });
}

LayoutRun.$inject = ["$rootScope", "$state", "authService"];

export default LayoutRun;