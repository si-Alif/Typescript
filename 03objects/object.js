"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Alif",
    age: 20,
    email: "alif@gmail.com",
    isActive: false,
};
//🗿🗿🗿⭐⭐⭐ Without using the inbuilt type  like void, string , object provided by TS we can define our own structural type at the place where we used to define TS provided type
var createUser = function (_a) {
    var name = _a.name, //
    age = _a.age, // ⭐⭐ This part defines the arguements to be passed
    email = _a.email, //
    _b = _a.isActive, //
    isActive = _b === void 0 ? false : _b;
    return {
        //
        name: name, //
        age: age, //           // 📜 Return objects
        email: email, // //    //
        isActive: isActive, //
        isAdmin: false, //
    };
};
createUser({
    name: "Alif",
    age: 20,
    email: "alif@gmail.com",
});
// 1️⃣st Method
var logInUser = function (_a) {
    var email = _a.email, password = _a.password;
    console.log("Logged in as", email);
    return {
        accessToken: "132",
        refreshToken: "132",
    };
};
var logInUser2 = function (_a) {
    var email = _a.email, password = _a.password;
    console.log("Logged in as", email);
    return {
        accessToken: "132",
        refreshToken: "132",
    };
};
var createUserInDBFunc = function (_a) {
    var _id = _a._id, name = _a.name, age = _a.age, email = _a.email, isActive = _a.isActive;
    return {
        _id: _id,
        name: name,
        age: age,
        email: email,
        isActive: isActive,
    };
};
// ._id = "123"; //⭐⭐⭐ This will give error as it should be
createUserInDBFunc({
    _id: "123",
    name: "Alif",
    age: 20,
    email: "alif@gmail.com",
    isActive: true,
}).email = "alif123@gmail.com"; // This will  work smoothly
