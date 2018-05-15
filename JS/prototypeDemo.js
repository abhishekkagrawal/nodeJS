function Employee(firstName ,lastName , basicSalary){
    this.firstName= firstName;
    this.lastName= lastName;
    this.basicSalary= basicSalary; 
    this.totalSalary=0;
    this.calculateTotalSalary= function(){
        this.hra=this.basicSalary*10/100;
        this.ta=this.basicSalary*8/100;
        this.da=this.basicSalary*7/100;
        this.totalSalary=this.basicSalary+this.hra+this.da+this.ta;
        return this.totalSalary;
    }
}
Employee.prototype.email="default@gmail.com"
Employee.prototype.fullName=function(){
    return this.firstName+" "+this.lastName
}
var employee1 = new Employee("Satish" ,"Mahajan",15000);
employee1.email="satish.a.mahajan@capgemini.com"

var employee2 = new Employee("Raj" ,"Kumar",15000);
employee2.email="raj@capgemini.com"

console.log(employee1.email)
console.log(employee1.fullName())

console.log(employee2.email)
console.log(employee2.fullName())