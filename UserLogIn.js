//Class
  /** this
   * this เป็นตัว indentify ว่า now เราทำงานกับ Object ใดให้บอกตัวตนของ object นั้นๆ 
   * เช่น การกำหนด property ใน object
   */

  /** Access Modifier
   * Public = everyone can access and call class
   * Protected = Defind ระดับการ access about Inheritance 
   *             ทำให้  class can call member of class ที่ถูกกำหนดเป็น Protected (sign _)
   * Private = Defind ระดับการ access the most security 
   *           ทำให้มีแค่ class ของตัวมันเองเท่านั้นที่มีสิทธิ์ใช้งานได้ (sign #) 
   */
  
    /** Static (ช่วยลดขั้นตอนการ create Object)
     * Static Property = calling ได้โดยตรง ไม่ต้องเรียกผ่าน Object
     * TODO -> Command: static propertyName = value
     * TODO -> Calling: className.propertyName
     * 
     * Static Method = calling ได้โดยตรง ไม่ต้องเรียกผ่าน Object
     * TODO -> Command: Static static MethodName(parameter){ //statement }
     * TODO -> Calling: className.MethodName()
     * 
     * Example: class Math of JavaScript Math.PI, Math.max(), Math.random()
     * 
     * ข้อควรระวัง: ถ้ามีการออกแบบภายใน class จะทำให้ static method, static property สามารถทำงานร่วมกันได้
     *            แต่ถ้าไม่ได้เป็น static เหมือนกันจะใช้งานด้วยกันไม่ได้
     */

    /**Inheritance
     * อยากกระจายความสามารถของ class user ไปให้กับ subclass  
     * ซึ่ง ParentClass ก็จะทำการส่ง property บางอย่างไปยัง Subclass
     * เพราะฉะนั้นเมื่อมีการ inherite จะทำให้ property ต่างๆของแม่ถ่ายทอดไปยังลูกทั้งหมด 
     * !ยกเว้น private propperty & private Method
     * ParentClass: User
     * SubClass: Teacher, Student
     */

    /**Super
     * Super เป็น command for calling when ต้องการ property ที่ทำงานอยู่ใน parentclass เช่น Constructor เป็นต้น
     */

    /** Polymorphise (พ้องรูป)
     * คือคำหรือข้อความเดียวกันสามารถแปลความหมายได้หลายแบบ เช่น กา ก็มีกาน้ำ นกกา กากบาท เป็นต้น
     * โดยนำมาใช้เกี่ยวกับ Overriding Method 
     * Overriding Method คือ เมธอดคลาสลูก ที่มีชื่อเหมือนกับเมธอดของคลาสแมได้ แต่กระบวนการด้านในจะแตกต่างกัน
     * 
     */

/* class UserLogIn{ //public
    //property = value
    id=name
    password=password

    //constructor(){ }
    constructor(name,password){
        //this.id, this.password is property
        //name, password is value 
        this.id = name
        this.password = password
        //console.log(`Called Constructor -> Id: ${this.id = name} Password: ${this.password = password}`);
    }
    
    //method 
    showDetail(){
        console.log(`Id: ${this.id}, Password: ${this.password}`)
    }
} */

class UserLogIn{ //Private 
    
    //property = value
    //private = property จะถูกปิดไว้ไม่ให้ภายนอกเข้าถึงข้อมูลได้
    #id ;
    #password ;
    //TODO Step 1: สร้าง arrayที่จะเก็บ object (โจทย์ Static)
    static database_for_objectArray =[];

    /**Getter & Setter Mothod
     * Getter = Pull data from interesting properties
     * Setter = Modify data in property
     */
    //!SetId=(newId)=>this.#id = newId
    //!GetId=()=>this.#id 

    /** Accessor = (get,set)
     * get = helper for calling data in Proprty
     * set = helper for defind or write data in Property
     */
    set ID(newId){
        this.#id = newId
    }
    get ID(){
        return this.#id
    }
    set Password(NewPassword){
        this.#password = NewPassword
    }
    get Password(){
        return this.#password
    }
    
    //constructor(){ }
    constructor(name,password){
        //this.id, this.password is property
        //name, password is value 
        this.#id = name
        this.#password = password
        //console.log(`Called Constructor -> Id: ${this.id = name} Password: ${this.password = password}`);
    }
    
    //method 
    showDetail=()=>{console.log(`Id: ${this.#id}, Password: ${this.#password}`)}
    
    //TODO Step 2: สร้าง Method for push object to Array (โจทย์ Static)
    static PushData=(NewUser)=>this.database_for_objectArray.push(NewUser);
 
}

//Object
const Obj_UserLogIn = new UserLogIn()
//console.log(`Id: ${Obj_UserLogIn.id} Password: ${Obj_UserLogIn.password}`);
//Obj_UserLogIn.ID = "NewId"
//Obj_UserLogIn.Password ="NewPWD"
//Obj_UserLogIn.password ="NewPassword"
//Obj_UserLogIn.showDetail();
//console.log(`${Obj_UserLogIn.ID} ${Obj_UserLogIn.Password}`);
//console.log(Math.PI);

//TODO Step 3: เก็บข้อมูล (โจทย์ Static)
UserLogIn.PushData(new UserLogIn("User_1",1234))
UserLogIn.PushData(new UserLogIn("User_2",1234));
UserLogIn.PushData(new UserLogIn("User_3",1234));
const User4 = new UserLogIn("User_4",1234);
UserLogIn.PushData(User4);
//TODO Step 4: แสดงผลข้อมูล (โจทย์ Static)
/* for (const user of UserLogIn.database_for_objectArray) {
    user.showDetail()
} */
UserLogIn.database_for_objectArray.forEach((user)=>{user.showDetail()})
