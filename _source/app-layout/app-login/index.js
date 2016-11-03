"use strict";
// ---------------------------------------------------------------
import angular  from "angular";
// ---------------------------------------------------------------
import AppLoginComponent   from "./app-login.component.js";


const AppLoginModule = angular.module("AppLoginModule", [])
.component("appLogin", AppLoginComponent)
.name;

export default AppLoginModule;