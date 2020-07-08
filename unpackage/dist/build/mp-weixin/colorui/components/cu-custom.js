(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["colorui/components/cu-custom"],{"0279":function(t,a,n){"use strict";n.r(a);var u=n("caf9"),c=n("3c68");for(var e in c)"default"!==e&&function(t){n.d(a,t,(function(){return c[t]}))}(e);var r,o=n("f0c5"),i=Object(o["a"])(c["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);a["default"]=i.exports},"3c68":function(t,a,n){"use strict";n.r(a);var u=n("c626"),c=n.n(u);for(var e in u)"default"!==e&&function(t){n.d(a,t,(function(){return u[t]}))}(e);a["default"]=c.a},c626:function(t,a,n){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"cu-custom",computed:{style:function(){var t=this.StatusBar,a=this.CustomBar,n=this.bgImage,u="height:".concat(a,"px;padding-top:").concat(t,"px;");return this.bgImage&&(u="".concat(u,"background-image:url(").concat(n,");")),u}},props:{bgColor:{type:String,default:""},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){t.navigateBack({delta:1})}}};a.default=n}).call(this,n("543d")["default"])},caf9:function(t,a,n){"use strict";var u,c=function(){var t=this,a=t.$createElement;t._self._c},e=[];n.d(a,"b",(function(){return c})),n.d(a,"c",(function(){return e})),n.d(a,"a",(function(){return u}))}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'colorui/components/cu-custom-create-component',
    {
        'colorui/components/cu-custom-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0279"))
        })
    },
    [['colorui/components/cu-custom-create-component']]
]);
