const heroesInNeverTypeByDefault =[]

const heroes_Name_Array_Consists_In_String_Values_Only :string[] = []

const dragon_LVL_Array_Consists_In_Number_Values_Only :Number[] = []

const dragon_LVL_and_Attribute_Array_Consists_In_Number_and_string_Values :Number[] & string[] = []

heroes_Name_Array_Consists_In_String_Values_Only.push("thor")

dragon_LVL_Array_Consists_In_Number_Values_Only.push(22)

dragon_LVL_and_Attribute_Array_Consists_In_Number_and_string_Values.push(22)




type User ={
  id:number,
  name:string,
  age:number,
  address:string
}

const allUserList : User[] = []


allUserList.push({id:1,name:"Thor",age:1000,address:"Asgard"})




// const students_Grade : string[][] | number[][] = [] ⭐⭐⭐This tells TypeScript that the entire variable is either an array of string arrays or an array of number arrays
const students_Grade : Array<Number[] | String[]> = []

students_Grade.push(
  [85, 90, 88],
  ["John", "Jane", "Joe"]
)


export {}