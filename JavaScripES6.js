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

