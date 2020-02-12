<template>
	<view class="content">
		<view class="content-top">
			<view class='cell-group'>
				<view class='cell-item'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>收货人</view>
					</view>
					<view class='cell-item-bd'>
						<input type="text" class='cell-bd-input' placeholder='请填写收货人姓名' v-model="name"></input>
					</view>
				</view>
				<view class='cell-item'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>手机号</view>
					</view>
					<view class='cell-item-bd'>
						<input type="text" class='cell-bd-input' placeholder='请填写收货人手机号' v-model="phone"></input>
					</view>
				</view>

				<view class='cell-item'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>省市区</view>
					</view>

					<view class='cell-item-bd'>
						<input :value="pickerValue" @focus="showThreePicker"></input>
						<area-picker ref="areaPicker" :areaId="areaId" :defaultIndex="defaultIndex" @onConfirm="onConfirm"></area-picker>
					</view>

					<view class='cell-item-ft'>
						<image class='cell-ft-next icon' src='/static/image/ic-pull-down.png' @click="showThreePicker"></image>
					</view>
				</view>

				<view class='cell-item'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>详细地址</view>
					</view>
					<view class='cell-item-bd'>
						<input type="text" class='cell-bd-input' placeholder='请填写收货详细地址' v-model="address"></input>
					</view>
				</view>
				<view class='cell-item' @click="defaultChange">
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>设为默认</view>
					</view>
					<view class='cell-item-ft'>
						<label class="radio">
							<radio value="1" :checked="checked" color="#FF7159" /></label>
					</view>
				</view>
			</view>
		</view>
		<view class="button-bottom">

			<button class="btn btn-square btn-w" @click="delShip" v-if="id && id != 0" hover-class="btn-hover2" :disabled='submitStatus'
			 :loading='submitStatus'>删除</button>

			<button class="btn btn-square btn-b" @click="saveShip" hover-class="btn-hover2" :disabled='submitStatus' :loading='submitStatus'>保存</button>
		</view>
	</view>

</template>

