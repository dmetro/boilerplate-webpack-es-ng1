"use strict";

class CustomService {
    constructor() {
        this.name = "Custom-Service";
    }
    makeSomeoneDoSomething() {
        return true;
    }
};

//CustomService.$inject = [""];

export default CustomService;