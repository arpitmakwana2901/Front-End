class Employee{
    constructor(name,salary){
        this.name = name;
        this.salary = salary;
    }
    annualSalary(){
        return this.salary*12;
    }
}

class Manager extends Employee{
    constructor(name,salary, department, bonus){
        super(name,salary)
        this.department = department;
        this.bonus = bonus;
    }

    annualSalary(){
        return (this.salary*12) + this.bonus;
    }
}

const emp1 = new Manager("jay",10000,"HR",80000)
console.log(`${emp1.name} Annual Salary:${  emp1.annualSalary()}`);
