import {
	apiBaseUrl
} from './config.js';
import * as common from './common.js' //引入common
import * as db from './db.js' //引入common
// 需要登陆的，都写到这里，否则就是不需要登陆的接口
const methodsToken = [
	'u/ums/user/info',
	'u/ums/user/editinfo',
	'u/ums/user/changeavatar',
	'u/ums/user/logout',
	'u/ums/user/addgoodsbrowsing',
	'u/ums/user/delgoodsbrowsing',
	'u/ums/user/goodsbrowsing',
	'u/ums/user/goodscollection',
	'u/ums/user/goodscollectionlist',
	'u/ums/user/vuesaveusership',
	'u/ums/user/saveusership',
	'u/ums/user/getshipdetail',
	'u/ums/user/setdefship',
	'u/ums/user/getareaid',
	'u/ums/user/editship',
	'u/ums/user/removeship',
	'u/ums/user/getusership',
	'u/ums/user/pay',
	'u/ums/user/orderevaluate',
	'u/ums/user/getuserdefaultship',
	'u/ums/user/issign',
	'u/ums/user/sign',
	'u/ums/user/mypoint',
	'u/ums/user/userpointlog',
	'u/ums/user/getbankcardlist',
	'u/ums/user/getdefaultbankcard',
	'u/ums/user/addbankcard',
	'u/ums/user/removebankcard',
	'u/ums/user/setdefaultbankcard',
	'u/ums/user/getbankcardinfo',
	'u/ums/user/editpwd',
	'u/ums/user/forgotpwd',
	'u/ums/user/recommend',
	'u/ums/user/balancelist',
	'u/ums/user/sharecode',
	'u/ums/user/cash',
	'u/ums/user/cashlist',
	'u/ums/user/myinvite',
	'u/ums/user/activationinvite',
	'coupon/getcoupon',
	'coupon/usercoupon',
	'u/oms/cart/add',
	'u/oms/cart/del',
	'u/oms/cart/getlist',
	'u/oms/cart/setnums',
	'u/oms/cart/getnumber',
	'u/oms/order/cancel',
	'u/oms/order/del',
	'u/oms/order/details',
	'u/oms/order/confirm',
	'u/oms/order/getlist',
	'u/oms/order/create',
	'u/oms/order/getship',
	'u/oms/order/getorderlist',
	'u/oms/order/getorderstatusnum',
	'u/oms/order/aftersaleslist',
	'u/oms/order/aftersalesinfo',
	// 'u/oms/order/aftersalesstatus', //内容用u/oms/order/details接口
	'u/oms/order/addaftersales',
	'u/oms/order/sendreship',
	'u/oms/order/iscomment',
	'u/sms/payment/getinfo',
	'u/ums/user/getuserpoint',
	'coupon/getcouponkey',
	'store/isclerk',
	'store/storeladinglist',
	'store/ladinginfo',
	'store/lading',
	'store/ladingdel',
	'distribution_center-api-info',
	'distribution_center-api-applydistribution',
	'distribution_center-api-setstore',
	'distribution_center-api-myorder',
	'pintuan/pintuanteam',
	'lottery-api-getLotteryConfig',
	'lottery-api-lottery',
	'lottery-api-lotteryLog',
	'u/ums/user/myinvoicelist',
	'u/sms/payment/checkpay',
	'u/sms/payment/getlist',
	'u/oms/order/gettaxcode'
];

const post = (method, data, callback, complete) => {
	uni.showLoading({
		title: '加载中'
	});

	// 判断token是否存在
	let userToken = null
	if (methodsToken.indexOf(method) >= 0) {
		// 获取用户token
		userToken = db.get("userToken");
		if (!userToken) {
			common.jumpToLogin();
			return false;
		}
		//  else {
		// 	data.token = userToken;
		// }
	}

	// data.method = method;

	uni.request({
		url: apiBaseUrl + method,
		data: data,
		header: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'token': userToken
			// 'Content-Type': 'application/x-www-form-urlencoded', //自定义请求头信息
		},
		method: 'POST',
		success: (response) => {
			uni.hideLoading();
			const result = response.data
			if (!result.status) {
				// 登录信息过期或者未登录
				if (result.code === 14007 || result.code === 14006) {
					db.del("userToken");
					uni.showToast({
						title: result.msg,
						icon: 'none',
						duration: 1000,
						complete: function() {
							setTimeout(function() {
								uni.hideToast();
								// #ifdef H5 || APP-PLUS
								uni.navigateTo({
									url: '/pages/login/login/index1'
								})
								// #endif
								// #ifdef MP-WEIXIN || MP-ALIPAY	
								uni.navigateTo({
									url: '/pages/login/choose/index',
									animationType: 'pop-in',
									animationDuration: 200
								});
								// #endif
							}, 1000)
						}
					});
				}
			}
			if (result.token) {
				db.set("userToken",result.token )
			}
			callback(result);
		},
		complete: (response) => {
			setTimeout(function() {
				uni.hideLoading();
			}, 1000)
			complete ? complete() : "";
		},
		fail: (error) => {
			uni.showLoading({
				title: '网络开小差了'
			});
			setTimeout(function() {
				uni.hideLoading();
			}, 1000)
			if (error && error.response) {
				showError(error.response);
			} else {

			}

		},
	});

}

