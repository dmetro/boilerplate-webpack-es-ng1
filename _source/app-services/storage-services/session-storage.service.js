"use strict";


class SessionStorageService {
    constructor() {
        this.name = "Session-Storage-Service";
    }
    checkStorageKey(key) {
        let storageLen = sessionStorage.length;
        for (let i = 0; i < storageLen; i++) {
            let stKey = sessionStorage.key(i);
            if (key === stKey) {
                return true;
            }
        }
        return false;
    }
    storageToArray() {
        let storageLen = sessionStorage.length;
        let arr = [];
        for (let i = 0; i < storageLen; i++) {
            let key = sessionStorage.key(i);
            //let obj = {[key]: JSON.parse(sessionStorage[key])}; // debuging
            arr.push(JSON.parse(sessionStorage[key]));
        }
        return arr;
    };
    addItem(arg) {
        let id = arg.id;
        let item = JSON.stringify(arg);
        sessionStorage.setItem(id, item);
    };
    remItem(id) {
        sessionStorage.removeItem(id);
    };
};

//SessionStorageService.$inject = [""];

export default SessionStorageService;