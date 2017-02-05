"use strict";
// ---------------------------------------------------------------
import angular  from "angular";
import uiRouter from "angular-ui-router";
// ---------------------------------------------------------------
import RootConfig       from "./app-root.config.js";
import RootRun          from "./app-root.run.js";
import AppRootComponent from "./app-root.component.js";
// ---------------------------------------------------------------
import AppLayoutModule     from "./app-layout/index.js";
import AppComponentsModule from "./app-components/index.js";
import AppServicesModule   from "./app-services/index.js";
// ---------------------------------------------------------------
import "./style.app.scss";
import "./style.reset.scss";
import "./style.root.scss";
import "./style.top.scss";
import "./style.uiview.scss";


angular.module("myApp", [
    uiRouter,
    AppServicesModule,
    AppComponentsModule,
    AppLayoutModule
])
.run(RootRun)
.config(RootConfig)
.component("appRoot", AppRootComponent)
.name;