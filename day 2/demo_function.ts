function log(message: string): void {
    console.log(message);
}

function add(a:number, b:number): number {
    return a + b;
}
let add1 = function(a: number, b: number): number {
    return a + b;
}
let add2 = (a: number, b: number): number => {
    return a + b;
}
let add3 = (a: number, b: number): number => a + b;

let add4 = (nilai):number => nilai.a + nilai.b;

console.log(add3(1,2));
console.log(add4({a: 1, b: 2}));

//nilai default parameter
let add5 = (a: number, b: number = 10): number => a + b;
console.log(add5(1));

//optional parameter
let add6 = (a: number, b?: number): number => a + (b || a);

console.log(add6(1));//-> 2
console.log(add6(1,2));//-> 3

class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    display(): void {
        console.log(this.name);
    }
}

let cetakPerson = (p: Person): void => {
    // console.log(p.name);
    p.display();
}
let p1 = new Person("andi");
cetakPerson(p1);
//test update from remote