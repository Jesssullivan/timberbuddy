import{A as je,s as At,e as W,u as z,g as U,h as j,B as Se,f as ut,j as dt,C as pt,n as Mt,r as Ae,c as Bt,o as qe,D as Ge}from"../chunks/scheduler.CyJLdlF6.js";import{S as Tt,i as Pt,e as O,s as B,c as F,a as M,f as N,d as C,l as _,g as H,h as P,q as S,y as J,r as D,w as Z,x as Jt,p as $,t as vt,b as wt,H as Xe,v as Zt,A as $t,E as Ye,F as Ke,B as te,m as Wt,n as zt,o as Ut,u as jt,k as tt,j as Te}from"../chunks/index.DE9qO_jh.js";import{w as Pe,r as Qe}from"../chunks/index.D7owZnvV.js";import{o as ee}from"../chunks/index.B6xMir5B.js";import{p as Je}from"../chunks/stores.CgBtmb7g.js";import{g as ne}from"../chunks/entry.Bjlg4duM.js";const Ze=Pe(void 0),Ft={};function oe(e){return e==="local"?localStorage:sessionStorage}function qt(e,t,n){const o=JSON,i="local";function s(l,r){oe(i).setItem(l,o.stringify(r))}if(!Ft[e]){const l=Pe(t,u=>{const g=oe(i).getItem(e);g&&u(o.parse(g));{const f=p=>{p.key===e&&u(p.newValue?o.parse(p.newValue):null)};return window.addEventListener("storage",f),()=>window.removeEventListener("storage",f)}}),{subscribe:r,set:a}=l;Ft[e]={set(u){s(e,u),a(u)},update(u){const g=u(je(l));s(e,g),a(g)},subscribe:r}}return Ft[e]}const $e=qt("modeOsPrefers",!1),tn=qt("modeUserPrefers",void 0),Nt=qt("modeCurrent",!1);function en(){const e=window.matchMedia("(prefers-color-scheme: light)").matches;return $e.set(e),e}function nn(e){tn.set(e)}function se(e){const t=document.documentElement.classList,n="dark";e===!0?t.remove(n):t.add(n),Nt.set(e)}function on(){const e=document.documentElement.classList,t=localStorage.getItem("modeUserPrefers")==="false",n=!("modeUserPrefers"in localStorage),o=window.matchMedia("(prefers-color-scheme: dark)").matches;t||n&&o?e.add("dark"):e.remove("dark")}const De="(prefers-reduced-motion: reduce)";function sn(){return window.matchMedia(De).matches}Qe(sn(),e=>{{const t=o=>{e(o.matches)},n=window.matchMedia(De);return n.addEventListener("change",t),()=>{n.removeEventListener("change",t)}}});const ln=e=>({}),le=e=>({}),rn=e=>({}),ie=e=>({}),an=e=>({}),re=e=>({});function ae(e){let t,n,o;const i=e[22].lead,s=W(i,e,e[21],re);return{c(){t=O("div"),s&&s.c(),this.h()},l(l){t=F(l,"DIV",{class:!0});var r=M(t);s&&s.l(r),r.forEach(C),this.h()},h(){_(t,"class",n="app-bar-slot-lead "+e[4])},m(l,r){H(l,t,r),s&&s.m(t,null),o=!0},p(l,r){s&&s.p&&(!o||r&2097152)&&z(s,i,l,l[21],o?j(i,l[21],r,an):U(l[21]),re),(!o||r&16&&n!==(n="app-bar-slot-lead "+l[4]))&&_(t,"class",n)},i(l){o||(S(s,l),o=!0)},o(l){D(s,l),o=!1},d(l){l&&C(t),s&&s.d(l)}}}function ce(e){let t,n,o;const i=e[22].trail,s=W(i,e,e[21],ie);return{c(){t=O("div"),s&&s.c(),this.h()},l(l){t=F(l,"DIV",{class:!0});var r=M(t);s&&s.l(r),r.forEach(C),this.h()},h(){_(t,"class",n="app-bar-slot-trail "+e[2])},m(l,r){H(l,t,r),s&&s.m(t,null),o=!0},p(l,r){s&&s.p&&(!o||r&2097152)&&z(s,i,l,l[21],o?j(i,l[21],r,rn):U(l[21]),ie),(!o||r&4&&n!==(n="app-bar-slot-trail "+l[2]))&&_(t,"class",n)},i(l){o||(S(s,l),o=!0)},o(l){D(s,l),o=!1},d(l){l&&C(t),s&&s.d(l)}}}function fe(e){let t,n,o;const i=e[22].headline,s=W(i,e,e[21],le);return{c(){t=O("div"),s&&s.c(),this.h()},l(l){t=F(l,"DIV",{class:!0});var r=M(t);s&&s.l(r),r.forEach(C),this.h()},h(){_(t,"class",n="app-bar-row-headline "+e[5])},m(l,r){H(l,t,r),s&&s.m(t,null),o=!0},p(l,r){s&&s.p&&(!o||r&2097152)&&z(s,i,l,l[21],o?j(i,l[21],r,ln):U(l[21]),le),(!o||r&32&&n!==(n="app-bar-row-headline "+l[5]))&&_(t,"class",n)},i(l){o||(S(s,l),o=!0)},o(l){D(s,l),o=!1},d(l){l&&C(t),s&&s.d(l)}}}function cn(e){let t,n,o,i,s,l,r,a,u,g,f=e[8].lead&&ae(e);const p=e[22].default,h=W(p,e,e[21],null);let b=e[8].trail&&ce(e),d=e[8].headline&&fe(e);return{c(){t=O("div"),n=O("div"),f&&f.c(),o=B(),i=O("div"),h&&h.c(),l=B(),b&&b.c(),a=B(),d&&d.c(),this.h()},l(c){t=F(c,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var m=M(t);n=F(m,"DIV",{class:!0});var w=M(n);f&&f.l(w),o=N(w),i=F(w,"DIV",{class:!0});var k=M(i);h&&h.l(k),k.forEach(C),l=N(w),b&&b.l(w),w.forEach(C),a=N(m),d&&d.l(m),m.forEach(C),this.h()},h(){_(i,"class",s="app-bar-slot-default "+e[3]),_(n,"class",r="app-bar-row-main "+e[6]),_(t,"class",u="app-bar "+e[7]),_(t,"data-testid","app-bar"),_(t,"role","toolbar"),_(t,"aria-label",e[0]),_(t,"aria-labelledby",e[1])},m(c,m){H(c,t,m),P(t,n),f&&f.m(n,null),P(n,o),P(n,i),h&&h.m(i,null),P(n,l),b&&b.m(n,null),P(t,a),d&&d.m(t,null),g=!0},p(c,[m]){c[8].lead?f?(f.p(c,m),m&256&&S(f,1)):(f=ae(c),f.c(),S(f,1),f.m(n,o)):f&&(J(),D(f,1,1,()=>{f=null}),Z()),h&&h.p&&(!g||m&2097152)&&z(h,p,c,c[21],g?j(p,c[21],m,null):U(c[21]),null),(!g||m&8&&s!==(s="app-bar-slot-default "+c[3]))&&_(i,"class",s),c[8].trail?b?(b.p(c,m),m&256&&S(b,1)):(b=ce(c),b.c(),S(b,1),b.m(n,null)):b&&(J(),D(b,1,1,()=>{b=null}),Z()),(!g||m&64&&r!==(r="app-bar-row-main "+c[6]))&&_(n,"class",r),c[8].headline?d?(d.p(c,m),m&256&&S(d,1)):(d=fe(c),d.c(),S(d,1),d.m(t,null)):d&&(J(),D(d,1,1,()=>{d=null}),Z()),(!g||m&128&&u!==(u="app-bar "+c[7]))&&_(t,"class",u),(!g||m&1)&&_(t,"aria-label",c[0]),(!g||m&2)&&_(t,"aria-labelledby",c[1])},i(c){g||(S(f),S(h,c),S(b),S(d),g=!0)},o(c){D(f),D(h,c),D(b),D(d),g=!1},d(c){c&&C(t),f&&f.d(),h&&h.d(c),b&&b.d(),d&&d.d()}}}const fn="flex flex-col",un="grid items-center",dn="",hn="flex-none flex justify-between items-center",gn="flex-auto",mn="flex-none flex items-center space-x-4";function bn(e,t,n){let o,i,s,l,r,a,{$$slots:u={},$$scope:g}=t;const f=Se(u);let{background:p="bg-surface-100-800-token"}=t,{border:h=""}=t,{padding:b="p-4"}=t,{shadow:d=""}=t,{spacing:c="space-y-4"}=t,{gridColumns:m="grid-cols-[auto_1fr_auto]"}=t,{gap:w="gap-4"}=t,{regionRowMain:k=""}=t,{regionRowHeadline:L=""}=t,{slotLead:v=""}=t,{slotDefault:x=""}=t,{slotTrail:T=""}=t,{label:y=""}=t,{labelledby:A=""}=t;return e.$$set=E=>{n(23,t=ut(ut({},t),dt(E))),"background"in E&&n(9,p=E.background),"border"in E&&n(10,h=E.border),"padding"in E&&n(11,b=E.padding),"shadow"in E&&n(12,d=E.shadow),"spacing"in E&&n(13,c=E.spacing),"gridColumns"in E&&n(14,m=E.gridColumns),"gap"in E&&n(15,w=E.gap),"regionRowMain"in E&&n(16,k=E.regionRowMain),"regionRowHeadline"in E&&n(17,L=E.regionRowHeadline),"slotLead"in E&&n(18,v=E.slotLead),"slotDefault"in E&&n(19,x=E.slotDefault),"slotTrail"in E&&n(20,T=E.slotTrail),"label"in E&&n(0,y=E.label),"labelledby"in E&&n(1,A=E.labelledby),"$$scope"in E&&n(21,g=E.$$scope)},e.$$.update=()=>{n(7,o=`${fn} ${p} ${h} ${c} ${b} ${d} ${t.class??""}`),e.$$.dirty&114688&&n(6,i=`${un} ${m} ${w} ${k}`),e.$$.dirty&131072&&n(5,s=`${dn} ${L}`),e.$$.dirty&262144&&n(4,l=`${hn} ${v}`),e.$$.dirty&524288&&n(3,r=`${gn} ${x}`),e.$$.dirty&1048576&&n(2,a=`${mn} ${T}`)},t=dt(t),[y,A,a,r,l,s,i,o,f,p,h,b,d,c,m,w,k,L,v,x,T,g,u]}class _n extends Tt{constructor(t){super(),Pt(this,t,bn,cn,At,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const pn=e=>({}),ue=e=>({}),vn=e=>({}),de=e=>({}),wn=e=>({}),he=e=>({}),yn=e=>({}),ge=e=>({}),xn=e=>({}),me=e=>({}),kn=e=>({}),be=e=>({});function _e(e){let t,n,o;const i=e[19].header,s=W(i,e,e[18],be);return{c(){t=O("header"),s&&s.c(),this.h()},l(l){t=F(l,"HEADER",{id:!0,class:!0});var r=M(t);s&&s.l(r),r.forEach(C),this.h()},h(){_(t,"id","shell-header"),_(t,"class",n="flex-none "+e[8])},m(l,r){H(l,t,r),s&&s.m(t,null),o=!0},p(l,r){s&&s.p&&(!o||r&262144)&&z(s,i,l,l[18],o?j(i,l[18],r,kn):U(l[18]),be),(!o||r&256&&n!==(n="flex-none "+l[8]))&&_(t,"class",n)},i(l){o||(S(s,l),o=!0)},o(l){D(s,l),o=!1},d(l){l&&C(t),s&&s.d(l)}}}function pe(e){let t,n;const o=e[19].sidebarLeft,i=W(o,e,e[18],me);return{c(){t=O("aside"),i&&i.c(),this.h()},l(s){t=F(s,"ASIDE",{id:!0,class:!0});var l=M(t);i&&i.l(l),l.forEach(C),this.h()},h(){_(t,"id","sidebar-left"),_(t,"class",e[7])},m(s,l){H(s,t,l),i&&i.m(t,null),n=!0},p(s,l){i&&i.p&&(!n||l&262144)&&z(i,o,s,s[18],n?j(o,s[18],l,xn):U(s[18]),me),(!n||l&128)&&_(t,"class",s[7])},i(s){n||(S(i,s),n=!0)},o(s){D(i,s),n=!1},d(s){s&&C(t),i&&i.d(s)}}}function ve(e){let t,n,o;const i=e[19].pageHeader,s=W(i,e,e[18],ge),l=s||Cn();return{c(){t=O("header"),l&&l.c(),this.h()},l(r){t=F(r,"HEADER",{id:!0,class:!0});var a=M(t);l&&l.l(a),a.forEach(C),this.h()},h(){_(t,"id","page-header"),_(t,"class",n="flex-none "+e[5])},m(r,a){H(r,t,a),l&&l.m(t,null),o=!0},p(r,a){s&&s.p&&(!o||a&262144)&&z(s,i,r,r[18],o?j(i,r[18],a,yn):U(r[18]),ge),(!o||a&32&&n!==(n="flex-none "+r[5]))&&_(t,"class",n)},i(r){o||(S(l,r),o=!0)},o(r){D(l,r),o=!1},d(r){r&&C(t),l&&l.d(r)}}}function Cn(e){let t;return{c(){t=vt("(slot:header)")},l(n){t=wt(n,"(slot:header)")},m(n,o){H(n,t,o)},d(n){n&&C(t)}}}function we(e){let t,n,o;const i=e[19].pageFooter,s=W(i,e,e[18],he),l=s||En();return{c(){t=O("footer"),l&&l.c(),this.h()},l(r){t=F(r,"FOOTER",{id:!0,class:!0});var a=M(t);l&&l.l(a),a.forEach(C),this.h()},h(){_(t,"id","page-footer"),_(t,"class",n="flex-none "+e[3])},m(r,a){H(r,t,a),l&&l.m(t,null),o=!0},p(r,a){s&&s.p&&(!o||a&262144)&&z(s,i,r,r[18],o?j(i,r[18],a,wn):U(r[18]),he),(!o||a&8&&n!==(n="flex-none "+r[3]))&&_(t,"class",n)},i(r){o||(S(l,r),o=!0)},o(r){D(l,r),o=!1},d(r){r&&C(t),l&&l.d(r)}}}function En(e){let t;return{c(){t=vt("(slot:footer)")},l(n){t=wt(n,"(slot:footer)")},m(n,o){H(n,t,o)},d(n){n&&C(t)}}}function ye(e){let t,n;const o=e[19].sidebarRight,i=W(o,e,e[18],de);return{c(){t=O("aside"),i&&i.c(),this.h()},l(s){t=F(s,"ASIDE",{id:!0,class:!0});var l=M(t);i&&i.l(l),l.forEach(C),this.h()},h(){_(t,"id","sidebar-right"),_(t,"class",e[6])},m(s,l){H(s,t,l),i&&i.m(t,null),n=!0},p(s,l){i&&i.p&&(!n||l&262144)&&z(i,o,s,s[18],n?j(o,s[18],l,vn):U(s[18]),de),(!n||l&64)&&_(t,"class",s[6])},i(s){n||(S(i,s),n=!0)},o(s){D(i,s),n=!1},d(s){s&&C(t),i&&i.d(s)}}}function xe(e){let t,n,o;const i=e[19].footer,s=W(i,e,e[18],ue);return{c(){t=O("footer"),s&&s.c(),this.h()},l(l){t=F(l,"FOOTER",{id:!0,class:!0});var r=M(t);s&&s.l(r),r.forEach(C),this.h()},h(){_(t,"id","shell-footer"),_(t,"class",n="flex-none "+e[2])},m(l,r){H(l,t,r),s&&s.m(t,null),o=!0},p(l,r){s&&s.p&&(!o||r&262144)&&z(s,i,l,l[18],o?j(i,l[18],r,pn):U(l[18]),ue),(!o||r&4&&n!==(n="flex-none "+l[2]))&&_(t,"class",n)},i(l){o||(S(s,l),o=!0)},o(l){D(s,l),o=!1},d(l){l&&C(t),s&&s.d(l)}}}function Ln(e){let t,n,o,i,s,l,r,a,u,g,f,p,h,b,d,c=e[10].header&&_e(e),m=e[10].sidebarLeft&&pe(e),w=e[10].pageHeader&&ve(e);const k=e[19].default,L=W(k,e,e[18],null);let v=e[10].pageFooter&&we(e),x=e[10].sidebarRight&&ye(e),T=e[10].footer&&xe(e);return{c(){t=O("div"),c&&c.c(),n=B(),o=O("div"),m&&m.c(),i=B(),s=O("div"),w&&w.c(),l=B(),r=O("main"),L&&L.c(),u=B(),v&&v.c(),f=B(),x&&x.c(),p=B(),T&&T.c(),this.h()},l(y){t=F(y,"DIV",{id:!0,class:!0,"data-testid":!0});var A=M(t);c&&c.l(A),n=N(A),o=F(A,"DIV",{class:!0});var E=M(o);m&&m.l(E),i=N(E),s=F(E,"DIV",{id:!0,class:!0});var R=M(s);w&&w.l(R),l=N(R),r=F(R,"MAIN",{id:!0,class:!0});var G=M(r);L&&L.l(G),G.forEach(C),u=N(R),v&&v.l(R),R.forEach(C),f=N(E),x&&x.l(E),E.forEach(C),p=N(A),T&&T.l(A),A.forEach(C),this.h()},h(){_(r,"id","page-content"),_(r,"class",a="flex-auto "+e[4]),_(s,"id","page"),_(s,"class",g=e[1]+" "+ke),Jt(s,"scrollbar-gutter",e[0]),_(o,"class","flex-auto "+Sn),_(t,"id","appShell"),_(t,"class",e[9]),_(t,"data-testid","app-shell")},m(y,A){H(y,t,A),c&&c.m(t,null),P(t,n),P(t,o),m&&m.m(o,null),P(o,i),P(o,s),w&&w.m(s,null),P(s,l),P(s,r),L&&L.m(r,null),P(s,u),v&&v.m(s,null),P(o,f),x&&x.m(o,null),P(t,p),T&&T.m(t,null),h=!0,b||(d=$(s,"scroll",e[20]),b=!0)},p(y,[A]){y[10].header?c?(c.p(y,A),A&1024&&S(c,1)):(c=_e(y),c.c(),S(c,1),c.m(t,n)):c&&(J(),D(c,1,1,()=>{c=null}),Z()),y[10].sidebarLeft?m?(m.p(y,A),A&1024&&S(m,1)):(m=pe(y),m.c(),S(m,1),m.m(o,i)):m&&(J(),D(m,1,1,()=>{m=null}),Z()),y[10].pageHeader?w?(w.p(y,A),A&1024&&S(w,1)):(w=ve(y),w.c(),S(w,1),w.m(s,l)):w&&(J(),D(w,1,1,()=>{w=null}),Z()),L&&L.p&&(!h||A&262144)&&z(L,k,y,y[18],h?j(k,y[18],A,null):U(y[18]),null),(!h||A&16&&a!==(a="flex-auto "+y[4]))&&_(r,"class",a),y[10].pageFooter?v?(v.p(y,A),A&1024&&S(v,1)):(v=we(y),v.c(),S(v,1),v.m(s,null)):v&&(J(),D(v,1,1,()=>{v=null}),Z()),(!h||A&2&&g!==(g=y[1]+" "+ke))&&_(s,"class",g),A&1&&Jt(s,"scrollbar-gutter",y[0]),y[10].sidebarRight?x?(x.p(y,A),A&1024&&S(x,1)):(x=ye(y),x.c(),S(x,1),x.m(o,null)):x&&(J(),D(x,1,1,()=>{x=null}),Z()),y[10].footer?T?(T.p(y,A),A&1024&&S(T,1)):(T=xe(y),T.c(),S(T,1),T.m(t,null)):T&&(J(),D(T,1,1,()=>{T=null}),Z()),(!h||A&512)&&_(t,"class",y[9])},i(y){h||(S(c),S(m),S(w),S(L,y),S(v),S(x),S(T),h=!0)},o(y){D(c),D(m),D(w),D(L,y),D(v),D(x),D(T),h=!1},d(y){y&&C(t),c&&c.d(),m&&m.d(),w&&w.d(),L&&L.d(y),v&&v.d(),x&&x.d(),T&&T.d(),b=!1,d()}}}const Rn="w-full h-full flex flex-col overflow-hidden",Sn="w-full h-full flex overflow-hidden",ke="flex-1 overflow-x-hidden flex flex-col",An="flex-none overflow-x-hidden overflow-y-auto",Tn="flex-none overflow-x-hidden overflow-y-auto";function Pn(e,t,n){let o,i,s,l,r,a,u,g,{$$slots:f={},$$scope:p}=t;const h=Se(f);let{scrollbarGutter:b="auto"}=t,{regionPage:d=""}=t,{slotHeader:c="z-10"}=t,{slotSidebarLeft:m="w-auto"}=t,{slotSidebarRight:w="w-auto"}=t,{slotPageHeader:k=""}=t,{slotPageContent:L=""}=t,{slotPageFooter:v=""}=t,{slotFooter:x=""}=t;function T(y){pt.call(this,e,y)}return e.$$set=y=>{n(21,t=ut(ut({},t),dt(y))),"scrollbarGutter"in y&&n(0,b=y.scrollbarGutter),"regionPage"in y&&n(1,d=y.regionPage),"slotHeader"in y&&n(11,c=y.slotHeader),"slotSidebarLeft"in y&&n(12,m=y.slotSidebarLeft),"slotSidebarRight"in y&&n(13,w=y.slotSidebarRight),"slotPageHeader"in y&&n(14,k=y.slotPageHeader),"slotPageContent"in y&&n(15,L=y.slotPageContent),"slotPageFooter"in y&&n(16,v=y.slotPageFooter),"slotFooter"in y&&n(17,x=y.slotFooter),"$$scope"in y&&n(18,p=y.$$scope)},e.$$.update=()=>{n(9,o=`${Rn} ${t.class??""}`),e.$$.dirty&2048&&n(8,i=`${c}`),e.$$.dirty&4096&&n(7,s=`${An} ${m}`),e.$$.dirty&8192&&n(6,l=`${Tn} ${w}`),e.$$.dirty&16384&&n(5,r=`${k}`),e.$$.dirty&32768&&n(4,a=`${L}`),e.$$.dirty&65536&&n(3,u=`${v}`),e.$$.dirty&131072&&n(2,g=`${x}`)},t=dt(t),[b,d,g,u,a,r,l,s,i,o,h,c,m,w,k,L,v,x,p,f,T]}class Dn extends Tt{constructor(t){super(),Pt(this,t,Pn,Ln,At,{scrollbarGutter:0,regionPage:1,slotHeader:11,slotSidebarLeft:12,slotSidebarRight:13,slotPageHeader:14,slotPageContent:15,slotPageFooter:16,slotFooter:17})}}function On(e){let t,n=`<script nonce="%sveltekit.nonce%">(${on.toString()})();<\/script>`,o,i,s,l,r,a,u,g,f,p,h,b;return{c(){t=new Xe(!1),o=Zt(),i=B(),s=O("div"),l=O("div"),r=$t("svg"),a=$t("path"),this.h()},l(d){const c=Ye("svelte-gewkj4",document.head);t=Ke(c,!1),o=Zt(),c.forEach(C),i=N(d),s=F(d,"DIV",{class:!0,role:!0,"aria-label":!0,"aria-checked":!0,title:!0,tabindex:!0});var m=M(s);l=F(m,"DIV",{class:!0});var w=M(l);r=te(w,"svg",{class:!0,xmlns:!0,viewBox:!0});var k=M(r);a=te(k,"path",{d:!0}),M(a).forEach(C),k.forEach(C),w.forEach(C),m.forEach(C),this.h()},h(){t.a=o,_(a,"d",u=e[1]?e[5].sun:e[5].moon),_(r,"class",g="lightswitch-icon "+e[2]),_(r,"xmlns","http://www.w3.org/2000/svg"),_(r,"viewBox","0 0 512 512"),_(l,"class",f="lightswitch-thumb "+e[3]),_(s,"class",p="lightswitch-track "+e[4]),_(s,"role","switch"),_(s,"aria-label","Light Switch"),_(s,"aria-checked",e[1]),_(s,"title",e[0]),_(s,"tabindex","0")},m(d,c){t.m(n,document.head),P(document.head,o),H(d,i,c),H(d,s,c),P(s,l),P(l,r),P(r,a),h||(b=[$(s,"click",e[6]),$(s,"click",e[19]),$(s,"keydown",Bn),$(s,"keydown",e[20]),$(s,"keyup",e[21]),$(s,"keypress",e[22])],h=!0)},p(d,[c]){c&2&&u!==(u=d[1]?d[5].sun:d[5].moon)&&_(a,"d",u),c&4&&g!==(g="lightswitch-icon "+d[2])&&_(r,"class",g),c&8&&f!==(f="lightswitch-thumb "+d[3])&&_(l,"class",f),c&16&&p!==(p="lightswitch-track "+d[4])&&_(s,"class",p),c&2&&_(s,"aria-checked",d[1]),c&1&&_(s,"title",d[0])},i:Mt,o:Mt,d(d){d&&(t.d(),C(i),C(s)),C(o),h=!1,Ae(b)}}}const Fn="cursor-pointer",Hn="aspect-square scale-[0.8] flex justify-center items-center",Mn="w-[70%] aspect-square";function Bn(e){["Enter","Space"].includes(e.code)&&(e.preventDefault(),e.currentTarget.click())}function Nn(e,t,n){let o,i,s,l,r,a,u,g;Bt(e,Nt,R=>n(1,g=R));let{title:f="Toggle light or dark mode."}=t,{bgLight:p="bg-surface-50"}=t,{bgDark:h="bg-surface-900"}=t,{fillLight:b="fill-surface-50"}=t,{fillDark:d="fill-surface-900"}=t,{width:c="w-12"}=t,{height:m="h-6"}=t,{ring:w="ring-[1px] ring-surface-500/30"}=t,{rounded:k="rounded-token"}=t;const L="transition-all duration-[200ms]",v={sun:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",moon:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"};function x(){Ge(Nt,g=!g,g),nn(g),se(g)}qe(()=>{"modeCurrent"in localStorage||se(en())});function T(R){pt.call(this,e,R)}function y(R){pt.call(this,e,R)}function A(R){pt.call(this,e,R)}function E(R){pt.call(this,e,R)}return e.$$set=R=>{n(24,t=ut(ut({},t),dt(R))),"title"in R&&n(0,f=R.title),"bgLight"in R&&n(7,p=R.bgLight),"bgDark"in R&&n(8,h=R.bgDark),"fillLight"in R&&n(9,b=R.fillLight),"fillDark"in R&&n(10,d=R.fillDark),"width"in R&&n(11,c=R.width),"height"in R&&n(12,m=R.height),"ring"in R&&n(13,w=R.ring),"rounded"in R&&n(14,k=R.rounded)},e.$$.update=()=>{e.$$.dirty&386&&n(18,o=g===!0?p:h),e.$$.dirty&386&&n(17,i=g===!0?h:p),e.$$.dirty&2&&n(16,s=g===!0?"translate-x-[100%]":""),e.$$.dirty&1538&&n(15,l=g===!0?b:d),n(4,r=`${Fn} ${L} ${c} ${m} ${w} ${k} ${o} ${t.class??""}`),e.$$.dirty&217088&&n(3,a=`${Hn} ${L} ${m} ${k} ${i} ${s}`),e.$$.dirty&32768&&n(2,u=`${Mn} ${l}`)},t=dt(t),[f,g,u,a,r,v,x,p,h,b,d,c,m,w,k,l,s,i,o,T,y,A,E]}class Vn extends Tt{constructor(t){super(),Pt(this,t,Nn,On,At,{title:0,bgLight:7,bgDark:8,fillLight:9,fillDark:10,width:11,height:12,ring:13,rounded:14})}}const ht=Math.min,it=Math.max,Lt=Math.round,Et=Math.floor,st=e=>({x:e,y:e}),In={left:"right",right:"left",bottom:"top",top:"bottom"},Wn={start:"end",end:"start"};function Vt(e,t,n){return it(e,ht(t,n))}function xt(e,t){return typeof e=="function"?e(t):e}function rt(e){return e.split("-")[0]}function kt(e){return e.split("-")[1]}function Oe(e){return e==="x"?"y":"x"}function Gt(e){return e==="y"?"height":"width"}function gt(e){return["top","bottom"].includes(rt(e))?"y":"x"}function Xt(e){return Oe(gt(e))}function zn(e,t,n){n===void 0&&(n=!1);const o=kt(e),i=Xt(e),s=Gt(i);let l=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(l=Rt(l)),[l,Rt(l)]}function Un(e){const t=Rt(e);return[It(e),t,It(t)]}function It(e){return e.replace(/start|end/g,t=>Wn[t])}function jn(e,t,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?i:o:t?o:i;case"left":case"right":return t?s:l;default:return[]}}function qn(e,t,n,o){const i=kt(e);let s=jn(rt(e),n==="start",o);return i&&(s=s.map(l=>l+"-"+i),t&&(s=s.concat(s.map(It)))),s}function Rt(e){return e.replace(/left|right|bottom|top/g,t=>In[t])}function Gn(e){return{top:0,right:0,bottom:0,left:0,...e}}function Fe(e){return typeof e!="number"?Gn(e):{top:e,right:e,bottom:e,left:e}}function St(e){const{x:t,y:n,width:o,height:i}=e;return{width:o,height:i,top:n,left:t,right:t+o,bottom:n+i,x:t,y:n}}function Ce(e,t,n){let{reference:o,floating:i}=e;const s=gt(t),l=Xt(t),r=Gt(l),a=rt(t),u=s==="y",g=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,p=o[r]/2-i[r]/2;let h;switch(a){case"top":h={x:g,y:o.y-i.height};break;case"bottom":h={x:g,y:o.y+o.height};break;case"right":h={x:o.x+o.width,y:f};break;case"left":h={x:o.x-i.width,y:f};break;default:h={x:o.x,y:o.y}}switch(kt(t)){case"start":h[l]-=p*(n&&u?-1:1);break;case"end":h[l]+=p*(n&&u?-1:1);break}return h}const Xn=async(e,t,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:l}=n,r=s.filter(Boolean),a=await(l.isRTL==null?void 0:l.isRTL(t));let u=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:g,y:f}=Ce(u,o,a),p=o,h={},b=0;for(let d=0;d<r.length;d++){const{name:c,fn:m}=r[d],{x:w,y:k,data:L,reset:v}=await m({x:g,y:f,initialPlacement:o,placement:p,strategy:i,middlewareData:h,rects:u,platform:l,elements:{reference:e,floating:t}});g=w??g,f=k??f,h={...h,[c]:{...h[c],...L}},v&&b<=50&&(b++,typeof v=="object"&&(v.placement&&(p=v.placement),v.rects&&(u=v.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:i}):v.rects),{x:g,y:f}=Ce(u,p,a)),d=-1)}return{x:g,y:f,placement:p,strategy:i,middlewareData:h}};async function He(e,t){var n;t===void 0&&(t={});const{x:o,y:i,platform:s,rects:l,elements:r,strategy:a}=e,{boundary:u="clippingAncestors",rootBoundary:g="viewport",elementContext:f="floating",altBoundary:p=!1,padding:h=0}=xt(t,e),b=Fe(h),c=r[p?f==="floating"?"reference":"floating":f],m=St(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(c)))==null||n?c:c.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(r.floating)),boundary:u,rootBoundary:g,strategy:a})),w=f==="floating"?{x:o,y:i,width:l.floating.width,height:l.floating.height}:l.reference,k=await(s.getOffsetParent==null?void 0:s.getOffsetParent(r.floating)),L=await(s.isElement==null?void 0:s.isElement(k))?await(s.getScale==null?void 0:s.getScale(k))||{x:1,y:1}:{x:1,y:1},v=St(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:r,rect:w,offsetParent:k,strategy:a}):w);return{top:(m.top-v.top+b.top)/L.y,bottom:(v.bottom-m.bottom+b.bottom)/L.y,left:(m.left-v.left+b.left)/L.x,right:(v.right-m.right+b.right)/L.x}}const Yn=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:o,placement:i,rects:s,platform:l,elements:r,middlewareData:a}=t,{element:u,padding:g=0}=xt(e,t)||{};if(u==null)return{};const f=Fe(g),p={x:n,y:o},h=Xt(i),b=Gt(h),d=await l.getDimensions(u),c=h==="y",m=c?"top":"left",w=c?"bottom":"right",k=c?"clientHeight":"clientWidth",L=s.reference[b]+s.reference[h]-p[h]-s.floating[b],v=p[h]-s.reference[h],x=await(l.getOffsetParent==null?void 0:l.getOffsetParent(u));let T=x?x[k]:0;(!T||!await(l.isElement==null?void 0:l.isElement(x)))&&(T=r.floating[k]||s.floating[b]);const y=L/2-v/2,A=T/2-d[b]/2-1,E=ht(f[m],A),R=ht(f[w],A),G=E,_t=T-d[b]-R,V=T/2-d[b]/2+y,ct=Vt(G,V,_t),Q=!a.arrow&&kt(i)!=null&&V!==ct&&s.reference[b]/2-(V<G?E:R)-d[b]/2<0,X=Q?V<G?V-G:V-_t:0;return{[h]:p[h]+X,data:{[h]:ct,centerOffset:V-ct-X,...Q&&{alignmentOffset:X}},reset:Q}}}),Kn=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,o;const{placement:i,middlewareData:s,rects:l,initialPlacement:r,platform:a,elements:u}=t,{mainAxis:g=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:d=!0,...c}=xt(e,t);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const m=rt(i),w=gt(r),k=rt(r)===r,L=await(a.isRTL==null?void 0:a.isRTL(u.floating)),v=p||(k||!d?[Rt(r)]:Un(r)),x=b!=="none";!p&&x&&v.push(...qn(r,d,b,L));const T=[r,...v],y=await He(t,c),A=[];let E=((o=s.flip)==null?void 0:o.overflows)||[];if(g&&A.push(y[m]),f){const V=zn(i,l,L);A.push(y[V[0]],y[V[1]])}if(E=[...E,{placement:i,overflows:A}],!A.every(V=>V<=0)){var R,G;const V=(((R=s.flip)==null?void 0:R.index)||0)+1,ct=T[V];if(ct)return{data:{index:V,overflows:E},reset:{placement:ct}};let Q=(G=E.filter(X=>X.overflows[0]<=0).sort((X,nt)=>X.overflows[1]-nt.overflows[1])[0])==null?void 0:G.placement;if(!Q)switch(h){case"bestFit":{var _t;const X=(_t=E.filter(nt=>{if(x){const ot=gt(nt.placement);return ot===w||ot==="y"}return!0}).map(nt=>[nt.placement,nt.overflows.filter(ot=>ot>0).reduce((ot,Ue)=>ot+Ue,0)]).sort((nt,ot)=>nt[1]-ot[1])[0])==null?void 0:_t[0];X&&(Q=X);break}case"initialPlacement":Q=r;break}if(i!==Q)return{reset:{placement:Q}}}return{}}}};async function Qn(e,t){const{placement:n,platform:o,elements:i}=e,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),l=rt(n),r=kt(n),a=gt(n)==="y",u=["left","top"].includes(l)?-1:1,g=s&&a?-1:1,f=xt(t,e);let{mainAxis:p,crossAxis:h,alignmentAxis:b}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return r&&typeof b=="number"&&(h=r==="end"?b*-1:b),a?{x:h*g,y:p*u}:{x:p*u,y:h*g}}const Jn=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,o;const{x:i,y:s,placement:l,middlewareData:r}=t,a=await Qn(t,e);return l===((n=r.offset)==null?void 0:n.placement)&&(o=r.arrow)!=null&&o.alignmentOffset?{}:{x:i+a.x,y:s+a.y,data:{...a,placement:l}}}}},Zn=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:o,placement:i}=t,{mainAxis:s=!0,crossAxis:l=!1,limiter:r={fn:c=>{let{x:m,y:w}=c;return{x:m,y:w}}},...a}=xt(e,t),u={x:n,y:o},g=await He(t,a),f=gt(rt(i)),p=Oe(f);let h=u[p],b=u[f];if(s){const c=p==="y"?"top":"left",m=p==="y"?"bottom":"right",w=h+g[c],k=h-g[m];h=Vt(w,h,k)}if(l){const c=f==="y"?"top":"left",m=f==="y"?"bottom":"right",w=b+g[c],k=b-g[m];b=Vt(w,b,k)}const d=r.fn({...t,[p]:h,[f]:b});return{...d,data:{x:d.x-n,y:d.y-o}}}}};function bt(e){return Me(e)?(e.nodeName||"").toLowerCase():"#document"}function I(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function et(e){var t;return(t=(Me(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Me(e){return e instanceof Node||e instanceof I(e).Node}function Y(e){return e instanceof Element||e instanceof I(e).Element}function K(e){return e instanceof HTMLElement||e instanceof I(e).HTMLElement}function Ee(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof I(e).ShadowRoot}function Ct(e){const{overflow:t,overflowX:n,overflowY:o,display:i}=q(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+n)&&!["inline","contents"].includes(i)}function $n(e){return["table","td","th"].includes(bt(e))}function Dt(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Yt(e){const t=Kt(),n=q(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function to(e){let t=lt(e);for(;K(t)&&!mt(t);){if(Dt(t))return null;if(Yt(t))return t;t=lt(t)}return null}function Kt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function mt(e){return["html","body","#document"].includes(bt(e))}function q(e){return I(e).getComputedStyle(e)}function Ot(e){return Y(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function lt(e){if(bt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Ee(e)&&e.host||et(e);return Ee(t)?t.host:t}function Be(e){const t=lt(e);return mt(t)?e.ownerDocument?e.ownerDocument.body:e.body:K(t)&&Ct(t)?t:Be(t)}function yt(e,t,n){var o;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Be(e),s=i===((o=e.ownerDocument)==null?void 0:o.body),l=I(i);return s?t.concat(l,l.visualViewport||[],Ct(i)?i:[],l.frameElement&&n?yt(l.frameElement):[]):t.concat(i,yt(i,[],n))}function Ne(e){const t=q(e);let n=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const i=K(e),s=i?e.offsetWidth:n,l=i?e.offsetHeight:o,r=Lt(n)!==s||Lt(o)!==l;return r&&(n=s,o=l),{width:n,height:o,$:r}}function Qt(e){return Y(e)?e:e.contextElement}function ft(e){const t=Qt(e);if(!K(t))return st(1);const n=t.getBoundingClientRect(),{width:o,height:i,$:s}=Ne(t);let l=(s?Lt(n.width):n.width)/o,r=(s?Lt(n.height):n.height)/i;return(!l||!Number.isFinite(l))&&(l=1),(!r||!Number.isFinite(r))&&(r=1),{x:l,y:r}}const eo=st(0);function Ve(e){const t=I(e);return!Kt()||!t.visualViewport?eo:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function no(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==I(e)?!1:t}function at(e,t,n,o){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),s=Qt(e);let l=st(1);t&&(o?Y(o)&&(l=ft(o)):l=ft(e));const r=no(s,n,o)?Ve(s):st(0);let a=(i.left+r.x)/l.x,u=(i.top+r.y)/l.y,g=i.width/l.x,f=i.height/l.y;if(s){const p=I(s),h=o&&Y(o)?I(o):o;let b=p,d=b.frameElement;for(;d&&o&&h!==b;){const c=ft(d),m=d.getBoundingClientRect(),w=q(d),k=m.left+(d.clientLeft+parseFloat(w.paddingLeft))*c.x,L=m.top+(d.clientTop+parseFloat(w.paddingTop))*c.y;a*=c.x,u*=c.y,g*=c.x,f*=c.y,a+=k,u+=L,b=I(d),d=b.frameElement}}return St({width:g,height:f,x:a,y:u})}function oo(e){let{elements:t,rect:n,offsetParent:o,strategy:i}=e;const s=i==="fixed",l=et(o),r=t?Dt(t.floating):!1;if(o===l||r&&s)return n;let a={scrollLeft:0,scrollTop:0},u=st(1);const g=st(0),f=K(o);if((f||!f&&!s)&&((bt(o)!=="body"||Ct(l))&&(a=Ot(o)),K(o))){const p=at(o);u=ft(o),g.x=p.x+o.clientLeft,g.y=p.y+o.clientTop}return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-a.scrollLeft*u.x+g.x,y:n.y*u.y-a.scrollTop*u.y+g.y}}function so(e){return Array.from(e.getClientRects())}function Ie(e){return at(et(e)).left+Ot(e).scrollLeft}function lo(e){const t=et(e),n=Ot(e),o=e.ownerDocument.body,i=it(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),s=it(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+Ie(e);const r=-n.scrollTop;return q(o).direction==="rtl"&&(l+=it(t.clientWidth,o.clientWidth)-i),{width:i,height:s,x:l,y:r}}function io(e,t){const n=I(e),o=et(e),i=n.visualViewport;let s=o.clientWidth,l=o.clientHeight,r=0,a=0;if(i){s=i.width,l=i.height;const u=Kt();(!u||u&&t==="fixed")&&(r=i.offsetLeft,a=i.offsetTop)}return{width:s,height:l,x:r,y:a}}function ro(e,t){const n=at(e,!0,t==="fixed"),o=n.top+e.clientTop,i=n.left+e.clientLeft,s=K(e)?ft(e):st(1),l=e.clientWidth*s.x,r=e.clientHeight*s.y,a=i*s.x,u=o*s.y;return{width:l,height:r,x:a,y:u}}function Le(e,t,n){let o;if(t==="viewport")o=io(e,n);else if(t==="document")o=lo(et(e));else if(Y(t))o=ro(t,n);else{const i=Ve(e);o={...t,x:t.x-i.x,y:t.y-i.y}}return St(o)}function We(e,t){const n=lt(e);return n===t||!Y(n)||mt(n)?!1:q(n).position==="fixed"||We(n,t)}function ao(e,t){const n=t.get(e);if(n)return n;let o=yt(e,[],!1).filter(r=>Y(r)&&bt(r)!=="body"),i=null;const s=q(e).position==="fixed";let l=s?lt(e):e;for(;Y(l)&&!mt(l);){const r=q(l),a=Yt(l);!a&&r.position==="fixed"&&(i=null),(s?!a&&!i:!a&&r.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Ct(l)&&!a&&We(e,l))?o=o.filter(g=>g!==l):i=r,l=lt(l)}return t.set(e,o),o}function co(e){let{element:t,boundary:n,rootBoundary:o,strategy:i}=e;const l=[...n==="clippingAncestors"?Dt(t)?[]:ao(t,this._c):[].concat(n),o],r=l[0],a=l.reduce((u,g)=>{const f=Le(t,g,i);return u.top=it(f.top,u.top),u.right=ht(f.right,u.right),u.bottom=ht(f.bottom,u.bottom),u.left=it(f.left,u.left),u},Le(t,r,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function fo(e){const{width:t,height:n}=Ne(e);return{width:t,height:n}}function uo(e,t,n){const o=K(t),i=et(t),s=n==="fixed",l=at(e,!0,s,t);let r={scrollLeft:0,scrollTop:0};const a=st(0);if(o||!o&&!s)if((bt(t)!=="body"||Ct(i))&&(r=Ot(t)),o){const f=at(t,!0,s,t);a.x=f.x+t.clientLeft,a.y=f.y+t.clientTop}else i&&(a.x=Ie(i));const u=l.left+r.scrollLeft-a.x,g=l.top+r.scrollTop-a.y;return{x:u,y:g,width:l.width,height:l.height}}function Ht(e){return q(e).position==="static"}function Re(e,t){return!K(e)||q(e).position==="fixed"?null:t?t(e):e.offsetParent}function ze(e,t){const n=I(e);if(Dt(e))return n;if(!K(e)){let i=lt(e);for(;i&&!mt(i);){if(Y(i)&&!Ht(i))return i;i=lt(i)}return n}let o=Re(e,t);for(;o&&$n(o)&&Ht(o);)o=Re(o,t);return o&&mt(o)&&Ht(o)&&!Yt(o)?n:o||to(e)||n}const ho=async function(e){const t=this.getOffsetParent||ze,n=this.getDimensions,o=await n(e.floating);return{reference:uo(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function go(e){return q(e).direction==="rtl"}const mo={convertOffsetParentRelativeRectToViewportRelativeRect:oo,getDocumentElement:et,getClippingRect:co,getOffsetParent:ze,getElementRects:ho,getClientRects:so,getDimensions:fo,getScale:ft,isElement:Y,isRTL:go};function bo(e,t){let n=null,o;const i=et(e);function s(){var r;clearTimeout(o),(r=n)==null||r.disconnect(),n=null}function l(r,a){r===void 0&&(r=!1),a===void 0&&(a=1),s();const{left:u,top:g,width:f,height:p}=e.getBoundingClientRect();if(r||t(),!f||!p)return;const h=Et(g),b=Et(i.clientWidth-(u+f)),d=Et(i.clientHeight-(g+p)),c=Et(u),w={rootMargin:-h+"px "+-b+"px "+-d+"px "+-c+"px",threshold:it(0,ht(1,a))||1};let k=!0;function L(v){const x=v[0].intersectionRatio;if(x!==a){if(!k)return l();x?l(!1,x):o=setTimeout(()=>{l(!1,1e-7)},1e3)}k=!1}try{n=new IntersectionObserver(L,{...w,root:i.ownerDocument})}catch{n=new IntersectionObserver(L,w)}n.observe(e)}return l(!0),s}function _o(e,t,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:r=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,u=Qt(e),g=i||s?[...u?yt(u):[],...yt(t)]:[];g.forEach(m=>{i&&m.addEventListener("scroll",n,{passive:!0}),s&&m.addEventListener("resize",n)});const f=u&&r?bo(u,n):null;let p=-1,h=null;l&&(h=new ResizeObserver(m=>{let[w]=m;w&&w.target===u&&h&&(h.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var k;(k=h)==null||k.observe(t)})),n()}),u&&!a&&h.observe(u),h.observe(t));let b,d=a?at(e):null;a&&c();function c(){const m=at(e);d&&(m.x!==d.x||m.y!==d.y||m.width!==d.width||m.height!==d.height)&&n(),d=m,b=requestAnimationFrame(c)}return n(),()=>{var m;g.forEach(w=>{i&&w.removeEventListener("scroll",n),s&&w.removeEventListener("resize",n)}),f==null||f(),(m=h)==null||m.disconnect(),h=null,a&&cancelAnimationFrame(b)}}const po=Jn,vo=Zn,wo=Kn,yo=Yn,xo=(e,t,n)=>{const o=new Map,i={platform:mo,...n},s={...i.platform,_c:o};return Xn(e,t,{...i,platform:s})};function ko(e){let t;const n=e[5].default,o=W(n,e,e[6],null);return{c(){o&&o.c()},l(i){o&&o.l(i)},m(i,s){o&&o.m(i,s),t=!0},p(i,s){o&&o.p&&(!t||s&64)&&z(o,n,i,i[6],t?j(n,i[6],s,null):U(i[6]),null)},i(i){t||(S(o,i),t=!0)},o(i){D(o,i),t=!1},d(i){o&&o.d(i)}}}function Co(e){let t,n,o="Timber Buddy",i,s,l;return{c(){t=O("a"),n=O("strong"),n.textContent=o,i=B(),s=O("p"),l=vt(e[0]),this.h()},l(r){t=F(r,"A",{href:!0,class:!0});var a=M(t);n=F(a,"STRONG",{class:!0,"data-svelte-h":!0}),tt(n)!=="svelte-1plrc3f"&&(n.textContent=o),i=N(a),s=F(a,"P",{class:!0});var u=M(s);l=wt(u,e[0]),u.forEach(C),a.forEach(C),this.h()},h(){_(n,"class","text-lg uppercase"),_(s,"class","text-sm hover:animate-pulse"),_(t,"href","/"),_(t,"class","flex flex-col justify-center text-center")},m(r,a){H(r,t,a),P(t,n),P(t,i),P(t,s),P(s,l)},p(r,a){a&1&&Te(l,r[0])},d(r){r&&C(t)}}}function Eo(e){let t,n,o,i,s,l,r="Stats ⤤",a,u,g="Read Manual",f,p,h="Toggle Network",b,d,c="Support",m,w,k,L;return k=new Vn({props:{height:"h-8",width:"w-16"}}),{c(){t=O("a"),n=vt("🪚 "),o=O("span"),i=vt(e[1]),s=B(),l=O("span"),l.textContent=r,a=B(),u=O("a"),u.textContent=g,f=B(),p=O("a"),p.textContent=h,b=B(),d=O("a"),d.textContent=c,m=B(),w=O("button"),Wt(k.$$.fragment),this.h()},l(v){t=F(v,"A",{class:!0,href:!0});var x=M(t);n=wt(x,"🪚 "),o=F(x,"SPAN",{class:!0});var T=M(o);i=wt(T,e[1]),T.forEach(C),s=N(x),l=F(x,"SPAN",{class:!0,"data-svelte-h":!0}),tt(l)!=="svelte-19iifwk"&&(l.textContent=r),x.forEach(C),a=N(v),u=F(v,"A",{class:!0,href:!0,"data-svelte-h":!0}),tt(u)!=="svelte-1yqftk3"&&(u.textContent=g),f=N(v),p=F(v,"A",{class:!0,href:!0,"data-svelte-h":!0}),tt(p)!=="svelte-1kk1j7x"&&(p.textContent=h),b=N(v),d=F(v,"A",{class:!0,href:!0,"data-svelte-h":!0}),tt(d)!=="svelte-rdhsrg"&&(d.textContent=c),m=N(v),w=F(v,"BUTTON",{class:!0});var y=M(w);zt(k.$$.fragment,y),y.forEach(C),this.h()},h(){_(o,"class","animate-pulse"),_(l,"class","italic"),_(t,"class","btn btn-sm variant-ghost-surface"),_(t,"href","#"),_(u,"class","btn btn-sm variant-ghost-surface"),_(u,"href","#"),_(p,"class","btn btn-sm variant-ghost-surface"),_(p,"href","#"),_(d,"class","btn btn-sm variant-ghost-surface"),_(d,"href","#"),_(w,"class","btn")},m(v,x){H(v,t,x),P(t,n),P(t,o),P(o,i),P(t,s),P(t,l),H(v,a,x),H(v,u,x),H(v,f,x),H(v,p,x),H(v,b,x),H(v,d,x),H(v,m,x),H(v,w,x),Ut(k,w,null),L=!0},p(v,x){(!L||x&2)&&Te(i,v[1])},i(v){L||(S(k.$$.fragment,v),L=!0)},o(v){D(k.$$.fragment,v),L=!1},d(v){v&&(C(t),C(a),C(u),C(f),C(p),C(b),C(d),C(m),C(w)),jt(k)}}}function Lo(e){let t,n;return t=new _n({props:{$$slots:{trail:[Eo],lead:[Co]},$$scope:{ctx:e}}}),{c(){Wt(t.$$.fragment)},l(o){zt(t.$$.fragment,o)},m(o,i){Ut(t,o,i),n=!0},p(o,i){const s={};i&67&&(s.$$scope={dirty:i,ctx:o}),t.$set(s)},i(o){n||(S(t.$$.fragment,o),n=!0)},o(o){D(t.$$.fragment,o),n=!1},d(o){jt(t,o)}}}function Ro(e){let t,n,o="<span>Next Cut</span>",i,s,l="Set Ref",r,a,u="Toggle Mode",g,f,p="Raise",h,b;return{c(){t=O("div"),n=O("button"),n.innerHTML=o,i=B(),s=O("button"),s.textContent=l,r=B(),a=O("button"),a.textContent=u,g=B(),f=O("button"),f.textContent=p,this.h()},l(d){t=F(d,"DIV",{class:!0});var c=M(t);n=F(c,"BUTTON",{class:!0,"data-svelte-h":!0}),tt(n)!=="svelte-1ioq6ud"&&(n.innerHTML=o),i=N(c),s=F(c,"BUTTON",{class:!0,"data-svelte-h":!0}),tt(s)!=="svelte-dsx8v0"&&(s.textContent=l),r=N(c),a=F(c,"BUTTON",{class:!0,"data-svelte-h":!0}),tt(a)!=="svelte-13oholn"&&(a.textContent=u),g=N(c),f=F(c,"BUTTON",{class:!0,"data-svelte-h":!0}),tt(f)!=="svelte-1bsgk4z"&&(f.textContent=p),c.forEach(C),this.h()},h(){_(n,"class","btn rounded-none variant-ghost-success !py-6 md:text-xl xl:!text-2xl !px-8"),_(s,"class","btn rounded-none variant-ghost-secondary md:text-xl xl:!text-2xl !px-8"),_(a,"class","btn rounded-none variant-ghost-surface md:text-xl xl:!text-2xl "),_(f,"class","btn rounded-none variant-ghost-warning md:text-xl xl:!text-2xl !px-8"),_(t,"class","grid grid-cols-4 font-bold -mr-4 border-2")},m(d,c){H(d,t,c),P(t,n),P(t,i),P(t,s),P(t,r),P(t,a),P(t,g),P(t,f),h||(b=[$(n,"click",e[2]),$(a,"click",e[3])],h=!0)},p:Mt,d(d){d&&C(t),h=!1,Ae(b)}}}function So(e){let t,n;return t=new Dn({props:{$$slots:{footer:[Ro],header:[Lo],default:[ko]},$$scope:{ctx:e}}}),{c(){Wt(t.$$.fragment)},l(o){zt(t.$$.fragment,o)},m(o,i){Ut(t,o,i),n=!0},p(o,[i]){const s={};i&67&&(s.$$scope={dirty:i,ctx:o}),t.$set(s)},i(o){n||(S(t.$$.fragment,o),n=!0)},o(o){D(t.$$.fragment,o),n=!1},d(o){jt(t,o)}}}function Ao(e,t,n){let o,i,s;Bt(e,Je,f=>n(4,i=f)),Bt(e,ee,f=>n(1,s=f));let{$$slots:l={},$$scope:r}=t;Ze.set({computePosition:xo,autoUpdate:_o,flip:wo,shift:vo,offset:po,arrow:yo});const a=f=>f.replace(/^\w|[A-Z]|\b\w/g,function(p,h){return h==0,p.toUpperCase()}).replace(/\s+/g," "),u=()=>{let f=Number(s)+1;ee.set(f.toString())},g=()=>i.url.pathname==="/stack"?ne("/core"):ne("/stack");return e.$$set=f=>{"$$scope"in f&&n(6,r=f.$$scope)},e.$$.update=()=>{e.$$.dirty&16&&n(0,o=i.url.pathname.split("/")[1]===""?"🏠 ":a(i.url.pathname.split("/")[1]+" mode"))},[o,s,u,g,i,l,r]}class Mo extends Tt{constructor(t){super(),Pt(this,t,Ao,So,At,{})}}export{Mo as component};
