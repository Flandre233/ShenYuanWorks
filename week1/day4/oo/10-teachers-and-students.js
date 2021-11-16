class Student {
  learn() {
    console.log(`the student is learning something new`)
  }
  question(teacher) {
    teacher.answer()
  }
}

class Teacher {
  teach(student) {
    student.learn()
  }
  answer() {
    console.log(`the teacher is answering a question`)
  }
}

const student = new Student()
const teacher = new Teacher()

student.question(teacher)
teacher.teach(student)