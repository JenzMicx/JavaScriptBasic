//#region block Scope (let/const)
/**var มันเกินขอบเขต {} เลยไม่ใช่แล้ว มัน console.log() ได้นอก {} */
//#endregion

//#region Arrow function
//Old
    function fullname(fristname,lastname){
    return fristname+lastname;
    }
//Arrow
    fullname=(fristname,lastname)=>fristname+lastname
//#endregion

//#region Object
const nameProduct = "mouse";
const price = 1500;
const color =  "black"
const category= "Computer"
const size= "M"
let product = {nameProduct,price,color,category,size,
  displayProduct() {
    return (
      "Name = " + this.nameProduct +
      " Price = " + this.price +
      " Category = " + this.category
    );
  },
  discount(){return this.price - 250;},
  getColor(){return this.color;}
};
//call method
console.log(product.displayProduct());
console.log(product.discount()+' Bath')
//#endregion

//#region String
/* MultiLine String สามารถทำงานกับข้อความยาวๆได้ โดยการขึ้นบรรทัดใหม่แล้วไม่มีข้อผิดพลาดเกิดขึ้นโดยใช้ ` 
 * Interpolation สามารถแทรกตัวแปรลงในพื้นที่ String ได้โดยใช้ ${} ร่วมกับ `
*/
//MultiLine String
const Name = `Jjdkflsjfksafhsdlfhs 
dkfjsolaihfaskdfkj
 jfklsafjkas;fjksdafsafhd`
console.log(Name);

//Interpolation
let a = 10;
let b = 25;
const tagname = `Show Data by innerHTML: a = ${a}, b = ${b}`;
console.log(tagname);

//#endregion

//#region Spread Operator
//Spread Operator is ... (คือจุด 3 จุดเพื่อกระจายสมาชิก Array มาใช้งาน)
const number = Array(2, 3, 4, 5, 6, 7, 8, 9);
//const colors = ["red", "blue", "green", "yellow",number]; เท่ากับ colors.push(number);
const colors = ["red", "blue", "green", "yellow",...number]; 
const Newnumber = [10,11,12,13,14,15]
colors.push(...Newnumber);
console.log(colors);
//#endregion

//#region Rest Parameter
//Rest Parameter ใช้ในการส่งค่า parameter เข้าไปใน function โดยไม่จำกัดจำนวน ใช้เครื่องหมาย ... คือจุด 3 จุด
/* sumnumber=(x,y)=> x+y;
sumnumber=(x,y,z)=> x+y+z; */
/*************************************New Knowladge********************************************** */
sumnumber=(...numberArray)=> { //is rest parameter
    let total = 0 
    for(let number of numberArray) total+=number //ความรู้ใหม่  for ทำแบบนี้ได้ด้วย คล้ายๆ foreach เลย
    return total;
}
/************************************************************************************************** */
console.log(sumnumber(10,50)) // output is NaN
console.log(sumnumber(10,50,10)) // output is 70
//#endregion

//#region Destructuring (การสลายโครงสร้าง)
//input array from #region Spread Operator
//Old
const x = Newnumber[0] // x=10
const y = Newnumber[5] // y=15

//Destructuring ([Variable1,,,Variable4,,Variable6] = Array)
const [,,s,,,f] = Newnumber //s = 12,f = 15
console.log(`${s}, ${f}`)

//input Object from #region Spread Operator
//Old
const Names = product.nameProduct
const prices = product.price
const categorys = product.category

//Destructuring ({Property1:Variable1, Property2:Variable2, Property3:Variable3,} = Array)
//Method 1
//const {nameProduct:Namess,price:pricess,category:categoryss} = product

///Method 2
const product2 = {
  nameProduct2: "Notebook",
  price2:30000,
  category2: "Computer"
  
}
const {nameProduct2,price2,category2} = product2;
console.log(`Name: ${nameProduct2} Price: ${price2} Categoryss: ${category2}`)

//#endregion

//#region Default 
//Default parameter
getDataIntoMethod=(Dates,Income = 0,pay = 0)=>{
 /*  if(!Income){
    Income = 0
  } */
  const Outputs = `Date: ${Dates} | Income: ${Income} THB, Pay: ${pay} THB` ;
  return Outputs;
}
console.log(getDataIntoMethod("30/08/2023"));

//#endregion

//#region Array
DataArray1 = [0,1,2,3,4,5,6,7,8,9]
DataArray2 = [10,11,12,13,14,15]
/****************************** array.join() *****************************************/
const joinArray = DataArray1.join("|")
console.log(`joinArray: ${joinArray}`); // convert Array to String โดยไม่กระทบ Array
console.log(`DataArray1: ${DataArray1}`);
console.log("____________________________________________________________________________")
/*************************************************************************************/

/****************************** array.concat() *****************************************/
const concatArray = DataArray1.concat(DataArray2)
console.log(`concatArray: ${concatArray}`); // Merge Array
console.log(`DataArray1: ${DataArray1}`);
console.log("____________________________________________________________________________")
/*************************************************************************************/

/****************************** array.push() *****************************************/
DataArray2.push(...[16,17,18]) // Add Array to last index 
console.log(`pushArray: ${DataArray2}`);
console.log("____________________________________________________________________________")
/*************************************************************************************/

/****************************** array.pop() *****************************************/
DataArray2.pop() // Remove Array to last index
console.log(`popArray: ${DataArray2}`);
console.log("____________________________________________________________________________")
/*************************************************************************************/

