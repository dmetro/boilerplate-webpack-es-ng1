"use strict";

import MainMainTmp     from "./tmp-state.main-home.html";
import MainProductsTmp from "./tmp-state.main-products.html";
import MainContactsTmp from "./tmp-state.main-contacts.html";



function AppProfileConfig($locationProvider, $stateProvider, $urlRouterProvider) {
    console.log("CONFIG init: app-profile");
    // ---------------------------------------------------------------------------
    $stateProvider.state("profile.home", {
        url: "/home",
        template: MainMainTmp
    });
    // ---------------------------------------------------------------------------
    $stateProvider.state("profile.products", {
        url: "/products",
        template: MainProductsTmp
    });
    // ---------------------------------------------------------------------------
    $stateProvider.state("profile.contacts", {
        url: "/contacts",
        template: MainContactsTmp
    });
};

AppProfileConfig.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider"];

export default AppProfileConfig;