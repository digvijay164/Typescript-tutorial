"use strict";
var a = 10;
console.log('working');
const b = "check";
let arr = [1, 2, 3, "digvijay", { name: "Digvijay Desai" }, { age: 24 }];
// let strictArr : number[] = [1,2,3,4,"string is not allowed"]
let strictArr = [1, 2, 3, 4];
let Tupples = ["Digvijay", 24, { name: "digvijay", age: 24 }];
var userModel;
(function (userModel) {
    userModel["name"] = "Digvijay Jayant Desai";
    userModel["age"] = "24";
    userModel["admin"] = "True";
})(userModel || (userModel = {}));
var domain;
(function (domain) {
    domain["Dev"] = "Software Developer";
    domain["TechStack"] = "Full Stack Dev Python ML";
})(domain || (domain = {}));
userModel.name;
userModel.age;
userModel.admin;
domain.Dev;
domain.TechStack;
function NumberVoid() {
    return 24;
}
function StringVoid() {
    return "Digvijay";
}
function BooleanVoid() {
    return true;
}
function objPass(obj) {
    console.log("passing through interface \n", obj);
}
;
objPass({
    name: "Digvijay Desai",
    email: "demo@gmail.com",
    password: "12345678"
});
