function log(message) {
    console.log(message);
}
function add(a, b) {
    return a + b;
}
var add1 = function (a, b) {
    return a + b;
};
var add2 = function (a, b) {
    return a + b;
};
var add3 = function (a, b) { return a + b; };
var add4 = function (nilai) { return nilai.a + nilai.b; };
console.log(add3(1, 2));
console.log(add4({ a: 1, b: 2 }));
//nilai default parameter
var add5 = function (a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
};
console.log(add5(1));
//optional parameter
var add6 = function (a, b) { return a + (b || a); };
console.log(add6(1)); //-> 2
console.log(add6(1, 2)); //-> 3
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.display = function () {
        console.log(this.name);
    };
    return Person;
}());
var cetakPerson = function (p) {
    // console.log(p.name);
    p.display();
};
var p1 = new Person("andi");
cetakPerson(p1);
