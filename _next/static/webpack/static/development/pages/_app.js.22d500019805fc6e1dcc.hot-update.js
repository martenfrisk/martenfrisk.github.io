webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/App.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/App.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Bungee&family=Roboto&display=swap);"]);
// Module
exports.push([module.i, "body {\n  background-color: #fff;\n  margin: 0;\n  box-sizing: border-box;\n  width: 100vw;\n  height: 100%;\n}\n\n.text {\n  position: absolute;\n  font-size: 5rem;\n  width: 100%;\n  height: 25vh;\n  font-family: 'Bungee', sans-serif;\n  opacity: 0.7;\n  line-height: 7vh;\n  text-align: center;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  mix-blend-mode: multiply;\n  background: #fff;\n}\n\n.text::before {\n  content: '';\n  display: block;\n  position: absolute;\n  color: #fff;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: linear-gradient(-45deg, #f15bb5, #fee440, #00bbf9, #00f5d4, #9b5de5);\n  background-size: 400% 400%;\n  -webkit-animation: gradient 15s ease-in-out infinite;\n  animation: gradient 15s ease-in-out infinite;\n  pointer-events: none;\n  mix-blend-mode: screen;\n}\n\n@-webkit-keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n\n  50% {\n    background-position: 100% 50%;\n  }\n\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n\n  50% {\n    background-position: 100% 50%;\n  }\n\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n.neu {\n  border-radius: 12px;\n  background: linear-gradient(#fff, rgb(245, 245, 245));\n  box-shadow:  9px 9px 18px #c7c7c7, \n               -9px -9px 18px #ffffff;\n}", "",{"version":3,"sources":["C:/Users/Marten/Documents/Web/portfolio/portfolio/next/styles/App.css"],"names":[],"mappings":"AACA;EACE,sBAAsB;EACtB,SAAS;EAED,sBAAsB;EAC9B,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,iCAAiC;EACjC,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EAGX,aAAa;EAGL,mBAAmB;EAGnB,uBAAuB;EAC/B,YAAY;EACZ,wBAAwB;EACxB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,WAAW;EACX,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,gFAAgF;EAChF,0BAA0B;EAC1B,oDAAoD;EAC5C,4CAA4C;EACpD,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE;IACE,2BAA2B;EAC7B;;EACA;IACE,6BAA6B;EAC/B;;EACA;IACE,2BAA2B;EAC7B;AACF;;AAEA;EACE;IACE,2BAA2B;EAC7B;;EACA;IACE,6BAA6B;EAC/B;;EACA;IACE,2BAA2B;EAC7B;AACF;;AAEA;EACE,mBAAmB;EACnB,qDAAqD;EACrD;qCACmC;AACrC","file":"App.css","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Bungee&family=Roboto&display=swap\");\nbody {\n  background-color: #fff;\n  margin: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100vw;\n  height: 100%;\n}\n\n.text {\n  position: absolute;\n  font-size: 5rem;\n  width: 100%;\n  height: 25vh;\n  font-family: 'Bungee', sans-serif;\n  opacity: 0.7;\n  line-height: 7vh;\n  text-align: center;\n  z-index: 10;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: black;\n  mix-blend-mode: multiply;\n  background: #fff;\n}\n\n.text::before {\n  content: '';\n  display: block;\n  position: absolute;\n  color: #fff;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: linear-gradient(-45deg, #f15bb5, #fee440, #00bbf9, #00f5d4, #9b5de5);\n  background-size: 400% 400%;\n  -webkit-animation: gradient 15s ease-in-out infinite;\n          animation: gradient 15s ease-in-out infinite;\n  pointer-events: none;\n  mix-blend-mode: screen;\n}\n\n@-webkit-keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n}\n\n.neu {\n  border-radius: 12px;\n  background: linear-gradient(#fff, rgb(245, 245, 245));\n  box-shadow:  9px 9px 18px #c7c7c7, \n               -9px -9px 18px #ffffff;\n}"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvQXBwLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBLGNBQWMsUUFBUywyRkFBMkY7QUFDbEg7QUFDQSxjQUFjLFFBQVMsU0FBUywyQkFBMkIsY0FBYywyQkFBMkIsaUJBQWlCLGlCQUFpQixHQUFHLFdBQVcsdUJBQXVCLG9CQUFvQixnQkFBZ0IsaUJBQWlCLHNDQUFzQyxpQkFBaUIscUJBQXFCLHVCQUF1QixnQkFBZ0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsaUJBQWlCLDZCQUE2QixxQkFBcUIsR0FBRyxtQkFBbUIsZ0JBQWdCLG1CQUFtQix1QkFBdUIsZ0JBQWdCLFdBQVcsYUFBYSxjQUFjLFlBQVkscUZBQXFGLCtCQUErQix5REFBeUQsaURBQWlELHlCQUF5QiwyQkFBMkIsR0FBRyxpQ0FBaUMsUUFBUSxrQ0FBa0MsS0FBSyxXQUFXLG9DQUFvQyxLQUFLLFlBQVksa0NBQWtDLEtBQUssR0FBRyx5QkFBeUIsUUFBUSxrQ0FBa0MsS0FBSyxXQUFXLG9DQUFvQyxLQUFLLFlBQVksa0NBQWtDLEtBQUssR0FBRyxVQUFVLHdCQUF3QiwwREFBMEQsK0VBQStFLEdBQUcsT0FBTyw0SEFBNEgsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE9BQU8sdUlBQXVJLFFBQVEsMkJBQTJCLGNBQWMsbUNBQW1DLG1DQUFtQyxpQkFBaUIsaUJBQWlCLEdBQUcsV0FBVyx1QkFBdUIsb0JBQW9CLGdCQUFnQixpQkFBaUIsc0NBQXNDLGlCQUFpQixxQkFBcUIsdUJBQXVCLGdCQUFnQix5QkFBeUIseUJBQXlCLGtCQUFrQiw4QkFBOEIsK0JBQStCLGdDQUFnQyw2QkFBNkIsOEJBQThCLG9DQUFvQyxpQkFBaUIsNkJBQTZCLHFCQUFxQixHQUFHLG1CQUFtQixnQkFBZ0IsbUJBQW1CLHVCQUF1QixnQkFBZ0IsV0FBVyxhQUFhLGNBQWMsWUFBWSxxRkFBcUYsK0JBQStCLHlEQUF5RCx5REFBeUQseUJBQXlCLDJCQUEyQixHQUFHLGlDQUFpQyxRQUFRLGtDQUFrQyxLQUFLLFNBQVMsb0NBQW9DLEtBQUssVUFBVSxrQ0FBa0MsS0FBSyxHQUFHLHlCQUF5QixRQUFRLGtDQUFrQyxLQUFLLFNBQVMsb0NBQW9DLEtBQUssVUFBVSxrQ0FBa0MsS0FBSyxHQUFHLFVBQVUsd0JBQXdCLDBEQUEwRCwrRUFBK0UsR0FBRyxHQUFHO0FBQ3Q0SDtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjIyZDUwMDAxOTgwNWZjNmUxZGNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CdW5nZWUmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50ZXh0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNXZoO1xcbiAgZm9udC1mYW1pbHk6ICdCdW5nZWUnLCBzYW5zLXNlcmlmO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgbGluZS1oZWlnaHQ6IDd2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcblxcbi50ZXh0OjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2YxNWJiNSwgI2ZlZTQ0MCwgIzAwYmJmOSwgIzAwZjVkNCwgIzliNWRlNSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBncmFkaWVudCAxNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGdyYWRpZW50IDE1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGdyYWRpZW50IHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyYWRpZW50IHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgfVxcbn1cXG5cXG4ubmV1IHtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiwgcmdiKDI0NSwgMjQ1LCAyNDUpKTtcXG4gIGJveC1zaGFkb3c6ICA5cHggOXB4IDE4cHggI2M3YzdjNywgXFxuICAgICAgICAgICAgICAgLTlweCAtOXB4IDE4cHggI2ZmZmZmZjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvTWFydGVuL0RvY3VtZW50cy9XZWIvcG9ydGZvbGlvL3BvcnRmb2xpby9uZXh0L3N0eWxlcy9BcHAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFFRCxzQkFBc0I7RUFDOUIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUdYLGFBQWE7RUFHTCxtQkFBbUI7RUFHbkIsdUJBQXVCO0VBQy9CLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUCxnRkFBZ0Y7RUFDaEYsMEJBQTBCO0VBQzFCLG9EQUFvRDtFQUM1Qyw0Q0FBNEM7RUFDcEQsb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUNBO0lBQ0UsNkJBQTZCO0VBQy9COztFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjs7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFEQUFxRDtFQUNyRDtxQ0FDbUM7QUFDckNcIixcImZpbGVcIjpcIkFwcC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QnVuZ2VlJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXFxcIik7XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luOiAwO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjV2aDtcXG4gIGZvbnQtZmFtaWx5OiAnQnVuZ2VlJywgc2Fucy1zZXJpZjtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGxpbmUtaGVpZ2h0OiA3dmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB6LWluZGV4OiAxMDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogYmxhY2s7XFxuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5cXG4udGV4dDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmMTViYjUsICNmZWU0NDAsICMwMGJiZjksICMwMGY1ZDQsICM5YjVkZTUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZ3JhZGllbnQgMTVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xcbiAgICAgICAgICBhbmltYXRpb246IGdyYWRpZW50IDE1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGdyYWRpZW50IHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyYWRpZW50IHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgfVxcbn1cXG5cXG4ubmV1IHtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZiwgcmdiKDI0NSwgMjQ1LCAyNDUpKTtcXG4gIGJveC1zaGFkb3c6ICA5cHggOXB4IDE4cHggI2M3YzdjNywgXFxuICAgICAgICAgICAgICAgLTlweCAtOXB4IDE4cHggI2ZmZmZmZjtcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==