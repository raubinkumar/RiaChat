(this.webpackJsonpnotification=this.webpackJsonpnotification||[]).push([[0],{13:function(e,t,a){e.exports=a(33)},18:function(e,t,a){},19:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},20:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(6),i=a.n(c),o=(a(18),a(19),a(20),a(1)),r=a(7),l=a(8),m=a(12),u=a(9),h=a(3),g=a(11),d=a(10),f=a.n(d),b={PUBNUB:{publishKey:"pub-c-bea40ce9-2179-4866-8140-fa8942c4ef4f",subscribeKey:"sub-c-7e9caa68-f1bd-11e9-bdee-36080f78eb20"}},p=(Object.keys(b),function(){var e=b["PUBNUB"]||{},t=new f.a({publishKey:e.publishKey,subscribeKey:e.subscribeKey});return{init:function(e){t.init(e)},subscribe:function(e){return t.subscribe({channels:[e],withPresence:!0})},getStatus:function(e){return function(a){console.log(a),t.publish({message:"hello world from react",channel:e})}},getMessage:function(e,a){return t.getMessage(e,(function(e){a(e.message)}))},getHistory:function(e,a,n){return t.history({channel:e,count:100,stringifiedTimeToken:!0,end:a.toString(),reverse:!1},(function(e,t){n(e,t)}))},publish:function(e,a){return t.publish({message:e,channel:a})},unsubscribe:function(e){return t.unsubscribe({channels:[e]})}}}),v=function(e){return p(e)},w=(a(32),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).sendMessage=function(){var e=a.state,t=e.chats,n=e.userName,s=e.message;if(s.trim()){var c=[{timestamp:new Date-0,sender:n,message:s,random:a.senderRandom}];a.service.publish(c[0],a.state.channelName),a.setState({chats:[].concat(Object(o.a)(t),c),message:""}),window.localStorage.setItem("_chats",JSON.stringify([].concat(Object(o.a)(t),c))),a.scrollToEnd()}},a.scrollToEnd=function(){setTimeout((function(){var e=a.refs["chat-holder"];e.scroll(0,e.scrollHeight)}),50)},a.setUsername=function(){a.setState({userName:a.state.name}),window.localStorage.setItem("__user_name",a.state.name)},a.nameChange=function(e){var t=e.target;a.setState({name:t.value})},a.setMessage=function(e){a.setState({message:e.target.value})},a.messageInputKeyUp=function(e){13===e.keyCode&&a.sendMessage()},a.nameFieldKeyDown=function(e){13===e.keyCode&&a.setUsername()},a.state={name:"",userName:window.localStorage.getItem("__user_name"),channelName:window.localStorage.getItem("channel_name"),chats:window.localStorage.getItem("_chats")&&JSON.parse(window.localStorage.getItem("_chats"))||[],message:""},a.service=v(),a.service.init(Object(h.a)(a)),a.senderRandom=(new Date-Math.random()).toString(36),a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=window.localStorage.getItem("channel_name");if(t){this.service.subscribe(t);var a=this.state.chats;this.service.getMessage(t,(function(t){var n=e.state.chats;if(e.senderRandom!==t.random){var s=[{timestamp:new Date-0,sender:t.sender,message:t.message}];e.setState({chats:[].concat(Object(o.a)(n),s),message:""}),window.localStorage.setItem("_chats",JSON.stringify([].concat(Object(o.a)(a),s))),e.scrollToEnd()}}));var n=a&&a[0]&&a[0].timestamp||0;if(a&&a.length>1){var s=a.sort((function(e,t){return t.timestamp-e.timestamp}));n=s[0].timestamp}this.service.getHistory(t,1e4*n,(function(t,s){if(!t.error){var c=s.messages.filter((function(e){return e.entry.timestamp>n})).map((function(e){return e.entry}));e.setState({chats:[].concat(Object(o.a)(a),Object(o.a)(c))}),window.localStorage.setItem("_chats",JSON.stringify([].concat(Object(o.a)(a),Object(o.a)(c)))),e.scrollToEnd()}}))}else{var c=prompt("Enter channel name");c&&window.localStorage.setItem("channel_name",c),window.location.reload()}}},{key:"componentWillUnmount",value:function(){this.service.unsubscribe(this.state.channelName)}},{key:"render",value:function(){var e=this,t=this.state,a=t.chats;return t.userName?s.a.createElement("div",{className:"chat-body"},s.a.createElement("div",{className:"chat-message-container",ref:"chat-holder"},a&&a.map((function(t,a){return s.a.createElement("div",{key:a},s.a.createElement("div",{title:"".concat(t.sender," sent this message"),className:t.sender===e.state.userName?"message right":"message left"},t.message))}))),s.a.createElement("div",{className:"chat-inputs"},s.a.createElement("input",{onKeyUp:this.messageInputKeyUp,className:"input-text",type:"text",value:this.state.message,placeholder:"Type your message",onChange:this.setMessage}),s.a.createElement("input",{className:"input-button",type:"button",value:"Send",onClick:this.sendMessage}))):s.a.createElement("div",null,s.a.createElement("input",{className:"input-text",onKeyDown:this.nameFieldKeyDown,type:"text",placeholder:"Enter your name",onChange:this.nameChange}),s.a.createElement("input",{className:"input-button",type:"button",value:"Submit",onClick:this.setUsername}))}}]),t}(n.Component));var y=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"header"},s.a.createElement("a",{href:"#",className:"logo"},"Ria Chat"),s.a.createElement("div",{className:"header-right"},s.a.createElement("a",{className:"active",href:"#",onClick:function(){window.localStorage.clear(),window.location.reload()}},"10-11-12"))),s.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.13dd53ef.chunk.js.map