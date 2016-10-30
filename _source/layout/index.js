"use strict";

import angular  from "angular";
// ---------------------------------------------------------------
import AppLogin   from "./app-login/index.js";
import AppProfile from "./app-profile/index.js";

const AppLayoutModule = angular.module("AppLayoutModule", [
    AppLogin,
    AppProfile
])
.name;

export default AppLayoutModule;