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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('80%'),
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
      setDurationFromWidth('60%');
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
  }, __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_5__["Scene"], {
    pin: true,
    triggerElement: "#trigger",
    duration: 700,
    indicators: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
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
  }, "M\xE5rten Frisk")), __jsx(react_scrollmagic__WEBPACK_IMPORTED_MODULE_5__["Scene"], {
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

_s(App, "9T/zb09cW/rC6gfajSI02I7twac=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkFwcCIsInVzZVN0YXRlIiwiTnVtYmVyIiwid2luV2lkdGgiLCJzZXRXaW5XaWR0aCIsImR1cmF0aW9uRnJvbVdpZHRoIiwic2V0RHVyYXRpb25Gcm9tV2lkdGgiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2lCQyxzREFBUSxDQUFDQyxNQUFELENBRHpCO0FBQUEsTUFDVEMsUUFEUztBQUFBLE1BQ0NDLFdBREQ7O0FBQUEsbUJBRW1DSCxzREFBUSxDQUFDLEtBQUQsQ0FGM0M7QUFBQSxNQUVUSSxpQkFGUztBQUFBLE1BRVVDLG9CQUZWOztBQUdqQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2YsY0FBbUM7QUFDbENILGlCQUFXLENBQUM7QUFBQSxlQUFNSSxNQUFNLENBQUNDLFVBQWI7QUFBQSxPQUFELENBQVg7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlSLFFBQVo7QUFDQTtBQUNELEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBSUosUUFBUSxLQUFLLENBQWIsSUFBa0JBLFFBQVEsR0FBRyxHQUFqQyxFQUFzQztBQUNyQ0csMEJBQW9CLENBQUMsTUFBRCxDQUFwQjtBQUNBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWU4saUJBQVo7QUFDQSxLQUhELE1BR08sSUFBSUYsUUFBUSxLQUFLLENBQWIsSUFBa0JBLFFBQVEsR0FBRyxHQUFqQyxFQUFzQztBQUM1Q0csMEJBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUNBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWU4saUJBQVo7QUFDQTtBQUNE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QTtBQUFBO0FBQUEsSUFERCxDQVBELENBcENELENBREQ7QUFrREEsQ0F0RUQ7O0dBQU1MLEc7O0tBQUFBLEc7QUF3RVNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZmNTUxOGQyZjE1YzljYTFlMGI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IFNraWxscyB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2tpbGxzJ1xyXG5pbXBvcnQgeyBDb250YWN0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0J1xyXG5pbXBvcnQgeyBQcm9qZWN0cyB9IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdHMnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29udHJvbGxlciwgU2NlbmUgfSBmcm9tICdyZWFjdC1zY3JvbGxtYWdpYydcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuXHRjb25zdCBbIHdpbldpZHRoLCBzZXRXaW5XaWR0aCBdID0gdXNlU3RhdGUoTnVtYmVyKVxyXG5cdGNvbnN0IFsgZHVyYXRpb25Gcm9tV2lkdGgsIHNldER1cmF0aW9uRnJvbVdpZHRoIF0gPSB1c2VTdGF0ZSgnODAlJylcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdHNldFdpbldpZHRoKCgpID0+IHdpbmRvdy5pbm5lcldpZHRoKVxyXG5cdFx0XHRjb25zb2xlLmxvZyh3aW5XaWR0aClcclxuXHRcdH1cclxuXHR9LCBbXSlcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmICh3aW5XaWR0aCAhPT0gMCAmJiB3aW5XaWR0aCA8IDMyMCkge1xyXG5cdFx0XHRzZXREdXJhdGlvbkZyb21XaWR0aCgnMTAwJScpXHJcblx0XHRcdGNvbnNvbGUubG9nKGR1cmF0aW9uRnJvbVdpZHRoKVxyXG5cdFx0fSBlbHNlIGlmICh3aW5XaWR0aCAhPT0gMCAmJiB3aW5XaWR0aCA+IDMyMCkge1xyXG5cdFx0XHRzZXREdXJhdGlvbkZyb21XaWR0aCgnNjAlJylcclxuXHRcdFx0Y29uc29sZS5sb2coZHVyYXRpb25Gcm9tV2lkdGgpXHJcblx0XHR9XHJcblx0fSwgW10pXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHQ8dGl0bGU+TcOlcnRlbiBGcmlzaydzIHBvcnRmb2xpbzwvdGl0bGU+XHJcblx0XHRcdFx0PG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2Uvc3ZnK3htbFwiIGhyZWY9XCIvZmF2aWNvbi5zdmdcIiAvPlxyXG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGgtYXV0byBvdmVyZmxvdy14LWhpZGRlblwiPlxyXG5cdFx0XHRcdDxDb250cm9sbGVyPlxyXG5cdFx0XHRcdFx0PFNjZW5lIHBpbj17dHJ1ZX0gdHJpZ2dlckVsZW1lbnQ9XCIjdHJpZ2dlclwiIGR1cmF0aW9uPXs3MDB9IGluZGljYXRvcnM9e3RydWV9PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgIGlkPVwidHJpZ2dlclwiIGNsYXNzTmFtZT1cImxlYWRpbmctOCB1cHBlcmNhc2UgYm9yZGVyLW5vbmUgdGV4dFwiPk3DpXJ0ZW4gRnJpc2s8L2Rpdj5cclxuXHRcdFx0XHRcdDwvU2NlbmU+XHJcblxyXG5cdFx0XHRcdFx0PFNjZW5lXHJcblx0XHRcdFx0XHRcdGR1cmF0aW9uPXtkdXJhdGlvbkZyb21XaWR0aH1cclxuXHRcdFx0XHRcdFx0dHJpZ2dlckVsZW1lbnQ9XCIjdHJpZ2dlclwiXHJcblx0XHRcdFx0XHRcdGNsYXNzVG9nZ2xlPVwiZ29hdGFuaW1cIlxyXG5cdFx0XHRcdFx0XHRpbmRpY2F0b3JzPXt0cnVlfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctODQgbWQ6dy05NiBnb2F0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvZ29hdC5wbmdcIiBhbHQ9XCJUcmlwcHkgZ29hdFwiIC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9TY2VuZT5cclxuXHRcdFx0XHRcdDxTY2VuZVxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbj17ZHVyYXRpb25Gcm9tV2lkdGh9XHJcblx0XHRcdFx0XHRcdHRyaWdnZXJFbGVtZW50PVwiI3RyaWdnZXJcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc1RvZ2dsZT1cIm1hbmFuaW1cIlxyXG5cdFx0XHRcdFx0XHRpbmRpY2F0b3JzPXt0cnVlfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctODQgbWQ6dy05NiBtYW5cIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9tYW4ucG5nXCIgYWx0PVwiU3Rlcm4gbWFuXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L1NjZW5lPlxyXG5cdFx0XHRcdDwvQ29udHJvbGxlcj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gbWFpblwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWZ1bGwgcHgtNCBweS00IG14LWF1dG8gbXktNCBtYi0xMCAtbXQtMjAgYmctd2hpdGUgbGc6dy0xLzIgbmV1XCI+XHJcblx0XHRcdFx0XHQ8Q29udGFjdCAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktNCBteC1hdXRvIG15LTQgbWItMTAgYmctd2hpdGUgbmV1IGxnOnctMS8yXCI+XHJcblx0XHRcdFx0XHQ8U2tpbGxzIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS00IG14LWF1dG8gbXktNCBiZy13aGl0ZSBuZXUgbGc6dy0xLzJcIj5cclxuXHRcdFx0XHRcdDxQcm9qZWN0cyAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=