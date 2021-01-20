class People {
    constructor(name) {
        this.name = name;
    }
}
class A extends People {
    constructor(name) {
        super(name);
    }
    sayName() {
        console.log('I am A');
    }
}
class B extends People {
    constructor(name) {
        super(name);
    }
    sayName() {
        console.log('I am B');
    }
}
export { A, B };
//# sourceMappingURL=dom.js.map