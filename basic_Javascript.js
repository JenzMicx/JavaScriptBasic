//#region Display Information on Web
//document.write("") for show text, number, variable or Html tag on Web App
//document.write("<h1>External Script</h1>");
//document.write("<h1>JavaScript Script</h1>");

//alert("") for alert message on Web App
//alert("Alert");

//Console.log("") for debug but not show on Web App [F12 -> console]
/*
console.log("Console log");
console.error("Detect virus")
console.warn("Warning");
*/
//#endregion

//#region Variable
/*** 
    example var => var nameofVariable1 = value1, nameofVariable2 = value2
    example let => let nameofVariable1 = value1, nameofVariable2 = value2
    example const => const(value) ***can not change value.
    ***/
/*
let name; //not defind value
name = "BasicJS" //defind value of variable
let years = 2023;
console.log(name);
console.log("@",years);
*/
//#endregion

//#region Convert Data type
///*convert String to number*///
let year = "2023"; //String
console.log("Type before convert is", typeof year);
year = parseInt("2023"); //number
console.log(year);
console.log("Type after convert is", typeof year);

///*convert number to String*///
let days = 18.08;
console.log("Type before convert is", typeof days);
//days = 18.08+"";
days = (18.08).toString();
console.log(days);
console.log("Type after convert is", typeof days);

//#endregion

//#region array
/***
     **** Example create array ****
     - let nameofArray = new Array();
     - nameofArray[0] = 2023;
     - let nameofArray = Array("Monday","Tuesday","Wednesday",...);
    ***/
let number = Array("Friday", 2, 3, 4, 5, 6, 7, 8, 9, true);
console.log(number);

let colors = ["red", "blue", "green", "yellow"];
console.log(colors);
//#endregion

//#region Operator
/*
    Operator (ตัวดำเนินการ)
    Operand (ตัวถูกดำเนินการ)
    */
let a = 20,
  b = 3;
console.log("a = ", a + "," + "b = ", b);
let OperatorJs = Array(
  a + b,
  a - b,
  a * b,
  a / b,
  a % b,
  a ** b,
  a == b,
  a != b,
  a >= b,
  a <= b
);
console.log("Addition is ", OperatorJs[0]);
console.log("Subtraction is ", OperatorJs[1]);
console.log("Multiplication is ", OperatorJs[2]);
console.log("Division is ", OperatorJs[3]);
console.log("Modulus is ", OperatorJs[4]);
console.log("Exponentiation is ", OperatorJs[5]);
console.log(OperatorJs);

//Compare
console.log("a == b? is", OperatorJs[6]);
console.log("a != b? is", OperatorJs[7]);
console.log("a >= b? is", OperatorJs[8]);
console.log("a <= b? is", OperatorJs[9]);

//Opposite
let check = true;
console.log(!check); //output is false

//Logic
console.log("a >= 10 && b<2? is", a >= 10 && b < 2); //output is false
console.log("a <= b || b<a? is", a <= b || b < a); //output is True

//Prefix
console.log("Before a = ", a + " After " + " ++a = ", ++a);
console.log("Before a = ", --a + " After " + " a++ = ", a++);
console.log("Before b = ", b + " After " + " --b = ", --b);
console.log("Before b = ", ++b + " After " + " b-- = ", b--);

//Compound Assignment
let x = 10,
  y = 30;
console.log("Before: x = ", x);
let CompoundJs = Array(
  (x += y), //x = x+y is CompoundJs[0]
  (x -= y), //x=x-y is CompoundJs[1]
  (x *= y), //x=x*y is CompoundJs[2]
  (x /= y), //x=x/y is CompoundJs[3]
  (x %= y) //x=x%y is CompoundJs[4]
);
console.log("After: x = ", CompoundJs);

//Priority operator
console.log("5+8*9 =", 5 + 8 * 9);
console.log("10-4+2 =", 10 - 4 + 2); //8
console.log("10-(2+1) =", 10 - (2 + 1)); //7
console.log("5*2-40/5 =", 5 * 2 - 40 / 5); //2
console.log("7+8/2+25 =", 7 + 8 / 2 + 25); //36

//#endregion

//#region Ternary Operator
//if..else แบบลดรูป
//form format: Variable = (Condition) ? ConditionisTrue: ConditionisFalse;
//Example
let score = 40;
let Result = score >= 60 ? "Pass" : "Not Pass";
console.log(Result);
//#endregion

