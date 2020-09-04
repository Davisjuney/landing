"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _vueCarousel = _interopRequireDefault(require("vue-carousel"));

var _Landing = _interopRequireDefault(require("./pages/Landing.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('./bootstrap');

_vue["default"].use(_vueCarousel["default"]);

var app = new _vue["default"]({
  data: {
    message: 'Welcome to Eruditee!'
  },
  template: '<landing/>',
  components: {
    landing: _Landing["default"]
  }
}).$mount('#app');