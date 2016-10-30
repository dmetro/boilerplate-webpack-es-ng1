"use strict";

import angular  from "angular";
import uiRouter from "angular-ui-router";
// ---------------------------------------------------------------
import Config           from "./app-root.config.js";
import Run              from "./app-root.run.js";
import AppRootComponent from "./app-root.component.js";

import AppLayout        from "./layout/index.js";
import AppComponents    from "./components/index.js";
// ---------------------------------------------------------------
import "./style.app.css";
import "./style.top.css";
import "./style.general.css";



angular.module("myApp", [
    uiRouter,
    AppLayout
])
.run(Run)
.config(Config)
.component("appRoot", AppRootComponent)
.name;