//#region Switch  Case
/**
 * "Switch" จะคล้ายๆ if แต่ if is flexible
 * But "Switch" จะต้องเลือกเพียง 1 ทางเลือกที่จะให้ออกมาทำงานเท่านั้น
 * By defind direction via variable of "case" command
 * "break;" จะทำให้โปรแกรมกระโดดออกไปทำงานนอกคำสั่ง "Switch"
 * "default:" เป็นคำสั่งที่ไม่มีค่าที่ตรงกับที่ระบุใน case
 */

let status = 0;
let light;
//if-else
if (status == 0) {
  light = "Turn off";
} else if (status == 1) {
  light = "Turn on";
} else light = "Not Found status";
console.log("If-else:", light);

//Switch-case
status = 1;
switch (status) {
  case 0:
    light = "Turn off";
    break;
  case 1:
    light = "Turn on";
    break;
  default:
    light = "Not Found status";
}
console.log("Swich-case:", light);
//#endregion

//#region Program check Even/Odd number
let Inputnumber = 10;
let outputResult = Inputnumber % 2 == 0 ? "Even Number" : "Odd Number";
console.log(outputResult);
//#endregion

//#region Loop

//while ใช้ในกรณีที่ไม่รู้จำนวนรอบ
let countWhileLoop = 1;
while (countWhileLoop <= 5) {
  console.log("Count while loop ", countWhileLoop);
  if (countWhileLoop == 3) {
    break;
  }
  countWhileLoop++;
}

//for ใช้ในกรณีรู้จำนวนรอบที่ชัดเจน
for (let countforloop = 1; countforloop <= 5; countforloop++) {
  console.log("Count for loop ", countforloop);
  if (countforloop == 4) {
    break;
  }
}

//do..while ใช้ในกรณีที่อยากให้ลองทำก่อน 1 รอบแล้วทำซ้ำไปเรื่อยๆตราบเท่าที่เงื่อนไขเป็น True
let count_dowhile = 1;
do {
  console.log("Count Do..while ", count_dowhile);
  count_dowhile++;
} while (count_dowhile <= 5);

//#endregion

//#region break; continue;
/**สามารถใช้ break; ใน While loop เพื่อมาหยุดตาม condition; ที่เรากำหนดไปก็ได้
 * break; is get out from loop and run other cammand of outside loop
 * continue; skip condition นั้น and restart loop working again
 */

//break
for (Num = 1; Num < 10; Num++) {
  if (Num == 5) break;
  console.log("Count", Num);
}
console.log("End");

//continue
for (Num = 1; Num < 10; Num++) {
  if (Num == 5) continue;
  console.log("Count", Num);
}
console.log("End");

//#endregion

//#region null, undefind, NaN
/**
 * ***null*** is variable ที่ไม่มีค่าใดๆเลย,ไม่เท่ากับ 0 (!0), ไม่เท่ากับ string ว่าง, ไม่สามารถนำไปคำนวณใดๆได้
 * แต่ถ้าหากใช้ในการ compare จะมีค่าเท่ากับ false
 */
let values = null; // value is false
//let output = (!values)? alert("values is null"): alert("values is not null")
let output = !values
  ? console.log("values is null")
  : console.log("values is not null");

/**
 * ***undefind*** is variable not defind value ใดๆไว้เลย
 */
let example_undefind;
console.log(example_undefind);

/**
 * ***NaN(Not a Number)*** is การนำตัวแปรที่ไม่ใช่ตัวเลขไป operate(+,-,*,/)
 */
let exampleNaN_1 = 10;
let exampleNaN_2 = "N";
console.log(exampleNaN_1 - exampleNaN_2);

//#endregion

//#region function
/**
 * function format
 ** 1. function "not receive and send value (call function only)" **
 *    //Create function:
 *    function name-of-function(){
 *      command other
 *    }
 *    //Call function:
 *    name-of-function();
 *
 ** 2. function "have receive data and working in function only" **
 *    //Create function:
 *    function name-of- function(parameter1, paremeter2, ...) {
 *      command group
 *     }
 *     //Call function:
 *    name-of-function(argument1, argument2, ...)
 ***** Argument is variable send into function หรือก็คือค่าที่ส่งมาจาก html ให้กับ function (Send Variable)
 ***** Parameter is ตัวแปรที่ function  สร้างไว้สำหรับค่าที่จะส่งเข้ามาให้กับ function (Receive variable)
 *
 ** 3. function "not have receive but return data only" **
 *    //Create function:
 *    function name-of- function() {
 *      return out value
 *     }
 *
 ** 4. function have receive and return data **
 *    //Create function:
 *    function name-of- function(parameter1, parameter2,...) {
 *      return out value
 *     }
 *
 ** 5. function have defind init variable (ใส่ค่าเริ่มต้นสำหรับในกรณีที่ไม่ได้มีการใส่ input ตัวแปรนั้นมา)
 *     //Create function:
 *     function name-of-function(name-of-variable="init value", parameter2, ...){
 *      command other
 *     }
 *
 */
