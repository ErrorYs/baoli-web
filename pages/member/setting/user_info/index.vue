<template>
	<view class="content">
		<view class="content-top">
			<view class='cell-group'>
				<view class='cell-item user-head'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>头像</view>
					</view>
					<view class='cell-item-ft'>
						<image class='cell-ft-next user-head-img have-none' mode="aspectFill" :src="avatar" @click="uploadAvatar"></image>
					</view>
				</view>
				<view class='cell-item'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>昵称</view>
					</view>
					<view class='cell-item-bd'>
						<input class='cell-bd-input' placeholder='' v-model="nickname" ></input>
					</view>
				</view>
				<view class='cell-item right-img'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>性别</view>
					</view>
					<view class='cell-item-bd'>
						<view class="uni-list">
							<view class="uni-list-cell-db">
								<picker @change="bindPickerChange" :value="index" :range="objectSex">
									<view class="uni-input">{{objectSex[gender]}}</view>
								</picker>
							</view>
						</view>
					</view>
					<view class='cell-item-ft'>
						<image class='cell-ft-next icon' src='/static/image/ic-pull-down.png'></image>
					</view>
				</view>
				<view class='cell-item right-img'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>生日</view>
					</view>
					<view class='cell-item-bd'>
						<view class="uni-list">
							<view class="uni-list-cell-db">
						        <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						            <view class="uni-input">{{birthday}}</view>
						        </picker>
						    </view>
						</view>
					</view>
					<view class='cell-item-ft'>
						<image class='cell-ft-next icon' src='/static/image/ic-pull-down.png'></image>
					</view>
				</view>
			</view>
		</view>
		<view class="button-bottom">
			<button class="btn btn-square btn-b"  hover-class="btn-hover2" @click="submitHandler()" :disabled='submitStatus' :loading='submitStatus'>保存</button>
		</view>
	</view>
</template>

<script>
export default {
    data() {
        return {
			title: 'picker',
			avatar: '',
			objectSex: [ '未知','男', '女'],
			index: 2,
			nickname: '',
			mobile: '',
			date: '1990-01-01',
			birthday: '请选择',
			gender: 0,
			submitStatus: false
        }
    },
    computed: {
        startDate() {
            return this.getDate('start');
        },
        endDate() {
            return this.getDate('end');
        }
    },
    methods: {
		//性别
		bindPickerChange: function(e) {
			this.gender = e.target.value;
		},
		//生日
		bindDateChange: function(e) {
			this.birthday = e.target.value;
		},
        getDate(type) {
            const date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();

            if (type === 'start') {
                year = year - 60;
            } else if (type === 'end') {
                year = year + 2;
            }
            month = month > 9 ? month : '0' + month;;
            day = day > 9 ? day : '0' + day;
            return `${year}-${month}-${day}`;
        },
		// 用户上传头像
		uploadAvatar () {
			this.$api.uploadFiles(res => {
				if (res.status) {
					let avatar = res.data.url // 上传成功的图片地址
		            // 执行头像修改
		            this.$api.changeAvatar({
		                avatar: avatar
		            }, res => {
		                if (res.status) {
							this.$common.successToShow('上传成功', () => {
								this.avatar = res.data.avatar
							})
		                } else {
							this.$common.errorToShow(res.msg)
						}
		            })
				} else {
					this.$common.errorToShow(res.msg)
				}
			})
		},
		// 保存资料
		submitHandler() {
			this.submitStatus = true;
			let gender = this.gender;
			if(this.birthday == '请选择'){
				this.$common.successToShow('请选择出生日期');
				this.submitStatus = false;
				return false;
			}else{
				this.$api.editInfo({
						gender: gender,
						birthday: this.birthday,
						nickname: this.nickname
					}, res => {
						this.$common.successToShow(res.msg, result => {
							// this.submitStatus = false;
							uni.navigateBack({
								delta: 1
							});
						});
					},res => {
						this.submitStatus = false;
					}
				);
			}
		}
    },
	onLoad: function() {
		var _this = this;
		_this.$api.userInfo({}, function(res) {
			if (res.status) {
				var the_gender = res.data.gender;
				if (res.data.birthday == null) {
					res.data.birthday = '请选择';
				}
				_this.nickname = res.data.nickname;
				_this.mobile = res.data.mobile;
				_this.gender = the_gender;
				_this.index = the_gender;
				_this.birthday = res.data.birthday;
				_this.avatar = res.data.avatar;
				if(_this.birthday!='请选择'){
					_this.date = _this.birthday;
				}
			} else {
				//报错了
				_this.$common.errorToShow(res.msg);
			}
		});
	}
}
</script>

<style>
.user-head{
	height: 100upx;
}
.user-head-img{
	height: 90upx;
	width: 90upx;
	border-radius: 50%;
}
.cell-hd-title{
	color: #333;
}
.cell-item-bd{
	color: #666;
	font-size: 26upx;
}
</style>
