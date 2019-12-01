(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{131:function(t,e,a){"use strict";var n=a(55);a.n(n).a},203:function(t,e,a){"use strict";var n=a(72);a.n(n).a},214:function(t,e,a){"use strict";a.r(e);var n={components:{NavLink:a(77).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}},typed:function(){var t=[];return this.$page.frontmatter.tagline&&t.push(this.$page.frontmatter.tagline),t.concat(["Bitrix24","Vue","Sass","Scss","Python","Django"])}},data:function(){return{items:["Full stack web developer"]}}},s=(a(131),a(0)),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[a("header",{staticClass:"hero"},[a("parallax-container",{staticClass:"image-container",attrs:{animationDuration:500}},[a("parallax-element",{attrs:{tag:"div",type:"rotation",parallaxStrength:20}},[t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e()])],1),t._v(" "),null!==t.data.heroText?a("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),null!==t.data.tagline?a("vue-typed-js",{attrs:{strings:t.typed,showCursor:!1,loop:!0,typeSpeed:50,startDelay:1e3,backSpeed:20,fadeOutDelay:5e3}},[a("p",{staticClass:"typing description"})]):t._e(),t._v(" "),a("parallax-container",{attrs:{animationDuration:1e3}},[a("parallax-element",{attrs:{tag:"p",type:"depth",parallaxStrength:20}},[t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])],1)],1),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,(function(e,n){return a("div",{key:n,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),a("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?a("div",{staticClass:"footer"},[t._v(t._s(t.data.footer))]):t._e()],1)}),[],!1,null,null,null).exports,o={name:"About",computed:{data:function(){return this.$page.frontmatter}}},r=Object(s.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[e("header",{staticClass:"hero"}),this._v(" "),e("Content",{staticClass:"theme-default-content custom"}),this._v(" "),this.data.footer?e("div",{staticClass:"footer"},[this._v(this._s(this.data.footer))]):this._e()],1)}),[],!1,null,null,null).exports,l=a(210),c=a(212),u=a(213),h={components:{PageEdit:c.a,PageNav:u.a},props:["sidebarItems"],computed:{data:function(){return this.$page.frontmatter}}},d=(a(203),Object(s.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"page"},[t._t("top"),t._v(" "),a("Content",{staticClass:"theme-default-content"}),t._v(" "),a("PageEdit"),t._v(" "),a("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom"),t._v(" "),t.data.footer&&!t.$page.frontmatter.home?a("div",{staticClass:"footer"},[t._v(t._s(t.data.footer))]):t._e()],2)}),[],!1,null,null,null).exports),p=a(211),m=a(19),f={components:{Home:i,About:r,Page:d,Sidebar:p.a,Navbar:l.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(m.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar,"home-container":this.$page.frontmatter.home},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}},beforeMount:function(){var t=document.createElement("noscript");t.innerHTML='<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-556Q44Z"\nheight="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>',document.body.appendChild(t)}},g=Object(s.a)(f,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?a("Home"):t._e(),t._v(" "),t.$page.frontmatter.about?a("About"):a("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=g.exports},55:function(t,e,a){},72:function(t,e,a){}}]);