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
    className: "flex flex-wrap items-center my-4 border-b border-blue-700 p-6 w-full md:border-white ".concat(imgLeft ? 'flex-row bg-gray-100' : 'flex-row-reverse bg-gray-300'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "w-full h-auto md:w-1/5 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }, __jsx("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: imgPlain,
    alt: altText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }
  }))), __jsx("div", {
    className: "self-end w-full text-justify md:mb-20 md:w-4/5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "text-2xl font-semibold mt-4 md:mt-8 text-center cursor-pointer ".concat(imgLeft ? 'md:text-right' : 'md:text-left', " hover:underline"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  }, title, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }))), __jsx("div", {
    className: "text-base text-left ".concat(imgLeft ? 'md:text-right' : 'md:text-left'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 6
    }
  }, descOne), __jsx("p", {
    className: "mt-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
      lineNumber: 103,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "w-full text-xl text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 4
    }
  }, "Projects"), Individual('https://martenfrisk.github.io/seekerslounge/', '/teachers-mock.png', '/screen-teacher-thumb.png', "Seekers' Lounge", 'Instant search engine with 45k+ lines from the "Teachers\'s Lounge" podcast.', '~50 weekly users.	Powered by AWS ElasticSearch and built with React.', true), Individual('https://martenfrisk.github.io/handbooksearch/', '/handbook-mockup2.png', '/screen-handbook.png', 'Handbook Search', 'Search engine for podcast Hollywood Handbook.', '121k+ lines. Also powered by AWS ElasticSearch.', false), Individual('https://martenfrisk.github.io/dhammapada/', '/dhamma-mock.png', '/screen-dhamma-thumb.png', 'Dhammapada Reader', 'Lightweight and distraction-free site for reading the Dhammapada.', 'Built with React.', true), Individual('https://martenfrisk.github.io/KoreanDynastyGenerator/', '/dynasty-mock.png', '/screen-dynasty-thumb.png', 'Korean Dynasty Generator', 'Generate a fully staffed, randomized medieval Korean bureaucracy.', 'Built with React.', false), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap items-stretch my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap w-full text-justify",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full text-lg font-semibold cursor-pointer md:w-1/3 hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/FootballLines/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }, "Football Lines", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 22
    }
  }))), __jsx("div", {
    className: "w-full md:w-2/3 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 6
    }
  }, "View historical table placements of Swedish football teams. Built with React.")), __jsx("div", {
    className: "flex justify-center w-full h-auto mt-2 cursor-pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/FootballLines/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/screen-football-thumb.png",
    alt: "Football Lines screenshot",
    className: "w-full h-auto mt-2 border border-blue-400 shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  })))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 4
    }
  }), __jsx("hr", {
    className: "w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap items-stretch my-4 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap w-full my-2 text-justify",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full font-semibold cursor-pointer w-fulltext-lg md:w-1/3 hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 6
    }
  }, "Fan art"), __jsx("div", {
    className: "w-full md:w-2/3 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 6
    }
  }, "Fan art for The Teachers' Lounge podcast made using Adobe Photoshop.")), __jsx("div", {
    className: "flex justify-center w-full h-auto mt-2 cursor-pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/teachers-faces-thumb.png",
    alt: "Teachers' Lounge fan art",
    className: "w-full h-auto mt-2 border border-blue-400 shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 6
    }
  }))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "w-full mt-8 text-xl text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 4
    }
  }, "One-day projects"), __jsx("div", {
    className: "flex flex-wrap items-stretch my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-full text-justify md:w-2/3 md:pr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui/#/calculator",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }
  }, "TI-108 Calculator", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 8
    }
  }))), "Calculator based on Texas Instruments TI-108. Made using only CSS and JavaScript."), __jsx("div", {
    className: "flex justify-center w-full h-auto md:w-1/3 md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui/#/calculator",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "flex justify-center w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/screen-calc-thumb.png",
    alt: "TI-108 Calculator screenshot",
    className: "w-4/5 h-auto mt-2 border border-blue-400 shadow-lg md:w-full md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 8
    }
  }))))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 4
    }
  }, __jsx("div", {
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
    href: "https://martenfrisk.github.io/dailyui01/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 8
    }
  }, "Newsletter", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 9
    }
  })))), __jsx("div", {
    className: "flex justify-center w-5/6 h-auto md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui01/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/screen-newsletter-thumb.png",
    alt: "Newsletter screenshot",
    className: "w-full h-auto mt-2 border border-blue-400 shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 8
    }
  })))), __jsx("div", {
    className: "flex flex-wrap items-stretch w-1/2 my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full mb-4 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui03/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 8
    }
  }, "Landing page", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 9
    }
  })))), __jsx("div", {
    className: "flex justify-center w-5/6 h-auto md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui03/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/screen-landing.png",
    alt: "Landing page screenshot",
    className: "w-full h-auto mt-2 border border-blue-400 shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeCJdLCJuYW1lcyI6WyJJbmRpdmlkdWFsIiwibGluayIsImltZ01vY2siLCJpbWdQbGFpbiIsInRpdGxlIiwiZGVzY09uZSIsImRlc2NUd28iLCJpbWdMZWZ0IiwiYWx0VGV4dCIsIlByb2plY3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUNsQkMsSUFEa0IsRUFFbEJDLE9BRmtCLEVBR2xCQyxRQUhrQixFQUlsQkMsS0FKa0IsRUFLbEJDLE9BTGtCLEVBTWxCQyxPQU5rQixFQU9sQkMsT0FQa0IsRUFRZDtBQUNKLE1BQU1DLE9BQU8sR0FBR0osS0FBSyxHQUFHLGFBQXhCO0FBQ0EsU0FDQztBQUNDLGFBQVMsaUdBQTBGRyxPQUFPLEdBQ3ZHLHNCQUR1RyxHQUV2Ryw4QkFGTSxDQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNQztBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBRyxRQUFJLEVBQUVOLElBQVQ7QUFBZSxVQUFNLEVBQUMsUUFBdEI7QUFBK0IsT0FBRyxFQUFDLHFCQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxPQUFHLEVBQUVFLFFBQVY7QUFBb0IsT0FBRyxFQUFFSyxPQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxDQU5ELEVBWUM7QUFBSyxhQUFTLGtEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUNDLGFBQVMsMkVBQW9FRCxPQUFPLEdBQ2pGLGVBRGlGLEdBRWpGLGNBRk0scUJBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtDO0FB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O0FBQUE7QUFBQSxJQU5ELENBREQsQ0FERCxDQURELEVBYUM7QUFBSyxhQUFTLEVBQUMsaURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUcsUUFBSSxFQUFDLDBDQUFSO0FBQW1ELFVBQU0sRUFBQyxRQUExRDtBQUFtRSxPQUFHLEVBQUMscUJBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUNDLE9BQUcsRUFBQyxxQkFETDtBQUVDLE9BQUcsRUFBQyx5QkFGTDtBQUdDLGFBQVMsRUFBQyx5RUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxDQWJELENBeEJELENBekhELENBREQ7QUE0S0EsQ0E3S007TUFBTVMsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNTY3YmJhYzE5MTIyNmVmNGY4NjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRXh0TGluayB9IGZyb20gJy4vSWNvbnMnXHJcblxyXG5jb25zdCBJbmRpdmlkdWFsID0gKFxyXG5cdGxpbms6IHN0cmluZyxcclxuXHRpbWdNb2NrOiBzdHJpbmcsXHJcblx0aW1nUGxhaW46IHN0cmluZyxcclxuXHR0aXRsZTogc3RyaW5nLFxyXG5cdGRlc2NPbmU6IHN0cmluZyxcclxuXHRkZXNjVHdvOiBzdHJpbmcsXHJcblx0aW1nTGVmdDogYm9vbGVhblxyXG4pID0+IHtcclxuXHRjb25zdCBhbHRUZXh0ID0gdGl0bGUgKyAnIHNjcmVlbnNob3QnXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtgZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIG15LTQgYm9yZGVyLWIgYm9yZGVyLWJsdWUtNzAwIHAtNiB3LWZ1bGwgbWQ6Ym9yZGVyLXdoaXRlICR7aW1nTGVmdFxyXG5cdFx0XHRcdD8gJ2ZsZXgtcm93IGJnLWdyYXktMTAwJ1xyXG5cdFx0XHRcdDogJ2ZsZXgtcm93LXJldmVyc2UgYmctZ3JheS0zMDAnfWB9XHJcblx0XHQ+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gbWQ6dy0xLzUgXCI+XHJcblx0XHRcdFx0PGEgaHJlZj17bGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0PGltZyBzcmM9e2ltZ1BsYWlufSBhbHQ9e2FsdFRleHR9IC8+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgc2VsZi1lbmQgdy1mdWxsIHRleHQtanVzdGlmeSBtZDptYi0yMCBtZDp3LTQvNWB9PlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbXQtNCBtZDptdC04IHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyICR7aW1nTGVmdFxyXG5cdFx0XHRcdFx0XHQ/ICdtZDp0ZXh0LXJpZ2h0J1xyXG5cdFx0XHRcdFx0XHQ6ICdtZDp0ZXh0LWxlZnQnfSBob3Zlcjp1bmRlcmxpbmVgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuXHRcdFx0XHRcdFx0e3RpdGxlfVxyXG5cdFx0XHRcdFx0XHQ8RXh0TGluayAvPlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgdGV4dC1iYXNlIHRleHQtbGVmdCAke2ltZ0xlZnQgPyAnbWQ6dGV4dC1yaWdodCcgOiAnbWQ6dGV4dC1sZWZ0J31gfT5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm10LTJcIj57ZGVzY09uZX08L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtdC0xXCI+e2Rlc2NUd299PC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG4vLyBjb25zdCBJbmRpdmlkdWFsID0gKFxyXG4vLyBcdGxpbms6IHN0cmluZyxcclxuLy8gXHRpbWdNb2NrOiBzdHJpbmcsXHJcbi8vIFx0aW1nUGxhaW46IHN0cmluZyxcclxuLy8gXHR0aXRsZTogc3RyaW5nLFxyXG4vLyBcdGRlc2NPbmU6IHN0cmluZyxcclxuLy8gXHRkZXNjVHdvOiBzdHJpbmcsXHJcbi8vIFx0aW1nTGVmdDogYm9vbGVhblxyXG4vLyApID0+IHtcclxuLy8gXHRjb25zdCBhbHRUZXh0ID0gdGl0bGUgKyAnIHNjcmVlbnNob3QnXHJcbi8vIFx0cmV0dXJuIChcclxuLy8gXHRcdDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCBteS00IGp1c3RpZnktZXZlbmx5IGJvcmRlci1iIGJvcmRlci1ibHVlLTcwMCBwYi02IG1kOmJvcmRlci13aGl0ZSAkeyFpbWdMZWZ0ICYmICdmbGV4LXJvdy1yZXZlcnNlJ31gfT5cclxuLy8gXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTAgZmxleCBzZWxmLWVuZCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1hdXRvIG1kOnctZnVsbCBtZDpqdXN0aWZ5LWVuZFwiPlxyXG4vLyBcdFx0XHRcdDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuLy8gXHRcdFx0XHRcdDxpbWdcclxuLy8gXHRcdFx0XHRcdFx0c3JjPXtpbWdNb2NrfVxyXG4vLyBcdFx0XHRcdFx0XHRhbHQ9e2FsdFRleHR9XHJcbi8vIFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGFic29sdXRlIHRvcC0wICR7aW1nTGVmdFxyXG4vLyBcdFx0XHRcdFx0XHRcdD8gJ2xlZnQtMCdcclxuLy8gXHRcdFx0XHRcdFx0XHQ6ICdyaWdodC0wJ30gaGlkZGVuIHctYXV0byBoLTY0IG10LTIgbWQ6aW5saW5lIG1kOnNlbGYtZW5kIG1kOm10LTBgfVxyXG4vLyBcdFx0XHRcdFx0Lz5cclxuLy8gXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbWQ6aGlkZGVuXCI+XHJcblxyXG4vLyBcdFx0XHRcdFx0PGltZ1xyXG4vLyBcdFx0XHRcdFx0XHRzcmM9e2ltZ01vY2t9XHJcbi8vIFx0XHRcdFx0XHRcdGFsdD17YWx0VGV4dH1cclxuLy8gXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctZnVsbCBoLWF1dG8gbXQtMiBtZDpoaWRkZW5cIlxyXG4vLyBcdFx0XHRcdFx0Lz5cclxuLy8gXHRcdFx0XHRcdDwvZGl2PlxyXG4vLyBcdFx0XHRcdDwvYT5cclxuLy8gXHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRcdDxkaXZcclxuLy8gXHRcdFx0XHRjbGFzc05hbWU9e2B6LTEwIHNlbGYtZW5kIHctZnVsbCAgJHtpbWdMZWZ0XHJcbi8vIFx0XHRcdFx0XHQ/ICdtZDptbC01NidcclxuLy8gXHRcdFx0XHRcdDogJ21kOm1yLTU2J30gdGV4dC1qdXN0aWZ5IG1kOm1iLTIwIG1kOnctMy80YH1cclxuLy8gXHRcdFx0PlxyXG4vLyBcdFx0XHRcdDxkaXZcclxuLy8gXHRcdFx0XHRcdGNsYXNzTmFtZT17YHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbXQtNCBtZDptdC04IHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyICR7aW1nTGVmdFxyXG4vLyBcdFx0XHRcdFx0XHQ/ICdtZDp0ZXh0LWxlZnQnXHJcbi8vIFx0XHRcdFx0XHRcdDogJ21kOnRleHQtcmlnaHQnfSBob3Zlcjp1bmRlcmxpbmVgfVxyXG4vLyBcdFx0XHRcdD5cclxuLy8gXHRcdFx0XHRcdDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuLy8gXHRcdFx0XHRcdFx0e3RpdGxlfVxyXG4vLyBcdFx0XHRcdFx0XHQ8RXh0TGluayAvPlxyXG4vLyBcdFx0XHRcdFx0PC9hPlxyXG4vLyBcdFx0XHRcdDwvZGl2PlxyXG4vLyBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgdGV4dC1iYXNlIHRleHQtbGVmdCAke2ltZ0xlZnQgPyAnbWQ6dGV4dC1sZWZ0JyA6ICdtZDp0ZXh0LXJpZ2h0J31gfT5cclxuLy8gXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm10LTJcIj57ZGVzY09uZX08L3A+XHJcbi8vIFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtdC0xXCI+e2Rlc2NUd299PC9wPlxyXG4vLyBcdFx0XHRcdDwvZGl2PlxyXG4vLyBcdFx0XHQ8L2Rpdj5cclxuLy8gXHRcdDwvZGl2PlxyXG4vLyBcdClcclxuLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQteGwgdGV4dC1jZW50ZXJcIj5Qcm9qZWN0czwvZGl2PlxyXG5cdFx0XHR7SW5kaXZpZHVhbChcclxuXHRcdFx0XHQnaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vc2Vla2Vyc2xvdW5nZS8nLFxyXG5cdFx0XHRcdCcvdGVhY2hlcnMtbW9jay5wbmcnLFxyXG5cdFx0XHRcdCcvc2NyZWVuLXRlYWNoZXItdGh1bWIucG5nJyxcclxuXHRcdFx0XHRcIlNlZWtlcnMnIExvdW5nZVwiLFxyXG5cdFx0XHRcdCdJbnN0YW50IHNlYXJjaCBlbmdpbmUgd2l0aCA0NWsrIGxpbmVzIGZyb20gdGhlIFwiVGVhY2hlcnNcXCdzIExvdW5nZVwiIHBvZGNhc3QuJyxcclxuXHRcdFx0XHQnfjUwIHdlZWtseSB1c2Vycy5cdFBvd2VyZWQgYnkgQVdTIEVsYXN0aWNTZWFyY2ggYW5kIGJ1aWx0IHdpdGggUmVhY3QuJyxcclxuXHRcdFx0XHR0cnVlXHJcblx0XHRcdCl9XHJcblx0XHRcdHtJbmRpdmlkdWFsKFxyXG5cdFx0XHRcdCdodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9oYW5kYm9va3NlYXJjaC8nLFxyXG5cdFx0XHRcdCcvaGFuZGJvb2stbW9ja3VwMi5wbmcnLFxyXG5cdFx0XHRcdCcvc2NyZWVuLWhhbmRib29rLnBuZycsXHJcblx0XHRcdFx0J0hhbmRib29rIFNlYXJjaCcsXHJcblx0XHRcdFx0J1NlYXJjaCBlbmdpbmUgZm9yIHBvZGNhc3QgSG9sbHl3b29kIEhhbmRib29rLicsXHJcblx0XHRcdFx0JzEyMWsrIGxpbmVzLiBBbHNvIHBvd2VyZWQgYnkgQVdTIEVsYXN0aWNTZWFyY2guJyxcclxuXHRcdFx0XHRmYWxzZVxyXG5cdFx0XHQpfVxyXG5cdFx0XHR7SW5kaXZpZHVhbChcclxuXHRcdFx0XHQnaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vZGhhbW1hcGFkYS8nLFxyXG5cdFx0XHRcdCcvZGhhbW1hLW1vY2sucG5nJyxcclxuXHRcdFx0XHQnL3NjcmVlbi1kaGFtbWEtdGh1bWIucG5nJyxcclxuXHRcdFx0XHQnRGhhbW1hcGFkYSBSZWFkZXInLFxyXG5cdFx0XHRcdCdMaWdodHdlaWdodCBhbmQgZGlzdHJhY3Rpb24tZnJlZSBzaXRlIGZvciByZWFkaW5nIHRoZSBEaGFtbWFwYWRhLicsXHJcblx0XHRcdFx0J0J1aWx0IHdpdGggUmVhY3QuJyxcclxuXHRcdFx0XHR0cnVlXHJcblx0XHRcdCl9XHJcblx0XHRcdHtJbmRpdmlkdWFsKFxyXG5cdFx0XHRcdCdodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9Lb3JlYW5EeW5hc3R5R2VuZXJhdG9yLycsXHJcblx0XHRcdFx0Jy9keW5hc3R5LW1vY2sucG5nJyxcclxuXHRcdFx0XHQnL3NjcmVlbi1keW5hc3R5LXRodW1iLnBuZycsXHJcblx0XHRcdFx0J0tvcmVhbiBEeW5hc3R5IEdlbmVyYXRvcicsXHJcblx0XHRcdFx0J0dlbmVyYXRlIGEgZnVsbHkgc3RhZmZlZCwgcmFuZG9taXplZCBtZWRpZXZhbCBLb3JlYW4gYnVyZWF1Y3JhY3kuJyxcclxuXHRcdFx0XHQnQnVpbHQgd2l0aCBSZWFjdC4nLFxyXG5cdFx0XHRcdGZhbHNlXHJcblx0XHRcdCl9XHJcblxyXG5cdFx0XHQ8aHIgLz5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCBteS02IGp1c3RpZnktZXZlbmx5XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCB3LWZ1bGwgdGV4dC1qdXN0aWZ5XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgbWQ6dy0xLzMgaG92ZXI6dW5kZXJsaW5lXCI+XHJcblx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL0Zvb3RiYWxsTGluZXMvXCJcclxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxyXG5cdFx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0Rm9vdGJhbGwgTGluZXM8RXh0TGluayAvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1kOnctMi8zIFwiPlxyXG5cdFx0XHRcdFx0XHRWaWV3IGhpc3RvcmljYWwgdGFibGUgcGxhY2VtZW50cyBvZiBTd2VkaXNoIGZvb3RiYWxsIHRlYW1zLiBCdWlsdCB3aXRoIFJlYWN0LlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gbXQtMiBjdXJzb3ItcG9pbnRlclwiPlxyXG5cdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL0Zvb3RiYWxsTGluZXMvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0c3JjPVwiL3NjcmVlbi1mb290YmFsbC10aHVtYi5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdGFsdD1cIkZvb3RiYWxsIExpbmVzIHNjcmVlbnNob3RcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gbXQtMiBib3JkZXIgYm9yZGVyLWJsdWUtNDAwIHNoYWRvdy1sZyBtZDpzZWxmLWVuZCBtZDptdC0wXCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxociAvPlxyXG5cclxuXHRcdFx0PGhyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCBteS00IGp1c3RpZnktZXZlbmx5XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCB3LWZ1bGwgbXktMiB0ZXh0LWp1c3RpZnlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgdy1mdWxsdGV4dC1sZyBtZDp3LTEvMyBob3Zlcjp1bmRlcmxpbmVcIj5cclxuXHRcdFx0XHRcdFx0RmFuIGFydFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTIvMyBcIj5cclxuXHRcdFx0XHRcdFx0RmFuIGFydCBmb3IgVGhlIFRlYWNoZXJzJyBMb3VuZ2UgcG9kY2FzdCBtYWRlIHVzaW5nIEFkb2JlIFBob3Rvc2hvcC5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1hdXRvIG10LTIgY3Vyc29yLXBvaW50ZXJcIj5cclxuXHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0c3JjPVwiL3RlYWNoZXJzLWZhY2VzLXRodW1iLnBuZ1wiXHJcblx0XHRcdFx0XHRcdGFsdD1cIlRlYWNoZXJzJyBMb3VuZ2UgZmFuIGFydFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gbXQtMiBib3JkZXIgYm9yZGVyLWJsdWUtNDAwIHNoYWRvdy1sZyBtZDpzZWxmLWVuZCBtZDptdC0wXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGhyIC8+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtdC04IHRleHQteGwgdGV4dC1jZW50ZXJcIj5PbmUtZGF5IHByb2plY3RzPC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCBteS02IGp1c3RpZnktZXZlbmx5XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1qdXN0aWZ5IG1kOnctMi8zIG1kOnByLTRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIGhvdmVyOnVuZGVybGluZVwiPlxyXG5cdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kYWlseXVpLyMvY2FsY3VsYXRvclwiXHJcblx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFRJLTEwOCBDYWxjdWxhdG9yXHJcblx0XHRcdFx0XHRcdFx0PEV4dExpbmsgLz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRDYWxjdWxhdG9yIGJhc2VkIG9uIFRleGFzIEluc3RydW1lbnRzIFRJLTEwOC4gTWFkZSB1c2luZyBvbmx5IENTUyBhbmQgSmF2YVNjcmlwdC5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtYXV0byBtZDp3LTEvMyBtZDpqdXN0aWZ5LWVuZFwiPlxyXG5cdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL2RhaWx5dWkvIy9jYWxjdWxhdG9yXCJcclxuXHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGxcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9XCIvc2NyZWVuLWNhbGMtdGh1bWIucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRcdGFsdD1cIlRJLTEwOCBDYWxjdWxhdG9yIHNjcmVlbnNob3RcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy00LzUgaC1hdXRvIG10LTIgYm9yZGVyIGJvcmRlci1ibHVlLTQwMCBzaGFkb3ctbGcgbWQ6dy1mdWxsIG1kOnNlbGYtZW5kIG1kOm10LTBcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGhyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgdy1mdWxsXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoIHctMS8yIG15LTYganVzdGlmeS1ldmVubHlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTQgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dW5kZXJsaW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kYWlseXVpMDEvXCJcclxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXHJcblx0XHRcdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHROZXdzbGV0dGVyXHJcblx0XHRcdFx0XHRcdFx0XHQ8RXh0TGluayAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LTUvNiBoLWF1dG8gbWQ6anVzdGlmeS1lbmRcIj5cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL2RhaWx5dWkwMS9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3JjPVwiL3NjcmVlbi1uZXdzbGV0dGVyLXRodW1iLnBuZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJOZXdzbGV0dGVyIHNjcmVlbnNob3RcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBtdC0yIGJvcmRlciBib3JkZXItYmx1ZS00MDAgc2hhZG93LWxnIG1kOnNlbGYtZW5kIG1kOm10LTBcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCB3LTEvMiBteS02IGp1c3RpZnktZXZlbmx5XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYi00IHRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIGhvdmVyOnVuZGVybGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vZGFpbHl1aTAzL1wiXHJcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0TGFuZGluZyBwYWdlXHJcblx0XHRcdFx0XHRcdFx0XHQ8RXh0TGluayAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LTUvNiBoLWF1dG8gbWQ6anVzdGlmeS1lbmRcIj5cclxuXHRcdFx0XHRcdFx0PGEgaHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL2RhaWx5dWkwMy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3JjPVwiL3NjcmVlbi1sYW5kaW5nLnBuZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJMYW5kaW5nIHBhZ2Ugc2NyZWVuc2hvdFwiXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG10LTIgYm9yZGVyIGJvcmRlci1ibHVlLTQwMCBzaGFkb3ctbGcgbWQ6c2VsZi1lbmQgbWQ6bXQtMFwiXHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cclxuXHQpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==