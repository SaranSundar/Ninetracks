(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/background.803b5b70.png"},23:function(e,t,n){e.exports=n.p+"static/media/Logo1.dc125f8b.png"},25:function(e,t,n){e.exports=n(56)},30:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){e.exports=n.p+"static/media/Logo2.e084672b.png"},50:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),i=n(21),c=n.n(i),s=(n(30),n(32),n(7)),r=n(8),l=n(11),u=n(9),m=n(12),h=(n(34),n(59)),g=n(60),p=n(58),d=(n(36),n(22)),b=n.n(d),f=n(23),O=n.n(f),E=(n(38),n(17)),w=n.n(E);w.a.initializeApp({apiKey:"AIzaSyCEHo1HuTtlsd3A0hexBEBeawB-FP2Mp_0",authDomain:"ninetracks-80f47.firebaseapp.com",databaseURL:"https://ninetracks-80f47.firebaseio.com",projectId:"ninetracks-80f47",storageBucket:"ninetracks-80f47.appspot.com",messagingSenderId:"430266229821"});var v=w.a,S=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).loginWithGoogle=function(){v.auth().signInWithPopup(n.provider).then(function(e){e.credential.accessToken,e.user;console.log("User logged in ")}).catch(function(e){e.code,e.message,e.email,e.credential})},n.provider=new v.auth.GoogleAuthProvider,n.provider.addScope("https://www.googleapis.com/auth/contacts.readonly"),v.auth().useDeviceLanguage(),n.state={showLoginOptions:!0},v.auth().onAuthStateChanged(function(e){e?(console.log("User is signed in"),n.setState({showLoginOptions:!1})):n.setState({showLoginOptions:!0})}),n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"home"},o.a.createElement("div",{className:"home-logo-container"},o.a.createElement("img",{src:O.a})),o.a.createElement("div",{className:"home-background-container"},o.a.createElement("img",{src:b.a}),this.state.showLoginOptions&&o.a.createElement("div",{className:"home-buttons-container"},o.a.createElement("button",{className:"material-button",onClick:this.loginWithGoogle},"SIGN UP"),o.a.createElement("button",{className:"material-button",onClick:this.loginWithGoogle},"LOG IN"))))}}]),t}(a.Component),k=(n(50),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).signOutUser=function(){console.log("SIGNING OUT USER"),v.auth().signOut().then(function(){console.log("SIGN OUT SUCCESS")}).catch(function(e){})},n.state={showSignOut:!1},v.auth().onAuthStateChanged(function(e){e?n.setState({showSignOut:!0}):n.setState({showSignOut:!1})}),n}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"NavBar"},o.a.createElement("ul",{className:"list-style"},o.a.createElement("li",null,"About"),o.a.createElement("li",{style:{color:"black"}},"/"),o.a.createElement("li",null,"Contact Us"),this.state.showSignOut&&o.a.createElement("li",{className:"right-side"},o.a.createElement("button",{className:"material-button",onClick:this.signOutUser},"SIGN OUT"))))}}]),t}(a.Component)),N=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(a.Fragment,null,o.a.createElement(k,null),o.a.createElement(h.a,null,o.a.createElement(g.a,{path:"/",exact:!0,component:S}),o.a.createElement(p.a,{to:"/"})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=n(57);c.a.render(o.a.createElement(j.a,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.70973754.chunk.js.map