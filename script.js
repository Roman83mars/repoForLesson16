'use strict'

class First {
    constructor() {

    }
    hello() {
        console.log('Привет я метод родителя!');
    }
}

class Second extends First {
    constructor() {

    }
}