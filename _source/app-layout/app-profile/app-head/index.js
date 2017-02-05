"use strict";

import angular  from "angular";
// ---------------------------------------------------------------
import AppHeadComponent from "./app-head.component.js";


const AppHeadModule = angular.module("AppHeadModule", [])
.component("appHead", AppHeadComponent)
.name;

export default AppHeadModule;