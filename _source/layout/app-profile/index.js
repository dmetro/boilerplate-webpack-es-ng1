"use strict";

import angular  from "angular";
// ---------------------------------------------------------------
import AppProfileComponent from "./app-profile.component.js";

import "./style.profile.css";


const AppProfileModule = angular.module("AppProfileModule", [
    
])
.component("appProfile", AppProfileComponent)
.name;

export default AppProfileModule;