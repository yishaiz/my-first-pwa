importScripts('scripts/worker-scripts.js');

let temp = GetSomething();
console.log(temp);

self.addEventListener('install', (event) => {
    console.log(event);
    // debugger;
});

self.addEventListener('activate', (event) => {
    console.log(event)
});

self.addEventListener('fetch', (event) => {
    console.log('fetch', event);
    console.log(event.request, url);
});

