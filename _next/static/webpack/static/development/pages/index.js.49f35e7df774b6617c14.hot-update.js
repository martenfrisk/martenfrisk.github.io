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
    src: imgPlain,
    alt: altText,
    className: "absolute top-0 ".concat(imgLeft ? 'left-0' : 'right-0', "  w-auto h-64 mt-2 inline md:self-end md:mt-0"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 6
    }
  }))), __jsx("div", {
    className: "z-10 self-end w-full  ".concat(imgLeft ? 'md:ml-56' : 'md:mr-56', " text-justify md:mb-20 md:w-3/4"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "text-2xl font-semibold mt-4 md:mt-8 text-center cursor-pointer ".concat(imgLeft ? 'md:text-left' : 'md:text-right', " hover:underline"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 6
    }
  }, title, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }))), __jsx("div", {
    className: "text-base text-left ".concat(imgLeft ? 'md:text-left' : 'md:text-right'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 6
    }
  }, descOne), __jsx("p", {
    className: "mt-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 6
    }
  }, descTwo))));
}; // const Individual = (
// 	link: string,
// 	imgMock: string,
// 	imgPlain: string,
// 	title: string,
// 	descOne: string,
// 	descTwo: string,
// 	imgLeft: boolean
// ) => {
// 	const altText = title + ' screenshot'
// 	return (
// 		<div className={`flex flex-wrap items-stretch my-4 justify-evenly border-b border-blue-700 pb-6 md:border-white ${!imgLeft && 'flex-row-reverse'}`}>
// 			<div className="relative z-0 flex self-end justify-center w-full h-auto md:w-full md:justify-end">
// 				<a href={link} target="_blank" rel="noopener noreferrer">
// 					<img
// 						src={imgMock}
// 						alt={altText}
// 						className={`absolute top-0 ${imgLeft
// 							? 'left-0'
// 							: 'right-0'} hidden w-auto h-64 mt-2 md:inline md:self-end md:mt-0`}
// 					/>
// 					<div className="flex justify-center w-full md:hidden">
// 					<img
// 						src={imgMock}
// 						alt={altText}
// 						className="inline-block w-full h-auto mt-2 md:hidden"
// 					/>
// 					</div>
// 				</a>
// 			</div>
// 			<div
// 				className={`z-10 self-end w-full  ${imgLeft
// 					? 'md:ml-56'
// 					: 'md:mr-56'} text-justify md:mb-20 md:w-3/4`}
// 			>
// 				<div
// 					className={`text-2xl font-semibold mt-4 md:mt-8 text-center cursor-pointer ${imgLeft
// 						? 'md:text-left'
// 						: 'md:text-right'} hover:underline`}
// 				>
// 					<a href={link} target="_blank" rel="noopener noreferrer">
// 						{title}
// 						<ExtLink />
// 					</a>
// 				</div>
// 				<div className={`text-base text-left ${imgLeft ? 'md:text-left' : 'md:text-right'}`}>
// 					<p className="mt-2">{descOne}</p>
// 					<p className="mt-1">{descTwo}</p>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }


