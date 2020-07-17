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
    className: "flex flex-wrap items-stretch my-4 justify-evenly ".concat(!imgLeft && 'flex-row-reverse'),
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
  }), __jsx("img", {
    src: imgPlain,
    alt: altText,
    className: "inline w-1/2 h-auto mx-auto mt-2 border-2 border-blue-300 rounded-md md:hidden md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }))), __jsx("div", {
    className: "z-10 self-end w-full md:pl-10 ".concat(imgLeft ? 'md:ml-64' : 'md:mr-64', " text-justify md:mb-20 md:w-3/4"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "text-2xl font-semibold mt-4 md:mt-0 text-center cursor-pointer ".concat(imgLeft ? 'md:text-left' : 'md:text-right', " hover:underline"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 6
    }
  }, title, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }))), __jsx("div", {
    className: "text-base text-left ".concat(imgLeft ? 'md:text-left' : 'md:text-right'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 6
    }
  }, descOne), __jsx("p", {
    className: "mt-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
      lineNumber: 58,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "w-full text-xl text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }
  }, "Projects"), Individual('https://martenfrisk.github.io/seekerslounge/', '/teachers-mock.png', '/screen-teacher-thumb.png', "Seekers' Lounge", 'Instant search engine with 45k+ lines from the "Teachers\'s Lounge" podcast.', '~50 weekly users.	Powered by AWS ElasticSearch and built with React.', true), Individual('https://martenfrisk.github.io/handbooksearch/', '/handbook-mockup2.png', '/screen-handbook.png', 'Handbook Search', 'Search engine for podcast Hollywood Handbook.', '121k+ lines. Also powered by AWS ElasticSearch.', false), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap items-stretch my-4 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-full text-justify md:w-2/3 md:pr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dhammapada/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, "Dhammapada Reader", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 8
    }
  }))), "Lightweight and distraction-free site for reading the Dhammapada. Built with React."), __jsx("div", {
    className: "flex justify-center w-full h-auto md:w-1/3 md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dhammapada/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/screen-dhamma-thumb.png",
    alt: "Dhammapada Reader screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  })))), __jsx("hr", {
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
  }), __jsx("div", {
    className: "flex flex-wrap items-stretch my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-full text-justify md:w-2/3 md:pr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/KoreanDynastyGenerator/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, "Korean Dynasty Generator", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 8
    }
  }))), "Generate a fully staffed, randomized medieval Korean bureaucracy. Built with React."), __jsx("div", {
    className: "flex justify-center w-full h-auto md:w-1/3 md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/KoreanDynastyGenerator/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/screen-dynasty-thumb.png",
    alt: "Korean Dynasty Generator screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  })))), __jsx("hr", {
    className: "w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap items-stretch my-4 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap w-full my-2 text-justify",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full font-semibold cursor-pointer w-fulltext-lg md:w-1/3 hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 6
    }
  }, "Fan art"), __jsx("div", {
    className: "w-full md:w-2/3 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 6
    }
  }, "Fan art for The Teachers' Lounge podcast made using Adobe Photoshop.")), __jsx("div", {
    className: "flex justify-center w-full h-auto mt-2 cursor-pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/teachers-faces-thumb.png",
    alt: "Teachers' Lounge fan art",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 6
    }
  }))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "w-full mt-8 text-xl text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 4
    }
  }, "One-day projects"), __jsx("div", {
    className: "flex flex-wrap items-stretch my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-full text-justify md:w-2/3 md:pr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui/#/calculator",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }
  }, "TI-108 Calculator", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 8
    }
  }))), "Calculator based on Texas Instruments TI-108. Made using only CSS and JavaScript."), __jsx("div", {
    className: "flex justify-center w-full h-auto md:w-1/3 md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui/#/calculator",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/screen-calc-thumb.png",
    alt: "TI-108 Calculator screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 7
    }
  })))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap items-stretch w-1/2 my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full mb-4 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui01/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 8
    }
  }, "Newsletter", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 9
    }
  })))), __jsx("div", {
    className: "flex justify-center w-full h-auto md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui01/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/screen-newsletter-thumb.png",
    alt: "Newsletter screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 8
    }
  })))), __jsx("div", {
    className: "flex flex-wrap items-stretch w-1/2 my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full mb-4 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui03/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 8
    }
  }, "Landing page", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 9
    }
  })))), __jsx("div", {
    className: "flex justify-center w-full h-auto md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui03/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/screen-landing.png",
    alt: "Landing page screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeCJdLCJuYW1lcyI6WyJJbmRpdmlkdWFsIiwibGluayIsImltZ01vY2siLCJpbWdQbGFpbiIsInRpdGxlIiwiZGVzY09uZSIsImRlc2NUd28iLCJpbWdMZWZ0IiwiYWx0VGV4dCIsIlByb2plY3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUNsQkMsSUFEa0IsRUFFbEJDLE9BRmtCLEVBR2xCQyxRQUhrQixFQUlsQkMsS0FKa0IsRUFLbEJDLE9BTGtCLEVBTWxCQyxPQU5rQixFQU9sQkMsT0FQa0IsRUFRZDtBQUNKLE1BQU1DLE9BQU8sR0FBR0osS0FBSyxHQUFHLGFBQXhCO0FBQ0EsU0FDQztBQUFLLGFBQVMsNkRBQXNELENBQUNHLE9BQUQsSUFBWSxrQkFBbEUsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsa0ZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUcsUUFBSSxFQUFFTixJQUFUO0FBQWUsVUFBTSxFQUFDLFFBQXRCO0FBQStCLE9BQUcsRUFBQyxxQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsT0FBRyxFQUFFQyxPQUROO0FBRUMsT0FBRyxFQUFFTSxPQUZOO0FBR0MsYUFBUywyQkFBb0JELE9BQU8sR0FDakMsUUFEaUMsR0FFakMsU0FGTSwyREFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFRQztBQUNDLE9BQUcsRUFBRUosUUFETjtBQUVDLE9BQUcsRUFBRUssT0FGTjtBQUdDLGFBQVMsRUFBQyxvR0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkQsQ0FERCxDQURELEVBaUJD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QUFNLEVBQUMsUUFGUjtBQUdDLE9BQUcsRUFBQyxxQkFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU1DLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5ELENBREQsQ0FERCxDQURELEVBYUM7QUFBSyxhQUFTLEVBQUMsa0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUcsUUFBSSxFQUFDLDBDQUFSO0FBQW1ELFVBQU0sRUFBQyxRQUExRDtBQUFtRSxPQUFHLEVBQUMscUJBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUNDLE9BQUcsRUFBQyxxQkFETDtBQUVDLE9BQUcsRUFBQyx5QkFGTDtBQUdDLGFBQVMsRUFBQyxzRkFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxDQWJELENBeEJELENBdkpELENBREQ7QUEwTUEsQ0EzTU07TUFBTVMsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMmQ5YmZhMGExYTM1ZjY1YjU1NDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRXh0TGluayB9IGZyb20gJy4vSWNvbnMnXHJcblxyXG5jb25zdCBJbmRpdmlkdWFsID0gKFxyXG5cdGxpbms6IHN0cmluZyxcclxuXHRpbWdNb2NrOiBzdHJpbmcsXHJcblx0aW1nUGxhaW46IHN0cmluZyxcclxuXHR0aXRsZTogc3RyaW5nLFxyXG5cdGRlc2NPbmU6IHN0cmluZyxcclxuXHRkZXNjVHdvOiBzdHJpbmcsXHJcblx0aW1nTGVmdDogYm9vbGVhblxyXG4pID0+IHtcclxuXHRjb25zdCBhbHRUZXh0ID0gdGl0bGUgKyAnIHNjcmVlbnNob3QnXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCBteS00IGp1c3RpZnktZXZlbmx5ICR7IWltZ0xlZnQgJiYgJ2ZsZXgtcm93LXJldmVyc2UnfWB9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMCBmbGV4IHNlbGYtZW5kIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gbWQ6dy1mdWxsIG1kOmp1c3RpZnktZW5kXCI+XHJcblx0XHRcdFx0PGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRzcmM9e2ltZ01vY2t9XHJcblx0XHRcdFx0XHRcdGFsdD17YWx0VGV4dH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYWJzb2x1dGUgdG9wLTAgJHtpbWdMZWZ0XHJcblx0XHRcdFx0XHRcdFx0PyAnbGVmdC0wJ1xyXG5cdFx0XHRcdFx0XHRcdDogJ3JpZ2h0LTAnfSBoaWRkZW4gdy1hdXRvIGgtNjQgbXQtMiBtZDppbmxpbmUgbWQ6c2VsZi1lbmQgbWQ6bXQtMGB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRzcmM9e2ltZ1BsYWlufVxyXG5cdFx0XHRcdFx0XHRhbHQ9e2FsdFRleHR9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImlubGluZSB3LTEvMiBoLWF1dG8gbXgtYXV0byBtdC0yIGJvcmRlci0yIGJvcmRlci1ibHVlLTMwMCByb3VuZGVkLW1kIG1kOmhpZGRlbiBtZDpzZWxmLWVuZCBtZDptdC0wXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17YHotMTAgc2VsZi1lbmQgdy1mdWxsIG1kOnBsLTEwICR7aW1nTGVmdFxyXG5cdFx0XHRcdFx0PyAnbWQ6bWwtNjQnXHJcblx0XHRcdFx0XHQ6ICdtZDptci02NCd9IHRleHQtanVzdGlmeSBtZDptYi0yMCBtZDp3LTMvNGB9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2B0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG10LTQgbWQ6bXQtMCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlciAke2ltZ0xlZnRcclxuXHRcdFx0XHRcdFx0PyAnbWQ6dGV4dC1sZWZ0J1xyXG5cdFx0XHRcdFx0XHQ6ICdtZDp0ZXh0LXJpZ2h0J30gaG92ZXI6dW5kZXJsaW5lYH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcblx0XHRcdFx0XHRcdHt0aXRsZX1cclxuXHRcdFx0XHRcdFx0PEV4dExpbmsgLz5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHRleHQtYmFzZSB0ZXh0LWxlZnQgJHtpbWdMZWZ0ID8gJ21kOnRleHQtbGVmdCcgOiAnbWQ6dGV4dC1yaWdodCd9YH0+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtdC0yXCI+e2Rlc2NPbmV9PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibXQtMVwiPntkZXNjVHdvfTwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXhsIHRleHQtY2VudGVyXCI+UHJvamVjdHM8L2Rpdj5cclxuXHRcdFx0e0luZGl2aWR1YWwoXHJcblx0XHRcdFx0J2h0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL3NlZWtlcnNsb3VuZ2UvJyxcclxuXHRcdFx0XHQnL3RlYWNoZXJzLW1vY2sucG5nJyxcclxuXHRcdFx0XHQnL3NjcmVlbi10ZWFjaGVyLXRodW1iLnBuZycsXHJcblx0XHRcdFx0XCJTZWVrZXJzJyBMb3VuZ2VcIixcclxuXHRcdFx0XHQnSW5zdGFudCBzZWFyY2ggZW5naW5lIHdpdGggNDVrKyBsaW5lcyBmcm9tIHRoZSBcIlRlYWNoZXJzXFwncyBMb3VuZ2VcIiBwb2RjYXN0LicsXHJcblx0XHRcdFx0J341MCB3ZWVrbHkgdXNlcnMuXHRQb3dlcmVkIGJ5IEFXUyBFbGFzdGljU2VhcmNoIGFuZCBidWlsdCB3aXRoIFJlYWN0LicsXHJcblx0XHRcdFx0dHJ1ZVxyXG5cdFx0XHQpfVxyXG5cdFx0XHR7SW5kaXZpZHVhbChcclxuXHRcdFx0XHQnaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vaGFuZGJvb2tzZWFyY2gvJyxcclxuXHRcdFx0XHQnL2hhbmRib29rLW1vY2t1cDIucG5nJyxcclxuXHRcdFx0XHQnL3NjcmVlbi1oYW5kYm9vay5wbmcnLFxyXG5cdFx0XHRcdCdIYW5kYm9vayBTZWFyY2gnLFxyXG5cdFx0XHRcdCdTZWFyY2ggZW5naW5lIGZvciBwb2RjYXN0IEhvbGx5d29vZCBIYW5kYm9vay4nLFxyXG5cdFx0XHRcdCcxMjFrKyBsaW5lcy4gQWxzbyBwb3dlcmVkIGJ5IEFXUyBFbGFzdGljU2VhcmNoLicsXHJcblx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0KX1cclxuXHRcdFx0PGhyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCBteS00IGp1c3RpZnktZXZlbmx5XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1qdXN0aWZ5IG1kOnctMi8zIG1kOnByLTRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIGhvdmVyOnVuZGVybGluZVwiPlxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vZGhhbW1hcGFkYS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0RGhhbW1hcGFkYSBSZWFkZXJcclxuXHRcdFx0XHRcdFx0XHQ8RXh0TGluayAvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdExpZ2h0d2VpZ2h0IGFuZCBkaXN0cmFjdGlvbi1mcmVlIHNpdGUgZm9yIHJlYWRpbmcgdGhlIERoYW1tYXBhZGEuIEJ1aWx0IHdpdGggUmVhY3QuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gbWQ6dy0xLzMgbWQ6anVzdGlmeS1lbmRcIj5cclxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kaGFtbWFwYWRhL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuXHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdHNyYz1cIi9zY3JlZW4tZGhhbW1hLXRodW1iLnBuZ1wiXHJcblx0XHRcdFx0XHRcdFx0YWx0PVwiRGhhbW1hcGFkYSBSZWFkZXIgc2NyZWVuc2hvdFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBtdC0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW1kIHNoYWRvdy1sZyBtZDpzZWxmLWVuZCBtZDptdC0wXCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8aHIgLz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCBteS02IGp1c3RpZnktZXZlbmx5XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCB3LWZ1bGwgdGV4dC1qdXN0aWZ5XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgbWQ6dy0xLzMgaG92ZXI6dW5kZXJsaW5lXCI+XHJcblx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL0Zvb3RiYWxsTGluZXMvXCJcclxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxyXG5cdFx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0Rm9vdGJhbGwgTGluZXM8RXh0TGluayAvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMi8zIFwiPlxyXG5cdFx0XHRcdFx0XHRWaWV3IGhpc3RvcmljYWwgdGFibGUgcGxhY2VtZW50cyBvZiBTd2VkaXNoIGZvb3RiYWxsIHRlYW1zLiBCdWlsdCB3aXRoIFJlYWN0LlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gbXQtMiBjdXJzb3ItcG9pbnRlclwiPlxyXG5cdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL0Zvb3RiYWxsTGluZXMvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0c3JjPVwiL3NjcmVlbi1mb290YmFsbC10aHVtYi5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIkZvb3RiYWxsIExpbmVzIHNjcmVlbnNob3RcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gbXQtMiBib3JkZXItMiBib3JkZXItZ3JheS00MDAgcm91bmRlZC1tZCBzaGFkb3ctbGcgbWQ6c2VsZi1lbmQgbWQ6bXQtMFwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8aHIgLz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCBteS02IGp1c3RpZnktZXZlbmx5XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1qdXN0aWZ5IG1kOnctMi8zIG1kOnByLTRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIGhvdmVyOnVuZGVybGluZVwiPlxyXG5cdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9Lb3JlYW5EeW5hc3R5R2VuZXJhdG9yL1wiXHJcblx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdEtvcmVhbiBEeW5hc3R5IEdlbmVyYXRvclxyXG5cdFx0XHRcdFx0XHRcdDxFeHRMaW5rIC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0R2VuZXJhdGUgYSBmdWxseSBzdGFmZmVkLCByYW5kb21pemVkIG1lZGlldmFsIEtvcmVhbiBidXJlYXVjcmFjeS4gQnVpbHQgd2l0aCBSZWFjdC5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtYXV0byBtZDp3LTEvMyBtZDpqdXN0aWZ5LWVuZFwiPlxyXG5cdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL0tvcmVhbkR5bmFzdHlHZW5lcmF0b3IvXCJcclxuXHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc2NyZWVuLWR5bmFzdHktdGh1bWIucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRhbHQ9XCJLb3JlYW4gRHluYXN0eSBHZW5lcmF0b3Igc2NyZWVuc2hvdFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBtdC0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW1kIHNoYWRvdy1sZyBtZDpzZWxmLWVuZCBtZDptdC0wXCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8aHIgY2xhc3NOYW1lPVwidy1mdWxsXCIgLz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIG15LTQganVzdGlmeS1ldmVubHlcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIHctZnVsbCBteS0yIHRleHQtanVzdGlmeVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlciB3LWZ1bGx0ZXh0LWxnIG1kOnctMS8zIGhvdmVyOnVuZGVybGluZVwiPlxyXG5cdFx0XHRcdFx0XHRGYW4gYXJ0XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMi8zIFwiPlxyXG5cdFx0XHRcdFx0XHRGYW4gYXJ0IGZvciBUaGUgVGVhY2hlcnMnIExvdW5nZSBwb2RjYXN0IG1hZGUgdXNpbmcgQWRvYmUgUGhvdG9zaG9wLlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gbXQtMiBjdXJzb3ItcG9pbnRlclwiPlxyXG5cdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRzcmM9XCIvdGVhY2hlcnMtZmFjZXMtdGh1bWIucG5nXCJcclxuXHRcdFx0XHRcdFx0YWx0PVwiVGVhY2hlcnMnIExvdW5nZSBmYW4gYXJ0XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBtdC0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW1kIHNoYWRvdy1sZyBtZDpzZWxmLWVuZCBtZDptdC0wXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGhyIC8+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtdC04IHRleHQteGwgdGV4dC1jZW50ZXJcIj5PbmUtZGF5IHByb2plY3RzPC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCBteS02IGp1c3RpZnktZXZlbmx5XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1qdXN0aWZ5IG1kOnctMi8zIG1kOnByLTRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIGhvdmVyOnVuZGVybGluZVwiPlxyXG5cdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kYWlseXVpLyMvY2FsY3VsYXRvclwiXHJcblx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFRJLTEwOCBDYWxjdWxhdG9yXHJcblx0XHRcdFx0XHRcdFx0PEV4dExpbmsgLz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRDYWxjdWxhdG9yIGJhc2VkIG9uIFRleGFzIEluc3RydW1lbnRzIFRJLTEwOC4gTWFkZSB1c2luZyBvbmx5IENTUyBhbmQgSmF2YVNjcmlwdC5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtYXV0byBtZDp3LTEvMyBtZDpqdXN0aWZ5LWVuZFwiPlxyXG5cdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL2RhaWx5dWkvIy9jYWxjdWxhdG9yXCJcclxuXHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc2NyZWVuLWNhbGMtdGh1bWIucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRhbHQ9XCJUSS0xMDggQ2FsY3VsYXRvciBzY3JlZW5zaG90XCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG10LTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbWQgc2hhZG93LWxnIG1kOnNlbGYtZW5kIG1kOm10LTBcIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGhyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgdy1mdWxsXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIHctMS8yIG15LTYganVzdGlmeS1ldmVubHlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTQgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dW5kZXJsaW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kYWlseXVpMDEvXCJcclxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXHJcblx0XHRcdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHROZXdzbGV0dGVyXHJcblx0XHRcdFx0XHRcdFx0XHQ8RXh0TGluayAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1hdXRvIG1kOmp1c3RpZnktZW5kXCI+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kYWlseXVpMDEvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9zY3JlZW4tbmV3c2xldHRlci10aHVtYi5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PVwiTmV3c2xldHRlciBzY3JlZW5zaG90XCJcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gbXQtMiBib3JkZXItMiBib3JkZXItZ3JheS00MDAgcm91bmRlZC1tZCBzaGFkb3ctbGcgbWQ6c2VsZi1lbmQgbWQ6bXQtMFwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIHctMS8yIG15LTYganVzdGlmeS1ldmVubHlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTQgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dW5kZXJsaW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kYWlseXVpMDMvXCJcclxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXHJcblx0XHRcdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRMYW5kaW5nIHBhZ2VcclxuXHRcdFx0XHRcdFx0XHRcdDxFeHRMaW5rIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gbWQ6anVzdGlmeS1lbmRcIj5cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL2RhaWx5dWkwMy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3JjPVwiL3NjcmVlbi1sYW5kaW5nLnBuZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJMYW5kaW5nIHBhZ2Ugc2NyZWVuc2hvdFwiXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG10LTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbWQgc2hhZG93LWxnIG1kOnNlbGYtZW5kIG1kOm10LTBcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=