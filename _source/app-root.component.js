'use strict';

import controller from "./app-root.controller.js";
import template   from "./app-root.tmp.html";

const AppRootComponent = {
    controller,
    template,
};

export default AppRootComponent;



//    template: `
//        <app-head class="app__container header"></app-head>
//        <app-nav  class="app__container nav"></app-nav>
//        <ui-view  class="app__container main"></ui-view>
//        <app-foot class="app__container footer"></app-foot>
//    `