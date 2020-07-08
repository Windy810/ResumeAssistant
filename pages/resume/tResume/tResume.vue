<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">个人简历制作</block></cu-custom>
		
		<view class="cu-list">
			<view class="cu-item" @click="zNavigate('resume/tResume/basic')">
				<view class="cu-bar bg-white solid-bottom">
					<view class="action">
						<text class="cuIcon-titles text-blue"></text>基本信息
					</view>
				</view>
				
				<view class="solids-bottom padding-xs flex align-center bg-white">
					<view class="text-left">
						<view class="solid-bottom text-sm padding">
							<text class="text-grey text-df">姓名：{{ info.name }}</text>  </br>
							<text class="text-grey text-df">性别：{{ info.gender }}</text>  </br>
							<text class="text-grey text-df">出生日期：{{ info.time }}</text>  </br>
							<text class="text-grey text-df">电话：{{ info.phone }}</text> </br>
							<text class="text-grey text-df">邮箱：{{ info.email }}</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="cu-item" @click="zNavigate('resume/tResume/work')">
				<view class="cu-bar bg-white solid-bottom">
					<view class="action">
						<text class="cuIcon-titles text-blue"></text>求职意向
					</view>
				</view>
				
				<view class="solids-bottom padding-xs flex align-center bg-white">
					<view class="padding">{{ info.money }}</view>
					
					<view class="flex-sub text-left">
						<view class="solid-bottom text-sm padding">
							<text class="text-grey text-df">实习</text>  </br>
							<text class="text-grey text-df">{{ info.where }}</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="cu-item" @click="zNavigate('resume/tResume/school')">
				<view class="cu-bar bg-white solid-bottom">
					<view class="action">
						<text class="cuIcon-titles text-blue"></text>在校经历
					</view>
				</view>
				
				<view class="solids-bottom padding-xs flex align-center bg-white">
					<view class="padding">{{ info.schoolName }}</view>
					
					<view class="flex-sub text-left">
						<view class="solid-bottom text-sm padding">
							<text class="text-grey text-df">{{ info.fromTime }} - {{ info.toTime }}</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="cu-item" @click="zNavigate('resume/tResume/reward')">
				<view class="cu-bar bg-white solid-bottom">
					<view class="action">
						<text class="cuIcon-titles text-blue"></text>奖项证书
					</view>
				</view>
				
				<view class="text-df text-grey bg-white padding-sm">{{ info.awards }}</view>
			</view>
			
			<view class="cu-item" @click="zNavigate('resume/tResume/skills')">
				<view class="cu-bar bg-white solid-bottom">
					<view class="action">
						<text class="cuIcon-titles text-blue"></text>相关技能
					</view>
				</view>
				
				<view class="text-df text-grey bg-white padding-sm">{{ info.skills }}</view>
			</view>
			
			<view class="cu-item" @click="zNavigate('resume/tResume/summary')">
				<view class="cu-bar bg-white solid-bottom">
					<view class="action">
						<text class="cuIcon-titles text-blue"></text>个人总结
					</view>
				</view>
				
				<view class="text-df text-grey bg-white padding-sm">{{ info.personal_summary }}</view>
			</view>
			
			
			<view class="box">
				<view class="cu-bar btn-group">
					<button class="cu-btn bg-blue shadow-blur">保存</button>
					<button class="cu-btn text-blue line-blue shadow" @click="test">上传</button>
				</view>
			</view>
		</view>
		
		<web-view src="https://test.mashiroi.top/%E9%9F%A9%E5%AE%B6%E9%B9%8F_190472@test.com/%E9%9F%A9%E5%AE%B6%E9%B9%8F.html" v-if="isShow"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShow: false,
				info: {
					name: 'test',
					gender: '男',
					time: '1998.1.1',
					phone: '',
					email: '1904727480@outlook.com',
					money: '5k-10k',
					where: '北京',
					
					schoolName: "东北林业大学",
					fromTime: "",
					toTime: "",
					
					skills: '',
					awards: "",
					personal_summary: "拥有良好的沟通协调能力，善于应变，能够快速适应新环境，熟悉使用办公软件，对网络热点敏感高，善于在文案中制造话题，运用热点传播效应。工作脚踏实地，团队意识强"
				},
				uploadInfo: {
									"basics": {
										"name" : "",
										"label": "",
										"picture": "",
										"email": "",
										"phone": "",
										"website": "www.test.com",
										"summary": ""
									},
									"work": [
										{
											"company": "",
											"website": "",
											"startDate": '',
											"endDate": '',
											"summary": "",
											"highlights": [
												"no no no",
												"I have no highlights"
											]
										}
									],
									"education": [
										{
											"institution": "",
											"area": "",
											"studyType": "",
											"srartDate": '',
											"endDate": '',
											"gpa": ""
										}
									],
									"awards":[
										{
										"title": "",
										"date": '',
										"awarder": ""
										}
									],
									"skills": [
										{
											"name": "",
											"level": "",
											"keywords": ["HTML","css"]
										}
									]
								}
			}
		},
		onShow() {
			let self = this;
			wx.getStorage({
				key: 'basicInfo',
				success: function(res) {
					let obj = JSON.parse(res.data);
					for (let key in obj) {
						self.info[key] = obj[key];
					}
				}
			})
			
			wx.getStorage({
				key: 'workInfo',
				success: function(res) {
					let obj = JSON.parse(res.data);
					console.log(obj);
					self.info.money = obj.money;
					self.info.where = obj.country;
				}
			})
			
			wx.getStorage({
				key: 'schoolInfo',
				success: function(res) {
					let obj = JSON.parse(res.data);
					console.log(obj);
					for(let key in obj) {
						self.info[key] = obj[key];
					}
				}
			})
			
			wx.getStorage({
				key: 'skills',
				success: function(res) {
					console.log(res.data);
					self.info.skills = res.data
				}
			})
			
			wx.getStorage({
				key: 'award',
				success: function(res) {
					console.log(res.data);
					self.info.awards = "";
					for(let i in res.data) {
						self.info.awards += (res.data[i] + " ");
					}
				}
			})
			
			wx.getStorage({
				key: 'summary',
				success: function(res) {
					console.log(res.data);
					self.info.personal_summary = res.data
				}
			})
		},
		methods: {
			zNavigate(id) {
				uni.navigateTo({
					url:`/pages/${id}`
				});
				this.clicked = true;
			},
			
			test() {
				this.isShow = true;
			},
			
			changeImg() {
							let self = this;
							
							console.log(this.imgList[0]);
							console.log(JSON.stringify(this.uploadInfo));
							
							uni.uploadFile({
								url: baseurl + "pic.php",
								filePath: self.imgList[0],
								name: this.uploadInfo.basics.name,
								success: function (uploadFileRes) {
									console.log(uploadFileRes.data);
								}
							})
							uni.request({
								url:  baseurl + "api.php",
								method: "POST",
								header: {
									"content-type" : "application/json"
								},
								data: JSON.stringify(this.uploadInfo),
								
								success:function(res){
									self.isLoading = false;
									self.hasGenerate = true;
									console.log(res.data);
								}
							})
						},
						
						isEmpty() {
							let a = this.uploadInfo.basics.label;
							if(typeof  a == "undefined" || a == null || a == ""){
							    return false;
							}else{
							    return true;
							}
						},
						
						downloadResume() {
							this.urls = 'https://test.mashiroi.top/' + this.uploadInfo.basics.name + '_' + this.uploadInfo.basics.email + '/' + this.uploadInfo.basics.name + '.html';
							this.isShow = true;
							uni.downloadFile({
								url: 'https://test.mashiroi.top/' + this.uploadInfo.basics.name + '_' + this.uploadInfo.basics.email + '/' + this.uploadInfo.basics.name + '.html',
								success: function (res) {
									if (res.statusCode === 200) {
										console.log('下载成功');
									}
								},
								fail: function () {
									console.log("下载失败!");
								}
							})
						}
 		}
	}
</script>

<style>

</style>
