(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i}));var r=n(131),a=r.create({withCredentials:!0,headers:{"API-KEY":"f8f87f20-4ba6-47e5-9a71-47c76c7aab71"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete methog. Use profileApi"),s.getProfile(e)}},s={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},o={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},126:function(e,t,n){"use strict";t.a=n.p+"static/media/user.6257f558.jpg"},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(3),a=n(29),c=n(30),s=n(32),o=n(31),i=n(0),u=n.n(i),l=n(15),f=n(11),p=n(1),d=function(e){return{isAuth:e.auth.isAuth}},j=function(e){var t=function(t){Object(s.a)(i,t);var n=Object(o.a)(i);function i(){return Object(a.a)(this,i),n.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return this.props.isAuth?Object(p.jsx)(e,Object(r.a)({},this.props)):Object(p.jsx)(f.a,{to:"/login"})}}]),i}(u.a.Component);return Object(l.b)(d)(t)}},128:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(45),a=n(3),c="SEND-MESSAGE",s={messages:[{id:1,message:"Hi"},{id:2,message:"How are u?"},{id:3,message:"Yo"},{id:4,message:"Hello"},{id:5,message:"Hola"},{id:6,message:"Guten Morgen!"}],dialogs:[{id:1,name:"Dima"},{id:2,name:"Andrew"},{id:3,name:"Katya"},{id:4,name:"Dasha"},{id:5,name:"Irka"},{id:6,name:"Sasha"}]},o=function(e){return{type:c,newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageText;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:7,message:n}])});default:return e}}},134:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1_En6"}},161:function(e,t,n){},169:function(e,t,n){},23:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",active:"Navbar_active__3mbhk"}},26:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return j}));var r=n(3),a=n(56),c=(n(0),n(89)),s=n(49),o=n.n(s),i=n(1),u=["input","meta","child"],l=["input","meta","child"],f=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(i.jsxs)("div",{className:o.a.formControl+" "+(c?o.a.error:""),children:[Object(i.jsx)("div",{children:a}),c&&Object(i.jsx)("span",{children:r})]})},p=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,u));return Object(i.jsx)(f,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,l));return Object(i.jsx)(f,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e,t,n,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(i.jsxs)("div",{children:[Object(i.jsx)(c.a,Object(r.a)({placeholder:e,name:t,component:a,validate:n},s)),o]})}},290:function(e,t,n){"use strict";n.r(t);n(161);var r=n(29),a=n(30),c=n(32),s=n(31),o=n(0),i=n.n(o),u=n(15),l=n(11),f=n(16),p=n(10),d=(n(169),n(41)),j=n(3),b=n(90),h=n.n(b),g=n(1),O=function(e){return Object(g.jsxs)("header",{className:h.a.header,children:[Object(g.jsx)("img",{src:"https://e7.pngegg.com/pngimages/92/187/png-clipart-logo-company-business-creative-company-logo-free-logo-design-template-company.png",alt:"logo"}),Object(g.jsx)("div",{className:h.a.loginBlock,children:e.isAuth?Object(g.jsxs)("div",{children:[e.login," ",Object(g.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(g.jsx)(f.b,{to:"/login",children:"Login"})})]})},m=n(8),v=n.n(m),x=n(14),w=n(12),P="samurai/network/auth/SET_USER_DATA",y="samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",C={userID:null,email:null,login:null,isAuth:!1,captchaUrl:null},_=function(e,t,n,r){return{type:P,payload:{userID:e,email:t,login:n,isAuth:r}}},S=function(e){return{type:y,payload:{captchaUrl:e}}},E=function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){var n,r,a,c,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,s=r.email,t(_(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(S(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:case y:return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},N=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(g.jsx)(O,Object(j.a)({},this.props))}}]),n}(i.a.Component),U=Object(u.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(x.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.logout();case 2:0===e.sent.data.resultCode&&t(_(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(N),T=n(129),A=n(66),F=n(26),D=n(49),z=n.n(D),L=Object(T.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(g.jsxs)("form",{onSubmit:t,children:[Object(F.c)("Email","email",[A.b],F.a),Object(F.c)("Password","password",[A.b],F.a,{type:"password"}),Object(F.c)(null,"rememberMe",[],F.a,{type:"checkbox"},"Remember me"),r&&Object(g.jsx)("img",{src:r}),r&&Object(F.c)("Symbols from image","captcha",[A.b],F.a,{}),n&&Object(g.jsx)("div",{className:z.a.formSummaryError,children:n}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{children:"Login"})})]})})),M=Object(u.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(x.a)(v.a.mark((function a(c){var s;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w.a.login(e,t,n,r);case 2:0===(s=a.sent).data.resultCode?c(E()):10===s.data.resultCode&&c(k());case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(g.jsx)(l.a,{to:"/profile"}):Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"LOGIN"}),Object(g.jsx)(L,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),R=n(23),G=n.n(R),H=function(){return Object(g.jsxs)("nav",{className:G.a.nav,children:[Object(g.jsx)("div",{className:G.a.item,children:Object(g.jsx)(f.b,{to:"/profile",activeClassName:G.a.active,children:"Profile"})}),Object(g.jsx)("div",{className:G.a.item,children:Object(g.jsx)(f.b,{to:"/dialogs",activeClassName:G.a.active,children:"Messages"})}),Object(g.jsx)("div",{className:G.a.item,children:Object(g.jsx)(f.b,{to:"/users",activeClassName:G.a.active,children:"Users"})}),Object(g.jsx)("div",{className:G.a.item,children:Object(g.jsx)(f.b,{to:"/news",children:"News"})}),Object(g.jsx)("div",{className:G.a.item,children:Object(g.jsx)(f.b,{to:"/music",children:"Music"})}),Object(g.jsx)("div",{className:G.a.item,children:Object(g.jsx)(f.b,{to:"/settings",children:"Settings"})})]})},B=n(45),V=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(j.a)(Object(j.a)({},e),{},{newObjProps:r}):e}))},K="FOLLOW",W="UNFOLLOW",X="SET_USERS",q="SET_CURRENT_PAGE",J="SET_TOTAL_USERS_COUNT",Y="TOGGLE_IS_FETCHING",Q="TOGGLE_IS_FOLLOWING_PROGRESS",Z={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},$=function(e){return{type:K,userID:e}},ee=function(e){return{type:W,userID:e}},te=function(e){return{type:q,currentPage:e}},ne=function(e){return{type:Y,isFetching:e}},re=function(e,t){return{type:Q,isFetching:e,userID:t}},ae=function(){var e=Object(x.a)(v.a.mark((function e(t,n,r,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(re(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(re(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(j.a)(Object(j.a)({},e),{},{users:V(e.users,t.userID,"id",{followed:!0})});case W:return Object(j.a)(Object(j.a)({},e),{},{users:V(e.users,t.userID,"id",{followed:!1})});case X:return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case q:return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case J:return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.count});case Y:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case Q:return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(B.a)(e.followingInProgress),[t.userID]):e.followingInProgress.filter((function(e){return e!==t.userID}))});default:return e}},se=n(56),oe=n(68),ie=n(96),ue=n(72),le=n.n(ue),fe=n(133),pe=n.n(fe),de=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,c=e.portionSize,s=void 0===c?10:c,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);var f=Math.ceil(i/s),p=Object(o.useState)(1),d=Object(ie.a)(p,2),j=d[0],b=d[1],h=(j-1)*s+1,O=j*s;return Object(g.jsxs)("div",{className:le.a.paginator,children:[j>1&&Object(g.jsx)("button",{onClick:function(){b(j-1)},children:"PREV"}),u.filter((function(e){return e>=h&&e<=O})).map((function(e){return Object(g.jsx)("span",{className:pe()(Object(oe.a)({},le.a.selectedPage,r===e),le.a.pageNumber),onClick:function(t){a(e)},children:e},e)})),f>j&&Object(g.jsx)("button",{onClick:function(){b(j+1)},children:"NEXT"})]})},je=n(134),be=n.n(je),he=n(126),ge=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:Object(g.jsx)(f.b,{to:"/profile/"+t.id,children:Object(g.jsx)("img",{src:null!=t.photos.small?t.photos.small:he.a,alt:"ava",className:be.a.userPhoto})})}),Object(g.jsx)("div",{children:t.followed?Object(g.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(g.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(g.jsxs)("span",{children:[Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:t.name}),Object(g.jsx)("div",{children:t.status})]}),Object(g.jsxs)("span",{children:[Object(g.jsx)("div",{children:"u.location.country"}),Object(g.jsx)("div",{children:"u.location.city"})]})]})]})},Oe=["currentPage","onPageChanged","totalUsersCount","pageSize","users"],me=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,a=e.pageSize,c=e.users,s=Object(se.a)(e,Oe);return Object(g.jsxs)("div",{children:[Object(g.jsx)(de,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:a}),Object(g.jsx)("div",{children:c.map((function(e){return Object(g.jsx)(ge,{user:e,followingInProgress:s.followingInProgress,follow:s.follow,unfollow:s.unfollow},e.id)}))})]})},ve=n(127),xe=function(e){return e.usersPage.users},we=function(e){return e.usersPage.pageSize},Pe=function(e){return e.usersPage.totalUsersCount},ye=function(e){return e.usersPage.currentPage},Ce=function(e){return e.usersPage.isFetching},_e=function(e){return e.usersPage.followingInProgress},Se=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[this.props.isFetching?Object(g.jsx)(d.a,{}):null,Object(g.jsx)(me,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(i.a.Component),Ee=Object(p.d)(ve.a,Object(u.b)((function(e){return{users:xe(e),pageSize:we(e),totalUsersCount:Pe(e),currentPage:ye(e),isFetching:Ce(e),followingInProgress:_e(e)}}),{follow:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ae(n,e,w.d.follow.bind(w.d),$);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ae(n,e,w.d.unfollow.bind(w.d),ee);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:te,toggleFollowingProgress:re,getUsers:function(e,t){return function(){var n=Object(x.a)(v.a.mark((function n(r){var a;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ne(!0)),r(te(e)),n.next=4,w.d.getUsers(e,t);case 4:a=n.sent,r(ne(!1)),r((s=a.items,{type:X,users:s})),r((c=a.totalCount,{type:J,count:c}));case 8:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Se),ke=function(e){return function(t){return Object(g.jsx)(i.a.Suspense,{fallback:Object(g.jsx)(d.a,{}),children:Object(g.jsx)(e,Object(j.a)({},t))})}},Ie="INITIALIZED_SUCCESS",Ne={initialized:!1},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ie:return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},Te=n(95),Ae=n(128),Fe=n(135),De=n(130),ze=Object(p.c)({profilePage:Te.b,dialogsPage:Ae.a,usersPage:ce,auth:I,form:De.a,app:Ue}),Le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.d,Me=Object(p.e)(ze,Le(Object(p.a)(Fe.a))),Re=i.a.lazy((function(){return n.e(4).then(n.bind(null,297))})),Ge=i.a.lazy((function(){return n.e(3).then(n.bind(null,296))})),He=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(g.jsxs)("div",{className:"app-wrapper",children:[Object(g.jsx)(U,{}),Object(g.jsx)(H,{}),Object(g.jsxs)("div",{className:"app-wrapper-content",children:[Object(g.jsx)(l.b,{path:"/profile/:userID?",render:ke(Ge)}),Object(g.jsx)(l.b,{path:"/dialogs",render:ke(Re)}),Object(g.jsx)(l.b,{path:"/users",render:function(){return Object(g.jsx)(Ee,{})}}),Object(g.jsx)(l.b,{path:"/login",render:function(){return Object(g.jsx)(M,{})}})]})]}):Object(g.jsx)(d.a,{})}}]),n}(o.Component),Be=Object(p.d)(l.f,Object(u.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(E());Promise.all([t]).then((function(){e({type:Ie})}))}}}))(He),Ve=function(e){return Object(g.jsx)(f.a,{children:Object(g.jsx)(u.a,{store:Me,children:Object(g.jsx)(Be,{})})})},Ke=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,295)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},We=n(65);n.n(We).a.render(Object(g.jsx)(Ve,{}),document.getElementById("root")),Ke()},41:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.b767aab4.svg",a=n(1);t.a=function(e){return Object(a.jsx)("img",{src:r,alt:"preloader "})}},49:function(e,t,n){e.exports={formControl:"FormsControls_formControl__ajVyF",error:"FormsControls_error__35B8G",formSummaryError:"FormsControls_formSummaryError__3e7lO"}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},72:function(e,t,n){e.exports={paginator:"Paginator_paginator__gf1QN",pageNumber:"Paginator_pageNumber__3NPqB",selectedPage:"Paginator_selectedPage__x7UOB"}},90:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return w}));var r=n(8),a=n.n(r),c=n(14),s=n(45),o=n(3),i=n(38),u=n(12),l="ADD-POST",f="DELETE_POST",p="SET_USER_PROFILE",d="SET_STATUS",j="SAVE_PHOTO_SUCCESS",b={posts:[{id:1,message:"Hi, how are u?",likesCount:0},{id:2,message:"Hi, it`s my first post",likesCount:23}],profile:null,status:""},h=function(e){return{type:l,newPostText:e}},g=function(e){return{type:d,status:e}},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.d.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:p,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(g(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:j,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userID,t.next=3,u.b.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(O(c)),t.next=10;break;case 8:return n(Object(i.a)("edit-profile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:5,message:t.newPostText,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[n].concat(Object(s.a)(e.posts))});case f:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postID}))});case p:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case d:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case j:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[290,1,2]]]);
//# sourceMappingURL=main.60130350.chunk.js.map