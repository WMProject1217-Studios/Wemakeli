__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "fetch": function() {
        return /* binding */ fetch;
    }
    /* harmony export */
});
/* harmony import */
var superagent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! superagent */ "./node_modules/superagent/lib/client.js");
/* harmony import */
var superagent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_0__);; // import Promise from 'bluebird';

function getCookie(name) {
    var arr,
        reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    if (arr = document.cookie.match(reg)) return unescape(arr[2]);
    else return null;
}

function getQueryString(name) {
    var hasParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var reg = new RegExp('(^|&|#)' + name + '=([^&]*)(&|$)', 'i');
    var r = location.hash.match(reg) || window.location.search.slice(1).match(reg);
    return r == null ? hasParams ? null : '' : decodeURI(r[2]);
}

var oaccesskey = getQueryString('oaccesskey');

function fetch(method, url, option) {
    var isForm = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    if (oaccesskey) {
        option.oaccesskey = oaccesskey;
    }

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
        return superagent__WEBPACK_IMPORTED_MODULE_0___default()(method, url).type(isForm ? 'form' : '').query({
                oaccesskey: oaccesskey
            }).withCredentials() // send cookie
            .send(option).then(function(response) {
                return response.body;
            }).catch(function(err) {
                return ( // yuban(err, url),
                    Promise.reject(err)
                );
            });
    }
}