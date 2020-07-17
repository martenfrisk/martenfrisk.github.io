webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Projects.tsx":
/*!*********************************!*\
  !*** ./components/Projects.tsx ***!
  \*********************************/
/*! exports provided: Projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projects", function() { return Projects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons */ "./components/Icons.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Marten\\Documents\\Web\\portfolio\\portfolio\\next\\components\\Projects.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Individual = function Individual(link, imgMock, imgPlain, title, descOne, descTwo, imgLeft) {
  var altText = title + ' screenshot';
  return __jsx("div", {
    className: "flex flex-wrap items-stretch my-4 justify-evenly border-b border-blue-700 pb-6 md:border-white ".concat(!imgLeft && 'flex-row-reverse'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "relative z-0 flex self-end justify-center w-full h-auto md:w-full md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }, __jsx("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: imgMock,
    alt: altText,
    className: "absolute top-0 ".concat(imgLeft ? 'left-0' : 'right-0', " hidden w-auto h-64 mt-2 md:inline md:self-end md:mt-0"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 6
    }
  }), __jsx("div", {
    className: "flex justify-center w-full md:hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: imgPlain,
    alt: altText,
    className: "inline-block w-2/3 h-auto mt-2 border-2 border-blue-300 rounded-md md:hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 6
    }
  })))), __jsx("div", {
    className: "z-10 self-end w-full  ".concat(imgLeft ? 'md:ml-56' : 'md:mr-56', " text-justify md:mb-20 md:w-3/4"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "text-2xl font-semibold mt-4 md:mt-0 text-center cursor-pointer ".concat(imgLeft ? 'md:text-left' : 'md:text-right', " hover:underline"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  }, title, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }))), __jsx("div", {
    className: "text-base text-left ".concat(imgLeft ? 'md:text-left' : 'md:text-right'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 6
    }
  }, descOne), __jsx("p", {
    className: "mt-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 6
    }
  }, descTwo))));
};

_c = Individual;
var Projects = function Projects() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "w-full text-xl text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 4
    }
  }, "Projects"), Individual('https://martenfrisk.github.io/seekerslounge/', '/teachers-mock.png', '/screen-teacher-thumb.png', "Seekers' Lounge", 'Instant search engine with 45k+ lines from the "Teachers\'s Lounge" podcast.', '~50 weekly users.	Powered by AWS ElasticSearch and built with React.', true), Individual('https://martenfrisk.github.io/handbooksearch/', '/handbook-mockup2.png', '/screen-handbook.png', 'Handbook Search', 'Search engine for podcast Hollywood Handbook.', '121k+ lines. Also powered by AWS ElasticSearch.', false), Individual('https://martenfrisk.github.io/dhammapada/', '/dhamma-mock.png', '/screen-dhamma-thumb.png', 'Dhammapada Reader', 'Lightweight and distraction-free site for reading the Dhammapada.', 'Built with React.', true), Individual('https://martenfrisk.github.io/KoreanDynastyGenerator/', '/dynasty-mock.png', '/screen-dynasty-thumb.png', 'Korean Dynasty Generator', 'Generate a fully staffed, randomized medieval Korean bureaucracy.', 'Built with React.', false), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap items-stretch my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap w-full text-justify",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full text-lg font-semibold cursor-pointer md:w-1/3 hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/FootballLines/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, "Football Lines", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 22
    }
  }))), __jsx("div", {
    className: "w-full md:w-2/3 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 6
    }
  }, "View historical table placements of Swedish football teams. Built with React.")), __jsx("div", {
    className: "flex justify-center w-full h-auto mt-2 cursor-pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/FootballLines/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/screen-football-thumb.png",
    alt: "Football Lines screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  })))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 4
    }
  }), __jsx("hr", {
    className: "w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap items-stretch my-4 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap w-full my-2 text-justify",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full font-semibold cursor-pointer w-fulltext-lg md:w-1/3 hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 6
    }
  }, "Fan art"), __jsx("div", {
    className: "w-full md:w-2/3 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 6
    }
  }, "Fan art for The Teachers' Lounge podcast made using Adobe Photoshop.")), __jsx("div", {
    className: "flex justify-center w-full h-auto mt-2 cursor-pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/teachers-faces-thumb.png",
    alt: "Teachers' Lounge fan art",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 6
    }
  }))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "w-full mt-8 text-xl text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 4
    }
  }, "One-day projects"), __jsx("div", {
    className: "flex flex-wrap items-stretch my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-full text-justify md:w-2/3 md:pr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui/#/calculator",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }, "TI-108 Calculator", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 8
    }
  }))), "Calculator based on Texas Instruments TI-108. Made using only CSS and JavaScript."), __jsx("div", {
    className: "flex justify-center w-full h-auto md:w-1/3 md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui/#/calculator",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/screen-calc-thumb.png",
    alt: "TI-108 Calculator screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  })))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap items-stretch w-1/2 my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full mb-4 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui01/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 8
    }
  }, "Newsletter", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  })))), __jsx("div", {
    className: "flex justify-center w-full h-auto md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui01/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/screen-newsletter-thumb.png",
    alt: "Newsletter screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 8
    }
  })))), __jsx("div", {
    className: "flex flex-wrap items-stretch w-1/2 my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full mb-4 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui03/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 8
    }
  }, "Landing page", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 9
    }
  })))), __jsx("div", {
    className: "flex justify-center w-full h-auto md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui03/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/screen-landing.png",
    alt: "Landing page screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 8
    }
  }))))));
};
_c2 = Projects;

