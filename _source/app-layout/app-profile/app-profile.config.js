"use strict";



function AppProfileConfig($locationProvider, $stateProvider, $urlRouterProvider) {
    console.log("CONFIG init: app-profile");
    // ---------------------------------------------------------------------------
    $stateProvider.state("profile.home", {
        url: "/home",
        template: `<main-home class="main__container"></main-home>`
    });
    // ---------------------------------------------------------------------------
    $stateProvider.state("profile.products", {
        url: "/products",
        template: `<main-products class="main__container"></main-products>`
    });
    // ---------------------------------------------------------------------------
    $stateProvider.state("profile.contacts", {
        url: "/contacts",
        template: `<main-contacts class="main__container"></main-contacts>`
    });
};

AppProfileConfig.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];

export default AppProfileConfig;