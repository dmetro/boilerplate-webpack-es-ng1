"use strict";

import angular from "angular";
// ---------------------------------------------------------------
import AppFormModule from "./app-form/index.js";

import "./style.table.css";



const AppComponentsModule = angular.module("AppComponentsModule", [
    AppFormModule
])
.name;

export default AppComponentsModule;