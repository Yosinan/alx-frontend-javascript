export default function getStudentIdsSum(students) {
    if (Array.isArray(students)) {
        return students.map((student) => student.id).reduce((accumulator, currentValue) => accumulator + currentValue);
    }
    
    return [];
    }
