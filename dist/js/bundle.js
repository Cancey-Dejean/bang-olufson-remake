(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var scrollpos = window.scrollY;
var header = document.querySelector("header");
var objectSelect = document.querySelector(".beoplay");
var objectPosition = objectSelect.offsetTop;
var header_height = header.offsetHeight;

var add_class_on_scroll = function add_class_on_scroll() {
  return header.classList.add("active-header");
};
var remove_class_on_scroll = function remove_class_on_scroll() {
  return header.classList.remove("active-header");
};

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= objectPosition) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }

  console.log(scrollpos);
});

// Parallax Images
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");

new simpleParallax(image1, {
  delay: 1,
  orientation: "left"
});

new simpleParallax(image2, {
  delay: 2,
  orientation: "right"
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLFlBQVksT0FBTyxPQUF2QjtBQUNBLElBQU0sU0FBUyxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZjtBQUNBLElBQU0sZUFBZSxTQUFTLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBckI7QUFDQSxJQUFNLGlCQUFpQixhQUFhLFNBQXBDO0FBQ0EsSUFBTSxnQkFBZ0IsT0FBTyxZQUE3Qjs7QUFFQSxJQUFNLHNCQUFzQixTQUF0QixtQkFBc0I7QUFBQSxTQUFNLE9BQU8sU0FBUCxDQUFpQixHQUFqQixDQUFxQixlQUFyQixDQUFOO0FBQUEsQ0FBNUI7QUFDQSxJQUFNLHlCQUF5QixTQUF6QixzQkFBeUI7QUFBQSxTQUFNLE9BQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixlQUF4QixDQUFOO0FBQUEsQ0FBL0I7O0FBRUEsT0FBTyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFZO0FBQzVDLGNBQVksT0FBTyxPQUFuQjs7QUFFQSxNQUFJLGFBQWEsY0FBakIsRUFBaUM7QUFDL0I7QUFDRCxHQUZELE1BRU87QUFDTDtBQUNEOztBQUVELFVBQVEsR0FBUixDQUFZLFNBQVo7QUFDRCxDQVZEOztBQVlBO0FBQ0EsSUFBTSxTQUFTLFNBQVMsYUFBVCxDQUF1QixPQUF2QixDQUFmO0FBQ0EsSUFBTSxTQUFTLFNBQVMsYUFBVCxDQUF1QixPQUF2QixDQUFmOztBQUVBLElBQUksY0FBSixDQUFtQixNQUFuQixFQUEyQjtBQUN6QixTQUFPLENBRGtCO0FBRXpCLGVBQWE7QUFGWSxDQUEzQjs7QUFLQSxJQUFJLGNBQUosQ0FBbUIsTUFBbkIsRUFBMkI7QUFDekIsU0FBTyxDQURrQjtBQUV6QixlQUFhO0FBRlksQ0FBM0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJsZXQgc2Nyb2xscG9zID0gd2luZG93LnNjcm9sbFk7XHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIik7XHJcbmNvbnN0IG9iamVjdFNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmVvcGxheVwiKTtcclxuY29uc3Qgb2JqZWN0UG9zaXRpb24gPSBvYmplY3RTZWxlY3Qub2Zmc2V0VG9wO1xyXG5jb25zdCBoZWFkZXJfaGVpZ2h0ID0gaGVhZGVyLm9mZnNldEhlaWdodDtcclxuXHJcbmNvbnN0IGFkZF9jbGFzc19vbl9zY3JvbGwgPSAoKSA9PiBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1oZWFkZXJcIik7XHJcbmNvbnN0IHJlbW92ZV9jbGFzc19vbl9zY3JvbGwgPSAoKSA9PiBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1oZWFkZXJcIik7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgc2Nyb2xscG9zID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG4gIGlmIChzY3JvbGxwb3MgPj0gb2JqZWN0UG9zaXRpb24pIHtcclxuICAgIGFkZF9jbGFzc19vbl9zY3JvbGwoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVtb3ZlX2NsYXNzX29uX3Njcm9sbCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coc2Nyb2xscG9zKTtcclxufSk7XHJcblxyXG4vLyBQYXJhbGxheCBJbWFnZXNcclxuY29uc3QgaW1hZ2UxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbWcxXCIpO1xyXG5jb25zdCBpbWFnZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmltZzJcIik7XHJcblxyXG5uZXcgc2ltcGxlUGFyYWxsYXgoaW1hZ2UxLCB7XHJcbiAgZGVsYXk6IDEsXHJcbiAgb3JpZW50YXRpb246IFwibGVmdFwiLFxyXG59KTtcclxuXHJcbm5ldyBzaW1wbGVQYXJhbGxheChpbWFnZTIsIHtcclxuICBkZWxheTogMixcclxuICBvcmllbnRhdGlvbjogXCJyaWdodFwiLFxyXG59KTtcclxuIl19
