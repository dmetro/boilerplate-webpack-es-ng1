"use strict";

/*@ngInject*/

export default ($locationProvider, $stateProvider, $urlRouterProvider) => {
    console.log("root CONFIG");
    
    $urlRouterProvider.otherwise("/");
    
    $stateProvider.state("login", {
        url: "/login",
        template: `
            <app-login class="general__container login"></app-login>
        `
    });
    
    $stateProvider.state("profile", {
        url: "/:profileId",
        template: `
            <app-profile profid="$ctrl.profileId" class="general__container profile"></app-profile>
        `,
        controller: function ($stateParams) {
            this.profileId = $stateParams.profileId;
        },
        controllerAs: "$ctrl"
    });
};