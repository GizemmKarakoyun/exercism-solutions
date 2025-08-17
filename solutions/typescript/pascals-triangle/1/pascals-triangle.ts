export class Triangle {
    private rows: number[][] = [];

    constructor(numRows: number) {
        this.generatePascalsTriangle(numRows);
    }

    private generatePascalsTriangle(numRows: number): void {
        for (let i = 0; i < numRows; i++) {
            if (i === 0) {
                this.rows.push([1]);
            } else {
                const prevRow = this.rows[i - 1];
                const newRow: number[] = [1];

                for (let j = 1; j < i; j++) {
                    newRow.push(prevRow[j - 1] + prevRow[j]);
                }

                newRow.push(1);
                this.rows.push(newRow);
            }
        }
    }

    get lastRow(): number[] {
        if (this.rows.length === 0) {
            return [];
        }
        return this.rows[this.rows.length - 1];
    }
}
