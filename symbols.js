
// primitieven maar geen primitieven
// - iets uniek te adresseren
//   => GUID


let sym = Symbol('eerste');
let sym2 = Symbol('tweede');



console.log(sym);
console.log('sym == sym2?', sym == sym2);
console.log('sym === sym2?', sym === sym2);

// computed property name
let suffix = 'name';

let obj = {
    x: 24,
    y: 'hoi',
    ['first' + suffix]: 'JP',
    ['last' + suffix]: 'tB',
    [sym]: 'mijn symbolische waarde',
    [sym2]: 'mijn symbolische waarde 2',
    toString() {
        console.log('kom ik hier');
        return 'heuj';
    },
    [Symbol.toPrimitive]() {
        return 'overrulende heuj';
    }
};
console.log(obj);
console.log(obj[sym]);
console.log(obj[sym2]);

let bla = Number(42);
let bla2 = BigInt(42);


console.log(`obj: ${obj}`);