//插件post
const pluginsPost = (method, data, callback) => {
	uni.showLoading({
		title: '加载中'
	});
	let userToken = null
	// 判断token是否存在
	if (methodsToken.indexOf(method) >= 0) {
		// 获取用户token
		userToken = db.get("userToken");
		if (!userToken) {
			common.jumpToLogin();
			return false;
		}
		//  else {
		// 	data.token = userToken;
		// }
	}
	uni.request({
		url: apiBaseUrl + 'plugins/' + method + '.html',
		data: data,
		header: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'token': userToken
			// 'Content-Type': 'application/x-www-form-urlencoded', //自定义请求头信息
		},
		method: 'POST',
		success: (response) => {
			uni.hideLoading();
			const result = response.data
			if (!result.status) {
				// 登录信息过期或者未登录
				if (result.data === 14007 || result.data === 14006) {
					db.del("userToken");
					uni.showToast({
						title: result.msg,
						icon: 'none',
						duration: 1000,
						complete: function() {
							setTimeout(function() {
								uni.hideToast();
								// #ifdef H5 || APP-PLUS
								uni.navigateTo({
									url: '/pages/login/login/index1'
								})
								// #endif
								// #ifdef MP-WEIXIN || MP-ALIPAY	
								uni.navigateTo({
									url: '/pages/login/choose/index',
									animationType: 'pop-in',
									animationDuration: 200
								});
								// #endif
							}, 1000);
						}
					});
				}
			}
			callback(result);
		},
		fail: (error) => {
			uni.hideLoading();
			if (error && error.response) {
				showError(error.response);
			}
		},
		complete: () => {
			setTimeout(function() {
				uni.hideLoading();
			}, 250);
		}
	});

}

const get = (url, callback) => {
	uni.showLoading({
		title: '加载中'
	});
	uni.request({
		url: url,
		header: {
			'Accept': 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded', //自定义请求头信息
		},
		method: 'GET',
		success: (response) => {
			uni.hideLoading();
			callback(response.data);
		},
		fail: (error) => {
			uni.hideLoading();
			if (error && error.response) {
				showError(error.response);
			}
		},
		complete: () => {
			setTimeout(function() {
				uni.hideLoading();
			}, 250);
		}
	});
}

const showError = error => {
	let errorMsg = ''
	switch (error.status) {
		case 400:
			errorMsg = '请求参数错误'
			break
		case 401:
			errorMsg = '未授权，请登录'
			break
		case 403:
			errorMsg = '跨域拒绝访问'
			break
		case 404:
			errorMsg = `请求地址出错: ${error.config.url}`
			break
		case 408:
			errorMsg = '请求超时'
			break
		case 500:
			errorMsg = '服务器内部错误'
			break
		case 501:
			errorMsg = '服务未实现'
			break
		case 502:
			errorMsg = '网关错误'
			break
		case 503:
			errorMsg = '服务不可用'
			break
		case 504:
			errorMsg = '网关超时'
			break
		case 505:
			errorMsg = 'HTTP版本不受支持'
			break
		default:
			errorMsg = error.msg
			break
	}

	uni.showToast({
		title: errorMsg,
		icon: 'none',
		duration: 1000,
		complete: function() {
			setTimeout(function() {
				uni.hideToast();
			}, 1000);
		}
	});
}

