"use strict";



class AppRootController {
    constructor($rootScope) {
        console.log("init: app-root.component");
        this.profileId = $rootScope.profileId;
    }
    
    $onInit() {}
}

AppRootController.$inject = ["$rootScope"];

export default AppRootController;