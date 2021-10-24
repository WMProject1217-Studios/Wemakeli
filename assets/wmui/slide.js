'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {

    var Animation = {
        slideUp: function slideUp(page) {
            this.pics.style.top = '-' + (page - 1) * this.options.height + 'px';
        },
        slideLeft: function slideLeft(page) {
            this.pics.style.left = '-' + (page - 1) * this.options.width + 'px';
        },
        fade: function fade(page) {
            var imgs = this.pics.children;

            for (var i = 0; i < imgs.length; i++) {
                imgs[i].style.opacity = i + 1 === page ? '1' : '0';
            }
        }
    };

    var DEFAULT = {
        imgs: [],
        width: 600,
        height: 400,
        autoswitch: {
            open: false,
            delay: 5000
        },
        animation: 'slideUp'
    };

    var Slide = function () {
        function Slide(el, opt) {
            _classCallCheck(this, Slide);

            this.options = DEFAULT;
            this.$el = document.querySelector(el);
            this.currentPage = 1;
            this.picsLayer = null;
            this.pics = null;
            this.pagination = null;
            this.$fl = this.$el;

            if (opt) {
                for (var key in opt) {
                    if (key === 'autoswitch') {
                        this.options.autoswitch.open = opt.autoswitch.open;
                        this.options.autoswitch.delay = opt.autoswitch.delay;
                    } else {
                        this.options[key] = opt[key];
                    }
                }
            }

            this.init();
        }

        _createClass(Slide, [{
            key: 'init',
            value: function init() {
                var $el = this.$el;
                var $fl = this.$fl;
                var _options = this.options;
                var width = _options.width;
                var height = _options.height;
                var itpageindexls;
                window.textls = _options.texts;
                window.linkls = _options.links;

                var picsLayer = document.createElement('div');
                var pics = document.createElement('div');
                var strs = document.createElement('div');

                this.picsLayer = picsLayer;
                this.pics = pics;
                this.strs = strs;
                this.itpageindexls = itpageindexls;

                picsLayer.style.width = width + 'px';
                picsLayer.style.height = height + 'px';
                picsLayer.setAttribute('class', 'pics-layer');
                $el.setAttribute('class', 'slide');

                picsLayer.appendChild(pics);
                $el.appendChild(picsLayer);

                $fl.setAttribute('class', 'slide');

                picsLayer.appendChild(strs);

                this.initImgs();
                this.inittexts();
                this.initAnimation();
                this.initPagination();
                //console.log(textls);
                //console.log(linkls);
                //console.log(textls[0]+','+linkls[0]);
                document.getElementById("strs").innerHTML = "<a class='linker' href="+linkls[0]+' target="_blank"></a><a class='+"'showbar' href='"+linkls[0]+"'"+'target="_blank"'+">"+textls[0]+"</a>";
                if (this.options.autoswitch.open) {
                    this.initAutoSwitch();
                }
            }
        }, {
            key: 'initImgs',
            value: function initImgs() {
                var srcs = this.options.imgs;
                var pics = this.pics;
                var _options2 = this.options;
                var width = _options2.width;
                var height = _options2.height;
                var animation = _options2.animation;

                pics.setAttribute('class', 'pics');

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = srcs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var src = _step.value;
                        var img = new Image();
                        img.src = src;
                        img.width = width;
                        img.height = height;
                        pics.appendChild(img);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }, {
            key: 'inittexts',
            value: function inittexts() {
                var strs = this.strs;
                strs.setAttribute('class', 'strs');
                strs.setAttribute('id', 'strs');
            }
        }, {
            key: 'initPagination',
            value: function initPagination() {
                var _this = this;

                var picsLayer = this.picsLayer;
                var pics = this.pics;
                var _options3 = this.options;
                var width = _options3.width;
                var height = _options3.height;

                var length = this.options.imgs.length;
                var pagination = document.createElement('div');

                this.pagination = pagination;

                pagination.setAttribute('class', 'pagination');

                pagination.addEventListener('click', function (event) {
                    var page = Number.parseInt(event.target.innerHTML);
                    if (page) {
                        _this.switchSlide(page);
                    }
                }, false);

                picsLayer.appendChild(pagination);

                for (var i = 0; i < length; i++) {
                    var a = document.createElement('a');
                    a.innerHTML = i + 1;
                    a.href = 'javascript: void(0);';
                    if (i == 0) {
                        a.className = 'active';
                    }
                    pagination.appendChild(a);
                }
            }
        }, {
            key: 'initAnimation',
            value: function initAnimation() {
                var pics = this.pics;
                var _options4 = this.options;
                var width = _options4.width;
                var height = _options4.height;
                var animation = _options4.animation;


                switch (animation) {
                    case 'slideUp':
                        pics.style.position = 'absolute';
                        pics.style.top = '0px';
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = pics.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var img = _step2.value;

                                img.style.display = 'block';
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }

                        this.doAnimation = Animation.slideUp;
                        break;
                    case 'slideLeft':
                        pics.style.position = 'absolute';
                        pics.style.left = '0px';
                        pics.style.width = pics.children.length * width + 'px';
                        var _iteratorNormalCompletion3 = true;
                        var _didIteratorError3 = false;
                        var _iteratorError3 = undefined;

                        try {
                            for (var _iterator3 = pics.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                var _img = _step3.value;

                                _img.style.display = 'inline-block';
                            }
                        } catch (err) {
                            _didIteratorError3 = true;
                            _iteratorError3 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                    _iterator3.return();
                                }
                            } finally {
                                if (_didIteratorError3) {
                                    throw _iteratorError3;
                                }
                            }
                        }

                        this.doAnimation = Animation.slideLeft;
                        break;
                    case 'fade':
                        var imgs = pics.children;
                        for (var i = 0; i < imgs.length; i++) {
                            imgs[i].style.position = 'absolute';
                            imgs[i].style.opacity = i === 0 ? '1' : '0';
                        }
                        this.doAnimation = Animation.fade;
                        break;
                    default:

                }
            }
        }, {
            key: 'initAutoSwitch',
            value: function initAutoSwitch() {
                var _this2 = this;
                var delay = this.options.autoswitch.delay;
                setInterval(function () {
                    _this2.switchSlide(_this2.currentPage + 1);
                    //console.log(textls[_this2.currentPage - 1]+','+linkls[_this2.currentPage - 1]);
                    var page = _this2.currentPage;
                    document.getElementById("strs").innerHTML = "<a class='linker' href="+linkls[page - 1]+' target="_blank"></a><a class='+"'showbar' href='"+linkls[page - 1]+"'"+'target="_blank"'+">"+textls[page - 1]+"</a>";
                }, delay);
            }
        }, {
            key: 'doAnimation',
            value: function doAnimation() {
            }
        }, {
            key: 'switchSlide',
            value: function switchSlide(page) {
                var pages = this.pagination.children;
                if (page > this.options.imgs.length) {
                    page = 1;
                }
                this.currentPage = page;
                this.doAnimation(page);
                document.getElementById("strs").innerHTML = "<a class='linker' href="+linkls[page - 1]+' target="_blank"></a><a class='+"'showbar' href='"+linkls[page - 1]+"'"+'target="_blank"'+">"+textls[page - 1]+"</a>";

                for (var i = 0; i < pages.length; i++) {
                    pages[i].className = i === page - 1 ? 'active' : '';
                }
            }
        }]);

        return Slide;
    }();
    window.Slide = Slide;
})();