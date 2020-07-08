const lists = [{
					title: "认识你的人倾向形容你为：", //题目
					src_title: "", //题目是否有图片
					isimg: 1, //1为文字 2为图片 选项
					code: 1, //1为单选 2为多选
					option: ["A", "B"], //选项
					true_option: [0,1], //正确选项
					current: [], //当前所选
					topic: true, //所选是否正确 默认为true为正确 控制选项高亮
					code2: true, //选项选择状态 默认为true false为选择
					alt: "正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案", //本题描述
					testList: [ //选项
						{
							name: "热情和敏感", //选项
							code: false, //是否为正确答案
							click_index: false, //选项是否选中
						},
						{
							name: "逻辑和明确",
							code: false,
							click_index: false,
						}
					]
				},
				{
					title: "下列哪一件事听起来比较吸引你？", //题目
					src_title: "", //题目是否有图片
					isimg: 1, //1为文字 2为图片 选项
					code: 1, //1为单选 2为多选
					option: ["A", "B"], //选项
					true_option: [0,1], //正确选项
					current: [], //当前所选
					topic: true, //所选是否正确 默认为" true为正确 控制选项高亮
					code2: true, //选项选择状态 默认为true false为选择
					alt: "正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案", //本题描述
					testList: [ //选项
						{
							name: "与恋人到有很多人且社交活动频繁的地方",
							code: false,
							click_index: false,
						},
						{
							name: "呆在家中与恋人做一些特别的事情,例如说\n观赏一部有趣的录影带并享用你最喜欢的外卖食物。",
							code: false,
							click_index: false,
						}
					]
				},
				{
					title: "你倾向通过以下哪种方式收集信息：", //题目
					src_title: "", //题目是否有图片
					isimg: 1, //1为文字 2为图片 选项
					code: 1, //1为单选 2为多选
					option: ["A", "B"], //选项
					true_option: [0, 1], //正确选项
					current: [], //当前所选
					topic: true, //所选是否正确 默认为" true为正确 控制选项高亮
					code2: true, //选项选择状态 默认为true false为选择
					alt: "正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案", //本题描述
					testList: [{
							name: "你对有可能发生之事的想像和期望",
							code: false,
							click_index: false,
						},
						{
							name: "你对目前状况的实际认知。",
							code: false,
							click_index: false,
						}
					]
				},
				{
					title: "哪种特质更像你：", //题目
					src_title: "", //题目是否有图片
					isimg: 1, //1为文字 2为图片 选项
					code: 1, //1为单选 2为多选
					option: ["A", "B"], //选项
					true_option: [0, 1], //正确选项
					current: [], //当前所选
					topic: true, //所选是否正确 默认为" true为正确 控制选项高亮
					code2: true, //选项选择状态 默认为true false为选择
					alt: "正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案", //本题描述
					testList: [{
							name: "友善而仁慈",
							code: false,
							click_index: false,
						},
						{
							name: "冷静而理智",
							code: false,
							click_index: false,
						}
					]
				},
				{
					title: "你倾向通过以下哪种方式收集信息：", //题目
					src_title: "", //题目是否有图片
					isimg: 1, //1为文字 2为图片 选项
					code: 1, //1为单选 2为多选
					option: ["A", "B"], //选项
					true_option: [0, 1], //正确选项
					current: [], //当前所选
					topic: true, //所选是否正确 默认为" true为正确 控制选项高亮
					code2: true, //选项选择状态 默认为true false为选择
					alt: "正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案", //本题描述
					testList: [{
							name: "你对有可能发生之事的想像和期望",
							code: false,
							click_index: false,
						},
						{
							name: "你对目前状况的实际认知。",
							code: false,
							click_index: false,
						}
					]
				},
				{
					title: "你倾向通过以下哪种方式收集信息：", //题目
					src_title: "", //题目是否有图片
					isimg: 1, //1为文字 2为图片 选项
					code: 1, //1为单选 2为多选
					option: ["A", "B"], //选项
					true_option: [0, 1], //正确选项
					current: [], //当前所选
					topic: true, //所选是否正确 默认为" true为正确 控制选项高亮
					code2: true, //选项选择状态 默认为true false为选择
					alt: "正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案", //本题描述
					testList: [{
							name: "你对有可能发生之事的想像和期望",
							code: false,
							click_index: false,
						},
						{
							name: "你对目前状况的实际认知。",
							code: false,
							click_index: false,
						}
					]
				},
				{
					title: "请选择下列正确选项4",
					src_title: "../../static/banner02.jpg", //题目是否有图片
					code: 2, //1为单选 2为多选
					option: ["A", "B", "C", "D"],
					true_option: [1, 2, 3], //正确选项
					current: [1, 2, 3], //当前所选
					topic: true,
					code2: false,
					isimg: 1, //1为文字 2为图片 选项
					alt: "正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案",
					testList: [{
							name: "错误答案",
							code: false,
							click_index: false,
						},
						{
							name: "正确答案",
							code: false,
							click_index: true,
						},
						{
							name: "正确答案",
							code: false,
							click_index: true,
						},
						{
							name: "正确答案",
							code: false,
							click_index: true,
						}
					],
				},
				{
					title: "请选择下列正确选项5", //题目
					src_title: "", //题目是否有图片
					isimg: 1, //1为文字 2为图片 选项
					code: 1, //1为单选 2为多选
					option: ["A", "B", "C", "D"], //选项
					true_option: [0], //正确选项
					current: [], //当前所选
					topic: "", //所选是否正确 默认为true为正确 控制选项高亮
					code2: true, //选项选择状态 默认为true false为选择
					alt: "正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案", //本题描述
					testList: [ //选项
						{
							name: "正确答案", //选项
							code: false, //是否为正确答案
							click_index: false, //选项是否选中
						},
						{
							name: "错误答案",
							code: false,
							click_index: false,
						},
						{
							name: "错误答案",
							code: false,
							click_index: false,
						},
						{
							name: "错误答案",
							code: false,
							click_index: false,
						}
					]
				},
				{
					title: "请选择下列正确选项6", //题目
					src_title: "", //题目是否有图片
					isimg: 1, //1为文字 2为图片 选项
					code: 2, //1为单选 2为多选
					option: ["A", "B", "C", "D", "E"], //选项
					true_option: [0, 2, 4], //正确选项
					current: [], //当前所选
					topic: "", //所选是否正确 默认为true为正确 控制选项高亮
					code2: true, //选项选择状态 默认为true false为选择
					alt: "正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案", //本题描述
					testList: [ //选项
						{
							name: "正确答案",
							code: false,
							click_index: false,
						},
						{
							name: "错误答案",
							code: false,
							click_index: false,
						},
						{
							name: "正确答案",
							code: false,
							click_index: false,
						},
						{
							name: "错误答案",
							code: false,
							click_index: false,
						},
						{
							name: "正确答案",
							code: false,
							click_index: false,
						}
					]
				},
				{
					title: "请选择下列正确选项7", //题目
					src_title: "", //题目是否有图片
					isimg: 1, //1为文字 2为图片 选项
					code: 2, //1为单选 2为多选
					option: ["A", "B", "C", "D"], //选项
					true_option: [1, 3], //正确选项
					current: [], //当前所选
					topic: "", //所选是否正确 默认为true为正确 控制选项高亮
					code2: true, //选项选择状态 默认为true false为选择
					alt: "正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案", //本题描述
					testList: [{
							name: "错误答案",
							code: false,
							click_index: false,
						},
						{
							name: "正确答案",
							code: false,
							click_index: false,
						},
						{
							name: "错误答案",
							code: false,
							click_index: false,
						},
						{
							name: "正确答案",
							code: false,
							click_index: false,
						}
					]
				},
				{
					title: "请选择下列正确选项8",
					src_title: "", //题目是否有图片
					code: 2, //1为单选 2为多选
					option: ["A", "B", "C", "D"],
					true_option: [1, 2, 3], //正确选项
					current: [], //当前所选
					topic: "",
					code2: true,
					isimg: 2, //1为文字 2为图片 选项
					alt: "正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案",
					testList: [{
							name: "../static/banner01.jpg",
							code: false,
							click_index: false,
						},
						{
							name: "../static/banner02.jpg",
							code: false,
							click_index: false,
						},
						{
							name: "../static/banner03.jpg",
							code: false,
							click_index: false,
						},
						{
							name: "../static/banner04.jpg",
							code: false,
							click_index: false,
						}
					],
				},
				{
					title: "哪种特质更像你：", //题目
					src_title: "", //题目是否有图片
					isimg: 1, //1为文字 2为图片 选项
					code: 1, //1为单选 2为多选
					option: ["A", "B"], //选项
					true_option: [0, 1], //正确选项
					current: [], //当前所选
					topic: true, //所选是否正确 默认为" true为正确 控制选项高亮
					code2: true, //选项选择状态 默认为true false为选择
					alt: "正确答案正确答案正确答案正确答案正确答案正确答案正确答案正确答案", //本题描述
					testList: [{
							name: "友善而仁慈",
							code: false,
							click_index: false,
						},
						{
							name: "冷静而理智",
							code: false,
							click_index: false,
						}
					]
				},
			]

			export default {
				lists,
			}
