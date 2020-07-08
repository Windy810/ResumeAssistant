<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">奖项证书</block></cu-custom>
		<view class="content bg-white">
			<!-- 已选择标签列表 -->
			<view class="tagItemSelectContent">
				<view>
					<text>已有奖项证书：</text>
				</view>
				<view class="tagItemSelect" :key="idx" v-for="(tagText,idx) in selectList">
					<view>
						<text :data-text="tagText">{{tagText}}</text>
					</view>
					<image class="select_delete" src="../../../static/remove.png"
						:data-text="tagText"
					@tap="removeLabel"></image>
				</view>
			</view>
			<!-- 新增标签 -->
			<view class="newTagContent flex justify-center">
				<view class="newTagName">
					<input class="newTagInput" type="text" v-model="tagName"
						placeholder="输入新增标签" placeholder-style="font-size:14px;text-align:center;" />
				</view>
				<view class="newTagClick">
					<button class="newTagClickBtn" type="primary" size="default" @tap="createTags">添加</button>
				</view>
			</view>
			<!-- 标签库列表 -->
			<view class="tagContainer">
				<view>
					<text>常用奖项证书：</text>
				</view> </br>
				<view class="tagItem" v-bind:key="index" v-for="(tagText,index) in tagList">
					<text :data-text="tagText" @tap="selectLabel" @longpress="showDelLabel">{{tagText}}</text>
					<image class="tag_delete" src="../../../static/delete_white.png"
						:data-text="tagText"
						v-if="tag_del==true" @tap="delLabel">
				</image>
			</view>
			<view class="cancelDel" v-if="tag_del==true"
				@tap="cancelDel">
					取消删除
				</view>
			</view>									
		</view>
		
		<button class="cu-btn bg-blue margin-bottom-sm xl justify-center flex" @click="store">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tagName:'',
				selectList:['第七届大广赛全国平面一等奖','特等专业奖学金','大学英语六级', '普通话二级甲等', '日语二级证书'],
				tagList:['大学英语四级','大学英语六级', '日语一级证书', '日语二级证书', '普通话一级甲等', '普通话二级甲等', '全国计算机等级二级', '会计从业资格证书', 'c1类驾驶执照', '护士资格证', '教师资格证', '幼师资格证', '医师资格证'],
				tag_del:false
			}
		},
		methods: {
			store() {
				wx.setStorage({
					key: 'award',
					data: this.selectList
				})
			},
			zNavigate(id) {
				uni.navigateTo({
					url:`/pages/${id}`
				});
				this.clicked = true;
			},
			
			createTags: function(){
				let newTag = this.tagName.trim();
				if(newTag==''){
					return false;
				}
				let index = this.selectList.indexOf(newTag);
				this.tagName = '';
				if(newTag !== '' && index==-1){
					this.tagList.push(newTag);
					this.selectList.push(newTag);
				}
			},
			//从标签库选择标签
			selectLabel:function(e){
				let select_value=e.target.dataset.text;
				let index = this.selectList.indexOf(select_value);
				if(index==-1){
					//如果是-1，说明数组中没有对应的元素，这时可以添加
					this.selectList.push(select_value);
				}
			},
			//从已选择列表中移除
			removeLabel:function(e){
				console.log(1)
				let select_value=e.target.dataset.text;
				let index = this.selectList.indexOf(select_value);
				if (index > -1) {
					this.selectList.splice(index, 1);
				}
			},
			//标签库显示删除标识
			showDelLabel:function(e){
				this.tag_del=true;
			},
			//标签库删除动作
			delLabel:function(e){
				let select_value=e.target.dataset.text;
				let index = this.tagList.indexOf(select_value);
				let index2 = this.selectList.indexOf(select_value);
				if (index > -1) {
					//调用后台删除方法
					this.tagList.splice(index, 1);
				}
				if(index2>-1){
					this.selectList.splice(index2,1);
				}
			
				if(this.tagList.length==0){
					this.tag_del=false;
				}
			},
			//取消删除标签库标签
			cancelDel:function(e){
				this.tag_del=false;
			}
		}
	}
</script>

<style>
	.tagItemSelectContent{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		height: auto;
		width: auto;
		min-height: 30px;
		overflow-y: scroll;
		border: 1px solid #F2F2F2;
		padding: 10upx 20upx 10upx 10upx;
		margin: 10upx;
	}
	.tagItemSelect{
		display: flex;
		align-items: center;
		padding: 0 20upx 0 20upx;
		position: relative;
		font-size: 18px;
		margin:10upx;
		height: 30px;
		background-color: #007AFF;
		color: #FFFFFF;
		border-radius: 10px;
	}
	.select_delete{
		width: 15px;
		height: 15px;
		position: absolute;
		top: -6px;
		right:-7px;
	}
	.newTagContent{
		display: flex;
		justify-content: flex-start;
		margin: 20upx;
	}
	.newTagName{
		display: flex;
		align-items: center;
		width: 60%;
	}
	.newTagInput{
		border:1px solid #999999;
		font-size: 16px;
		width: 100%;
		height: 32px;
	}
	.newTagClick{
		display: flex;
		align-items: center;
		margin-left: 10upx;
	}
	.newTagClickBtn{
		height: 35px;
		line-height: 35px;
	}
	.tagContainer{
		margin: 10upx;
		font-size: 12px;
		display: flex;
		flex-wrap: wrap;
		border: 1px solid #F2F2F2;
		position: relative;
	}
	.tagItem{
		padding: 0px 10px 0px 10px;
		margin: 10upx;
		display: flex;
		align-items: center;
		height: 30px;
		background-color: #FF9900;
		color: #FFFFFF;
		border-radius: 5px;
	}
	.tag_delete{
		width: 13px;
		height: 13px;
		margin-left:10upx;
	}
	.cancelDel{
		position: absolute;
		bottom: 0;
		right: 5px;
	}
	
	.button_fina{
		display: flex;
		align-items: center;
		justify-content: center;  
		width: 100%;
		height: 100%;
	}
</style>


