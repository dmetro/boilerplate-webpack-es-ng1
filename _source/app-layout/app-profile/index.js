"use strict";
// ---------------------------------------------------------------
import angular  from "angular";
// ---------------------------------------------------------------
import ProfileConfig from "./app-profile.config.js";
// ---------------------------------------------------------------
import AppProfileComponent from "./app-profile.component.js";
// ---------------------------------------------------------------
import AppFootModule from "./app-foot/index.js";
import AppHeadModule from "./app-head/index.js";
import AppMainModule from "./app-main/index.js";
import AppNavModule  from "./app-nav/index.js";
// ---------------------------------------------------------------
import "./style.profile.css";



const AppProfileModule = angular.module("AppProfileModule", [
    AppFootModule,
    AppHeadModule,
    AppMainModule,
    AppNavModule
])
.config(ProfileConfig)
.component("appProfile", AppProfileComponent)
.name;

export default AppProfileModule;