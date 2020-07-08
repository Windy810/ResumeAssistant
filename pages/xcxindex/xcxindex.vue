<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">星环简历小助手</block></cu-custom>
		
		<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
		 indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</view>
			</swiper-item>
		</swiper>

		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-titles text-orange "></text> 我的简历
			</view>
		</view>
		
		<view class="cu-card article" :class="isCard?'no-card':''">
			<view class="cu-item shadow">
				<view class="title"><view class="text-cut">简历生成</view></view>
				<view class="content">
					<image src="../../static/professional.jpg"
					 mode="aspectFill"></image>
					<view class="desc">
						<view class="text-content"> 快来这里生成最适合你的简历叭！</view>
						<view>
							<view class="cu-tag bg-red light sm round">求职</view>
							<view class="cu-tag bg-green light sm round">简历填写</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-titles text-orange "></text> 简历模板
			</view>
			<view class="blue">查看更多 </view>
		</view>
		<view class="padding bg-white">
			<view class="flex">
				<view class="flex-sub bg-grey padding-sm margin-xs radius cu-card article" :class="isCard?'no-card':''">
						<view class="title"><view class="text-cut">优雅大方</view></view>
						<image src="../../static/shensejianli.png"
							 mode="aspectFit"></image>
				</view>
				<view class="flex-sub bg-grey padding-sm margin-xs radius cu-card article" :class="isCard?'no-card':''">
						<view class="title"><view class="text-cut">低调奢华</view></view>
						<image src="../../static/dafang.png"
							 mode="aspectFit"></image>
				</view>
			</view>
		</view>

		
		
		
		<!--
		<basics v-if="PageCur=='basics'"></basics>
		<components v-if="PageCur=='component'"></components>
		<plugin v-if="PageCur=='plugin'"></plugin>
		-->
		<view class="cu-bar tabbar foot" style="background-color: #333333">
			
			<view class="action text-blue">
				<view class="cuIcon-homefill" @click="zNavigate('xcxindex/xcxindex')" ></view> 首页
			</view>
			
			<view class="action text-gray">
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
			<view class="action text-gray" @click="zNavigate('index/index')">
				<view class="cuIcon-my">
					<!--<view class="cu-tag badge"></view>-->
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
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3137828453,663440351&fm=26&gp=0.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3837831115,3507927040&fm=26&gp=0.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2099288684,3188540771&fm=26&gp=0.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3538590578,1416841631&fm=26&gp=0.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2250254747,2258156873&fm=26&gp=0.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3993180157,2007227979&fm=11&gp=0.jpg',
				}, {
					id: 6,
					type: 'image',
					url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2030320799,1347256038&fm=11&gp=0.jpg'
				}],
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