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
    className: "flex flex-wrap items-stretch my-4 justify-evenly border-b border-blue-700 pb-6 md:border-white ".concat(!imgLeft ? 'flex-row-reverse bg-gray-500' : 'bg-gray-300'),
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
  return __jsx("div", {
    className: "neu",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeCJdLCJuYW1lcyI6WyJJbmRpdmlkdWFsIiwibGluayIsImltZ01vY2siLCJpbWdQbGFpbiIsInRpdGxlIiwiZGVzY09uZSIsImRlc2NUd28iLCJpbWdMZWZ0IiwiYWx0VGV4dCIsIlByb2plY3RzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUNsQkMsSUFEa0IsRUFFbEJDLE9BRmtCLEVBR2xCQyxRQUhrQixFQUlsQkMsS0FKa0IsRUFLbEJDLE9BTGtCLEVBTWxCQyxPQU5rQixFQU9sQkMsT0FQa0IsRUFRZDtBQUNKLE1BQU1DLE9BQU8sR0FBR0osS0FBSyxHQUFHLGFBQXhCO0FBQ0EsU0FDQztBQUFLLGFBQVMsMkdBQW9HLENBQUNHLE9BQUQsR0FBVyw4QkFBWCxHQUE0QyxhQUFoSixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxrRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBRyxRQUFJLEVBQUVOLElBQVQ7QUFBZSxVQUFNLEVBQUMsUUFBdEI7QUFBK0IsT0FBRyxFQUFDLHFCQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxPQUFHLEVBQUVFLFFBRE47QUFFQyxPQUFHLEVBQUVLLE9BRk47QUFHQyxhQUFTLDJCQUFvQkQsT0FBTyxHQUNqQyxRQURpQyxHQUVqQyxTQUZNLGtEQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELENBREQsRUFZQztBQUNDLGFBQVMsa0NBQTJCQSxPQUFPLEdBQ3hDLFVBRHdDLEdBRXhDLFVBRk0sb0NBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtDO0FBQ0Ms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LEVBQUMscUJBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFNQyxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORCxDQURELENBREQsQ0FERCxFQWFDO0FBQUssYUFBUyxFQUFDLGlEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLFFBQUksRUFBQywwQ0FBUjtBQUFtRCxVQUFNLEVBQUMsUUFBMUQ7QUFBbUUsT0FBRyxFQUFDLHFCQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxPQUFHLEVBQUMscUJBREw7QUFFQyxPQUFHLEVBQUMseUJBRkw7QUFHQyxhQUFTLEVBQUMseUVBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsQ0FiRCxDQXhCRCxDQTVIRCxDQUREO0FBK0tBLENBaExNO01BQU1TLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjAyYjUwYmQ4YTU3ZGQ1ZDE4YWExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEV4dExpbmsgfSBmcm9tICcuL0ljb25zJ1xyXG5cclxuY29uc3QgSW5kaXZpZHVhbCA9IChcclxuXHRsaW5rOiBzdHJpbmcsXHJcblx0aW1nTW9jazogc3RyaW5nLFxyXG5cdGltZ1BsYWluOiBzdHJpbmcsXHJcblx0dGl0bGU6IHN0cmluZyxcclxuXHRkZXNjT25lOiBzdHJpbmcsXHJcblx0ZGVzY1R3bzogc3RyaW5nLFxyXG5cdGltZ0xlZnQ6IGJvb2xlYW5cclxuKSA9PiB7XHJcblx0Y29uc3QgYWx0VGV4dCA9IHRpdGxlICsgJyBzY3JlZW5zaG90J1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2ggbXktNCBqdXN0aWZ5LWV2ZW5seSBib3JkZXItYiBib3JkZXItYmx1ZS03MDAgcGItNiBtZDpib3JkZXItd2hpdGUgJHshaW1nTGVmdCA/ICdmbGV4LXJvdy1yZXZlcnNlIGJnLWdyYXktNTAwJyA6ICdiZy1ncmF5LTMwMCd9YH0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0wIGZsZXggc2VsZi1lbmQganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtYXV0byBtZDp3LWZ1bGwgbWQ6anVzdGlmeS1lbmRcIj5cclxuXHRcdFx0XHQ8YSBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcblx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdHNyYz17aW1nUGxhaW59XHJcblx0XHRcdFx0XHRcdGFsdD17YWx0VGV4dH1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYWJzb2x1dGUgdG9wLTAgJHtpbWdMZWZ0XHJcblx0XHRcdFx0XHRcdFx0PyAnbGVmdC0wJ1xyXG5cdFx0XHRcdFx0XHRcdDogJ3JpZ2h0LTAnfSAgdy1hdXRvIGgtNjQgbXQtMiBpbmxpbmUgbWQ6c2VsZi1lbmQgbWQ6bXQtMGB9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvYT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzc05hbWU9e2B6LTEwIHNlbGYtZW5kIHctZnVsbCAgJHtpbWdMZWZ0XHJcblx0XHRcdFx0XHQ/ICdtZDptbC01NidcclxuXHRcdFx0XHRcdDogJ21kOm1yLTU2J30gdGV4dC1qdXN0aWZ5IG1kOm1iLTIwIG1kOnctMy80YH1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbXQtNCBtZDptdC04IHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyICR7aW1nTGVmdFxyXG5cdFx0XHRcdFx0XHQ/ICdtZDp0ZXh0LWxlZnQnXHJcblx0XHRcdFx0XHRcdDogJ21kOnRleHQtcmlnaHQnfSBob3Zlcjp1bmRlcmxpbmVgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuXHRcdFx0XHRcdFx0e3RpdGxlfVxyXG5cdFx0XHRcdFx0XHQ8RXh0TGluayAvPlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgdGV4dC1iYXNlIHRleHQtbGVmdCAke2ltZ0xlZnQgPyAnbWQ6dGV4dC1sZWZ0JyA6ICdtZDp0ZXh0LXJpZ2h0J31gfT5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm10LTJcIj57ZGVzY09uZX08L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtdC0xXCI+e2Rlc2NUd299PC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG4vLyBjb25zdCBJbmRpdmlkdWFsID0gKFxyXG4vLyBcdGxpbms6IHN0cmluZyxcclxuLy8gXHRpbWdNb2NrOiBzdHJpbmcsXHJcbi8vIFx0aW1nUGxhaW46IHN0cmluZyxcclxuLy8gXHR0aXRsZTogc3RyaW5nLFxyXG4vLyBcdGRlc2NPbmU6IHN0cmluZyxcclxuLy8gXHRkZXNjVHdvOiBzdHJpbmcsXHJcbi8vIFx0aW1nTGVmdDogYm9vbGVhblxyXG4vLyApID0+IHtcclxuLy8gXHRjb25zdCBhbHRUZXh0ID0gdGl0bGUgKyAnIHNjcmVlbnNob3QnXHJcbi8vIFx0cmV0dXJuIChcclxuLy8gXHRcdDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCBteS00IGp1c3RpZnktZXZlbmx5IGJvcmRlci1iIGJvcmRlci1ibHVlLTcwMCBwYi02IG1kOmJvcmRlci13aGl0ZSAkeyFpbWdMZWZ0ICYmICdmbGV4LXJvdy1yZXZlcnNlJ31gfT5cclxuLy8gXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTAgZmxleCBzZWxmLWVuZCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1hdXRvIG1kOnctZnVsbCBtZDpqdXN0aWZ5LWVuZFwiPlxyXG4vLyBcdFx0XHRcdDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuLy8gXHRcdFx0XHRcdDxpbWdcclxuLy8gXHRcdFx0XHRcdFx0c3JjPXtpbWdNb2NrfVxyXG4vLyBcdFx0XHRcdFx0XHRhbHQ9e2FsdFRleHR9XHJcbi8vIFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGFic29sdXRlIHRvcC0wICR7aW1nTGVmdFxyXG4vLyBcdFx0XHRcdFx0XHRcdD8gJ2xlZnQtMCdcclxuLy8gXHRcdFx0XHRcdFx0XHQ6ICdyaWdodC0wJ30gaGlkZGVuIHctYXV0byBoLTY0IG10LTIgbWQ6aW5saW5lIG1kOnNlbGYtZW5kIG1kOm10LTBgfVxyXG4vLyBcdFx0XHRcdFx0Lz5cclxuLy8gXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbWQ6aGlkZGVuXCI+XHJcblxyXG4vLyBcdFx0XHRcdFx0PGltZ1xyXG4vLyBcdFx0XHRcdFx0XHRzcmM9e2ltZ01vY2t9XHJcbi8vIFx0XHRcdFx0XHRcdGFsdD17YWx0VGV4dH1cclxuLy8gXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctZnVsbCBoLWF1dG8gbXQtMiBtZDpoaWRkZW5cIlxyXG4vLyBcdFx0XHRcdFx0Lz5cclxuLy8gXHRcdFx0XHRcdDwvZGl2PlxyXG4vLyBcdFx0XHRcdDwvYT5cclxuLy8gXHRcdFx0PC9kaXY+XHJcbi8vIFx0XHRcdDxkaXZcclxuLy8gXHRcdFx0XHRjbGFzc05hbWU9e2B6LTEwIHNlbGYtZW5kIHctZnVsbCAgJHtpbWdMZWZ0XHJcbi8vIFx0XHRcdFx0XHQ/ICdtZDptbC01NidcclxuLy8gXHRcdFx0XHRcdDogJ21kOm1yLTU2J30gdGV4dC1qdXN0aWZ5IG1kOm1iLTIwIG1kOnctMy80YH1cclxuLy8gXHRcdFx0PlxyXG4vLyBcdFx0XHRcdDxkaXZcclxuLy8gXHRcdFx0XHRcdGNsYXNzTmFtZT17YHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbXQtNCBtZDptdC04IHRleHQtY2VudGVyIGN1cnNvci1wb2ludGVyICR7aW1nTGVmdFxyXG4vLyBcdFx0XHRcdFx0XHQ/ICdtZDp0ZXh0LWxlZnQnXHJcbi8vIFx0XHRcdFx0XHRcdDogJ21kOnRleHQtcmlnaHQnfSBob3Zlcjp1bmRlcmxpbmVgfVxyXG4vLyBcdFx0XHRcdD5cclxuLy8gXHRcdFx0XHRcdDxhIGhyZWY9e2xpbmt9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuLy8gXHRcdFx0XHRcdFx0e3RpdGxlfVxyXG4vLyBcdFx0XHRcdFx0XHQ8RXh0TGluayAvPlxyXG4vLyBcdFx0XHRcdFx0PC9hPlxyXG4vLyBcdFx0XHRcdDwvZGl2PlxyXG4vLyBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgdGV4dC1iYXNlIHRleHQtbGVmdCAke2ltZ0xlZnQgPyAnbWQ6dGV4dC1sZWZ0JyA6ICdtZDp0ZXh0LXJpZ2h0J31gfT5cclxuLy8gXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm10LTJcIj57ZGVzY09uZX08L3A+XHJcbi8vIFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtdC0xXCI+e2Rlc2NUd299PC9wPlxyXG4vLyBcdFx0XHRcdDwvZGl2PlxyXG4vLyBcdFx0XHQ8L2Rpdj5cclxuLy8gXHRcdDwvZGl2PlxyXG4vLyBcdClcclxuLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5ldVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXhsIHRleHQtY2VudGVyXCI+UHJvamVjdHM8L2Rpdj5cclxuXHRcdFx0e0luZGl2aWR1YWwoXHJcblx0XHRcdFx0J2h0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL3NlZWtlcnNsb3VuZ2UvJyxcclxuXHRcdFx0XHQnL3RlYWNoZXJzLW1vY2sucG5nJyxcclxuXHRcdFx0XHQnL3NjcmVlbi10ZWFjaGVyLXRodW1iLnBuZycsXHJcblx0XHRcdFx0XCJTZWVrZXJzJyBMb3VuZ2VcIixcclxuXHRcdFx0XHQnSW5zdGFudCBzZWFyY2ggZW5naW5lIHdpdGggNDVrKyBsaW5lcyBmcm9tIHRoZSBcIlRlYWNoZXJzXFwncyBMb3VuZ2VcIiBwb2RjYXN0LicsXHJcblx0XHRcdFx0J341MCB3ZWVrbHkgdXNlcnMuXHRQb3dlcmVkIGJ5IEFXUyBFbGFzdGljU2VhcmNoIGFuZCBidWlsdCB3aXRoIFJlYWN0LicsXHJcblx0XHRcdFx0dHJ1ZVxyXG5cdFx0XHQpfVxyXG5cdFx0XHR7SW5kaXZpZHVhbChcclxuXHRcdFx0XHQnaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vaGFuZGJvb2tzZWFyY2gvJyxcclxuXHRcdFx0XHQnL2hhbmRib29rLW1vY2t1cDIucG5nJyxcclxuXHRcdFx0XHQnL3NjcmVlbi1oYW5kYm9vay5wbmcnLFxyXG5cdFx0XHRcdCdIYW5kYm9vayBTZWFyY2gnLFxyXG5cdFx0XHRcdCdTZWFyY2ggZW5naW5lIGZvciBwb2RjYXN0IEhvbGx5d29vZCBIYW5kYm9vay4nLFxyXG5cdFx0XHRcdCcxMjFrKyBsaW5lcy4gQWxzbyBwb3dlcmVkIGJ5IEFXUyBFbGFzdGljU2VhcmNoLicsXHJcblx0XHRcdFx0ZmFsc2VcclxuXHRcdFx0KX1cclxuXHRcdFx0e0luZGl2aWR1YWwoXHJcblx0XHRcdFx0J2h0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL2RoYW1tYXBhZGEvJyxcclxuXHRcdFx0XHQnL2RoYW1tYS1tb2NrLnBuZycsXHJcblx0XHRcdFx0Jy9zY3JlZW4tZGhhbW1hLXRodW1iLnBuZycsXHJcblx0XHRcdFx0J0RoYW1tYXBhZGEgUmVhZGVyJyxcclxuXHRcdFx0XHQnTGlnaHR3ZWlnaHQgYW5kIGRpc3RyYWN0aW9uLWZyZWUgc2l0ZSBmb3IgcmVhZGluZyB0aGUgRGhhbW1hcGFkYS4nLFxyXG5cdFx0XHRcdCdCdWlsdCB3aXRoIFJlYWN0LicsXHJcblx0XHRcdFx0dHJ1ZVxyXG5cdFx0XHQpfVxyXG5cdFx0XHR7SW5kaXZpZHVhbChcclxuXHRcdFx0XHQnaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vS29yZWFuRHluYXN0eUdlbmVyYXRvci8nLFxyXG5cdFx0XHRcdCcvZHluYXN0eS1tb2NrLnBuZycsXHJcblx0XHRcdFx0Jy9zY3JlZW4tZHluYXN0eS10aHVtYi5wbmcnLFxyXG5cdFx0XHRcdCdLb3JlYW4gRHluYXN0eSBHZW5lcmF0b3InLFxyXG5cdFx0XHRcdCdHZW5lcmF0ZSBhIGZ1bGx5IHN0YWZmZWQsIHJhbmRvbWl6ZWQgbWVkaWV2YWwgS29yZWFuIGJ1cmVhdWNyYWN5LicsXHJcblx0XHRcdFx0J0J1aWx0IHdpdGggUmVhY3QuJyxcclxuXHRcdFx0XHRmYWxzZVxyXG5cdFx0XHQpfVxyXG5cclxuXHRcdFx0PGhyIC8+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2ggbXktNiBqdXN0aWZ5LWV2ZW5seVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgdy1mdWxsIHRleHQtanVzdGlmeVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1sZyBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIG1kOnctMS8zIGhvdmVyOnVuZGVybGluZVwiPlxyXG5cdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9Gb290YmFsbExpbmVzL1wiXHJcblx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdEZvb3RiYWxsIExpbmVzPEV4dExpbmsgLz5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LTIvMyBcIj5cclxuXHRcdFx0XHRcdFx0VmlldyBoaXN0b3JpY2FsIHRhYmxlIHBsYWNlbWVudHMgb2YgU3dlZGlzaCBmb290YmFsbCB0ZWFtcy4gQnVpbHQgd2l0aCBSZWFjdC5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1hdXRvIG10LTIgY3Vyc29yLXBvaW50ZXJcIj5cclxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9Gb290YmFsbExpbmVzL1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuXHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdHNyYz1cIi9zY3JlZW4tZm9vdGJhbGwtdGh1bWIucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRhbHQ9XCJGb290YmFsbCBMaW5lcyBzY3JlZW5zaG90XCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG10LTIgYm9yZGVyIGJvcmRlci1ibHVlLTQwMCBzaGFkb3ctbGcgbWQ6c2VsZi1lbmQgbWQ6bXQtMFwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8aHIgLz5cclxuXHJcblx0XHRcclxuXHJcblx0XHRcdDxociBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2ggbXktNCBqdXN0aWZ5LWV2ZW5seVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgdy1mdWxsIG15LTIgdGV4dC1qdXN0aWZ5XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIHctZnVsbHRleHQtbGcgbWQ6dy0xLzMgaG92ZXI6dW5kZXJsaW5lXCI+XHJcblx0XHRcdFx0XHRcdEZhbiBhcnRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy0yLzMgXCI+XHJcblx0XHRcdFx0XHRcdEZhbiBhcnQgZm9yIFRoZSBUZWFjaGVycycgTG91bmdlIHBvZGNhc3QgbWFkZSB1c2luZyBBZG9iZSBQaG90b3Nob3AuXHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtYXV0byBtdC0yIGN1cnNvci1wb2ludGVyXCI+XHJcblx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdHNyYz1cIi90ZWFjaGVycy1mYWNlcy10aHVtYi5wbmdcIlxyXG5cdFx0XHRcdFx0XHRhbHQ9XCJUZWFjaGVycycgTG91bmdlIGZhbiBhcnRcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIG10LTIgYm9yZGVyIGJvcmRlci1ibHVlLTQwMCBzaGFkb3ctbGcgbWQ6c2VsZi1lbmQgbWQ6bXQtMFwiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxociAvPlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtOCB0ZXh0LXhsIHRleHQtY2VudGVyXCI+T25lLWRheSBwcm9qZWN0czwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2ggbXktNiBqdXN0aWZ5LWV2ZW5seVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtanVzdGlmeSBtZDp3LTIvMyBtZDpwci00XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmVcIj5cclxuXHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vZGFpbHl1aS8jL2NhbGN1bGF0b3JcIlxyXG5cdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXHJcblx0XHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRUSS0xMDggQ2FsY3VsYXRvclxyXG5cdFx0XHRcdFx0XHRcdDxFeHRMaW5rIC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0Q2FsY3VsYXRvciBiYXNlZCBvbiBUZXhhcyBJbnN0cnVtZW50cyBUSS0xMDguIE1hZGUgdXNpbmcgb25seSBDU1MgYW5kIEphdmFTY3JpcHQuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gbWQ6dy0xLzMgbWQ6anVzdGlmeS1lbmRcIj5cclxuXHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kYWlseXVpLyMvY2FsY3VsYXRvclwiXHJcblx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXHJcblx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsXCI+XHJcblx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc2NyZWVuLWNhbGMtdGh1bWIucG5nXCJcclxuXHRcdFx0XHRcdFx0XHRhbHQ9XCJUSS0xMDggQ2FsY3VsYXRvciBzY3JlZW5zaG90XCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LTQvNSBoLWF1dG8gbXQtMiBib3JkZXIgYm9yZGVyLWJsdWUtNDAwIHNoYWRvdy1sZyBtZDp3LWZ1bGwgbWQ6c2VsZi1lbmQgbWQ6bXQtMFwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxociAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIHctZnVsbFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaCB3LTEvMiBteS02IGp1c3RpZnktZXZlbmx5XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYi00IHRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIGN1cnNvci1wb2ludGVyIGhvdmVyOnVuZGVybGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9tYXJ0ZW5mcmlzay5naXRodWIuaW8vZGFpbHl1aTAxL1wiXHJcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0TmV3c2xldHRlclxyXG5cdFx0XHRcdFx0XHRcdFx0PEV4dExpbmsgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy01LzYgaC1hdXRvIG1kOmp1c3RpZnktZW5kXCI+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kYWlseXVpMDEvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9zY3JlZW4tbmV3c2xldHRlci10aHVtYi5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PVwiTmV3c2xldHRlciBzY3JlZW5zaG90XCJcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gbXQtMiBib3JkZXIgYm9yZGVyLWJsdWUtNDAwIHNoYWRvdy1sZyBtZDpzZWxmLWVuZCBtZDptdC0wXCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2ggdy0xLzIgbXktNiBqdXN0aWZ5LWV2ZW5seVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItNCB0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vbWFydGVuZnJpc2suZ2l0aHViLmlvL2RhaWx5dWkwMy9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcclxuXHRcdFx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdExhbmRpbmcgcGFnZVxyXG5cdFx0XHRcdFx0XHRcdFx0PEV4dExpbmsgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy01LzYgaC1hdXRvIG1kOmp1c3RpZnktZW5kXCI+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL21hcnRlbmZyaXNrLmdpdGh1Yi5pby9kYWlseXVpMDMvXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdHNyYz1cIi9zY3JlZW4tbGFuZGluZy5wbmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PVwiTGFuZGluZyBwYWdlIHNjcmVlbnNob3RcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBtdC0yIGJvcmRlciBib3JkZXItYmx1ZS00MDAgc2hhZG93LWxnIG1kOnNlbGYtZW5kIG1kOm10LTBcIlxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9