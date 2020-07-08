<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">个人总结</block></cu-custom>
		
		<view class="cu-form-group margin-top radius">
		    <textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" :placeholder="textareaAInput"></textarea>
		</view>
				
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-favor text-orange "></text> 贴士
			</view>
		</view>
				
		<view class="">
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg radius">
				<view class="cu-item" v-for="(value, index) in tag" :key="index" :data-text="value" @click="changeText">
					<text class="text-grey text-sm margin-tb">{{ value }}</text>
				</view>
			</view>
		</view>
		
		<button class="cu-btn bg-blue margin-tb-sm xl justify-center flex" @click="store">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				textareaAInput: '拥有良好的沟通协调能力，善于应变，能够快速适应新环境，熟悉使用办公软件，对网络热点敏感高，善于在文案中制造话题，运用热点传播效应。工作脚踏实地，团队意识强。',
				tag: ["开朗、外向，有较强的沟通能力，具备良好的客户开拓、服务能力，优秀的销售、谈判以及口笔表达交流的技巧", "有教育行业等销售工作经验者优先，对于教育理念以及家长心理有一定认知", "熟练掌握设计工具，具备用任意一种形式输出高保真可交互demo的能力","英文听说读写优秀，在国际公司或海外工作经历2年以上", "统计学、数据挖掘、机器学习背景，互联网广告3年以上工作经验，对互联网商业变现有浓厚的兴趣", "具有良好的沟通能力、推动能力、协调能力、团队融入能力，拥有强烈的责任心和团队合作精神", "具有扎实的数据结构和算法功底，熟练使用C/C++ II Python II Java II Scala", "5年年以上前端开发经验，精通html5/css3/javascript等web开发技术", "有一定创意和开拓能力，扎实的文字功底及较好的文案内容综合整合能力"],
			}
		},
		methods: {
			store() {
				wx.setStorage({
					key: 'summary',
					data: this.textareaAInput
				})
			},
			changeText(e) {
				console.log(e.currentTarget.dataset.text)
				this.textareaAInput = e.currentTarget.dataset.text
			}
		}
	}
</script>

<style>
</style>
