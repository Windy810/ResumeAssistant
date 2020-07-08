<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="false"><block slot="backText">返回</block><block slot="content">星环简历小助手</block></cu-custom>
		
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue "></text> 测评结果
			</view>
			<!--
			<view class="action">
				<button class="cu-btn bg-green shadow" @tap="showModal" data-target="gridModal">设置</button>
			</view>-->
		</view>
		<view class="cu-modal" :class="modalName=='gridModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop>
				<radio-group class="block" @change="Gridchange">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item,index) in 4" :key="index">
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub"  @click="zNavigate('test/result')">{{index +4}} 列</view>
								<radio class="round" :value="(index + 4) + ''" :class="gridCol==index+4?'checked':''" :checked="gridCol==index+4"></radio>
							</label>
						</view>
					</view>
				</radio-group>
				<view class="cu-list menu text-left solid-top">
					<view class="cu-item">
						<view class="content">
							<text class="text-grey">边框</text>
						</view>
						<view class="action">
							<switch @change="Gridswitch" :class="gridBorder?'checked':''" :checked="gridBorder?true:false"></switch>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
			<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*2"  @click="zNavigate('test/result')">
				<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
					<view class="cu-tag badge" v-if="item.badge!=0">
						<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
					</view>
				</view>
				<text>{{item.name}}</text>
			</view>
		</view>

		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-blue "></text> 职业测评
			</view>
		</view>
		<view class="cu-list menu-avatar">
			<view class="cu-item" @click="zNavigate('test/test')">
				<view class="cu-avatar lg" style="background-image:url(../../static/xuqiu.jpg);"></view>
				<view class="content">
					<view class="text-black">职业性格测评</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							你的职业性格是什么样子
						</view> </view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">22:20</view>
				</view>
			</view>
			<view class="cu-item">
				<view class="cu-avatar lg" style="background-image:url(../../static/87508.png);"></view>
				<view class="content">
					<view class="text-black">职业需求测评</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
						你需要怎样的工作
						</view> </view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">22:20</view>
				</view>
			</view><view class="cu-item">
				<view class="cu-avatar lg" style="background-image:url(../../static/timg.jpg);"></view>
				<view class="content">
					<view class="text-black">职业竞争力测评</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							面对一个岗位你的优势在哪里
						</view> </view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">22:20</view>
				</view>
			</view>
			
			<view class="padding flex flex-wrap justify-between align-center bg-white">
				<view></view>
				<button class="cu-btn round center bg-blue">查看全部</button>
				<view></view>
			</view>
			
		</view>
		
		
		
		
		
		<!--
		<basics v-if="PageCur=='basics'"></basics>
		<components v-if="PageCur=='component'"></components>
		<plugin v-if="PageCur=='plugin'"></plugin>
		-->
		<view class="cu-bar tabbar foot" style="background-color: #333333">
			
			<view class="action text-gray">
				<view class="cuIcon-homefill" @click="zNavigate('xcxindex/xcxindex')" ></view> 首页
			</view>
			
			<view class="action text-blue">
				<view class="cuIcon-text" @click="zNavigate('xcxindex/jianli')"></view> 测评
			</view>
			
			<view class="action text-gray add-action">
				<button class="cu-btn cuIcon-add bg-blue shadow" @click="zNavigate('resume/index/index')"></button>
				创建
			</view>
			<view class="action text-grey">
				<view class="cuIcon-friendfill" @click="zNavigate('xcxindex/experience')">
					<!--<view class="cu-tag badge">99</view>-->
				</view>
				经验
			</view>
			<view class="action text-grey">
				<view class="cuIcon-friendfill" @click="zNavigate('index/index')">
					<!--<view class="cu-tag badge">99</view>-->
				</view>
				我的
			</view>
		</view>
		<!--
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="basics">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/basics' + [PageCur=='basics'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='basics'?'text-green':'text-gray'">简历</view>
			</view>
			<view class="action" @click="NavChange" data-cur="component">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/component' + [PageCur == 'component'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='component'?'text-green':'text-gray'">求职</view>
			</view>
			<view class="action" @click="NavChange" data-cur="plugin">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/plugin' + [PageCur == 'plugin'?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='plugin'?'text-green':'text-gray'">我的</view>
			</view>
		</view>-->
	</view>
</template>

<script>
	export default {
		data() {
		return {
			cardCur: 0,
				cuIconList: [{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 0,
					name: '职业兴趣'
				}, {
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '能力倾向'
				}, {
					cuIcon: 'commentfill',
					color: 'yellow',
					badge: 0,
					name: '价值观'
				}, {
					cuIcon: 'discoverfill',
					color: 'olive',
					badge: 0,
					name: '性格'
				}],
				modalName: null,
				gridCol: 4,
				gridBorder: false,
				menuBorder: false,
				menuArrow: false,
				menuCard: false,
				skin: false,
				listTouchStart: 0,
				listTouchDirection: null,
				dotStyle: false,
				towerStart: 0,
				direction: '',
				PageCur: 'basics',
				isCard: false
			}
		},
		onLoad() {
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
		},
		methods: {
			zNavigate(id) {
				uni.navigateTo({
					url:`/pages/${id}`
				})
			},
			IsCard(e) {
				this.isCard = e.detail.value
			},
			DotStyle(e) {
					this.dotStyle = e.detail.value
				},
				// cardSwiper
				cardSwiper(e) {
					this.cardCur = e.detail.current
				},
				// towerSwiper
				// 初始化towerSwiper
				TowerSwiper(name) {
					let list = this[name];
					for (let i = 0; i < list.length; i++) {
						list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
						list[i].mLeft = i - parseInt(list.length / 2)
					}
					this.swiperList = list
				},
			
				// towerSwiper触摸开始
				TowerStart(e) {
					this.towerStart = e.touches[0].pageX
				},
			
				// towerSwiper计算方向
				TowerMove(e) {
					this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
				},
			
				// towerSwiper计算滚动
				TowerEnd(e) {
					let direction = this.direction;
					let list = this.swiperList;
					if (direction == 'right') {
						let mLeft = list[0].mLeft;
						let zIndex = list[0].zIndex;
						for (let i = 1; i < this.swiperList.length; i++) {
							this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
							this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
						}
						this.swiperList[list.length - 1].mLeft = mLeft;
						this.swiperList[list.length - 1].zIndex = zIndex;
					} else {
						let mLeft = list[list.length - 1].mLeft;
						let zIndex = list[list.length - 1].zIndex;
						for (let i = this.swiperList.length - 1; i > 0; i--) {
							this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
							this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
						}
						this.swiperList[0].mLeft = mLeft;
						this.swiperList[0].zIndex = zIndex;
					}
					this.direction = ""
					this.swiperList = this.swiperList
				},
			},
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	
</script>

<style>
	.tower-swiper .tower-item {
		transform: scale(calc(0.5 + var(--index) / 10));
		margin-left: calc(var(--left) * 100upx - 150upx);
		z-index: var(--index);
	}
</style>