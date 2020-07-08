<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">教育经历</block></cu-custom>
		
		<form>
			<view class="cu-form-group">
				<view class="title">学校名称</view>
				<input placeholder="请输入学校名称" name="input" v-model="schoolInfo.schoolName"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title">专业名称</view>
				<input placeholder="请输入专业名称" name="input"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title">学历</view>
				<picker @change="PickerChange1" :value="index1" :range="picker1">
					<view class="picker">
						{{index1>-1?picker1[index1]:'本科'}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group">
				<view class="title">入学年份</view>
				<picker mode="date" :value="date1" start="2015-09-01" end="2020-09-01" @change="DateChange1">
					<view class="picker">
						{{date1}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group">
				<view class="title">毕业年份</view>
				<picker mode="date" :value="date2" start="2015-09-01" end="2020-09-01" @change="DateChange2">
					<view class="picker">
						{{date2}}
					</view>
				</picker>
			</view>
			
			<view class="cu-form-group align-start">
				<view class="title">所学课程</view>
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaBInput" placeholder="尽量简洁,突出重点,成绩优异的话建议写上GPA或排名信息,如: 软件工程, 面向对象程序设计, 项目管理, 数据结构, 计算机网络, GPA 3.9/4.0, 专业前5%"></textarea>
			</view>
			
			<view>以下为投递简历时必填，不会显示在导出简历中</view>
			<view class="cu-form-group">
				<view class="title">是否统招</view>
				<picker @change="PickerChange2" :value="index2" :range="picker2">
					<view class="picker">
						{{index2>-1?picker2[index2]:'统招'}}
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
				index1: -1, index2: -1,
				picker1: ['小学', '初中', '高中', '中专', '大专', '本科', '硕士', '博士', '博士后', 'MBA'],
				picker2: ['统招', '非统招’'],
				date1: '2018-12-25',
				date2: '2018-12-25',
				
				schoolInfo: {
					schoolName: "",
					fromTime: "",
					toTime: ""
				}
			}
		},
		methods: {
			store() {
				this.schoolInfo.fromTime = this.date1;
				this.schoolInfo.toTime = this.date2;
				
				wx.setStorage({
					key:"schoolInfo",
					data: JSON.stringify(this.schoolInfo)
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
			},
			
			DateChange1(e) {
				this.date1 = e.detail.value
			},
			DateChange2(e) {
				this.date2 = e.detail.value
			}
		}
	}
</script>

<style>
</style>