// 文件上传
export const uploadFiles = (callback) => {
	uni.chooseImage({
		success: (chooseImageRes) => {
			uni.showLoading({
				title: '上传中...'
			});
			const tempFilePaths = chooseImageRes.tempFilePaths;
			const uploadTask = uni.uploadFile({
				url: apiBaseUrl, //仅为示例，非真实的接口地址
				filePath: tempFilePaths[0],
				fileType: 'image',
				name: 'file',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'multipart/form-data',
				},
				formData: {
					'method': 'images.upload',
					'upfile': tempFilePaths[0]
				},
				success: (uploadFileRes) => {
					callback(JSON.parse(uploadFileRes.data));
				},
				fail: (error) => {
					if (error && error.response) {
						showError(error.response);
					}
				},
				complete: () => {
					setTimeout(function() {
						uni.hideLoading();
					}, 250);
				}
			});
			// 					uploadTask.onProgressUpdate((res) => {
			//             console.log('上传进度' + res.progress);
			//             console.log('已经上传的数据长度' + res.totalBytesSent);
			//             console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
			//
			//             // 测试条件，取消上传任务。
			//             if (res.progress > 50) {
			//                 uploadTask.abort();
			//             }
			// 					});
		}
	});
}

// 上传图片
export const uploadImage = (num, callback) => {
	uni.chooseImage({
		count: num,
		success: (res) => {
			uni.showLoading({
				title: '上传中...'
			});
			let tempFilePaths = res.tempFilePaths
			for (var i = 0; i < tempFilePaths.length; i++) {
				uni.uploadFile({
					url: apiBaseUrl,
					filePath: tempFilePaths[i],
					fileType: 'image',
					name: 'file',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'multipart/form-data',
					},
					formData: {
						'method': 'images.upload',
						'upfile': tempFilePaths[i]
					},
					success: (uploadFileRes) => {
						callback(JSON.parse(uploadFileRes.data));
					},
					fail: (error) => {
						if (error && error.response) {
							showError(error.response);
						}
					},
					complete: () => {
						setTimeout(function() {
							uni.hideLoading();
						}, 250);
					},
				});
			}
		}
	});
}

// 获取店铺配置
export const shopConfig = (callback) => get(apiBaseUrl + 'm/common/baoliconf', callback);

// 用户注册
export const reg = (data, callback) => post('u/ums/user/reg', data, callback);

// 用户登录
export const login = (data, callback) => post('u/ums/user/login', data, callback);

// 用户信息
export const userInfo = (data, callback) => post('u/ums/user/info', data, callback);

// 上传头像
export const changeAvatar = (data, callback) => post('u/ums/user/changeavatar', data, callback);

// 编辑用户信息
export const editInfo = (data, callback, complete) => post('u/ums/user/editinfo', data, callback, complete);

// 发送短信验证码
export const sms = (data, callback) => post('u/ums/user/sms', data, callback);

// 短信验证码登录
export const smsLogin = (data, callback) => post('u/ums/user/smslogin', data, callback);
// 短信验证码登录
export const register = (data, callback) => post('u/ums/user/register', data, callback);
// 退出登录
export const logout = (data, callback) => post('u/ums/user/logout', data, callback);

// 获取首页幻灯片
export const slider = (data, callback) => post('m/advert/getAdvertList', data, callback);

// 获取广告
export const advert = (data, callback) => post('m/advert/getcarousellists', data, callback);

// 获取公告列表
export const notice = (data, callback) => post('m/notice/noticeList', data, callback);

// 获取公告详情
export const noticeInfo = (data, callback) => post('m/notice/noticeInfo', data, callback);

// 获取文章详情
export const articleInfo = (data, callback) => post('m/articles/getArticleDetail', data, callback);

// 获取文章列表
export const articleList = (data, callback) => post('m/articles/getArticleList', data, callback);

// 获取商品分类
export const categories = (data, callback) => post('m/pms/category/getall', data, callback);

// 获取商品列表
export const goodsList = (data, callback) => post('m/goods/getlist', data, callback);

// 获取商品详情
export const goodsDetail = (data, callback) => post('m/goods/getdetial', data, callback);

// 获取商品参数信息
export const goodsParams = (data, callback) => post('m/goods/getgoodsparams', data, callback);

// 获取设置默认货品
export const getProductInfo = (data, callback) => post('m/goods/getproductinfo', data, callback);

// 获取商品评论信息
export const goodsComment = (data, callback) => post('goods/getgoodscomment', data, callback);

// 添加购物车
export const addCart = (data, callback, complete) => post('u/oms/cart/add', data, callback, complete);

