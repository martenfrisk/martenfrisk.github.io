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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      durationFromWidth = _useState2[0],
      setDurationFromWidth = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (true) {
      setWinWidth(function () {
        return window.innerWidth;
      });
      console.log(winWidth);

      if (winWidth !== null && winWidth < 320) {
        setDurationFromWidth("100%");
      } else if (winWidth !== null && winWidth > 320) {
        setDurationFromWidth("80%");
      }
    }
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, "M\xE5rten Frisk's portfolio"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/svg+xml",
    href: "/favicon.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  })), __jsx("div", {
    className: "w-screen h-auto overflow-x-hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_5__["Controller"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }, __jsx("div", {
    id: "trigger",
    className: "mt-4 leading-8 uppercase text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-72 goat",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 8
    }
  }, __jsx("img", {
    src: "/goat.png",
    alt: "Trippy goat",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-72 man",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 8
    }
  }, __jsx("img", {
    src: "/man.png",
    alt: "Stern man",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }))))), __jsx("div", {
    className: "container mx-auto main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex flex-wrap items-center justify-center w-full h-full px-4 py-4 mx-auto my-4 mb-10 -mt-20 bg-white lg:w-1/2 neu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 6
    }
  }, __jsx(_components_Contact__WEBPACK_IMPORTED_MODULE_3__["Contact"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: "w-full px-4 py-4 mx-auto my-4 mb-10 bg-white neu lg:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 6
    }
  }, __jsx(_components_Skills__WEBPACK_IMPORTED_MODULE_2__["Skills"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: "w-full px-4 py-4 mx-auto my-4 bg-white neu lg:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 6
    }
  }, __jsx(_components_Projects__WEBPACK_IMPORTED_MODULE_4__["Projects"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }))));
};

