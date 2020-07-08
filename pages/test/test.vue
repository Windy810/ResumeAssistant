<template>
	<view class="questions">
		<cu-custom class="text-white bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">MBTI职业性格测试</block>
		</cu-custom>
		
		
		<swiper :current="swiperIndex - 1" @change="swiperChange" class="questions-cont">
			<swiper-item v-for="(item,index) in lists" :key="index" class="swiper-item">
				<view class="test-main radius shadow-lg">
					<view class="test-title">
						<text v-if="item.code == 1">单选</text>
						<text v-else>多选</text>
						{{item.title}}
						<view class="test-title-img" v-if="item.src_title != ''">
							<image :src="item.src_title"></image>
						</view>
					</view>
					<view class="test-cont">
						<view v-for="(item2,index2) in item.testList" :key="index2" @click="testItem(index,index2,item.code)" 
						:class="{active_true:(!item.code2 && item2.code) || (item.code == 2 && item2.click_index)||(item.code == 1 && item2.click_index && !item2.code) || (item.code == 2 && item2.click_index && !item2.code && !item.code2)}">
							<view>{{item.option[index2]}}</view>
							<text v-if="item.isimg == 1">{{item2.name}}</text>
							<image v-else :src="item2.name"></image>
						</view>
					</view>
				</view>
			<view class="flex justify-around">
				<view class="test-btn shadow-blur" @click="Previous(index)" v-if="swiperIndex!=1">
					上一题
				</view>
				
				<view class="test-btn shadow-blur" @click="showFixed">查看答卷{{swiperIndex}}/{{lists.length}}</view>
				<view class="test-btn shadow-blur" @click="showModal" v-if="swiperIndex==lists.length">
					提交
				</view>
				<view class="test-btn shadow-blur" @click="Next(index,item.code)" v-if="swiperIndex!=lists.length">
					下一题
				</view>
			</view>
			</swiper-item>
		</swiper>
		<view class="fixed-bottom" :class="{active:show_hide}" @click.stop="hideFixed">
			<view class="tibiao" @click.stop>
				<view class="tibiao-bar">
					<text class="tibiao-no3">{{choice[2]}}</text><!-- 未选择 -->
					<view class="tibiao-null"></view>
					
					<text class="tibiao-yes2">{{choice[0]}}</text><!-- 选择正确 -->
					<view class="tibiao-yes"></view>
				</view>
				<view>
					<text v-for="(item,index) in lists.length" :key="index"
					:class="{active_o:lists[index].topic && !lists[index].code2,active_t:!lists[index].topic && !lists[index].code2}" @click="topic(index)">{{item}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import test from "../../common/test.js";
	export default {
		data() {
			return {
				swiperIndex:1,//swiper 当前下标
				show_hide:false,//题标是否隐藏 默认false 为隐藏
				istest:3,//1为练习 2为模拟 3为考试
				choice:[3,2,6],//[选择正确，选择错误，未选择],
				lists:[]
			};
		},
		onLoad() {
			console.log("hello");
			let that = this;
			that.lists = test.lists;
			console.log(test.lists+"fuck");
			
		},
		methods:{
			showModal(){// 左上角交卷
			
				uni.showModal({
				    title: '提示',
				    content: '确认要交卷吗？',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
							uni.navigateTo({
								url:"../test/result"
							})()
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				
			},
			swiperChange(e){ //swiper滑动
				this.swiperIndex = e.detail.current + 1; //当前题
			},
			testItem(a,b,c){// a:当前题  b:当前选项 c:单选多选】
				let that = this
				if(that.lists[a].code2){//当前题是否已选
					that.lists[a].testList[b].click_index = !that.lists[a].testList[b].click_index//切换选项选中状态
					if(c == 1){//为1 表示单选
						that.lists[a].code2 = false //为false 则表示已选
						that.lists[a].current = [b]

							that.lists[a].topic = true
							that.swiperIndex ++
							that.choice[0] ++
							that.choice[2] --

					}
				}
			},
			Previous(e){
				console.log(this.swiperIndex);
				this.swiperIndex--
				console.log(this.swiperIndex);
			},
			Next(e,c){
				console.log(this.swiperIndex);
				if(c==2){
					this.lists[e].code2 = false
					this.choice[0] ++
					this.choice[2] --
				}
				this.swiperIndex++
				console.log(this.swiperIndex);
			},
			btnNext(e){ //多选 确认按钮
				let that = this
				let a = []
				that.lists[e].testList.forEach( (item,index) =>{
					if(item.click_index == true){
						that.lists[e].current.push(index)
						if(item.code == true){
							a.push(index)
						}
					}
				})
				console.log(that.lists[e].current.length > 0);
				if(that.lists[e].current.length > 0){
					that.lists[e].code2 = false
					if(a.length == that.lists[e].true_option.length && a.length == that.lists[e].current.length){
						that.lists[e].topic = true
						this.swiperIndex ++
						that.choice[0] ++
						that.choice[2] --
					}else{
						that.lists[e].topic = false
						that.choice[1] ++
						that.choice[2] --
					}
				}else{
					uni.showToast({
					    title: '请选择选项',
						icon:'none',
					    duration: 1500
					});
				}
			},
			topic(e){
				console.log(this.lists[e].true_option,this.lists[e].current,!this.lists[e].code2);
				this.swiperIndex = e + 1
				this.show_hide = !this.show_hide
			},
			showFixed(){
				this.show_hide = !this.show_hide
			},
			hideFixed(){
				this.show_hide = !this.show_hide
			},
			nullFixed(){
				//占位 不可删
			}
		}
	}
</script>

<style lang="less">
	page{
		height:100%;
		background:#f5f5f5;
	}
	.questions{
		height:100%;
		position: relative;
		.test-header{
			position: absolute;
			top:0;
			left:0;
			z-index: 10;
			width: 690rpx;
			padding:0 30rpx;
			display: flex;
			justify-content: space-between;
			height:34px;
			line-height: 34px;
			border-bottom: solid 1px #ddd;
			background: #f5f5f5;
			view{
				color:#555;
				font-size: 14px;
				display: flex;
				image{
					margin-top:10px;
					margin-right:5px;
					width:14px;
					height:14px;
				}
				&:nth-child(1){
					font-size: 12px;
					text{
						color:#666;
					}
				}
				&:nth-child(3){
					font-size: 12px;
					text{
						color:#666;
					}
				}
			}
		}
		.questions-cont{
			height:100%;
			display: flex;
			flex-wrap: nowrap;
			transition: all .5s;
			.swiper-item{
				width:100vw;
				min-width:100vw;
				max-width:100vw;
				height:100%;
				overflow: auto;
				.test-main{
					padding:0 20rpx;
					margin:49px 30rpx;
					margin-bottom: 20px;
					background:#fff;
					.test-title{
						font-size: 16px;
						color:#333;
						padding:20rpx 0;
						text{
							font-size: 10px;
							color:#fff;
							background:#aaa;
							padding:2px 5px;
							margin-right:5px;
							border-radius: 3px;
						}
						.test-title-img{
							margin:20rpx auto;
							text-align: center;
							image{
								max-width:500rpx;
								max-height:250rpx;
							}
						}
					}
					.test-cont{
						display: flex;
						flex-direction: column;
						padding-bottom: 20rpx;
						&>view{
							min-height: 40px;
							line-height: 40px;
							display: flex;
							view{
								width:30px;
								height:30px;
								line-height: 30px;
								margin-top:4px;
								margin-right:7px;
								font-size: 14px;
								border:solid 1px #ddd;
								border-radius: 50%;
								box-shadow:2px 2px 5px #e5e5e5;
								text-align: center;
								color:#666;
							}
							image{
								max-width: 560rpx;
								max-height:280rpx;
								margin-bottom: 20rpx;
							}
							text{
								font-size: 13px;
								color:#555;
							}
							&.active_true{
								view{
									background:#1a7bb9;
									border:solid 1px #1a7bb9;
									color:#fff;
									font-size: 15px;
								}
								text{
									color:#1a7bb9;
								}
							}
							&.active{
								view{
									background:#FF6667;
									border:solid 1px #FF6667;
									color:#fff;
									font-size: 15px;
								}
								text{
									color:#FF6667;
								}
							}
						}
					}
				}
				.test-btn{
					background:#00aaff;
					font-size: 14px;
					border-radius: 6px;
					text-align: center;
					line-height: 40px;
					color:#fff;
					height:40px;
					width:100px;
					margin:20px auto;
				}
				.test-describe{
					padding:0 20rpx;
					margin-bottom: 20px;
					border-top:solid 1px #ccc;
					.describe-title{
						height:48px;
						line-height: 48px;
						display: flex;
						text{
							color:#666;
							font-size: 12px;
						}
						image{
							width:14px;
							height:14px;
							margin-top:17px;
							margin-left:3px;
						}
					}
					.describe-cont{
						background:#f5f5f5;
						padding:12rpx;
						display: flex;
						flex-direction: column;
						&>text{
							color:#666;
							font-size: 14px;
							line-height: 24px;
							&:nth-child(3){
								font-size: 12px;
								line-height: 20px;
							}
						}
					}
				}
			}
		}
		.fixed-bottom{
			width:100%;
			height:100%;
			position: fixed;
			left:0;
			top:0;
			z-index: 999;
			background:rgba(0,0,0,.4);
			pointer-events: none;
			opacity: 0;
			transition:all .3s;
			.tibiao{
				position: absolute;
				bottom:0;
				left:0;
				background: #fff;
				width:100%;
				overflow: auto;
				height: 50%;
				padding:30rpx 20rpx;
				.tibiao-bar{
					display: flex;
					flex-direction: row-reverse;
					padding-bottom: 30rpx;
					border-bottom: solid 1px #ddd;
					height:16px;
					line-height: 16px;
					view{
						width:10px;
						height:10px;
						border-radius: 50%;
						margin-left: 30rpx;
						margin-top:3px;
						&.tibiao-yes{
							background:#1a7bb9;
						}
						&.tibiao-no{
							background:#FF6667;
						}
						&.tibiao-null{
							background:#999;
						}
					}
					text{
						margin-left:3px;
						display: inline-block;
						font-size: 13px;
						&.tibiao-yes2{
							color:#1a7bb9;
						}
						&.tibiao-no2{
							color:#FF6667;
						}
						&.tibiao-no3{
							color:#666;
						}
					}
				}
				&>view{
					&:nth-child(2){
						text{
							margin-left:22rpx;
							margin-top:10rpx;
							display: inline-block;
							width:100rpx;
							height:100rpx;
							line-height: 100rpx;
							text-align: center;
							border-radius: 50%;
							font-size: 14px;
							color:#666;
							background:#e4e4e4;
							&:nth-child(6n+1){
								margin-left:0;
							}
							&.active_o{
								background:#beddf1;
								color:#1a7bb9;
							}
							&.active_t{
								background:#beddf1;
								color:#1a7bb9;
							}
						}
					}
				} 
			}
			&.active {
				opacity: 1;
				pointer-events: auto;
				transition:all .3s;
			}
		}
	}
	
	
</style>
