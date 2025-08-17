// grade-school.ts
export class GradeSchool {
  private db: Record<number, string[]> = {}

  roster(): Record<number, string[]> {
    // Derin kopya, dışarıdan değiştirmeyi engeller
    return Object.fromEntries(
      Object.entries(this.db).map(([grade, students]) => [Number(grade), [...students]])
    )
  }

  grade(n: number): string[] {
    return this.db[n] ? [...this.db[n]] : []
  }

  add(student: string, grade: number): void {
    // Eğer öğrenci başka bir sınıfta varsa onu sil
    for (const students of Object.values(this.db)) {
      const index = students.indexOf(student)
      if (index !== -1) {
        students.splice(index, 1)
      }
    }

    if (!this.db[grade]) {
      this.db[grade] = []
    }

    this.db[grade].push(student)
    this.db[grade].sort()
  }
}
