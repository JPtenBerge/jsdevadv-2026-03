// Java's Future
// C#'s Task

// belofte dat dit async werk - OF een resultaat OF een error

// eager
let prom = new Promise((resolve, reject) => {
	// async werk
	console.log('promise starten');
	setTimeout(() => {
		console.log('timeout klaar');
		resolve(18);
		resolve(2345678);
		resolve(1337);
		reject(42);
		console.log('hier kom ik');
	}, 1500);
});
prom.then(result => console.log('wow hij is klaar 1!', result)).catch(err => console.error('oh nee!', err));

// (async () => {
let result = await prom;
console.log('awaited:', result);
// })();

// prom.then(result => console.log('wow hij is klaar 2!', result));

// prom
//     .then(result => result * 10) // output van deze
//     .then(result => console.log('verwerkt result:', result)); // is input van deze

// fetch('api/products').then(x => x.json()).then(products => {
//     // ...
// });

// Observable - RxJS (Angular) - lazy

let prom1 = new Promise((res, rej) => setTimeout(() => rej('eerste stuk'), 1000));
let prom2 = new Promise(res => setTimeout(() => res('tweede'), 1500));
let prom3 = new Promise(res => setTimeout(() => res('derde'), 700));

// try {
    let results = await Promise.allSettled([prom1,prom2, prom3]);
    console.log('results:', results);
// }
// catch(err) {
//     console.log('oh neeeee', err);
// }