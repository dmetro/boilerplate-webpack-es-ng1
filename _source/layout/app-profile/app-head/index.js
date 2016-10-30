"use strict";

import angular  from "angular";
// ---------------------------------------------------------------
import AppHeadComponent from "./app-head.component.js";
// ---------------------------------------------------------------
import "./style.header.css";


const AppHeadModule = angular.module("AppHeadModule", [
    
])
.component("appHead", AppHeadComponent)
.name;

export default AppHeadModule;