function Employee(firstName ,lastName , basicSalary){
    this.firstName= firstName;
    this.lastName= lastName;
    this.basicSalary= basicSalary; 
    this.totalSalary=0;
    this.calculateTotalSalary=()=>{
        this.totalSalary=this.basicSalary
        return this.totalSalary;
    }
}

Employee.prototype.email="default@capgemini.com";
Employee.prototype.fullName=function(){
    return this.firstName+" "+this.lastName
}
function Pemployee(firstName ,lastName , basicSalary){
    this.hra=0;
    this.ta=0;
    this.da=0;
    Employee.call(this,firstName ,lastName , basicSalary)
    this.calculateTotalSalary= function(){
        this.hra=this.basicSalary*10/100;
        this.ta=this.basicSalary*8/100;
        this.da=this.basicSalary*7/100;
        this.totalSalary=this.basicSalary+this.hra+this.da+this.ta;
        return this.totalSalary;
    }
}
var pemp = new Pemployee("Kumar" , "Nilesh" );
Pemployee.prototype.email="default@capgemini.com";
Pemployee.prototype.fullName=function(){
    return this.firstName+" "+this.lastName
}

pemp.email="kumar@gmail.com"
console.log(pemp.firstName)
console.log(pemp.email)
console.log(pemp.fullName())