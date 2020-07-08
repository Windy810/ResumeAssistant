<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">求职意向</block></cu-custom>
		
		<form>
			<view class="cu-form-group">
				<view class="title">求职岗位</view>
				<picker @change="PickerChange1" :value="index1" :range="picker1">
					<view class="picker">
						{{index1>-1?picker1[index1]:'产品经理'}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group">
				<view class="title">求职类型</view>
				<picker @change="PickerChange2" :value="index2" :range="picker2">
					<view class="picker">
						{{index2>-1?picker2[index2]:'实习'}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group">
				<view class="title">期望薪资</view>
				<picker @change="PickerChange3" :value="index3" :range="picker3">
					<view class="picker">
						{{index3>-1?picker3[index3]:'5k-10k'}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group">
				<view class="title">目标城市</view>
				<picker @change="PickerChange4" :value="index4" :range="picker4">
					<view class="picker">
						{{index4>-1?picker4[index4]:'上海'}}
					</view>
				</picker>
			</view>
			
			<view>以下为投递简历时必填，不会显示在导出简历中</view>
			<view class="cu-form-group">
				<view class="title">当前状态</view>
				<picker @change="PickerChange5" :value="index5" :range="picker5">
					<view class="picker">
						{{index5>-1?picker5[index5]:'月内到岗'}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group">
				<view class="title">期望行业</view>
				<picker @change="PickerChange6" :value="index6" :range="picker6">
					<view class="picker">
						{{index6>-1?picker6[index6]:'计算机硬件'}}
					</view>
				</picker>
			</view>

		</form>
		
		<button class="cu-btn bg-blue margin-tb-sm xl justify-center flex" @click="store">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index1: -1, index2: -1, index3: -1, index4: -1, index5: -1, index6: -1,
				picker1: ['产品经理', '游戏策划', '前端开发', '后端开发', '移动开发', '网络运输', '运维', 'UI交互设计', '网页设计','’产品运营'],
				picker2: ['校招', '社招', '实习'],
				picker3: ['面议', '3k以下', '3k-5k', '5k-10k', '10k-20k', '20k-50k', '50k以上'],
				picker4: ['北京', '上海', '广州', '成都'],
				
				picker5: ['随时到岗', '月内到岗', '考虑机会'],
				picker6: ['电子/半导体/集成电路', '电子商务', '互联网', 'IT服务', '计算机软件', '计算机硬件', '企业服务', '人工智能', '通信/网络设备', '网络/信息安全', '新媒体', '云计算/大数据', '游戏', '运营商/增值服务'],
				
				workInfo: {
					place: "",
					classes:  "",
					money: "",
					country: "",
					status: "",
					what: ""
				}
			}
		},
		methods: {
			store() {
				this.workInfo.place = this.picker1[this.index1];
				this.workInfo.classes = this.picker2[this.index2];
				this.workInfo.money = this.picker3[this.index3];
				this.workInfo.country = this.picker4[this.index4];
				this.workInfo.status = this.picker5[this.index5];
				this.workInfo.what = this.picker6[this.index6];
				
				wx.setStorage({
					key: 'workInfo',
					data: JSON.stringify(this.workInfo)
				})
			},
			zNavigate(id) {
				uni.navigateTo({
					url:`/pages/${id}`
				});
				this.clicked = true;
			},
			
			PickerChange1(e) {
				this.index1 = e.detail.value
			},
			PickerChange2(e) {
				this.index2 = e.detail.value
			},PickerChange3(e) {
				this.index3 = e.detail.value
			},PickerChange4(e) {
				this.index4 = e.detail.value
			},PickerChange5(e) {
				this.index5 = e.detail.value
			},PickerChange6(e) {
				this.index6 = e.detail.value
			},
			
			DateChange(e) {
				this.date = e.detail.value
			}
		}
	}
</script>

<style>
</style>
