!function(){"use strict";var e,t={504:function(){var e=window.wp.blocks,t=window.wp.element,r=window.wp.components,n=window.wp.blockEditor;(0,e.registerBlockType)("create-block/europeanmigration-visuallinkpreview-wordpress",{example:{attributes:{title:"Giovane talento dell'informatica sviluppa questo sito",newsPaperName:"Il Sole 24 Ore",url:"https://emiliodallatorre.it"}},edit:function(e){let{attributes:o,setAttributes:l}=e;const i=(0,n.useBlockProps)();return(0,t.createElement)("div",i,(0,t.createElement)(r.TextControl,{label:"Titolo dell'articolo",value:o.title,onChange:e=>l({title:e})}),(0,t.createElement)(r.TextControl,{label:"URL dell'articolo",value:o.url,onChange:e=>l({url:e})}),(0,t.createElement)(r.TextControl,{label:"Nome del media",value:o.newsPaperName,onChange:e=>l({newsPaperName:e})}))},save:function(e){let{attributes:r}=e;const o=n.useBlockProps.save();return(0,t.createElement)("div",o,(0,t.createElement)("p",null,r.newsPaperName),(0,t.createElement)("a",{href:r.url},r.title))}})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=function(t,r,o,l){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],l=e[c][2];for(var a=!0,u=0;u<r.length;u++)(!1&l||i>=l)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(a=!1,l<i&&(i=l));if(a){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[r,o,l]},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,l,i=r[0],a=r[1],u=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var c=u(n)}for(t&&t(r);s<i.length;s++)l=i[s],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},r=self.webpackChunkeuropeanmigration_visuallinkpreview_wordpress=self.webpackChunkeuropeanmigration_visuallinkpreview_wordpress||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[431],(function(){return n(504)}));o=n.O(o)}();