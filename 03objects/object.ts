const user = {
  name: "Alif",
  age: 20,
  email: "alif@gmail.com",
  isActive: false,
};

//🗿🗿🗿⭐⭐⭐ Without using the inbuilt type  like void, string , object provided by TS we can define our own structural type at the place where we used to define TS provided type

const createUser = ({
  name, //
  age, // ⭐⭐ This part defines the arguements to be passed
  email, //
  isActive = false, //
}: {
  name: string; //
  age: number; // ⭐⭐⭐ This part defines the arguements type
  email: string; //
  isActive?: boolean; //
}): {
  name: string; //
  age: number; //
  email: string; // 🤫🤫🤫 This part is used to specify the return values type (In this case the Object's key type individually)
  isActive?: boolean; //   //
  isAdmin?: boolean; //
} => {
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

const logInUser = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): { accessToken: string; refreshToken: string } => {
  console.log("Logged in as", email);
  return {
    accessToken: "132",
    refreshToken: "132",
  };
};

//2️⃣nd method

type loginDataType = { email: string; password: string };

type tokenDataType = { accessToken: string; refreshToken: string };

const logInUser2 = ({ email, password }: loginDataType): tokenDataType => {
  console.log("Logged in as", email);
  return {
    accessToken: "132",
    refreshToken: "132",
  };
};

type createUserInDB = {
  readonly _id: string; // Using readonly so that none can manipulate this id further
  name: string;
  age: number;
  email: string;
  isActive: boolean;
  creditCard ?: number; // For the ⭐?:⭐ conditional checking it won't throw any error if creditCard number isn't passed
};

const createUserInDBFunc = ({
  _id,
  name,
  age,
  email,
  isActive,

}: createUserInDB): createUserInDB => {
  return {
    _id,
    name,
    age,
    email,
    isActive,
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



type cardNum ={
  cardNumber: number;
}

type cardExpiryDate ={
  day:number,
  month:number,
  year:number
}


type paymentMethod = {
  card: cardNum & cardExpiryDate & {cvv:number};  //⭐⭐ Merging all the card details & adding further type if needed
  expiryDate: cardExpiryDate;
}




export {};
