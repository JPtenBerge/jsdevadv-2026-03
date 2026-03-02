
// functie binnen functie die de context van datgene daarbuiten

// obj syntax

function counter() {
    let tellertje = 0; // state

    return {
        increment() {
            tellertje++;
            console.log('teller is na increment', tellertje);
        },
        decrement() {
            tellertje--;
            console.log('teller is na decrementen', tellertje);
        }
    }
}
let myCounter = counter();
myCounter.increment();
myCounter.increment();
myCounter.decrement();
myCounter.increment();


// functie syntax

// function counter() {
//     let tellertje = 0; // state

//     return function() {
//         tellertje++;
//         console.log('teller is nu', tellertje);
//     };
// }

// let myCounter = counter();
// myCounter();
// myCounter();
// myCounter();


// let mySecondCounter = counter();
// mySecondCounter();
// mySecondCounter();
// mySecondCounter();
// mySecondCounter();
// mySecondCounter();

// console.log('tellertje:', tellertje);