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
    className: "flex flex-wrap rounded-md items-center my-4 border-b border-blue-700 px-6 w-full md:border-white ".concat(imgLeft ? 'flex-row bg-gray-100' : 'flex-row-reverse bg-gray-300'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "w-full h-auto my-4 md:w-1/5 ",
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
    className: "text-2xl font-semibold mt-4 md:mt-8 text-center cursor-pointer md:text-left ".concat(imgLeft && 'ml-4', " hover:underline"),
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
      lineNumber: 31,
      columnNumber: 6
    }
  }, title, __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }))), __jsx("div", {
    className: "text-base text-left ".concat(imgLeft && 'ml-4', " "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 6
    }
  }, descOne), __jsx("p", {
    className: "mt-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 101,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "w-full font-serif text-3xl font-light text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 4
    }
  }, "Projects"), Individual('https://www.hollywoodmasterclass.co', '/masterclass-screen-once.gif', '/masterclass-screen-once.gif', "Hollywood Masterclass", 'Unofficial promotional website for the podcast \'Hollywood Masterclass\'', '500+ page views in first 24 hours. Built with Next.js', false), Individual('https://martenfrisk.github.io/seekerslounge/', '/teachers-mock.png', '/screen-teacher-thumb.png', "Seekers' Lounge", 'Instant search engine with 45k+ lines from the "Teachers\'s Lounge" podcast.', '~50 weekly users.	Powered by AWS ElasticSearch and built with React.', true), Individual('https://martenfrisk.github.io/handbooksearch/', '/handbook-mockup2.png', '/screen-handbook.png', 'Handbook Search', 'Search engine for podcast Hollywood Handbook.', '121k+ lines. Also powered by AWS ElasticSearch.', false), Individual('https://martenfrisk.github.io/dhammapada/', '/dhamma-mock.png', '/screen-dhamma-thumb.png', 'Dhammapada Reader', 'Lightweight and distraction-free site for reading the Dhammapada.', 'Built with React.', true), Individual('https://martenfrisk.github.io/KoreanDynastyGenerator/', '/dynasty-mock.png', '/screen-dynasty-thumb.png', 'Korean Dynasty Generator', 'Generate a fully staffed, randomized medieval Korean bureaucracy.', 'Built with React.', false), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap items-stretch my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap w-full text-justify",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full text-lg font-semibold cursor-pointer md:w-1/3 hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/FootballLines/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, "Football Lines", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 22
    }
  }))), __jsx("div", {
    className: "w-full md:w-2/3 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 6
    }
  }, "View historical table placements of Swedish football teams. Built with React.")), __jsx("div", {
    className: "flex justify-center w-full h-auto mt-2 cursor-pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/FootballLines/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/screen-football-thumb.png",
    alt: "Football Lines screenshot",
    className: "w-full h-auto mt-2 border border-blue-400 shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  })))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 4
    }
  }), __jsx("hr", {
    className: "w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "flex flex-wrap items-stretch my-4 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "flex flex-wrap w-full my-2 text-justify",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-full font-semibold cursor-pointer w-fulltext-lg md:w-1/3 hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 6
    }
  }, "Fan art"), __jsx("div", {
    className: "w-full md:w-2/3 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 6
    }
  }, "Fan art for The Teachers' Lounge podcast made using Adobe Photoshop.")), __jsx("div", {
    className: "flex justify-center w-full h-auto mt-2 cursor-pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/teachers-faces-thumb.png",
    alt: "Teachers' Lounge fan art",
    className: "w-full h-auto mt-2 border border-blue-400 shadow-lg md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 6
    }
  }))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 4
    }
  }), __jsx("div", {
    className: "w-full mt-8 text-xl text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 4
    }
  }, "One-day projects"), __jsx("div", {
    className: "flex flex-wrap items-stretch my-6 justify-evenly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-full text-justify md:w-2/3 md:pr-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "text-lg font-semibold cursor-pointer hover:underline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 6
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui/#/calculator",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 7
    }
  }, "TI-108 Calculator", __jsx(_Icons__WEBPACK_IMPORTED_MODULE_1__["ExtLink"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 8
    }
  }))), "Calculator based on Texas Instruments TI-108. Made using only CSS and JavaScript."), __jsx("div", {
    className: "flex justify-center w-full h-auto md:w-1/3 md:justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "https://martenfrisk.github.io/dailyui/#/calculator",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "flex justify-center w-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/screen-calc-thumb.png",
    alt: "TI-108 Calculator screenshot",
    className: "w-4/5 h-auto mt-2 border border-blue-400 shadow-lg md:w-full md:self-end md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 8
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeCJdLCJuYW1lcyI6WyJJbmRpdmlkdWFsIiwibGluayIsImltZ01vY2siLCJpbWdQbGFpbiIsInRpdGxlIiwiZGVzY09uZSIsImRlc2NUd28iLCJpbWdMZWZ0IiwiYWx0VGV4dCIsIlByb2plY3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUNsQkMsSUFEa0IsRUFFbEJDLE9BRmtCLEVBR2xCQyxRQUhrQixFQUlsQkMsS0FKa0IsRUFLbEJDLE9BTGtCLEVBTWxCQyxPQU5rQixFQU9sQkMsT0FQa0IsRUFRZDtBQUNKLE1BQU1DLE9BQU8sR0FBR0osS0FBSyxHQUFHLGFBQXhCO0FBQ0EsU0FDQztBQUNDLGFBQVMsNkdBQXNHRyxPQUFPLEdBQ25ILHNCQURtSCxHQUVuSCw4QkFGTSxDQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNQztBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBRyxRQUFJLEVBQUVOLElBQVQ7QUFBZSxVQUFNLEVBQUMsUUFBdEI7QUFBK0IsT0FBRyxFQUFDLHFCQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxPQUFHLEVBQUVFLFFBQVY7QUFBb0IsT0FBRyxFQUFFSyxPQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxDQU5ELEVBWUM7QUFBSyxhQUFTLGtEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUNDLGFBQVMsd0ZBQWlGRCxPQUFPLElBQUksTUFBNUYscUJBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdDO0FBQUcsUUFBSSxFQUFF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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTUMsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkQsQ0FERCxDQURELENBREQsRUFhQztBQUFLLGFBQVMsRUFBQyxpREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBRyxRQUFJLEVBQUMsMENBQVI7QUFBbUQsVUFBTSxFQUFDLFFBQTFEO0FBQW1FLE9BQUcsRUFBQyxxQkFBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsT0FBRyxFQUFDLHFCQURMO0FBRUMsT0FBRyxFQUFDLHlCQUZMO0FBR0MsYUFBUyxFQUFDLHlFQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELENBYkQsQ0F4QkQsQ0FsSUQsQ0FERDtBQXFMQSxDQXRMTTtNQUFNUyxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hODFlNmY4Mjc2MGJjNWY3ZDZjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBFeHRMaW5rIH0gZnJvbSAnLi9JY29ucydcclxuXHJcbmNvbnN0IEluZGl2aWR1YWwgPSAoXHJcblx0bGluazogc3RyaW5nLFxyXG5cdGltZ01vY2s6IHN0cmluZyxcclxuXHRpbWdQbGFpbjogc3RyaW5nLFxyXG5cdHRpdGxlOiBzdHJpbmcsXHJcblx0ZGVzY09uZTogc3RyaW5nLFxyXG5cdGRlc2NUd286IHN0cmluZyxcclxuXHRpbWdMZWZ0OiBib29sZWFuXHJcbikgPT4ge1xyXG5cdGNvbnN0IGFsdFRleHQgPSB0aXRsZSArICcgc2NyZWVuc2hvdCdcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e2BmbGV4IGZsZXgtd3JhcCByb3VuZGVkLW1kIGl0ZW1zLWNlbnRlciBteS00IGJvcmRlci1iIGJvcmRlci1ibHVlLTcwMCBweC02IHctZnVsbCBtZDpib3JkZXItd2hpdGUgJHtpbWdMZWZ0XHJcblx0XHRcdFx0PyAnZmxleC1yb3cgYmctZ3JheS0xMDAnXHJcblx0XHRcdFx0OiAnZmxleC1yb3ctcmV2ZXJzZSBiZy1ncmF5LTMwMCd9YH1cclxuXHRcdD5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBteS00IG1kOnctMS81IFwiPlxyXG5cdFx0XHRcdDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuXHRcdFx0XHRcdDxpbWcgc3JjPXtpbWdQbGFpbn0gYWx0PXthbHRUZXh0fSAvPlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHNlbGYtZW5kIHctZnVsbCB0ZXh0LWp1c3RpZnkgbWQ6bWItMjAgbWQ6dy00LzVgfT5cclxuXHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2B0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG10LTQgbWQ6bXQtOCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlciBtZDp0ZXh0LWxlZnQgJHtpbWdMZWZ0ICYmICdtbC00J30gaG92ZXI6dW5kZXJsaW5lYH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcblx0XHRcdFx0XHRcdHt0aXRsZX1cclxuXHRcdFx0XHRcdFx0PEV4dExpbmsgLz5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHRleHQtYmFzZSB0ZXh0LWxlZnQgJHtpbWdMZWZ0ICYmICdtbC00J30gYH0+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtdC0yXCI+e2Rlc2NPbmV9PC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibXQtMVwiPntkZXNjVHdvfTwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuLy8gY29uc3QgSW5kaXZpZHVhbCA9IChcclxuLy8gXHRsaW5rOiBzdHJpbmcsXHJcbi8vIFx0aW1nTW9jazogc3RyaW5nLFxyXG4vLyBcdGltZ1BsYWluOiBzdHJpbmcsXHJcbi8vIFx0dGl0bGU6IHN0cmluZyxcclxuLy8gXHRkZXNjT25lOiBzdHJpbmcsXHJcbi8vIFx0ZGVzY1R3bzogc3RyaW5nLFxyXG4vLyBcdGltZ0xlZnQ6IGJvb2xlYW5cclxuLy8gKSA9PiB7XHJcbi8vIFx0Y29uc3QgYWx0VGV4dCA9IHRpdGxlICsgJyBzY3JlZW5zaG90J1xyXG4vLyBcdHJldHVybiAoXHJcbi8vIFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2ggbXktNCBqdXN0aWZ5LWV2ZW5seSBib3JkZXItYiBib3JkZXItYmx1ZS03MDAgcGItNiBtZDpib3JkZXItd2hpdGUgJHshaW1nTGVmdCAmJiAnZmxleC1yb3ctcmV2ZXJzZSd9YH0+XHJcbi8vIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0wIGZsZXggc2VsZi1lbmQganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtYXV0byBtZDp3LWZ1bGwgbWQ6anVzdGlmeS1lbmRcIj5cclxuLy8gXHRcdFx0XHQ8YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbi8vIFx0XHRcdFx0XHQ8aW1nXHJcbi8vIFx0XHRcdFx0XHRcdHNyYz17aW1nTW9ja31cclxuLy8gXHRcdFx0XHRcdFx0YWx0PXthbHRUZXh0fVxyXG4vLyBcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMCAke2ltZ0xlZnRcclxuLy8gXHRcdFx0XHRcdFx0XHQ/ICdsZWZ0LTAnXHJcbi8vIFx0XHRcdFx0XHRcdFx0OiAncmlnaHQtMCd9IGhpZGRlbiB3LWF1dG8gaC02NCBtdC0yIG1kOmlubGluZSBtZDpzZWxmLWVuZCBtZDptdC0wYH1cclxuLy8gXHRcdFx0XHRcdC8+XHJcbi8vIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIG1kOmhpZGRlblwiPlxyXG5cclxuLy8gXHRcdFx0XHRcdDxpbWdcclxuLy8gXHRcdFx0XHRcdFx0c3JjPXtpbWdNb2NrfVxyXG4vLyBcdFx0XHRcdFx0XHRhbHQ9e2FsdFRleHR9XHJcbi8vIFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LWZ1bGwgaC1hdXRvIG10LTIgbWQ6aGlkZGVuXCJcclxuLy8gXHRcdFx0XHRcdC8+XHJcbi8vIFx0XHRcdFx0XHQ8L2Rpdj5cclxuLy8gXHRcdFx0XHQ8L2E+XHJcbi8vIFx0XHRcdDwvZGl2PlxyXG4vLyBcdFx0XHQ8ZGl2XHJcbi8vIFx0XHRcdFx0Y2xhc3NOYW1lPXtgei0xMCBzZWxmLWVuZCB3LWZ1bGwgICR7aW1nTGVmdFxyXG4vLyBcdFx0XHRcdFx0PyAnbWQ6bWwtNTYnXHJcbi8vIFx0XHRcdFx0XHQ6ICdtZDptci01Nid9IHRleHQtanVzdGlmeSBtZDptYi0yMCBtZDp3LTMvNGB9XHJcbi8vIFx0XHRcdD5cclxuLy8gXHRcdFx0XHQ8ZGl2XHJcbi8vIFx0XHRcdFx0XHRjbGFzc05hbWU9e2B0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG10LTQgbWQ6bXQtOCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlciAke2ltZ0xlZnRcclxuLy8gXHRcdFx0XHRcdFx0PyAnbWQ6dGV4dC1sZWZ0J1xyXG4vLyBcdFx0XHRcdFx0XHQ6ICdtZDp0ZXh0LXJpZ2h0J30gaG92ZXI6dW5kZXJsaW5lYH1cclxuLy8gXHRcdFx0XHQ+XHJcbi8vIFx0XHRcdFx0XHQ8YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbi8vIFx0XHRcdFx0XHRcdHt0aXRsZX1cclxuLy8gXHRcdFx0XHRcdFx0PEV4dExpbmsgLz5cclxuLy8gXHRcdFx0XHRcdDwvYT5cclxuLy8gXHRcdFx0XHQ8L2Rpdj5cclxuLy8gXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHRleHQtYmFzZSB0ZXh0LWxlZnQgJHtpbWdMZWZ0ID8gJ21kOnRleHQtbGVmdCcgOiAnbWQ6dGV4dC1yaWdodCd9YH0+XHJcbi8vIFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtdC0yXCI+e2Rlc2NPbmV9PC9wPlxyXG4vLyBcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibXQtMVwiPntkZXNjVHdvfTwvcD5cclxuLy8gXHRcdFx0XHQ8L2Rpdj5cclxuLy8gXHRcdFx0PC9kaXY+XHJcbi8vIFx0XHQ8L2Rpdj5cclxuLy8gXHQpXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmb250LXNlcmlmIHRleHQtM3hsIGZvbnQtbGlnaHQgdGV4dC1jZW50ZXJcIj5Qcm9qZWN0czwvZGl2PlxyXG5cdFx0XHR7SW5kaXZpZHVhbChcclxuXHRcdFx0XHQnaHR0cHM6Ly93d3cuaG9sbHl3b29kbWFzdGVyY2xhc3MuY28nLFxyXG5cdFx0XHRcdCcvbWFzdGVyY2xhc3Mtc2NyZWVuLW9uY2UuZ2lmJyxcclxuXHRcdFx0XHQnL21hc3RlcmNsYXNzLXNjcmVlbi1vbmNlLmdpZicsXHJcblx0XHRcdFx0XCJIb2xseXdvb2QgTWFzdGVyY2xhc3NcIixcclxuXHRcdFx0XHQnVW5vZmZpY2lhbCBwcm9tb3Rpb25hbCB3ZWJzaXRlIGZvciB0aGUgcG9kY2FzdCBcXCdIb2xseXdvb2QgTWFzdGVyY2xhc3NcXCcnLFxyXG5cdFx0XHRcdCc1MDArIHBhZ2Ugdmlld3MgaW4gZmlyc3QgMjQgaG91cnMuIEJ1aWx0IHdpdGggTmV4dC5qcycsXHJcblx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0KX1cclxuXHRcdFx0e0luZGl2aWR1YWwoXHJcblx0XHRcdFx0J2h0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL3NlZWtlcnNsb3VuZ2UvJyxcclxuXHRcdFx0XHQnL3RlYWNoZXJzLW1vY2sucG5nJyxcclxuXHRcdFx0XHQnL3NjcmVlbi10ZWFjaGVyLXRodW1iLnBuZycsXHJcblx0XHRcdFx0XCJTZWVrZXJzJyBMb3VuZ2VcIixcclxuXHRcdFx0XHQnSW5zdGFudCBzZWFyY2ggZW5naW5lIHdpdGggNDVrKyBsaW5lcyBmcm9tIHRoZSBcIlRlYWNoZXJzXFwncyBMb3VuZ2VcIiBwb2RjYXN0LicsXHJcblx0XHRcdFx0J341MCB3ZWVrbHkgdXNlcnMuXHRQb3dlcmVkIGJ5IEFXUyBFbGFzdGljU2VhcmNoIGFuZCBidWlsdCB3aXRoIFJlYWN0LicsXHJcblx0XHRcdFx0dHJ1ZVxyXG5cdFx0XHQpfVxyXG5cdFx0XHR7SW5kaXZpZHVhbChcclxuXHRcdFx0XHQnaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vaGFuZGJvb2tzZWFyY2gvJyxcclxuXHRcdFx0XHQnL2hhbmRib29rLW1vY2t1cDIucG5nJyxcclxuXHRcdFx0XHQnL3NjcmVlbi1oYW5kYm9vay5wbmcnLFxyXG5cdFx0XHRcdCdIYW5kYm9vayBTZWFyY2gnLFxyXG5cdFx0XHRcdCdTZWFyY2ggZW5naW5lIGZvciBwb2RjYXN0IEhvbGx5d29vZCBIYW5kYm9vay4nLFxyXG5cdFx0XHRcdCcxMjFrKyBsaW5lcy4gQWxzbyBwb3dlcmVkIGJ5IEFXUyBFbGFzdGljU2VhcmNoLicsXHJcblx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0KX1cclxuXHRcdFx0e0luZGl2aWR1YWwoXHJcblx0XHRcdFx0J2h0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL2RoYW1tYXBhZGEvJyxcclxuXHRcdFx0XHQnL2RoYW1tYS1tb2NrLnBuZycsXHJcblx0XHRcdFx0Jy9zY3JlZW4tZGhhbW1hLXRodW1iLnBuZycsXHJcblx0XHRcdFx0J0RoYW1tYXBhZGEgUmVhZGVyJyxcclxuXHRcdFx0XHQnTGlnaHR3ZWlnaHQgYW5kIGRpc3RyYWN0aW9uLWZyZWUgc2l0ZSBmb3IgcmVhZGluZyB0aGUgRGhhbW1hcGFkYS4nLFxyXG5cdFx0XHRcdCdCdWlsdCB3aXRoIFJlYWN0LicsXHJcblx0XHRcdFx0dHJ1ZVxyXG5cdFx0XHQpfVxyXG5cdFx0XHR7SW5kaXZpZHVhbChcclxuXHRcdFx0XHQnaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vS29yZWFuRHluYXN0eUdlbmVyYXRvci8nLFxyXG5cdFx0XHRcdCcvZHluYXN0eS1tb2NrLnBuZycsXHJcblx0XHRcdFx0Jy9zY3JlZW4tZHluYXN0eS10aHVtYi5wbmcnLFxyXG5cdFx0XHRcdCdLb3JlYW4gRHluYXN0eSBHZW5lcmF0b3InLFxyXG5cdFx0XHRcdCdHZW5lcmF0ZSBhIGZ1bGx5IHN0YWZmZWQsIHJhbmRvbWl6ZWQgbWVkaWV2YWwgS29yZWFuIGJ1cmVhdWNyYWN5LicsXHJcblx0XHRcdFx0J0J1aWx0IHdpdGggUmVhY3QuJyxcclxuXHRcdFx0XHRmYWxzZVxyXG5cdFx0XHQpfVxyXG5cclxuXHRcdFx0PGhyIC8+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2ggbXktNiBqdXN0aWZ5LWV2ZW5seVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgdy1mdWxsIHRleHQtanVzdGlmeVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZyBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIG1kOnctMS8zIGhvdmVyOnVuZGVybGluZVwiPlxyXG5cdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9Gb290YmFsbExpbmVzL1wiXHJcblx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdEZvb3RiYWxsIExpbmVzPEV4dExpbmsgLz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTIvMyBcIj5cclxuXHRcdFx0XHRcdFx0VmlldyBoaXN0b3JpY2FsIHRhYmxlIHBsYWNlbWVudHMgb2YgU3dlZGlzaCBmb290YmFsbCB0ZWFtcy4gQnVpbHQgd2l0aCBSZWFjdC5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1hdXRvIG10LTIgY3Vyc29yLXBvaW50ZXJcIj5cclxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9Gb290YmFsbExpbmVzL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuXHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdHNyYz1cIi9zY3JlZW4tZm9vdGJhbGwtdGh1bWIucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRhbHQ9XCJGb290YmFsbCBMaW5lcyBzY3JlZW5zaG90XCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG10LTIgYm9yZGVyIGJvcmRlci1ibHVlLTQwMCBzaGFkb3ctbGcgbWQ6c2VsZi1lbmQgbWQ6bXQtMFwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8aHIgLz5cclxuXHJcblx0XHRcdDxociBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2ggbXktNCBqdXN0aWZ5LWV2ZW5seVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgdy1mdWxsIG15LTIgdGV4dC1qdXN0aWZ5XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIHctZnVsbHRleHQtbGcgbWQ6dy0xLzMgaG92ZXI6dW5kZXJsaW5lXCI+XHJcblx0XHRcdFx0XHRcdEZhbiBhcnRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0yLzMgXCI+XHJcblx0XHRcdFx0XHRcdEZhbiBhcnQgZm9yIFRoZSBUZWFjaGVycycgTG91bmdlIHBvZGNhc3QgbWFkZSB1c2luZyBBZG9iZSBQaG90b3Nob3AuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtYXV0byBtdC0yIGN1cnNvci1wb2ludGVyXCI+XHJcblx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdHNyYz1cIi90ZWFjaGVycy1mYWNlcy10aHVtYi5wbmdcIlxyXG5cdFx0XHRcdFx0XHRhbHQ9XCJUZWFjaGVycycgTG91bmdlIGZhbiBhcnRcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG10LTIgYm9yZGVyIGJvcmRlci1ibHVlLTQwMCBzaGFkb3ctbGcgbWQ6c2VsZi1lbmQgbWQ6bXQtMFwiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxociAvPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtOCB0ZXh0LXhsIHRleHQtY2VudGVyXCI+T25lLWRheSBwcm9qZWN0czwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2ggbXktNiBqdXN0aWZ5LWV2ZW5seVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtanVzdGlmeSBtZDp3LTIvMyBtZDpwci00XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmVcIj5cclxuXHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vZGFpbHl1aS8jL2NhbGN1bGF0b3JcIlxyXG5cdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXHJcblx0XHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRUSS0xMDggQ2FsY3VsYXRvclxyXG5cdFx0XHRcdFx0XHRcdDxFeHRMaW5rIC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0Q2FsY3VsYXRvciBiYXNlZCBvbiBUZXhhcyBJbnN0cnVtZW50cyBUSS0xMDguIE1hZGUgdXNpbmcgb25seSBDU1MgYW5kIEphdmFTY3JpcHQuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gbWQ6dy0xLzMgbWQ6anVzdGlmeS1lbmRcIj5cclxuXHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kYWlseXVpLyMvY2FsY3VsYXRvclwiXHJcblx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXHJcblx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0c3JjPVwiL3NjcmVlbi1jYWxjLXRodW1iLnBuZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRhbHQ9XCJUSS0xMDggQ2FsY3VsYXRvciBzY3JlZW5zaG90XCJcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctNC81IGgtYXV0byBtdC0yIGJvcmRlciBib3JkZXItYmx1ZS00MDAgc2hhZG93LWxnIG1kOnctZnVsbCBtZDpzZWxmLWVuZCBtZDptdC0wXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxociAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIHctZnVsbFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCB3LTEvMiBteS02IGp1c3RpZnktZXZlbmx5XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYi00IHRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIGhvdmVyOnVuZGVybGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vZGFpbHl1aTAxL1wiXHJcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0TmV3c2xldHRlclxyXG5cdFx0XHRcdFx0XHRcdFx0PEV4dExpbmsgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy01LzYgaC1hdXRvIG1kOmp1c3RpZnktZW5kXCI+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kYWlseXVpMDEvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9zY3JlZW4tbmV3c2xldHRlci10aHVtYi5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PVwiTmV3c2xldHRlciBzY3JlZW5zaG90XCJcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gbXQtMiBib3JkZXIgYm9yZGVyLWJsdWUtNDAwIHNoYWRvdy1sZyBtZDpzZWxmLWVuZCBtZDptdC0wXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2ggdy0xLzIgbXktNiBqdXN0aWZ5LWV2ZW5seVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItNCB0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL2RhaWx5dWkwMy9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdExhbmRpbmcgcGFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0PEV4dExpbmsgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy01LzYgaC1hdXRvIG1kOmp1c3RpZnktZW5kXCI+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kYWlseXVpMDMvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9zY3JlZW4tbGFuZGluZy5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PVwiTGFuZGluZyBwYWdlIHNjcmVlbnNob3RcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBtdC0yIGJvcmRlciBib3JkZXItYmx1ZS00MDAgc2hhZG93LWxnIG1kOnNlbGYtZW5kIG1kOm10LTBcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=