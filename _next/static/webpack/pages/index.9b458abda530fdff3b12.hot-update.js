webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Skills */ "./components/Skills.tsx");
/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Contact */ "./components/Contact.tsx");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects */ "./components/Projects.tsx");
/* harmony import */ var react_scrollmagic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-scrollmagic */ "./node_modules/react-scrollmagic/dist/index.es.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Marten\\Documents\\Web\\portfolio\\portfolio\\next\\pages\\index.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var App = function App() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Number),
      winWidth = _useState[0],
      setWinWidth = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (true) {
      setWinWidth(function () {
        return window.innerWidth;
      });
      console.log(winWidth);
    }
  }, []);
  var durationFromWidth;

  if (winWidth !== null && winWidth < 320) {
    durationFromWidth = "100%";
  } else if (winWidth !== null && winWidth > 320) {
    durationFromWidth = "80%";
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, "M\xE5rten Frisk's portfolio"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/svg+xml",
    href: "/favicon.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  })), __jsx("div", {
    className: "w-screen h-auto overflow-x-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_5__["Controller"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, __jsx("div", {
    id: "trigger",
    className: "mt-4 leading-8 uppercase text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 8
    }
  }, "M\xE5rten Frisk"), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_5__["Scene"], {
    duration: durationFromWidth,
    triggerElement: "#trigger",
    classToggle: "goatanim",
    indicators: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-72 goat",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 8
    }
  }, __jsx("img", {
    src: "/goat.png",
    alt: "Trippy goat",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }))), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_5__["Scene"], {
    duration: durationFromWidth,
    triggerElement: "#trigger",
    classToggle: "mananim",
    indicators: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-72 man",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 8
    }
  }, __jsx("img", {
    src: "/man.png",
    alt: "Stern man",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }))))), __jsx("div", {
    className: "container mx-auto main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex flex-wrap items-center justify-center w-full h-full px-4 py-4 mx-auto my-4 mb-10 -mt-20 bg-white lg:w-1/2 neu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 6
    }
  }, __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_3__["Contact"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: "w-full px-4 py-4 mx-auto my-4 mb-10 bg-white neu lg:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 6
    }
  }, __jsx(_components_Skills__WEBPACK_IMPORTED_MODULE_2__["Skills"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: "w-full px-4 py-4 mx-auto my-4 bg-white neu lg:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 6
    }
  }, __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_4__["Projects"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }))));
};

