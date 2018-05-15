function Employee(firstName ,lastName , basicSalary){
    this.firstName= firstName;
    this.lastName= lastName;
    this.basicSalary= basicSalary; 
    this.hra =0;
    this.da=0;
    this.ta=0;
    this.totalSalary=0;
    this.fullName= function(){
        return this.firstName+" "+this.lastName;
    } 
    this.calculateTotalSalary= function(){
        this.hra=this.basicSalary*10/100;
        this.ta=this.basicSalary*8/100;
        this.da=this.basicSalary*7/100;
        this.totalSalary=this.basicSalary+this.hra+this.da+this.ta;
        return this.totalSalary;
    }
}
var employee1 = new Employee('Satish' ,'Mahajan' ,15000)

console.log(employee1.fullName()+' '+employee1.calculateTotalSalary())

var employee2 = new Employee('Kumar' ,'Raj' ,15000)

console.log(employee2.fullName()+' '+employee2.calculateTotalSalary())