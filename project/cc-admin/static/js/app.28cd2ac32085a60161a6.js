webpackJsonp([1],{121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{msg:"Welcome to cc-admin"}}}},123:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{ccName:"Cc-Admin",collapsed:!1,ccUserName:"",ccUserAvatar:""}},methods:{collapse:function(){console.log("collapse"),this.collapsed=!this.collapsed},handleopen:function(){console.log("handleopen")},handleclose:function(){console.log("handleclose")},handleselect:function(e,t){},showMenu:function(e,t){this.$refs.menuCollapsed.getElementsByClassName("submenu-hook-"+e)[0].style.display=t?"block":"none"}},mounted:function(){var e=sessionStorage.getItem("user");e&&(e=JSON.parse(e),this.ccUserName=e.username||"",this.ccUserAvatar=e.avatar||"")}}},124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(48),a=n.n(o),s=n(47);t.default={data:function(){return{logining:!1,ruleForm:{account:"clearives",checkPass:"123456"},rules:{account:[{required:!0,message:"Please enter username",trigger:"blur"}],checkPass:[{required:!0,message:"Please enter password",trigger:"blur"}]},checked:!0}},methods:{handleReset:function(){this.$refs.ruleForm.resetFields()},handleSubmit:function(e){var t=this;t.$refs.ruleForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.logining=!0;var o={username:t.ruleForm.account,password:t.ruleForm.checkPass};n.i(s.b)(o).then(function(e){t.logining=!1;var n=e.msg,o=e.code,s=e.user;200!==o?t.$message({message:n,type:"error"}):(sessionStorage.setItem("user",a()(s)),t.$router.push({path:"/table"}))})})}}}},125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(25),a=n.n(o),s=n(12),i=n(209),r=n.n(i);t.default={components:{TodoMvc:r.a},computed:a()({},n.i(s.b)(["getCount"])),methods:a()({},n.i(s.c)(["increment","decrement","incrementAsync"]))}},126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(25),a=n.n(o),s=n(12);t.default={name:"Todo",props:["todo"],data:function(){return{editing:!1}},directives:{focus:function(e,t,n){var o=t.value,a=n.context;o&&a.$nextTick(function(){e.focus()})}},methods:a()({},n.i(s.d)(["editTodo","toggleTodo","deleteTodo"]),{doneEdit:function(e){var t=e.target.value.trim(),n=this.todo;t?this.editing&&(this.editTodo({todo:n,value:t}),this.editing=!1):this.deleteTodo({todo:n})},cancelEdit:function(e){e.target.value=this.todo.text,this.editing=!1}})}},127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(25),a=n.n(o),s=n(208),i=n.n(s),r=n(12),l={all:function(e){return e},active:function(e){return e.filter(function(e){return!e.done})},completed:function(e){return e.filter(function(e){return e.done})}};t.default={components:{Todo:i.a},data:function(){return{visibility:"all",filters:l}},computed:{todos:function(){return this.$store.state.todos},allChecked:function(){return this.todos.every(function(e){return e.done})},filteredTodos:function(){return l[this.visibility](this.todos)},remaining:function(){return this.todos.filter(function(e){return!e.done}).length}},methods:a()({addTodo:function(e){var t=e.target.value;t.trim()&&this.$store.commit("addTodo",{text:t}),e.target.value=""}},n.i(r.d)(["toggleAll","clearCompleted"])),filters:{pluralize:function(e,t){return 1===e?t:t+"s"},capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}}},128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(49),a=n.n(o),s=n(47);t.default={data:function(){return{loading:!1,editFormVisible:!1,editFormRules:{name:[{required:!0,message:"please enter username",trigger:"blur"}]},filters:{name:""},users:[],editForm:{id:0,name:"",sex:-1,age:0,birth:"",addr:""}}},methods:{formatSex:function(e,t){return 1==e.sex?"男":0==e.sex?"女":"未知"},getUser:function(){var e=this,t={name:this.filters.name};this.loading=!0,n.i(s.a)(t).then(function(t){e.users=t.data.users,e.loading=!1})},handleEdit:function(e,t){this.editFormVisible=!0,this.editForm=a()({},t)},editSubmit:function(e){var t=e.id,n=e.name,o=e.addr,a=e.age,s=e.birth,i=e.sex;this.users.some(function(e){e.id===t&&(e.name=n,e.addr=o,e.age=a,e.birth=s,e.sex=i)}),this.editFormVisible=!1},handleDelete:function(e,t){var n=this;n.$confirm("此操作将删除该行信息, 是否继续?","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.loading=!0,n.users.splice(e,1),n.loading=!1,n.$message({type:"success",message:"删除成功!"})}).catch(function(){n.$message({type:"info",message:"已取消删除"})})}},mounted:function(){this.getUser()}}},129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),a=n(12),s=n(15),i=(n.n(s),n(74)),r=n(78),l=n.n(r),c=n(75),u=n.n(c),d=n(76),m=(n.n(d),n(77)),f=(n.n(m),n(73)),p=n(72);location.search.indexOf("mock")>-1&&p.a.bootstrap(),o.default.config.productionTip=!1,o.default.use(a.a),o.default.use(u.a),f.a.beforeEach(function(e,t,n){"/login"==e.path&&sessionStorage.removeItem("user"),JSON.parse(sessionStorage.getItem("user"))||"/login"==e.path?n():n({path:"/login"})}),new o.default({router:f.a,store:i.a,render:function(e){return e(l.a)}}).$mount("#app")},130:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return i});for(var o=n(202),a=n.n(o),s=[{id:1,username:"clearives",password:"123456",avatar:"https://avatars1.githubusercontent.com/u/8925862?v=3&s=460",name:"曾祥辉"}],i=[],r=0;r<12;r++)i.push(a.a.mock({id:a.a.Random.guid(),name:a.a.Random.cname(),addr:a.a.mock("@county(true)"),"age|18-60":1,birth:a.a.Random.date(),sex:a.a.Random.integer(0,1)}))},131:function(e,t,n){"use strict";var o=n(48),a=n.n(o),s=n(50),i=n.n(s),r=n(15),l=n.n(r),c=n(101),u=n.n(c),d=n(130),m=d.a;t.a={bootstrap:function(){var e=new u.a(l.a);e.onGet("/success").reply(200,{msg:"success"}),e.onGet("/error").reply(500,{msg:"failure"}),e.onPost("/login").reply(function(e){var t=JSON.parse(e.data),n=t.username,o=t.password;return new i.a(function(e,t){var s=null;setTimeout(function(){var t=d.b.some(function(e){if(e.username===n&&e.password===o)return s=JSON.parse(a()(e)),s.password=void 0,!0});e(t?[200,{code:200,msg:"success",user:s}]:[200,{code:500,msg:"username password error"}])},500)})}),e.onGet("/user/list").reply(function(e){var t=e.params.name,n=m.filter(function(e){return!t||-1!=e.name.indexOf(t)});return new i.a(function(e,t){setTimeout(function(){e([200,{users:n}])},1e3)})})}}},132:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n(50),a=n.n(o),s={increment:function(e){(0,e.commit)("increment")},decrement:function(e){(0,e.commit)("decrement")},incrementAsync:function(e){var t=e.commit;return new a.a(function(e,n){setTimeout(function(){t("increment"),e()},1e3)})}}},133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"getCount",function(){return o});var o=function(e){return e.count}},134:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a});var o={count:10,todos:[]},a={increment:function(e){e.count++},decrement:function(e){e.count--},addTodo:function(e,t){var n=t.text;e.todos.push({text:n,done:!1})},deleteTodo:function(e,t){var n=t.todo;e.todos.splice(e.todos.indexOf(n),1)},toggleTodo:function(e,t){var n=t.todo;n.done=!n.done},editTodo:function(e,t){var n=t.todo,o=t.value;n.text=o},toggleAll:function(e,t){var n=t.done;e.todos.forEach(function(e){e.done=n})},clearCompleted:function(e){e.todos=e.todos.filter(function(e){return!e.done})}}},193:function(e,t){},194:function(e,t){},195:function(e,t){},196:function(e,t){},197:function(e,t){},198:function(e,t){},199:function(e,t){},204:function(e,t,n){n(198);var o=n(6)(n(122),n(217),"data-v-c908631a",null);e.exports=o.exports},205:function(e,t,n){n(194);var o=n(6)(n(123),n(213),null,null);e.exports=o.exports},206:function(e,t,n){n(199);var o=n(6)(n(124),n(218),"data-v-e3c1d098",null);e.exports=o.exports},207:function(e,t,n){n(196);var o=n(6)(n(125),n(215),null,null);e.exports=o.exports},208:function(e,t,n){var o=n(6)(n(126),n(212),null,null);e.exports=o.exports},209:function(e,t,n){n(195);var o=n(6)(n(127),n(214),null,null);e.exports=o.exports},210:function(e,t,n){n(197);var o=n(6)(n(128),n(216),null,null);e.exports=o.exports},211:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},staticRenderFns:[]}},212:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"todo",class:{completed:e.todo.done,editing:e.editing}},[n("div",{staticClass:"view"},[n("input",{staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:e.todo.done},on:{change:function(t){e.toggleTodo({todo:e.todo})}}}),e._v(" "),n("label",{domProps:{textContent:e._s(e.todo.text)},on:{dblclick:function(t){e.editing=!0}}}),e._v(" "),n("span",{staticClass:"destroy",on:{click:function(t){e.deleteTodo({todo:e.todo})}}})]),e._v(" "),n("input",{directives:[{name:"show",rawName:"v-show",value:e.editing,expression:"editing"},{name:"focus",rawName:"v-focus",value:e.editing,expression:"editing"}],staticClass:"edit",domProps:{value:e.todo.text},on:{keyup:[function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.doneEdit(t)},function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27))return null;e.cancelEdit(t)}],blur:e.doneEdit}})])},staticRenderFns:[]}},213:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"container"},[n("el-col",{staticClass:"header",attrs:{span:24}},[n("el-col",{staticClass:"logo",class:e.collapsed?"logo-collapse-width":"logo-width",attrs:{span:10}},[e._v("\n      "+e._s(e.collapsed?"C":e.ccName)+"\n    ")]),e._v(" "),n("el-col",{attrs:{span:10}},[n("div",{staticClass:"tools",on:{click:function(t){t.preventDefault(),e.collapse(t)}}},[n("i",{staticClass:"fa fa-align-justify"})])]),e._v(" "),n("el-col",{staticClass:"userinfo",attrs:{span:4}},[n("span",{staticClass:"el-dropdown-link userinfo-inner"},[n("img",{attrs:{src:this.ccUserAvatar}}),e._v(" "+e._s(e.ccUserName))])])],1),e._v(" "),n("el-col",{staticClass:"main",attrs:{span:24}},[n("aside",{class:e.collapsed?"menu-collapsed":"menu-expanded"},[n("el-menu",{directives:[{name:"show",rawName:"v-show",value:!e.collapsed,expression:"!collapsed"}],staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,"unique-opened":"",router:""},on:{open:e.handleopen,close:e.handleclose,select:e.handleselect}},[e._l(e.$router.options.routes,function(t,o){return t.hidden?e._e():[t.leaf?e._e():n("el-submenu",{attrs:{index:o+""}},[n("template",{slot:"title"},[n("i",{class:t.iconCls}),e._v(e._s(t.name))]),e._v(" "),e._l(t.children,function(t){return t.hidden?e._e():n("el-menu-item",{key:t.path,attrs:{index:t.path}},[e._v(e._s(t.name))])})],2),e._v(" "),t.leaf&&t.children.length>0?n("el-menu-item",{attrs:{index:t.children[0].path}},[n("i",{class:t.iconCls}),e._v(e._s(t.children[0].name))]):e._e()]})],2),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.collapsed,expression:"collapsed"}],ref:"menuCollapsed",staticClass:"el-menu el-menu-vertical-demo collapsed"},e._l(e.$router.options.routes,function(t,o){return t.hidden?e._e():n("li",{staticClass:"el-submenu item"},[t.leaf?[n("li",{staticClass:"el-submenu"},[n("div",{staticClass:"el-submenu__title el-menu-item",class:e.$route.path==t.children[0].path?"is-active":"",staticStyle:{"padding-left":"20px",height:"56px","line-height":"56px",padding:"0 20px"},on:{click:function(n){e.$router.push(t.children[0].path)}}},[n("i",{class:t.iconCls})])])]:[n("div",{staticClass:"el-submenu__title",staticStyle:{"padding-left":"20px"},on:{mouseover:function(t){e.showMenu(o,!0)},mouseout:function(t){e.showMenu(o,!1)}}},[n("i",{class:t.iconCls})]),e._v(" "),n("ul",{staticClass:"el-menu submenu",class:"submenu-hook-"+o,on:{mouseover:function(t){e.showMenu(o,!0)},mouseout:function(t){e.showMenu(o,!1)}}},e._l(t.children,function(t){return t.hidden?e._e():n("li",{key:t.path,staticClass:"el-menu-item",class:e.$route.path==t.path?"is-active":"",staticStyle:{"padding-left":"40px"},on:{click:function(n){e.$router.push(t.path)}}},[e._v(e._s(t.name))])}))]],2)}))],1),e._v(" "),n("section",{staticClass:"content-container"},[n("div",{staticClass:"grid-content bg-purple-light"},[n("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[n("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},e._l(e.$route.matched,function(t){return n("el-breadcrumb-item",{key:t.path},[e._v("\n              "+e._s(t.name)+"\n            ")])}))],1),e._v(" "),n("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)])])],1)},staticRenderFns:[]}},214:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"todoapp"},[n("header",{staticClass:"todo-header"},[n("h1",{staticClass:"title"},[e._v("todos")]),e._v(" "),n("input",{staticClass:"new-todo",attrs:{autofocus:"",autocomplete:"off",placeholder:"What needs to be done?"},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.addTodo(t)}}})]),e._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:e.todos.length,expression:"todos.length"}],staticClass:"todo-main"},[n("input",{staticClass:"toggle-all",attrs:{id:"toggle-all",type:"checkbox"},domProps:{checked:e.allChecked},on:{change:function(t){e.toggleAll({done:!e.allChecked})}}}),e._v(" "),n("ul",{staticClass:"todo-list"},e._l(e.filteredTodos,function(e,t){return n("todo",{key:t,attrs:{todo:e}})}))]),e._v(" "),n("footer",{directives:[{name:"show",rawName:"v-show",value:e.todos.length,expression:"todos.length"}],staticClass:"footer"},[n("span",{staticClass:"todo-count"},[n("strong",[e._v(e._s(e.remaining))]),e._v("\n          "+e._s(e._f("pluralize")(e.remaining,"item"))+" left\n        ")]),e._v(" "),n("ul",{staticClass:"filters"},e._l(e.filters,function(t,o){return n("li",[n("a",{class:{selected:e.visibility===o},on:{click:function(t){e.visibility=o}}},[e._v(e._s(e._f("capitalize")(o)))])])})),e._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:e.todos.length>e.remaining,expression:"todos.length > remaining"}],staticClass:"clear-completed",on:{click:e.clearCompleted}},[e._v("\n          Clear completed\n        ")])])])},staticRenderFns:[]}},215:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("count 测试")]),e._v("\n  Clicked: "+e._s(e.getCount)+" times\n  "),n("button",{on:{click:e.incrementAsync}},[e._v("Async+")]),e._v(" "),n("button",{on:{click:e.increment}},[e._v("+")]),e._v(" "),n("button",{on:{click:e.decrement}},[e._v("-")]),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("hr"),e._v(" "),n("h1",[e._v("todo 测试")]),e._v(" "),n("TodoMvc")],1)},staticRenderFns:[]}},216:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.users,"highlight-current-row":""}},[n("el-table-column",{attrs:{type:"index",width:"60"}}),e._v(" "),n("el-table-column",{attrs:{prop:"name",label:"Name",width:"120",sortable:""}}),e._v(" "),n("el-table-column",{attrs:{prop:"sex",label:"Sex",width:"100",formatter:e.formatSex,sortable:""}}),e._v(" "),n("el-table-column",{attrs:{prop:"age",label:"Age",width:"100",sortable:""}}),e._v(" "),n("el-table-column",{attrs:{prop:"birth",label:"Birthday",width:"120",sortable:""}}),e._v(" "),n("el-table-column",{attrs:{prop:"addr",label:"Address","min-width":"180",sortable:""}}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"small"},on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v("Edit")]),e._v(" "),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){e.handleDelete(t.$index,t.row)}}},[e._v("Delete")])]}}])})],1),e._v(" "),n("el-dialog",{attrs:{title:"编辑","close-on-click-modal":!1},model:{value:e.editFormVisible,callback:function(t){e.editFormVisible=t},expression:"editFormVisible"}},[n("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"80px",rules:e.editFormRules}},[n("el-form-item",{attrs:{label:"姓名",prop:"name"}},[n("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.name,callback:function(t){e.editForm.name=t},expression:"editForm.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"性别"}},[n("el-radio-group",{model:{value:e.editForm.sex,callback:function(t){e.editForm.sex=t},expression:"editForm.sex"}},[n("el-radio",{staticClass:"radio",attrs:{label:1}},[e._v("男")]),e._v(" "),n("el-radio",{staticClass:"radio",attrs:{label:0}},[e._v("女")])],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"年龄"}},[n("el-input-number",{attrs:{min:0,max:200},model:{value:e.editForm.age,callback:function(t){e.editForm.age=t},expression:"editForm.age"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"生日"}},[n("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.editForm.birth,callback:function(t){e.editForm.birth=t},expression:"editForm.birth"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"地址"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.editForm.addr,callback:function(t){e.editForm.addr=t},expression:"editForm.addr"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",slot:"footer"},[n("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){e.editSubmit(e.editForm)}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]}},217:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"test"},[n("a",{attrs:{href:"#/login"}},[e._v("点我")])])}]}},218:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm login-container",attrs:{model:e.ruleForm,rules:e.rules,"label-position":"left","label-width":"0px"}},[n("h3",{staticClass:"title"},[e._v("cc-admin")]),e._v(" "),n("el-form-item",{attrs:{prop:"account"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"username"},model:{value:e.ruleForm.account,callback:function(t){e.ruleForm.account=t},expression:"ruleForm.account"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"checkPass"}},[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"password"},model:{value:e.ruleForm.checkPass,callback:function(t){e.ruleForm.checkPass=t},expression:"ruleForm.checkPass"}})],1),e._v(" "),n("el-checkbox",{staticClass:"remember",attrs:{checked:""},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("Remember")]),e._v(" "),n("el-form-item",{staticStyle:{width:"100%","text-align":"center"}},[n("el-button",{attrs:{type:"primary",loading:e.logining},on:{click:e.handleSubmit}},[e._v("Login")]),e._v(" "),n("el-button",{on:{click:e.handleReset}},[e._v("Reset")])],1)],1)},staticRenderFns:[]}},47:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return i});var o=n(15),a=n.n(o),s=function(e){return a.a.post("/login",e).then(function(e){return e.data})},i=function(e){return a.a.get("/user/list",{params:e})}},72:function(e,t,n){"use strict";var o=n(131);t.a=o.a},73:function(e,t,n){"use strict";var o=n(2),a=n(219),s=n(206),i=n.n(s),r=n(204),l=n.n(r),c=n(205),u=n.n(c),d=n(210),m=n.n(d),f=n(207),p=n.n(f);o.default.use(a.a),t.a=new a.a({routes:[{path:"/login",component:i.a,name:"",hidden:!0},{path:"/",component:u.a,name:"Component",iconCls:"el-icon-message",children:[{path:"/table",component:m.a,name:"Table"},{path:"/form",component:l.a,name:"Form"}]},{path:"/",component:u.a,name:"Collection",iconCls:"el-icon-star-on",children:[{path:"/vuex",component:p.a,name:"Vuex"},{path:"/form1",component:l.a,name:"Form"}]},{path:"/",component:u.a,name:"Setting",iconCls:"el-icon-setting",children:[{path:"/table2",component:l.a,name:"Table"},{path:"/form2",component:l.a,name:"Form"}]}]})},74:function(e,t,n){"use strict";var o=n(2),a=n(12),s=n(134),i=n(132),r=n(133);o.default.use(a.a),t.a=new a.a.Store({state:s.a,getters:r,actions:i.a,mutations:s.b})},76:function(e,t){},77:function(e,t){},78:function(e,t,n){n(193);var o=n(6)(n(121),n(211),null,null);e.exports=o.exports}},[129]);
//# sourceMappingURL=app.28cd2ac32085a60161a6.js.map