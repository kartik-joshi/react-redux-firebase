(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{258:function(e,t,a){e.exports=a(510)},263:function(e,t,a){},510:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(253),l=a.n(c),i=(a(263),a(513)),o=a(515),s=a(257),u=a(170),m=a(512),d=a(5),p=Object(d.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(m.a,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(m.a,{to:"/",className:"btn btn-floating lighten-1"}," ",e.profile.initials))))}),h=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(m.a,{to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(m.a,{to:"/signin"},"Log In"))))},E=Object(d.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(p,{profile:a}):r.a.createElement(h,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(u.a,{to:"/",className:"brand-logo"},"Project Plan"),n))}),f=a(26),b=a(27),g=a(29),j=a(28),v=a(30),N=a(55),O=a.n(N),y=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},O()(t.createdAt.toDate()).calendar())))},C=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map(function(e){return r.a.createElement(u.a,{to:"/project/"+e.id,key:e.id},r.a.createElement(y,{project:e}))}))},S=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"blue-text"},e.user,"  "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"note-date grey-text"},O()(e.time.toDate()).fromNow()))})))))},w=a(22),P=a(16),F=a(514),R=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(C,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(S,{notifications:n})))):r.a.createElement(F.a,{to:"/signin"})}}]),t}(n.Component),x=Object(P.d)(Object(d.b)(function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),Object(w.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:5,orderBy:["time","desc"]}]))(R),U=Object(P.d)(Object(d.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth,id:a}}),Object(w.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.project,a=e.auth,n=e.id;return a.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content),r.a.createElement("div",{className:"input-field"},r.a.createElement(u.a,{to:"/updateproject/"+n},r.a.createElement("button",{className:"grey lighten-1 z-depth-0"},"Update")))),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,O()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project...")):r.a.createElement(F.a,{to:"/signin"})}),A=a(38),I=a(11),k=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(I.a)({},a.state,Object(A.a)({},e.target.id,e.target.value)))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(F.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"grey lighten-1 z-depth-0"},"Login")),r.a.createElement("div",{className:"red-text"},t?r.a.createElement("p",null,t):null)))}}]),t}(n.Component),_=Object(d.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_FAILURE",err:t})})}));var a}}})(k),L=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(I.a)({},a.state,Object(A.a)({},e.target.id,e.target.value)))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(F.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstname"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastname"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"grey lighten-1 z-depth-0"},"Sign Up"),r.a.createElement("div",{className:"red-text"},a?r.a.createElement("p",null,a):null))))}}]),t}(n.Component),T=Object(d.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,l=r(),i=c();l.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return i.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})}).then(function(){return t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_FAILURE",err:e})})}}(t))}}})(L),D=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(I.a)({},a.state,Object(A.a)({},e.target.id,e.target.value)))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"grey lighten-1 z-depth-0"},"Create")))):r.a.createElement(F.a,{to:"/signin"})}}]),t}(n.Component),z=Object(d.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,l=a().firebase.auth.uid;r.collection("projects").add(Object(I.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:l,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR",err:e})})}}(t))}}})(D),G=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={project:"",flag:!0},a.handleChange=function(e){var t=a.state.project;t[e.target.id]=e.target.value,a.setState(Object(I.a)({},a.state,{project:t}))},a.handleSubmit=function(e){e.preventDefault(),a.props.updateProject(a.state),a.props.history.push("/project/"+a.state.project.id)},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.project,n=e.id;return t.uid?a?(this.state.flag&&(this.state.project=a,this.state.project.id=n,this.state.flag=!1),r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Update Project"),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange,value:this.state.project.title})),r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange,value:this.state.project.content})),r.a.createElement("br",null),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"grey lighten-1 z-depth-0"},"Update"))))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project...")):r.a.createElement(F.a,{to:"/signin"})}}]),t}(n.Component),J=function(e,t){var a=t.match.params.id,n=e.firestore.data.projects,r=n?n[a]:null;return{auth:e.firebase.auth,project:r,id:a}},W=function(e){return{updateProject:function(t){return e((a=t,function(e,t,n){n.getFirebase,(0,n.getFirestore)().collection("projects").doc(a.project.id).set(a.project).then(e({type:"UPDATE_PROJECT"})).catch(function(t){e({type:"UPDATE_PROJECT_ERROR",err:t})})}));var a}}},B=Object(P.d)(Object(d.b)(J,W),Object(d.b)(J,W),Object(w.firestoreConnect)([{collection:"projects"}]))(G);var Y=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(E,null),r.a.createElement(o.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:x}),r.a.createElement(s.a,{path:"/project/:id",component:U}),r.a.createElement(s.a,{path:"/signin",component:_}),r.a.createElement(s.a,{path:"/signup",component:T}),r.a.createElement(s.a,{path:"/create",component:z}),r.a.createElement(s.a,{path:"/updateproject/:id",component:B})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q={},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_FAILURE":return console.log("Login Failure"),Object(I.a)({},e,{authError:"Login Failed"});case"LOGIN_SUCCESS":return console.log("Login Success"),Object(I.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("Signout Success"),e;case"SIGNUP_SUCCESS":return console.log("Signup Success"),Object(I.a)({},e,{authError:null});case"SIGNUP_FAILURE":return console.log("Signup Failed"),Object(I.a)({},e,{authError:t.err.message});default:return e}},M={projects:[{id:1,title:"Project 1",content:"blah blah blah"},{id:2,title:"Project 2",content:"blah blah blah"},{id:3,title:"Project 3",content:"blah blah blah"}]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error:  ",t.err),e;case"UPDATE_PROJECT":return console.log("updated project",t.project),e;case"UPDATE_PROJECT_ERROR":return console.log("update project error:  ",t.err),e;default:return e}},$=a(73),H=Object(P.c)({auth:K,project:Q,firestore:$.firestoreReducer,firebase:w.firebaseReducer}),V=a(256),X=a(112),Z=a.n(X);a(504),a(508);Z.a.initializeApp({apiKey:"AIzaSyDxcrsY_lQql_RGakvkWb6p9tbYp2RWzGM",authDomain:"projectplan-backend.firebaseapp.com",databaseURL:"https://projectplan-backend.firebaseio.com",projectId:"projectplan-backend",storageBucket:"projectplan-backend.appspot.com",messagingSenderId:"641094132766",appId:"1:641094132766:web:24d29d4163b85aba"}),Z.a.firestore().settings({timestampsInSnapshots:!0});var ee=Z.a,te=Object(P.e)(H,Object(P.d)(Object(P.a)(V.a.withExtraArgument({getFirebase:w.getFirebase,getFirestore:$.getFirestore})),Object($.reduxFirestore)(ee),Object(w.reactReduxFirebase)(ee,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));te.firebaseAuthIsReady.then(function(){l.a.render(r.a.createElement(d.a,{store:te},r.a.createElement(Y,null)),document.getElementById("root"))}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[258,1,2]]]);
//# sourceMappingURL=main.4695143e.chunk.js.map