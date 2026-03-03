// proxy
let target = { x: 24, y: 'hoi' };
let proxy = new Proxy(target, {
	get(target, prop) {
		console.log('hey er wordt een get gedaan', prop);

		return target[prop];
	},
	set(target, prop, value) {
        if (typeof value === 'string' && !value.startsWith('hoi')) {
            throw new Error('begint niet met hoi');
        }

		target[prop] = value;
	},
});

// class HUman  {
//     set age() {

//     }
// };


console.log(proxy.x);
console.log(proxy.y);
proxy.y = 'hoi iets anders';
console.log(proxy.y);

// use cases:
// - auditen
// - stukje validatie
// - Angular HttpClient  this.http.get()   HttpClientController
//   - KAN maar wordt niet gedaan
// - unittesten - mocken!
//   - Jest / Vitest / Karma/Jasmine (voorheen Angular)
//     - allemaal niet.
// - Vue voor reactivity

// Dart (Flutter)   VBScript


// reflection = types van programma inspecteren

// var types = Assembly.GetExecutingAssembly().GetTypes();
// foreach (var type in types) {
// type.GetMethods()  type.GetProperties()  type.GetConstructor().Invoke()
// }