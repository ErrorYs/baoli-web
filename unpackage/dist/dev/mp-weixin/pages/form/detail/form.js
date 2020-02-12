(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/form/detail/form"],{

/***/ 462:
/*!*****************************************************************************!*\
  !*** F:/杨生的学习资料/实战项目/baoli/main.js?{"page":"pages%2Fform%2Fdetail%2Fform"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _form = _interopRequireDefault(__webpack_require__(/*! ./pages/form/detail/form.vue */ 463));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_form.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 463:
/*!********************************************************!*\
  !*** F:/杨生的学习资料/实战项目/baoli/pages/form/detail/form.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_3b005378___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.vue?vue&type=template&id=3b005378& */ 464);
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.vue?vue&type=script&lang=js& */ 466);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.vue?vue&type=style&index=0&lang=css& */ 468);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_3b005378___WEBPACK_IMPORTED_MODULE_0__["render"],
  _form_vue_vue_type_template_id_3b005378___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _form_vue_vue_type_template_id_3b005378___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "F:/杨生的学习资料/实战项目/baoli/pages/form/detail/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 464:
/*!***************************************************************************************!*\
  !*** F:/杨生的学习资料/实战项目/baoli/pages/form/detail/form.vue?vue&type=template&id=3b005378& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_form_vue_vue_type_template_id_3b005378___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./form.vue?vue&type=template&id=3b005378& */ 465);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_form_vue_vue_type_template_id_3b005378___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_form_vue_vue_type_template_id_3b005378___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_form_vue_vue_type_template_id_3b005378___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_form_vue_vue_type_template_id_3b005378___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 465:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/杨生的学习资料/实战项目/baoli/pages/form/detail/form.vue?vue&type=template&id=3b005378& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 466:
/*!*********************************************************************************!*\
  !*** F:/杨生的学习资料/实战项目/baoli/pages/form/detail/form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./form.vue?vue&type=script&lang=js& */ 467);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 467:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/杨生的学习资料/实战项目/baoli/pages/form/detail/form.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var areaPicker = function areaPicker() {return __webpack_require__.e(/*! import() | components/area-picker/areaPicker */ "components/area-picker/areaPicker").then(__webpack_require__.bind(null, /*! @/components/area-picker/areaPicker.vue */ 624));};var lvvPopup = function lvvPopup() {return __webpack_require__.e(/*! import() | components/lvv-popup/lvv-popup */ "components/lvv-popup/lvv-popup").then(__webpack_require__.bind(null, /*! @/components/lvv-popup/lvv-popup.vue */ 596));};var _default =





















































































































































































































































































