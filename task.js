// primitive data types

// 1. Student name.
let studentname = "sai";
console.log(typeof studentname);

// 2. Employee age.
let employeeAge = 25;
console.log(typeof employeeAge);

// 3. is working.
let isworking = true;
console.log(typeof isworking);

// 4. variable without value.
let employeeSalary;

console.log(employeeSalary);

// 5. create five variables.
let name = "Sai Kumar";
let age = 26;
let working = true;
let course;
let nullResult = null;

// 6.print data types.
console.log(name);
console.log(age);
console.log(working);
console.log(course);
console.log(nullResult);

//7. course name
let courseName = "JavaScript";
console.log(courseName);

//8.create a variabele batchNumber.
let batchNumber = 5;
console.log(typeof batchNumber);

// 9. Five fruits
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits);

// 10. First element
console.log(fruits[0]);

// 11. Third element
console.log(fruits[2]);

// 12. Last element
console.log(fruits[fruits.length - 1]);

// 13. Personal details
let person = ["Sai Kumar", 26, "Tirupati", "Developer"];
console.log(person);

// 14. Print each element
console.log(person[0]);
console.log(person[1]);
console.log(person[2]);
console.log(person[3]);

// 15. Different data types
let details = ["JavaScript", 100, true];
console.log(details);

// 16. Total elements
console.log(details.length);

// 17. Five mobile brands
let mobiles = ["Samsung", "Apple", "Vivo", "Oppo", "OnePlus"];
console.log(mobiles[1]);

// 18. Six programming languages
let languages = ["Java", "Python", "JavaScript", "C", "C++", "PHP"];
console.log(languages[5]);

// 19. Student object
let student = {
  name: "Sai Kumar",
  age: 26,
  city: "Tirupati",
};

console.log(student);

// 20. Student name
console.log(student.name);

// 21. Student age
console.log(student.age);

// 22. Employee object
let employee = {
  name: "Sai Kumar",
  salary: 25000,
  designation: "Developer",
};

console.log(employee);

// 23. Skills array inside object
let developer = {
  skills: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
};

console.log(developer.skills[2]);

// 24. Different properties
let myDetails = {
  fruit: "Apple",
  number: 10,
  isAvailable: true,
  toy: "Car",
};

console.log(myDetails);

// 25. Print toy
console.log(myDetails.toy);

// 26. Company object
let company = {
  companyName: "stackly",
  location: "Chennai",
  employeeCount: 100,
};

console.log(company);

// 27. Addition
let a = 10;
let b = 20;
console.log(a + b);

// 28. Subtraction
let c = 50;
let d = 20;
console.log(c - d);

// 29. Multiplication
let e = 2;
let f = 3;
let g = 4;
console.log(e * f * g);

// 30. Division
console.log(100 / 5);

// 31. Remainder
console.log(25 % 4);

// 32. Exponentiation
console.log(3 ** 4);

// 33. All six operations
let numb1 = 20;
let numb2 = 5;

console.log(numb1 + numb2);
console.log(numb1 - numb2);
console.log(numb1 * numb2);
console.log(numb1 / numb2);
console.log(numb1 % numb2);
console.log(numb1 ** numb2);

//34. Pre-increment

let number = 10;
console.log(++number);

//35.Post-increment
let number2 = 20;
console.log(number2++);
console.log(number2);

//36. Pre-decrement
let number3 = 30;
console.log(--number3);

//37. Post-decrement
let number4 = 40;
console.log(number4--);
console.log(number4);

//38. Post-increment
let A = 10;
let B = A++;

console.log(A);
console.log(B);

//39. Pre-increment
let x = 15;
let y = ++x;

console.log(x);
console.log(y);

//40. Final values
let num1 = 25;
let num2 = --num1;
let num3 = num2++;
let num4 = ++num3;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
