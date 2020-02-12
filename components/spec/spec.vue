<template>
	<view>
		<view class="goods-specs" v-for="(item, index,i) in spesData" :key="i">
			<text class="pop-m-title">{{ index }}</text>
			<view class="pop-m-bd">
				<view class="pop-m-item " v-for="(spes, inde) in item" :key="inde" :class="inde==indexs[i]?'selected':'not-selected'"
				  @click="specChangeSpes(i, inde)">
					{{ spes}}
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: "spec",
		props: {
			// 默认picker选中项索引
			spesData: {
				required: true
			},
			indexes: {
				required: true
			}
		},
		data() {
			return {
				indexs:[]
			}
		},
		methods: {
			specChangeSpes(index,inde) {
				this.indexs = [0]
				this.indexs = this.indexes
				this.indexs[index] = inde
				this.$emit("changeSpes", JSON.stringify(this.indexs));
			}
		},
		created(){
			this.indexs = this.indexes
		},
	}
</script>
<style>
	.goods-specs,
	.goods-number {
		padding: 26upx;
		border-top: 1px solid #f3f3f3;
	}

	.goods-specs:first-child {
		border: none;
	}

	.pop-m-title {
		margin-right: 10upx;
		color: #666;
	}

	.pop-m-item {
		display: inline-block;
		float: left;
		padding: 6upx 16upx;
		background-color: #fff;
		color: #333;
		margin-right: 16upx;
		margin-bottom: 10upx;
	}

	.pop-m-bd {
		overflow: hidden;
		margin-top: 10upx;
	}

	.selected {
		border: 2upx solid #333;
		background-color: #333;
		color: #fff;
	}

	.not-selected {
		border: 2upx solid #ccc;
	}

	.none {
		border: 2upx dashed #ccc;
		color: #888;
	}
</style>
