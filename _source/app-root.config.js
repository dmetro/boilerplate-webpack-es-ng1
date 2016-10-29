"use strict";

/*@ngInject*/

export default ($locationProvider, $stateProvider, $urlRouterProvider) => {
    console.log("CONFIG");
    
    $urlRouterProvider.otherwise("/login");
    
    $stateProvider.state("login", {
        url: "/login",
        template: `
            <user-login class="main__container login"></user-login>
        `
    });
    
    $stateProvider.state("profile", {
        url: "/:profileId",
        template: `
            <user-profile profid="$ctrl.profileId" class="main__container profile"></user-profile>
        `,
        controller: function ($stateParams) {
            this.profileId = $stateParams.profileId;
        },
        controllerAs: "$ctrl"
    });
};