module.exports = `


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="viewport"content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes"/>
<META http-equiv=Content-Type content="text/html; charset=gb2312">
<LINK 
href="/Css/report28_m.css" type=text/css rel=stylesheet>
<style>
body{padding:25px;}
body{font-family:"微软雅黑";background:#FFFFFF}

	.a-tips-Article-QQ:link {color:#66CCFF;border-bottom:1px dotted #0781C7;text-decoration:none}
.a-tips-Article-QQ:hover {color:#66CCFF;background:#EBF2FA;text-decoration:none}
.a-tips-Article-QQ:visited {color:#66CCFF;border-bottom:1px dotted #0781C7;text-decoration:none}


.mululink:link{
color:#000000;
text-decoration:none;

}
.mululink:hover {color:#000000;background:#EBF2FA;text-decoration:none}
.mululink:visited {color:#66CCFF;text-decoration:none}			
				/* General */
				#content h3 { margin: 2em 0 .5em 0; }
								
				/* Basic Bar Graph */
				.graph { 
					position: relative; /* IE is dumb */
					width: 48%; 
					border: 1px solid #B1D632; box-sizing: border-box;
					padding: 2px; 
					margin-bottom: .5em;					
				}
				.graph2 { 
					position: relative; /* IE is dumb */
					width: 48%; 
					border: 1px solid #B1D632;  box-sizing: border-box;
						padding: 2px;  
					margin-bottom: .5em;
					
				}
				.graph .bar { 
					display: block;	
					position: relative;
					background: #B1D632; 
					text-align: right; 
					color: #333; 
					height: 1.5em; 
					line-height:  1.5em;	
					float:left									
				}
				.graph2 .bar { 
					display: block;	
					position:relative;
						background: #B1D632; 
					text-align: left; 
					color: #333; 
					height:  1.5em; 
					line-height:  1.5em;
						float:right								
				}
				.graph .bar span { position: relative;  font-size:12px}
				
				.graph2 .bar span { position: relative;  font-size:12px} /* This extra markup is necessary because IE doesn't want to follow the rules for overflow: visible */
				 
				 
				/* Complex Bar Graph */
				dl { 
					margin: 0; 
					padding: 0; 					
				}
				dt { 
					position: relative; /* IE is dumb */
					clear: both;
					display: block; 
					float: left; 
					width: 104px; 
					height: 20px; 
					line-height: 20px;
					margin-right: 17px;              
					font-size: .75em; 
					text-align: right; 
				}
				dd { 
					position: relative; /* IE is dumb */
					display: block; 				
					float: left;	 
					width: 194px; 
					height: 20px; 
					margin: 0 0 15px; 
					background: url("/lee/images/g_colorbar.jpg"); 
				}
				* html dd { float: none; } /* IE is dumb; Quick IE hack, apply favorite filter methods for wider browser compatibility */
				
				dd div { 
					position: relative; 
					background: url("/lee/images/g_colorbar2.jpg"); 
					height: 20px; 
					width: 75%; 
					
					color:#333333;
					text-align:right; 
				}
				dd div strong { 
					position: absolute; 
					right: -5px; 
					top: -2px; 
					display: block; 
					background: url("/mbti2/images/g_marker.gif"); 
					height: 24px; 
					width: 9px; 
					text-align: left;
					text-indent: -9999px; 
					overflow: hidden;
				}
				
				
				
				/* Vertical Bar Graph */
				#vertgraph { 					
					width: 178px; 
					height: 207px; 
					position: relative; 
					
					
				}
				#vertgraph ul { 
					width: 178px; 
					height: 207px; 
					margin: 0; 
					padding: 0; 
					
				 }
				#vertgraph ul li {  
					position: absolute; 
					width: 28px; 
					height: 160px; 
					bottom: 34px; 
					padding: 0 !important; 
					margin: 0 !important; 
				
					text-align: center; 
					font-weight: bold; 
					color: white; 
					
					line-height: 2.5em;
				}
			
				#vertgraph li.critical { left: 24px; background-position: 0px bottom !important; }
				#vertgraph li.high { left: 101px; background-position: -28px bottom !important; }
				#vertgraph li.medium { left: 176px; background-position: -56px bottom !important; }
				#vertgraph li.low { left: 251px; background-position: -84px bottom !important; }
				#vertgraph li.info { left: 327px; background-position: -112px bottom !important; }
				
				/* 
				Note: The use of !important is to over write my site stlyesheets for these examples
				*/
				#container{
margin:0px;
padding:0px;
width:100px;
height:24px;
position:absolute;
}
#one,#two{
margin:0.5%;
padding:0.5%;
float:left;


line-height:1.5em;

}
p{text-align:justify}				
			</style>
            
            
 
 <style>
 .style123{font-size:11pt;line-height:1.8;font-family:"微软雅黑"}
 /*关键字浮层*/
.wckey-tips{width:232px;height:132px;padding:2px 2px 4px 4px;border:#4d637c 1px solid; background:#ebf2fa;color:#666;font-size:12px; font-family:宋体,Arial,sans-serif;line-height:18px;overflow:hidden;zoom:1;}
.wckey-tips .close1{ position:relative;width:14px;height:14px;margin:-128px 0 0 218px;line-height:13px; text-align:right; cursor:pointer;}
.wckey-tips .close2{ position:relative;width:14px;height:14px;margin:-126px 0 0 218px;line-height:13px; text-align:right; cursor:pointer;}
.wckey-tips .gamer img{width:50px;height:50px;margin-right:6px;border:none;}
.wckey-tips .gamer table{margin-bottom:4px;width:174px;border:#C6D4E5 1px solid; border-collapse:collapse;}
.wckey-tips .gamer table td{color:#666;border:#C6D4E5 1px solid;background:#fff;line-height:16px; text-align:center; }
.wckey-tips .team img{width:80px;height:60px;margin-right:6px;border:none;}
.wckey-tips .team table{margin-bottom:4px;width:144px;border:#C6D4E5 1px solid; border-collapse:collapse;}
.wckey-tips .team table td{color:#666;border:#C6D4E5 1px solid;background:#fff;line-height:16px; text-align:center; }
.wckey-tips a,.gamer-tips a:visited{color:#0B3B8C; text-decoration:none}
.wckey-tips a:hover{color:#0B3B8C; text-decoration: underline;}
.wckey-tips em{color:#000; font-style:normal;}

.a-tips-Article-QQ:link {color:#66CCFF;border-bottom:1px dotted #0781C7;text-decoration:none}
.a-tips-Article-QQ:hover {color:#66CCFF;background:#EBF2FA;text-decoration:none}
.a-tips-Article-QQ:visited {color:#66CCFF;border-bottom:1px dotted #0781C7;text-decoration:none}
.STYLE39 {font-size: 9pt}

/*浮动end*/
 </style>

<title>我是ENFJ  教导型——谆谆善诱地引导他人......</title>


<body style="max-width: 800px;MARGIN:0 AUTO;"> <div id="report">
<!--下面是新标题--> 
<h3 align="center" style="font-size:12px;">
<span style="font-size:29pt">ENFJ  教导型</span><br>——谆谆善诱地引导他人</h3>

<!--新标题end-->
                <table align="right" style="font-size:12px;">
                    <tr>
                        <td align="left">
                            <b>报告接收人:</b>
                        
                            <span style="color:#000000">用户大大</span><br />
 <b>测试日期:</b> 2020/5/5
                        </td>
                        
                       
                    </tr>
                   
                </table>
      
    <div class="clear">
            </div> 
 
 
<P>
<DIV class=pctitle>荣格理论倾向图</DIV></p>
 
<!--下面是图-->
 
  <table  border="0" align="center" style="width:100%">
			  <tr>
    <td  width="15%" style="line-height:1.2"></td>
    <td width="70%" style="font-size:12px;line-height:2; text-align:center">
	
	
	 
 类型：ENFJ 
总倾向：99.9  
	<br />
  


	</td>
    <td width="15%"  style="line-height:1.2"></td>
  </tr>
  <tr align="center">
    <td width="15%"   style="font-size:12px; line-height:1.2">E外向</td>
    <td width="70%"  style="line-height:1.2" >
					<div class="graph2" id="one"><strong style="font-size:10px;"></strong>
						<strong class="bar" style="width: 71.43%;"><span>71.43%</span></strong></div>	
					<div class="graph" id="two">
						<strong class="bar" style="width: 0;"><span></span></strong></div>
					<br><br /></td>
     <td width="15%"   style="font-size:12px; line-height:1.2">I内向</td>
  </tr>
  <tr align="center">
     <td style="font-size:12px; line-height:1.2">S实感</td>
    <td style="line-height:1.2">	
					<div class="graph2" id="one"><strong style="font-size:10px;"><span></span></strong>
						<strong class="bar" style="width: 0;"><span></span></strong></div>	
					<div class="graph" id="two">
						<strong class="bar" style="width: 100.00%;"><span>100.00%</span></strong></div>
					<br><br /></td>
     <td style="font-size:12px; line-height:1.2">N直觉</td>
  </tr>
  <tr align="center">
     <td style="font-size:12px; line-height:1.2">T思考</td>
    <td style=" line-height:1.2">	
					<div class="graph2" id="one"><strong style="font-size:10px;"></strong>
						<strong class="bar" style="width: 0;"><span></span></strong></div>	
					<div class="graph" id="two">
						<strong class="bar" style="width: 100.00%;"><span>100.00%</span></strong></div>
					<br><br /></td>
    <td style="font-size:12px; line-height:1.2">F情感</td>
  </tr>
  <tr align="center">
    <td style="font-size:12px; line-height:1.2">J判断</td>
    <td style="line-height:1.2">	
					<div class="graph2" id="one"><strong style="font-size:10px;"></strong>
						<strong class="bar" style="width: 100.00%;"><span>100.00%</span></strong></div>	
					<div class="graph" id="two">
						<strong class="bar" style="width: 0;"><span></span></strong></div>
					<br><br /></td>
    <td style="font-size:12px;line-height:1.2">P知觉</td>
  </tr>

   
</table>
 
 

<!--图end-->
<br />
 

<P>
<DIV class=pctitle> 基本描述</DIV></p>


 <br>
<table align="center"width="100%"   ><tr><td  class="style123">	
 
  <table     bgcolor="#dddddd" cellpadding="0" style="width:100%" ><tr><td align="center" style=" padding:10px;">


<img align="center" width="100%" alt='' style="" src="/mensa/img/famous/ENFJ-m.jpg">



</td></tr><tr><td style="FONT-SIZE: 9pt; LINE-HEIGHT: 12pt; FONT-FAMILY: Arial,宋体; font-weight: none; color: #2F4F4F; padding-left:10px; line-height:24px">
ENFJ
(Extroverted Feeling with Intuition)代表人物：<br><br>
马丁.路德.金 维权人士<br><br />
语录：让我们创建一个社会，帮助人类从偏见和种族主义的黑暗深处上升到充满理解和兄弟情谊的崇高境界。


 </td></tr></table>  
		
         <p id="P1">分析：您的性格类型倾向为“ ENFJ   ”(外向 直觉 情感 判断&nbsp;<b>倾向度：</b> E86 N100 F100 J100&nbsp;  不假思索指数：4)</p>
		
	
	  <p id="P2">温情，有同情心，反应敏捷，有责任感。非常关注别人的情绪、需要和动机。善于发现他人的潜能，并希望能帮助他们实现。能够成为个人或群体成长和进步的催化剂。忠诚，对赞美和批评都能做出积极地回应。友善好社交。在团体中能很好地帮助他人，并有鼓舞他人的领导能力。 </p>
	  <p id="P3">ENFJ型的人热爱人类，他们认为人的感情是最重要的。而且他们很自然地关心别人，以热情的态度对待生命，感受与个人相关的所有事物。由于他们很理想化，按照自己的价值观生活，因此ENFJ型的人对于他们所尊重和敬 佩的人、事业和机构非常忠诚。他们精力充沛、满腔热情、富有责任感、勤勤恳恳、锲而不舍。 ENFJ型的人具有自我批评的自然倾向。然而，他们对他人的情感具有责任心，所以ENFJ型的人很少在公共场合批评人。他们 敏锐地意识到什么是（或不是）合适的行为。他们彬彬有礼、富有魅力、讨人喜欢、深谙社会。ENFJ型的人具有平和的性格与忍耐力，他们长于外交，擅长在自己的周围激发幽默感。他们是天然的领导者，受人欢迎而有魅 力。他们常常得利于自己口头表达的天份，愿意成为出色的传播工作者。 ENFJ型的人在自已对情况感受的基础上做决定，而不是基于事实本身。他们对显而易见的事物之外的可能性，以及这些可能性以怎样的方式影响他人 感兴趣。 ENFJ型的人天生具有条理性，他们喜欢一种有安排的世界，并且希望别人也是如此。即使其他人正在做决定，他们还是喜欢把问题解决了。 ENFJ型的人富有同情心和理解力，愿意培养和支持他人。他们能很好地 理解别人，有责任感和关心他人。由于他们是理想主义者，因此他们通常能看到别人身上的优点。</p>
	  <p id="P4">您适合的领域有：培训、咨询、教育、新闻传播、公共关系、文化艺术</p>
	  <p id="P5">您适合的职业有：</p>
	  <p id="P6">
	    · 人力资源培训主任<br>
	    · 销售经理<br>
	    · 小企业经理<br>
	    · 程序设计员 <br>
	    · 生态旅游业专家<br>
	    · 广告客户经理<br>
	    · 公关专业人士<br>
	    · 协调人<br>
	    · 交流总裁<br>
	    · 作家／记者<br>
	    · 非营利机构总裁<br>
	    · 杂志编辑<br>
	    · 电视制片人<br>
	    · 市场专员<br>
	    · 社会工作者<br>
	    · 人力资源管理<br>
	    · 职业指导顾问<br>
	    · 心理咨询工作者<br>
	    · 大学教师（人文学科类）<br>
	    · 教育学、心理学研究人员<br>
	    · 撰稿人<br>
	    · 节目主持人（新闻、采访类）<br>
	    · 公共关系专家<br>
	    · 社会活动家<br>
	    · 文艺工作者<br>
	    · 平面设计师<br>
	    · 画家<br>
      · 音乐家 <br>
	  </p>
       
<br>
<br>
 

<P>
<DIV class=pctitle>气质类型</DIV></p>

<br>
 <br>
<br />


根据大卫.凯尔西（David Keirsey）气质与性情理论，你属于“<b>理想主义者</b>”，下面是对“<b>理想主义者</b>”的描述：<br />
<br />


“理想主义者”型的人感兴趣的是事物的意义、关系和可能性，并基于其个人的价值观念做出决定。这是一类关心个人成长和如何理

解他人与自我的人。<br /><br />



“理想主义者”做人的原则是：“真实地面对自已”，是精神上最具哲理性的人。“理想主义者”乐于接受新的思想，善

于容纳他人。<br /><br />



“理想主义者”好象永远在寻找生存的意义。他们非常崇尚人与人之间和各种关系中的真实和正直，容易将别人理想化。许多“理想

主义者”本能地喜欢帮助别人成长和进步。“理想主义者”是很好的传播者，被人们认为是促进积极变化的催化剂。<br /><br />



 他们天生能够理解别人的情感，关心他们在生活、工作中碰到的人们（如同事、病人或客户、雇员）的需要。<br /><br />




对于“理想主义者”型的人而言，一份好的工作应该是对他们个人很有意义的工作，而不是简单的常规工作或只是一种谋生手段。“

理想主义者”崇尚和谐，不愿意在一种竞争激烈或四分五裂的环境中发展。他们喜欢民主、能够激励各种层次的人们高度参与的组织

。他们会被那些促进人性价值的组织或那些允许他们帮助别人完成工作的职业所吸引。<br />
<br />


<b>总体描述</b> <br>
<br>

      1. 对别人的情绪敏感，能理解、体会别人的心情，善于安慰、鼓励别人<br>

      2. 对文字、语言敏感<br>

      3. 善于分析、总结<br>

      4. 善于从整体上把握事物<br>

      5. 能理解复杂的理论概念，善于将事情概念化，善于从中推断出原则 <br>

      6. 擅长策略性思维<br>
<br>

<b>潜在的弱点 </b><br>
<br>

      1. 有仅仅凭个人的好恶或价值观来决定事情，并希望别人也以同样的角度或标准来处理问题的倾向。<br>

      2. 有时他们心里老想着别人的问题，可能会过于陷于其中，以至于被其困扰。<br>

      3. 有时容易将别人或事情理想化，不够实际。<br>

      4. 不是特别善于管束和批评他人，尽管常常自我批评。有时会为了和睦而牺牲自己的意见或利益。<br>

      5. 有些此类型成员比较容易动感情，情绪波动较大。<br>


<br />
<br />

<!--这里是优势劣势-->

<P>
<DIV class=pctitle>优势与劣势</DIV></p>

<br>
 <br>

<p><b>

ENFJ的特质：  教导型——谆谆善诱地引导他人

 </b></p>
<p><b>优势：</b></p> 

<p>你善于社交、气宇不凡、易感应、善劝服。你精力旺盛，热情洋溢，能很快理解他人情感的需要、动机和所忧虑的事情，因此能做到与他人高度协调。你把注意力放在帮助他人，鼓励他人进步向上。你是催化剂，能引发出他人的最佳状态。既可以做有号召力的领袖，也可以做忠实的追随者。</p>

<p>你性情平和，心胸宽阔，且很圆滑，很会促进周边关系的和睦，对于批评和紧张特别敏感。你容易看出他人的发展潜力，并倾力帮助他人发挥潜力，是体贴的助人为乐者。你愿意组织大家参与活动，使大家和睦又感到愉快。</p>

<p>你是理想主义者，非常看重自己的价值，对自己尊重景仰的人、事业和公司都非常忠诚。有责任感、谨慎、坚持不懈，同时对新观点很好奇。若能为人类的利益有所贡献，会感到深受鼓舞。</p>

<p>你对现实以外的可能性，以及对他人的影响非常感兴趣，容易看出他人的发展潜力和最大的优点，发现别人看不到的意义和联系，并感到自己与万物息息相关，可以井然有序地安排生活和工作。</p>

<p><b>劣势：</b></p>

<p>你非常理想化，认为世界是自己想象中的那样，不愿意接受与此相抵触的事情，经常忽略理想所需要的现实和细节问题。</p>

<p>你依照情感行事，很少用逻辑，主要根据个人的价值观进行判断，无视行为所带来的后果，有时会过度陷入别人的情感和问题中。总是避免冲突，有时会不够诚实和公平。试着更多地去关注事情，而不只是人，更有利于你合理地做出决定。</p>

<p>你有很高的热情，急于迎接新的挑战，有时会做出错误的假设或过于草率的决定。建议你对计划中的细节多加注意，等获取足够多的信息之后再做决策。</p>

<p>你总想得到表扬，希望自己的才能和贡献得到赏识，你对于批评非常脆弱，容易忧虑，感到内疚，失去自信。当压力很大时，会变得暴燥，慌乱、吹毛求疵。</p>





<br />
<br />

<!--优势劣势完毕-->

<p style="BORDER-BOTTOM: 1px dashed #dddddd;"></p> 

 <br>
  
<p>世界上的风云大事，归根结底，都不重要。最重要的是个人的生活，这才是伟大变革的所在，整个未来、世界的整个历史，最终都是对个人潜在能量的宏大总结。</p>
	
<br><p style="text-align:right;" class="STYLE11"> ———— 卡尔.G.荣格</p>
     <br />

  
 
<br />
 



</td></tr></table></div>
</body><!--<script language="javascript" type="text/javascript" src="/mbtitj/1060974.js"></script>-->



<!-- JiaThis Button BEGIN -->
 <!-- JiaThis Button END -->
 	

 </html>   `