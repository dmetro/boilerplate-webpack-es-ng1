"use strict";


class AppLoginController {
    constructor(RejectInterceptor) {
        console.log("init: app-login.component");
        console.log(RejectInterceptor);
    }
    
    $onInit() {}
}

AppLoginController.$inject = ["RejectInterceptor"];

export default AppLoginController;