

const DEFAULT_STUDENTS: Student[] = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Fred',
    'Ginny',
    'Harriet',
    'Ileana',
    'Joseph',
    'Kincaid',
    'Larry',
]

const PLANT_CODES: { [key: string]: string } = {
    G: 'grass',
    V: 'violets',
    R: 'radishes',
    C: 'clover',
} as const

type Student = string;
type Plant = typeof PLANT_CODES[keyof typeof PLANT_CODES];
type Plants = Plant[];

export class Garden {
  private diagram: string[];
  private students: Student[];

  constructor(diagram: string, students = DEFAULT_STUDENTS) {
    this.diagram = diagram.split('\n');

    this.students = students.slice().sort();
  }

  public plants(student: Student): Plants {
    const i = this.students.indexOf(student);
    if (i === -1) return []; 

  
    return this.diagram.flatMap(row => 
      row.slice(2 * i, 2 * i + 2).split('').map(code => PLANT_CODES[code])
    );
  }
}