class People {
    constructor(name: string) {
        (this as any).name = name;
    }
}

class A extends People {
    constructor(name: string) {
        super(name);
    }

    sayName() {
        console.log('I am A');
    }
}

class B extends People {
    constructor(name: string) {
        super(name);
    }

    sayName() {
        console.log('I am B');
    }
}
export { A, B};
