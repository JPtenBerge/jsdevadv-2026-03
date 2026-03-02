'use strict';

// Set
// => soort array. geen volgorde. geen duplicaten (values!)

let setje = new Set();
setje.add(4);
setje.add(4);
setje.add(8);
setje.add(4);
setje.add('4');
setje.add(5 - '4');
console.log(setje);

console.log(setje.size);

// Map - key/value  hashmap  dictionary
let mappie = new Map();
mappie.set('q', 'w');
mappie.set('t', 42);
mappie.set('🔥', [1, 2, 3]);
mappie.set(setje, [1, 2, 3]);
mappie.set({}, [1, 2, 3]);
mappie.set([], [1, 2, 3]);

for (let [key, value] of mappie) {
	console.log(key, value);
}
console.log(mappie);

for (let key of Object.keys(obj)) {
}

// hoe verschilt een Map van een gewoon JS obj?
// - ingebouwd .entries .keys
// - meteen size ophalen ipv moeten tellen middels Object.keys().length
// - Map = performance++
// - Map ondersteunt complexe keys, gewoon JS obj kan enkel strings


// DOM-elementen

// WeakSet
// WeakMap
