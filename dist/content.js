/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/content/index.js ***!
  \******************************/
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  var code;
  var go_local = message.go_local;

  if (go_local === false) {
    code = 'window.nwtServerDebugRef.off();';
    console.log('[GO LOCAL]: Switching off debug mode');
  } else if (go_local === true) {
    var port = message.port;
    var url = message.url;
    code = "window.nwtServerDebugRef.on('".concat(port, "', '").concat(url, "');");
    console.log("[GO LIVE] Switching on debug mode. Port=".concat(port, ", URL=").concat(url));
  } else {
    return;
  }

  script.appendChild(document.createTextNode(code));
  (document.head || document.documentElement).appendChild(script);
  script.remove();
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsU0FBZixDQUF5QkMsV0FBekIsQ0FBcUMsVUFBVUMsT0FBVixFQUFtQkMsTUFBbkIsRUFBMkJDLFlBQTNCLEVBQXlDO0VBQzVFLElBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWI7RUFDQUYsTUFBTSxDQUFDRyxJQUFQLEdBQWMsaUJBQWQ7RUFFQSxJQUFJQyxJQUFKO0VBQ0EsSUFBSUMsUUFBUSxHQUFHUixPQUFPLENBQUNRLFFBQXZCOztFQUVBLElBQUlBLFFBQVEsS0FBSyxLQUFqQixFQUF3QjtJQUN0QkQsSUFBSSxHQUFHLGlDQUFQO0lBQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNDQUFaO0VBQ0QsQ0FIRCxNQUdPLElBQUlGLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtJQUM1QixJQUFJRyxJQUFJLEdBQUdYLE9BQU8sQ0FBQ1csSUFBbkI7SUFDQSxJQUFJQyxHQUFHLEdBQUdaLE9BQU8sQ0FBQ1ksR0FBbEI7SUFFQUwsSUFBSSwwQ0FBbUNJLElBQW5DLGlCQUE4Q0MsR0FBOUMsUUFBSjtJQUNBSCxPQUFPLENBQUNDLEdBQVIsbURBQXVEQyxJQUF2RCxtQkFBb0VDLEdBQXBFO0VBQ0QsQ0FOTSxNQU1BO0lBQ0w7RUFDRDs7RUFFRFQsTUFBTSxDQUFDVSxXQUFQLENBQW1CVCxRQUFRLENBQUNVLGNBQVQsQ0FBd0JQLElBQXhCLENBQW5CO0VBRUMsQ0FBQ0gsUUFBUSxDQUFDVyxJQUFULElBQWlCWCxRQUFRLENBQUNZLGVBQTNCLEVBQTRDSCxXQUE1QyxDQUF3RFYsTUFBeEQ7RUFDREEsTUFBTSxDQUFDYyxNQUFQO0FBQ0QsQ0F4QkQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dvbG9jYWwvLi9zcmMvY29udGVudC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnXG5cbiAgbGV0IGNvZGVcbiAgbGV0IGdvX2xvY2FsID0gbWVzc2FnZS5nb19sb2NhbFxuXG4gIGlmIChnb19sb2NhbCA9PT0gZmFsc2UpIHtcbiAgICBjb2RlID0gJ3dpbmRvdy5ud3RTZXJ2ZXJEZWJ1Z1JlZi5vZmYoKTsnXG4gICAgY29uc29sZS5sb2coJ1tHTyBMT0NBTF06IFN3aXRjaGluZyBvZmYgZGVidWcgbW9kZScpXG4gIH0gZWxzZSBpZiAoZ29fbG9jYWwgPT09IHRydWUpIHtcbiAgICBsZXQgcG9ydCA9IG1lc3NhZ2UucG9ydFxuICAgIGxldCB1cmwgPSBtZXNzYWdlLnVybFxuXG4gICAgY29kZSA9IGB3aW5kb3cubnd0U2VydmVyRGVidWdSZWYub24oJyR7cG9ydH0nLCAnJHt1cmx9Jyk7YFxuICAgIGNvbnNvbGUubG9nKGBbR08gTElWRV0gU3dpdGNoaW5nIG9uIGRlYnVnIG1vZGUuIFBvcnQ9JHtwb3J0fSwgVVJMPSR7dXJsfWApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBzY3JpcHQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29kZSkpXG5cbiAgOyhkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICBzY3JpcHQucmVtb3ZlKClcbn0pXG4iXSwibmFtZXMiOlsiY2hyb21lIiwicnVudGltZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwibWVzc2FnZSIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJjb2RlIiwiZ29fbG9jYWwiLCJjb25zb2xlIiwibG9nIiwicG9ydCIsInVybCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJoZWFkIiwiZG9jdW1lbnRFbGVtZW50IiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==