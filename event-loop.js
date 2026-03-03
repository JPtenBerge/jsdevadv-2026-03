import { readFile} from 'fs';

console.log('start');
readFile('boek.txt', 'utf-8', (err, content) => {
    console.log('content:', content.substring(0, 50));
});

setTimeout(() => {
    console.log('hoi vanaf timeout');
}, 0);

for (let i = 0; i < 150_000; i++) {
    console.log('i:', i);
}

console.log('eind');