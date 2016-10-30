"use strict";

/*@ngInject*/

export default ($locationProvider, $stateProvider, $urlRouterProvider) => {
    console.log("profile CONFIG");
    
    $urlRouterProvider.otherwise("/");
    
    $stateProvider.state("home", {
        url: "/:profileId",
        template: ``,
        controller: function ($stateParams) {
            this.profileId = $stateParams.profileId;
        },
        controllerAs: "$ctrl"
    });
};