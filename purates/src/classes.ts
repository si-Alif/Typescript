class User {

  name: string;
  email: string;
  address: string = "Bangladesh"
  private cardNumber : number = 0; // 🗿🗿🗿 Private fields can only be accessible by the own class , not anyone outside not even a extended class out of it
  constructor(_name: string , _email: string){
    this.name = _name;
    this.email = _email;
    this.cardNumber = Math.floor(Math.random()*1000000000);
  }
}

const user1 = new User("alif" , "alif@gmail.com");

user1.address = "Japan";
// user1.cardNumber = 232435465 // ⭐⭐⭐ Property 'cardNumber' is private and only accessible within class 'User'.


//🗿🗿🗿 Better & easier way to write this whole jargon

enum Seat {
  middle = "middle",
  crew = "crew",
  first = "first"
}

class VIP_User {

  protected _spells = 2 // ⭐⭐⭐ As we used protected keyword now we can use this field on the classes who inherites this class 🗿🗿 but any instance out of them can't access it

  constructor(
    public name: string,
    public email: string,
    private password: string,
    public address: string = "Bangladesh",
    public seat: string =typeof Seat,
    public _id: string,
    private access_token: string,
    private refresh_token: string,
  ){
    this._id = Math.random().toString(36).substr(2, 9);
    this.access_token = Math.random().toString(36).substr(2, 9);
    this.refresh_token = Math.random().toString(36).substr(2, 9);
  }

  get getAppleEmailVerificationCode() : string {
    return `verification code is ${this.access_token}`
  }

  get spells_Left(): number {
    return this._spells;
  }

  set add_Spells (count :number) { //⭐⭐⭐⭐⭐ A 'set' accessor cannot have a return type annotation. This can only manipulate changable values in the class
    this._spells += count;
  }

}

const vipUser1 = new VIP_User(
  "Thor",
  "thor@gmail.com",
  "123456",
  "Asgard",
  Seat.first,
  "123243",
  "abc123",
  "xyz789",
).spells_Left

class subbed_User_ extends VIP_User {
  isSubbed = true;
  release_spells(num :number){
    this._spells -= num;
  }
}

const subbedUser1 = new subbed_User_(
  "Hulk",
  "hulk@gmail.com",
  "654321",
  "New York",
  Seat.middle,
  "456789",
  "def456",
  "ghi789",
  ).release_spells(2)
