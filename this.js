'use strict';

// this wijst standaard naar de eigenaar van de functie.
// - window voor globale functies
//   - undefined
// arrow functions staat niet toe dat this wordt overschreven

let obj = {
    x: 24,
    y: 'hoi',
    doe()  {
        console.log('doe this:', this);
        // this.x = 1234;
    }
}

// console.log(this);
obj.doe();

let func = obj.doe;
func();

func.call({ x: 'wooooow' }, 14, 42);
func.apply({ x: 'wooooow 2' }, [14, 42]);
let gebindeFunc = func.bind({ x: 'wooooow 3' });
gebindeFunc();
gebindeFunc();
gebindeFunc();
gebindeFunc();

// export class Home {

//     products;
//     http;

//     getAll() {
//         this.http.get('api/products').then(products => {
//             this.products = products;
//         });
//     }
// }