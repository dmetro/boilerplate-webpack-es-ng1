"use strict";

class SomeCustomService {
    constructor($injected) {
        this._$injected = $injected;
    }
    makeSomeoneDoSomething() {
        return this._$injected(args);
    }
};

SomeCustomService.$inject = ["$injected"];

export default SomeCustomService;