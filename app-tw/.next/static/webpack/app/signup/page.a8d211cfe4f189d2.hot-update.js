"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signup/page",{

/***/ "(app-pages-browser)/./components/Signup.tsx":
/*!*******************************!*\
  !*** ./components/Signup.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Signup: function() { return /* binding */ Signup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ Signup auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Signup() {\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen flex justify-center flex-col\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#\",\n                className: \"block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-10\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-3xl font-extrabold\",\n                                children: \"Sign up\"\n                            }, void 0, false, {\n                                fileName: \"/Users/anishsoni/Desktop/MERN-COHORT/app-tw/components/Signup.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/anishsoni/Desktop/MERN-COHORT/app-tw/components/Signup.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pt-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LabelledInput, {\n                                    onChange: (e)=>{\n                                        setUsername(e.target.value);\n                                    },\n                                    label: \"Username\",\n                                    placeholder: \"harkirat@gmail.com\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anishsoni/Desktop/MERN-COHORT/app-tw/components/Signup.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LabelledInput, {\n                                    onChange: (e)=>{\n                                        setPassword(e.target.value);\n                                    },\n                                    label: \"Password\",\n                                    type: \"password\",\n                                    placeholder: \"123456\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anishsoni/Desktop/MERN-COHORT/app-tw/components/Signup.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>{\n                                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:3000/api/user\", {\n                                            username,\n                                            password\n                                        });\n                                    },\n                                    type: \"button\",\n                                    className: \"mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2\",\n                                    children: \"Sign in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/anishsoni/Desktop/MERN-COHORT/app-tw/components/Signup.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/anishsoni/Desktop/MERN-COHORT/app-tw/components/Signup.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/anishsoni/Desktop/MERN-COHORT/app-tw/components/Signup.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/anishsoni/Desktop/MERN-COHORT/app-tw/components/Signup.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/anishsoni/Desktop/MERN-COHORT/app-tw/components/Signup.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/anishsoni/Desktop/MERN-COHORT/app-tw/components/Signup.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Signup, \"Lrw7JeD9zj6OUWhT/IH4OIvPKEk=\");\n_c = Signup;\nfunction LabelledInput(param) {\n    let { label, placeholder, type, onChange } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"block mb-2 text-sm text-black font-semibold pt-4\",\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/anishsoni/Desktop/MERN-COHORT/app-tw/components/Signup.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: onChange,\n                type: type || \"text\",\n                id: \"first_name\",\n                className: \"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5\",\n                placeholder: placeholder,\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/anishsoni/Desktop/MERN-COHORT/app-tw/components/Signup.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/anishsoni/Desktop/MERN-COHORT/app-tw/components/Signup.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_c1 = LabelledInput;\nvar _c, _c1;\n$RefreshReg$(_c, \"Signup\");\n$RefreshReg$(_c1, \"LabelledInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lnbnVwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTBCO0FBQzJCO0FBRTlDLFNBQVNFOztJQUNkLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNJLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7SUFFekMscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUNDQyxNQUFLO2dCQUNMRixXQUFVOzBCQUVWLDRFQUFDRDs7c0NBQ0MsOERBQUNBOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FBSUMsV0FBVTswQ0FBMEI7Ozs7Ozs7Ozs7O3NDQUUzQyw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRztvQ0FDQ0MsVUFBVSxDQUFDQzt3Q0FDVFQsWUFBWVMsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO29DQUM1QjtvQ0FDQUMsT0FBTTtvQ0FDTkMsYUFBWTs7Ozs7OzhDQUVkLDhEQUFDTjtvQ0FDQ0MsVUFBVSxDQUFDQzt3Q0FDVFAsWUFBWU8sRUFBRUMsTUFBTSxDQUFDQyxLQUFLO29DQUM1QjtvQ0FDQUMsT0FBTTtvQ0FDTkUsTUFBTTtvQ0FDTkQsYUFBWTs7Ozs7OzhDQUVkLDhEQUFDRTtvQ0FDQ0MsU0FBUzt3Q0FDUHBCLDZDQUFLQSxDQUFDcUIsSUFBSSxDQUFDLGtDQUFrQzs0Q0FDM0NsQjs0Q0FDQUU7d0NBQ0Y7b0NBQ0Y7b0NBQ0FhLE1BQUs7b0NBQ0xWLFdBQVU7OENBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBakRnQk47S0FBQUE7QUFtRGhCLFNBQVNTLGNBQWMsS0FLSDtRQUxHLEVBQ3JCSyxLQUFLLEVBQ0xDLFdBQVcsRUFDWEMsSUFBSSxFQUNKTixRQUFRLEVBQ1UsR0FMRztJQU1yQixxQkFDRSw4REFBQ0w7OzBCQUNDLDhEQUFDUztnQkFBTVIsV0FBVTswQkFDZFE7Ozs7OzswQkFFSCw4REFBQ007Z0JBQ0NWLFVBQVVBO2dCQUNWTSxNQUFNQSxRQUFRO2dCQUNkSyxJQUFHO2dCQUNIZixXQUFVO2dCQUNWUyxhQUFhQTtnQkFDYk8sUUFBUTs7Ozs7Ozs7Ozs7O0FBSWhCO01BckJTYiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZ251cC50c3g/ZjY2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQ2hhbmdlRXZlbnRIYW5kbGVyLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gU2lnbnVwKCkge1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBmbGV4IGp1c3RpZnktY2VudGVyIGZsZXgtY29sXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbWF4LXctc20gcC02IGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBzaGFkb3cgaG92ZXI6YmctZ3JheS0xMDAgXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTEwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1leHRyYWJvbGRcIj5TaWduIHVwPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMlwiPlxuICAgICAgICAgICAgICA8TGFiZWxsZWRJbnB1dFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJoYXJraXJhdEBnbWFpbC5jb21cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8TGFiZWxsZWRJbnB1dFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdHlwZT17XCJwYXNzd29yZFwifVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTIzNDU2XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTggdy1mdWxsIHRleHQtd2hpdGUgYmctZ3JheS04MDAgZm9jdXM6cmluZy00IGZvY3VzOnJpbmctZ3JheS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IG1lLTIgbWItMlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTaWduIGluXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBMYWJlbGxlZElucHV0KHtcbiAgbGFiZWwsXG4gIHBsYWNlaG9sZGVyLFxuICB0eXBlLFxuICBvbkNoYW5nZSxcbn06IExhYmVsbGVkSW5wdXRUeXBlKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gdGV4dC1ibGFjayBmb250LXNlbWlib2xkIHB0LTRcIj5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIHR5cGU9e3R5cGUgfHwgXCJ0ZXh0XCJ9XG4gICAgICAgIGlkPVwiZmlyc3RfbmFtZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LWZ1bGwgcC0yLjVcIlxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5pbnRlcmZhY2UgTGFiZWxsZWRJbnB1dFR5cGUge1xuICBsYWJlbDogc3RyaW5nO1xuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICB0eXBlPzogc3RyaW5nO1xuICBvbkNoYW5nZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+O1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJTaWdudXAiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwiTGFiZWxsZWRJbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJidXR0b24iLCJvbkNsaWNrIiwicG9zdCIsImlucHV0IiwiaWQiLCJyZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Signup.tsx\n"));

/***/ })

});