"use strict";

function AppRootRun($rootScope, $state) {
    $rootScope.profileId = "mr-heisenberg";
    console.log("RUN init: profileId -", $rootScope.profileId);
}

AppRootRun.$inject = ["$rootScope", "$state"];

export default AppRootRun;