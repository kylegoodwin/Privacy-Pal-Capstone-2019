(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){"use strict";function o(e){return e&&"object"===typeof e&&"default"in e?e.default:e}var r=n(0),s=o(r),a=o(n(13)),i=function(e){return s.createElement("div",{style:c.main},e.profileImage&&s.createElement("div",null,s.createElement("img",{style:c.img,src:e.profileImage})),s.createElement("span",{style:c.text},s.createElement("p",{style:c.heading},e.heading),s.createElement("p",{style:c.subheading},e.subheading)))},c={main:{display:"flex",alignItems:"center"},img:{width:40,height:40,borderRadius:40,marginRight:10,filter:"drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))",border:"2px solid rgba(255, 255, 255, 0.8)"},text:{display:"flex",flexDirection:"column",filter:"drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9))"},heading:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.9)"},subheading:{fontSize:"0.6rem",color:"rgba(255, 255, 255, 0.8)"}};i.propTypes={heading:a.string,subheading:a.string,profileImage:a.string};var l={inner:"styles_inner__x-amJ",spinner:"styles_spinner__1CK7F","sk-scaleout":"styles_sk-scaleout__1hEQ2",autoHide:"styles_autoHide__83H_q",seeMore:"styles_seeMore__1dyHs",seemoreText:"styles_seemoreText__1wvli",seemoreIcon:"styles_seemoreIcon__1rAV5",seeMoreExpanded:"styles_seeMoreExpanded__1l-e8",seeMoreClose:"styles_seeMoreClose__3jq_i",slidein:"styles_slidein__1q-h-"};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("body{\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n/*\nh3{\n  z-index: 9999;\n  color: white;\n  position: absolute;\n  bottom: 100px;\n  background: black;\n  padding: 20px;\n}\n*/\n\n.styles_inner__x-amJ {\n  background: #fff;\n  height: 100%;\n  max-width: 100%;\n  transform-origin: center left;\n\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -ms-backface-visibility: hidden;\n  backface-visibility: hidden;\n\n  -webkit-perspective: 1000;\n  -moz-perspective: 1000;\n  -ms-perspective: 1000;\n  perspective: 1000;\n}\n\np{\n  margin: 0\n}\n\n@keyframes styles_slidein__1q-h- {\n  from { \n    -webkit-transform: scale3d(0, 1, 1);\n    -moz-transform: scale3d(0, 1, 1);\n    -ms-transform: scale3d(0, 1, 1);\n    -o-transform: scale3d(0, 1, 1);\n    transform: scale3d(0, 1, 1); \n  }\n  to { \n    -webkit-transform: scale3d(1, 1, 1);\n    -moz-transform: scale3d(1, 1, 1);\n    -ms-transform: scale3d(1, 1, 1);\n    -o-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1); \n  }\n}\n\n.styles_spinner__1CK7F {\n  width: 40px;\n  height: 40px;\n  margin: 100px auto;\n  background-color: #fff;\n\n  border-radius: 100%;  \n  -webkit-animation: styles_sk-scaleout__1hEQ2 1.0s infinite ease-in-out;\n  animation: styles_sk-scaleout__1hEQ2 1.0s infinite ease-in-out;\n}\n\n@-webkit-keyframes styles_sk-scaleout__1hEQ2 {\n  0% { -webkit-transform: scale(0) }\n  100% {\n    -webkit-transform: scale(1.0);\n    opacity: 0;\n  }\n}\n\n@keyframes styles_sk-scaleout__1hEQ2 {\n  0% { \n    -webkit-transform: scale(0);\n    transform: scale(0);\n  } 100% {\n    -webkit-transform: scale(1.0);\n    transform: scale(1.0);\n    opacity: 0;\n  }\n}\n\n.styles_autoHide__83H_q{\n  transition: opacity 400ms ease-in-out\n}\n\n.styles_seeMore__1dyHs{\n  height: 10vh;\n  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.styles_seeMore__1dyHs:hover{\n  cursor: pointer;\n}\n\n.styles_seeMore__1dyHs .styles_seemoreText__1wvli{\n  color: white;\n  text-align: center;\n  letter-spacing: 0.2em;\n  margin-bottom: 2.2vh;\n  text-transform: capitalize;\n  opacity: 0.6;\n  font-size: 0.7em;\n  transition: opacity 300ms ease-in-out  \n}\n\n.styles_seeMore__1dyHs .styles_seemoreIcon__1rAV5{\n  color: white;\n  text-align: center;\n  letter-spacing: 0.2em;\n  margin-bottom: 0.5vh;\n  opacity: 0.6;\n  text-transform: capitalize;\n  transition: opacity 300ms ease-in-out\n}\n\n.styles_seeMore__1dyHs:hover > .styles_seemoreIcon__1rAV5 {\n  opacity: 0.9;\n}\n\n.styles_seeMore__1dyHs:hover > .styles_seemoreText__1wvli {\n  opacity: 0.9;\n}\n\n.styles_seemoreIcon__1rAV5 img {\n  width: 5vh;\n}\n\n.styles_seeMoreExpanded__1l-e8 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  z-index: 99999;\n}\n\n.styles_seeMoreClose__3jq_i{\n  position: absolute;\n  filter: drop-shadow(0 3px 2px #ccc);\n  right: 0.5rem;\n  top: 0.5rem;\n  font-size: 1.5rem;\n  opacity: 0.7;\n  padding: 1rem\n}\n\n.styles_seeMoreClose__3jq_i:hover{\n  cursor: pointer;\n}");var u="data:image/png;base64,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";function p(e){return e.showContent?s.createElement("div",{className:l.seeMoreExpanded},e.seeMoreContent,s.createElement("div",{onClick:function(){e.toggleMore(!1),e.action("play")},className:l.seeMoreClose},s.createElement("span",null,"\u2715"))):s.createElement("div",{onClick:function(){e.toggleMore(!0),e.action("pause")},className:l.seeMore},s.createElement("span",{className:l.seemoreIcon},s.createElement("img",{src:u})),s.createElement("span",{className:l.seemoreText},"Read more"))}p.propTypes={seeMoreContent:a.object,showContent:a.bool,action:a.func,toggleMore:a.func};var d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},b=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},g=function(e){function t(e){h(this,t);var n=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggleMore=function(e){n.setState({showMore:e})},n.imageLoaded=function(){try{n.pauseId&&clearTimeout(n.pauseId),n.setState({loaded:!0}),n.props.action("play",!0)}catch(e){console.log(e)}},n.videoLoaded=function(){try{n.props.getVideoDuration(n.vid.duration),n.vid&&n.vid.play().then(function(){n.imageLoaded()}).catch(function(e){n.props.action("pause"),console.log(e)})}catch(e){console.log(e)}},n.state={loaded:!1},n.getStoryContent=n.getStoryContent.bind(n),n}return f(t,e),m(t,[{key:"componentDidUpdate",value:function(e){var t=this;this.props.story!==e.story&&(this.pauseId&&clearTimeout(this.pauseId),this.pauseId=setTimeout(function(){t.setState({loaded:!1})},300),this.props.action("pause",!0),this.vid&&this.vid.addEventListener("waiting",function(){t.props.action("pause",!0)}),this.vid&&this.vid.addEventListener("playing",function(){t.props.action("play",!0)})),this.vid&&this.props.playState!==e.playState&&!this.props.bufferAction&&(this.props.playState?this.vid.pause():this.vid.play().catch(function(e){return console.log(e)}))}},{key:"getStoryContent",value:function(){var e=this,t="object"===d(this.props.story)?this.props.story.url:this.props.story,n=this.props.story.styles||this.props.storyContentStyles||v.storyContent,o="video"===this.props.story.type?"video":"image";return"image"===o?s.createElement("img",{style:n,src:t,onLoad:this.imageLoaded}):"video"===o?s.createElement("video",{ref:function(t){e.vid=t},style:n,src:t,controls:!1,onLoadedData:this.videoLoaded,autoPlay:!0}):null}},{key:"render",value:function(){var e=this,t="object"===d(this.props.story)&&this.props.story.header;return s.createElement("div",{id:"story-container-extension",style:y({},v.story,{width:this.props.width,height:this.props.height})},this.props.story.topText&&s.createElement("div",{style:{userSelect:"none",zIndex:"9999",fontSize:"1.5em",color:"white",position:"absolute",top:"100px",background:"rgba(0,0,0,.75)",padding:"20px",borderRadius:"20px"}}," ",this.props.story.topText),this.getStoryContent(),this.props.story.bottomText&&s.createElement("div",{style:{userSelect:"none",zIndex:"9999",fontSize:"1.5em",color:"white",position:"absolute",bottom:"100px",background:"rgba(0,0,0,.75)",padding:"20px",borderRadius:"20px"}},this.props.story.bottomText),t&&s.createElement("div",{style:{position:"absolute",left:12,top:20,zIndex:19}},this.props.header?function(){return e.props.header(e.props.story.header)}:s.createElement(i,{heading:this.props.story.header.heading,subheading:this.props.story.header.subheading,profileImage:this.props.story.header.profileImage})),!this.state.loaded&&s.createElement("div",{style:{width:this.props.width,height:this.props.height,position:"absolute",left:0,top:0,background:"rgba(0, 0, 0, 0.9)",zIndex:9,display:"flex",justifyContent:"center",alignItems:"center",color:"#ccc"}},this.props.loader||s.createElement("div",{className:l.spinner})),this.props.story.seeMore&&s.createElement("div",{style:{position:"absolute",margin:"auto",bottom:0,zIndex:9999,width:"100%"}},s.createElement(p,{action:this.props.action,toggleMore:this.toggleMore,showContent:this.state.showMore,seeMoreContent:this.props.story.seeMore})))}}]),t}(s.Component),v={story:{display:"flex",position:"relative",overflow:"hidden"},storyContent:{width:"auto",maxWidth:"100%",maxHeight:"100%",margin:"auto"}};g.propTypes={story:a.oneOfType([a.object,a.string]),height:a.number,width:a.number,action:a.func,loader:a.element,header:a.element,playState:a.bool,getVideoDuration:a.func,bufferAction:a.bool,storyContentStyles:a.object};var w=function(e){function t(e){h(this,t);var n=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.next=function(){n.props.next()},n.state={duration:n.props.defaultInterval},n}return f(t,e),m(t,[{key:"componentDidMount",value:function(){this.inner&&(this.inner.addEventListener("webkitAnimationEnd",this.next,!1),this.inner.addEventListener("animationend",this.next,!1),this.inner.addEventListener("oanimationend",this.next,!1))}},{key:"render",value:function(){var e=this,t=void 0;switch(this.props.active){case 2:t={width:"100%"};break;case 1:t={animation:this.state.duration+"ms linear 0ms "+l.slidein,animationPlayState:this.props.pause?"paused":"running"};break;case 0:default:t={width:0}}return s.createElement("div",{className:l.autoHide,style:y({},x.progress,{width:100*this.props.width+"%",opacity:this.props.pause&&!this.props.bufferAction?0:1})},s.createElement("div",{ref:function(t){e.inner=t},className:l.inner,style:t}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.currentStory;return"object"===("undefined"===typeof n?"undefined":d(n))?n.type&&e.videoDuration?{duration:1e3*e.videoDuration}:n.duration?{duration:n.duration}:{duration:e.defaultInterval}:{duration:e.defaultInterval}}}]),t}(s.PureComponent),x={progress:{height:2,maxWidth:"100%",background:"#555",margin:2}};w.propTypes={width:a.number,defaultInterval:a.number,pause:a.bool,next:a.func,active:a.number,currentStory:a.oneOfType([a.string,a.object]),videoDuration:a.number,bufferAction:a.bool};var k=function(e){function t(){return h(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return f(t,e),m(t,[{key:"render",value:function(){var e=this;return s.createElement("div",{style:E.progressArr},this.props.length.map(function(t,n){return s.createElement(w,{key:n,width:1/e.props.length.length,next:e.props.next,defaultInterval:e.props.defaultInterval,videoDuration:e.props.videoDuration,currentStory:e.props.currentStory,active:t===e.props.progress.id?1:t<e.props.progress.id?2:0,pause:e.props.pause,bufferAction:e.props.bufferAction})}))}}]),t}(s.Component),E={progressArr:{display:"flex",justifyContent:"center",maxWidth:"100%",flexWrap:"row",position:"absolute",width:"98%",padding:5,paddingTop:7,alignSelf:"center",zIndex:99,filter:"drop-shadow(0 1px 8px #000)"}};k.propTypes={length:a.array,progress:a.object,pause:a.bool,next:a.func,currentStory:a.oneOfType([a.string,a.object]),defaultInterval:a.number,videoDuration:a.number,bufferAction:a.bool};var A=function(e){function t(e){h(this,t);var n=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.pause=function(e,t){n.setState({pause:"pause"===e,bufferAction:t})},n.previous=function(){n.state.currentId>0&&n.setState({currentId:n.state.currentId-1,count:0})},n.next=function(){return n.props.usf(),n.state.currentId<n.props.stories.length-1&&(n.setState({currentId:n.state.currentId+1,count:0}),!0)},n.getCurrentID=function(){return n.state.currentId},n.isLastStory=function(){return n.state.currentId===n.props.stories.length-1},n.debouncePause=function(e){e.preventDefault(),n.mousedownId=setTimeout(function(){n.pause("pause")},200)},n.mouseUp=function(e,t){e.preventDefault(),n.mousedownId&&clearTimeout(n.mousedownId),n.state.pause?n.pause("play"):"next"===t?n.next():n.previous()},n.getVideoDuration=function(e){n.setState({videoDuration:e})},n.toggleMore=function(e){return!!n.story&&(n.story.toggleMore(e),!0)},n.state={currentId:0,pause:!0,count:0,storiesDone:0},n.defaultInterval=4e3,n.width=e.width||360,n.height=e.height||640,n}return f(t,e),m(t,[{key:"componentDidMount",value:function(){this.props.defaultInterval&&(this.defaultInterval=this.props.defaultInterval)}},{key:"render",value:function(){var e=this;return s.createElement("div",{style:y({},j.container,{width:this.width,height:this.height})},s.createElement(k,{next:this.next,pause:this.state.pause,bufferAction:this.state.bufferAction,videoDuration:this.state.videoDuration,length:this.props.stories.map(function(e,t){return t}),defaultInterval:this.defaultInterval,currentStory:this.props.stories[this.state.currentId],progress:{id:this.state.currentId,completed:this.state.count/(this.props.stories[this.state.currentId]&&this.props.stories[this.state.currentId].duration||this.defaultInterval)}}),s.createElement(g,{ref:function(t){return e.story=t},action:this.pause,bufferAction:this.state.bufferAction,height:this.height,playState:this.state.pause,width:this.width,story:this.props.stories[this.state.currentId],loader:this.props.loader,header:this.props.header,getVideoDuration:this.getVideoDuration,storyContentStyles:this.props.storyContentStyles}),s.createElement("div",{style:j.overlay},s.createElement("div",{style:{width:this.width/2,zIndex:999},onTouchStart:this.debouncePause,onTouchEnd:function(t){return e.mouseUp(t,"previous")},onMouseDown:this.debouncePause,onMouseUp:function(t){return e.mouseUp(t,"previous")}}),s.createElement("div",{style:{width:this.width/2,zIndex:999},onTouchStart:this.debouncePause,onTouchEnd:function(t){return e.mouseUp(t,"next")},onMouseDown:this.debouncePause,onMouseUp:function(t){return e.mouseUp(t,"next")}})))}}]),t}(s.Component),j={container:{display:"flex",flexDirection:"column",background:"#111",position:"relative"},overlay:{position:"absolute",height:"inherit",width:"inherit",display:"flex"},left:{},right:{}};A.propTypes={stories:a.array,defaultInterval:a.number,width:a.number,height:a.number,loader:a.element,header:a.element,storyContentStyles:a.object};var T=function(e){function t(e){h(this,t);var n=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.pause=n.pause.bind(n),n.play=n.play.bind(n),n.previous=n.previous.bind(n),n.next=n.next.bind(n),n}return f(t,e),m(t,[{key:"componentDidMount",value:function(){this.props.stories.map(function(e){var t=new Image;"object"===("undefined"===typeof e?"undefined":d(e))&&"video"===e.type||(t.src="object"===("undefined"===typeof e?"undefined":d(e))?e.url:e)})}},{key:"pause",value:function(){return!!this.c&&(this.c.pause("pause"),!0)}},{key:"play",value:function(){return!!this.c&&(this.c.pause("play"),!0)}},{key:"previous",value:function(){return!!this.c&&(this.c.previous(),!0)}},{key:"next",value:function(){return!!this.c&&this.c.next()}},{key:"getCurrentID",value:function(){return!!this.c&&this.c.getCurrentID()}},{key:"isLastStory",value:function(){return!!this.c&&this.c.isLastStory()}},{key:"toggleSeeMore",value:function(e){return!!this.c&&this.c.toggleMore(e)}},{key:"render",value:function(){var e=this;return s.createElement("div",null,s.createElement(A,{ref:function(t){return e.c=t},stories:this.props.stories,defaultInterval:this.props.defaultInterval,width:this.props.width,height:this.props.height,loader:this.props.loader,header:this.props.header,storyContentStyles:this.props.storyStyles,usf:this.props.usf}))}}]),t}(r.Component);T.propTypes={stories:a.array,defaultInterval:a.number,width:a.number,height:a.number,loader:a.element,header:a.element,storyStyles:a.object},e.exports=T},23:function(e,t,n){e.exports=n(39)},28:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),s=n(19),a=n.n(s),i=(n(28),n(1)),c=n(5),l=n(3),u=n(2),p=n(4),d=(n(29),n(30),n(7)),h=n(11),m=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"discover-body"},r.a.createElement(g,null),r.a.createElement("p",null,"\ud83d\udc46\ud83c\udffcTap on a story below to learn more about your digital privacy "),r.a.createElement(y,null),r.a.createElement("h1",null,"Discuss"),r.a.createElement("p",null,"\ud83d\udc46\ud83c\udffc Tap on a module to test your knowlege, and discuss what you have learned. Complete them all to earn your badge!"),r.a.createElement(f,null))}}]),t}(o.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cards-container"},r.a.createElement(b,{imageName:"one",emoji:"\ud83d\udc40",title:"Intro",link:"/modules/identity",backColor:"#FF847C"}),r.a.createElement(b,{imageName:"two",emoji:"\ud83d\uded1",title:"Dont post too much!",link:"/modules/moderation",backColor:"#99B898"}),r.a.createElement(b,{imageName:"three",emoji:"\ud83d\udc7a",title:"Bullies",link:"/modules/cyberbullying",backColor:"#2A363B"}),r.a.createElement(b,{imageName:"four",emoji:"\u2694\ufe0f",title:"Protect your profile",link:"/modules/who",backColor:"#E84A5F",isLocked:!0}))}}]),t}(o.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"cards-container"},r.a.createElement(b,{imageName:"one",title:"Social Media",link:"/response/1",backColor:"#FF847C"}),r.a.createElement(b,{imageName:"two",title:"Internet Basics",link:"/response/1",backColor:"#99B898",isLocked:!0}),r.a.createElement(b,{imageName:"three",title:"Internet Economy",link:"/response/1",backColor:"#2A363B"}),r.a.createElement(b,{imageName:"four",title:"Location Services",link:"/response/1",backColor:"#E84A5F"}))}}]),t}(o.Component),b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(){n.setState({clicked:!0})},n.state={clicked:!1},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.clicked&&!this.props.isLocked?r.a.createElement(h.a,{push:!0,to:this.props.link}):r.a.createElement("div",{className:"card",onClick:this.handleClick,style:{backgroundColor:this.props.backColor}},this.props.isLocked?r.a.createElement("img",{id:"discover-lock",src:"img/lock.png"}):r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement(d.b,{to:this.props.link},this.props.title)),r.a.createElement("div",{className:"emoji"},r.a.createElement(d.b,{to:this.props.link}," ",this.props.emoji))))}}]),t}(o.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"toolbar"},r.a.createElement("h1",null,"Learn"))}}]),t}(o.Component),v={moderation:[{url:"img/moderation/story1.png",topText:"Posting In Moderation",bottomText:"Knowing How Much Is Too Much"},{url:"img/moderation/story2.png",bottomText:"Posting on social media is a great way to let friends catch a glimpse of what is going on in your life"},{url:"img/moderation/story3.png",topText:"But posting too frequently can reveal more about your personal life than you want"},{url:"img/moderation/story4.png",topText:"If your account is public, you may be posting sensitive information to viewers outside your friend group"},{url:"img/moderation/story5.png",bottomText:"By posting in moderation, you can still keep your followers entertained while keeping your personal life to yourself"},{url:"img/moderation/story6.png",topText:"You've completed this lesson",bottomText:"Tap to the right to head back to the main page"}],identity:[{url:"img/identity/story13.png",topText:"Your Identity From Your Data",bottomText:"From the things you like, to who you follow, companies know these preferences and use them..."},{url:"img/identity/story14.png",bottomText:"Social media apps like Instagram, FB, and others track your likes, geolocations, what you click and more"},{url:"img/identity/story15.png",bottomText:"All the likes and other information social media gets from you earns them lots of money"},{url:"img/identity/story16.png",bottomText:"Through this information companies know what you like, what you will most likely buy, where you\u2019re from, and can predict how you might behave."},{url:"img/identity/story17.png",topText:"All the data about you is stored by these companies, you don\u2019t know what information they have about you or what they\u2019re doing with it"},{url:"img/identity/story18.png",topText:"You can lose control of not only through social media but other things like games, online quizzes, and other apps."},{url:"https://i.imgur.com/I6kHsll.gif",topText:"You've completed this lesson",bottomText:"Tap to the right to head back to the main page"}],friends:[{url:"img/friends/story7.png",topText:"Online Friends & Your Network",bottomText:"How well do you know your \u2018friends\u2019 online and why it matters"},{url:"img/friends/story8.png",topText:"Of course your real-life friends are the some of the same ones you have online..."},{url:"img/friends/story9.png",topText:"...but what about the online friends you don\u2019t know at all?"},{url:"img/friends/story10.png",topText:"Anyone can create a profile and make themselves seem like any type of person they want"},{url:"img/friends/story11.png",bottomText:"Anyone can create a profile and make themselves seem like any type of person they want"},{url:"img/friends/story12.png",topText:"You've completed this lesson",bottomText:"Tap to the right to head back to the main page"}],cyberbullying:[{url:"img/cyberbullying/background1.png",topText:"This is Ben, a 7th grader at a local middle school"},{url:"img/cyberbullying/background2.png",topText:"He is an avid twitter user, star basketball player, and a great student!"},{url:"img/cyberbullying/background3.png",topText:"One day, he sees a tweet about a rumor regarding a female student at his school",bottomText:"The tweet claims the student was cheating on her boyfriend"},{url:"img/cyberbullying/background4.png",topText:"Ben retweeted the tweet and the rumor kept spreading...",bottomText:"The poor girl was then buillied and lost good friendships"},{url:"img/cyberbullying/background5.png",topText:"His retweet spread to his teachers, parents, and principal"},{url:"img/cyberbullying/background1.png",topText:"Ben was suspended by his school for contributing to bullying",bottomText:"Ben had to learn the hard way, but you can learn from his mistakes"},{url:"img/cyberbullying/background6.png",topText:"It is important to  not tweet potentially insensitive, harmful, or inappropriate information",bottomText:"Always be careful what you post online. If you have questions ask a parent"}],who:[{url:"img/who/depressedGirl.png",topText:"This is Anna, an 8th grader from your middle school"},{url:"img/who/penandPhone.png",topText:"She loves to write and is a frequent user of Instagram"},{url:"img/who/onPhone.png",topText:"Because she has a public account, she constantly has new, random followers",bottomText:"These followers keep direct messaging her questions"},{url:"img/who/standingInJacket.png",topText:"One account pretended to be her friend and asked for sensitive information"},{url:"img/who/matrixCode.png",topText:"Anna, not knowing any better, sent over her passwords and sensitive information"},{url:"img/who/depressedGirl.png",topText:"Anna\u2019s information was then stolen leading to other people having her data",bottomText:"Anna had to learn the hard way, but you can learn from his mistakes"},{url:"img/who/momDaughter.png",topText:"She loves to write and is a frequent user of Instagram"}]},w=n(22),x=n.n(w),k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).test=function(){n.ref.current.pause(!0)},n.play=function(){console.log(n.ref.current.next())},n.storyHasBeenUpdated=function(){n.ref.current.isLastStory()&&n.setState({storyIsFinished:!0})},n.tester=function(){console.log(n.ref.current.getCurrentID())},n.sendHome=function(){n.setState({storyIsFinished:!0})},n.ref=r.a.createRef(),n.state={storyIsFinished:!1},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"story-toolbar"}," ",r.a.createElement("img",{onClick:this.sendHome,id:"home-button",src:"img/home.svg"}),"   "),this.state.storyIsFinished?r.a.createElement(h.b,null,r.a.createElement(h.a,{to:"/Discover"})):r.a.createElement(x.a,{defaultInterval:4e3,stories:this.props.stories,width:window.innerWidth,height:window.innerHeight-75,ref:this.ref,usf:this.storyHasBeenUpdated,onClick:this.tester}))}}]),t}(o.Component),E=Object(h.f)(function(e){return r.a.createElement(A,e)}),A=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.match.params.name;return console.log(e),r.a.createElement(k,{stories:v[e]})}}]),t}(o.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"discuss-body"},r.a.createElement(T,{buttonFunction:this.props.buttonFunction,prompt:this.props.prompt}))}}]),t}(o.Component),T=function(e){function t(){var e,n;Object(i.a)(this,t);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleNext=function(){document.getElementById("text-input").value="",n.props.buttonFunction()},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"discuss-body"},r.a.createElement("div",{className:"discuss-card"},r.a.createElement("div",{className:"prompt-container"},r.a.createElement("span",{className:"discuss-prompt"},this.props.prompt),r.a.createElement("textarea",{id:"text-input",placeholder:"What do you think?"}))),r.a.createElement("div",{onClick:this.handleNext,className:"discuss-button"},"Continue"))}}]),t}(o.Component),O=["A","B","C","D","E","F"],C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).hasAnswered=function(){n.setState({hasAnswered:!0})},n.handleAnswer=function(e){e==n.props.question.correctIndex?(n.setState({correctAnswer:!0}),n.props.responseHandler(!0)):n.props.responseHandler(!1)},n.render=function(){var e,t=n.props.question.answers;return e=n.state.hasAnswered?r.a.createElement(S,{correctAnswer:n.state.correctAnswer,question:n.props.question,buttonFunction:n.props.buttonFunction}):r.a.createElement(I,{hasAnswered:n.hasAnswered,handleAnswer:n.handleAnswer,prompt:n.props.question.prompt,answers:t,answer:n.props.question.correctIndex}," "),r.a.createElement("div",{className:"quiz-body"},e)},n.state={hasAnswered:!1,correctAnswer:!1},n}return Object(p.a)(t,e),t}(o.Component),I=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleNext=function(){n.props.hasAnswered(),n.props.handleAnswer(n.state.activeAnswer)},n.handleAnswer=function(e){n.setState({activeAnswer:e.target.id})},n.state={activeAnswer:-1},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=-1,n=this.props.answers.map(function(n){return t++,r.a.createElement("div",{className:e.state.activeAnswer==t?"quiz-answer quiz-answer-selected":"quiz-answer",id:t,onClick:e.handleAnswer}," ",r.a.createElement("span",null," ",O[t])," ",n)});return r.a.createElement("div",{className:"question-body"},r.a.createElement("h1",null," Question 1:"),r.a.createElement("h2",null,this.props.prompt),n,r.a.createElement("div",{onClick:this.handleNext,className:"discuss-button"},"Submit"))}}]),t}(o.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t;return this.props.correctAnswer?(e=this.props.question.correctText,t="https://media3.giphy.com/media/31lPv5L3aIvTi/giphy.gif?cid=790b76115cd5e6f4536f626b49c6dfef&rid=giphy.gif"):(e=this.props.question.wrongText,t="https://media1.giphy.com/media/BvLBKDhHSZdAY/giphy.gif?cid=790b76115cd5e8f42e495176774a42a0&rid=giphy.gif"),r.a.createElement("div",{className:"quiz-answer-body"},r.a.createElement("img",{src:t}),r.a.createElement("div",{className:"quiz-answer-text"}," ",e," "),r.a.createElement("div",{onClick:this.props.buttonFunction,className:"discuss-button"},"Continue"))}}]),t}(o.Component),_=[{type:"question",question:{prompt:"Who can see your posts?",answers:["Everyone","Just me","My friends"],correctIndex:0,correctText:"Nice answer. Always rememeber that people can save and reshare your content!",wrongText:"Nope! Remember, people can reshare your stuff, and its not nessisarily private."}},{type:"response",prompt:"This is a test."},{type:"question",question:{prompt:"Who can see your posts?",answers:["Everyone","Just me","My friends","My friends","My friends","My friends","My friends"],correctIndex:0,correctText:"Nice answer. Always rememeber that people can save and reshare your content!",wrongText:"Nope! Remember, people can reshare your stuff, and its not nessisarily private."}},{type:"question",question:{prompt:"Who can see your posts?",answers:["FUCK"],correctIndex:0,correctText:"Nice answer. Always rememeber that people can save and reshare your content!",wrongText:"Nope! Remember, people can reshare your stuff, and its not nessisarily private."}}],N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).responseHandler=function(e){var t=n.state.multiChoiceNumber+1;if(n.setState({multiChoiceNumber:t}),e){var o=n.state.correctNumber+1;n.setState({correctNumber:o})}},n.whatContentToDisplay=function(e){return"question"==e.type?r.a.createElement(C,{question:e.question,responseHandler:n.responseHandler,buttonFunction:n.buttonFunction}):"response"==e.type?r.a.createElement(j,{buttonFunction:n.buttonFunction,prompt:e.prompt}):void 0},n.buttonFunction=function(){var e=n.state.questionNumber+1;n.setState({questionNumber:e})},n.state={questionNumber:0,correctNumber:0,multiChoiceNumber:0},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e;return this.state.questionNumber<_.length?e=this.whatContentToDisplay(_[this.state.questionNumber]):(console.log("correct number : "+this.state.correctNumber),e=r.a.createElement("h1",{className:"quiz-final"}," You got ",this.state.correctNumber," right out of ",this.state.multiChoiceNumber,"!")),r.a.createElement("div",null,r.a.createElement("div",{className:"quiz-toolbar"}," ",r.a.createElement(d.b,{to:"/"},r.a.createElement("img",{id:"home-button",src:"img/home.svg"})),"   "),e)}}]),t}(o.Component),M=Object(h.f)(function(e){return r.a.createElement(D,e)}),D=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){this.props.match.params.name;return r.a.createElement(N,null)}}]),t}(o.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(m,null)}}),r.a.createElement(h.b,{exact:!0,path:"/Discover",render:function(e){return r.a.createElement(m,null)}}),r.a.createElement(h.b,{path:"/modules/:name",render:function(e){return r.a.createElement(E,null)}}),r.a.createElement(h.b,{exact:!0,path:"/response/:number",render:function(e){return r.a.createElement(M,null)}}))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.60c132a4.chunk.js.map