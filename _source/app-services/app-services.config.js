"use strict";

function AppServicesConfig($httpProvider) {
    console.log("CONFIG init: app-services");
    $httpProvider.interceptors.push("RejectInterceptor")
};

AppServicesConfig.$inject = ["$httpProvider"];

export default AppServicesConfig;