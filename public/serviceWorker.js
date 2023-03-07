this.addEventListener("install", event => {
  console.log("Service worker installed");
});
this.addEventListener("activate", event => {
  console.log("Service worker activated");
});
this.addEventListener('fetch', event => {
  console.log("Service worker fetch", event);
});
