"use strict";

import angular  from "angular";
import uiRouter from "angular-ui-router";
// ---------------------------------------------------------------
import Config           from "./app-root.config.js";
import Run              from "./app-root.run.js";
import AppRootComponent from "./app-root.component.js";

import AppLayoutModule     from "./layout/index.js";
import AppComponentsModule from "./components/index.js";
// ---------------------------------------------------------------
import "./style.reset.css";
import "./style.app.css";
import "./style.top.css";
import "./style.general.css";





angular.module("myApp", [
    uiRouter,
    AppLayoutModule,
    AppComponentsModule
])
.run(Run)
.config(Config)
.component("appRoot", AppRootComponent)
.name;