"use strict";

import angular  from "angular";
// ---------------------------------------------------------------
import AppLoginModule   from "./app-login/index.js";
import AppProfileModule from "./app-profile/index.js";



const AppLayoutModule = angular.module("AppLayoutModule", [
    AppLoginModule,
    AppProfileModule
])
.name;

export default AppLayoutModule;