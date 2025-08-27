
# Prototype Constructor Questions 

### 1. Vehicle Constructor

**Question:**  
Create a `Vehicle` constructor function in JavaScript that takes `type`, `wheels`, and `speed` as parameters. Use the prototype to add a method called `describe` that prints out, "This is a [type] with [wheels] wheels, and it can go up to [speed] km/h."

```javascript
function Vehicle(type, wheels, speed) {
    this.type = type;
    this.wheels = wheels;
    this.speed = speed;
}

Vehicle.prototype.describe = function() {
    console.log(\`This is a \${this.type} with \${this.wheels} wheels, and it can go up to \${this.speed} km/h.\`);
};

// Example Usage
let car = new Vehicle("Car", 4, 200);
car.describe();
```

*Hint:*  
Remember to use `this` in the constructor to assign the properties. In the `describe` method on the prototype, you’ll use `this` again to access these properties.

---

### 2. Library Book Constructor

**Question:**  
Design a `Book` constructor function that accepts `title`, `author`, and `year`. Add a prototype method called `getBookInfo` that returns a string like, "Title: [title], Author: [author], Year: [year]."

```javascript
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getBookInfo = function() {
    return \`Title: \${this.title}, Author: \${this.author}, Year: \${this.year}\`;
};

// Example Usage
let book = new Book("1984", "George Orwell", 1949);
console.log(book.getBookInfo());
```

*Hint:*  
Think of `Book` as a general blueprint for all books. The `getBookInfo` method should access the book’s properties through `this`.

---

### 3. Bank Account Constructor

**Question:**  
Build a `BankAccount` constructor function with `accountNumber`, `balance`, and `accountHolder` as properties. Add a prototype method `deposit(amount)` that increases the balance by the given amount and logs the new balance.

```javascript
function BankAccount(accountNumber, balance, accountHolder) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.accountHolder = accountHolder;
}

BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log("New Balance:", this.balance);
};

// Example Usage
let account = new BankAccount("123456", 500, "Alice");
account.deposit(200);
```

*Hint:*  
Use `this.balance` in the `deposit` method to update and access the account’s current balance. Test this by creating an account and depositing some amount to see the updated balance.

---

### 4. Employee Constructor

**Question:**  
Create an `Employee` constructor function with `name`, `position`, and `salary` properties. Use prototypes to add a `giveRaise` method that increases the employee's salary by a given percentage and logs the updated salary.

```javascript
function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
}

Employee.prototype.giveRaise = function(percentage) {
    this.salary += this.salary * (percentage / 100);
    console.log("New Salary:", this.salary);
};

// Example Usage
let employee = new Employee("John", "Developer", 50000);
employee.giveRaise(10);
```

*Hint:*  
Think about how to calculate a percentage-based raise: multiply the current salary by the raise percentage divided by 100, then add it to `this.salary`.

---

### 5. Movie Constructor

**Question:**  
Construct a `Movie` function that takes in `title`, `genre`, and `rating` as parameters. Use the prototype to add a method `rate(newRating)` that updates the movie's rating and logs, "The new rating for [title] is [newRating]."

```javascript
function Movie(title, genre, rating) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
}

Movie.prototype.rate = function(newRating) {
    this.rating = newRating;
    console.log(\`The new rating for \${this.title} is \${newRating}\`);
};

// Example Usage
let movie = new Movie("Inception", "Sci-Fi", 9);
movie.rate(9.5);
```

*Hint:*  
In the `rate` method, you’ll use `this.rating` to set the new rating for the movie and `this.title` to access the movie’s title.
