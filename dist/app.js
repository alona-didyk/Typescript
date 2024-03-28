"use strict";
var _a;
const e1 = {
    name: "max",
    priviledge: ["create server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add(1, 5);
const fetchUserData = {
    id: "u1",
    name: "Max",
    job: { title: "CEO", description: "My own company" },
};
console.log((_a = fetchUserData === null || fetchUserData === void 0 ? void 0 : fetchUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "Default";
//# sourceMappingURL=app.js.map