// 移除购物车
export const removeCart = (data, callback) => post('u/oms/cart/del', data, callback);

// 获取购物车列表
export const cartList = (data, callback) => post('u/oms/cart/getlist', data, callback);

// 设置购物车商品数量
export const setCartNum = (data, callback) => post('u/oms/cart/setnums', data, callback);

// 获取购物车数量
export const getCartNum = (data, callback) => post('u/oms/cart/getnumber', data, callback);

// 获取用户的收货地址列表
export const userShip = (data, callback) => post('u/ums/user/getusership', data, callback);

// 获取用户默认收货地址
export const userDefaultShip = (data, callback) => post('u/ums/user/getuserdefaultship', data, callback);

// 存储用户收货地址
export const saveUserShip = (data, callback, complete) => post('u/ums/user/vuesaveusership', data, callback, complete);

// 微信存储收货地址
export const saveUserShipWx = (data, callback) => post('u/ums/user/saveusership', data, callback);

//获取区域ID
export const getAreaId = (data, callback) => post('u/ums/user/getareaid', data, callback);

// 获取收货地址详情
export const shipDetail = (data, callback, complete) => post('u/ums/user/getshipdetail', data, callback, complete);

// 收货地址编辑
export const editShip = (data, callback) => post('u/ums/user/editship', data, callback);

// 收货地址删除
export const removeShip = (data, callback, complete) => post('u/ums/user/removeship', data, callback, complete);

// 设置默认收货地址
export const setDefShip = (data, callback) => post('u/ums/user/setdefship', data, callback);

// 生成订单
export const createOrder = (data, callback, complete) => post('u/oms/order/create', data, callback, complete);

// 获取状态订单列表
export const getOrderList = (data, callback) => post('u/oms/order/getlist', data, callback);

// 取消订单
export const cancelOrder = (data, callback) => post('u/oms/order/cancel', data, callback);

// 删除订单
export const delOrder = (data, callback) => post('u/oms/order/del', data, callback);

// 获取订单详情
export const orderDetail = (data, callback) => post('u/oms/order/details', data, callback);

// 确认收货
export const confirmOrder = (data, callback) => post('u/oms/order/confirm', data, callback);

// 获取配送方式
export const orderShip = (data, callback) => post('u/oms/order/getship', data, callback);

// 获取全部订单列表
export const orderList = (data, callback) => post('u/oms/order/getorderlist', data, callback);

// 获取订单不同状态的数量
export const getOrderStatusSum = (data, callback) => post('u/oms/order/getorderstatusnum', data, callback);

// 售后单列表
export const afterSalesList = (data, callback) => post('u/oms/order/aftersaleslist', data, callback);

// 售后单详情
export const afterSalesInfo = (data, callback) => post('u/oms/order/aftersalesinfo', data, callback);

// 订单售后状态
// export const afterSalesStatus = (data, callback) => post('u/oms/order/aftersalesstatus', data, callback);

// 添加售后单
export const addAfterSales = (data, callback, complete) => post('u/oms/order/addaftersales', data, callback, complete);

// 用户发送退货包裹
export const sendShip = (data, callback) => post('u/oms/order/sendreship', data, callback);

// 添加商品浏览足迹
export const addGoodsBrowsing = (data, callback) => post('u/ums/user/addgoodsbrowsing', data, callback);

// 删除商品浏览足迹
export const delGoodsBrowsing = (data, callback) => post('u/ums/user/delgoodsbrowsing', data, callback);

// 获取商品浏览足迹
export const goodsBrowsing = (data, callback) => post('u/ums/user/goodsbrowsing', data, callback);

// 商品收藏 关注/取消
export const goodsCollection = (data, callback) => post('u/ums/user/goodscollection', data, callback);

// 获取商品收藏关注列表
export const goodsCollectionList = (data, callback) => post('u/ums/user/goodscollectionlist', data, callback);

// 获取店铺支付方式列表
export const paymentList = (data, callback) => post('u/sms/payment/getlist', data, callback);

// 获取支付单详情
export const paymentInfo = (data, callback) => post('u/sms/payment/getinfo', data, callback);

// 支付接口
export const pay = (data, callback) => post('u/ums/user/pay', data, callback);

// 订单评价接口
export const orderEvaluate = (data, callback, complete) => post('u/ums/user/orderevaluate', data, callback, complete);

// 判断是否签到
export const isSign = (data, callback) => post('u/ums/user/issign', data, callback);

