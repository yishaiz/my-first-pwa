importScripts('scripts/worker-scripts.js');
var temp = GetSomething();
console.log(temp);
self.addEventListener('install', function (event) {
    console.log(event);
    // debugger;
});
self.addEventListener('activate', function (event) {
    console.log(event);
});
self.addEventListener('fetch', function (event) {
    console.log('fetch', event);
    console.log(event.request, url);
});