_c = Individual;
var Projects = function Projects() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "w-full text-xl text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 4
    }
  }, "Projects"), Individual('https://martenfrisk.github.io/seekerslounge/', '/teachers-mock.png', '/screen-teacher-thumb.png', "Seekers' Lounge", 'Instant search engine with 45k+ lines from the "Teachers\'s Lounge" podcast.', '~50 weekly users.	Powered by AWS ElasticSearch and built with React.', true), Individual('https://martenfrisk.github.io/handbooksearch/', '/handbook-mockup2.png', '/screen-handbook.png', 'Handbook Search', 'Search engine for podcast Hollywood Handbook.', '121k+ lines. Also powered by AWS ElasticSearch.', false), Individual('https://martenfrisk.github.io/dhammapada/', '/dhamma-mock.png', '/screen-dhamma-thumb.png', 'Dhammapada Reader', 'Lightweight and distraction-free site for reading the Dhammapada.', 'Built with React.', true), Individual('https://martenfrisk.github.io/KoreanDynastyGenerator/', '/dynasty-mock.png', '/screen-dynasty-thumb.png', 'Korean Dynasty Generator', 'Generate a fully staffed, randomized medieval Korean bureaucracy.', 'Built with React.', false), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap items-stretch my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap w-full text-justify",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full text-lg font-semibold cursor-pointer md:w-1/3 hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/FootballLines/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, "Football Lines", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 22
    }
  }))), __jsx("div", {
    className: "w-full md:w-2/3 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 6
    }
  }, "View historical table placements of Swedish football teams. Built with React.")), __jsx("div", {
    className: "flex justify-center w-full h-auto mt-2 cursor-pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/FootballLines/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/screen-football-thumb.png",
    alt: "Football Lines screenshot",
    className: "w-full h-auto mt-2 border border-blue-400 shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }
  })))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 4
    }
  }), __jsx("hr", {
    className: "w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap items-stretch my-4 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap w-full my-2 text-justify",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full font-semibold cursor-pointer w-fulltext-lg md:w-1/3 hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 6
    }
  }, "Fan art"), __jsx("div", {
    className: "w-full md:w-2/3 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 6
    }
  }, "Fan art for The Teachers' Lounge podcast made using Adobe Photoshop.")), __jsx("div", {
    className: "flex justify-center w-full h-auto mt-2 cursor-pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/teachers-faces-thumb.png",
    alt: "Teachers' Lounge fan art",
    className: "w-full h-auto mt-2 border border-blue-400 shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 6
    }
  }))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "w-full mt-8 text-xl text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 4
    }
  }, "One-day projects"), __jsx("div", {
    className: "flex flex-wrap items-stretch my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-full text-justify md:w-2/3 md:pr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui/#/calculator",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }
  }, "TI-108 Calculator", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 8
    }
  }))), "Calculator based on Texas Instruments TI-108. Made using only CSS and JavaScript."), __jsx("div", {
    className: "flex justify-center w-full h-auto md:w-1/3 md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui/#/calculator",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "flex justify-center w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/screen-calc-thumb.png",
    alt: "TI-108 Calculator screenshot",
    className: "w-4/5 h-auto mt-2 border border-blue-400 shadow-lg md:w-full md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 7
    }
  }))))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap items-stretch w-1/2 my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full mb-4 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui01/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 8
    }
  }, "Newsletter", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 9
    }
  })))), __jsx("div", {
    className: "flex justify-center w-5/6 h-auto md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui01/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/screen-newsletter-thumb.png",
    alt: "Newsletter screenshot",
    className: "w-full h-auto mt-2 border border-blue-400 shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 8
    }
  })))), __jsx("div", {
    className: "flex flex-wrap items-stretch w-1/2 my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full mb-4 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui03/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 8
    }
  }, "Landing page", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 9
    }
  })))), __jsx("div", {
    className: "flex justify-center w-5/6 h-auto md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui03/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/screen-landing.png",
    alt: "Landing page screenshot",
    className: "w-full h-auto mt-2 border border-blue-400 shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeCJdLCJuYW1lcyI6WyJJbmRpdmlkdWFsIiwibGluayIsImltZ01vY2siLCJpbWdQbGFpbiIsInRpdGxlIiwiZGVzY09uZSIsImRlc2NUd28iLCJpbWdMZWZ0IiwiYWx0VGV4dCIsIlByb2plY3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUNsQkMsSUFEa0IsRUFFbEJDLE9BRmtCLEVBR2xCQyxRQUhrQixFQUlsQkMsS0FKa0IsRUFLbEJDLE9BTGtCLEVBTWxCQyxPQU5rQixFQU9sQkMsT0FQa0IsRUFRZDtBQUNKLE1BQU1DLE9BQU8sR0FBR0osS0FBSyxHQUFHLGFBQXhCO0FBQ0EsU0FDQztBQUFLLGFBQVMsMkdBQW9HLENBQUNHLE9BQUQsSUFBWSxrQkFBaEgsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsa0ZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUcsUUFBSSxFQUFFTixJQUFUO0FBQWUsVUFBTSxFQUFDLFFBQXRCO0FBQStCLE9BQUcsRUFBQyxxQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsT0FBRyxFQUFFRSxRQUROO0FBRUMsT0FBRyxFQUFFSyxPQUZOO0FBR0MsYUFBUywyQkFBb0JELE9BQU8sR0FDakMsUUFEaUMsR0FFakMsU0FGTSxrREFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxDQURELEVBWUM7QUFDQyxhQUFTLGtDQUEyQkEsT0FBTyxHQUN4QyxVQUR3QyxHQUV4QyxVQUZNLG9DQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLQztBQUNDLGFBQVMsMkVBQW9F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TDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU1DLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5ELENBREQsQ0FERCxDQURELEVBYUM7QUFBSyxhQUFTLEVBQUMsaURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUcsUUFBSSxFQUFDLDBDQUFSO0FBQW1ELFVBQU0sRUFBQyxRQUExRDtBQUFtRSxPQUFHLEVBQUMscUJBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUNDLE9BQUcsRUFBQyxxQkFETDtBQUVDLE9BQUcsRUFBQyx5QkFGTDtBQUdDLGFBQVMsRUFBQyx5RUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxDQWJELENBeEJELENBNUhELENBREQ7QUErS0EsQ0FoTE07TUFBTVMsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNDlmMzVlN2RmNzc0YjY2MTdjMTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRXh0TGluayB9IGZyb20gJy4vSWNvbnMnXHJcblxyXG5jb25zdCBJbmRpdmlkdWFsID0gKFxyXG5cdGxpbms6IHN0cmluZyxcclxuXHRpbWdNb2NrOiBzdHJpbmcsXHJcblx0aW1nUGxhaW46IHN0cmluZyxcclxuXHR0aXRsZTogc3RyaW5nLFxyXG5cdGRlc2NPbmU6IHN0cmluZyxcclxuXHRkZXNjVHdvOiBzdHJpbmcsXHJcblx0aW1nTGVmdDogYm9vbGVhblxyXG4pID0+IHtcclxuXHRjb25zdCBhbHRUZXh0ID0gdGl0bGUgKyAnIHNjcmVlbnNob3QnXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCBteS00IGp1c3RpZnktZXZlbmx5IGJvcmRlci1iIGJvcmRlci1ibHVlLTcwMCBwYi02IG1kOmJvcmRlci13aGl0ZSAkeyFpbWdMZWZ0ICYmICdmbGV4LXJvdy1yZXZlcnNlJ31gfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTAgZmxleCBzZWxmLWVuZCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1hdXRvIG1kOnctZnVsbCBtZDpqdXN0aWZ5LWVuZFwiPlxyXG5cdFx0XHRcdDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuXHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0c3JjPXtpbWdQbGFpbn1cclxuXHRcdFx0XHRcdFx0YWx0PXthbHRUZXh0fVxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMCAke2ltZ0xlZnRcclxuXHRcdFx0XHRcdFx0XHQ/ICdsZWZ0LTAnXHJcblx0XHRcdFx0XHRcdFx0OiAncmlnaHQtMCd9ICB3LWF1dG8gaC02NCBtdC0yIGlubGluZSBtZDpzZWxmLWVuZCBtZDptdC0wYH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzTmFtZT17YHotMTAgc2VsZi1lbmQgdy1mdWxsICAke2ltZ0xlZnRcclxuXHRcdFx0XHRcdD8gJ21kOm1sLTU2J1xyXG5cdFx0XHRcdFx0OiAnbWQ6bXItNTYnfSB0ZXh0LWp1c3RpZnkgbWQ6bWItMjAgbWQ6dy0zLzRgfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtdC00IG1kOm10LTggdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgJHtpbWdMZWZ0XHJcblx0XHRcdFx0XHRcdD8gJ21kOnRleHQtbGVmdCdcclxuXHRcdFx0XHRcdFx0OiAnbWQ6dGV4dC1yaWdodCd9IGhvdmVyOnVuZGVybGluZWB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHR7dGl0bGV9XHJcblx0XHRcdFx0XHRcdDxFeHRMaW5rIC8+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2B0ZXh0LWJhc2UgdGV4dC1sZWZ0ICR7aW1nTGVmdCA/ICdtZDp0ZXh0LWxlZnQnIDogJ21kOnRleHQtcmlnaHQnfWB9PlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibXQtMlwiPntkZXNjT25lfTwvcD5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm10LTFcIj57ZGVzY1R3b308L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KVxyXG59XHJcbi8vIGNvbnN0IEluZGl2aWR1YWwgPSAoXHJcbi8vIFx0bGluazogc3RyaW5nLFxyXG4vLyBcdGltZ01vY2s6IHN0cmluZyxcclxuLy8gXHRpbWdQbGFpbjogc3RyaW5nLFxyXG4vLyBcdHRpdGxlOiBzdHJpbmcsXHJcbi8vIFx0ZGVzY09uZTogc3RyaW5nLFxyXG4vLyBcdGRlc2NUd286IHN0cmluZyxcclxuLy8gXHRpbWdMZWZ0OiBib29sZWFuXHJcbi8vICkgPT4ge1xyXG4vLyBcdGNvbnN0IGFsdFRleHQgPSB0aXRsZSArICcgc2NyZWVuc2hvdCdcclxuLy8gXHRyZXR1cm4gKFxyXG4vLyBcdFx0PGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIG15LTQganVzdGlmeS1ldmVubHkgYm9yZGVyLWIgYm9yZGVyLWJsdWUtNzAwIHBiLTYgbWQ6Ym9yZGVyLXdoaXRlICR7IWltZ0xlZnQgJiYgJ2ZsZXgtcm93LXJldmVyc2UnfWB9PlxyXG4vLyBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMCBmbGV4IHNlbGYtZW5kIGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gbWQ6dy1mdWxsIG1kOmp1c3RpZnktZW5kXCI+XHJcbi8vIFx0XHRcdFx0PGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4vLyBcdFx0XHRcdFx0PGltZ1xyXG4vLyBcdFx0XHRcdFx0XHRzcmM9e2ltZ01vY2t9XHJcbi8vIFx0XHRcdFx0XHRcdGFsdD17YWx0VGV4dH1cclxuLy8gXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYWJzb2x1dGUgdG9wLTAgJHtpbWdMZWZ0XHJcbi8vIFx0XHRcdFx0XHRcdFx0PyAnbGVmdC0wJ1xyXG4vLyBcdFx0XHRcdFx0XHRcdDogJ3JpZ2h0LTAnfSBoaWRkZW4gdy1hdXRvIGgtNjQgbXQtMiBtZDppbmxpbmUgbWQ6c2VsZi1lbmQgbWQ6bXQtMGB9XHJcbi8vIFx0XHRcdFx0XHQvPlxyXG4vLyBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBtZDpoaWRkZW5cIj5cclxuXHJcbi8vIFx0XHRcdFx0XHQ8aW1nXHJcbi8vIFx0XHRcdFx0XHRcdHNyYz17aW1nTW9ja31cclxuLy8gXHRcdFx0XHRcdFx0YWx0PXthbHRUZXh0fVxyXG4vLyBcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy1mdWxsIGgtYXV0byBtdC0yIG1kOmhpZGRlblwiXHJcbi8vIFx0XHRcdFx0XHQvPlxyXG4vLyBcdFx0XHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRcdFx0PC9hPlxyXG4vLyBcdFx0XHQ8L2Rpdj5cclxuLy8gXHRcdFx0PGRpdlxyXG4vLyBcdFx0XHRcdGNsYXNzTmFtZT17YHotMTAgc2VsZi1lbmQgdy1mdWxsICAke2ltZ0xlZnRcclxuLy8gXHRcdFx0XHRcdD8gJ21kOm1sLTU2J1xyXG4vLyBcdFx0XHRcdFx0OiAnbWQ6bXItNTYnfSB0ZXh0LWp1c3RpZnkgbWQ6bWItMjAgbWQ6dy0zLzRgfVxyXG4vLyBcdFx0XHQ+XHJcbi8vIFx0XHRcdFx0PGRpdlxyXG4vLyBcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtdC00IG1kOm10LTggdGV4dC1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgJHtpbWdMZWZ0XHJcbi8vIFx0XHRcdFx0XHRcdD8gJ21kOnRleHQtbGVmdCdcclxuLy8gXHRcdFx0XHRcdFx0OiAnbWQ6dGV4dC1yaWdodCd9IGhvdmVyOnVuZGVybGluZWB9XHJcbi8vIFx0XHRcdFx0PlxyXG4vLyBcdFx0XHRcdFx0PGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG4vLyBcdFx0XHRcdFx0XHR7dGl0bGV9XHJcbi8vIFx0XHRcdFx0XHRcdDxFeHRMaW5rIC8+XHJcbi8vIFx0XHRcdFx0XHQ8L2E+XHJcbi8vIFx0XHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2B0ZXh0LWJhc2UgdGV4dC1sZWZ0ICR7aW1nTGVmdCA/ICdtZDp0ZXh0LWxlZnQnIDogJ21kOnRleHQtcmlnaHQnfWB9PlxyXG4vLyBcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibXQtMlwiPntkZXNjT25lfTwvcD5cclxuLy8gXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm10LTFcIj57ZGVzY1R3b308L3A+XHJcbi8vIFx0XHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRcdDwvZGl2PlxyXG4vLyBcdFx0PC9kaXY+XHJcbi8vIFx0KVxyXG4vLyB9XHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC14bCB0ZXh0LWNlbnRlclwiPlByb2plY3RzPC9kaXY+XHJcblx0XHRcdHtJbmRpdmlkdWFsKFxyXG5cdFx0XHRcdCdodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9zZWVrZXJzbG91bmdlLycsXHJcblx0XHRcdFx0Jy90ZWFjaGVycy1tb2NrLnBuZycsXHJcblx0XHRcdFx0Jy9zY3JlZW4tdGVhY2hlci10aHVtYi5wbmcnLFxyXG5cdFx0XHRcdFwiU2Vla2VycycgTG91bmdlXCIsXHJcblx0XHRcdFx0J0luc3RhbnQgc2VhcmNoIGVuZ2luZSB3aXRoIDQ1aysgbGluZXMgZnJvbSB0aGUgXCJUZWFjaGVyc1xcJ3MgTG91bmdlXCIgcG9kY2FzdC4nLFxyXG5cdFx0XHRcdCd+NTAgd2Vla2x5IHVzZXJzLlx0UG93ZXJlZCBieSBBV1MgRWxhc3RpY1NlYXJjaCBhbmQgYnVpbHQgd2l0aCBSZWFjdC4nLFxyXG5cdFx0XHRcdHRydWVcclxuXHRcdFx0KX1cclxuXHRcdFx0e0luZGl2aWR1YWwoXHJcblx0XHRcdFx0J2h0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL2hhbmRib29rc2VhcmNoLycsXHJcblx0XHRcdFx0Jy9oYW5kYm9vay1tb2NrdXAyLnBuZycsXHJcblx0XHRcdFx0Jy9zY3JlZW4taGFuZGJvb2sucG5nJyxcclxuXHRcdFx0XHQnSGFuZGJvb2sgU2VhcmNoJyxcclxuXHRcdFx0XHQnU2VhcmNoIGVuZ2luZSBmb3IgcG9kY2FzdCBIb2xseXdvb2QgSGFuZGJvb2suJyxcclxuXHRcdFx0XHQnMTIxaysgbGluZXMuIEFsc28gcG93ZXJlZCBieSBBV1MgRWxhc3RpY1NlYXJjaC4nLFxyXG5cdFx0XHRcdGZhbHNlXHJcblx0XHRcdCl9XHJcblx0XHRcdHtJbmRpdmlkdWFsKFxyXG5cdFx0XHRcdCdodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kaGFtbWFwYWRhLycsXHJcblx0XHRcdFx0Jy9kaGFtbWEtbW9jay5wbmcnLFxyXG5cdFx0XHRcdCcvc2NyZWVuLWRoYW1tYS10aHVtYi5wbmcnLFxyXG5cdFx0XHRcdCdEaGFtbWFwYWRhIFJlYWRlcicsXHJcblx0XHRcdFx0J0xpZ2h0d2VpZ2h0IGFuZCBkaXN0cmFjdGlvbi1mcmVlIHNpdGUgZm9yIHJlYWRpbmcgdGhlIERoYW1tYXBhZGEuJyxcclxuXHRcdFx0XHQnQnVpbHQgd2l0aCBSZWFjdC4nLFxyXG5cdFx0XHRcdHRydWVcclxuXHRcdFx0KX1cclxuXHRcdFx0e0luZGl2aWR1YWwoXHJcblx0XHRcdFx0J2h0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL0tvcmVhbkR5bmFzdHlHZW5lcmF0b3IvJyxcclxuXHRcdFx0XHQnL2R5bmFzdHktbW9jay5wbmcnLFxyXG5cdFx0XHRcdCcvc2NyZWVuLWR5bmFzdHktdGh1bWIucG5nJyxcclxuXHRcdFx0XHQnS29yZWFuIER5bmFzdHkgR2VuZXJhdG9yJyxcclxuXHRcdFx0XHQnR2VuZXJhdGUgYSBmdWxseSBzdGFmZmVkLCByYW5kb21pemVkIG1lZGlldmFsIEtvcmVhbiBidXJlYXVjcmFjeS4nLFxyXG5cdFx0XHRcdCdCdWlsdCB3aXRoIFJlYWN0LicsXHJcblx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0KX1cclxuXHJcblx0XHRcdDxociAvPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIG15LTYganVzdGlmeS1ldmVubHlcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIHctZnVsbCB0ZXh0LWp1c3RpZnlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGcgZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlciBtZDp3LTEvMyBob3Zlcjp1bmRlcmxpbmVcIj5cclxuXHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vRm9vdGJhbGxMaW5lcy9cIlxyXG5cdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXHJcblx0XHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRGb290YmFsbCBMaW5lczxFeHRMaW5rIC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0yLzMgXCI+XHJcblx0XHRcdFx0XHRcdFZpZXcgaGlzdG9yaWNhbCB0YWJsZSBwbGFjZW1lbnRzIG9mIFN3ZWRpc2ggZm9vdGJhbGwgdGVhbXMuIEJ1aWx0IHdpdGggUmVhY3QuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtYXV0byBtdC0yIGN1cnNvci1wb2ludGVyXCI+XHJcblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vRm9vdGJhbGxMaW5lcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc2NyZWVuLWZvb3RiYWxsLXRodW1iLnBuZ1wiXHJcblx0XHRcdFx0XHRcdFx0YWx0PVwiRm9vdGJhbGwgTGluZXMgc2NyZWVuc2hvdFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBtdC0yIGJvcmRlciBib3JkZXItYmx1ZS00MDAgc2hhZG93LWxnIG1kOnNlbGYtZW5kIG1kOm10LTBcIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGhyIC8+XHJcblxyXG5cdFx0XHJcblxyXG5cdFx0XHQ8aHIgY2xhc3NOYW1lPVwidy1mdWxsXCIgLz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIG15LTQganVzdGlmeS1ldmVubHlcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIHctZnVsbCBteS0yIHRleHQtanVzdGlmeVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlciB3LWZ1bGx0ZXh0LWxnIG1kOnctMS8zIGhvdmVyOnVuZGVybGluZVwiPlxyXG5cdFx0XHRcdFx0XHRGYW4gYXJ0XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMi8zIFwiPlxyXG5cdFx0XHRcdFx0XHRGYW4gYXJ0IGZvciBUaGUgVGVhY2hlcnMnIExvdW5nZSBwb2RjYXN0IG1hZGUgdXNpbmcgQWRvYmUgUGhvdG9zaG9wLlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gbXQtMiBjdXJzb3ItcG9pbnRlclwiPlxyXG5cdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRzcmM9XCIvdGVhY2hlcnMtZmFjZXMtdGh1bWIucG5nXCJcclxuXHRcdFx0XHRcdFx0YWx0PVwiVGVhY2hlcnMnIExvdW5nZSBmYW4gYXJ0XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBtdC0yIGJvcmRlciBib3JkZXItYmx1ZS00MDAgc2hhZG93LWxnIG1kOnNlbGYtZW5kIG1kOm10LTBcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8aHIgLz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG10LTggdGV4dC14bCB0ZXh0LWNlbnRlclwiPk9uZS1kYXkgcHJvamVjdHM8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIG15LTYganVzdGlmeS1ldmVubHlcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWp1c3RpZnkgbWQ6dy0yLzMgbWQ6cHItNFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dW5kZXJsaW5lXCI+XHJcblx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL2RhaWx5dWkvIy9jYWxjdWxhdG9yXCJcclxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxyXG5cdFx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0VEktMTA4IENhbGN1bGF0b3JcclxuXHRcdFx0XHRcdFx0XHQ8RXh0TGluayAvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdENhbGN1bGF0b3IgYmFzZWQgb24gVGV4YXMgSW5zdHJ1bWVudHMgVEktMTA4LiBNYWRlIHVzaW5nIG9ubHkgQ1NTIGFuZCBKYXZhU2NyaXB0LlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1hdXRvIG1kOnctMS8zIG1kOmp1c3RpZnktZW5kXCI+XHJcblx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vZGFpbHl1aS8jL2NhbGN1bGF0b3JcIlxyXG5cdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxyXG5cdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0c3JjPVwiL3NjcmVlbi1jYWxjLXRodW1iLnBuZ1wiXHJcblx0XHRcdFx0XHRcdFx0YWx0PVwiVEktMTA4IENhbGN1bGF0b3Igc2NyZWVuc2hvdFwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy00LzUgaC1hdXRvIG10LTIgYm9yZGVyIGJvcmRlci1ibHVlLTQwMCBzaGFkb3ctbGcgbWQ6dy1mdWxsIG1kOnNlbGYtZW5kIG1kOm10LTBcIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8aHIgLz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCB3LWZ1bGxcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2ggdy0xLzIgbXktNiBqdXN0aWZ5LWV2ZW5seVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItNCB0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL2RhaWx5dWkwMS9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdE5ld3NsZXR0ZXJcclxuXHRcdFx0XHRcdFx0XHRcdDxFeHRMaW5rIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctNS82IGgtYXV0byBtZDpqdXN0aWZ5LWVuZFwiPlxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vZGFpbHl1aTAxL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvc2NyZWVuLW5ld3NsZXR0ZXItdGh1bWIucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRcdGFsdD1cIk5ld3NsZXR0ZXIgc2NyZWVuc2hvdFwiXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG10LTIgYm9yZGVyIGJvcmRlci1ibHVlLTQwMCBzaGFkb3ctbGcgbWQ6c2VsZi1lbmQgbWQ6bXQtMFwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIHctMS8yIG15LTYganVzdGlmeS1ldmVubHlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTQgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dW5kZXJsaW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kYWlseXVpMDMvXCJcclxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXHJcblx0XHRcdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRMYW5kaW5nIHBhZ2VcclxuXHRcdFx0XHRcdFx0XHRcdDxFeHRMaW5rIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctNS82IGgtYXV0byBtZDpqdXN0aWZ5LWVuZFwiPlxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vZGFpbHl1aTAzL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvc2NyZWVuLWxhbmRpbmcucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRcdGFsdD1cIkxhbmRpbmcgcGFnZSBzY3JlZW5zaG90XCJcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gbXQtMiBib3JkZXIgYm9yZGVyLWJsdWUtNDAwIHNoYWRvdy1sZyBtZDpzZWxmLWVuZCBtZDptdC0wXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9