// 签到接口
export const sign = (data, callback) => post('u/ums/user/sign', data, callback);

// 我的积分
export const myPoint = (data, callback) => post('u/ums/user/mypoint', data, callback);

// 积分记录
export const pointLog = (data, callback) => post('u/ums/user/userpointlog', data, callback);

// 物流信息接口
export const logistics = (data, callback) => post('u/oms/order/logisticbyapi', data, callback);

// 优惠券列表
export const couponList = (data, callback) => post('coupon/couponlist', data, callback);

// 优惠券详情
export const couponDetail = (data, callback) => post('coupon/coupondetail', data, callback);

// 用户领取优惠券
export const getCoupon = (data, callback) => post('coupon/getcoupon', data, callback);

// 用户已领取的优惠券列表
export const userCoupon = (data, callback) => post('coupon/usercoupon', data, callback);

// 获取店铺设置
export const getSetting = (data, callback) => post('u/ums/user/getsetting', data, callback);

// 获取商户配置信息
export const getSellerSetting = (data, callback) => post('u/ums/user/getsellersetting', data, callback);

// 获取我的银行卡列表
export const getBankCardList = (data, callback) => post('u/ums/user/getbankcardlist', data, callback);

// 获取默认的银行卡
export const getDefaultBankCard = (data, callback) => post('u/ums/user/getdefaultbankcard', data, callback);

// 添加银行卡
export const addBankCard = (data, callback, complete) => post('u/ums/user/addbankcard', data, callback, complete);

// 删除银行卡
export const removeBankCard = (data, callback) => post('u/ums/user/removebankcard', data, callback);

// 设置默认银行卡
export const setDefaultBankCard = (data, callback, complete) => post('u/ums/user/setdefaultbankcard', data, callback,
	complete);

// 获取银行卡信息
export const getBankCardInfo = (data, callback) => post('u/ums/user/getbankcardinfo', data, callback);

// 获取银行卡组织信息
export const getBankCardOrganization = (data, callback) => post('u/ums/user/getbankcardorganization', data, callback);

// 用户修改密码
export const editPwd = (data, callback, complete) => post('u/ums/user/editpwd', data, callback, complete);

// 用户找回密码
export const forgotPwd = (data, callback) => post('u/ums/user/forgotpwd', data, callback);

// 获取用户余额明细
export const getBalanceList = (data, callback) => post('u/ums/user/balancelist', data, callback);

// 用户推荐列表
export const recommendList = (data, callback) => post('u/ums/user/recommend', data, callback);

// 邀请码
export const shareCode = (data, callback) => post('u/ums/user/sharecode', data, callback);

// 用户提现
export const userToCash = (data, callback, complete) => post('u/ums/user/cash', data, callback, complete);

// 用户提现列表
export const cashList = (data, callback) => post('u/ums/user/cashlist', data, callback);

// 绑定授权登录
export const trustBind = (data, callback) => post('u/ums/user/trustbind', data, callback);

// 获取用户信息
// export const trustLogin = (data, callback) => post('u/ums/user/trustcallback', data, callback);

// 判断用户下单可以使用多少积分
export const usablePoint = (data, callback) => post('u/ums/user/getuserpoint', data, callback);

// 门店列表
export const storeList = (data, callback) => post('store/getstorelist', data, callback);

// 判断是否开启门店自提
export const switchStore = (data, callback) => post('store/getstoreswitch', data, callback);

// 获取默认的门店
export const defaultStore = (data, callback) => post('store/getdefaultstore', data, callback);

// 判断是否开启积分
export const isPoint = (data, callback) => post('u/ums/user/ispoint', data, callback);

// 用户输入code领取优惠券
export const couponKey = (data, callback) => post('coupon/getcouponkey', data, callback);

// 判断是否是店员
export const isStoreUser = (data, callback) => post('store/isclerk', data, callback);

// 获取店铺提货单列表
export const storeLadingList = (data, callback) => post('store/storeladinglist', data, callback);

// 获取提货单详情
export const ladingInfo = (data, callback) => post('store/ladinginfo', data, callback);

// 店铺提单操作
export const ladingExec = (data, callback) => post('store/lading', data, callback);

// 提货单删除
export const ladingDel = (data, callback) => post('store/ladingdel', data, callback);

// 获取活动列表
export const activityList = (data, callback) => post('group/getlist', data, callback);

// 获取活动详情
export const activityDetail = (data, callback) => post('group/getgoodsdetial', data, callback);

