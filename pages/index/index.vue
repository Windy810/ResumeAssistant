<template>
	<view>
		<view v-if="isHide">
			<view v-if="canIUse">
				<view class="header">
					<image src="../../static/wx_login.png"></image>
				</view>
				
				<view class="content">
					<view>申请获取以下权限</view>
					<text>获得你的公开信息(昵称，头像等)</text>
				</view>
				
				<button class='bottom' type='primary' open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="bindGetUserInfo">
				    授权登录
				</button>
			</view>
			
			<view v-else>请升级微信版本</view>
		</view>
		
		<view v-else>
			<cu-custom bgColor="bg-gradual-blue" :isBack="false"><block slot="backText">返回</block><block slot="content">个人主页</block></cu-custom>
			
			<view class="UCenter-bg">
				<image :src="userinfo.avatarUrl" class="png" mode="widthFix"></image>
			    <view class="text-xl">{{userinfo.username}}</view>
			    <image src="../../static/wave.gif" mode="scaleToFill" class="gif-wave"></image>
			  </view>
			  
			  <view class="padding flex text-center text-grey bg-white shadow-warp">
			    <view class="flex flex-sub flex-direction solid-right">
			      <view class="text-xxl text-orange">{{userinfo.solvedid.length}}</view>
			      <view class="margin-top-sm">
			        <text class="cuIcon-attentionfill"></text> 我回答的</view>
			    </view>
			    <view class="flex flex-sub flex-direction solid-right">
			      <view class="text-xxl text-blue">{{userinfo.questionid.length}}</view>
			      <view class="margin-top-sm">
			        <text class="cuIcon-favorfill"></text> 我提问的</view>
			    </view>
			</view>
			  <view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg radius">
			    <view class="cu-item arrow">
			      <navigator class="content" url="/pages/about/log/log" hover-class="none">
			        <text class="cuIcon-formfill text-green"></text>
			        <text class="text-grey">我发布的</text>
			      </navigator>
			    </view>
			    <view class="cu-item arrow">
			      <view class="content" bindtap="showQrcode">
			        <text class="cuIcon-appreciatefill text-red"></text>
			        <text class="text-grey">我的测评</text>
			      </view>
			    </view>
			    <view class="cu-item arrow">
			      <button class="cu-btn content" open-type="feedback">
			        <text class="cuIcon-writefill text-cyan"></text>
			        <text class="text-grey">我的简历</text>
			      </button>
			    </view>
			    <view class="cu-item arrow">
			      <navigator class="content" url="/pages/about/test/list" hover-class="none">
			        <text class="cuIcon-creativefill text-orange"></text>
			        <text class="text-grey">我的关注</text>
			      </navigator>
				</view>
			</view>
			
			
			<view class="cu-bar tabbar foot" style="background-color: #333333">
				
				<view class="action text-gray">
					<view class="cuIcon-homefill" @click="zNavigate('xcxindex/xcxindex')" ></view> 首页
				</view>
				
				<view class="action text-grey">
					<view class="cuIcon-text" @click="zNavigate('xcxindex/jianli')"></view> 测评
				</view>
				
				<view class="action text-gray add-action">
					<button class="cu-btn cuIcon-add bg-blue shadow" @click="zNavigate('resume/index/index')"></button>
					创建
				</view>
				<view class="action text-blue">
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
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				canIUse: wx.canIUse('button.open-type.getUserInfo'),
				isHide: false,
				
				userinfo: {
					openid: "",
					username: "",
					avatarUrl: "",
					firstLogin: true,
					solvedid:[],
					questionid:[]
				}
			}
		},
		onLoad:function(){
			var  that = this;
			wx.getSetting({
				success: function(res) {
					if (res.authSetting['scope.userInfo']) {
						wx.getUserInfo({
							success: function(res) {
								that.userinfo.openid = res.userInfo.openid;
								that.userinfo.username = res.userInfo.nickName;
								that.userinfo.avatarUrl = res.userInfo.avatarUrl;
								wx.login({
									success: res => {
										console.log("用户的code: " + res.code);
									}
								});
							}
						});
					} else {
						that.setData({
							isHide: true
						});
					}
				}
			})
		},
		methods: {
			zNavigate(id) {
				uni.navigateTo({
					url:`/pages/${id}`
				})
			},
			
			bindGetUserInfo: function(e) {
				if (e.detail.userInfo) {
					//按下授权按钮
					var that = this;
					console.log("用户的信息如下: ");
					console.log(e.detail.userInfo);
					that.setData({
						isHide: false
					});
				} else {
					wx.showModal({
						title: '警告',
						content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
						showCancel: false,
						confirmText: '返回授权',
						success: function(res) {
						    // 用户没有授权成功，不需要改变 isHide 的值
						    if (res.confirm) {
								console.log('用户点击了“返回授权”');
						    }
						}
					});
				}
			} 
		}
	}
</script>

<style>
.UCenter-bg {
  background-color: #1CBBB4;
  background-size: cover;
  height: 550rpx;
  display: flex;
  justify-content: center;
  padding-top: 40rpx;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-weight: 300;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}

.UCenter-bg text {
  opacity: 0.8;
}

.UCenter-bg image {
  width: 200rpx;
  height: 200rpx;
}

.UCenter-bg .png {
	overflow: hidden;
	display: block;
	width: 150rpx;
	height: 150rpx;
	margin-right: 20rpx;
	border-radius: 50%;
}

.UCenter-bg .gif-wave{
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 99;
  mix-blend-mode: screen;  
  height: 100rpx;   
}

map,.mapBox{
  left: 0;
  z-index: 99;
  mix-blend-mode: screen;  
  height: 100rpx;   
}

map,.mapBox{
  width: 750rpx;
  height: 300rpx;
}
</style>
