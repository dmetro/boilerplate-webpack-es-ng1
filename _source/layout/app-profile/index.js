"use strict";

import angular  from "angular";
// ---------------------------------------------------------------
import AppProfileComponent from "./app-profile.component.js";
// ---------------------------------------------------------------
import AppFootModule from "./app-foot/index.js";
import AppHeadModule from "./app-head/index.js";
import AppNavModule from "./app-nav/index.js";

import "./style.profile.css";


const AppProfileModule = angular.module("AppProfileModule", [
    AppFootModule,
    AppHeadModule,
    AppNavModule
])
.component("appProfile", AppProfileComponent)
.name;

export default AppProfileModule;






