var t=null;
(function(c,h,l){var k,m;function f(a,b){return S.call(a).indexOf("[object "+b)==0}function J(a){function b(b){if(b in a)return b=a[b].charAt(0)!="."?(!a.path||r(a.path)?a.path:a.path+"/")+a[b]:A(a[b],a.path),u(b)}f(a,"String")&&(a=u(a),a={name:a,path:a,main:k,lib:m});a.path=a.path||"";a.h=b("lib");a.i=b("main");return a}function o(a){var b,e,d,g=[];B=a.baseUrl||"";if(a.debug)F=!0,s.cache=n,s.cfg=a,s.undefine=function(a){delete n[a]};var i=a.paths;for(b in i)e=u(b.replace("!","!/")),d=C[e]={path:u(i[b])},
d.f=(d.path.match(K)||[]).length,g.push(e);i=a.packages;for(b in i)e=u(i[b].name||b),d=C[e]=J(i[b]),d.f=(d.path.match(K)||[]).length,g.push(e);L=RegExp("^("+g.sort(function(a,b){return C[a].f<C[b].f}).join("|").replace(/\//g,"\\/")+")(?=\\/|$)");w=a.pluginPath||w}function v(){}function j(a){function b(a,b){return T(a,b||v,g)}function e(a){return G(p(A(a,d)),B)}var d=a.substr(0,a.lastIndexOf("/")),g={baseName:d},i={};g.d={exports:i,module:{id:A(a,d),uri:e(a),exports:i}};F&&(b.curl=s);g.e=g.d.require=
b;b.toUrl=e;return g}function x(){}function y(a){x.prototype=a;a=new x;x.prototype=H;return a}function z(){function a(a,b){i.push([a,b])}function b(a){d(!0,a)}function e(a){d(!1,a)}function d(d,g){a=d?function(a){a&&a(g)}:function(a,b){b&&b(g)};b=e=function(){throw Error("Promise already completed.");};for(var f,m=0;f=i[m++];)(f=f[d?0:1])&&f(g)}var g=this,i=[];this.c=function(b,d){a(b,d)};this.b=function(a){g.l=a;b(a)};this.a=function(a){g.n=a;e(a)}}function q(a){z.apply(this);this.name=a}function r(a){return a.charAt(a.length-
1)=="/"}function u(a){return r(a)?a.substr(0,a.length-1):a}function p(a,b){function e(a){g=a.replace(L,function(b){d=C[b]||{};i=!0;return d.i&&b==a?d.i:d.h?d.h:d.path||""})}var d,g,i;b&&e(b+"!/"+a);i||e(a);return g}function G(a,b,e){return(b&&!U.test(a)?(!b||r(b)?b:b+"/")+a:a)+(e&&!V.test(a)?".js":"")}function W(a,b,e){var d=h.createElement("script");d.type="text/javascript";d.onload=d[M]=function(e){e=e||c.event;if(e.type==="load"||X[this.readyState])delete I[a.name],this.onload=this[M]=this.onerror=
t,b(d)};d.onerror=function(){e(Error("Syntax error or http error: "+a.url))};d.charset=a.charset||"utf-8";d.async=!0;d.src=a.url;I[a.name]=d;N.insertBefore(d,N.firstChild)}function Y(a){var b,e,d,g,i=a.length;d=a[i-1];g=f(d,"Function");i==2?f(a[0],"Array")?e=a[0]:b=a[0]:i==3&&(b=a[0],e=a[1]);!e&&g&&d.length>0&&(e=["require","exports","module"]);return{name:b,j:e||[],k:g?d:function(){return d}}}function O(a,b){F&&console&&console.log("curl: resolving",a.name);var e=j(a.baseName||a.name);P(b.j,e,function(d){try{var g=
b.k.apply(e.d.exports,d)||e.d.exports;F&&console&&console.log("curl: defined",a.name,g.toString().substr(0,50).replace(/\n/," "))}catch(i){a.a(i)}a.b(g)},a.a)}function Q(a){W(a,function(){var b=D;D=H;a.m!==!1&&(b?b.g?a.a(Error(b.g.replace("${url}",a.url))):O(a,b):a.a(Error("define() not found or duplicates found: "+a.url)))},a.a)}function A(a,b){return a.replace(Z,function(a,d,g){return(g?b.substr(0,b.lastIndexOf("/")):b)+"/"})}function $(a,b){var e,d,g,i,f,m;d=a.indexOf("!");if(d>=0){g=a.substr(0,
d);i=a.substr(d+1);var h=p(g);h.indexOf("/")<0&&(h=p((!w||r(w)?w:w+"/")+h));var c=n[g];if(!c)c=n[g]=new q(g),c.url=G(h,B,!0),c.baseName=h,Q(c);b=j(b.baseName);b.e.toUrl=function(a){a=p(a,g);return G(a,B)};m=y(g?l.plugins&&l.plugins[g]:l)||{};var k=function(a){return A(a,b.baseName)};f=new q(a);c.c(function(c){var h;i=a.substr(d+1);i="normalize"in c?c.normalize(i,k,m):k(i);e=g+"!"+i;h=n[e];if(!h){h=new q(e);i&&!c.dynamic&&(n[e]=h);var j=h.b;j.resolve=j;j.reject=h.a;c.load(i,b.e,j,m)}h.c(f.b,f.a)},
f.a)}else if(i=e=A(a,b.baseName),f=n[i],!f)f=n[i]=new q(i),f.url=G(p(i),B,!0),Q(f);return f}function P(a,b,e,d){for(var g=[],i=a.length,f=i,h=!1,c=0;c<f&&!h;c++)(function(a,f){f in b.d?(g[a]=b.d[f],i--):$(f,b).c(function(b){g[a]=b;--i==0&&(h=!0,e(g))},function(a){h=!0;d(a)})})(c,a[c]);i==0&&!h&&e(g)}function T(a,b,e){if(f(a,"String")){e=(e=n[a])&&e.l;if(e===H)throw Error("Module is not already resolved: "+a);return e}P(a,e,function(a){b.b?b.b(a):b.apply(t,a)},function(a){if(b.a)b.a(a);else throw a;
})}function s(){var a=aa.call(arguments),b,e;f(a[0],"Object")&&(l=a.shift(),o(l));b=[].concat(a[0]);a=a[1];e=j("");var d=new z,g={};g.then=function(a,b){d.c(function(b){a&&a.apply(t,b)},function(a){if(b)b(a);else throw a;});return g};g.next=function(a,b){var f=d;d=new z;f.c(function(){e.e(a,d,e)},function(a){d.a(a)});b&&d.c(function(a){b.apply(this,a)});return g};a&&g.then(a);e.e(b,d,e);return g}function R(){var a=Y(arguments),b=a.name;if(b==t)if(D!==H)D={g:"Multiple anonymous defines found in ${url}."};
else{var e;if(!f(c.opera,"Opera"))for(var d in I)if(I[d].readyState=="interactive"){e=d;break}if(!(b=e))D=a}if(b!=t)(e=n[b])||(e=n[b]=new q(b)),e.m=!1,"resolved"in e||O(e,a,j(b))}var N=h.head||h.getElementsByTagName("head")[0],B,w="curl/plugin",C={},n={},D,I={},S={}.toString,H,aa=[].slice,U=/^\/|^[^:]+:\/\//,Z=/^(\.)(\.)?(\/|$)/,K=/\//,V=/\?/,L,X={loaded:1,interactive:1,complete:1},M="onreadystatechange";k="./lib/main";m="./lib";var F;f(l,"Function")||o(l);var E;E=l.apiName||"curl";(l.apiContext||
c)[E]=s;n[E]=new q(E);n[E].b(s);c.define=s.define=R;s.version="0.5.3dev";R.amd={plugins:!0}})(this,document,this.curl||{});
(function(c,h){function l(){if(!h.body)return!1;p||(p=h.createTextNode(""));try{return h.body.removeChild(h.body.appendChild(p)),p=u,!0}catch(f){return!1}}function k(){var c;c=J[h[f]]&&l();if(!j&&c){j=!0;for(clearTimeout(r);z=q.pop();)z();v&&(h[f]="complete");for(var m;m=o.shift();)m()}return c}function m(){k();j||(r=setTimeout(m,x))}var f="readyState",J={loaded:1,interactive:1,complete:1},o=[],v=typeof h[f]!="string",j=!1,x=10,y,z,q=[],r,u,p;y="addEventListener"in c?function(f,c){f.addEventListener(c,
k,!1);return function(){f.removeEventListener(c,k,!1)}}:function(f,c){f.attachEvent("on"+c,k);return function(){f.detachEvent(c,k)}};h&&!k()&&(q=[y(c,"load"),y(h,"readystatechange"),y(c,"DOMContentLoaded")],r=setTimeout(m,x));define("curl/domReady",function(){function f(c){j?c():o.push(c)}f.then=f;f.amd=!0;return f})})(this,document);
(function(c){define("curl/dojo16Compat",["./domReady"],function(h){function l(c){c.ready||(c.ready=function(f){h(f)});c.nameToUrl||(c.nameToUrl=function(f,h){return c.toUrl(f+(h||""))});return c}var k=c.define;l(c.curl||c.require);c.define=function(){var c,f,h,o=[],v,j;c=[].slice.call(arguments);f=c.length;h=c[f-2];v=typeof c[f-1]=="function"?c[f-1]:t;if(h&&v){for(j=h.length-1;j>=0;j--)h[j]=="require"&&o.push(j);o.length>0&&(c[f-1]=function(){var c=[].slice.call(arguments);for(j=0;j<o.length;j++)c[o[j]]=
l(c[o[j]]);return v.apply(this,c)})}return k.apply(t,c)};return!0})})(this);define("domReady",["curl/domReady"],function(c){return{load:function(h,l,k){c(k)}}});
