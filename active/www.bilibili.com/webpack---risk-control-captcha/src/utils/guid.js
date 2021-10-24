__webpack_require__.r(__webpack_exports__);
/* harmony export */
__webpack_require__.d(__webpack_exports__, {
    /* harmony export */
    "default": function() {
        return /* binding */ guid;
    }
    /* harmony export */
});

function guid() {
    function random() {
        return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }

    return random() + random() + random() + random() + random() + random() + random() + random();
}