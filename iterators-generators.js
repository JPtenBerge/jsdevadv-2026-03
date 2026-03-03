// iterator
let obj = {
	x: 24,
	y: 'hoi',
	favorieteDranken: ['Sprite', 'Chocolademelk'],
	favorieteChips: ['Wokkels paprika', 'Nibb-it rings'],
	[Symbol.iterator]() {
		// iterator pattern
		let alles = [...this.favorieteChips, ...this.favorieteDranken];
		alles = alles.toSorted();
		let index = 0;
		return {
			next() {
				return {
					value: alles[index],
					done: ++index > alles.length,
				};
			},
		};
	},
};

// "falsey" values - soort van false. 8.
// false undefined null NaN 0 '' -0 0n

let lijst = [2, 4, 7, 98];

// itereert over iets - set map array
for (let prop in obj) {
	// reflection  - discouraged
	console.log(prop, obj[prop]);
}
for (let item of Object.keys(obj)) {
	// reflection - improved
	console.log(item);
}

for (let item of obj) {
	console.log(item);
}

// for (... of)

// JS engines:
// - V8: Node Deno Chromium
// - SpiderMonkey: Firefox
// - JavaScriptCore: Safari
// - Chakra/ChakraCore: Edge

// generator

function* gen() {
	console.log('eerste');
	yield 4; // deelresultaat
	console.log('tweede');
	yield 8;
	console.log('derde');
	yield 15;
	console.log('vierde');
	yield 16;
	console.log('vijfde');
	yield 23;
	console.log('zesde');
	yield 42;
}

let source = gen();
let eerste = source.next();
console.log(eerste.value);

let tweede = source.next();
console.log(tweede.value);

// for (let item of gen()) {
//     console.log('gen item:', item);
// }

function* traverseNode(node) {
	yield* node.left;
	yield node.value;
	yield* node.right;
}

// for await (let conn of server) {
// }
