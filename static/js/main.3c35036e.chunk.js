(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},15:function(e,t,a){},17:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=(a(15),a(9)),i=a(1),u=a(2),s=a(4),h=a(3),m=a(5),b=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Job"),r.a.createElement("th",null,"Remove")))},p=function(e){var t=e.characterData.map(function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.job),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){e.removeCharacter(a)}},"Delete")))});return r.a.createElement("tbody",null,t)},f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.characterData,a=e.removeCharacter;return r.a.createElement("table",null,r.a.createElement(b,null),r.a.createElement(p,{characterData:t,removeCharacter:a}))}}]),t}(n.Component),v=a(8),d=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(v.a)({},n,r))},a.submitForm=function(){a.props.handleSubmit(a.state),a.setState(a.initialState)},a.initialState={name:"",job:""},a.state=a.initialState,a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state;e.name,e.job;return r.a.createElement("form",null,r.a.createElement("label",null,"Name: "),r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.state.name}),r.a.createElement("label",null,"Job: "),r.a.createElement("input",{type:"text",name:"job",onChange:this.handleChange,value:this.state.job}),r.a.createElement("input",{type:"button",value:"Submit",onClick:this.submitForm}))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*").then(function(e){return e.json()}).then(function(t){e.setState({data:t})})}},{key:"render",value:function(){var e=this.state.data.map(function(e,t){return r.a.createElement("li",{key:t},e)});return r.a.createElement("ul",null,e)}}]),t}(n.Component),E=(a(17),a(18),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={characters:[]},a.removeCharacter=function(e){var t=a.state.characters;a.setState({characters:t.filter(function(t,a){return a!==e})})},a.handleSubmit=function(e){a.setState({characters:Object(l.a)(a.state.characters).concat([e])})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{characterData:this.state.characters,removeCharacter:this.removeCharacter}),r.a.createElement(d,{handleSubmit:this.handleSubmit}),r.a.createElement(j,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.3c35036e.chunk.js.map