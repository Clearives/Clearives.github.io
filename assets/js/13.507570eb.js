(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{231:function(a,n,s){"use strict";s.r(n);var t=s(2),e=Object(t.a)({},function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("有时候我们要区分Array和Object,但是无论是对象还是数组,我们用typeof来操作,它返回的都是object,这样的话我们就没法区分了,这样问题就出现了,我们要怎样才能清晰的区分这两种引用类型呢?")]),a._v(" "),s("h4",{attrs:{id:"_1、constructor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、constructor","aria-hidden":"true"}},[a._v("#")]),a._v(" 1、constructor")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    var arr = [1, 2, 3]\n    var obj = {\n        name: 'clearives',\n        age: 26\n    }\n    console.log(arr.constructor)    //function Array() { [native code] }\n    console.log(obj.constructor)    //function Object() { [native code] }\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h4",{attrs:{id:"_2、tostring方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、tostring方法","aria-hidden":"true"}},[a._v("#")]),a._v(" 2、toString方法")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    var arr = [1, 2, 3]\n    var obj = {\n        name: 'clearives',\n        age: 26\n    }\n    console.log(Object.prototype.toString.call(arr))    //[object Array]\n    console.log(Object.prototype.toString.call(obj))    //[object Object]\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("blockquote",[s("p",[a._v("这里我们通过对象原型的toString方法,巧妙的判断出了哪个是对象,哪个是数组,而且这个方法几乎无缺陷。")])]),a._v(" "),s("h4",{attrs:{id:"_3、instanceof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、instanceof","aria-hidden":"true"}},[a._v("#")]),a._v(" 3、instanceof")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("    var arr = [1, 2, 3]\n    var obj = {\n        name: 'clearives',\n        age: 26\n    }\n    console.log(arr instanceof Array)    //true\n    console.log(obj instanceof Array)    //false\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h4",{attrs:{id:"_4、length"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、length","aria-hidden":"true"}},[a._v("#")]),a._v(" 4、length")]),a._v(" "),s("p",[a._v("正常情况下,我们可以通过length方法来判断,因为数组的length是number类型,而对象的length是undefined,所以可以判断,但是我们假设一下,一个对象里面有一个key值为length,而恰好它的值又是number类型,这就出问题了,所以我们一般不通过这种方法来区分数组还是对象。")]),a._v(" "),s("p",[a._v("这里说了四种方法,应该还有其它的方法,但是我就觉得第二种就很好了,也很实用,有兴趣可以去研究一下别的方法。")])])},[],!1,null,null,null);n.default=e.exports}}]);