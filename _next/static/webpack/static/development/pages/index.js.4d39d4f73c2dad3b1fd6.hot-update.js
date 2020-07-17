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
  var isLeft = imgLeft ? "flex flex-wrap items-stretch my-4 justify-evenly" : "flex flex-row-reverse flex-wrap items-stretch my-4 justify-evenly";
  var isLeftImg = imgLeft ? "absolute top-0 left-0 hidden w-auto h-64 mt-2 md:inline md:self-end md:mt-0" : "absolute top-0 right-0 hidden w-auto h-64 mt-2 md:inline md:self-end md:mt-0 ";
  var isLeftTxt = imgLeft ? "z-10 self-end w-full pl-10 md:ml-64 text-justify md:mb-20 md:w-3/4" : "z-10 self-end w-full pl-10 md:mr-64 text-justify md:mb-20 md:w-3/4 ";
  return __jsx("div", {
    className: isLeft,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "relative z-0 flex self-end justify-center w-full h-auto md:w-full md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }
  }, __jsx("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: imgMock,
    alt: altText,
    className: isLeftImg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 6
    }
  }), __jsx("img", {
    src: imgPlain,
    alt: altText,
    className: "inline w-full h-auto mt-2 border-2 border-blue-300 rounded-md md:hidden md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 6
    }
  }))), __jsx("div", {
    className: isLeftTxt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "text-2xl font-semibold text-center cursor-pointer md:text-left hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }, title, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 14
    }
  }))), __jsx("div", {
    className: "text-base text-left md:text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 6
    }
  }, descOne), __jsx("p", {
    className: "mt-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
      lineNumber: 50,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "w-full text-xl text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }
  }, "Projects"), Individual('https://martenfrisk.github.io/seekerslounge/', '/teachers-mock.png', '/screen-teacher-thumb.png', 'Seekers\' Lounge', 'Instant search engine with 45k+ lines from the "Teachers\'s Lounge" podcast.', '~50 weekly users.	Powered by AWS ElasticSearch and built with React.', true), Individual('https://martenfrisk.github.io/handbooksearch/', '/handbook-mockup2.png', '/screen-handbook.png', 'Handbook Search', 'Search engine for podcast Hollywood Handbook.', '121k+ lines. Also powered by AWS ElasticSearch.', false), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap items-stretch my-4 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-full text-justify md:w-2/3 md:pr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dhammapada/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, "Dhammapada Reader", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 8
    }
  }))), "Lightweight and distraction-free site for reading the Dhammapada. Built with React."), __jsx("div", {
    className: "flex justify-center w-full h-auto md:w-1/3 md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dhammapada/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/screen-dhamma-thumb.png",
    alt: "Dhammapada Reader screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  })))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap items-stretch my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap w-full text-justify",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full text-lg font-semibold cursor-pointer md:w-1/3 hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/FootballLines/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, "Football Lines", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 22
    }
  }))), __jsx("div", {
    className: "w-full md:w-2/3 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 6
    }
  }, "View historical table placements of Swedish football teams. Built with React.")), __jsx("div", {
    className: "flex justify-center w-full h-auto mt-2 cursor-pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/FootballLines/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/screen-football-thumb.png",
    alt: "Football Lines screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  })))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap items-stretch my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-full text-justify md:w-2/3 md:pr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/KoreanDynastyGenerator/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, "Korean Dynasty Generator", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 8
    }
  }))), "Generate a fully staffed, randomized medieval Korean bureaucracy. Built with React."), __jsx("div", {
    className: "flex justify-center w-full h-auto md:w-1/3 md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/KoreanDynastyGenerator/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/screen-dynasty-thumb.png",
    alt: "Korean Dynasty Generator screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  })))), __jsx("hr", {
    className: "w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap items-stretch my-4 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap w-full my-2 text-justify",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full font-semibold cursor-pointer w-fulltext-lg md:w-1/3 hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 6
    }
  }, "Fan art"), __jsx("div", {
    className: "w-full md:w-2/3 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 6
    }
  }, "Fan art for The Teachers' Lounge podcast made using Adobe Photoshop.")), __jsx("div", {
    className: "flex justify-center w-full h-auto mt-2 cursor-pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/teachers-faces-thumb.png",
    alt: "Teachers' Lounge fan art",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 6
    }
  }))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "w-full mt-8 text-xl text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 4
    }
  }, "One-day projects"), __jsx("div", {
    className: "flex flex-wrap items-stretch my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-full text-justify md:w-2/3 md:pr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui/#/calculator",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }
  }, "TI-108 Calculator", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 8
    }
  }))), "Calculator based on Texas Instruments TI-108. Made using only CSS and JavaScript."), __jsx("div", {
    className: "flex justify-center w-full h-auto md:w-1/3 md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui/#/calculator",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/screen-calc-thumb.png",
    alt: "TI-108 Calculator screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  })))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap items-stretch w-1/2 my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full mb-4 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui01/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 8
    }
  }, "Newsletter", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 9
    }
  })))), __jsx("div", {
    className: "flex justify-center w-full h-auto md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui01/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/screen-newsletter-thumb.png",
    alt: "Newsletter screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 8
    }
  })))), __jsx("div", {
    className: "flex flex-wrap items-stretch w-1/2 my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full mb-4 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui03/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 8
    }
  }, "Landing page", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 9
    }
  })))), __jsx("div", {
    className: "flex justify-center w-full h-auto md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui03/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/screen-landing.png",
    alt: "Landing page screenshot",
    className: "w-full h-auto mt-2 border-2 border-gray-400 rounded-md shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeCJdLCJuYW1lcyI6WyJJbmRpdmlkdWFsIiwibGluayIsImltZ01vY2siLCJpbWdQbGFpbiIsInRpdGxlIiwiZGVzY09uZSIsImRlc2NUd28iLCJpbWdMZWZ0IiwiYWx0VGV4dCIsImlzTGVmdCIsImlzTGVmdEltZyIsImlzTGVmdFR4dCIsIlByb2plY3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUNsQkMsSUFEa0IsRUFFbEJDLE9BRmtCLEVBR2xCQyxRQUhrQixFQUlsQkMsS0FKa0IsRUFLbEJDLE9BTGtCLEVBTWxCQyxPQU5rQixFQU9sQkMsT0FQa0IsRUFRZDtBQUNKLE1BQU1DLE9BQU8sR0FBR0osS0FBSyxHQUFHLGFBQXhCO0FBQ0EsTUFBTUssTUFBTSxHQUFHRixPQUFPLEdBQUcsa0RBQUgsR0FBd0QsbUVBQTlFO0FBQ0EsTUFBTUcsU0FBUyxHQUFHSCxPQUFPLEdBQUcsNkVBQUgsR0FBbUYsK0VBQTVHO0FBQ0EsTUFBTUksU0FBUyxHQUFHSixPQUFPLEdBQUcsb0VBQUgsR0FBMEUscUVBQW5HO0FBQ0EsU0FDQztBQUFLLGFBQVMsRUFBRUUsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLGtGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLFFBQUksRUFBRVIsSUFBVDtBQUFlLFVBQU0sRUFBQyxRQUF0QjtBQUErQixPQUFHLEVBQUMscUJBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUNDLE9BQUcsRUFBRUMsT0FETjtBQUVDLE9BQUcsRUFBRU0sT0FGTjtBQUdDLGFBQVMsRUFBRUUsU0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUE7QUFBQSxLQUNDO0FBQ0MsUUFBSSxFQUFDLDBDQUROO0FBRUMsVUFBTSxFQUFDLFFBRlI7QUFHQyxPQUFHLEVBQUMscUJBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFNQyxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORCxDQURELENBREQsQ0FERCxFQWFDO0FBQUssYUFBUyxFQUFDLGtEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLFFBQUksRUFBQywwQ0FBUjtBQUFtRCxVQUFNLEVBQUMsUUFBMUQ7QUFBbUUsT0FBRyxFQUFDLHFCQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxPQUFHLEVBQUMscUJBREw7QUFFQyxPQUFHLEVBQUMseUJBRkw7QUFHQyxhQUFTLEVBQUMsc0ZBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsQ0FiRCxDQXhCRCxDQXZKRCxDQUREO0FBME1BLENBM01NO01BQU1ZLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjRkMzlkNGY3M2MyZGFkM2IxZmQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEV4dExpbmsgfSBmcm9tICcuL0ljb25zJ1xyXG5cclxuY29uc3QgSW5kaXZpZHVhbCA9IChcclxuXHRsaW5rOiBzdHJpbmcsXHJcblx0aW1nTW9jazogc3RyaW5nLFxyXG5cdGltZ1BsYWluOiBzdHJpbmcsXHJcblx0dGl0bGU6IHN0cmluZyxcclxuXHRkZXNjT25lOiBzdHJpbmcsXHJcblx0ZGVzY1R3bzogc3RyaW5nLFxyXG5cdGltZ0xlZnQ6IGJvb2xlYW5cclxuKSA9PiB7XHJcblx0Y29uc3QgYWx0VGV4dCA9IHRpdGxlICsgJyBzY3JlZW5zaG90J1xyXG5cdGNvbnN0IGlzTGVmdCA9IGltZ0xlZnQgPyBcImZsZXggZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2ggbXktNCBqdXN0aWZ5LWV2ZW5seVwiIDogXCJmbGV4IGZsZXgtcm93LXJldmVyc2UgZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2ggbXktNCBqdXN0aWZ5LWV2ZW5seVwiXHJcblx0Y29uc3QgaXNMZWZ0SW1nID0gaW1nTGVmdCA/IFwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGhpZGRlbiB3LWF1dG8gaC02NCBtdC0yIG1kOmlubGluZSBtZDpzZWxmLWVuZCBtZDptdC0wXCIgOiBcImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgaGlkZGVuIHctYXV0byBoLTY0IG10LTIgbWQ6aW5saW5lIG1kOnNlbGYtZW5kIG1kOm10LTAgXCJcclxuXHRjb25zdCBpc0xlZnRUeHQgPSBpbWdMZWZ0ID8gXCJ6LTEwIHNlbGYtZW5kIHctZnVsbCBwbC0xMCBtZDptbC02NCB0ZXh0LWp1c3RpZnkgbWQ6bWItMjAgbWQ6dy0zLzRcIiA6IFwiei0xMCBzZWxmLWVuZCB3LWZ1bGwgcGwtMTAgbWQ6bXItNjQgdGV4dC1qdXN0aWZ5IG1kOm1iLTIwIG1kOnctMy80IFwiXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtpc0xlZnR9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMCBmbGV4IHNlbGYtZW5kIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gbWQ6dy1mdWxsIG1kOmp1c3RpZnktZW5kXCI+XHJcblx0XHRcdFx0PGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRzcmM9e2ltZ01vY2t9XHJcblx0XHRcdFx0XHRcdGFsdD17YWx0VGV4dH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtpc0xlZnRJbWd9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRzcmM9e2ltZ1BsYWlufVxyXG5cdFx0XHRcdFx0XHRhbHQ9e2FsdFRleHR9XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImlubGluZSB3LWZ1bGwgaC1hdXRvIG10LTIgYm9yZGVyLTIgYm9yZGVyLWJsdWUtMzAwIHJvdW5kZWQtbWQgbWQ6aGlkZGVuIG1kOnNlbGYtZW5kIG1kOm10LTBcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17aXNMZWZ0VHh0fT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgbWQ6dGV4dC1sZWZ0IGhvdmVyOnVuZGVybGluZVwiPlxyXG5cdFx0XHRcdFx0PGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHR7dGl0bGV9PEV4dExpbmsgLz5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmFzZSB0ZXh0LWxlZnQgbWQ6dGV4dC1sZWZ0XCI+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtdC0yXCI+e2Rlc2NPbmV9PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibXQtMVwiPntkZXNjVHdvfTwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXhsIHRleHQtY2VudGVyXCI+UHJvamVjdHM8L2Rpdj5cclxue0luZGl2aWR1YWwoXHJcblx0J2h0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL3NlZWtlcnNsb3VuZ2UvJyxcclxuXHQnL3RlYWNoZXJzLW1vY2sucG5nJyxcclxuXHQnL3NjcmVlbi10ZWFjaGVyLXRodW1iLnBuZycsXHJcblx0J1NlZWtlcnNcXCcgTG91bmdlJyxcclxuXHQnSW5zdGFudCBzZWFyY2ggZW5naW5lIHdpdGggNDVrKyBsaW5lcyBmcm9tIHRoZSBcIlRlYWNoZXJzXFwncyBMb3VuZ2VcIiBwb2RjYXN0LicsXHJcblx0J341MCB3ZWVrbHkgdXNlcnMuXHRQb3dlcmVkIGJ5IEFXUyBFbGFzdGljU2VhcmNoIGFuZCBidWlsdCB3aXRoIFJlYWN0LicsXHJcblx0dHJ1ZVxyXG4pfVxyXG5cdFx0XHR7SW5kaXZpZHVhbChcclxuXHRcdFx0XHQnaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vaGFuZGJvb2tzZWFyY2gvJyxcclxuXHRcdFx0XHQnL2hhbmRib29rLW1vY2t1cDIucG5nJyxcclxuXHRcdFx0XHQnL3NjcmVlbi1oYW5kYm9vay5wbmcnLFxyXG5cdFx0XHRcdCdIYW5kYm9vayBTZWFyY2gnLFxyXG5cdFx0XHRcdCdTZWFyY2ggZW5naW5lIGZvciBwb2RjYXN0IEhvbGx5d29vZCBIYW5kYm9vay4nLFxyXG5cdFx0XHRcdCcxMjFrKyBsaW5lcy4gQWxzbyBwb3dlcmVkIGJ5IEFXUyBFbGFzdGljU2VhcmNoLicsXHJcblx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0KX1cclxuXHRcdFx0PGhyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCBteS00IGp1c3RpZnktZXZlbmx5XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1qdXN0aWZ5IG1kOnctMi8zIG1kOnByLTRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIGhvdmVyOnVuZGVybGluZVwiPlxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vZGhhbW1hcGFkYS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0RGhhbW1hcGFkYSBSZWFkZXJcclxuXHRcdFx0XHRcdFx0XHQ8RXh0TGluayAvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdExpZ2h0d2VpZ2h0IGFuZCBkaXN0cmFjdGlvbi1mcmVlIHNpdGUgZm9yIHJlYWRpbmcgdGhlIERoYW1tYXBhZGEuIEJ1aWx0IHdpdGggUmVhY3QuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gbWQ6dy0xLzMgbWQ6anVzdGlmeS1lbmRcIj5cclxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kaGFtbWFwYWRhL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuXHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdHNyYz1cIi9zY3JlZW4tZGhhbW1hLXRodW1iLnBuZ1wiXHJcblx0XHRcdFx0XHRcdFx0YWx0PVwiRGhhbW1hcGFkYSBSZWFkZXIgc2NyZWVuc2hvdFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBtdC0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW1kIHNoYWRvdy1sZyBtZDpzZWxmLWVuZCBtZDptdC0wXCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8aHIgLz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCBteS02IGp1c3RpZnktZXZlbmx5XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCB3LWZ1bGwgdGV4dC1qdXN0aWZ5XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgbWQ6dy0xLzMgaG92ZXI6dW5kZXJsaW5lXCI+XHJcblx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL0Zvb3RiYWxsTGluZXMvXCJcclxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxyXG5cdFx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0Rm9vdGJhbGwgTGluZXM8RXh0TGluayAvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMi8zIFwiPlxyXG5cdFx0XHRcdFx0XHRWaWV3IGhpc3RvcmljYWwgdGFibGUgcGxhY2VtZW50cyBvZiBTd2VkaXNoIGZvb3RiYWxsIHRlYW1zLiBCdWlsdCB3aXRoIFJlYWN0LlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gbXQtMiBjdXJzb3ItcG9pbnRlclwiPlxyXG5cdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL0Zvb3RiYWxsTGluZXMvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0c3JjPVwiL3NjcmVlbi1mb290YmFsbC10aHVtYi5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIkZvb3RiYWxsIExpbmVzIHNjcmVlbnNob3RcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gbXQtMiBib3JkZXItMiBib3JkZXItZ3JheS00MDAgcm91bmRlZC1tZCBzaGFkb3ctbGcgbWQ6c2VsZi1lbmQgbWQ6bXQtMFwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8aHIgLz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCBteS02IGp1c3RpZnktZXZlbmx5XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1qdXN0aWZ5IG1kOnctMi8zIG1kOnByLTRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIGhvdmVyOnVuZGVybGluZVwiPlxyXG5cdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9Lb3JlYW5EeW5hc3R5R2VuZXJhdG9yL1wiXHJcblx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdEtvcmVhbiBEeW5hc3R5IEdlbmVyYXRvclxyXG5cdFx0XHRcdFx0XHRcdDxFeHRMaW5rIC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0R2VuZXJhdGUgYSBmdWxseSBzdGFmZmVkLCByYW5kb21pemVkIG1lZGlldmFsIEtvcmVhbiBidXJlYXVjcmFjeS4gQnVpbHQgd2l0aCBSZWFjdC5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtYXV0byBtZDp3LTEvMyBtZDpqdXN0aWZ5LWVuZFwiPlxyXG5cdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL0tvcmVhbkR5bmFzdHlHZW5lcmF0b3IvXCJcclxuXHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc2NyZWVuLWR5bmFzdHktdGh1bWIucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRhbHQ9XCJLb3JlYW4gRHluYXN0eSBHZW5lcmF0b3Igc2NyZWVuc2hvdFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBtdC0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW1kIHNoYWRvdy1sZyBtZDpzZWxmLWVuZCBtZDptdC0wXCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8aHIgY2xhc3NOYW1lPVwidy1mdWxsXCIgLz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIG15LTQganVzdGlmeS1ldmVubHlcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIHctZnVsbCBteS0yIHRleHQtanVzdGlmeVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlciB3LWZ1bGx0ZXh0LWxnIG1kOnctMS8zIGhvdmVyOnVuZGVybGluZVwiPlxyXG5cdFx0XHRcdFx0XHRGYW4gYXJ0XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMi8zIFwiPlxyXG5cdFx0XHRcdFx0XHRGYW4gYXJ0IGZvciBUaGUgVGVhY2hlcnMnIExvdW5nZSBwb2RjYXN0IG1hZGUgdXNpbmcgQWRvYmUgUGhvdG9zaG9wLlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gbXQtMiBjdXJzb3ItcG9pbnRlclwiPlxyXG5cdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRzcmM9XCIvdGVhY2hlcnMtZmFjZXMtdGh1bWIucG5nXCJcclxuXHRcdFx0XHRcdFx0YWx0PVwiVGVhY2hlcnMnIExvdW5nZSBmYW4gYXJ0XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBtdC0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkLW1kIHNoYWRvdy1sZyBtZDpzZWxmLWVuZCBtZDptdC0wXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGhyIC8+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtdC04IHRleHQteGwgdGV4dC1jZW50ZXJcIj5PbmUtZGF5IHByb2plY3RzPC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCBteS02IGp1c3RpZnktZXZlbmx5XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1qdXN0aWZ5IG1kOnctMi8zIG1kOnByLTRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIGhvdmVyOnVuZGVybGluZVwiPlxyXG5cdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kYWlseXVpLyMvY2FsY3VsYXRvclwiXHJcblx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFRJLTEwOCBDYWxjdWxhdG9yXHJcblx0XHRcdFx0XHRcdFx0PEV4dExpbmsgLz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRDYWxjdWxhdG9yIGJhc2VkIG9uIFRleGFzIEluc3RydW1lbnRzIFRJLTEwOC4gTWFkZSB1c2luZyBvbmx5IENTUyBhbmQgSmF2YVNjcmlwdC5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtYXV0byBtZDp3LTEvMyBtZDpqdXN0aWZ5LWVuZFwiPlxyXG5cdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL2RhaWx5dWkvIy9jYWxjdWxhdG9yXCJcclxuXHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc2NyZWVuLWNhbGMtdGh1bWIucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRhbHQ9XCJUSS0xMDggQ2FsY3VsYXRvciBzY3JlZW5zaG90XCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG10LTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbWQgc2hhZG93LWxnIG1kOnNlbGYtZW5kIG1kOm10LTBcIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGhyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgdy1mdWxsXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIHctMS8yIG15LTYganVzdGlmeS1ldmVubHlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTQgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dW5kZXJsaW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kYWlseXVpMDEvXCJcclxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXHJcblx0XHRcdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHROZXdzbGV0dGVyXHJcblx0XHRcdFx0XHRcdFx0XHQ8RXh0TGluayAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1hdXRvIG1kOmp1c3RpZnktZW5kXCI+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kYWlseXVpMDEvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9zY3JlZW4tbmV3c2xldHRlci10aHVtYi5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PVwiTmV3c2xldHRlciBzY3JlZW5zaG90XCJcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gbXQtMiBib3JkZXItMiBib3JkZXItZ3JheS00MDAgcm91bmRlZC1tZCBzaGFkb3ctbGcgbWQ6c2VsZi1lbmQgbWQ6bXQtMFwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIHctMS8yIG15LTYganVzdGlmeS1ldmVubHlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTQgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dW5kZXJsaW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kYWlseXVpMDMvXCJcclxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXHJcblx0XHRcdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRMYW5kaW5nIHBhZ2VcclxuXHRcdFx0XHRcdFx0XHRcdDxFeHRMaW5rIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gbWQ6anVzdGlmeS1lbmRcIj5cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL2RhaWx5dWkwMy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3JjPVwiL3NjcmVlbi1sYW5kaW5nLnBuZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJMYW5kaW5nIHBhZ2Ugc2NyZWVuc2hvdFwiXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG10LTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQtbWQgc2hhZG93LWxnIG1kOnNlbGYtZW5kIG1kOm10LTBcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=