//ย้าย code ไปที่ DOM Event
/* function EvenOrOdd(Inputnumber = 10) {
  //let Inputnumber;
  let outputResult = Inputnumber % 2 == 0 ? "Even Number" : "Odd Number";
  console.log(outputResult);
}

function Nameown(name = "Micky") {
  console.log(name);
} */

//#endregion

//#region Variable
/**
 * local variable เป็นตัวแปรที่สามารถใช้ได้ในเพียง function ที่ประกาศทำงานเท่านั้น
 * global variable เป็นตัวแปรที่สามารถใช้ได้ทั้ง file ที่ประกาศใช้
 */
let Variables = "global variable";
console.log("outside before funtion -> ", Variables);
function display() {
  let Variables = "local variable";
  console.log("inside funtion -> ", Variables);
}
display();
console.log("outside after funtion -> ", Variables);
//#endregion

//#region Arry Properties & Function
/**
 * .length()
 * .sort() //use text only not can use with number
 * .reverse()
 * .push() //add member of array
 *
 * ForEach ต้องทำการสร้าง  function ขึ้นมาเพื่อที่จะทำการ loop ข้อมูลสมาชิกแต่ละตัวที่อยู่ใน Array เอาไปใช้งานโดยที่ไม่ต้อง refer index of array
 * or refer ไปที่ nameofArray
 * Example:
 * Array.forEach(MyData) //call-back function
 *
 * fuction myData(item)}{
 *  console.log(item)
 * }
 */
/*********************************************************************************************** */
//Array to String
/**
 * .toString(); แปลงเป็น string
 * .join("*"); นำค่าแต่ละค่าในตัวแปร array มารวมกันเป็นข้อความและส่งค่ากลับเป็นข้อความที่มีตัวคั่นค่าตัวแปรแต่ละค่าตามที่กำหนด
 * .pop(); เอาตัวสุดท้ายออก(Index ตัวสุดท้าย) หรือหยิบตัวที่อยู่บนสุดของเพื่อนออกไปจาก array
 * เพราะเป็นโครงสร้างข้อมูลแบบ stack (stack architecture is โครงสร้างที่ทำการเรียงข้อมูลเป็นชั้นๆถ้า .pop ออกก็จะเอาตัวด้านบนสุดออก)
 * let d = a.concat(b,c); รวม Arry
 */

//#endregion

//#region Callback function
/**
 * In JavaScript function is Object
 * เราสามารถที่จะส่ง object ไปเป็น parameter ของ function other ได้ด้วย
 * และเราสามารถเลือกใช้งานมันใน function นั้นได้
 *
 ** function ที่ส่งมาให้กับ function หรือก็คือ parameter ที่ส่งมาเป็น function นั้นเอง
 *  Example:
 * function print(callback)
 * {
 *    callback();
 * }
 *** Why must to use callback function? ***
 * ปกติ coding จะรันจาก บน->ล่าง, ซ้าย->ขวา
 * แต่ในบาง case โค้ดของเราอาจจะมีบางอย่างเกิดขึ้นและไม่จำเป็นต้องทำตามลำดับ
 * มันจึงเรียกว่า Asynchronus programing หรือการเขียนโปรแกรมแบบ Asynchronus
 * มันคือการที่ทำให้แน่ใจว่า function จะยังไม่ทำงานจนกว่าจะทำ task เสร็จ
 */
//Example 1
function Asynchronus_function() {
  console.log("Example Asynchronus programing "); //Asynchronus_function() = callback function
}
setTimeout(() => {
  console.log("Example Asynchronus programing "); //Arrow function แบบ callback function
}, 3000); // 3 second
/********************************************************************************************* */
//Example 2
const listDay = ["Mon", "Tue", "Wed", "other"];
listDay.pop();
console.log(listDay);
const new_ListDay = listDay.map(function (val) {
  //.map คือมีไว้ loop ผ่าน array แล้วเอา data จาก array ออกมา
  return val + "day"; //function(val) is callback function ที่รับ parameter เข้ามา
});
console.log(new_ListDay);
/********************************************************************************************* */
//Example 3
//callback function จะไม่รันหรือไม่ทำงานจนกว่าจะมีการเรียก function ที่ callback function มันอยู่ด้านใน function นั้น
//ย้าย code ไปที่ DOM EVENT
/* function Template(name) {
  return console.log("Hello, " + name + " Welcome to ThaiLand");
}

function Introduction(fristname, lastname, Template_callback) {
  let fullname = fristname + " " + lastname;

  Template_callback(fullname);
}
Introduction("Jenarong", "Inkham", Template); */
/********************************************************************************************* */
//Example 4 (callback hell)

