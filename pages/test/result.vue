<template>
	<view>
	<cu-custom class="text-white bg-gradual-blue" :isBack="true">
		<block slot="backText">返回</block>
		<block slot="content">测试结果</block>
	</cu-custom>
		<image src="../../static/imgs/result.jpg" mode="widthFix" style="width:100%;"></image>
		<jyf-parser domain="https://6874-html-foe72-1259071903.tcb.qcloud.la" gesture-zoom lazy-load ref="article" selectable
		 show-with-animation use-anchor @error="error" @imgtap="imgtap" @linkpress="linkpress" @parse="parse" @ready="ready">加载中...</jyf-parser>
	</view>
</template>

<script>
	import parser from '../../components/jyf-parser/jyf-parser'; // HBuilderX 2.5.5 及以上可以不需要
	const testHtml = require('./html.js');
	export default {
		// HBuilderX 2.5.5 及以上可以不需要
		components: {
			'jyf-parser': parser
		},
		onReady() {
			this.$refs.article.setContent(testHtml);
		},
		methods: {
			parse(e) {
				console.log('parse finish', e);
			},
			ready(e) {
				console.log('ready', e);
				// console.log('api: getText', this.$refs.article.getText());
				console.log('imgList', this.$refs.article.imgList);
			},
			imgtap(e) {
				console.log('imgtap', e);
			},
			linkpress(e) {
				console.log('linkpress', e);
			},
			error(e) {
				console.error(e);
			}
		}
	}
</script>

<style>

</style>