{
  name: '',
  components: {
    areaPicker: areaPicker,
    lvvPopup: lvvPopup },

  props: {},
  data: function data() {
    return {
      formId: '',
      form: {
        head_type: 1,
        head_type_value_url: '' },

      showPage: true,
      hiddenForm: true,
      indicatorDots: true, //商品轮播图底部圆点
      autoplay: true, //商品轮播图自动播放
      interval: 3000, //商品轮播图切换间隔
      duration: 500, //商品轮播图切换动画时间
      slideImg: [], //幻灯片广告数据
      minusStatus: 'disabled', // 使用data数据对象设置样式名
      animationData: {},
      opacityData: {},
      hide: 'animathide',
      formMoney: 0.0, //表单金额
      region: ['河南省', '郑州市', '中原区'],
      areaId: 410102,
      pickerValue: '',
      defaultIndex: [0, 0, 0],
      pics: [], //图片
      goodsNums: 0,
      cart: [],
      currentKey: 0, //当前下单的商品的Key
      currentGoodsId: 0, //当前选中的商品ID
      goodsTotalMoney: '0.00', //商品总额
      originForm: [], //原始表单
      paymentType: '', //支付类型
      payment_type: '', //表单付款码||表单订单
      /** 商品信息*/
      goodsSpesDesc: '',
      productId: '',
      status: '',
      goodsInfoName: '',
      goodsInfoPrint: '',
      goodsInfoNumber: '',
      select_goods_id: '',
      select_id: '',
      showSpecs: false,
      submitStatus: false //按钮状态
    };

  },
  onLoad: function onLoad(options) {
    var id = options.id;
    if (!id) {
      this.$common.errorToShow('路径错误');
      return false;
    }
    this.formId = id;
    this.$db.set('formId', id);
  },
  onShow: function onShow() {
    this.getFormDetail();
  },
  methods: {
    // 省市区联动初始化
    showThreePicker: function showThreePicker() {
      this.pickerValue =
      this.region[0] + ' ' + this.region[1] + ' ' + this.region[2];
      this.$refs.areaPicker[0].showPicker();
    },
    onConfirm: function onConfirm(e) {var _this = this;
      var province_name = e[0].name;
      var city_name = e[1].name;
      var county_name = e[2].name;
      this.pickerValue = e[0].name + ' ' + e[1].name + ' ' + e[2].name;
      var data = {
        province_name: province_name,
        city_name: city_name,
        county_name: county_name };

      var regionName = [province_name, city_name, county_name];
      this.$api.getAreaId(data, function (res) {
        if (res.status) {
          _this.areaId = res.data;
        } else {
          uni.showModal({
            title: '提示',
            content: '地区选择出现问题，请重新选择地区',
            showCancel: false });

        }
      });
    },
    getFormDetail: function getFormDetail() {var _this2 = this;
      var data = {
        id: this.formId,
        token: this.$db.get('userToken') };

      var that = this;
      this.$api.getFormDetial(data, function (res) {
        if (res.status) {
          _this2.form = res.data;
          _this2.originForm = res.data;
          if (res.data.type == '1' || res.data.type == '2') {
            if (res.data.type == '1') {
              //订单
              that.payment_type = _this2.$config.paymentType.form_order;
            } else if (res.data.type == '2') {
              //付款码
              that.payment_type = _this2.$config.paymentType.form_pay;
            }
          }
          //设置title名称
          uni.setNavigationBarTitle({
            title: res.data.name });


        } else {
          _this2.showPage = false;
          if (typeof res.data.need_login == 'undefined') {
            uni.showModal({
              title: '提示',
              content: '表单已过期，请扫描新的二维码',
              showCancel: false,
              success: function success(res) {
                if (res.confirm) {
                  uni.switchTab({
                    url: '../../index/index' });

                }
              } });

          } else {
            //去登录	
            _this2.$store.commit({
              type: 'redirect',
              page: '/pages/form/detail/form?id=' + _this2.formId });

            _this2.$common.jumpToLogin();
          }
        }
      });
    },
    // 选择日期
    bindDateChange: function bindDateChange(e, item) {
      item.default_value = e.target.value;
    },
    // 选择时间
    bindTimeChange: function bindTimeChange(e, item) {
      item.default_value = e.target.value;
    },
    // 单选
    radioChange: function radioChange(e, item) {
      item.default_value = e.detail.value;
    },
    // 多选
    checkboxChange: function checkboxChange(e, item) {
      var values = e.detail.value;
      for (var i = 0; i < item.checbox_value.length; ++i) {
        var checkbox_item = item.checbox_value[i];
        if (values.includes(checkbox_item.value)) {
          this.$set(checkbox_item, 'checked', true);
        } else {
          this.$set(checkbox_item, 'checked', false);
        }
      }
    },

    //商品减一
    bindMinus: function bindMinus() {
      if (this.goodsNums > 1) {
        this.goodsNums--;
      } else {
        this.goodsNums = 0;
      }
    },
    //商品加一
    bindPlus: function bindPlus() {
      if (this.goodsNums >= this.goodsInfoNumber) {
        this.goodsNums = this.goodsInfoNumber;
      } else {
        this.goodsNums++;
      }
    },
    /* 输入框事件 */
    bindManual: function bindManual(e) {
      this.num = e.detail.value;
    },
    //选择位置
    chooseLocation: function chooseLocation(e, item, index) {
      var pages = getCurrentPages();
      var items = pages[0].$vm.form.items;
      var that = this;
      uni.chooseLocation({
        success: function success(e) {
          item.default_value = e.latitude + ',' + e.longitude;
          items[index] = item;
          setTimeout(function () {
            that.form.items = items;
          }, 500);
        },
        fail: function fail(e) {
          uni.getSetting({
            success: function success(res) {
              if (!res.authSetting['scope.userLocation']) {
                uni.openSetting();
              }
            } });

        } });

    },
    pic_choose: function pic_choose(e, item, index) {
      var that = this;
      var pages = getCurrentPages();
      var items = pages[0].$vm.form.items;
      this.$api.uploadImage(5, function (res) {
        if (res.status) {
          if (!item.pics) {
            item.pics = [];
          }
          item.pics.push({
            src: res.data.url.replace(/\\/g, '/'),
            image_id: res.data.image_id });






          items[index] = item;
          that.form.items = items;

          that.$common.successToShow(res.msg);
        } else {
          that.$common.errorToShow(res.msg);
        }
      });
    },
    //删除图片
    pic_del: function pic_del(item, index, i) {
      item.pics.splice(i, 1);
      this.$set(this.form.items, index, item);
    },
    //表单提交
    formSubmit: function formSubmit(e) {var _this3 = this;
      var that = this;
      var data = e.detail.value;
      //订单时需要合并购物车信息
      if (this.form.type == 1) {
        if (this.cart.length < 1) {
          this.$common.errorToShow('请先选择商品');
          return true;
        }
        var tempArray = [];
        this.cart.forEach(function (item, index, input) {
          tempArray[item.key + '_' + index] = item;
        });
        data = Object.assign(data, tempArray);
      }
      var userToken = this.$db.get('userToken');
      var obj = {
        data: data,
        id: this.form.id,
        token: userToken };

      this.submitStatus = true;
      this.$api.addSubmitForm(obj, function (res) {
        if (res.status) {
          //表单类型判断是否需要支付，支付金额多少
          if (that.form.type == '1' || that.form.type == '2') {
            that.$common.successToShow(res.msg);
            //跳转首页
            setTimeout(function () {
              //出来支付按钮
              that.$common.redirectTo('/pages/goods/payment/index?form_id=' + res.data.id + '&type=' + that.payment_type +
              '&recharge=' + res.data.money);
            }, 1000);
          } else {
            that.formReset();
            that.$common.successToShow(res.msg);
            //跳转首页
            setTimeout(function () {
              wx.switchTab({
                url: '../../index/index' });

            }, 1500);
          }
        } else {
          _this3.$common.errorToShow(res.msg);
        }
      }, function (res) {
        _this3.submitStatus = false;
      });
    },
    //表单清空
    formReset: function formReset(e) {
      this.$db.set('formId', '');
      this.cart = []; //初始化，刷新当前页面
      this.form = this.originForm;
    },
    closeModal: function closeModal() {
      this.$refs.lvvpopref.close();
    },
    //选择规格弹出
    specifications: function specifications(e, item) {
      this.$refs.lvvpopref.show();
      this.showSpecs = true;
      this.select_id = e.target.dataset.id;
      this.select_goods_id = e.target.dataset.goods;
      this.currentKey = e.target.dataset.id; //当前选中的key
      this.currentGoodsId = e.target.dataset.goods; //当前选中的商品ID
      this.getGoodsInfo(item);
    },
    //获取商品详情
    getGoodsInfo: function getGoodsInfo(item) {
      var goods = item.goods;
      this.goodsSpesDesc = this.getSpes(goods.product);
      this.productId = goods.product.id;
      this.goodsInfoName = goods.product.name;
      this.goodsInfoPrint = goods.product.price;
      this.goodsInfoNumber = goods.product.stock;
      this.goodsNums = this.getNumsByKey(this.currentKey, goods.product.id);
      this.status = goods.product.stock < 1 ? false : true;
    },
    /*获取key的数量 */
    getNumsByKey: function getNumsByKey(key, productId) {
      var that = this;
      if (that.cart.length < 1) {
        return 0;
      } else {
        for (var i = 0; i < that.cart.length; i++) {
          if (that.cart[i].key == key && that.cart[i].productId == productId) {
            return that.cart[i].nums;
          }
        }
        return 0;
      }
    },
    //加入购物车
    goodsAddCart: function goodsAddCart() {
      var productId = this.productId;
      var currentKey = this.currentKey;
      if (this.cart.length < 1) {
        this.cart.push({
          key: currentKey,
          productId: productId,
          goodsId: this.select_goods_id,
          nums: this.goodsNums,
          price: this.goodsInfoPrint });

      } else {
        var isIn = false;
        for (var i = 0; i < this.cart.length; i++) {
          if (
          this.cart[i].key == currentKey &&
          this.cart[i].productId == productId)
          {
            this.cart[i] = {
              key: currentKey,
              productId: productId,
              goodsId: this.select_goods_id,
              nums: this.goodsNums,
              price: this.goodsInfoPrint };

            isIn = true;
          }
        }
        if (!isIn) {
          this.cart.push({
            key: currentKey,
            productId: productId,
            goodsId: this.select_goods_id,
            nums: this.goodsNums,
            price: this.goodsInfoPrint });

        }
      }
      this.showSpecs = false;
      this.$refs.lvvpopref.close();
      this.getCartNums();
    },
    getCartNums: function getCartNums() {
      var items = this.form.items;
      var itemKey = '';
      for (var i = 0, len = items.length; i < len; ++i) {
        if (items[i].id == this.currentKey) {
          itemKey = i;
        }
      }
      var that = this;
      if (this.form.items[itemKey].goods.id == this.currentGoodsId) {
        if (this.form.items[itemKey].cart_count > 0) {
          var cart_count = 0;
          var currentKey = this.currentKey;
          this.cart.forEach(function (item, index, input) {
            if (item.key == currentKey) {
              cart_count += item.nums;
            }
            that.form.items[itemKey].cart_count = cart_count;
          });
        } else {
          this.form.items[itemKey].cart_count = this.goodsNums;
        }
      } else {
        this.form.items[itemKey].cart_count = this.goodsNums;
      }
      this.getGoodsTotalMoney();
    },
    //获取商品总额
    getGoodsTotalMoney: function getGoodsTotalMoney() {
      var that = this;
      var goodsTotalMoney = 0;
      this.cart.forEach(function (item, index, input) {
        goodsTotalMoney += item.price * item.nums;
      });
      this.goodsTotalMoney = this.$common.formatMoney(goodsTotalMoney, 2, '');
    },
    getSpes: function getSpes(product) {
      if (!product.default_spes_desc) {
        return [];
      }
      return product.default_spes_desc;
    },
    //获取规格信息
    selectSku: function selectSku(e) {var _this4 = this;
      var id = e.target.dataset.key;
      this.$api.getProductInfo({
        id: id },
      function (res) {
        if (res.status) {
          _this4.goodsSpesDesc = _this4.getSpes(res.data);
          _this4.productId = res.data.id;
          _this4.goodsInfoName = res.data.name;
          _this4.goodsInfoPrint = res.data.price;
          _this4.goodsInfoNumber = res.data.stock;
          _this4.goodsNums = _this4.getNumsByKey(_this4.currentKey, res.data.id);
          _this4.status = res.data.stock < 1 ? false : true;
        }
      });
    } },

  //分享
  onShareAppMessage: function onShareAppMessage() {
    var myInviteCode = this.$db.get("userToken");
    var ins = this.$common.shareParameterDecode('type=10&id=' + this.formId + '&invite=' + myInviteCode);
    var path = '/pages/share/jump?scene=' + ins;
    return {
      title: this.form.name,
      path: path };

  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 468:
/*!*****************************************************************************************!*\
  !*** F:/杨生的学习资料/实战项目/baoli/pages/form/detail/form.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./form.vue?vue&type=style&index=0&lang=css& */ 469);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_form_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 469:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/杨生的学习资料/实战项目/baoli/pages/form/detail/form.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[462,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/form/detail/form.js.map