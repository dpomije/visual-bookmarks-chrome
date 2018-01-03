!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e){var t="";switch(e.name){case"QuotaExceededError":t="QuotaExceededError";break;case"NotFoundError":t="NotFoundError";break;case"SecurityError":t="SecurityError";break;case"InvalidModificationError":t="InvalidModificationError";break;case"InvalidStateError":t="InvalidStateError";break;default:t="Unknown Error"}console.error(t)}var t=null;return{init:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,o=arguments[1];navigator.webkitPersistentStorage.requestQuota(1048576*n,function(n){window.webkitRequestFileSystem(window.PERSISTENT,n,function(e){t=e,o&&o()},e)},e)},usedAndRemaining:function(e){navigator.webkitPersistentStorage.queryUsageAndQuota(function(t,n){e&&e(t,n)})},createDir:function(n,o){t.root.getDirectory(n,{create:!0},function(e){o&&o(e)},e)},getDir:function(n,o){t.root.getDirectory(n,{},function(e){o&&o(e)},e)},deleteDir:function(n,o,r){var o=o||{};void 0===o.recursive&&(o.recursive=!1),t.root.getDirectory(n,{},function(t){o.recursive?t.removeRecursively(function(){r&&r()},e):t.remove(function(){r&&r()},e)},e)},createFile:function(e,n,o){t.root.getFile(e,{create:!0},function(e){e.createWriter(function(t){t.onwriteend=function(){o&&o(e)},t.onerror=function(e){console.log(e)};var r=new Blob([n.file],{type:n.fileType});t.write(r)})})},deleteFile:function(n,o){t.root.getFile(n,{create:!1},function(t){t.remove(function(){o&&o()},e)},e)},purge:function(){t.root.createReader().readEntries(function(t){for(var n,o=0;n=t[o];++o)n.isDirectory?n.removeRecursively(function(){},e):n.remove(function(){},e);console.info("Local storage emptied.")},e)}}}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={transitionEnd:function(){var e={transition:"transitionend",webkitTransition:"webkitTransitionEnd"},t=document.createElement("fake");for(var n in e)if(void 0!==t.style[n])return e[n];return!1},debounce:function(e,t,n){var o=null;return function(){var r=this,i=arguments,a=function(){o=null,n||e.apply(r,i)},c=n&&!o;clearTimeout(o),o=setTimeout(a,t),c&&e.apply(r,i)}},trigger:function(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!1),t.dispatchEvent(n)},templater:function(e,t){return e.replace(/\%(.*?)\%/g,function(e,n){return t[n]||""})},notifications:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;window.timerNotice&&(chrome.notifications.clear(e),clearTimeout(window.timerNotice)),chrome.notifications.create(e,{type:"basic",iconUrl:"icons/icon128.png",title:"Visual bookmarks",message:e},function(){window.timerNotice=setTimeout(function(){chrome.notifications.clear(e)},t)})},imageLoaded:function(e,t){var n=new Image;n.onload=function(){t.done&&t.done(e)},n.onerror=function(){t.fail&&t.fail(e)},n.src=e},base64ToBlob:function(e,t,n){for(var o=e,r=t||"",i=atob(o.split(",")[1]),a=(o.split(",")[0].split(":")[1].split(";")[0],new ArrayBuffer(i.length)),c=new Uint8Array(a),l=0;l<i.length;l++)c[l]=i.charCodeAt(l);var s=new Blob([a],{type:r});return n?n(s):s},resizeScreen:function(e,t){var n=new Image;n.onload=function(){300<n.height&&(n.width*=300/n.height,n.height=300);var e=document.createElement("canvas"),o=e.getContext("2d");e.width=n.width,e.height=n.height,o.drawImage(n,0,0,n.width,n.height),t(e.toDataURL("image/jpg"))},n.src=e},rand:function(e,t){return Math.round(e-.5+Math.random()*(t-e+1))},getDomain:function(e){return e.replace(/https?:\/\/(www.)?/i,"").replace(/\/.*/i,"")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.querySelectorAll("[data-locale-message]");Array.prototype.slice.call(e).forEach(function(e){var t=e.getAttribute("data-locale-message");if(~t.indexOf("placeholder"))return void(e.placeholder=chrome.i18n.getMessage(t));e.textContent=chrome.i18n.getMessage(t)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Element.prototype.matches=Element.prototype.matches||function(e){for(var t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),o=0;n[o]&&n[o]!==t;)++o;return!!n[o]},Element.prototype.closest=Element.prototype.closest||function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}return null}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e){a&&(clearTimeout(c),e.removeChild(a));var t=Object.assign(document.createElement("span"),{className:"ripple"});return e.appendChild(t),t}function t(t,n){if(1!==n.which)return!0;var o=n.target.closest(t);if(o){o.classList.add("ripple-container");var r=a=e(o),i=o.getBoundingClientRect(),c=i.width,l=i.height,s=i.left,u=i.top,d=0,m=0;d=n.pageX-(s+window.pageXOffset),m=n.pageY-(u+window.pageYOffset);var g=Math.max(c,l),f=o.getAttribute("data-ripple-color")||"rgba(255,255,255, .7)";r.style.width=g+"px",r.style.height=g+"px",r.style.left=d-g/2+"px",r.style.top=m-g/2+"px",r.style.backgroundColor=f,setTimeout(function(){r.style.cssText+="transform: scale(2.5); opacity: 0.5"},10)}}function n(e,t){if(!a)return!0;if("mouseout"===t.type&&!t.target.closest(e))return!0;if("mouseup"===t.type&&1!==t.which)return!0;var n=a;a.style.opacity=0,a=null,c=setTimeout(function(){n.parentNode.removeChild(n),c=null},800)}var o={},r=void 0,i=void 0,a=void 0,c=void 0;return o.init=function(e){r=t.bind(null,e),i=n.bind(null,e),document.body.addEventListener("mousedown",r),document.body.addEventListener("mouseout",i),document.body.addEventListener("mouseup",i)},o}();t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){Object.keys(r).forEach(function(e){null===localStorage.getItem(e)&&localStorage.setItem(e,r[e])}),["http://free.pagepeeker.com/v2/thumbs.php?size=x&url=[URL]","http://api.webthumbnail.org/?width=500&height=400&screen=1280&url=[URL]"].indexOf(localStorage.getItem("thumbnailing_service"))>-1&&localStorage.setItem("thumbnailing_service","https://logo.clearbit.com/[URL]"),"true"===localStorage.getItem("enable_sync")&&chrome.storage.onChanged.addListener(function(e,t){o.restoreFromSync(),window.location.reload()})}function t(e){chrome.storage.sync.get(function(t){Object.keys(t).forEach(function(e){"default_folder_id"!==e&&localStorage.setItem(e,t[e])}),e&&e()})}function n(){var e={};Object.keys(r).forEach(function(t){localStorage[t]&&"default_folder_id"!==t&&(e[t]=localStorage[t])}),chrome.storage.sync.set(e)}var r={background_color:"#f7f7f7",background_image:"background_color",background_external:"",default_folder_id:1,dial_columns:5,vertical_center:"false",drag_and_drop:"true",auto_generate_thumbnail:"true",enable_sync:"false",show_toolbar:"true",show_favicon:"true",thumbnailing_service:"https://logo.clearbit.com/[URL]"};return{init:e,restoreFromSync:t,syncToStorage:n}}();t.default=o},function(e,t){},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(t){o(this,e),this.init(t)}return r(e,[{key:"index",value:function(e){for(var t=e.parentNode.children,n=0;n<t.length&&t[n]!==e;n++);return n}},{key:"recalc",value:function(){this.dimmensions()}},{key:"dimmensions",value:function(){this.setSliderLine();var e=this.tabs.offsetWidth,t=this.sections[this.currentId].offsetHeight;this.sections.forEach(function(t){t.style.width=e+"px"}),this.content.style.cssText="\n      transform: translateX(-"+e*this.currentId+"px);\n      height: "+t+"px;\n      width: "+e*this.sections+"px;\n    "}},{key:"selectTab",value:function(e){var t=e.target.closest(".tabs__controls");t&&(this.currentId=this.index(t),this.dimmensions(),this.setSliderLine())}},{key:"setSliderLine",value:function(){var e=this.controls[this.currentId],t=e.offsetWidth,n=e.offsetLeft;this.line.style.cssText="\n      width: "+t+"px;\n      transform: translateX("+n+"px);\n    "}},{key:"init",value:function(e){this.tabs=document.querySelector(e),this.tabs&&!this.tabs.activated&&(this.tabs.activated=!0,this.currentId=0,this.bar=this.tabs.querySelector(".tabs__bar"),this.controls=Array.prototype.slice.call(this.bar.querySelectorAll(".tabs__controls")),this.content=this.tabs.querySelector(".tabs__content"),this.sections=Array.prototype.slice.call(this.content.querySelectorAll(".tabs__section")),this.line=document.createElement("span"),this.line.className="tabs__line",this.bar.appendChild(this.line),this.setSliderLine(),this.dimmensions(),this.handlerClick=this.selectTab.bind(this),this.handlerResize=this.dimmensions.bind(this),this.bar.addEventListener("click",this.handlerClick),window.addEventListener("resize",this.handlerResize))}}]),e}();t.default=i},,,,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(6);o(r);n(3);var i=n(0),a=o(i),c=n(5),l=o(c),s=n(2),u=o(s),d=n(7),m=o(d),g=n(4),f=o(g),h=n(1),p=o(h);(0,u.default)(),f.default.init(".md-ripple");var v=new m.default(".tabs");(function(){function e(){a.default.init(500),l.default.init(),document.getElementById("option_bg").addEventListener("change",i,!1),document.getElementById("bgFile").addEventListener("change",o,!1),document.getElementById("background_local").addEventListener("click",r,!1),t();var e=chrome.runtime.getManifest();document.getElementById("ext_name").textContent=e.name,document.getElementById("ext_version").textContent=chrome.i18n.getMessage("version")+" "+e.version,document.getElementById("save").addEventListener("click",n,!1),document.getElementById("restore_local").addEventListener("click",s,!1),document.getElementById("restore_sync").addEventListener("click",u,!1),document.getElementById("enable_sync").addEventListener("change",d,!1),document.getElementById("clear_images").addEventListener("click",c,!1)}function t(){m(),document.getElementById("dial_columns").value=localStorage.getItem("dial_columns"),document.getElementById("vertical_center").checked="true"===localStorage.getItem("vertical_center"),document.getElementById("background_color").value=localStorage.getItem("background_color");var e=document.getElementById("option_bg");Array.prototype.slice.call(e.querySelectorAll("option")).forEach(function(t){if(t.value===localStorage.getItem("background_image"))return t.selected=!0,void p.default.trigger("change",e)}),document.getElementById("background_external").value=localStorage.getItem("background_external"),document.getElementById("thumbnailing_service").value=localStorage.getItem("thumbnailing_service"),document.getElementById("drag_and_drop").checked="true"===localStorage.getItem("drag_and_drop"),document.getElementById("auto_generate_thumbnail").checked="true"===localStorage.getItem("auto_generate_thumbnail"),document.getElementById("show_toolbar").checked="true"===localStorage.getItem("show_toolbar"),document.getElementById("show_favicon").checked="true"===localStorage.getItem("show_favicon"),document.getElementById("enable_sync").checked="true"===localStorage.getItem("enable_sync")}function n(){localStorage.setItem("dial_columns",document.getElementById("dial_columns").value),localStorage.setItem("vertical_center",document.getElementById("vertical_center").checked),localStorage.setItem("default_folder_id",document.getElementById("selectFolder").value),localStorage.setItem("background_color",document.getElementById("background_color").value),localStorage.setItem("background_external",document.getElementById("background_external").value),localStorage.setItem("thumbnailing_service",document.getElementById("thumbnailing_service").value),localStorage.setItem("drag_and_drop",document.getElementById("drag_and_drop").checked),localStorage.setItem("auto_generate_thumbnail",document.getElementById("auto_generate_thumbnail").checked),localStorage.setItem("show_toolbar",document.getElementById("show_toolbar").checked),localStorage.setItem("show_favicon",document.getElementById("show_favicon").checked),localStorage.setItem("enable_sync",document.getElementById("enable_sync").checked),"true"===localStorage.getItem("enable_sync")&&l.default.syncToStorage(),p.default.notifications(chrome.i18n.getMessage("notice_save_settings_success")),t()}function o(e){var t=this.files[0];if(t){if(this.closest("form").reset(),!/image\/(jpe?g|png)$/.test(t.type))return alert(chrome.i18n.getMessage("alert_file_type_fail"));var n="background."+t.type.replace("image/","");a.default.createDir("images",function(e){a.default.createFile("/images/"+n,{file:t,fileType:t.type},function(e){document.querySelector(".c-upload__preview").style.display="",document.getElementById("preview_upload").innerHTML='<div class="c-upload__preview-image" style="background-image: url('+e.toURL()+"?new="+Date.now()+');"><div>',localStorage.setItem("background_local",e.toURL()),p.default.notifications(chrome.i18n.getMessage("notice_bg_image_updated")),v.recalc()})})}}function r(e){if(e.target.closest("#delete_upload")&&confirm(chrome.i18n.getMessage("confirm_delete_image"),"")){e.preventDefault();var t=document.getElementById("preview_upload"),n=t.closest(".c-upload__preview"),o=localStorage.getItem("background_local");if(o){var r=o.split("/").pop();a.default.deleteFile("/images/"+r,function(){p.default.notifications(chrome.i18n.getMessage("notice_image_removed")),localStorage.removeItem("background_local"),t.innerHTML="",n.style.display="none",v.recalc()})}}}function i(e){if(Array.prototype.slice.call(document.querySelectorAll(".tbl__option")).forEach(function(e){e.style.display=""}),"background_local"===this.value){var t=localStorage.getItem("background_local");t?(document.querySelector(".c-upload__preview").style.display="",document.getElementById("preview_upload").innerHTML='<div class="c-upload__preview-image" style="background-image: url('+t+"?new="+Date.now()+');"><div>'):(document.querySelector(".c-upload__preview").style.display="none",document.getElementById("preview_upload").innerHTML="")}localStorage.setItem("background_image",this.value),document.getElementById(this.value).style.display="block",v.recalc()}function c(e){e.preventDefault(),confirm(chrome.i18n.getMessage("confirm_delete_images"),"")&&(a.default.purge(),p.default.notifications(chrome.i18n.getMessage("notice_images_removed")),localStorage.setItem("background_local",""),localStorage.setItem("custom_dials","{}"))}function s(){confirm(chrome.i18n.getMessage("confirm_restore_default_settings"),"")&&(Object.keys(localStorage).forEach(function(e){"background_local"!==e&&"custom_dials"!==e&&localStorage.removeItem(e)}),l.default.init(),t(),p.default.notifications(chrome.i18n.getMessage("notice_reset_default_settings")))}function u(){confirm(chrome.i18n.getMessage("confirm_clear_sync_settings"),"")&&chrome.storage.sync.clear(p.default.notifications(chrome.i18n.getMessage("notice_sync_settings_cleared")))}function d(){this.checked&&chrome.storage.sync.getBytesInUse(null,function(e){e>0&&confirm(chrome.i18n.getMessage("confirm_sync_remote_settings"),"")&&l.default.restoreFromSync(t)})}function m(){var e=document.getElementById("selectFolder");e.innerHTML="",chrome.bookmarks.getTree(function(t){var n=[],o=[],r=void 0,i=void 0;for(o.push(t[0].children[0]),o.push(t[0].children[1]);void 0!==(r=o.pop());)if(void 0!==r.children){for("0"===r.parentId&&(r.path=""),r.path+=r.title;void 0!==(i=r.children.pop());)void 0!==i.children&&(i.path=r.path+"/",o.push(i));n.push(r)}n.sort(function(e,t){return e.path.localeCompare(t.path)});var a=[],c=localStorage.getItem("default_folder_id");n.forEach(function(e){a.push("<option"+(e.id===c?" selected":"")+' value="'+e.id+'">'+e.path+"</option>")}),e.innerHTML=a.join("")})}return{init:e}})().init()}]);