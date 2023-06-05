const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red = ColorRed, Green = ColorGreen, Blue = ColorBlue, Purple = 3};
let backgroundColor = Color.Red;

let message = 'abc';
let endsWithC = message.endsWith('c');

let course: number | string;
course = 1;
course = 'a';


function test(a: number, b: number): number {
    return a + b;
}

function printMessage(message: string): void {
    console.log(message);
}
let printMessage2 = (message: string) => console.log(message);
printMessage2('Hello world');

let drawPoint = (x: number, y: number, z:number) => {

}
let drawPoint2 = (point) => {
}
drawPoint2 ({
    x: 1,
    y: 2,
    z: 3
});

let drawPoint3 = (point: {x: number, y: number, z: number}) => {}

interface Point {
    x: number,
    y: number,
    z: number
}

let drawPoint4 = (point: Point) => {}
drawPoint4 ({x:343,y:4343,z:43});