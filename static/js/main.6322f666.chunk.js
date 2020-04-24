(this["webpackJsonpopen-source-ideas"]=this["webpackJsonpopen-source-ideas"]||[]).push([[0],{44:function(e,t,n){e.exports=n(62)},49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(13),r=n.n(o),s=(n(49),n(7)),c=n(8),u=n(10),l=n(9),m=(n(50),n(51),n(29)),d=n(25),f=n(19),h=(n(52),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e))._isMounted=!1,a.fetchComments=function(){var e=a.props.url,t=new Request(e);fetch(t).then((function(e){return e.json()})).then((function(e){return a.setState({comments:e})}))},a.state={comments:{}},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this._isMounted=!0,this._isMounted&&this.fetchComments()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){if(!this.state.comments[0])return i.a.createElement(f.a,{animation:"border"});var e=this.state.comments,t=e.map((function(t,n){return i.a.createElement("div",{key:n},i.a.createElement("h5",null,e[n].user.login),e[n].body,i.a.createElement("div",{id:"time"},e[n].created_at),i.a.createElement("hr",null))}));return i.a.createElement("div",{id:"commentsContainer"},t)}}]),n}(a.Component)),p=n(28),v=(n(53),n(43)),b=function(e){var t="";return e.labels.forEach((function(e){t+="<a href=#>"+e.name+"</a>\xa0\xa0\xa0"})),t},k=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e))._isMounted=!1,a.fetchTags=function(){var e=new Request("https://api.github.com/repos/open-source-ideas/open-source-ideas/labels");fetch(e).then((function(e){return e.json()})).then((function(e){a._isMounted&&a.setState({tags:e})}))},a.onLabelClick=function(e){if("All"===e)a.props.onTagClick(a.props.issuesArr);else{var t=function(e,t){var n=[];return t.forEach((function(t){t.labels.forEach((function(a){a.name===e&&n.push(t)}))})),n}(e,a.props.issuesArr);a.props.onTagClick(t)}},a.state={tags:{}},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchTags()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;if(!this.state.tags[0])return i.a.createElement(f.a,{animation:"border"});var t=function(e,t){var n=[],a=!1;return e.forEach((function(e){t.forEach((function(t){t.labels.forEach((function(t){t.name===e.name&&(a=!0)}))})),a&&n.push(e),a=!1})),n}(this.state.tags,this.props.issuesArr),n=t.map((function(n,a){return i.a.createElement(p.a.Item,{as:"li",href:t[a].name,key:a,onClick:function(){return e.onLabelClick(t[a].name)}},t[a].name)}));return i.a.createElement("div",{id:"tagsBarContainer"},i.a.createElement("h4",null,"Tags"),i.a.createElement(p.a,{as:"ul",defaultActiveKey:"AllIdeas"},i.a.createElement(p.a.Item,{as:"li",href:"AllIdeas",key:"00",onClick:function(){return e.onLabelClick("All")}},"All ideas"),n))}}]),n}(a.Component),C=n(42),E=(n(56),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e))._isMounted=!1,a.filterTitles=function(e){return function(e){var t=[];return e.forEach((function(e){t.push({label:e.title,value:e})})),t}(a.props.issuesArr).filter((function(t){return t.label.toLowerCase().includes(e.toLowerCase())}))},a.promiseOptions=function(e){return new Promise((function(t){setTimeout((function(){t(a.filterTitles(e))}),1500)}))},a.onSelectTitle=function(e){if(e){a.setState({defaultValue:{label:e.label,value:e.value}});var t=[e.value];a._isMounted&&a.props.onTitleClick(t)}},a.state={defaultValue:{label:"",value:null}},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"render",value:function(){return i.a.createElement("div",{id:"selectTitleInput"},i.a.createElement(C.a,{cacheOptions:!0,defaultOptions:!0,defaultValue:this.state.defaultValue.value,loadOptions:this.promiseOptions,onChange:this.onSelectTitle,placeholder:"Search by title...",isClearable:!0}))}}]),n}(a.Component)),y=(n(57),n(41)),g=n(15),O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onTrendingClick=function(){var e=function(e){var t=Object(v.a)(e).sort((function(e,t){return t.comments-e.comments}));return[t[0],t[1],t[2],t[3],t[4]]}(a.props.issuesArr);a.props.onTrendingClick(e)},a.state={},a}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement(y.a,{id:"dropdown-basic-button",title:"Sort by"},this.props.issuesArr.length>4?i.a.createElement(g.a.Item,{onClick:this.onTrendingClick},"Trending"):i.a.createElement(g.a.Item,{disabled:!0},"Trending"))}}]),n}(a.Component),j=n(59),T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e))._isMounted=!1,a.fetchIssues=function(){var e=new Request("https://api.github.com/repos/open-source-ideas/open-source-ideas/issues");fetch(e).then((function(e){return e.json()})).then((function(e){a._isMounted&&(a.setState({issues:e}),a.setState({allIssuesArray:e}))}))},a.onCommentsClick=function(e,t){0!==e&&a.state.currIndex!==t?a.setState({currIndex:t}):a.setState({currIndex:""})},a.onTagClick=function(e){a.setState({showBody:!1}),a.setState({issues:e})},a.onTitleClick=function(e){a.setState({showBody:!0}),a.setState({issues:e})},a.onTrendingClick=function(e){a.setState({showBody:!1}),a.setState({issues:e})},a.onIssueClicked=function(e){a.setState({showBody:!0});var t=[e];a.setState({issues:t})},a.state={issues:{},allIssuesArray:{},currIndex:"",showBody:!1},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchIssues()}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;if(!this.state.issues[0]&&!this.state.issues.title)return i.a.createElement(f.a,{animation:"border"});var t=this.state.issues,n=t.map((function(n,a){return i.a.createElement(m.a,{id:"issue",style:{margin:"20px"},key:a},i.a.createElement(m.a.Body,null,i.a.createElement(m.a.Title,{id:"issueTitle",style:{cursor:"pointer",color:"#0275d8",textDecoration:"underline"},onClick:function(){return e.onIssueClicked(t[a])}},t[a].title),i.a.createElement("div",{style:{color:"#ff0000",margin:"15px"},dangerouslySetInnerHTML:{__html:j(b(t[a]))}}),e.state.showBody?i.a.createElement("div",{id:"bodyText",style:{margin:"10px"},dangerouslySetInnerHTML:{__html:j(t[a].body)}}):"",i.a.createElement("div",{id:"buttons"},i.a.createElement(d.a,{variant:"dark",onClick:function(){return e.onCommentsClick(t[a].comments,a)}},t[a].comments," comments"),i.a.createElement(d.a,{onClick:function(){return window.open(t[a].html_url,"_blank").focus()}},"View on GitHub")),e.state.currIndex===a?i.a.createElement("div",{id:"div"+a,style:{margin:"10px"}},i.a.createElement(h,{url:t[a].comments_url})):""))}));return i.a.createElement("div",{id:"issuesContainer"},i.a.createElement(k,{issuesArr:this.state.allIssuesArray,onTagClick:this.onTagClick}),i.a.createElement("div",{id:"issuesArray"},i.a.createElement("div",{id:"search"},i.a.createElement(E,{issuesArr:this.state.allIssuesArray,onTitleClick:this.onTitleClick}),i.a.createElement(O,{issuesArr:this.state.issues,onTrendingClick:this.onTrendingClick})),n))}}]),n}(a.Component),S=n(33),w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{backgroundColor:"black",cursor:"pointer"},onClick:function(){return e.props.onLogoClick()}},i.a.createElement("h1",{style:{fontSize:"85px",color:"white",letterSpacing:"7px",textShadow:"2px 2px 5px #0279d1",animation:"pop-in ".concat(S.easings.easeOutExpo," 3000ms forwards")}},"OSI"),i.a.createElement("h5",{style:{color:"white",animation:"pop-in ".concat(S.easings.easeInSine," 2000ms forwards")}},"Open Source Ideas"))}}]),n}(a.Component),I=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onLogoClick=function(){a.setState({reload:!a.state.reload})},a.state={reload:!1},a}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(w,{onLogoClick:this.onLogoClick}),i.a.createElement(T,{key:String(this.state.reload)}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.6322f666.chunk.js.map