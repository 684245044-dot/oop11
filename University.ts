class student {
    constructor(private id: string, private name: string, private faculty: string) {}
    getstudentInfo(): string {
        return `นักศึกษารหัส ${this.id} ชื่อ ${this.name} คณะ ${this.faculty}`;
    }
}

class University {
    student: student[];
    teacher: teacher[];
    
    constructor(student: student[], teacher: teacher[]) {
        this.student = student;
        this.teacher = teacher;
    }
    
    showUniversityInfo(): void {
        console.log("University Information");
        console.log("teachers: ");
        this.teacher.forEach(t => console.log(t.getteacherInfo()));
        console.log("students: ");
        this.student.forEach(s => console.log(s.getstudentInfo()));
    }
}
class teacher {
    constructor(private name: string, private major: string) {}
    getteacherInfo(): string {
        return `ครูชื่อ ${this.name} สาขา ${this.major}`;
    }
    teach(student: student): void {
        console.log(`${this.getteacherInfo()} กำลังสอน ${student.getstudentInfo()}`);
    }
}
const student1 = new student("684245044", "ภาณุวัฒน์", "science");
const student2 = new student("684245045", "สมชาย", "science");
const student3 = new student("684245146", "สมหญิง", "Education");
const teacher1 = new teacher("ดร. สมพงษ์", "คอมพิวเตอร์");
const teacher2 = new teacher("ดร. อนันต์", "คณิตศาสตร์");
const npru = new University([student1, student2, student3], [teacher1, teacher2]);
npru.showUniversityInfo();
npru.showUniversityInfo();
console.log("=====================================================================================");
teacher1.teach(student1);
teacher1.teach(student2);
teacher2.teach(student3);