//#endregion

//#region JavaScript Object
//let nameof-Object = {Property:value}
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

//#region confirm
/**
 * confirm("message"); have 2 result
 * 1. click "OK", result = true
 * 2. click "cancel", result = false
 */
function deleteData() {
  let result = confirm("You want to delete all data?");
  if (result) {
    console();
  }
}

//#endregion

//#region HTML DOM (Document Object Model)
/**
 * 1.ใช้ Javascript ในการเข้าถึงหรือเปลี่ยนรูปแบบต่างๆ
 * 2.ควบคุมการเปลี่ยนรูปแบบ css ได้โดยเราก็สามารถเขียน css ไว้อีกไฟล์หนึ่งแล้วก็เขียน
 *   JavaScript ควบคุม CSS ตัวนั้นอีกทีหนึ่งว่าอยากให้ทำงานที่ Element ตัวไหน
 * 3.เขียน JavaScript มาช่วยเรื่องการใส่ event ให้กับหน้าเว็ป
 *   - document.getElementsById("name-of-Id")
 *   - document.getElementsByTagName("name-of-Tag")
 *   - document.getElementsByClassName("name-of-Class")
 *   - Change content HTML: element.innerHTML
 *   - Change content Text: element.innerText
 *   - Change style Element: element.style.properties = value
 *   - ดำเนินการผ่าน Method: element.SetAttribute(attribute, value)
 * Tag ต่างๆของ HTML จะเรียกว่า Element
 */
//let เปลี่ยนแปลงค่าตลอดเวลา
//const ไม่สามารถเปลี่ยนค่าได้ส่วนใหญ่จะเอามาใช้กับการกำหนดการเข้าถึง element ผ่าน Id,Class,Tag
const delId = document.querySelector("#delText"); //Refer by Ia
const tagname_ = document.getElementById("callback-text");
const btnCB = document.querySelector(".btnCallback"); //Refer by Class
const allselete = document.querySelectorAll("p"); //Refer by Tag
const ChangeMode = document.querySelector(".lightMode");
/*  # ใช้กับ Id (ไม่ค่อยใช้กับ Id เพราะ id มันเจาะจง ระบุได้แค่  tag เดียว)
 *  . ใช้กับ class (ส่วนใหญ่จะเอา .querySelector มาใช้กับ class)
 *  ส่วน TagName เอาชื่อ Tag มาเลย เช่น <p> แต่จะใช้ .querySelectorAll ซึ่งเหมาะสำหรับ tag, class หลายๆอัน
 * และจะได้รูปแบบข้อมูลมาเป็น Node-red แล้วก้มาทำให้เป็น Array แล้วทำให้เข้าถึงสมาชิกแต่ละตัวได้
 */
function DisplayText() {
  delId.innerText = "Remove all data?";
  tagname_.innerHTML = `Show Data by innerHTML: a = ${a}, b = ${b}`;
  delId.style.color = "blue";
  btnCB.style.backgroundColor = "red";
  delId.style.fontSize = "50px";
}

function ChangeAttribute() {
  btnCB.setAttribute("class", "CSSMic");
}

function lightMode() {
  ChangeMode.setAttribute("class", "light");
}

function DarkMode() {
  ChangeMode.setAttribute("class", "Dark");
}

console.log(tagname_);
console.log(delId); // ถ้าขึ้นว่า null แปลว่ามันทำ file JavaScript ก่อนแล้วค่อย มาทำ html ให้ย้ายไฟล์ javaScript ลงมาที่ <body> จาก <head>
console.log(allselete);
console.log(btnCB);
/**********************************************************************************************************************************/
//DOM Node
/**
 * - document.createElement(element) // สร้าง element ใหม่ผ่านการใช้ JavaScript
 * - document.removeChild(element) // ลบ node ลูก
 * - document.appendChild(element) // นำ element ไปต่อใน node แม่
 * - document.replaceChild(new,old) // แทนที่ element
 */
// เข้าถึง Tag ทั้งหมด
const tag_all = document.querySelectorAll("p");
const menu = document.querySelector("#Menu");

