function incrementBy2(num: number) {
  return num + 2;
}

incrementBy2(5);

function turnIntoUpperCase(inp: string) {
  return inp.toUpperCase();
}

turnIntoUpperCase("hello");

function logInUser(name: string, password: string, hasToken: boolean) {}

logInUser("unga", "123456", true);

const signUpUser = (
  name: string,
  password: string,
  subscribedEmail: boolean = false
) => {};

signUpUser("unga", "123456");

//📜📜📜 Function output specification :

function incrementBy3(num: number) {
  // return num+2 ;
  return "hello ";
}
function incrementBy4(num: number): number {
  return num + 2;
  // return "hello" ::⭐As the outcome type has been specified , now we have to return value based on that specific type of value
}

function loggedIn(token: object): boolean | string {
  //👁️👄👁️ Objects in JavaScript have keys and values, but they don’t have a direct length like arrays or strings.

  if (Object.keys(token).length > 0) return true;

  return "401 bad auth";
}

loggedIn({ accessToken: "243223r", refreshToekn: "234" });

const logout = (token: {
  accessToken?: string;
  refreshToken?: string;
}): string | boolean => {
  if (!(token.refreshToken && token.accessToken))
    return "Invalid token provided(Either refreshToken or accessToken)";
  if (!(token.refreshToken || token.accessToken)) return "No token Provided";

  return "Bye bye🗿🗿🗿🤫🧏‍♂️";
};

logout({ accessToken: "243223r", refreshToken: "234" });

//🤫🤫🤫 Map method

const heroes = [
  "Thor",
  "spiderman",
  "Hulk",
  "Ironman",
  "Captain America",
  "Black Panther",
  "Ant-Man",
  "Wonder Woman",
];

// heroes.map(hero: number => `hero available now ${hero}`)
// heroes.map((hero): number => `hero available now ${hero}`)
heroes.map((hero): number => 3)
heroes.map((hero): string => `hero available now ${hero}`)


function consoleError(errMag:string) :void{
  console.log(errMag)

}

// 🗿🗿🗿⭐⭐⭐ "never" type is used to handle errors gracefully
function handleError(errMag:string) :never{
  throw new Error(errMag)

}

handleError("something went wrong")

// function handleError(errMag:string) :never{
//   console.log(errMag) ⭐⭐This won't work as it should be void not "never"

// }


export {};
