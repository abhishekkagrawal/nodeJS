function Employee(firstName ,lastName , basicSalary){
    this.firstName= firstName;
    this.lastName= lastName;
    this.basicSalary= basicSalary; 
    this.hra =0;
    this.da=0;
    this.ta=0;
    this.totalSalary=0;
    this.calculateTotalSalary=()=>{
        this.hra=this.basicSalary*10/100;
        this.ta=this.basicSalary*8/100;
        this.da=this.basicSalary*7/100;
        this.totalSalary=this.basicSalary+this.hra+this.da+this.ta;
        return this.totalSalary;
    }
    this.toString=()=>this.firstName+" "+this.lastName+" "+this.basicSalary+" "+this.hra+" "+this.ta+" "+this.da+" "+this.totalSalary;
}
var employee1 = new Employee("Satish" ,"Mahajan" ,15000)

var employee2 = new Employee("Kumar","Raj",20000);

employee1.calculateTotalSalary();

employee2.calculateTotalSalary()

console.log(employee1)
console.log("===========================================")
console.log(employee2)