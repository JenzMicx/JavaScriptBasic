class User{
     
    _id ; //เปลี่ยนจาก private(#id;) ให้เป็น protected(_id;)
    #password ;
    static database_for_objectArray =[];

    set ID(newId){
        this._id = newId
    }
    get ID(){
        return this._id
    }
    set Password(NewPassword){
        this.#password = NewPassword
    }
    get Password(){
        return this.#password
    }

    constructor(name,password){
        this.#id = name
        this.#password = password
        
    }
    
    //method 
    showDetail=()=>{console.log(`Id: ${this._id}, Password: ${this.#password}`)}
    static PushData=(NewUser)=>this.database_for_objectArray.push(NewUser);
    
}
//Subclass จะไม่สามารถเข้าถึง private property ของ parentclass ได้เลยถ้าหากไม่ใช้ protector 
class Student extends User{
    #score
    //ถ้าไม่มี constructor ก็จะใช้ของ parent class
    constructor(name, password,score){
        super(name,password) //super คือเรียกใช้งาน costructor class แม่
        this.#score = score;
        //console.log("Constructor of Student")
    }
    showDetail=()=>{
        console.log(this._id)
        //console.log("Overriding Method of Student: have score "+this.#score)
    }
}
class Teacher extends User{
    #course
    //ถ้าไม่มี constructor ก็จะใช้ของ parent class
    //ซึ่งโครงสร้าง constutor จะต้องเหมือนของแม่ด้วยถ้าจะสร้างมาใน subclass
    constructor(name,password,course){
        super(name,password)
        this.#course=course
    //console.log("Constructor of Teacher")

    }
}

//object
const Teacher = new Teacher()
//Teacher.ID="Teacher_1";
Teacher.Password=123456789;
Teacher.course="Math"
Teacher.showDetail();

//object
const Student = new Student()
Student.ID="Student_1";
Student.Password=987654321;
Student.score=56;
Student.showDetail();

