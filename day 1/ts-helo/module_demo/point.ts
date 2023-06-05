export class Point{
    x: number;
    y: number;
    z: number;

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y + ', Z: ' + this.z);
    }

    getDistance(another: Point) {
        // ...
    }
}

export class Point2{}