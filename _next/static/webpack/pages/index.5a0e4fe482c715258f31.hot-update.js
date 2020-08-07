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
    }
  }, []);

  if (winWidth !== null && winWidth < 320) {
    setDurationFromWidth("100%");
  } else if (winWidth !== null && winWidth > 320) {
    setDurationFromWidth("80%");
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkFwcCIsInVzZVN0YXRlIiwiTnVtYmVyIiwid2luV2lkdGgiLCJzZXRXaW5XaWR0aCIsImR1cmF0aW9uRnJvbVdpZHRoIiwic2V0RHVyYXRpb25Gcm9tV2lkdGgiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBQUE7O0FBQUEsa0JBQ2VDLHNEQUFRLENBQUNDLE1BQUQsQ0FEdkI7QUFBQSxNQUNWQyxRQURVO0FBQUEsTUFDQUMsV0FEQTs7QUFBQSxtQkFFZ0NILHNEQUFRLENBQUMsRUFBRCxDQUZ4QztBQUFBLE1BRVhJLGlCQUZXO0FBQUEsTUFFUUMsb0JBRlI7O0FBR2pCQyx5REFBUyxDQUFDLFlBQU07QUFDZixjQUFtQztBQUVsQ0gsaUJBQVcsQ0FBQztBQUFBLGVBQU1JLE1BQU0sQ0FBQ0MsVUFBYjtBQUFBLE9BQUQsQ0FBWDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWVIsUUFBWjtBQUNBO0FBQ0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFTQSxNQUFJQSxRQUFRLEtBQUssSUFBYixJQUFxQkEsUUFBUSxHQUFHLEdBQXBDLEVBQXlDO0FBQ3hDRyx3QkFBb0IsQ0FBQyxNQUFELENBQXBCO0FBQ0EsR0FGRCxNQUVPLElBQUlILFFBQVEsS0FBSyxJQUFiLElBQXFCQSxRQUFRLEdBQUcsR0FBcEMsRUFBeUM7QUFDL0NHLHdCQUFvQixDQUFDLEtBQUQsQ0FBcEI7QUFDQTs7QUFFRCxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURELEVBRUM7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsdUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRCxFQUdDO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGVBQXRCO0FBQXNDLFFBQUksRUFBQyxjQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEQsRUFJQztBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkQsQ0FERCxFQU9FO0FBQUssYUFBUyxFQUFDLG1DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFNLE1BQUUsRUFBQyxTQUFUO0FBQW9CLGFBQVMsRUFBQywrQkFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixFQUlDLE1BQUMsdURBQUQ7QUFBTyxZQUFRLEVBQUVELGlCQUFqQjtBQUFvQyxrQkFBYyxFQUFDLFVBQW5EO0FBQThELGVBQVcsRUFBQyxVQUExRTtBQUFxRixjQUFVLEVBQUUsSUFBakc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssT0FBRyxFQUFDLFdBQVQ7QUFBcUIsT0FBRyxFQUFDLGFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELENBSkQsRUFTQyxNQUFDLHVEQUFEO0FBQU8sWUFBUSxFQUFFQSxpQkFBakI7QUFBb0Msa0JBQWMsRUFBQyxVQUFuRDtBQUE4RCxlQUFXLEVBQUMsU0FBMUU7QUFBb0YsY0FBVSxFQUFFLElBQWhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLE9BQUcsRUFBQyxVQUFUO0FBQW9CLE9BQUcsRUFBQyxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxDQVRELENBREQsQ0FQRixFQXdCRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsb0hBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsRUFJQztBQUFLLGFBQVMsRUFBQywyREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FKRCxFQU9DO0FBQUssYUFBUyxFQUFDLHFEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQVBELENBeEJGLENBREQ7QUFzQ0EsQ0F4REQ7O0dBQU1MLEc7O0tBQUFBLEc7QUEwRFNBLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVhMGU0ZmU0ODJjNzE1MjU4ZjMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IFNraWxscyB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2tpbGxzJ1xyXG5pbXBvcnQgeyBDb250YWN0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWN0J1xyXG5pbXBvcnQgeyBQcm9qZWN0cyB9IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdHMnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29udHJvbGxlciwgU2NlbmUgfSBmcm9tICdyZWFjdC1zY3JvbGxtYWdpYydcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuXHRjb25zdCBbd2luV2lkdGgsIHNldFdpbldpZHRoXSA9IHVzZVN0YXRlKE51bWJlcilcclxuY29uc3QgW2R1cmF0aW9uRnJvbVdpZHRoLCBzZXREdXJhdGlvbkZyb21XaWR0aF0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHJcblx0XHRcdHNldFdpbldpZHRoKCgpID0+IHdpbmRvdy5pbm5lcldpZHRoKVxyXG5cdFx0XHRjb25zb2xlLmxvZyh3aW5XaWR0aClcclxuXHRcdH1cclxuXHR9LCBbXSlcclxuXHJcblxyXG5cdGlmICh3aW5XaWR0aCAhPT0gbnVsbCAmJiB3aW5XaWR0aCA8IDMyMCkge1xyXG5cdFx0c2V0RHVyYXRpb25Gcm9tV2lkdGgoXCIxMDAlXCIpXHJcblx0fSBlbHNlIGlmICh3aW5XaWR0aCAhPT0gbnVsbCAmJiB3aW5XaWR0aCA+IDMyMCkge1xyXG5cdFx0c2V0RHVyYXRpb25Gcm9tV2lkdGgoXCI4MCVcIilcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdDx0aXRsZT5Nw6VydGVuIEZyaXNrJ3MgcG9ydGZvbGlvPC90aXRsZT5cclxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgaHJlZj1cIi9mYXZpY29uLnN2Z1wiIC8+XHJcblx0XHRcdFx0PGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLWF1dG8gb3ZlcmZsb3cteC1oaWRkZW5cIj5cclxuXHRcdFx0XHRcdDxDb250cm9sbGVyPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2ICBpZD1cInRyaWdnZXJcIiAgY2xhc3NOYW1lPVwibXQtNCBsZWFkaW5nLTggdXBwZXJjYXNlIHRleHRcIj5Nw6VydGVuIEZyaXNrPC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8U2NlbmUgZHVyYXRpb249e2R1cmF0aW9uRnJvbVdpZHRofSB0cmlnZ2VyRWxlbWVudD1cIiN0cmlnZ2VyXCIgY2xhc3NUb2dnbGU9XCJnb2F0YW5pbVwiIGluZGljYXRvcnM9e3RydWV9PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy03MiBnb2F0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9nb2F0LnBuZ1wiIGFsdD1cIlRyaXBweSBnb2F0XCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9TY2VuZT5cclxuXHRcdFx0XHRcdFx0PFNjZW5lIGR1cmF0aW9uPXtkdXJhdGlvbkZyb21XaWR0aH0gdHJpZ2dlckVsZW1lbnQ9XCIjdHJpZ2dlclwiIGNsYXNzVG9nZ2xlPVwibWFuYW5pbVwiIGluZGljYXRvcnM9e3RydWV9PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy03MiBtYW5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL21hbi5wbmdcIiBhbHQ9XCJTdGVybiBtYW5cIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvU2NlbmU+XHJcblx0XHRcdFx0XHQ8L0NvbnRyb2xsZXI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBtYWluXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1mdWxsIHB4LTQgcHktNCBteC1hdXRvIG15LTQgbWItMTAgLW10LTIwIGJnLXdoaXRlIGxnOnctMS8yIG5ldVwiPlxyXG5cdFx0XHRcdFx0XHQ8Q29udGFjdCAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTQgbXgtYXV0byBteS00IG1iLTEwIGJnLXdoaXRlIG5ldSBsZzp3LTEvMlwiPlxyXG5cdFx0XHRcdFx0XHQ8U2tpbGxzIC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktNCBteC1hdXRvIG15LTQgYmctd2hpdGUgbmV1IGxnOnctMS8yXCI+XHJcblx0XHRcdFx0XHRcdDxQcm9qZWN0cyAvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxyXG4iXSwic291cmNlUm9vdCI6IiJ9