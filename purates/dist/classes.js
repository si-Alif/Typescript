"use strict";
class User {
    constructor(_name, _email) {
        this.address = "Bangladesh";
        this.cardNumber = 0; // 🗿🗿🗿 Private fields can only be accessible by the own class , not anyone outside not even a extended class out of it
        this.name = _name;
        this.email = _email;
        this.cardNumber = Math.floor(Math.random() * 1000000000);
    }
}
const user1 = new User("alif", "alif@gmail.com");
user1.address = "Japan";
// user1.cardNumber = 232435465 // ⭐⭐⭐ Property 'cardNumber' is private and only accessible within class 'User'.
//🗿🗿🗿 Better & easier way to write this whole jargon
var Seat;
(function (Seat) {
    Seat["middle"] = "middle";
    Seat["crew"] = "crew";
    Seat["first"] = "first";
})(Seat || (Seat = {}));
class VIP_User {
    constructor(name, email, password, address = "Bangladesh", seat = typeof Seat, _id, access_token, refresh_token) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
        this.seat = seat;
        this._id = _id;
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this._spells = 2; // ⭐⭐⭐ As we used protected keyword now we can use this field on the classes who inherites this class 🗿🗿 but any instance out of them can't access it
        this._id = Math.random().toString(36).substr(2, 9);
        this.access_token = Math.random().toString(36).substr(2, 9);
        this.refresh_token = Math.random().toString(36).substr(2, 9);
    }
    get getAppleEmailVerificationCode() {
        return `verification code is ${this.access_token}`;
    }
    get spells_Left() {
        return this._spells;
    }
    set add_Spells(count) {
        this._spells += count;
    }
}
const vipUser1 = new VIP_User("Thor", "thor@gmail.com", "123456", "Asgard", Seat.first, "123243", "abc123", "xyz789").spells_Left;
class subbed_User_ extends VIP_User {
    constructor() {
        super(...arguments);
        this.isSubbed = true;
    }
    release_spells(num) {
        this._spells -= num;
    }
}
const subbedUser1 = new subbed_User_("Hulk", "hulk@gmail.com", "654321", "New York", Seat.middle, "456789", "def456", "ghi789").release_spells(2);
