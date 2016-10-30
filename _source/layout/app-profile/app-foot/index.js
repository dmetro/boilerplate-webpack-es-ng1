"use strict";

import angular  from "angular";
// ---------------------------------------------------------------
import AppFootComponent from "./app-foot.component.js";
// ---------------------------------------------------------------
import "./style.footer.css";


const AppFootModule = angular.module("AppFootModule", [
    
])
.component("appFoot", AppFootComponent)
.name;

export default AppFootModule;