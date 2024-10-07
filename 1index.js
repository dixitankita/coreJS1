function gradeStudent(marks) {
    if (marks > 90) {
        return "A Grade";
    } else if (marks >= 70 && marks <= 90) {
        return "B Grade";
    } else if (marks >= 50 && marks < 70) {
        return "C Grade";
    } else {
        return "F Grade";
    }
}

// Example usage
const studentMarks = [95, 85, 65, 45, 72, 89, 50];
studentMarks.forEach((marks) => {
    const grade = gradeStudent(marks);
    console.log(`Marks: ${marks}, Grade: ${grade}`);
});
