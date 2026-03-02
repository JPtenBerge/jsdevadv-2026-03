console.log(' hoo');

test();
test(42, 108);
window.test(42, 108);

// overloading bestaat niet in JS.

function test() {
    console.log('hallo vanaf test');
}

function test(p1, p2) {
    console.log('hallo vanaf test met params', p1, p2);
}

// global object
// window // browser
// global // Node.js Deno bun


// globalThis