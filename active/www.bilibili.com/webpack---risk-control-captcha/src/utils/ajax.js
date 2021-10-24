__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "ajax": function() {
        return /* binding */ ajax;
    }
    /* harmony export */
});
/* harmony import */
var superagent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */
var superagent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_0__);;

function getCookie(name) {
    var arr,
        reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    if (arr = document.cookie.match(reg)) return unescape(arr[2]);
    else return null;
}

function ajax(method, url, option) {
    var isForm = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    if (method.toUpperCase() === 'GET') {
        return superagent__WEBPACK_IMPORTED_MODULE_0___default()(method, url).withCredentials() // send cookie
            .query(option).then(function(response) {
                return ( // yuban('测试', url),
                    response.body
                );
            }).catch(function(err) {
                return ( // yuban(err, url),
                    Promise.reject(err)
                );
            });
    } else {
        option.csrf = getCookie('bili_jct');
        return superagent__WEBPACK_IMPORTED_MODULE_0___default()(method, url).type(isForm ? 'form' : '').withCredentials() // send cookie
            .send(option).then(function(response) {
                return response;
            }).catch(function(err) {
                return ( // yuban(err, url),
                    Promise.reject(err)
                );
            });
    }
}