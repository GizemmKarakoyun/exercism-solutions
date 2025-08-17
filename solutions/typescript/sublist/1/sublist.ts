type Comparison = "sublist" | "superlist" | "equal" | "unequal";

function isSublist(first: number[], second: number[]): boolean {
    const firstLength = first.length;
    if (firstLength === 0) {
        return true;
    }
    const secondLength = second.length;
    const secondFinal = secondLength - firstLength;

    outer:
    for (let secondIndex = 0; secondIndex <= secondFinal; secondIndex++) {
        for (let firstIndex = 0; firstIndex < firstLength; firstIndex++) {
            if (first[firstIndex] !== second[secondIndex + firstIndex]) {
                continue outer;
            }
        }
        return true;
    }

    return false;
}


export class List {
    ns: number[];

    constructor(...ns: number[]) {
        this.ns = ns;
    }

    compare(other: List): Comparison {
        const firstIsSublist = isSublist(this.ns, other.ns);
        const secondIsSublist = isSublist(other.ns, this.ns);

        if (firstIsSublist) {
            return secondIsSublist ? "equal" : "sublist";
        } else {
            return secondIsSublist ? "superlist" : "unequal";
        }
    }
}
