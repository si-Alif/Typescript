// let rgb :[number, number, number] = [0, 0, 0 , 0];❌
let rgb :[number, number, number] = [0, 0, 0 ];// ✅

type UserDetailsArr = [string, number , string , boolean] // ⭐⭐⭐ Makes you follow a certain order

const user1 : UserDetailsArr = ["Alif", 20, "Bangladesh", true] // 🗿🗿🗿 Hve to insert values in order nor it will  throw error

type User = { name:string, email:string , password:string , }

const user : User = {
  name :"Alif"  ,
  email :"alif@gmail.com" ,
  password :"123456"
}

// user._id = "123243" ⭐⭐ Nothing else can be passed

type loggedInUserTup = {
  name : string,
  email : string,
  password : string,
  // email ?: string,
  // password ?: string, If you really aren't sure about the type then optional  chain it everywhere
  _id : string,
  access_token : string,
  refresh_token : string,
}

let loggedInUser :loggedInUserTup & { isAdmin ?: boolean};  // ⭐⭐⭐TypeScript recognizes isAdmin as an optional property.

// const logInUser = ({email , password}:
// {
// email?:string , // ⭐⭐⭐ Be aware of using 👁️?👁️
// password?:string// 👁️👄👁️ As I used optional chaing , this tells TS that there isn't a 100% assurance that email & password will  be string thus it's type is defined like ⭐ string | undefined ⭐ . As a result when we try to use those values with a 100% string assured variable / key's value it throws error
// })
// :loggedInUserTup => {


const logInUser = ({email , password}:{email:string , password:string}):typeof loggedInUser => {
    return {
      name : "Login",
        email : email,
        password : password,
      _id : "123243",
      access_token : "abc123",
      refresh_token : "xyz789",
    }
}

const userDetails =  logInUser({email: "alif@gmail.com", password: "123" })

userDetails.isAdmin = true
userDetails.refresh_token = "iuywgfcd"


