function A() {

    this.sayHehe = function () {
        console.log("hehe");
    };
}

A.prototype.sayHello = function () {
    console.log("Hello Js");
}

A.sayHi = function () {
    console.log("Hello dear");
}

var  a = new A();
a.sayHello();
A.sayHi();

function B() {

}
B.prototype = new A();

var b = new B();
b.sayHello();
b.sayHehe();