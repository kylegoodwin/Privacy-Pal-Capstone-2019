(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){},126:function(e,t,a){},130:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(16),o=a.n(r),i=a(3),c=a(4),l=a(6),u=a(5),m=a(7),h=a(151),p=a(71),d=a(52),g=a(149),b=a(12),E=a.n(b),v=(a(122),n.Component,n.Component,s.a.createContext(null),a(126),a(127),n.Component,function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target.name,n=e.target.value,s={};s[t]=n,a.setState(s)},a.handleSignIn=function(e){console.log("HERE Now");var t=a.state,n=t.email,s=t.password;a.setState({errorMessage:null}),E.a.auth().signInWithEmailAndPassword(n,s).then(function(){a.setState({email:"",password:""})}).catch(function(e){a.setState({errorMessage:e.nessage})})},a.switchToSignIn=function(){a.setState({signIn:!0})},a.switchSignUp=function(e){a.state.signIn?a.handleSignIn():a.handleSignUp()},a.handleSignUp=function(e){var t=a.state,n=t.username,s=t.email,r=t.password;a.setState({errorMessage:null}),E.a.auth().createUserWithEmailAndPassword(s,r).then(function(e){var t=e.user;t&&t.updateProfile({displayName:n}),a.setState({username:"",email:"",password:""})}).catch(function(e){console.log(e.message),a.setState({errorMessage:e.message})})},a.state={username:"",email:"",password:"",signIn:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=""===this.state.email||""===this.state.password,t=e||""===this.state.username;return s.a.createElement("div",{className:"register-page"},s.a.createElement("div",{className:"container sign-up-form"},!this.state.signIn&&s.a.createElement("div",null,s.a.createElement("h2",{className:"register-h2"},"Create an account"),s.a.createElement("p",null," Using an account will let you access the learning modules and track your privacy learning progress. We take your data privacy seriously and dont share your information with third parties."),s.a.createElement("p",null," Already have an account?  ",s.a.createElement("button",{onClick:this.switchToSignIn,className:"btn-sm btn-secondary sign-up-button"},"Sign In"))),this.state.signIn&&s.a.createElement("div",null,s.a.createElement("h2",{className:"register-h2"},"Sign In"),s.a.createElement("p",null," Using an account will let you access the learning modules and track your privacy learning progress. We take your data privacy seriously and dont share your information with third parties.")),s.a.createElement("form",null,!this.state.signIn&&s.a.createElement("div",{className:"form-group username"},s.a.createElement("input",{className:"form-control",id:"username",type:"text",name:"username",onChange:this.handleChange,placeholder:"Username"})),s.a.createElement("div",{className:"form-group email"},s.a.createElement("input",{className:"form-control",id:"email",type:"text",name:"email",onChange:this.handleChange,placeholder:"Email Address"})),s.a.createElement("div",{className:"form-group password"},s.a.createElement("input",{className:"form-control",id:"password",type:"password",name:"password",onChange:this.handleChange,placeholder:"Password"})),s.a.createElement("div",{className:"form-group"},s.a.createElement("button",{className:"btn btn-primary sign-up-button",disabled:this.state.signIn?e:t,type:"button",onClick:this.switchSignUp},"Start Learning")))))}}]),t}(n.Component)),y=a(9),f=(a(130),a(131),function(e){var t=e.url,a=e._id,n={backgroundImage:"url(".concat(t,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"};return s.a.createElement("div",{id:"card-".concat(a),className:"image-slide",style:n})}),N=function(e){var t=e.direction,a=e.clickFunction,n=e.glyph;return s.a.createElement("div",{className:"slide-arrow ".concat(t),onClick:a},n)},w={properties:[{_id:"img-0",index:0,image:"/img/nature-photo-1.jpg",displayText:"Wow! Look at that!"},{_id:"img-1",index:1,image:"/img/nature-photo-2.jpg",displayText:"And another one!"},{_id:"img-2",index:2,image:"/img/nature-photo-3.jpg",displayText:"So many cool pics!"},{_id:"img-3",index:3,image:"/img/nature-photo-4.jpg",displayText:"And one more for good measure!"}]},x=(n.Component,a(139),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("img",{src:"img/HeaderLogo.png",className:"logo"}),s.a.createElement("div",{className:"row d-flex align-items-center text-left sweg"},s.a.createElement("div",{className:"col-sm-4"},s.a.createElement("div",{className:"card border-0"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h1",{className:"card-title text-light display-4"},"Privacy Education Platform"),s.a.createElement(g.a,{to:"/sign-up",className:"nav-link"})))),s.a.createElement("div",{className:"col-sm-8"},s.a.createElement("div",{className:"card border-0"},s.a.createElement("div",{className:"card-body"},s.a.createElement("img",{className:"header-image float-right",src:"img/kids1.jpg",alt:"student computer lab image"}))))),s.a.createElement("div",null,s.a.createElement("h1",{className:"pt-5",id:"icons-heading"}," Learning Module Topics: ")),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"column"},s.a.createElement("img",{className:"screen-shots pl-5",src:"img/posting-moderation.png"}),s.a.createElement("div",null,s.a.createElement("p",{className:"icon-caption text-center font-weight-bold"},"Posting in Moderation"))),s.a.createElement("div",{id:"2",className:"column"},s.a.createElement("img",{className:"screen-shots",src:"img/online-networking.png"}),s.a.createElement("div",null,s.a.createElement("p",{className:"icon-caption text-center pr-5 font-weight-bold"},"Online Friends And Your Network"))),s.a.createElement("div",{id:"3",className:"column"},s.a.createElement("img",{className:"screen-shots pr-4",src:"img/economics.png"}),s.a.createElement("div",null,s.a.createElement("p",{className:"icon-caption text-center pr-5 font-weight-bold"},"Economics of Social Media Platforms")))),s.a.createElement("div",{id:"bigImage"},s.a.createElement("div",{className:"text-center"},s.a.createElement("h1",{id:"who-we-are"},"Our Mission"),s.a.createElement("p",{className:"image-text"},"Teach"),s.a.createElement("p",{className:"image-text"},"Protect"),s.a.createElement("p",{className:"image-text"},"Inspire"))),s.a.createElement("section",{className:"modules-display"},s.a.createElement("h1",{className:"ml-5 text-light"}," About the Project "),s.a.createElement("div",{className:"ml-5 mr-5 text-light"},"Privacy Pal is a Capstone project through the University of Washington's Informatics program. The team consists of Kyle Goodwin, Lucas Woo, Ryan Peart, and Sam Yoshikawa. Privacy Pal's goal is to inform and educate the next generation on user data, internet privacy, and how to be more cognizant about their online presence. Our online app is designed for use on smart phones and combines the designs of popular apps in the younger age groups with educational content and quizzes. We hope to break through to the Middle Schoolers and support them through their digital adventures.")))}}]),t}(n.Component)),O=(n.Component,a(140),a(141),a(150)),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).answeredCorrectly=a.answeredCorrectly.bind(Object(y.a)(Object(y.a)(a))),a.nextQuestion=a.nextQuestion.bind(Object(y.a)(Object(y.a)(a))),a.state={questionNum:0,numCorrect:0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"answeredCorrectly",value:function(){this.setState({numCorrect:this.state.numCorrect+1})}},{key:"nextQuestion",value:function(){this.setState({questionNum:this.state.questionNum+1}),console.log(this.state.questionNum)}},{key:"render",value:function(){return s.a.createElement("div",{className:"quiz-set-container"},0==this.state.questionNum?s.a.createElement(k,{toggleNextFunc:this.props.toggleNextFunc,nextQuestion:this.nextQuestion,currentQuestion:this.state.questionNum}):"",1==this.state.questionNum?s.a.createElement(S,{nextQuestion:this.nextQuestion,correctAnswer:this.answeredCorrectly,currentQuestion:this.state.questionNum}):"",2==this.state.questionNum?s.a.createElement(C,{nextQuestion:this.nextQuestion,correctAnswer:this.answeredCorrectly,currentQuestion:this.state.questionNum}):"",3==this.state.questionNum?s.a.createElement(T,{nextQuestion:this.nextQuestion,correctAnswer:this.answeredCorrectly,currentQuestion:this.state.questionNum}):"",4==this.state.questionNum?s.a.createElement(q,{nextQuestion:this.nextQuestion,correctAnswer:this.answeredCorrectly,currentQuestion:this.state.questionNum}):"",5==this.state.questionNum?s.a.createElement(A,{toggleNextFunc:this.props.toggleNextFunc,numCorrect:this.state.numCorrect}):"")}}]),t}(n.Component),k=function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"quiz-overview-container"},s.a.createElement("div",{className:"quiz-overview"},s.a.createElement("h1",null,"Quiz Time!"),s.a.createElement("p",null,"Now that you have learned a litle about tracking location data, it is time to put those skills to the test! You will be asked a series of questions from Apps that ask your permission to share your location with them. It is up to you to choose which apps you should be sharing your location with, and which ones to block from sharing your"),s.a.createElement("button",{type:"button",className:"btn btn-outline-dark btn-lg",onClick:function(){e.props.nextQuestion(),e.props.toggleNextFunc()}},"Let's Begin!")))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).showBox=function(e){"one"==e.target.id?a.setState({displayText:"This is the right choice! the app can get your location to get the weather but wont track you all the time."}):"two"==e.target.id?a.setState({displayText:"Sorry! Wrong Answer... This app will now be able to track your locaiton all the time. They sell your data to creepy ad people :("}):a.setState({displayText:"Sorry! Wrong Answer... This will keep you safe, but might be too restrictive"}),a.setState({hasSelected:!0})},a.state={displayText:"",hasSelected:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"location-quiz-container"},s.a.createElement("div",{className:"screenshot-container"},s.a.createElement("img",{src:"/img/screenshot-1.jpg"})),this.state.hasSelected?s.a.createElement("div",{className:"reveal-container"},s.a.createElement("h1",null," How did you do?"),s.a.createElement("p",null,this.state.displayText),s.a.createElement("button",{id:"next-question",className:"btn btn-outline-dark",onClick:this.props.nextQuestion},"Next Question")):s.a.createElement("div",{className:"text"},s.a.createElement("div",{className:"progress-counter'"},s.a.createElement("p",null,"Progress: ",this.props.currentQuestion," of 4")),s.a.createElement("h2",null,"Please Select The Option to Share Your Location"),s.a.createElement("p",null,"This is an example screenshot of how a phone application will ask for your location. This is the weather channel, so it may be in your best interest to allow the app to track your location. But you do may not want to let the app track your location application at all times."),s.a.createElement("h2",null,"Do you?"),s.a.createElement("div",{className:"buttons-container"},s.a.createElement(O.a,{id:"one",className:"button",variant:"outline-primary",onClick:function(t){e.showBox(t),e.props.correctAnswer()}},"Allow While Using App"),s.a.createElement(O.a,{id:"two",className:"button",variant:"outline-primary",onClick:this.showBox},"Always Allow"),s.a.createElement(O.a,{id:"three",className:"button",variant:"outline-primary",onClick:this.showBox},"Don't Allow"))))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).showBox=function(e){"one"==e.target.id?a.setState({displayText:"Sorry! Wrong Answer... Since Waze is a driving app, it does not need access to an exercising app."}):a.setState({displayText:"Correct! Giving Waze access to other apps that it is not related to puts your information at risk of being taken."}),a.setState({hasSelected:"true"})},a.state={displayText:"",hasSelected:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"location-quiz-container"},s.a.createElement("div",{className:"screenshot-container"},s.a.createElement("img",{src:"/img/screenshot-2.png"})),this.state.hasSelected?s.a.createElement("div",{className:"reveal-container"},s.a.createElement("h1",null," How did you do?"),s.a.createElement("p",null,this.state.displayText),s.a.createElement("button",{id:"next-question",className:"btn btn-outline-dark",onClick:this.props.nextQuestion},"Next Question")):s.a.createElement("div",{className:"text"},s.a.createElement("div",{className:"progress-counter'"},s.a.createElement("p",null,"Progress: ",this.props.currentQuestion," of 4")),s.a.createElement("h2",null,"Please Select The Option to Share Your Location"),s.a.createElement("p",null,"In this example, Waze, a driving navigation map, is asking you to give access to your Motion and Fitness activity. What do you choose?"),s.a.createElement("h2",null,"Do you?"),s.a.createElement("div",{className:"buttons-container"},s.a.createElement(O.a,{id:"one",className:"button",variant:"outline-primary",onClick:this.showBox},"Allow"),s.a.createElement(O.a,{id:"two",className:"button",variant:"outline-primary",onClick:function(t){e.showBox(t),e.props.correctAnswer()}},"Don't Allow"))))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).showBox=function(e){"one"==e.target.id?a.setState({displayText:"This is a risky choice that could be damaging! There are a variety of dangers underneath accepting all terms through 'ok'."}):a.setState({displayText:"This is the correct choice! In this case you have very little information on what the app is gaining access too so it's a good idea to find out more!"}),a.setState({hasSelected:"true"})},a.state={displayText:"",hasSelected:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this;return e=this.state.hasSelected?s.a.createElement("img",{src:"/img/angry_birds_terms.png"}):s.a.createElement("div",{className:"angry-birds-pic"},s.a.createElement("img",{src:"/img/angry_birds.png"})),s.a.createElement("div",{className:"location-quiz-container"},s.a.createElement("div",{className:"screenshot-container"},e),this.state.hasSelected?s.a.createElement("div",{className:"reveal-container"},s.a.createElement("h1",null," How did you do?"),s.a.createElement("p",null,this.state.displayText),s.a.createElement("button",{id:"next-question",className:"btn btn-outline-dark",onClick:this.props.nextQuestion},"Next Question")):s.a.createElement("div",{className:"text"},s.a.createElement("div",{className:"progress-counter'"},s.a.createElement("p",null,"Progress: ",this.props.currentQuestion," of 4")),s.a.createElement("h2",null,"Please Select The Option to Share Your Location"),s.a.createElement("p",null,"This is an example of choice that you experience often with games. Notice how in this instance instead of individually accepting different terms all your data rights are lumped together. What's the best choice?"),s.a.createElement("h2",null,"Accept or View The Terms?"),s.a.createElement("div",{className:"buttons-container"},s.a.createElement(O.a,{id:"one",className:"button",variant:"outline-primary",onClick:this.showBox},"Ok"),s.a.createElement(O.a,{id:"two",className:"button",variant:"outline-primary",onClick:function(e){t.showBox(e),t.props.correctAnswer()}},"Terms"))))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).showBox=function(e){e.target.id,a.setState({displayText:"This question has no official answer. Facebook Messenger is asking to share your phone contacts for the use of its app. The benefit to doing this is you can be able to easily message your friends. But the downside is that extra data could be pulled out -- such as storing phone logs, an incident that has happened in the past. "}),a.setState({hasSelected:"true"})},a.state={displayText:"",hasSelected:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"location-quiz-container"},s.a.createElement("div",{className:"screenshot-container"},s.a.createElement("img",{src:"/img/screenshot-4.png"})),this.state.hasSelected?s.a.createElement("div",{className:"reveal-container"},s.a.createElement("h1",null," How did you do?"),s.a.createElement("p",null,this.state.displayText),s.a.createElement("button",{id:"next-question",className:"btn btn-outline-dark",onClick:this.props.nextQuestion},"Next Question")):s.a.createElement("div",{className:"text"},s.a.createElement("div",{className:"progress-counter'"},s.a.createElement("p",null,"Progress: ",this.props.currentQuestion," of 4")),s.a.createElement("h2",null,"Please Select The Option to Share Your Location"),s.a.createElement("p",null,"This is Facebook Messenger. They are requesting access to your phone contacts. Which option would you pick?"),s.a.createElement("h2",null,"Do you?"),s.a.createElement("div",{className:"buttons-container"},s.a.createElement(O.a,{id:"one",className:"button",variant:"outline-primary",onClick:function(t){e.showBox(t),e.props.correctAnswer()}},"Turn On Contacts"),s.a.createElement(O.a,{id:"two",className:"button",variant:"outline-primary",onClick:function(t){e.showBox(t),e.props.correctAnswer()}},"Not Now"))))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={displayText:"",hasSelected:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.toggleNextFunc(),s.a.createElement("div",{className:"results-container"},s.a.createElement("h1",null,"Results:"),s.a.createElement("p",null,"You got ",this.props.numCorrect," right!"))}}]),t}(n.Component),Q=j,B=(n.Component,function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=Array.from(this.props.modulesList.keys()).map(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement("div",{className:"module-box",id:"side"+t},s.a.createElement("div",{className:"checkbox"}),s.a.createElement("p",null,e)))});return s.a.createElement("div",{className:"sidebar-container"},s.a.createElement("div",{className:"modules-container"},s.a.createElement("ul",null,e)))}}]),t}(n.Component)),F=function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"quiz-container"},s.a.createElement(I,{currentTab:this.props.currentTab}),s.a.createElement(P,{toggleNextFunc:this.props.toggleNextFunc,currentTab:this.props.currentTab,lessonData:this.props.lessonData}),s.a.createElement(M,{showNext:this.props.showNext,currentTab:this.props.currentTab,backButtonFunc:this.props.backButtonFunc,forwardButtonFunc:this.props.forwardButtonFunc}))}}]),t}(n.Component),I=function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"quiz-progress"},s.a.createElement("ul",null,s.a.createElement("li",{className:this.props.currentTab>=1?"current-tab":""},s.a.createElement("p",null,"Why")),s.a.createElement("li",{className:this.props.currentTab>=2?"current-tab":""},s.a.createElement("p",null,"How to Manage your Data")),s.a.createElement("li",{className:this.props.currentTab>=3?"current-tab":""},s.a.createElement("p",null,"Quiz"))))}}]),t}(n.Component),P=function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"quiz-content"},1==this.props.currentTab?s.a.createElement(W,{lessonData:this.props.lessonData}):"",2==this.props.currentTab?s.a.createElement(z,{lessonData:this.props.lessonData}):"",3==this.props.currentTab?s.a.createElement(D,{toggleNextFunc:this.props.toggleNextFunc,lessonData:this.props.lessonData}):"")}}]),t}(n.Component),W=function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"location-writing-container"},s.a.createElement("div",{className:"writing-container"},s.a.createElement("h1",null,this.props.lessonData.sectionOne.title),s.a.createElement("p",null,this.props.lessonData.sectionOne.text),s.a.createElement("h1",null,this.props.lessonData.sectionTwo.title),s.a.createElement("p",null,this.props.lessonData.sectionTwo.text)),s.a.createElement("div",{className:"image-container",style:{backgroundImage:"url(/img/NYTimesScreenshot.png)"}}))}}]),t}(n.Component),z=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"managing-data"},s.a.createElement("h1",null,"Steps to managing your data sharing"),s.a.createElement("div",{className:"learning-container"},s.a.createElement("div",{className:"image-container"},s.a.createElement("img",{src:"/img/screenshot-location-sharing.png"})),s.a.createElement("div",{className:"writing-container"},s.a.createElement("p",null,this.props.lessonData.sectionOne.text))))}}]),t}(n.Component),D=function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(Q,{toggleNextFunc:this.props.toggleNextFunc})}}]),t}(n.Component),M=function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="Next";return 3==this.props.currentTab&&(e="Finish"),s.a.createElement("div",{className:"button-container"},s.a.createElement("button",{id:"quiz-back",onClick:this.props.backButtonFunc},"Back"),s.a.createElement("button",{disabled:this.props.showNext,id:"quiz-forward",className:3==this.props.currentTab?"goldbutton":"",onClick:this.props.forwardButtonFunc},e))}}]),t}(n.Component),U=(n.Component,a(142),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={user:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.authUnSubFunction=E.a.auth().onAuthStateChanged(function(t){t?e.setState({user:t}):e.setState({user:null})})}},{key:"componentWillUnmount",value:function(){this.authUnSubFunction()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(h.a,null,s.a.createElement("div",{className:"App"},s.a.createElement("main",null,s.a.createElement(p.a,{path:"/",component:x})))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(143),a(144),a(145);E.a.initializeApp({apiKey:"AIzaSyDAWOOIDfoqr_Ygu_ppd5lFWq0YV_fCBMc",authDomain:"info-capstone-db.firebaseapp.com",databaseURL:"https://info-capstone-db.firebaseio.com",projectId:"info-capstone-db",storageBucket:"info-capstone-db.appspot.com",messagingSenderId:"1007568597264"}),o.a.render(s.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e,t,a){e.exports=a(146)}},[[72,1,2]]]);
//# sourceMappingURL=main.928a2d4a.chunk.js.map