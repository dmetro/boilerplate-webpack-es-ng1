"use strict";



class AppNavController {
    constructor($rootScope) {
        console.log("init: app-nav.component");
        this.profileId = $rootScope.profileId.toLowerCase();
    }
    
    $onInit() {
        
    }
}

AppNavController.$inject = ["$rootScope"];

export default AppNavController;