_s(App, "fUq6Q9N+VdwN++1cGtSz2Gmi+pA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkFwcCIsInVzZVN0YXRlIiwiTnVtYmVyIiwid2luV2lkdGgiLCJzZXRXaW5XaWR0aCIsImR1cmF0aW9uRnJvbVdpZHRoIiwic2V0RHVyYXRpb25Gcm9tV2lkdGgiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2VDLHNEQUFRLENBQUNDLE1BQUQsQ0FEdkI7QUFBQSxNQUNWQyxRQURVO0FBQUEsTUFDQUMsV0FEQTs7QUFBQSxtQkFFZ0NILHNEQUFRLENBQUMsRUFBRCxDQUZ4QztBQUFBLE1BRVhJLGlCQUZXO0FBQUEsTUFFUUMsb0JBRlI7O0FBR2pCQyx5REFBUyxDQUFDLFlBQU07QUFDZixjQUFtQztBQUVsQ0gsaUJBQVcsQ0FBQztBQUFBLGVBQU1JLE1BQU0sQ0FBQ0MsVUFBYjtBQUFBLE9BQUQsQ0FBWDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWVIsUUFBWjs7QUFFQyxVQUFJQSxRQUFRLEtBQUssSUFBYixJQUFxQkEsUUFBUSxHQUFHLEdBQXBDLEVBQXlDO0FBQ3hDRyw0QkFBb0IsQ0FBQyxNQUFELENBQXBCO0FBQ0EsT0FGRCxNQUVPLElBQUlILFFBQVEsS0FBSyxJQUFiLElBQXFCQSxRQUFRLEdBQUcsR0FBcEMsRUFBeUM7QUFDL0NHLDRCQUFvQixDQUFDLEtBQUQsQ0FBcEI7QUFDQTtBQUNGO0FBQ0QsR0FaUSxFQVlOLEVBWk0sQ0FBVDtBQWVBLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREQsRUFFQztBQUFNLFFBQUksRUFBQyxVQUFYO0FBQXNCLFdBQU8sRUFBQyx1Q0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELEVBR0M7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsZUFBdEI7QUFBc0MsUUFBSSxFQUFDLGNBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRCxFQUlDO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRCxDQURELEVBT0U7QUFBSyxhQUFTLEVBQUMsbUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQU0sTUFBRSxFQUFDLFNBQVQ7QUFBb0IsYUFBUyxFQUFDLCtCQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLEVBSUMsTUFBQyx1REFBRDtBQUFPLFlBQVEsRUFBRUQsaUJBQWpCO0FBQW9DLGtCQUFjLEVBQUMsVUFBbkQ7QUFBOEQsZUFBVyxFQUFDLFVBQTFFO0FBQXFGLGNBQVUsRUFBRSxJQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxPQUFHLEVBQUMsV0FBVDtBQUFxQixPQUFHLEVBQUMsYUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsQ0FKRCxFQVNDLE1BQUMsdURBQUQ7QUFBTyxZQUFRLEVBQUVBLGlCQUFqQjtBQUFvQyxrQkFBYyxFQUFDLFVBQW5EO0FBQThELGVBQVcsRUFBQyxTQUExRTtBQUFvRixjQUFVLEVBQUUsSUFBaEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssT0FBRyxFQUFDLFVBQVQ7QUFBb0IsT0FBRyxFQUFDLFdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELENBVEQsQ0FERCxDQVBGLEVBd0JFO0FBQUssYUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxvSEFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxFQUlDO0FBQUssYUFBUyxFQUFDLDJEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQUpELEVBT0M7QUFBSyxhQUFTLEVBQUMscURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBUEQsQ0F4QkYsQ0FERDtBQXNDQSxDQXhERDs7R0FBTUwsRzs7S0FBQUEsRztBQTBEU0Esa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDZiZjQwYjNmNGU0MTlkODZkYzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgU2tpbGxzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Ta2lsbHMnXHJcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3QnXHJcbmltcG9ydCB7IFByb2plY3RzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0cydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb250cm9sbGVyLCBTY2VuZSB9IGZyb20gJ3JlYWN0LXNjcm9sbG1hZ2ljJ1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG5cdGNvbnN0IFt3aW5XaWR0aCwgc2V0V2luV2lkdGhdID0gdXNlU3RhdGUoTnVtYmVyKVxyXG5jb25zdCBbZHVyYXRpb25Gcm9tV2lkdGgsIHNldER1cmF0aW9uRnJvbVdpZHRoXSA9IHVzZVN0YXRlKFwiXCIpXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG5cclxuXHRcdFx0c2V0V2luV2lkdGgoKCkgPT4gd2luZG93LmlubmVyV2lkdGgpXHJcblx0XHRcdGNvbnNvbGUubG9nKHdpbldpZHRoKVxyXG5cdFx0XHRcclxuXHRcdFx0XHRpZiAod2luV2lkdGggIT09IG51bGwgJiYgd2luV2lkdGggPCAzMjApIHtcclxuXHRcdFx0XHRcdHNldER1cmF0aW9uRnJvbVdpZHRoKFwiMTAwJVwiKVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAod2luV2lkdGggIT09IG51bGwgJiYgd2luV2lkdGggPiAzMjApIHtcclxuXHRcdFx0XHRcdHNldER1cmF0aW9uRnJvbVdpZHRoKFwiODAlXCIpXHJcblx0XHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sIFtdKVxyXG5cclxuXHRcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0PHRpdGxlPk3DpXJ0ZW4gRnJpc2sncyBwb3J0Zm9saW88L3RpdGxlPlxyXG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3N2Zyt4bWxcIiBocmVmPVwiL2Zhdmljb24uc3ZnXCIgLz5cclxuXHRcdFx0XHQ8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGgtYXV0byBvdmVyZmxvdy14LWhpZGRlblwiPlxyXG5cdFx0XHRcdFx0PENvbnRyb2xsZXI+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgIGlkPVwidHJpZ2dlclwiICBjbGFzc05hbWU9XCJtdC00IGxlYWRpbmctOCB1cHBlcmNhc2UgdGV4dFwiPk3DpXJ0ZW4gRnJpc2s8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxTY2VuZSBkdXJhdGlvbj17ZHVyYXRpb25Gcm9tV2lkdGh9IHRyaWdnZXJFbGVtZW50PVwiI3RyaWdnZXJcIiBjbGFzc1RvZ2dsZT1cImdvYXRhbmltXCIgaW5kaWNhdG9ycz17dHJ1ZX0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTcyIGdvYXRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL2dvYXQucG5nXCIgYWx0PVwiVHJpcHB5IGdvYXRcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L1NjZW5lPlxyXG5cdFx0XHRcdFx0XHQ8U2NlbmUgZHVyYXRpb249e2R1cmF0aW9uRnJvbVdpZHRofSB0cmlnZ2VyRWxlbWVudD1cIiN0cmlnZ2VyXCIgY2xhc3NUb2dnbGU9XCJtYW5hbmltXCIgaW5kaWNhdG9ycz17dHJ1ZX0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTcyIG1hblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvbWFuLnBuZ1wiIGFsdD1cIlN0ZXJuIG1hblwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9TY2VuZT5cclxuXHRcdFx0XHRcdDwvQ29udHJvbGxlcj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG1haW5cIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWZ1bGwgcHgtNCBweS00IG14LWF1dG8gbXktNCBtYi0xMCAtbXQtMjAgYmctd2hpdGUgbGc6dy0xLzIgbmV1XCI+XHJcblx0XHRcdFx0XHRcdDxDb250YWN0IC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktNCBteC1hdXRvIG15LTQgbWItMTAgYmctd2hpdGUgbmV1IGxnOnctMS8yXCI+XHJcblx0XHRcdFx0XHRcdDxTa2lsbHMgLz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS00IG14LWF1dG8gbXktNCBiZy13aGl0ZSBuZXUgbGc6dy0xLzJcIj5cclxuXHRcdFx0XHRcdFx0PFByb2plY3RzIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=