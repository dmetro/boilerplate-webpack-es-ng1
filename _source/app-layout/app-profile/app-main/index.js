"use strict";

import angular  from "angular";
import uiRouter from "angular-ui-router";
// ---------------------------------------------------------------
import MainContactsComponent from "./main-contacts/main-contacts.component.js";
import MainHomeComponent    from "./main-home/main-home.component.js";
import MainProductsComponent from "./main-products/main-products.component.js";
// ---------------------------------------------------------------
import "./style.main.scss";



const AppMainModule = angular.module("AppMainModule", [])
.component("mainContacts", MainContactsComponent)
.component("mainHome", MainHomeComponent)
.component("mainProducts", MainProductsComponent)
.name;

export default AppMainModule;