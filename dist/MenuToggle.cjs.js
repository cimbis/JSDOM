'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var MenuToggle = /*#__PURE__*/function () {
  /**
   * @param {Element} menuButton
   */
  function MenuToggle(menuButton) {
    _classCallCheck(this, MenuToggle);

    console.log('MenuToggle | CTOR');
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.menuButton = menuButton;
    this.menuButton.addEventListener('keydown', this.handleKeydown);
    this.menuButton.addEventListener('click', this.handleClick);
  }

  _createClass(MenuToggle, [{
    key: "handleKeydown",
    value: function handleKeydown() {
      console.log("key down");
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      console.log("click");
    }
  }]);

  return MenuToggle;
}();

exports.MenuToggle = MenuToggle;
