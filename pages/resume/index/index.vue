<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">个人简历制作</block></cu-custom>
		
		<view class="flex solid-bottom padding justify-around">
		<button class="cu-btn bg-cyan margin-tb-sm lg" @click="zNavigate('resume/tResume/tResume')">制作简历</button>
		<button class="cu-btn bg-blue margin-tb-sm lg" @tap="showModal" data-target="DialogModal1">提交简历</button>
		</view>
		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">确认投递</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl" v-if="choseName !== ''">
					确定向 {{ choseName }} 投递简历吗？
				</view>
				<view class="padding-xl" v-else>
					您还没进行选择，请先进行选择！
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal" v-if="choseName !== ''">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="hideModal">确定</button>	
					</view>
				</view>
			</view>
		</view>
		
		<view class="padding-sm radius">
			<uni-collapse accordion="true" v-if="clicked" class="flex">
				<view v-for="item in cc" :key="item.name" class=" radius">
					<uni-collapse-item :title="item.name">
						<view style="padding: 30rpx;" class="cu-list menu">
							<view class="cu-item" v-for="(value, key, index) in item" :key="index">
								<view class="content">
									<text class="cuIcon-title text-green"></text>
									<text class="text-grey">{{ key }}</text>
								</view>
								<view class="action">
									<text class="text-grey text-sm">{{ value }}</text>
								</view>
							</view>
							<button @click="getChoseName(item.name)" class="cu-btn bg-blue margin-sm fr padding-sm lg">选择</button>
						</view>
					</uni-collapse-item>
				</view>
			</uni-collapse>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				CustomBar: this.CustomBar,
				modalName: null,
				radio: 'radio1',
				i: 0,
				
				clicked: false,
				couldSelect: true,
				list: 'test',
				choseName: '',
				
				cc: [
					{name: '左程云', 'from': '华中科技大学，芝加哥大学', education: '硕士',  '': '曾就职于亚马逊，担任技术专家，IBM，GrowingIo，百度等，《程序员代码面试指南》作者，从2010年起专注刷题至今，拥有10年算法刷题经验'},
					{name: 'Fish', 'from': '信息学院', education: '大二', intro: 'not good!'},
					{name: '天天', 'from': '交通学院', education: '大一', intro: 'not good!'},
					{name: 'test', 'from': '信息学院', classes: '大一', intro: 'not good!'},
					{name: '我', 'from': '信息学院', classes: '大一', intro: 'not good!'},
					{name: 'test6', 'from': '信息学院', classes: '大一', intro: 'not good!'},
					{name: 'test7', 'from': '信息学院', classes: '大一', intro: 'not good!'},
					{name: 'test8', 'from': '信息学院', classes: '大一', intro: 'not good!'},
					{name: 'test9', 'from': '信息学院', classes: '大一', intro: 'not good!'},
					{name: 'test10', 'from': '信息学院', classes: '大一', intro: 'not good!'},
					{name: 'test11', 'from': '信息学院', classes: '大一', intro: 'not good!'},
					{name: 'test12', 'from': '信息学院', classes: '大一', intro: 'not good!'},
					{name: 'test13', 'from': '信息学院', classes: '大一', intro: 'not good!'},
					{name: 'test14', 'from': '信息学院', classes: '大一', intro: 'not good!'},
					{name: 'test15', 'from': '信息学院', classes: '大一', intro: 'not good!'},
					{name: 'test16', 'from': '信息学院', classes: '大一', intro: 'not good!'},
				],
				
				info: ['姓名', '学院', '学历', '介绍']
			};
		},
		methods: {
			zNavigate(id) {
				uni.navigateTo({
					url:`/pages/${id}`
				});
				this.clicked = true;
			},
			
			getChoseName(name) {
				if (this.couldSelect === true) {
					this.choseName = name;	
				}
				console.log(this.choseName);
				this.couldSelect = false;
			},
			
			changeSelectName() {
				
			},
			
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			RadioChange(e) {
				this.radio = e.detail.value
			},
			ChooseCheckbox(e) {
				let items = this.checkbox;
				let values = e.currentTarget.dataset.value;
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					if (items[i].value == values) {
						items[i].checked = !items[i].checked;
						break
					}
				}
			}
		}
	}
</script>

<style>
	button .cu-tag {
		position: absolute;
		top: 8upx;
		right: 8upx;
	}
</style>
