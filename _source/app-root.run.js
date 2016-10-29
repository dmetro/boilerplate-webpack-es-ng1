"use strict";

/*@ngInject*/

export default ($rootScope, $state) => {
    console.log("RUN");
    
    $rootScope.profileId = "mr-heisenberg";
    //$state.go("profile.home", {profileId: $rootScope.profileId}, {location: true});
}