<script>
	import areaPicker from "@/components/area-picker/areaPicker.vue";
	export default {
		components: {
			areaPicker
		},
		data() {
			return {
				id: 0,
				name: '',
				phone: '',
				region: ['北京市', '北京市', '东城区'],
				areaId: 110101,
				address: '',
				dft: 2,
				multiArray: [
					[],
					[],
					[]
				],
				multiIndex: [110000, 110100, 110101],
				checked: false,
				pickerValue: '',
				defaultIndex: [0, 0, 0],
				submitStatus: false,
				areaName: '',
			}
		},
		computed: {},
		methods: {
			// 省市区联动初始化
			showThreePicker() {
				this.$refs.areaPicker.showPicker();
			},
			onConfirm(e) {
				let province_name = e[0].name;
				let city_name = e[1].name;
				let county_name = e[2].name;
				this.pickerValue = e[0].name + " " + e[1].name + " " + e[2].name
				// let data = {
				// 	province_name: province_name,
				// 	city_name: city_name,
				// 	county_name: county_name
				// }
				let data = {
					keywords: county_name == '市辖区' ? city_name : county_name,
					subdistrict: 1,
					key: '758128eb6c5ad95e02faa139df8f2466'
				}
				let regionName = [province_name, city_name, county_name];
				this.areaName = province_name + ' ' + city_name + ' ' + county_name
				uni.request({
					url: 'https://restapi.amap.com/v3/config/district?keywords=北京&subdistrict=2&key=<用户的key>',
					method: 'get',
					data: data,
					success: (res) => {
						if (res.data.status == 1) {
							this.areaId = parseInt(res.data.districts[0].adcode)
						} else {
							uni.showModal({
								title: '提示',
								content: '地区选择出现问题，请重新选择地区',
								showCancel: false
							});
						}
					}
				})
				// this.$api.getAreaId(data, res => {
				// 	if (res.status) {
				// 		this.areaId = res.data
				// 	} else {
				// 		uni.showModal({
				// 			title: '提示',
				// 			content: '地区选择出现问题，请重新选择地区',
				// 			showCancel: false
				// 		});
				// 	}
				// });
			},
			// 信息验证
			checkData(data) {
				this.submitStatus = false;
				if (!data.name) {
					this.$common.errorToShow('请输入收货人姓名')
					return false
				} else if (!data.phone) {
					this.$common.errorToShow('请输入收货人手机号')
					return false
				} else if (data.phone.length !== 11) {
					this.$common.errorToShow('收货人手机号格式不正确')
					return false
				} else if (!data.areaId) {
					this.$common.errorToShow('请选择地区信息')
					return false
				} else if (!data.address) {
					this.$common.errorToShow('请输入收货地址详细信息')
					return false
				} else {
					return true
				}
			},
			//默认
			defaultChange() {
				if (this.checked) {
					this.checked = false;
					this.dft = 2;
				} else {
					this.checked = true;
					this.dft = 1;
				}
			},
			//编辑获取收货地址信息
			getShipInfo() {
				let data = {
					'id': this.id
				}
				this.$api.shipDetail(data, res => {
					if (res.status) {
						let region = res.data.areaName.split(" ");
						this.name = res.data.name;
						this.phone = res.data.phone;
						this.region = region;
						this.areaId = res.data.areaId;

						this.pickerValue = this.region[0] + " " + this.region[1] + " " + this.region[2]
						this.$refs.areaPicker.init(); //初始化插件

						this.address = res.data.address;
						this.dft = res.data.dft;
						if (res.data.dft == 1) {
							this.checked = true;
						} else {
							this.checked = false;
						}
					} else {
						this.$common.errorToShow('获取收货地址信息出现问题');
						// this.submitStatus = false;
					}
				}, res => {
					this.submitStatus = false;
				});
			},
			//删除地址
			delShip() {
				this.submitStatus = true;
				this.$api.removeShip({
					'id': this.id
				}, res => {
					if (res.status) {
						this.$common.successToShow(res.msg, ress => {
							// this.submitStatus = false;
							uni.navigateBack({
								delta: 1
							});
						});
					} else {
						this.$common.errorToShow(res.msg);
						// this.submitStatus = false;
					}
				}, res => {
					this.submitStatus = false;
				});
			},
			//存储收货地址
			saveShip() {
				this.submitStatus = true;
				let data = {
					name: this.name,
					areaName:this.areaName,
					address: this.address,
					phone: this.phone,
					dft: this.dft,
					areaId: this.areaId
				}

				if (this.id && this.id != 0) {
					//编辑存储
					data.id = this.id

					if (this.checkData(data)) {
						this.$api.editShip(data, res => {
							if (res.status) {
								this.$common.successToShow(res.msg, ress => {
									// this.submitStatus = false;
									uni.navigateBack({
										delta: 1
									});
								});
							} else {
								this.$common.errorToShow(res.msg);
								// this.submitStatus = false;
							}
						}, res => {
							this.submitStatus = false;
						});
					}
				} else {
					//添加
					if (this.checkData(data)) {
						this.$api.saveUserShip(data, res => {
							if (res.status) {
								this.$common.successToShow(res.msg, ress => {
									// this.submitStatus = false;
									uni.navigateBack({
										delta: 1
									});
								});
							} else {
								this.$common.errorToShow(res.msg);
								// this.submitStatus = false;
							}
						}, res => {
							this.submitStatus = false;
						});
					}
				}
			}
		},
		onLoad(e) {
			if (e.ship_id) {
				//编辑
				this.id = e.ship_id;
				this.getShipInfo();
			} else {
				//添加
				this.pickerValue = this.region[0] + " " + this.region[1] + " " + this.region[2];
				uni.setNavigationBarTitle({
					title: '添加地址'
				});
			}
		},
		onBackPress() {
			if (this.$refs.areaPicker.pickerShow) {
				this.$refs.areaPicker.closePicker();
				return true;
			}
		},

	}
</script>

<style>
	.user-head {
		height: 100upx;
	}

	.user-head-img {
		height: 90upx;
		width: 90upx;
		border-radius: 50%;
	}

	.cell-hd-title {
		color: #333;
	}

	.cell-item-bd {
		color: #666;
		font-size: 26upx;
	}

	.button-bottom .btn {
		width: 50%;
	}

	.cell-bd-input {
		width: 100%;
	}

	/* #ifdef MP-ALIPAY */
	input {
		font-size: 24upx;
	}

	/* #endif */
</style>
