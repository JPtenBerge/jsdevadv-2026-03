// overerving

function LivingBeing() {
	this.name = 'placeholder name';
}

function Human(name) {
	// constructor function
	this.name = name;
}
Human.prototype = new LivingBeing();
let jp = new Human('JP');

console.log(jp);
console.log(jp.name);

// class LevendWezen {
//     name = 'placeholder name';
// }

function LevendWezen() {
	this.name = 'weer een placeholder';
}

class Mens extends LevendWezen {
	// name;

	constructor(name) {
		super();
		// this.name = name;
	}
}
let jp2 = new Mens('JP');


Object.setPrototypeOf(jp2, { });

console.log(jp2);
console.log(jp2.name);

// extension methods


Date.prototype.getPrettyDate = function () {
    return `${this.getDate()}-${this.getMonth() + 1}-${this.getFullYear()}`;
};

let nu = new Date();
console.log(nu.toString('d-m-Y', 42, 42, 42, 'hoi'));

console.log(nu.getDate());
console.log(nu.getMonth() + 1);
console.log(nu.getFullYear());

console.log(nu.getPrettyDate());