_s(App, "ylR856CqvhTFhUAe74MsoTfLenM=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkFwcCIsInVzZVN0YXRlIiwiTnVtYmVyIiwid2luV2lkdGgiLCJzZXRXaW5XaWR0aCIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjb25zb2xlIiwibG9nIiwiZHVyYXRpb25Gcm9tV2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUFBOztBQUFBLGtCQUNlQyxzREFBUSxDQUFDQyxNQUFELENBRHZCO0FBQUEsTUFDVkMsUUFEVTtBQUFBLE1BQ0FDLFdBREE7O0FBR2pCQyx5REFBUyxDQUFDLFlBQU07QUFDZixjQUFtQztBQUVsQ0QsaUJBQVcsQ0FBQztBQUFBLGVBQU1FLE1BQU0sQ0FBQ0MsVUFBYjtBQUFBLE9BQUQsQ0FBWDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWU4sUUFBWjtBQUNBO0FBQ0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLE1BQUlPLGlCQUFKOztBQUVBLE1BQUlQLFFBQVEsS0FBSyxJQUFiLElBQXFCQSxRQUFRLEdBQUcsR0FBcEMsRUFBeUM7QUFDeENPLHFCQUFpQixHQUFHLE1BQXBCO0FBQ0EsR0FGRCxNQUVPLElBQUlQLFFBQVEsS0FBSyxJQUFiLElBQXFCQSxRQUFRLEdBQUcsR0FBcEMsRUFBeUM7QUFDL0NPLHFCQUFpQixHQUFHLEtBQXBCO0FBQ0E7O0FBRUQsU0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FERCxFQUVDO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDLHVDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsRUFHQztBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxlQUF0QjtBQUFzQyxRQUFJLEVBQUMsY0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhELEVBSUM7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpELENBREQsRUFPRTtBQUFLLGFBQVMsRUFBQyxtQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBTSxNQUFFLEVBQUMsU0FBVDtBQUFvQixhQUFTLEVBQUMsK0JBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsRUFJQyxNQUFDLHVEQUFEO0FBQU8sWUFBUSxFQUFFQSxpQkFBakI7QUFBb0Msa0JBQWMsRUFBQyxVQUFuRDtBQUE4RCxlQUFXLEVBQUMsVUFBMUU7QUFBcUYsY0FBVSxFQUFFLElBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLE9BQUcsRUFBQyxXQUFUO0FBQXFCLE9BQUcsRUFBQyxhQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxDQUpELEVBU0MsTUFBQyx1REFBRDtBQUFPLFlBQVEsRUFBRUEsaUJBQWpCO0FBQW9DLGtCQUFjLEVBQUMsVUFBbkQ7QUFBOEQsZUFBVyxFQUFDLFNBQTFFO0FBQW9GLGNBQVUsRUFBRSxJQUFoRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxPQUFHLEVBQUMsVUFBVDtBQUFvQixPQUFHLEVBQUMsV0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsQ0FURCxDQURELENBUEYsRUF3QkU7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLG9IQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELEVBSUM7QUFBSyxhQUFTLEVBQUMsMkRBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBSkQsRUFPQztBQUFLLGFBQVMsRUFBQyxxREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FQRCxDQXhCRixDQUREO0FBc0NBLENBekREOztHQUFNVixHOztLQUFBQSxHO0FBMkRTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45YjQ1OGFiZGE1MzBmZGZmM2IxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBTa2lsbHMgfSBmcm9tICcuLi9jb21wb25lbnRzL1NraWxscydcclxuaW1wb3J0IHsgQ29udGFjdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdCdcclxuaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbnRyb2xsZXIsIFNjZW5lIH0gZnJvbSAncmVhY3Qtc2Nyb2xsbWFnaWMnXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcblx0Y29uc3QgW3dpbldpZHRoLCBzZXRXaW5XaWR0aF0gPSB1c2VTdGF0ZShOdW1iZXIpXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHJcblx0XHRcdHNldFdpbldpZHRoKCgpID0+IHdpbmRvdy5pbm5lcldpZHRoKVxyXG5cdFx0XHRjb25zb2xlLmxvZyh3aW5XaWR0aClcclxuXHRcdH1cclxuXHR9LCBbXSlcclxuXHJcblx0bGV0IGR1cmF0aW9uRnJvbVdpZHRoOiBzdHJpbmdcclxuXHJcblx0aWYgKHdpbldpZHRoICE9PSBudWxsICYmIHdpbldpZHRoIDwgMzIwKSB7XHJcblx0XHRkdXJhdGlvbkZyb21XaWR0aCA9IFwiMTAwJVwiXHJcblx0fSBlbHNlIGlmICh3aW5XaWR0aCAhPT0gbnVsbCAmJiB3aW5XaWR0aCA+IDMyMCkge1xyXG5cdFx0ZHVyYXRpb25Gcm9tV2lkdGggPSBcIjgwJVwiXHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+TcOlcnRlbiBGcmlzaydzIHBvcnRmb2xpbzwvdGl0bGU+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2Uvc3ZnK3htbFwiIGhyZWY9XCIvZmF2aWNvbi5zdmdcIiAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1hdXRvIG92ZXJmbG93LXgtaGlkZGVuXCI+XHJcblx0XHRcdFx0XHQ8Q29udHJvbGxlcj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGRpdiAgaWQ9XCJ0cmlnZ2VyXCIgIGNsYXNzTmFtZT1cIm10LTQgbGVhZGluZy04IHVwcGVyY2FzZSB0ZXh0XCI+TcOlcnRlbiBGcmlzazwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PFNjZW5lIGR1cmF0aW9uPXtkdXJhdGlvbkZyb21XaWR0aH0gdHJpZ2dlckVsZW1lbnQ9XCIjdHJpZ2dlclwiIGNsYXNzVG9nZ2xlPVwiZ29hdGFuaW1cIiBpbmRpY2F0b3JzPXt0cnVlfT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctNzIgZ29hdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvZ29hdC5wbmdcIiBhbHQ9XCJUcmlwcHkgZ29hdFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvU2NlbmU+XHJcblx0XHRcdFx0XHRcdDxTY2VuZSBkdXJhdGlvbj17ZHVyYXRpb25Gcm9tV2lkdGh9IHRyaWdnZXJFbGVtZW50PVwiI3RyaWdnZXJcIiBjbGFzc1RvZ2dsZT1cIm1hbmFuaW1cIiBpbmRpY2F0b3JzPXt0cnVlfT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctNzIgbWFuXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9tYW4ucG5nXCIgYWx0PVwiU3Rlcm4gbWFuXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L1NjZW5lPlxyXG5cdFx0XHRcdFx0PC9Db250cm9sbGVyPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbWFpblwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtZnVsbCBweC00IHB5LTQgbXgtYXV0byBteS00IG1iLTEwIC1tdC0yMCBiZy13aGl0ZSBsZzp3LTEvMiBuZXVcIj5cclxuXHRcdFx0XHRcdFx0PENvbnRhY3QgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS00IG14LWF1dG8gbXktNCBtYi0xMCBiZy13aGl0ZSBuZXUgbGc6dy0xLzJcIj5cclxuXHRcdFx0XHRcdFx0PFNraWxscyAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTQgbXgtYXV0byBteS00IGJnLXdoaXRlIG5ldSBsZzp3LTEvMlwiPlxyXG5cdFx0XHRcdFx0XHQ8UHJvamVjdHMgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==