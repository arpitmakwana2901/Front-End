function Room (roomNumber,type,price){
    this.roomNumber = roomNumber;
    this.type = type;
    this.price = price
}

Room.prototype.print = function(){
    return `Room Number:${this.roomNumber}, Type:${this.type}, Price:${this.price}`
}

let student = new Room(9,"One", 999)
console.log(student.print());