var _c, _c2;

$RefreshReg$(_c, "Individual");
$RefreshReg$(_c2, "Projects");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeCJdLCJuYW1lcyI6WyJJbmRpdmlkdWFsIiwibGluayIsImltZ01vY2siLCJpbWdQbGFpbiIsInRpdGxlIiwiZGVzY09uZSIsImRlc2NUd28iLCJpbWdMZWZ0IiwiYWx0VGV4dCIsIlByb2plY3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUNsQkMsSUFEa0IsRUFFbEJDLE9BRmtCLEVBR2xCQyxRQUhrQixFQUlsQkMsS0FKa0IsRUFLbEJDLE9BTGtCLEVBTWxCQyxPQU5rQixFQU9sQkMsT0FQa0IsRUFRZDtBQUNKLE1BQU1DLE9BQU8sR0FBR0osS0FBSyxHQUFHLGFBQXhCO0FBQ0EsU0FDQztBQUFLLGFBQVMsMkdBQW9HLENBQUNHLE9BQUQsSUFBWSxrQkFBaEgsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsa0ZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUcsUUFBSSxFQUFFTixJQUFUO0FBQWUsVUFBTSxFQUFDLFFBQXRCO0FBQStCLE9BQUcsRUFBQyxxQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsT0FBRyxFQUFFQyxPQUROO0FBRUMsT0FBRyxFQUFFTSxPQUZOO0FBR0MsYUFBUywyQkFBb0JELE9BQU8sR0FDakMsUUFEaUMsR0FFakMsU0FGTSwyREFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFRQztBQUFLLGFBQVMsRUFBQyxzQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUE7QUFDQyxPQUFHLEVBQUVKLFFBRE47QUFFQyxPQUFHLEVBQUVLLE9BRk47QUFHQyxhQUFTLEVBQUMs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QUFBQTtBQUFBLEtBQ0M7QUFBRyxRQUFJLEVBQUMsMENBQVI7QUFBbUQsVUFBTSxFQUFDLFFBQTFEO0FBQW1FLE9BQUcsRUFBQyxxQkFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsT0FBRyxFQUFDLHFCQURMO0FBRUMsT0FBRyxFQUFDLHlCQUZMO0FBR0MsYUFBUyxFQUFDLHNGQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELENBYkQsQ0F4QkQsQ0F6SEQsQ0FERDtBQTRLQSxDQTdLTTtNQUFNUyxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5mMmZhM2M4NGE5ZDIxOWU5ODMyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBFeHRMaW5rIH0gZnJvbSAnLi9JY29ucydcclxuXHJcbmNvbnN0IEluZGl2aWR1YWwgPSAoXHJcblx0bGluazogc3RyaW5nLFxyXG5cdGltZ01vY2s6IHN0cmluZyxcclxuXHRpbWdQbGFpbjogc3RyaW5nLFxyXG5cdHRpdGxlOiBzdHJpbmcsXHJcblx0ZGVzY09uZTogc3RyaW5nLFxyXG5cdGRlc2NUd286IHN0cmluZyxcclxuXHRpbWdMZWZ0OiBib29sZWFuXHJcbikgPT4ge1xyXG5cdGNvbnN0IGFsdFRleHQgPSB0aXRsZSArICcgc2NyZWVuc2hvdCdcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIG15LTQganVzdGlmeS1ldmVubHkgYm9yZGVyLWIgYm9yZGVyLWJsdWUtNzAwIHBiLTYgbWQ6Ym9yZGVyLXdoaXRlICR7IWltZ0xlZnQgJiYgJ2ZsZXgtcm93LXJldmVyc2UnfWB9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMCBmbGV4IHNlbGYtZW5kIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gbWQ6dy1mdWxsIG1kOmp1c3RpZnktZW5kXCI+XHJcblx0XHRcdFx0PGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRzcmM9e2ltZ01vY2t9XHJcblx0XHRcdFx0XHRcdGFsdD17YWx0VGV4dH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYWJzb2x1dGUgdG9wLTAgJHtpbWdMZWZ0XHJcblx0XHRcdFx0XHRcdFx0PyAnbGVmdC0wJ1xyXG5cdFx0XHRcdFx0XHRcdDogJ3JpZ2h0LTAnfSBoaWRkZW4gdy1hdXRvIGgtNjQgbXQtMiBtZDppbmxpbmUgbWQ6c2VsZi1lbmQgbWQ6bXQtMGB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBtZDpoaWRkZW5cIj5cclxuXHJcblx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdHNyYz17aW1nUGxhaW59XHJcblx0XHRcdFx0XHRcdGFsdD17YWx0VGV4dH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctMi8zIGgtYXV0byBtdC0yIGJvcmRlci0yIGJvcmRlci1ibHVlLTMwMCByb3VuZGVkLW1kIG1kOmhpZGRlblwiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17YHotMTAgc2VsZi1lbmQgdy1mdWxsICAke2ltZ0xlZnRcclxuXHRcdFx0XHRcdD8gJ21kOm1sLTU2J1xyXG5cdFx0XHRcdFx0OiAnbWQ6bXItNTYnfSB0ZXh0LWp1c3RpZnkgbWQ6bWItMjAgbWQ6dy0zLzRgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtdC00IG1kOm10LTAgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgJHtpbWdMZWZ0XHJcblx0XHRcdFx0XHRcdD8gJ21kOnRleHQtbGVmdCdcclxuXHRcdFx0XHRcdFx0OiAnbWQ6dGV4dC1yaWdodCd9IGhvdmVyOnVuZGVybGluZWB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHR7dGl0bGV9XHJcblx0XHRcdFx0XHRcdDxFeHRMaW5rIC8+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2B0ZXh0LWJhc2UgdGV4dC1sZWZ0ICR7aW1nTGVmdCA/ICdtZDp0ZXh0LWxlZnQnIDogJ21kOnRleHQtcmlnaHQnfWB9PlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibXQtMlwiPntkZXNjT25lfTwvcD5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm10LTFcIj57ZGVzY1R3b308L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC14bCB0ZXh0LWNlbnRlclwiPlByb2plY3RzPC9kaXY+XHJcblx0XHRcdHtJbmRpdmlkdWFsKFxyXG5cdFx0XHRcdCdodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9zZWVrZXJzbG91bmdlLycsXHJcblx0XHRcdFx0Jy90ZWFjaGVycy1tb2NrLnBuZycsXHJcblx0XHRcdFx0Jy9zY3JlZW4tdGVhY2hlci10aHVtYi5wbmcnLFxyXG5cdFx0XHRcdFwiU2Vla2VycycgTG91bmdlXCIsXHJcblx0XHRcdFx0J0luc3RhbnQgc2VhcmNoIGVuZ2luZSB3aXRoIDQ1aysgbGluZXMgZnJvbSB0aGUgXCJUZWFjaGVyc1xcJ3MgTG91bmdlXCIgcG9kY2FzdC4nLFxyXG5cdFx0XHRcdCd+NTAgd2Vla2x5IHVzZXJzLlx0UG93ZXJlZCBieSBBV1MgRWxhc3RpY1NlYXJjaCBhbmQgYnVpbHQgd2l0aCBSZWFjdC4nLFxyXG5cdFx0XHRcdHRydWVcclxuXHRcdFx0KX1cclxuXHRcdFx0e0luZGl2aWR1YWwoXHJcblx0XHRcdFx0J2h0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL2hhbmRib29rc2VhcmNoLycsXHJcblx0XHRcdFx0Jy9oYW5kYm9vay1tb2NrdXAyLnBuZycsXHJcblx0XHRcdFx0Jy9zY3JlZW4taGFuZGJvb2sucG5nJyxcclxuXHRcdFx0XHQnSGFuZGJvb2sgU2VhcmNoJyxcclxuXHRcdFx0XHQnU2VhcmNoIGVuZ2luZSBmb3IgcG9kY2FzdCBIb2xseXdvb2QgSGFuZGJvb2suJyxcclxuXHRcdFx0XHQnMTIxaysgbGluZXMuIEFsc28gcG93ZXJlZCBieSBBV1MgRWxhc3RpY1NlYXJjaC4nLFxyXG5cdFx0XHRcdGZhbHNlXHJcblx0XHRcdCl9XHJcblx0XHRcdHtJbmRpdmlkdWFsKFxyXG5cdFx0XHRcdCdodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kaGFtbWFwYWRhLycsXHJcblx0XHRcdFx0Jy9kaGFtbWEtbW9jay5wbmcnLFxyXG5cdFx0XHRcdCcvc2NyZWVuLWRoYW1tYS10aHVtYi5wbmcnLFxyXG5cdFx0XHRcdCdEaGFtbWFwYWRhIFJlYWRlcicsXHJcblx0XHRcdFx0J0xpZ2h0d2VpZ2h0IGFuZCBkaXN0cmFjdGlvbi1mcmVlIHNpdGUgZm9yIHJlYWRpbmcgdGhlIERoYW1tYXBhZGEuJyxcclxuXHRcdFx0XHQnQnVpbHQgd2l0aCBSZWFjdC4nLFxyXG5cdFx0XHRcdHRydWVcclxuXHRcdFx0KX1cclxuXHRcdFx0e0luZGl2aWR1YWwoXHJcblx0XHRcdFx0J2h0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL0tvcmVhbkR5bmFzdHlHZW5lcmF0b3IvJyxcclxuXHRcdFx0XHQnL2R5bmFzdHktbW9jay5wbmcnLFxyXG5cdFx0XHRcdCcvc2NyZWVuLWR5bmFzdHktdGh1bWIucG5nJyxcclxuXHRcdFx0XHQnS29yZWFuIER5bmFzdHkgR2VuZXJhdG9yJyxcclxuXHRcdFx0XHQnR2VuZXJhdGUgYSBmdWxseSBzdGFmZmVkLCByYW5kb21pemVkIG1lZGlldmFsIEtvcmVhbiBidXJlYXVjcmFjeS4nLFxyXG5cdFx0XHRcdCdCdWlsdCB3aXRoIFJlYWN0LicsXHJcblx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0KX1cclxuXHJcblx0XHRcdDxociAvPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIG15LTYganVzdGlmeS1ldmVubHlcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIHctZnVsbCB0ZXh0LWp1c3RpZnlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGcgZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlciBtZDp3LTEvMyBob3Zlcjp1bmRlcmxpbmVcIj5cclxuXHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vRm9vdGJhbGxMaW5lcy9cIlxyXG5cdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXHJcblx0XHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRGb290YmFsbCBMaW5lczxFeHRMaW5rIC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0yLzMgXCI+XHJcblx0XHRcdFx0XHRcdFZpZXcgaGlzdG9yaWNhbCB0YWJsZSBwbGFjZW1lbnRzIG9mIFN3ZWRpc2ggZm9vdGJhbGwgdGVhbXMuIEJ1aWx0IHdpdGggUmVhY3QuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtYXV0byBtdC0yIGN1cnNvci1wb2ludGVyXCI+XHJcblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vRm9vdGJhbGxMaW5lcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc2NyZWVuLWZvb3RiYWxsLXRodW1iLnBuZ1wiXHJcblx0XHRcdFx0XHRcdFx0YWx0PVwiRm9vdGJhbGwgTGluZXMgc2NyZWVuc2hvdFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBtdC0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW1kIHNoYWRvdy1sZyBtZDpzZWxmLWVuZCBtZDptdC0wXCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxociAvPlxyXG5cclxuXHRcdFxyXG5cclxuXHRcdFx0PGhyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCBteS00IGp1c3RpZnktZXZlbmx5XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCB3LWZ1bGwgbXktMiB0ZXh0LWp1c3RpZnlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgdy1mdWxsdGV4dC1sZyBtZDp3LTEvMyBob3Zlcjp1bmRlcmxpbmVcIj5cclxuXHRcdFx0XHRcdFx0RmFuIGFydFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTIvMyBcIj5cclxuXHRcdFx0XHRcdFx0RmFuIGFydCBmb3IgVGhlIFRlYWNoZXJzJyBMb3VuZ2UgcG9kY2FzdCBtYWRlIHVzaW5nIEFkb2JlIFBob3Rvc2hvcC5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1hdXRvIG10LTIgY3Vyc29yLXBvaW50ZXJcIj5cclxuXHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0c3JjPVwiL3RlYWNoZXJzLWZhY2VzLXRodW1iLnBuZ1wiXHJcblx0XHRcdFx0XHRcdGFsdD1cIlRlYWNoZXJzJyBMb3VuZ2UgZmFuIGFydFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gbXQtMiBib3JkZXItMiBib3JkZXItZ3JheS00MDAgcm91bmRlZC1tZCBzaGFkb3ctbGcgbWQ6c2VsZi1lbmQgbWQ6bXQtMFwiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxociAvPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtOCB0ZXh0LXhsIHRleHQtY2VudGVyXCI+T25lLWRheSBwcm9qZWN0czwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2ggbXktNiBqdXN0aWZ5LWV2ZW5seVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtanVzdGlmeSBtZDp3LTIvMyBtZDpwci00XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmVcIj5cclxuXHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vZGFpbHl1aS8jL2NhbGN1bGF0b3JcIlxyXG5cdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXHJcblx0XHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRUSS0xMDggQ2FsY3VsYXRvclxyXG5cdFx0XHRcdFx0XHRcdDxFeHRMaW5rIC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0Q2FsY3VsYXRvciBiYXNlZCBvbiBUZXhhcyBJbnN0cnVtZW50cyBUSS0xMDguIE1hZGUgdXNpbmcgb25seSBDU1MgYW5kIEphdmFTY3JpcHQuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gbWQ6dy0xLzMgbWQ6anVzdGlmeS1lbmRcIj5cclxuXHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kYWlseXVpLyMvY2FsY3VsYXRvclwiXHJcblx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXHJcblx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0c3JjPVwiL3NjcmVlbi1jYWxjLXRodW1iLnBuZ1wiXHJcblx0XHRcdFx0XHRcdFx0YWx0PVwiVEktMTA4IENhbGN1bGF0b3Igc2NyZWVuc2hvdFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBtdC0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW1kIHNoYWRvdy1sZyBtZDpzZWxmLWVuZCBtZDptdC0wXCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxociAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIHctZnVsbFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCB3LTEvMiBteS02IGp1c3RpZnktZXZlbmx5XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYi00IHRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIGhvdmVyOnVuZGVybGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vZGFpbHl1aTAxL1wiXHJcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0TmV3c2xldHRlclxyXG5cdFx0XHRcdFx0XHRcdFx0PEV4dExpbmsgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtYXV0byBtZDpqdXN0aWZ5LWVuZFwiPlxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vZGFpbHl1aTAxL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvc2NyZWVuLW5ld3NsZXR0ZXItdGh1bWIucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRcdGFsdD1cIk5ld3NsZXR0ZXIgc2NyZWVuc2hvdFwiXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG10LTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbWQgc2hhZG93LWxnIG1kOnNlbGYtZW5kIG1kOm10LTBcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCB3LTEvMiBteS02IGp1c3RpZnktZXZlbmx5XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYi00IHRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIGhvdmVyOnVuZGVybGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vZGFpbHl1aTAzL1wiXHJcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0TGFuZGluZyBwYWdlXHJcblx0XHRcdFx0XHRcdFx0XHQ8RXh0TGluayAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1hdXRvIG1kOmp1c3RpZnktZW5kXCI+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kYWlseXVpMDMvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9zY3JlZW4tbGFuZGluZy5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PVwiTGFuZGluZyBwYWdlIHNjcmVlbnNob3RcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBtdC0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW1kIHNoYWRvdy1sZyBtZDpzZWxmLWVuZCBtZDptdC0wXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9