let NumCount = 0;
function addItem() {
  const item = document.createElement("li"); //สร้าง <li></li> ดดยไม่ต้องไปสร้างที่ html
  //item.innerText = "Item"; //ใส่ข้อความใน <li></li>
  item.innerText = `Item ${NumCount++}`;
  menu.appendChild(item);
}
function RemoveItem(){
  const items = document.getElementById('item-3')
  menu.removeChild(items);
}
function ReplaceItem(){
  const items = document.getElementById('item-2')
  const newItem = document.createElement('li')
  newItem.innerText = "XYZ";
  menu.replaceChild(newItem,items);
}
//console.log(tag_all[0].innerHTML);

/**********************************************************************************************************************************/
//DOM CSS Add & Remove Class
/**
 * - document.classList.add("class") // เพิ่ม class style
 * - document.classList.remove("class") // ลบ class style
 * - document.classList.toggle("class") // สลับ class style
 * - document.classList.contains("class") // เปรียบเทียบ class style เมื่อต้องการรู้ว่าใน element นี้มีการใช้ class style นี้อยู่หรือไม่
 */
const message = document.getElementById('message');

addDarkMode=()=>message.classList.add("Dark")
removeDarkMode=()=>message.classList.remove("Dark")

function SwapMode(){
  message.classList.toggle("Dark")
  status_class = message.classList.contains("Dark")
  console.log(status_class);
  if(status_class){message.style.color="black"}
  else{message.style.color="red"}
}
/**********************************************************************************************************************************/
//DOM EVENT
/**
 * onfocus="" เมื่อ element นั้นได้รับ focus -> ทำงานร่วมกับ Tag: select, text, textarea 
 * onblur="" เมื่อ element สูญเสีย focus หรือถูกย้าย focus ไป element อื่น -> ทำงานร่วมกับ Tag: select, text, textarea 
 * onchange="" เมื่อ user เปลี่ยนแปลงค่าในฟอร์มรับข้อมูล -> ทำงานร่วมกับ Tag: select, text, textarea 
 * onselect="" เมื่อ user เลือกข้อความ(ใช้ mouse ลาก)ในช่องข้อความ -> ทำงานร่วมกับ Tag: textarea 
 * onsubmit="" เมื่อ user click submit button -> ทำงานร่วมกับ Tag:  form
 * onMouseover="" เมื่อ object นั้นถูกเลื่อน mouse pointer ไปทับ -> ทำงานร่วมกับ Tag:  a,div
 * onMouseout="" เเมื่อ object นั้นถูกเลื่อน mouse pointer ที่ทับอยู่ออกไป -> ทำงานร่วมกับ Tag:  a,div
 * onclick="" เมื่อ object นั้นถูก click -> ทำงานร่วมกับ Tag:  a, button, checkbox, radio, reset, submit
 * onload="" เมื่อ Load เอกสารเสร็จ -> ทำงานร่วมกับ Tag:  body
 * onunload="" เมื่อยกเลิกการ Load เช่น click stop button -> ทำงานร่วมกับ Tag:  body
 * 
 */

/*การเปลี่ยน Attribute เราต้อง refer ไปถึง object ที่เราทำงานอยู่นั้นก็คือ <input id="Name">
  แล้วเราก็จะทำการระบุ this ลงไปใน onfocus="highlight()" เพื่อที่จะให้ event onfocus เรียกใช้งาน function highlight
  แล้วก็โยน object ก้อนนี้ = [highlight(this)] เข้าไปทำงานใช้ keyword "this"
*/
function highlight(obj){ //function highlight รับ object เข้ามาเป็น parameter
  //obj.style.background = "blue";
  obj.style.background = "yellow";

}

unhightlight=(obj)=>obj.style.background = "white";

Template=(name)=> console.log("Hello, " + name + " Welcome to ThaiLand");

EvenOrOdd=(Inputnumber = 10)=> {
  //let Inputnumber;
  let outputResult = Inputnumber % 2 == 0 ? "Even Number" : "Odd Number";
  console.log(outputResult);
}

/* function getMenu(){
  const SelectMenu = document.getElementById('SelectMenu');
  const display = document.getElementById('display');
  display.innerText = SelectMenu.value
  console.log(SelectMenu.value);
} */
//#endregion

//#region EventListener
/** เป็นรูปแบบการเขียน event ด้วย JavaScript ทั้งหมดแทนการเขียน event ผ่าน html นั้นเอง 
 * Syntex: element.addEventListener(event,callback)
*/
//Step1: refer
const SelectMenu = document.getElementById('SelectMenu');

//Step2: event
SelectMenu.addEventListener('change',getMenu);

//Step3:Create Method
function getMenu(){
  const SelectMenu = document.getElementById('SelectMenu');
  const display = document.getElementById('display');
  display.innerText = SelectMenu.value
  console.log(SelectMenu.value);
}
//#endregion