//小程序解析code
export const login1 = (data, callback) => post('u/ums/user/wxapplogin1', data, callback);

//小程序登录第二步
export const login2 = (data, callback) => post('u/ums/user/wxapplogin2', data, callback);

//支付宝小程序解析code
export const alilogin1 = (data, callback) => post('u/ums/user/alipayapplogin1', data, callback);

//取下级地址列表
export const getAreaList = (data, callback) => post('u/ums/user/getarealist', data, callback);

//取搜索页推荐关键字
export const getRecommendKeys = (callback) => post('store/getrecommendkeys', {}, callback);

// 获取我的邀请信息
export const myInvite = (callback) => post('u/ums/user/myinvite', {}, callback);

// 设置我的上级邀请人
export const setMyInvite = (data, callback) => post('u/ums/user/activationinvite', data, callback);

// 获取小程序二维码
export const getInviteQRCode = (data, callback) => post('store/getinviteqrcode', data, callback);

// 生成海报
export const createPoster = (data, callback) => post('u/ums/user/getposter', data, callback);

// 获取秒杀团购
export const getGroup = (data, callback) => post('group/getlist', data, callback);

// 获取秒杀团购详情
export const groupInfo = (data, callback) => post('group/getgoodsdetial', data, callback);

// 自定义页面
export const getPageConfig = (data, callback) => post('m/pages/getpageconfig', data, callback);

//万能表单
export const getFormDetial = (data, callback) => post('form/getformdetial', data, callback);

//提交表单
export const addSubmitForm = (data, callback, complete) => post('form/addsubmit', data, callback, complete);

//公众号授权获取openid
export const getOpenId = (data, callback) => post('u/ums/user/officiallogin', data, callback);

// 获取授权登录方式
export const getTrustLogin = (data, callback) => post('u/ums/user/gettrustlogin', data, callback);

// APP信任登录
export const appTrustLogin = (data, callback) => post('u/ums/user/uniapplogin', data, callback);

// 获取分销商进度状态
export const getDistributioninfo = (data, callback) => pluginsPost('distribution_center-api-info', data, callback);

// 申请分销商
export const applyDistribution = (data, callback) => pluginsPost('distribution_center-api-applydistribution', data,
	callback);

// 店铺设置
export const setStore = (data, callback) => pluginsPost('distribution_center-api-setstore', data, callback);

//我的分销订单
export const getStoreInfo = (data, callback) => pluginsPost('distribution_center-api-getstoreinfo', data, callback);

//我的分销订单
export const getDistributionOrder = (data, callback) => pluginsPost('distribution_center-api-myorder', data, callback);

// 拼团列表
export const pintuanList = (data, callback) => post('pintuan/list', data, callback);

// 拼团商品详情
export const pintuanGoodsInfo = (data, callback) => post('pintuan/goodsinfo', data, callback);

// 拼团货品详情
export const pintuanProductInfo = (data, callback) => post('pintuan/productinfo', data, callback);

//微信图文消息
export const messageDetail = (data, callback) => post('articles/getweixinmessage', data, callback);

//获取APP版本
export const getAppVersion = (data, callback) => pluginsPost('app-api-checkVersion', data, callback);

//获取APP版本
export const getOrderPintuanTeamInfo = (data, callback) => post('pintuan/pintuanteam', data, callback);

//抽奖规则
export const lotteryConfig = (callback) => pluginsPost('lottery-api-getLotteryConfig', {}, callback);

//抽奖操作
export const lottery = (callback) => pluginsPost('lottery-api-lottery', {}, callback);

//获取我的抽奖记录
export const myLottery = (data, callback) => pluginsPost('lottery-api-lotteryLog', data, callback);

//生成分享URL
export const createShareUrl = (data, callback) => post('u/ums/user/shareurl', data, callback);

//获取我的发票列表
export const myInvoiceList = (data, callback) => post('u/ums/user/myinvoicelist', data, callback);

//获取支付信息
export const paymentsCheckpay = (data, callback) => post('u/sms/payment/checkpay', data, callback);

//忘记密码
export const userForgetpwd = (data, callback) => post('u/ums/user/forgetpwd', data, callback);

//头条小程序登录
export const ttlogin = (data, callback) => post('u/ums/user/ttlogin', data, callback);

//发票模糊查询
export const getTaxInfo = (data, callback) => post('u/oms/order/gettaxcode', data, callback);
