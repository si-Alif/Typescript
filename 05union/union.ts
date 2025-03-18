type User ={
  id:number,
  name:string,
  age:number,
  address:string
}

type admin = {
  id:number,
  name:string,
  age:number,
  address:string,
  role:string,
  permissions: string[]
}

const alif : User | admin = {
  id: 1,
  name: "Alif",
  age: 20,
  address: "Bangladesh",
  role: "admin",
  permissions: ["read", "write", "delete"]
}

const alif2 : User | admin = {
  id: 2,
  name: "Thor",
  age: 1000,
  address: "Asgard"
}


const getDBId =(id:string | number)=>{

  // id.toLowerCase() This won't work as there's not a 100% chance that the id would be a string , that's why we can't just use this method here

  if(typeof id == "string") id.toLowerCase() //  ⭐ Now that the id is 100% a string we can just use this method here

  // return id + 2 This won't work as there's not a 100% chance that the id would be a number , that's why we can't just use this method here

}

const studentIA : string[] | number[] = [2 , 3, 4, 5, 6, 7, 8, 9, 10, 11]           //
                                                                                    // 👁️👄👁️ These two  means that all the values in the array can either be all  number or all string values
const studentIB : string[] | number[] = ["2" , "23" , "24" , "25" , "26" , "27" ,]  //


// 🗿🗿🗿 Mixture

const studentIdC: (string | number) [] = ["23" ,2 , 3] //⭐⭐⭐

const studentId :Array<Number | string> = [2, 3 , "34"]// ⭐⭐⭐



//  strict value declaration

let seatAllotment : "aisle" | "middle" | "window"

type Passenger ={
  id:number,
  name:string,
  age:number,
  address:string ,
  seat : typeof seatAllotment
}

type VIP_Passenger = {
  id:number,
  name:string,
  age:number,
  address:string ,
  seat : "window" | "middle"
}

const psngr1 : Passenger ={
  id: 1,
  name: "Thor",
  age: 1000,
  address: "Asgard",
  seat : "window"
}

const psngr2 : Passenger ={
  id: 2,
  name: "Alif",
  age: 20,
  address: "Bangladesh",
  seat : "aisle"
}

const VIP3 :VIP_Passenger ={
  id: 3,
  name: "Thor",
  age: 1000,
  address: "Asgard",
  // seat : "crew" ⭐⭐ Only the specific type of seat can be alloted
  seat : "middle"
}


