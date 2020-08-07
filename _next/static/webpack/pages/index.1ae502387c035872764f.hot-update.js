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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('40%'),
      durationFromWidth = _useState2[0],
      setDurationFromWidth = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (true) {
      setWinWidth(function () {
        return window.innerWidth;
      });
      console.log(winWidth);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (winWidth !== 0 && winWidth < 320) {
      setDurationFromWidth('100%');
      console.log(durationFromWidth);
    } else if (winWidth !== 0 && winWidth > 320) {
      setDurationFromWidth('30%');
      console.log(durationFromWidth);
    }
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, "M\xE5rten Frisk's portfolio"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/svg+xml",
    href: "/favicon.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  })), __jsx("div", {
    className: "w-screen h-auto overflow-x-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_5__["Controller"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "trigger",
    className: "leading-8 uppercase border-none text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 6
    }
  }, "M\xE5rten Frisk"), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_5__["Scene"], {
    duration: durationFromWidth,
    triggerElement: "#trigger",
    classToggle: "goatanim",
    indicators: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "w-84 md:w-96 goat",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/goat.png",
    alt: "Trippy goat",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 8
    }
  }))), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_5__["Scene"], {
    duration: durationFromWidth,
    triggerElement: "#trigger",
    classToggle: "mananim",
    indicators: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "w-84 md:w-96 man",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/man.png",
    alt: "Stern man",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 8
    }
  }))))), __jsx("div", {
    className: "container mx-auto main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap items-center justify-center w-full h-full px-4 py-4 mx-auto my-4 mb-10 -mt-20 bg-white lg:w-1/2 neu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_3__["Contact"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 6
    }
  })), __jsx("div", {
    className: "w-full px-4 py-4 mx-auto my-4 mb-10 bg-white neu lg:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx(_components_Skills__WEBPACK_IMPORTED_MODULE_2__["Skills"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 6
    }
  })), __jsx("div", {
    className: "w-full px-4 py-4 mx-auto my-4 bg-white neu lg:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_4__["Projects"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 6
    }
  }))));
};

