!function(){"use strict";var e,t={504:function(){var e=window.wp.blocks,t=window.wp.element,n=window.wp.components,r=window.wp.blockEditor;(0,e.registerBlockType)("create-block/europeanmigration-visuallinkpreview-wordpress",{example:{attributes:{title:"Giovane talento dell'informatica sviluppa questo sito",newsPaperName:"Il Sole 24 Ore",url:"https://emiliodallatorre.it"}},edit:function(e){let{attributes:a,setAttributes:l}=e;const o=(0,r.useBlockProps)();return(0,t.createElement)("div",o,(0,t.createElement)(n.TextControl,{label:"Titolo dell'articolo",value:a.title,onChange:e=>l({title:e})}),(0,t.createElement)(n.TextControl,{label:"URL dell'articolo",value:a.url,onChange:e=>l({url:e})}),(0,t.createElement)(n.TextControl,{label:"Nome del media",value:a.newsPaperName,onChange:e=>l({newsPaperName:e})}),(0,t.createElement)(n.TextControl,{label:"Data dell'articolo",value:a.date,onChange:e=>l({date:e})}))},save:function(e){let{attributes:n}=e;const a=r.useBlockProps.save();return(0,t.createElement)("div",a,(0,t.createElement)("div",{className:"columns-container"},(0,t.createElement)("div",{className:"column color-box-container left-color-box-container"}),(0,t.createElement)("div",{className:"column article-data-container"},(0,t.createElement)("div",{className:"newspaper-name"},(0,t.createElement)("a",null,n.newsPaperName)),(0,t.createElement)("div",{className:"newspaper-title"},(0,t.createElement)("h1",null,(0,t.createElement)("a",{href:n.url},n.title))),(0,t.createElement)("div",{className:"newspaper-date"},(0,t.createElement)("p",null,n.date))),(0,t.createElement)("div",{className:"column color-box-container right-color-box-container"})))}})}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=function(t,n,a,l){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],l=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&l||o>=l)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(i=!1,l<o&&(o=l));if(i){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,a,l]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,l,o=n[0],i=n[1],c=n[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(c)var u=c(r)}for(t&&t(n);s<o.length;s++)l=o[s],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(u)},n=self.webpackChunkeuropeanmigration_visuallinkpreview_wordpress=self.webpackChunkeuropeanmigration_visuallinkpreview_wordpress||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=r.O(void 0,[431],(function(){return r(504)}));a=r.O(a)}();