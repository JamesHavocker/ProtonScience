!function(){"use strict";function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(r){var a=function(r,a){if("object"!=t(r)||!r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var e=n.call(r,a||"default");if("object"!=t(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(r)}(r,"string");return"symbol"==t(a)?a:a+""}function a(t,a,n){return(a=r(a))in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}var n={d:(t,r)=>{for(var a in r)n.o(r,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(t,r)=>Object.prototype.hasOwnProperty.call(t,r)},e={};n.d(e,{S:()=>_});var o,i={top:"paddingBottom",bottom:"paddingTop",left:"paddingRight",right:"paddingLeft"};function c(t,r,a){var n=void 0===a?{}:a,e=n.placement,o=void 0===e?"right-start":e,c=n.offset,v=void 0===c?0:c,s=n.autoFlip,d=void 0===s||s,l=n.autoShift,h=void 0===l||l;r.style.padding="0";var u=t.getBoundingClientRect(),_=r.getBoundingClientRect(),f=u.top+scrollY,g=u.bottom+scrollY,m=u.right+scrollX,p=u.left+scrollX,w=u.top,b=innerHeight-u.bottom,k=u.left,y=innerWidth-u.right,j=0,S=0,O=o.split("-"),L=O[0],x=O[1];if(v=Math.max(0,v),d){var I=_.height+v,C=_.width+v;"top"===L&&w<I&&b>w?L="bottom":"bottom"===L&&b<I&&w>b?L="top":"left"===L&&k<C&&y>k?L="right":"right"===L&&y<C&&k>y&&(L="left")}if(h){var M=_.height-u.height,H=_.width-u.width,U=M/2,A=H/2;"top"!==L&&"bottom"!==L||("start"===x&&y<H?x=y<A?"end":void 0:"end"===x&&k<H?x=k<A?"start":void 0:void 0===x&&(y<A||k<A)&&(x=y>k?"start":"end")),"right"!==L&&"left"!==L||("start"===x&&b<M?x=b<U?"end":void 0:"end"===x&&w<M?x=w<U?"start":void 0:void 0===x&&(b<U||w<U)&&(x=b>w?"start":"end"))}"top"===L||"bottom"===L?(j=p+u.width/2-_.width/2,S="top"===L?f-_.height-v:g,"start"===x&&(j=p),"end"===x&&(j=m-_.width)):(j="right"===L?m:p-_.width-v,S=f+u.height/2-_.height/2,"start"===x&&(S=f),"end"===x&&(S=g-_.height)),r.style.position="absolute",r.style.left=j+"px",r.style.top=S+"px",r.style[i[L]]=v+"px"}function v(t){var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#x60;"};return t.replace(/&(amp|lt|gt|quot|#39|x60);|[\&<>"'`]/g,(function(t){return"&"===t[0]?t:r[t]}))}function s(t){return encodeURI(t)}function d(t,r,a){var n=t.split("?"),e=n[0],o=n[1],i=new URLSearchParams(o||"");return i.set(r,a),e+"?"+i.toString()}function l(t,r){return t[r]||r}function h(){return h=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)({}).hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},h.apply(null,arguments)}var u=document,_=function(){function t(t){var r=this,a=void 0===t?{}:t,n=a.placement,e=void 0===n?"right-start":n,o=a.autoFlip,i=void 0===o||o,c=a.autoShift,v=void 0===c||c,s=a.offset,d=void 0===s?10:s,l=a.delayToShow,h=void 0===l?500:l,u=a.delayToHide,_=void 0===u?300:u,f=a.additionalClass,g=void 0===f?"":f,m=a.myHash,p=void 0===m?"":m,w=a.onQueryHovercardRef,b=void 0===w?function(t){return t}:w,k=a.onFetchProfileStart,y=void 0===k?function(){}:k,j=a.onFetchProfileSuccess,S=void 0===j?function(){}:j,O=a.onFetchProfileFailure,L=void 0===O?function(){}:O,x=a.onHovercardShown,I=void 0===x?function(){}:x,C=a.onHovercardHidden,M=void 0===C?function(){}:C,H=a.i18n,U=void 0===H?{}:H;this.t={},this.i=[],this.v=new Map,this.l=new Map,this.u=new Map,this.attach=function(t,a){var n=void 0===a?{}:a,e=n.dataAttributeName,o=void 0===e?"gravatar-hash":e,i=n.ignoreSelector;t&&(r.detach(),r._(t,o,i).forEach((function(t){t.ref.addEventListener("mouseenter",(function(a){return r.m(a,t)})),t.ref.addEventListener("mouseleave",(function(a){return r.p(a,t)}))})))},this.detach=function(){r.i.length&&(r.i.forEach((function(t){var a=t.ref;a.removeEventListener("mouseenter",(function(){return r.m})),a.removeEventListener("mouseleave",(function(){return r.p}))})),r.i=[])},this.k=e,this.j=i,this.O=v,this.L=d,this.I=h,this.C=_,this.M=g,this.H=p,this.U=b,this.A=y,this.P=S,this.R=L,this.T=I,this.B=M,this.t=U}var r=t.prototype;return r._=function(t,r,a){var n=this,e=[],o=r.replace(/-([a-z])/g,(function(t){return t[1].toUpperCase()})),i=a?Array.from(u.querySelectorAll(a)):[],c="gravatar.com/avatar/";return o&&t.dataset[o]||"IMG"===t.tagName&&t.src.includes(c)?e=[t]:(e=Array.from(t.querySelectorAll('img[src*="'+c+'"]')),r&&(e=[].concat(e.filter((function(t){return!t.hasAttribute("data-"+r)})),Array.from(t.querySelectorAll("[data-"+r+"]"))))),this.i=e.map((function(t,r){if(i.includes(t))return null;var a,e,c=t.dataset[o];if(c?(a=c.split("?")[0],e=c):"IMG"===t.tagName&&(a=t.src.split("/").pop().split("?")[0],e=t.src),!a)return null;var v=new URLSearchParams(e),s=v.get("d")||v.get("default"),d=v.get("f")||v.get("forcedefault"),l=v.get("r")||v.get("rating");return{id:"gravatar-hovercard-"+a+"-"+r,hash:a,params:(e=[s&&"d="+s,d&&"f="+d,l&&"r="+l].filter(Boolean).join("&"))?"?"+e:"",ref:n.U(t)||t}})).filter(Boolean),this.i},t.F=function(t,r,a){return'\n\t\t\t<div class="gravatar-hovercard__drawer" data-drawer-name="'+t+'">\n\t\t\t\t<div class="gravatar-hovercard__drawer-backdrop" data-target-drawer="'+t+'"></div>\n\t\t\t\t<div class="gravatar-hovercard__drawer-card">\n\t\t\t\t\t<div class="gravatar-hovercard__drawer-header">\n\t\t\t\t\t\t<h2 class="gravatar-hovercard__drawer-title">'+r+'</h2>\n\t\t\t\t\t\t<button class="gravatar-hovercard__drawer-close" data-target-drawer="'+t+'">\n\t\t\t\t\t\t\t<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t\t<path d="M12 13.0607L15.7123 16.773L16.773 15.7123L13.0607 12L16.773 8.28772L15.7123 7.22706L12 10.9394L8.28771 7.22705L7.22705 8.28771L10.9394 12L7.22706 15.7123L8.28772 16.773L12 13.0607Z" fill="#101517"></path>\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class="gravatar-hovercard__drawer-items">\n\t\t\t\t\t\t'+a+"\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t"},t.G=function(t,r){var a=r.querySelector('.gravatar-hovercard__drawer[data-drawer-name="'+t.dataset.targetDrawer+'"]');a&&a.classList.add("gravatar-hovercard__drawer--open")},t.N=function(t,r){var a=r.querySelector('.gravatar-hovercard__drawer[data-drawer-name="'+t.dataset.targetDrawer+'"]');a&&(a.classList.add("gravatar-hovercard__drawer--closing"),a.classList.remove("gravatar-hovercard__drawer--open"),setTimeout((function(){a.classList.remove("gravatar-hovercard__drawer--closing")}),300))},t.q=function(t){var r={email:"icons/mail.svg",home_phone:"icons/home-phone.svg",work_phone:"icons/work-phone.svg",cell_phone:"icons/mobile-phone.svg",contact_form:"icons/envelope.svg",calendar:"icons/calendar.svg"};return t.map((function(t){var a=t[0],n=t[1],e=function(t,r){switch(t){case"email":return"mailto:"+r;case"contact_form":case"calendar":return r.startsWith("http")?r:"https://"+r;default:return null}}(a,n),o=n.replace(/^(https?:\/\/)?(www\.)?/,"");return o=o.endsWith("/")?o.slice(0,-1):o,e&&(o='<a class="gravatar-hovercard__drawer-item-link" href="'+e+'" target="_blank">'+o+"</a>"),'\n\t\t\t\t<li class="gravatar-hovercard__drawer-item">\n\t\t\t\t\t<img \n\t\t\t\t\t\tclass="gravatar-hovercard__drawer-item-icon" \n\t\t\t\t\t\twidth="24" \n\t\t\t\t\t\theight="24" \n\t\t\t\t\t\tsrc="https://secure.gravatar.com/'+r[a]+'" \n\t\t\t\t\t\talt=""\n\t\t\t\t\t>\n\t\t\t\t\t<div class="gravatar-hovercard__drawer-item-info">\n\t\t\t\t\t\t<span class="gravatar-hovercard__drawer-item-label">'+a.replace("_"," ")+'</span>\n\t\t\t\t\t\t<span class="gravatar-hovercard__drawer-item-text">'+o+"</span>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t"})).join("")},t.X=function(t){var r,a,n=[];return null==(r=t.links)||r.forEach((function(t){n.push('\n\t\t\t\t<li class="gravatar-hovercard__drawer-item">\n\t\t\t\t\t<img class="gravatar-hovercard__drawer-item-icon" width="24" height="24" src="icons/link.svg" alt="">\n\t\t\t\t\t<div class="gravatar-hovercard__drawer-item-info">\n\t\t\t\t\t\t<span class="gravatar-hovercard__drawer-item-label">'+t.label+'</span>\n\t\t\t\t\t\t<span class="gravatar-hovercard__drawer-item-text">\n\t\t\t\t\t\t\t<a class="gravatar-hovercard__drawer-item-link" href="'+t.url+'" target="_blank">\n\t\t\t\t\t\t\t\t'+t.url.replace(/^(https?:\/\/)/,"")+"\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t")})),null==(a=t.crypto_wallets)||a.forEach((function(t){n.push('\n\t\t\t\t<li class="gravatar-hovercard__drawer-item">\n\t\t\t\t\t<img class="gravatar-hovercard__drawer-item-icon" width="24" height="24" src="icons/link.svg" alt="">\n\t\t\t\t\t<div class="gravatar-hovercard__drawer-item-info">\n\t\t\t\t\t\t<span class="gravatar-hovercard__drawer-item-label">'+t.label+'</span>\n\t\t\t\t\t\t<span class="gravatar-hovercard__drawer-item-text">'+t.address+"</span>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t")})),n.join("")},r.Y=function(r){var a=this,n=r.id,e=r.hash,o=r.params,i=r.ref,v=setTimeout((function(){if(!u.getElementById(n)){var r,v=new URLSearchParams(o);v.delete("size"),v.set("s","256"),o="?"+v.toString();var s={placement:a.k,offset:a.L,autoFlip:a.j,autoShift:a.O};if(a.u.has(e)){var _=a.u.get(e);r=t.createHovercard(h({},_,{avatarUrl:_.avatarUrl+o}),{additionalClass:a.M,myHash:a.H,i18n:a.t}),a.T(e,r)}else r=t.createHovercardSkeleton({additionalClass:a.M}),a.A(e),fetch(d("https://api.gravatar.com/v3/profiles/"+e,"source","hovercard")).then((function(t){if(200!==t.status)throw t.status;return t.json()})).then((function(n){var v;a.u.set(e,{hash:n.hash,avatarUrl:n.avatar_url,profileUrl:n.profile_url,displayName:n.display_name,location:n.location,description:n.description,jobTitle:n.job_title,company:n.company,headerImage:n.header_image,backgroundColor:n.background_color,verifiedAccounts:null==(v=n.verified_accounts)?void 0:v.map((function(t){return{type:t.service_type,label:t.service_label,icon:t.service_icon,url:t.url,isHidden:t.is_hidden}})),contactInfo:n.contact_info,payments:n.payments});var d=a.u.get(e),l=t.createHovercard(h({},d,{avatarUrl:d.avatarUrl+o}),{additionalClass:a.M,myHash:a.H,i18n:a.t}).firstElementChild;r.classList.remove("gravatar-hovercard--skeleton"),r.replaceChildren(l),c(i,r,s),a.P(e,a.u.get(e)),a.T(e,r)})).catch((function(n){var i=l(a.t,"Sorry, we are unable to load this Gravatar profile.");switch(n){case 404:i=l(a.t,"Profile not found.");break;case 429:i=l(a.t,"Too Many Requests.");break;case 500:i=l(a.t,"Internal Server Error.")}var c=t.createHovercardError("https://0.gravatar.com/avatar/"+e+o,i,{additionalClass:a.M}).firstElementChild;r.classList.add("gravatar-hovercard--error"),r.classList.remove("gravatar-hovercard--skeleton"),r.replaceChildren(c),a.R(e,{code:n,message:i})}));r.id=n,r.addEventListener("mouseenter",(function(){return clearInterval(a.l.get(n))})),r.addEventListener("mouseleave",(function(){return a.D(n)})),u.body.appendChild(r),c(i,r,s)}}),this.I);this.v.set(n,v)},r.D=function(t){var r=this,a=setTimeout((function(){var a=u.getElementById(t);a&&(a.remove(),r.B(t,a))}),this.C);this.l.set(t,a)},r.m=function(t,r){"ontouchstart"in u||(t.stopImmediatePropagation(),clearInterval(this.l.get(r.id)),this.Y(r))},r.p=function(t,r){var a=r.id;"ontouchstart"in u||(t.stopImmediatePropagation(),clearInterval(this.v.get(a)),this.D(a))},t}();o=_,_.createHovercard=function(t,r){var a,n,e=void 0===r?{}:r,i=e.additionalClass,c=e.myHash,h=e.i18n,_=void 0===h?{}:h,f=t.hash,g=t.avatarUrl,m=t.profileUrl,p=t.displayName,w=t.location,b=t.description,k=t.jobTitle,y=t.company,j=t.headerImage,S=t.verifiedAccounts,O=void 0===S?[]:S,L=t.payments,x=t.contactInfo,I=t.backgroundColor,C=u.createElement("div");C.className="gravatar-hovercard"+(i?" "+i:"");var M=s(d(m,"utm_source","hovercard")),H=v(p),U=!b&&c===f,A=[k,y].filter(Boolean).join(", "),P=(null==L||null==(a=L.links)?void 0:a.length)||(null==L||null==(n=L.crypto_wallets)?void 0:n.length),R=Object.entries(x||{}).filter((function(t){t[0];return!!t[1]})),T=O.slice(0,3).reduce((function(t,r){var a=r.label,n=r.icon,e=r.url,o=r.type;return r.isHidden||t.push('\n\t\t\t\t\t<a class="gravatar-hovercard__social-link" href="'+s(e)+'" target="_blank" data-service-name="'+o+'">\n\t\t\t\t\t\t<img class="gravatar-hovercard__social-icon" src="'+s(n)+'" width="32" height="32" alt="'+v(a)+'" />\n\t\t\t\t\t</a>\n\t\t\t\t'),t}),[]).join(""),B="",E="",F="";(R.length||P)&&(R.length&&(B+='\n\t\t\t\t\t<button class="gravatar-hovercard__button" data-target-drawer="contact">'+l(_,"Contact")+"</button>\n\t\t\t\t",E=o.F("contact",l(_,"Contact"),o.q(R))),P&&(B+='\n\t\t\t\t\t<button class="gravatar-hovercard__button" data-target-drawer="send-money">'+l(_,"Send money")+"</button>\n\t\t\t\t",F=o.F("send-money",l(_,"Send money"),o.X(L))),B='\n\t\t\t\t<div class="gravatar-hovercard__buttons">'+B+"</div>\n\t\t\t"),C.innerHTML='\n\t\t\t<div class="gravatar-hovercard__inner">\n\t\t\t\t'+(j?'<div class="gravatar-hovercard__header-image"></div>':"")+'\n\t\t\t\t<div class="gravatar-hovercard__header">\n\t\t\t\t\t<a class="gravatar-hovercard__avatar-link" href="'+M+'" target="_blank">\n\t\t\t\t\t\t<img class="gravatar-hovercard__avatar" src="'+s(g)+'" width="104" height="104" alt="'+H+'" />\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class="gravatar-hovercard__personal-info-link" href="'+M+'" target="_blank">\n\t\t\t\t\t\t<h4 class="gravatar-hovercard__name">'+H+"</h4>\n\t\t\t\t\t\t"+(A?'<p class="gravatar-hovercard__job">'+v(A)+"</p>":"")+"\n\t\t\t\t\t\t"+(w?'<p class="gravatar-hovercard__location">'+v(w)+"</p>":"")+"\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t"+(b&&'<div class="gravatar-hovercard__body">\n\t\t\t\t\t\t<p class="gravatar-hovercard__description">'+v(b)+"</p>\n\t\t\t\t\t</div>")+'\n\t\t\t\t<div class="gravatar-hovercard__social-links">\n\t\t\t\t\t<a class="gravatar-hovercard__social-link" href="'+M+'" target="_blank" data-service-name="gravatar">\n\t\t\t\t\t\t<img class="gravatar-hovercard__social-icon" src="icons/gravatar.svg" width="32" height="32" alt="Gravatar" />\n\t\t\t\t\t</a>\n\t\t\t\t\t'+T+"\n\t\t\t\t</div>\n\t\t\t\t"+B+'\n\t\t\t\t<div class="gravatar-hovercard__footer">\n\t\t\t\t\t<span class="gravatar-hovercard__profile-url" title="'+m+'">'+m.replace("https://","")+'</span>\n\t\t\t\t\t<a\n\t\t\t\t\t\tclass="gravatar-hovercard__profile-link'+(U?" gravatar-hovercard__profile-link--edit":"")+'"\n\t\t\t\t\t\thref="'+(U?"https://gravatar.com/profiles/edit?utm_source=hovercard":M)+'"\n\t\t\t\t\t\ttarget="_blank"\n\t\t\t\t\t>\n\t\t\t\t\t\t'+l(_,U?"Edit your profile →":"View profile →")+"\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t"+E+"\n\t\t\t\t"+F+"\n\t\t\t\t"+(I?'<div class="gravatar-hovercard__profile-color"></div>':"")+"\n\t\t\t</div>\n\t\t";var G=C.querySelector(".gravatar-hovercard__inner"),N=G.querySelector(".gravatar-hovercard__header-image"),q=G.querySelector(".gravatar-hovercard__profile-color");return j&&N&&(N.style.background=j),I&&q&&(q.style.background=I),G.querySelectorAll(".gravatar-hovercard__button").forEach((function(t){t.addEventListener("click",(function(){return o.G(t,G)}))})),G.querySelectorAll(".gravatar-hovercard__drawer-close").forEach((function(t){t.addEventListener("click",(function(){return o.N(t,G)}))})),G.querySelectorAll(".gravatar-hovercard__drawer-backdrop").forEach((function(t){t.addEventListener("click",(function(){return o.N(t,G)}))})),C},_.createHovercardSkeleton=function(t){var r=(void 0===t?{}:t).additionalClass,a=u.createElement("div");return a.className="gravatar-hovercard gravatar-hovercard--skeleton"+(r?" "+r:""),a.innerHTML='\n\t\t\t<div class="gravatar-hovercard__inner">\n\t\t\t\t<div class="gravatar-hovercard__header">\n\t\t\t\t\t<div class="gravatar-hovercard__avatar-link"></div>\n\t\t\t\t\t<div class="gravatar-hovercard__personal-info-link"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="gravatar-hovercard__social-links">\n\t\t\t\t\t<div class="gravatar-hovercard__social-link"></div>\n\t\t\t\t\t<div class="gravatar-hovercard__social-link"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="gravatar-hovercard__footer">\n\t\t\t\t\t<div class="gravatar-hovercard__profile-url"></div>\n\t\t\t\t\t<div class="gravatar-hovercard__profile-link"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n    \t',a},_.createHovercardError=function(t,r,a){var n=void 0===a?{}:a,e=n.avatarAlt,o=void 0===e?"Avatar":e,i=n.additionalClass,c=u.createElement("div");return c.className="gravatar-hovercard gravatar-hovercard--error"+(i?" "+i:""),c.innerHTML='\n\t\t\t<div class="gravatar-hovercard__inner">\n\t\t\t\t<img class="gravatar-hovercard__avatar" src="'+t+'" width="104" height="104" alt="'+o+'" />\n\t\t\t\t<i class="gravatar-hovercard__error-message">'+r+"</i>\n\t\t\t</div>\n    \t",c};var f,g=e.S,m=JSON.parse('{"El":{"h":"^0.10.2"}}');function p(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),a.push.apply(a,n)}return a}function w(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){a(t,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}var b="".concat(null===(f=m.El.h)||void 0===f?void 0:f.replace(/^[\^~]/,""),"-1");function k(t){new Image(1,1).src="https://pixel.wp.com/g.gif?v=wpcom2&x_grav-hover=".concat(t,"&rand=").concat(Math.random(),"-").concat((new Date).getTime())}window.Gravatar={version:m.El.h,my_hash:"",profile_cb:function(){},createHovercard:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g.createHovercard(t,w({additionalClass:"wp-hovercard"},r))},init:function(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body",a=arguments.length>1?arguments[1]:void 0,n=document;if(new g(w(w({},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}),{},{myHash:this.my_hash,additionalClass:"wp-hovercard",onQueryHovercardRef:function(t){var r;return t.classList.add("wp-hovercard-attachment"),t.classList.add("grav-hashed"),"A"!==(null===(r=t.parentElement)||void 0===r?void 0:r.tagName)&&t.classList.add("grav-hijack"),t.onmouseover=function(){return k("hover")},t},onHovercardShown:function(r,a){t.profile_cb(r,a.id);var n=a.querySelector(".gravatar-hovercard__profile-link");n&&(n.onclick=function(){return k("click_view_profile")});var e=a.querySelector(".gravatar-hovercard__profile-link--edit");e&&(e.onclick=function(){return k("click_edit_profile")});var o=a.querySelector('[data-target-drawer="contact"]'),i=a.querySelector('[data-target-drawer="send-money"]');o&&(o.onclick=function(){return k("click_contact_btn")}),i&&(i.onclick=function(){return k("click_send_money_btn")});var c=a.querySelector(".gravatar-hovercard__avatar-link");c&&(c.onclick=function(){return k("to_profile")});var v=a.querySelector(".gravatar-hovercard__name-location-link");v&&(v.onclick=function(){return k("to_profile")}),a.querySelectorAll(".gravatar-hovercard__social-link").forEach((function(t){t.onclick=function(){return k("click_".concat(t.dataset.serviceName))}})),k("show")},onFetchProfileSuccess:function(){return k("fetch")},onFetchProfileFailure:function(t,r){var a=r.code;return k("profile_".concat(a))}})).attach(n.querySelector(r),{dataAttributeName:"",ignoreSelector:a?"".concat(a,' img[src*="gravatar.com/"]'):""}),!n.querySelector('link[href*="hovercards.min.css"]')){var e,o=n.querySelector('script[src*="/js/hovercards/hovercards"]'),i=o?null===(e=o.getAttribute("src"))||void 0===e?void 0:e.split("?")[1]:"ver=".concat(b);n.head.insertAdjacentHTML("beforeend",'<link rel="stylesheet" id="gravatar-card-css" href="https://0.gravatar.com/js/hovercards/hovercards.min.css?'.concat(i,'" />'))}}}}();