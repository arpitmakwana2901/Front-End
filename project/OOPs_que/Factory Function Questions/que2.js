function createReportCard(name,grade,subject){
    object = {};
    object.name= name;
    object.grade = grade;
    object.subject = subject;
    object.print = function(data){
        console.log(`Name:${this.name} Grade:${this.grade},Subject:${this.subject} Data:${data}`)
    }
    return object;

}

let student1 = createReportCard("superman","A","html");
console.log(student1);

let student2 = createReportCard("Badman","B","java");
console.log(student2);

let student3 = createReportCard("man","C","CSS");
console.log(student3);

student1.print("Good Performance");
student2.print("Avg Performance");
student3.print("Low Performance");
