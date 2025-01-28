function Course(title,instructor, duration,studentsEnrolled){
    this.title = title;
    this.instructor = instructor;
    this.duration = duration;
    this.studentsEnrolled = studentsEnrolled;
}

Course.prototype.print = function(){
    return `Title:${this.title}, Instructor:${this.instructor}, Duration:${this.duration}, StuEnr:${this.studentsEnrolled}`
}

let student = new Course("java","node","1hour","yes")
console.log(student.print())