/****************************** array.shift() *****************************************/
DataArray2.shift() // Delete member at frist index
console.log(`shiftArray: ${DataArray2}`); 
console.log("____________________________________________________________________________")
/*************************************************************************************/

/****************************** array.unshift() *****************************************/
DataArray2.unshift("unshift") // Add member at frist index
console.log(`unshiftArray: ${DataArray2}`); 
console.log("____________________________________________________________________________")
/*************************************************************************************/

/****************************** array.splice() *****************************************/
DataArray2.splice(0,1,10) //splice(index ที่จะลบ, amount ที่จะลบ, member want to insert into index ที่ลบ)
console.log(`spliceArray: ${DataArray2}`); // delete member range in array และส่งผลต่อ Array เพราะมีการเปลี่ยนโครงสร้างด้านใน array
console.log("____________________________________________________________________________")
/*************************************************************************************/

/****************************** array.slice() *****************************************/
console.log(`DataArray2: ${DataArray2}`); 
const lastData = DataArray2.slice(2,4) //slice(index เริ่มต้น, index สุดท้าย - 1)
console.log(`sliceArray: ${lastData}`); // ดึงเอา member range in array มาใช้งาน
console.log("____________________________________________________________________________")
/*************************************************************************************/

//#endregion

//#region Loop Array
/***************************** For Loop **************************************/
console.log(DataArray1);
let totalArray = 0
for(let i = 0;i <= DataArray1.length-1; i++){
  console.log(`For Loop: ${DataArray1[i]} `); //เขียน break;,continue; ได้ภายใน
  totalArray+=DataArray1[i];
}
console.log(`Total of For Loop: ${totalArray}`);
console.log("-----------------------------------------------------------------");

/***************************** ForEach **************************************/
console.log(DataArray1);
//Nums is Element ซึ่งก็คือ member ที่ดึงมาจาก Array Data
DataArray1.forEach(Nums => {console.log(`ForEach: ${Nums}`)});//เขียน break;,continue; ไม่ได้ภายใน
console.log("-----------------------------------------------------------------");

/***************************** ForOf **************************************/
console.log(DataArray1);
for(const element of DataArray1){ //คล้ายๆ forEach() ของ C#
  console.log(`for of: ${element}`)
}
console.log("-----------------------------------------------------------------");

//#endregion

//#region Find data in Array
/**
 * indexOf(data) => จะได้ตำแหน่ง index ที่ค้นเจอ, if doesn't found it will return "-1"
 * findIndex(data) => จะได้ตำแหน่ง index ที่ค้นเจอ, if doesn't found it will return "-1"
 * find(data) => จะได้ data ที่ค้นเจอ, if doesn't found it will return "undefind" 
 * find(data) จะคล้ายๆ foreach คือทำการ วนลูปข้อมูลสมาชิกภายใน Array มาตรวจสอบว่าเจอหรือไม่เจอ
 */
// === คือค้นทั้งค่า ค้นทั้งชนิดข้อมูล
DataArray3 = ["Black","White","Red","Blue","Purple"]
console.log(`IndexOf(Blue) is ${DataArray3.indexOf("Blue")}`);
console.log(`findIndex(Purple) is ${DataArray3.findIndex(ele=>ele==="Purple")}`);
console.log(`find(Red) is ${DataArray3.find(element=>element==="Red")}`);
//find(callbackfunction)
//findIndex(callbackfunction)

//#endregion

//#region Array Map
//Map เป็นการส่ง Array เข้าไปแล้วก็กลับมา (เอา array ที่มีอยู่มา map ค่าแล้วทำการสร้าง array ก้อนใหม่กลับมาให้เราใช้งาน)
//Example 1
const Map_Number = DataArray1.map(e=>e*2) //e is element
console.log(`Map_Number: ${Map_Number}`);

//Example 2
const Map_result = DataArray3.map((e,dates)=>{
  return `You wearing ${e} T-Shirt  on date ${dates+1}`
})
console.log(Map_result);

//Example 3
const data_ArrayObject = [
    {day:"31/08/2023",Exercise:"run",timer:"30"},
    {day:"01/09/2023",Exercise:"walk",timer:"40"},
    {day:"02/09/2023",Exercise:"jump",timer:"20"}
]

const ArrayObject = data_ArrayObject.map(e=>e.Exercise)
console.log(ArrayObject);

//#endregion

//#region Array Filter
const FilterData = data_ArrayObject.filter(e=>e.timer >20).filter(e=>e.Exercise==="run")
console.log(FilterData);
//#endregion

//#region  Array Reduce
/*
  ส่ง Array เข้ามาทำงานแล้วจะได้ค่าๆหนึ่งเท่านั้นตอบกลับออกมาใช้งาน 
  ไม่เหมือน Map(), filter() เพราะอันนั้นมาทั้ง Array ก้อนใหม่กลับมาใช้งาน
*/
//array.reduce((ค่าที่ถูกประมวลผล, e)=>{},ค่าเริ่มต้น) // value = 0
const Sum = DataArray2.reduce((value,e)=>e+value,0) 
console.log(Sum);



/**
 ***** Map() vs filter() vs Reduce() *****
 * Map() -> ได้ Array กลับมาและ member เท่ากันกับ Array ต้นแบบ
 * filter() -> ได้ Array กลับมาแต่มีความยาว member ไม่เท่ากันกับ Array ต้นแบบ
 * Reduce() -> ได้เป็น value กลับมาค่าเดียว 
 */
//#endregion
