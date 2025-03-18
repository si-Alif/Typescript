let greetings: string = "Alif"

console.log(greetings)

// ⭐We can explicitely assign the type to it , but if we just assign the number & don't give type ,  still  it will be assigned number type by the TS runtime implicitely
let myNum :number = 23;
myNum = 34;

let myNum2 = 3456
myNum2.toExponential()

let userId :number = 233445.88;
// userId = "Alif"`

const loggedIn :boolean = true ;

console.log(loggedIn)


//📜📜📜 any
//  ⭐any keyword basically turns off the type checking for that variable which it's assigned to
// In ts.config , if we use noImplicitAny then any of the declared variable can't have the any keyword / type assigned to them


let hero :string ;

const getHero =()=>{
  return "spider-man"
  // return true
}

hero = getHero()



export {}