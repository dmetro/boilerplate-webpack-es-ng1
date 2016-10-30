"use strict";

import angular  from "angular";
// ---------------------------------------------------------------
import AppLoginController   from "./app-login.component.js";


const AppLoginModule = angular.module("AppLoginModule", [])
.component("appLogin", AppLoginController)
.name;

export default AppLoginModule;