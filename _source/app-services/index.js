"use strict";
// ---------------------------------------------------------------
import angular  from "angular";
// ---------------------------------------------------------------
import CustomService         from "./service-example.service.js";
import AuthByEventService    from "./auth-services/auth-event.service.js";
import AuthByResolveService  from "./auth-services/auth-event.service.js";
import CookieStorageService  from "./storage-services/cookie-storage.service.js";
import LocalStorageService   from "./storage-services/local-storage.service.js";
import SessionStorageService from "./storage-services/session-storage.service.js";



// ---------------------------------------------------------------
const AppServicesModule = angular.module("AppServicesModule", [])
.service("CustomService", CustomService)
.service("AuthByEventService", AuthByEventService)
.service("AuthByResolveService", AuthByResolveService)
.service("CookieStorageService", CookieStorageService)
.service("LocalStorageService", LocalStorageService)
.service("SessionStorageService", SessionStorageService)
.name;

export default AppServicesModule;