_s(App, "iyn+0gT2mnS2sHy3UqY4RYjUgbM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkFwcCIsInVzZVN0YXRlIiwiTnVtYmVyIiwid2luV2lkdGgiLCJzZXRXaW5XaWR0aCIsImR1cmF0aW9uRnJvbVdpZHRoIiwic2V0RHVyYXRpb25Gcm9tV2lkdGgiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2lCQyxzREFBUSxDQUFDQyxNQUFELENBRHpCO0FBQUEsTUFDVEMsUUFEUztBQUFBLE1BQ0NDLFdBREQ7O0FBQUEsbUJBRW1DSCxzREFBUSxDQUFDLEtBQUQsQ0FGM0M7QUFBQSxNQUVUSSxpQkFGUztBQUFBLE1BRVVDLG9CQUZWOztBQUdqQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2YsY0FBbUM7QUFDbENILGlCQUFXLENBQUM7QUFBQSxlQUFNSSxNQUFNLENBQUNDLFVBQWI7QUFBQSxPQUFELENBQVg7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlSLFFBQVo7QUFDQTtBQUNELEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBSUosUUFBUSxLQUFLLENBQWIsSUFBa0JBLFFBQVEsR0FBRyxHQUFqQyxFQUFzQztBQUNyQ0csMEJBQW9CLENBQUMsTUFBRCxDQUFwQjtBQUNBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWU4saUJBQVo7QUFDQSxLQUhELE1BR08sSUFBSUYsUUFBUSxLQUFLLENBQWIsSUFBa0JBLFFBQVEsR0FBRyxHQUFqQyxFQUFzQztBQUM1Q0csMEJBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUNBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWU4saUJBQVo7QUFDQTtBQUNELEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQSxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURELEVBRUM7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsdUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxFQUdDO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGVBQXRCO0FBQXNDLFFBQUksRUFBQyxjQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEQsRUFJQztBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkQsQ0FERCxFQU9DO0FBQUssYUFBUyxFQUFDLG1DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHQztBQUFNLE1BQUUsRUFBQyxTQUFUO0FBQW1CLGFBQVMsRUFBQyxzQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRCxFQU1DLE1BQUMsdURBQUQ7QUFDQyxZQUFRLEVBQUVBLGlCQURYO0FBRUMsa0JBQWMsRUFBQyxVQUZoQjtBQUdDLGVBQVcsRUFBQyxVQUhiO0FBSUMsY0FBVSxFQUFFLElBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1DO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLE9BQUcsRUFBQyxXQUFUO0FBQXFCLE9BQUcsRUFBQyxhQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FORCxDQU5ELEVBZ0JDLE1BQUMsdURBQUQ7QUFDQyxZQUFRLEVBQUVBLGlCQURYO0FBRUMsa0JBQWMsRUFBQyxVQUZoQjtBQUdDLGVBQVcsRUFBQyxTQUhiO0FBSUMsY0FBVSxFQUFFLElBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1DO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLE9BQUcsRUFBQyxVQUFUO0FBQW9CLE9BQUcsRUFBQyxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FORCxDQWhCRCxDQURELENBUEQsRUFvQ0M7QUFBSyxhQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLG9IQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELEVBSUM7QUFBSyxhQUFTLEVBQUMsMkRBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBSkQsRUFPQztBQUFLLGFBQVMsRUFBQyxxREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FQRCxDQXBDRCxDQUREO0FBa0RBLENBdEVEOztHQUFNTCxHOztLQUFBQSxHO0FBd0VTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYWU1MDIzODdjMDM1ODcyNzY0Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBTa2lsbHMgfSBmcm9tICcuLi9jb21wb25lbnRzL1NraWxscydcclxuaW1wb3J0IHsgQ29udGFjdCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdCdcclxuaW1wb3J0IHsgUHJvamVjdHMgfSBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbnRyb2xsZXIsIFNjZW5lIH0gZnJvbSAncmVhY3Qtc2Nyb2xsbWFnaWMnXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcblx0Y29uc3QgWyB3aW5XaWR0aCwgc2V0V2luV2lkdGggXSA9IHVzZVN0YXRlKE51bWJlcilcclxuXHRjb25zdCBbIGR1cmF0aW9uRnJvbVdpZHRoLCBzZXREdXJhdGlvbkZyb21XaWR0aCBdID0gdXNlU3RhdGUoJzQwJScpXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRzZXRXaW5XaWR0aCgoKSA9PiB3aW5kb3cuaW5uZXJXaWR0aClcclxuXHRcdFx0Y29uc29sZS5sb2cod2luV2lkdGgpXHJcblx0XHR9XHJcblx0fSwgW10pXHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAod2luV2lkdGggIT09IDAgJiYgd2luV2lkdGggPCAzMjApIHtcclxuXHRcdFx0c2V0RHVyYXRpb25Gcm9tV2lkdGgoJzEwMCUnKVxyXG5cdFx0XHRjb25zb2xlLmxvZyhkdXJhdGlvbkZyb21XaWR0aClcclxuXHRcdH0gZWxzZSBpZiAod2luV2lkdGggIT09IDAgJiYgd2luV2lkdGggPiAzMjApIHtcclxuXHRcdFx0c2V0RHVyYXRpb25Gcm9tV2lkdGgoJzMwJScpXHJcblx0XHRcdGNvbnNvbGUubG9nKGR1cmF0aW9uRnJvbVdpZHRoKVxyXG5cdFx0fVxyXG5cdH0sIFtdKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPk3DpXJ0ZW4gRnJpc2sncyBwb3J0Zm9saW88L3RpdGxlPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3N2Zyt4bWxcIiBocmVmPVwiL2Zhdmljb24uc3ZnXCIgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLWF1dG8gb3ZlcmZsb3cteC1oaWRkZW5cIj5cclxuXHRcdFx0XHQ8Q29udHJvbGxlcj5cclxuXHRcdFx0XHRcdHsvKiA8U2NlbmUgcGluPXt0cnVlfSB0cmlnZ2VyRWxlbWVudD1cIiN0cmlnZ2VyXCIgZHVyYXRpb249ezcwMH0gaW5kaWNhdG9ycz17dHJ1ZX0+ICovfVxyXG5cclxuXHRcdFx0XHRcdDxkaXYgIGlkPVwidHJpZ2dlclwiIGNsYXNzTmFtZT1cImxlYWRpbmctOCB1cHBlcmNhc2UgYm9yZGVyLW5vbmUgdGV4dFwiPk3DpXJ0ZW4gRnJpc2s8L2Rpdj5cclxuXHRcdFx0XHRcdHsvKiA8L1NjZW5lPiAqL31cclxuXHJcblx0XHRcdFx0XHQ8U2NlbmVcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb249e2R1cmF0aW9uRnJvbVdpZHRofVxyXG5cdFx0XHRcdFx0XHR0cmlnZ2VyRWxlbWVudD1cIiN0cmlnZ2VyXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NUb2dnbGU9XCJnb2F0YW5pbVwiXHJcblx0XHRcdFx0XHRcdGluZGljYXRvcnM9e3RydWV9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy04NCBtZDp3LTk2IGdvYXRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9nb2F0LnBuZ1wiIGFsdD1cIlRyaXBweSBnb2F0XCIgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L1NjZW5lPlxyXG5cdFx0XHRcdFx0PFNjZW5lXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uPXtkdXJhdGlvbkZyb21XaWR0aH1cclxuXHRcdFx0XHRcdFx0dHJpZ2dlckVsZW1lbnQ9XCIjdHJpZ2dlclwiXHJcblx0XHRcdFx0XHRcdGNsYXNzVG9nZ2xlPVwibWFuYW5pbVwiXHJcblx0XHRcdFx0XHRcdGluZGljYXRvcnM9e3RydWV9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy04NCBtZDp3LTk2IG1hblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL21hbi5wbmdcIiBhbHQ9XCJTdGVybiBtYW5cIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvU2NlbmU+XHJcblx0XHRcdFx0PC9Db250cm9sbGVyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtYWluXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtZnVsbCBweC00IHB5LTQgbXgtYXV0byBteS00IG1iLTEwIC1tdC0yMCBiZy13aGl0ZSBsZzp3LTEvMiBuZXVcIj5cclxuXHRcdFx0XHRcdDxDb250YWN0IC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS00IG14LWF1dG8gbXktNCBtYi0xMCBiZy13aGl0ZSBuZXUgbGc6dy0xLzJcIj5cclxuXHRcdFx0XHRcdDxTa2lsbHMgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTQgbXgtYXV0byBteS00IGJnLXdoaXRlIG5ldSBsZzp3LTEvMlwiPlxyXG5cdFx0XHRcdFx0PFByb2plY3RzIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==