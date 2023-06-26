(()=>{"use strict";var e={192:(e,t,o)=>{o.d(t,{Z:()=>c});var r=o(81),n=o.n(r),a=o(645),i=o.n(a)()(n());i.push([e.id,'*,*::before,*::after{box-sizing:border-box;padding:0;margin:0}body{font-family:"Helvetica",sans-serif;font-size:.9rem;color:#202020}header{background:#2e2e2e;display:flex;justify-content:space-between;padding:7px 25px 7px 20px;position:fixed;min-width:100%;z-index:1}.header-icon{width:36px;height:36px}.header-icon:hover{background:rgba(255,255,255,.4);border-radius:5px;cursor:pointer}.title{display:flex;align-items:center;color:#fff}.title h2{margin-left:10px}.profile{display:flex;align-items:center}.profile img{width:30px;height:30x;object-fit:cover;margin-left:15px}.profile img:hover{cursor:pointer}.sidebar{position:relative;height:100vh;width:300px;background:#fafafa;padding:30px 20px}.sidebar ul{display:flex;flex-direction:column}.sidebar p{user-select:none}.tasks-timeline{margin-bottom:25px;margin-top:45px}.nav-file{display:flex;align-items:center;padding:3px 0;border-radius:5px}.nav-file svg{width:33px;height:33px;margin-right:3px}.nav-file p{white-space:nowrap}.nav-file .file-amount{margin-left:auto;text-align:end;padding-right:10px;color:#707070;font-size:.8rem}.nav-file:hover{background:#eee;cursor:pointer}.projects-nav-section{position:relative}.favorites{width:100%;padding-left:5px}.nav-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px}.nav-head p{color:#707070;font-weight:bold}.nav-head .dropdown-arrow{width:30px;height:30px;border-radius:5px;padding:5px;transition:transform .3s}.nav-head .dropdown-arrow path{fill:#707070}.dropdown-arrow:hover{background:#eee;cursor:pointer}.dropdown-arrow:hover path{fill:#3b3b3b}.drop{transform:rotate(90deg)}.favorites-list{width:100%;z-index:-2}.nav-project{display:flex;align-items:center;padding:3px 0;border-radius:5px;padding:10px 0}.nav-project .project-color{width:10px;height:10px;background:skyblue;border-radius:50%;margin-left:12px;margin-right:12px}.nav-project p{white-space:nowrap;overflow:hidden}.nav-project .file-amount{margin-left:auto;text-align:end;padding-right:10px;color:#707070;font-size:.8rem}.nav-project .project-menu-icon{display:none;margin-left:auto;padding:5px 7px 5px 0}.nav-project .project-menu-icon div{width:3px;height:3px;background:#707070;border-radius:50%;margin-left:3px}.nav-project:hover{background:#eee;cursor:pointer}.nav-project:hover>.file-amount{display:none}.nav-project:hover>.project-menu-icon{display:flex}.project-menu-icon:hover div{background:#3b3b3b}.projects{padding-top:20px;padding-left:5px;width:100%;z-index:1;background:#fafafa;position:absolute;top:30px;transition:top .3s;overflow:hidden}.projects .nav-head .add-icon{fill:#707070;width:27px;height:27px;margin-left:auto;border-radius:5px}.add-icon:hover{fill:#3b3b3b !important;background:#eee;cursor:pointer}.hide-projects{width:100%;background:#fafafa;position:absolute;left:0;top:50px;z-index:2;transition:top .3s}.project-menu{width:270px;padding:7px;background:#fff;border-radius:5px;border:1px solid rgba(0,0,0,.2039215686);position:relative;right:-100px;top:-100px;box-shadow:0 0 10px rgba(0,0,0,.1)}.project-menu li{display:flex;align-items:center;padding:3px 5px;border-radius:5px;color:#202020}.project-menu li *{pointer-events:none;user-select:none}.project-menu li:hover{background:#eee;cursor:pointer}.project-menu svg{width:26px;height:26px;margin-right:7px}.project-menu svg g#SVGRepo_iconCarrier>path{stroke:#3b3b3b}.project-menu #remove-from-favorites{display:none}.add-project-modal{position:absolute;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);color:#202020;display:none;user-select:none;z-index:999}.add-project-modal .add-project-form{background:#fff;position:fixed;left:50%;top:50%;transform:translate(-50%, -50%);width:80%;max-width:450px;padding:20px;border-radius:10px}.add-project-modal .add-project-form .form-title{font-size:1.3rem;font-weight:bold}.add-project-modal .add-project-form .form-row{display:flex;flex-direction:column;margin-top:1.3rem}.form-row{position:relative}.form-row label{font-weight:bold;margin-bottom:10px}.form-row input{padding:7px 5px;color:#202020;border-radius:5px;border:1px solid rgba(0,0,0,.2274509804);transition:border .3s}.form-row input:focus{border:1px solid #707070;outline:none}.form-row input:valid{border:1px solid #009600}.form-row button{padding:9px 12px;display:flex;align-items:center;background:none;border:1px solid rgba(0,0,0,.2274509804);border-radius:5px;color:#202020}.form-row button #current-color{border-radius:50%;width:13px;height:13px;background:#6accbc;margin-right:10px}.form-row button p{line-height:1}.form-row button:focus{border:1px solid #707070}.form-row button:hover{cursor:pointer}label[for=form-project-color]{width:fit-content}.color-list{background:#fff;height:200px;overflow-y:scroll;border-radius:5px;position:absolute;top:100%;width:100%;z-index:2;display:none}.color-list ul li{list-style:none;width:100%;display:flex;align-items:center;padding:10px 12px}.color-list ul li>div{margin-right:12px;width:12px;height:12px;border-radius:50%}.color-list ul li>p{white-space:nowrap;font-size:.8rem;color:#202020}.color-list ul li *{user-select:none;pointer-events:none}.color-list ul li[data-color-hex="#B8256F"]>div{background:#b8256f}.color-list ul li[data-color-hex="#DB4035"]>div{background:#db4035}.color-list ul li[data-color-hex="#FF9933"]>div{background:#f93}.color-list ul li[data-color-hex="#FAD000"]>div{background:#fad000}.color-list ul li[data-color-hex="#AFB83B"]>div{background:#afb83b}.color-list ul li[data-color-hex="#7ECC49"]>div{background:#7ecc49}.color-list ul li[data-color-hex="#299438"]>div{background:#299438}.color-list ul li[data-color-hex="#6ACCBC"]>div{background:#6accbc}.color-list ul li[data-color-hex="#158FAD"]>div{background:#158fad}.color-list ul li[data-color-hex="#14AAF5"]>div{background:#14aaf5}.color-list ul li[data-color-hex="#96C3EB"]>div{background:#96c3eb}.color-list ul li[data-color-hex="#4073FF"]>div{background:#4073ff}.color-list ul li[data-color-hex="#884DFF"]>div{background:#884dff}.color-list ul li[data-color-hex="#AF38EB"]>div{background:#af38eb}.color-list ul li[data-color-hex="#EB96EB"]>div{background:#eb96eb}.color-list ul li[data-color-hex="#808080"]>div{background:gray}.color-list ul li[data-color-hex="#B8B8B8"]>div{background:#b8b8b8}.color-list ul li[data-color-hex="#CCAC93"]>div{background:#ccac93}.color-list ul li:hover{background:#eee;cursor:pointer}input#favorites-checkbox{display:none}#switch{width:36px;height:18px;background:gray;border-radius:50px;position:relative}#switch:after{content:"";position:absolute;width:12px;height:12px;left:3px;top:3px;background:#fff;border-radius:12px;transition:.3s}#favorites-checkbox:checked+label #switch:after{left:21px}#favorites-checkbox:checked+label #switch{background:#ccac93}#favorites-checkbox:active+label #switch:after{width:18px}label[for=favorites-checkbox]:hover{cursor:pointer}label[for=favorites-checkbox]{display:flex;align-items:center;width:fit-content;font-weight:100}#switch{margin-right:1.5rem}.line-row{border-bottom:1px solid rgba(0,0,0,.1294117647);width:100%;height:1px;margin-top:20px}#save-project,#cancel-project,#add-project{width:4rem;height:1.8rem;display:flex;align-items:center;justify-content:center;margin-left:1rem;font-weight:bold}#cancel-project{background:#fafafa;color:#707070}#cancel-project:hover{background:#eee;color:#3b3b3b}#save-project,#add-project{color:#fff;background:#2e2e2e;opacity:.5}#add-project,#save-project:hover{cursor:pointer}#form-btn{display:flex;justify-content:right;flex-direction:row;width:100%}',""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",r=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),r&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),r&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,r,n,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),n&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=n):l[4]="".concat(n)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function o(e){for(var o=-1,r=0;r<t.length;r++)if(t[r].identifier===e){o=r;break}return o}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=o(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=n(f,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function n(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,n){var a=r(e=e||[],n=n||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=o(a[i]);t[c].references--}for(var d=r(e,n),s=0;s<a.length;s++){var l=o(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,o){var r=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(o)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var r="";o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {"));var n=void 0!==o.layer;n&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,n&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nc=void 0,(()=>{class e{constructor(e,t,o){this.name=e,this.color=t,this.favorite=o,this.tasks=[]}changeName(e){this.name=e}changeColor(e){this.color=e}changeFavorite(e){this.favorite=e}addTask(e){this.tasks.push(e)}removeTask(e){const t=this.tasks.filter((t=>t.id!==e.id));this.tasks.length=0,this.tasks.push(...t)}}class t{constructor(e,t,o,r,n){this.title=e,this.description=t,this.dueDate=o,this.priority=r,this.notes=[],this.projectId=n}changeTitle(e){this.title=e}changeDescription(e){this.description=e}changeDueDate(e){this.dueDate=e}changePriority(e){this.priority=e}changeProjectId(e){this.projectId=e}addNote(e){this.notes.push(e)}removeNote(e){const t=this.notes.filter((t=>t.id!==e.id));this.notes.length=0,this.notes.push(...t)}}class r{constructor(e,t,o){this.note=e,this.taskId=t,this.projectId=o}updateNote(e){this.note=e}}const n=(()=>{let e=[];const t=()=>{localStorage.setItem("usedIDs",JSON.stringify(e))};return{generateId:()=>{let o="";function r(){for(let e=0;e<8;e++){const e=Math.floor(72*Math.random());o+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()".charAt(e)}}return r(),e.includes(o)&&(o="",r()),e.push(o),t(),o},removeId:o=>{const r=e.indexOf(o);e.splice(r,1),t()},usedIDs:e}})(),a=(()=>{let t=[];const o=()=>{localStorage.setItem("projects",JSON.stringify(t))};return{projects:t,createProject:(r,a,i)=>{const c=new e(r,a,i);c.id=n.generateId(),t.push(c),o()},deleteProject:e=>{const r=t.indexOf(t.find((t=>t.id===e)));t.splice(r,1),i.clearTasksFromDeletedProject(e),c.clearNotesFromDeletedProject(e),n.removeId(e),o()},placeTask:e=>{t.find((t=>t.id===e.projectId)).addTask(e),o()},removeTask:e=>{t.find((t=>t.id===e.projectId)).removeTask(e),o()},transferTask:(e,r)=>{const n=t.find((t=>t.id===e.projectId)),a=n.tasks.indexOf(e);n.tasks.splice(a,1),t.find((e=>e.id===r)).tasks.push(e),o()},updateProjectStorage:o}})(),i=(()=>{let e=[];const o=()=>{localStorage.setItem("tasks",JSON.stringify(e))};return{tasks:e,createTask:(r,i,c,d,s)=>{const l=new t(r,i,c,d,s);l.id=n.generateId(),e.push(l),a.placeTask(l),o()},deleteTask:t=>{const r=e.find((e=>e.id===t));a.removeTask(r);const i=e.indexOf(e.find((e=>e.id===t)));e.splice(i,1),c.clearNotesFromDeletedTask(t),n.removeId(t),o()},clearTasksFromDeletedProject:t=>{e.filter((e=>e.projectId===t)).map((e=>e.id)).forEach((e=>n.removeId(e)));const r=e.filter((e=>e.projectId!==t));e.length=0,e.push(...r),o()},placeNote:t=>{e.find((e=>e.id===t.taskId)).addNote(t),o(),a.updateProjectStorage()},removeNote:t=>{const r=e.find((e=>e.id===t.taskId));console.log(r),r.removeNote(t),o(),a.updateProjectStorage()},transferToOtherProject:(t,r)=>{const n=e.find((e=>e.id===t));a.transferTask(n,r),n.changeProjectId(r),o()},updateTaskStorage:o}})(),c=(()=>{let e=[];const t=()=>{localStorage.setItem("notes",JSON.stringify(e))};return{notes:e,createNote:(o,a,c)=>{const d=new r(o,a,c);d.id=n.generateId(),e.push(d),t(),i.placeNote(d)},deleteNote:o=>{localStorage.removeItem("notes");const r=e.find((e=>e.id===o));i.removeNote(r);const a=e.indexOf(e.find((e=>e.id===o)));e.splice(a,1),n.removeId(o),t()},clearNotesFromDeletedTask:o=>{e.filter((e=>e.taskId===o)).map((e=>e.id)).forEach((e=>n.removeId(e)));const r=e.filter((e=>e.taskId!==o));e.length=0,e.push(...r),t()},clearNotesFromDeletedProject:o=>{e.filter((e=>e.projectId===o)).map((e=>e.id)).forEach((e=>n.removeId(e)));const r=e.filter((e=>e.projectId!==o));e.length=0,e.push(...r),t()},updateNoteStorage:t}})(),d={toggleFavorites:(()=>{const e=document.querySelector("#dropdown-favorites"),t=document.querySelector(".projects");return e.addEventListener("click",(()=>{e.classList.contains("drop")?(e.classList.remove("drop"),t.style.top="30px"):(()=>{e.classList.add("drop");const o=document.querySelector(".favorites").clientHeight;t.style.top=o+"px"})()})),{extend:()=>{if(e.classList.contains("drop")){const e=document.querySelector(".favorites").clientHeight;t.style.top=e+"px"}}}})(),toggleProjects:(()=>{const e=document.querySelector("#dropdown-projects"),t=document.querySelector(".hide-projects"),o=()=>{e.classList.remove("drop");const o=document.querySelector(".projects").clientHeight;t.style.height=o+"px",t.style.top="50px"};return e.addEventListener("click",(()=>{e.classList.contains("drop")?o():(()=>{e.classList.add("drop");const o=document.querySelector(".projects").clientHeight;t.style.top=o+"px"})()})),{hide:o,extend:()=>{if(e.classList.contains("drop")){const e=document.querySelector(".projects").clientHeight;t.style.top=e+"px"}}}})()},s=(()=>{const e=(()=>{const e=document.querySelector(".favorites-list"),t=document.querySelector(".projects-list");return{generateFavoritesToNav:()=>{e.innerHTML="",a.projects.filter((e=>e.favorite)).forEach((t=>(t=>{const o=document.createElement("li");o.classList.add("nav-project"),o.id=t.id;const r=document.createElement("div");r.classList.add("project-color"),r.style.background=t.color,o.appendChild(r);const n=document.createElement("p");n.textContent=t.name,o.appendChild(n);const a=document.createElement("p");a.classList.add("file-amount"),a.textContent=t.tasks.length,o.appendChild(a);const i=document.createElement("div");i.classList.add("project-menu-icon"),i.setAttribute("data-project-id",`${t.id}`),i.appendChild(document.createElement("div")),i.appendChild(document.createElement("div")),i.appendChild(document.createElement("div")),o.appendChild(i),e.appendChild(o)})(t)))},generateProjectsToNav:()=>{t.innerHTML="",a.projects.filter((e=>"Inbox@XFvW$W7"!==e.name)).forEach((e=>(e=>{const o=document.createElement("li");o.classList.add("nav-project"),o.id=e.id;const r=document.createElement("div");r.classList.add("project-color"),r.style.background=e.color,o.appendChild(r);const n=document.createElement("p");n.textContent=e.name,o.appendChild(n);const a=document.createElement("p");a.classList.add("file-amount"),a.textContent=e.tasks.length,o.appendChild(a);const i=document.createElement("div");i.classList.add("project-menu-icon"),i.setAttribute("data-project-id",`${e.id}`),i.appendChild(document.createElement("div")),i.appendChild(document.createElement("div")),i.appendChild(document.createElement("div")),o.appendChild(i),t.appendChild(o)})(e)))}}})(),t=(()=>{const t=document.querySelector(".add-project-modal"),o=document.querySelector(".add-project-form"),r=document.querySelector("#add-project-icon"),n=document.querySelector("#cancel-project"),i=document.querySelector("#form-project-color"),c=document.querySelector(".color-list"),s=()=>{if("block"===c.style.display)return l();t.style.display="none"},l=()=>{c.style.display="none"};r.addEventListener("click",(()=>(o.reset(),(e=>{const t=document.querySelector("#add-project");document.querySelector("#save-project").style.display="none",t.style.display="flex"})(),void(t.style.display="block")))),o.addEventListener("click",(e=>{e.stopPropagation(),l()})),t.addEventListener("click",(()=>s())),n.addEventListener("click",(()=>s())),document.addEventListener("keydown",(e=>{"Escape"===e.key&&s()})),i.addEventListener("click",(e=>{e.stopPropagation(),c.style.display="block"}));const p=document.querySelectorAll(".color-option"),u=i.querySelector("#current-color"),f=i.querySelector("p");p.forEach((e=>{e.addEventListener("click",(e=>{u.style.background=e.target.dataset.colorHex,f.textContent=e.target.dataset.colorName,i.dataset.colorSelected=e.target.dataset.colorHex}))}));const h=document.querySelector("#add-project"),m=document.querySelector("#save-project"),g=e=>{o.checkValidity()?(e.style.opacity="1",e.removeAttribute("disabled")):(e.style.opacity="0.5",e.setAttribute("disabled",""))};o.addEventListener("input",(()=>{g(h),g(m)})),h.addEventListener("click",(t=>{if(t.preventDefault(),!o.checkValidity())return;const r=document.querySelector("#form-project-name").value,n=document.querySelector("#form-project-color").dataset.colorSelected,i=document.querySelector("#favorites-checkbox").checked;a.createProject(r,n,i),e.generateProjectsToNav(),d.toggleProjects.extend(),!0===i&&(e.generateFavoritesToNav(),d.toggleFavorites.extend()),s(),o.reset(),g(h)}))})();return{NavModule:e,ProjectFormModule:t}})();var l=o(379),p=o.n(l),u=o(795),f=o.n(u),h=o(569),m=o.n(h),g=o(565),v=o.n(g),x=o(216),b=o.n(x),y=o(589),j=o.n(y),k=o(192),w={};w.styleTagTransform=j(),w.setAttributes=v(),w.insert=m().bind(null,"head"),w.domAPI=f(),w.insertStyleElement=b(),p()(k.Z,w),k.Z&&k.Z.locals&&k.Z.locals,function(){const o=localStorage.getItem("projects"),l=localStorage.getItem("tasks"),p=localStorage.getItem("notes"),u=localStorage.getItem("usedIDs");o&&a.projects.push(...JSON.parse(o)),l&&i.tasks.push(...JSON.parse(l)),p&&c.notes.push(...JSON.parse(p)),u&&n.usedIDs.push(...JSON.parse(u));const f=(e,t)=>{const o=(e=>Object.getOwnPropertyNames(e.prototype).filter((e=>"constructor"!==e)))(e),r={};o.forEach((t=>{const o=e.prototype[t];r[t]=o})),t.forEach((e=>{Object.assign(e,r)}))};f(t,i.tasks),f(e,a.projects),f(r,c.notes),a.projects.forEach((e=>e.tasks=[])),i.tasks.forEach((e=>e.notes=[])),c.notes.forEach((e=>{i.tasks.find((t=>t.id===e.taskId)).addNote(e)})),i.tasks.forEach((e=>{a.projects.find((t=>t.id===e.projectId)).addTask(e)})),a.projects.find((e=>"Inbox@XFvW$W7"===e.name))||a.createProject("Inbox@XFvW$W7",null,!1),s.NavModule.generateFavoritesToNav(),s.NavModule.generateProjectsToNav(),d.toggleProjects.hide()}(),console.log(a.projects),console.log(i.tasks),console.log(c.notes)})()})();