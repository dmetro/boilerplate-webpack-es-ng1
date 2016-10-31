"use strict";


function AppProfileConfig($locationProvider, $stateProvider, $urlRouterProvider) {
    console.log("CONFIG init: app-profile");

    $stateProvider.state("profile.home", {
        url: "/home",
//        resolve: {
//            _user: function () {console.log("state-resolve: home"); }
//        },
        template: `<main-home class="main__container"></main-home>`
    });
    
    $stateProvider.state("profile.products", {
        url: "/products",
//        resolve: {
//            _product: function (_user) {console.log("resolve: products"); }
//        },
        template: `<main-products class="main__container"></main-products>`
    });
    
    $stateProvider.state("profile.contacts", {
        url: "/contacts",
//        resolve: {
//            _contactsInfo: function (_user) {console.log("resolve: contacts"); }
//        },
        template: `<main-contacts class="main__container"></main-contacts>`
    });
};

AppProfileConfig.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];

export default AppProfileConfig;