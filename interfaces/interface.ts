interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  isActive: boolean;
  creditCard?: number;
  startInspecting: () => { _id: string, username: string, email: string } // Defines that a method that returns a object is required

  getDiscount: (couponcode?: string) => {
    _id: string,
    username: string,
    email: string,
    discountPercentage: number,
  }

  googleAuth : boolean

}

interface User{
  amazonAuth ?: boolean,
  facebookAuth ?: boolean,
  githubAuth ?: boolean,     // ⭐⭐⭐ We can easily re-open interfaces again if needed & update them just by calling them (Just like classes in JS)
  twitterAuth ?: boolean,
  instagramAuth ?: boolean,
  linkedinAuth ?: boolean,
}

interface Admin extends User {
  role: "admin" | "ta" | "earl",
  permissions: string[]
}

const ecomUser: User = {
  id: 1,
  name: "Alif",
  googleAuth: false,
  age: 20,
  email: "alif@gmail.com",
  isActive: true,
  startInspecting: () => {
    return { _id: "123456", username: "alif", email: "alif@gmail.com" }
  },

  getDiscount: (code = "10%") => {

    return {
      _id: "132242",
      username: "1324",
      email: "alif@gmail.com",
      discountPercentage:code.includes("10%")?10 : 0,
    }
  }

}

const admin1 :Admin ={
  id: 2,
  name: "Admin",
  googleAuth: true,
  age: 25,
  email: "admin@gmail.com",
  isActive: true,
  role: "admin",
  permissions: ["view", "edit"],
  startInspecting: () => {
    return { _id: "123456", username: "admin", email: "admin@gmail.com" }
  },
  getDiscount: (code = "10%") => {
    return {
      _id: "132242",
      username: "admin",
      email: "admin@gmail.com",
      discountPercentage: code.includes("10%")?10 : 0,
    }

  },
  
}