webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);







var PostLink = function PostLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/post?title=".concat(props.title),
    as: "/p/".concat(props.id)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", null, props.title)));
};

var Index = function Index(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "console.warn(props)", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", null, "Go to About Page")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Hello Next.js"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostLink, {
    id: "hello-brizer",
    title: "hello,brizer"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostLink, {
    id: "hello-brizer-good",
    title: "hello,brizer good"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostLink, {
    id: "hello-brizer-amazing",
    title: "hello,brizer amazing"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "data fetch from server"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", null, props.shows.map(function (show) {
    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: show.id
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      as: "/p/".concat(show.id),
      href: "/post?id=".concat(show.id)
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", null, show.name)));
  }))));
};

Index.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("https://api.tvmaze.com/search/shows?q=batman");

        case 2:
          res = _context.sent;
          data = res.data;
          console.log("show data fetched. Count:".concat(data.length));
          return _context.abrupt("return", {
            shows: data.map(function (entry) {
              return entry.show;
            })
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.165678cecd583bc35bf2.hot-update.js.map