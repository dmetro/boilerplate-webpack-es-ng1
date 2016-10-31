"use strict";

import angular  from "angular";
// ---------------------------------------------------------------
import LoginFormComponent from "./login-form/login-form.component.js";
// ---------------------------------------------------------------
import "./style.form.css";


const AppFormModule = angular.module("AppFormModule", [])
.component("loginForm", LoginFormComponent)
.name;

export default AppFormModule;