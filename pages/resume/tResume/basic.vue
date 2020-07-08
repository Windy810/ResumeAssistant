<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">基本信息</block></cu-custom>
		
		<form>
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					照片上传
				</view>
				<view class="action">
					{{imgList.length}}/4
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
						<image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
			
			<view class="cu-form-group">
				<view class="title">姓名</view>
				<input placeholder="请输入姓名" name="input" v-model="basicInfo.name"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title">性别</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'请选择'}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group">
				<view class="title">出生日期</view>
				<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group">
				<view class="title">电话</view>
				<input placeholder="请输入电话号码" name="input" v-model="basicInfo.phone"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title">邮箱</view>
				<input placeholder="请输入邮箱地址" name="input" v-model="basicInfo.email"></input>
			</view>
		</form>
		
		<button class="cu-btn bg-blue margin-tb-sm xl justify-center flex" @click="store">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: -1,
				picker: ['男', '女'],
				date: '2018-12-25',
				imgList: [],
				
				basicInfo: {
					name: '',
					gender: '',
					time: '',
					phone: '',
					email: ''
				}
			}
		},
		methods: {
			store() {
				this.basicInfo.gender = this.picker[this.index];
				this.basicInfo.time = this.date;
				
				wx.setStorage({
					key: 'basicInfo',
					data: JSON.stringify(this.basicInfo)
				})
			},
			zNavigate(id) {
				uni.navigateTo({
					url:`/pages/${id}`
				});
				this.clicked = true;
			},
			
			PickerChange(e) {
				this.index = e.detail.value
			},
			
			DateChange(e) {
				this.date = e.detail.value
			},
			
			ChooseImage() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '召唤师',
					content: '确定要删除这段回忆吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			}
		}
	}
	
</script>

<style>
</style>
