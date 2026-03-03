'use strict';

// encapsulation
// - dat de buitenwereld van jouw spul afblijft

// manieren om voor elkaar te krijgen:
// - closure
// - private
// - proxy
// - getters/setters
// - conventie
// - configuratie


// let regex = /^[0-9]{4} ?[A-Z]{2}$/;


class Human {
    #birthYear;
    _blabla;

    get age() {
        return new Date().getFullYear() - this.#birthYear;
    }
    set age(value) {
        if (value > 120) throw new Error('geldige leeftijd graag')
        this.#birthYear = new Date().getFullYear() - value;
    }
}

let jp = new Human();
jp.age = 26;
console.log(jp.age);
// console.log(jp.#birthYear);

// private of #

// (jouwService as any).birthYear


let obj = { x: 24, y: 'hoi' };
// Object.preventExtensions(obj);

// Object.defineProperty(obj, 'nieuwe-prop', {

// })
Object.freeze(obj);
// obj.y = 'iets anders';
console.log(obj.y);
// obj.z = 27484;
console.log(obj);

obj = 'sdhffdjkg';
