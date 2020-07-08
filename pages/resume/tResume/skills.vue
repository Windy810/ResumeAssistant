<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">相关技能</block></cu-custom>
		
		<view class="cu-form-group margin-top">
			<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" :placeholder="text"></textarea>
		</view>
		
		<button class="cu-btn bg-blue margin-tb-sm xl justify-center flex" @click="store">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: "word (熟练)，excel (熟练)。填写技能最好和求职岗位的相关性较高，主要包含专业技能、专业课程。如果实在技能较少可以写办公软件方面的技能并说明掌握程度。"
			}
		},
		methods: {
			store() {
				wx.setStorage({
					key: 'skills',
					data: this.text
				})
			}
		}
	}
</script>

<style>
</style>
