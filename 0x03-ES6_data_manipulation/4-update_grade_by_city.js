export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students) && Array.isArray(newGrades)) {
    return students.map((student) => {
      let grade = newGrades.filter((newGrade) => newGrade.studentId === student.id);
      if (grade.length === 0) {
        grade = { grade: 'N/A' };
      } else {
        grade = grade[0];
      }
      return { ...student, grade: grade.grade };
    }).filter((student) => student.location === city);
  }

  return [];
}
