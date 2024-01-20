//encapsulation:
//group related variables and 
//functions that operate on them to objects

//procedural implementation
let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage (baseSalary, overTime, rate) {
    return baseSalary + (overTime * rate);
};
//OOP
const employee = {
    baseSalary : 30000,
    overTime : 10,
    rate : 20,
    getWage(){
        return this.baseSalary + (this.overTime * this.rate);
    }

}
console.log(employee.getWage());

//