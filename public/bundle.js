(()=>{"use strict";const e=function(){function e(e){this.options=e,this.node_id=Math.random(),this.options.children=this.options.children||[]}return e.prototype.appendChild=function(t){var n,o;if(t.node_id)return t.setParentNode=this,null===(n=this.options.children)||void 0===n||n.push(t),void this.HTMLElement.appendChild(t.HTMLElement);var r=new e({tag:"text",parent:this,text_content:t});null===(o=this.options.children)||void 0===o||o.push(r)},e.prototype.removeChild=function(e){var t,n,o=null===(t=this.options.children)||void 0===t?void 0:t.findIndex((function(t){return t.getNodeId===e.getNodeId}));return-1!==o&&void 0!==o&&(null===(n=this.options.children)||void 0===n||n.splice(o,1),this.HTMLElement.removeChild(e.HTMLElement),!0)},Object.defineProperty(e.prototype,"HTMLElement",{get:function(){return this.options.el},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"getParent",{get:function(){return this.options.parent||{}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"getChildren",{get:function(){return this.options.children||[]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"getTag",{get:function(){return this.options.tag},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"getProps",{get:function(){return this.options.props||{}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"getNodeId",{get:function(){return this.node_id},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"getQueryFields",{get:function(){return{node_id:this.node_id,tag:this.getTag,class:this.getProps.class,id:this.getProps.id}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"setParentNode",{set:function(e){this.options.parent||(this.options.parent=e)},enumerable:!1,configurable:!0}),e.prototype.queryNode=function(e){for(var t=Object.keys(e),n=!0,o=0;o<t.length;o++)n=n&&e[t[o]]===this.getQueryFields[t[o]];return n?[this]:this.qN(e,this.getChildren)},e.prototype.qN=function(e,t){if(0===t.length)return[];Object.keys(e)[0];var n=t.filter((function(t){for(var n=Object.keys(e),o=!0,r=0;r<n.length;r++)o=o&&e[n[r]]===t.getQueryFields[n[r]];return o}));if(n.length>0)return n;var o=[];return t.forEach((function(e){return o.push.apply(o,e.getChildren)})),this.qN(e,o)},e}();var t=new(function(){function t(t){var n,o;this.root=new e({tag:"root",props:{id:t,class:null===(n=document.querySelector(t))||void 0===n?void 0:n.className},el:document.querySelector(t),text_content:null===(o=document.querySelector(t))||void 0===o?void 0:o.textContent});for(var r=0;r<this.root.HTMLElement.children.length;r++)this.populate(this.root.HTMLElement.children[r],this.root)}return Object.defineProperty(t.prototype,"document",{get:function(){return this.root},enumerable:!1,configurable:!0}),t.prototype.getContext=function(){console.log(this.document.HTMLElement.children)},t.prototype.populate=function(t,n){var o=new e({tag:t.localName,parent:n,el:t,props:{id:t.id,class:t.className},text_content:t.textContent});n.appendChild(o);for(var r=0;r<t.children.length;r++)this.populate(t.children[r],o)},t}())("#app");console.log("VDOM: ",t),console.log("teste")})();