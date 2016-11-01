"use strict";



class AppNavController {
    constructor($rootScope) {
        this.profileId = $rootScope.profileId;
        console.log("init: app-nav.component");
        console.log(this);
    }
    
    $onInit() {
        
    }
}

AppNavController.$inject = ["$rootScope"];

export default AppNavController;