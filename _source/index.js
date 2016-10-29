"use strict";

import angular  from "angular";
import uiRouter from "angular-ui-router";
// ---------------------------------------------------------------
import Config           from "./app-root.config.js";
import Run              from "./app-root.run.js";
import AppRootComponent from "./app-root.component.js";
//import Components       from "./components/index.js";
//import Layout           from "./layout/index.js";


// ---------------------------------------------------------------
import "./app-root.style.css";

angular.module("myApp", [
    uiRouter
])
.run(Run)
.config(Config)
.component("appRoot", AppRootComponent)
.name;