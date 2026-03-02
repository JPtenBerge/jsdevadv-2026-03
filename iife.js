

// Immediately Invoked Function Expression


function bla() { } // function declaration


!function() {
    console.log('hallo vanuit de iife');

    let hoi = 'q';
}();

console.log(hoi);

(() => {
    console.log('hallo vanuit de iiafe');
})();


// let bla = function() { // function expression
//     console.log('hallo vanuit de iife');
// }();

// console.log(hoi);