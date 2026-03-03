console.log('Object.is(4, 4)', Object.is(4, 4));
console.log('Object.is(hoi, hoi)', Object.is('hoi', 'hoi'));
console.log('Object.is({}, {})', Object.is({}, {}));
console.log('NaN === NaN', NaN === NaN);
console.log('Object.is(NaN, NaN)', Object.is(NaN, NaN));
console.log('Object.is(0, -0)', Object.is(0, -0));
console.log('0 === -0', 0 === -0);

if (7 / 'bla' === 14 / 'qwert') {
}

if (Number.isNaN(7 / 'bla')) {
	console.log('nannnnn');
} else {
	console.log('noNaN');
}

let target = { x: 24, y: 'hoi' };
let obj = { z: [1,2,3] };
Object.assign(target, obj);

console.log(target);

console.log({ ...target, mijnEigenProp: 'wauw' });

// object clonen

// veelgeziene techniek
let copy1 = JSON.parse(JSON.stringify(obj)); // deep clone
let copy2 = { ...obj }; // shallow clone
let copy3 = structuredClone(obj); // deep clone
