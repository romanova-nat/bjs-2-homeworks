function Student(name, gender, age) {
    this.name = name,
    this.gender = gender,
    this.age = age,
    this.marks = []
}

let student1 = new Student("Ivan", "male", 21);
let student2 = new Student("Oled", "male", 18);
let student3 = new Student("Anna", "female", 19);


Student.prototype.setSubject = function (subjectName) {
 this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (this.hasOwnProperty("marks")) {
   this.marks.push(...marksToAdd);
  } else {
    return this.excluded;
  }
}

Student.prototype.getAverage = function () {
  if (!this.hasOwnProperty("marks")) {
   return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
   }
   return sum / this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
    return this.excluded;
}