(this["webpackJsonplevel-creator"]=this["webpackJsonplevel-creator"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),i=a.n(r),c=(a(12),a(1)),o=a(2),s=a(4),u=a(3),m=(a(13),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).changeGenre=function(e){n.setState({genre:e.target.value})},n.state={genre:e.genre},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"genre",style:{display:"inline"}},l.a.createElement("select",{class:this.props.parentClass,name:"genre",value:this.state.genre,onChange:this.changeGenre},l.a.createElement("option",{value:"NONE"},"NONE"),l.a.createElement("option",{value:"ROCK"},"ROCK"),l.a.createElement("option",{value:"JAZZ"},"JAZZ"),l.a.createElement("option",{value:"HIPHOP"},"HIPHOP"),l.a.createElement("option",{value:"FOLK"},"FOLK")))}}]),a}(l.a.Component)),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).changePointsPerLoop=function(e){n.setState({pointsPerLoop:e.target.value})},n.changeLoopMultiplier=function(e){n.setState({loopMultiplier:e.target.value})},n.removeCard=function(){},n.state={genre:"NONE",pointsPerLoop:0,loopMultiplier:0,difficulty:1,loopName:"funky"},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{name:"card-div"},l.a.createElement("label",null,"Card #",this.props.cardIdx,": "),l.a.createElement("label",null,"Genre: "),l.a.createElement(m,{genre:"NONE",parentClass:"card"}),l.a.createElement("label",null," Points Per Loop: "),l.a.createElement("input",{type:"text",name:"pointsPerLoop",value:this.state.pointsPerLoop,onChange:this.changePointsPerLoop,style:{width:30,textAlign:"center"}}),l.a.createElement("label",null," Loop Multiplier: "),l.a.createElement("input",{type:"text",name:"loopMultiplier",value:this.state.loopMultiplier,onChange:this.changeLoopMultiplier,style:{width:30,textAlign:"center"}}),l.a.createElement("label",null," "),l.a.createElement("button",{type:"button",onClick:this.removeCard},"Remove Card"))}}]),a}(l.a.Component),v=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),n=t.call(this,e),console.log(e.genre0),n.state={genres:[e.genre0,e.genre1,e.genre2],barPoints:[e.barPoints0,e.barPoints1,e.barPoints2]},n}return Object(o.a)(a,[{key:"removeRecipe",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{id:"recipe",name:"recipe-div",style:{display:"inline"}},l.a.createElement("label",null,"Recipe #",this.props.recipeIdx,": "),l.a.createElement("label",null,"Genres: 1: "),l.a.createElement(m,{genre:this.state.genres[0],parentClass:"recipe"}),l.a.createElement("label",null," 2: "),l.a.createElement(m,{genre:this.state.genres[1],parentClass:"recipe"}),l.a.createElement("label",null," 3: "),l.a.createElement(m,{genre:this.state.genres[2],parentClass:"recipe"}),l.a.createElement("label",null," Points: 1: "),l.a.createElement("input",{type:"text",class:"recipe",name:"barPoints0",value:this.state.barPoints[0],style:{width:30,textAlign:"center"}}),l.a.createElement("label",null," 2: "),l.a.createElement("input",{type:"text",class:"recipe",name:"barPoints1",value:this.state.barPoints[1],style:{width:30,textAlign:"center"}}),l.a.createElement("label",null," 3: "),l.a.createElement("input",{type:"text",class:"recipe",name:"barPoints2",value:this.state.barPoints[2],style:{width:30,textAlign:"center"}}),l.a.createElement("label",null," "),l.a.createElement("button",{type:"button",onClick:this.removeRecipe}," Remove Recipe "),l.a.createElement("br",null))}}]),a}(l.a.Component),d=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).changeName=function(e){n.setState({levelName:e.target.value})},n.addCard=function(){var e=n.state.cards.length;n.state.cards.push(l.a.createElement(p,{cardIdx:e+1})),n.setState({cards:n.state.cards})},n.addRecipe=function(){var e=n.state.recipes.length;n.state.recipes.push(l.a.createElement(v,{recipeIdx:e+1})),n.setState({recipes:n.state.recipes})},n.formToJSON=function(e){var t={},a=document.getElementsByName("levelName")[0],n=document.getElementsByName("levelTimer")[0];t.levelName=a.value,t.levelTimer=Number(n.value),t.cards=[],t.recipes=[];for(var l=document.getElementsByName("card-div"),r=0;r<l.length;r++){var i=l[r].querySelectorAll("input, select"),c={genre:i[0].value,pointsPerLoop:Number(i[1].value),loopMultiplier:Number(i[2].value)};t.cards.push(c)}for(var o=document.getElementsByName("recipe-div"),s=0;s<o.length;s++){var u=o[s].querySelectorAll("input, select"),m=u[0].value,p=u[1].value,v=u[2].value,d={genre0:m,barPoints0:Number(u[3].value),genre1:p,barPoints1:Number(u[4].value),genre2:v,barPoints2:Number(u[5].value)};t.recipes.push(d)}return JSON.stringify(t,null,"  ")},n.handleSubmit=function(e){e.preventDefault();var t=document.getElementById("level-form"),a=n.formToJSON(t);document.getElementById("json-textarea").value=a},n.state={levelName:"Example Level",levelTimer:0,cards:[l.a.createElement(p,{cardIdx:"1"})],recipes:[l.a.createElement(v,{recipeIdx:"1",genre0:"JAZZ",barPoints0:"100",genre1:"HIPHOP",barPoints1:"100",genre2:"ROCK",barPoints2:"100"})]},n}return Object(o.a)(a,[{key:"changeTimer",value:function(e){this.setState(this.state.levelTimer,e.target.value)}},{key:"render",value:function(){return l.a.createElement("div",{id:"form-div"},l.a.createElement("h1",null,"Deck Jockey Level Creator"),l.a.createElement("br",null),l.a.createElement("form",{id:"level-form",onSubmit:this.handleSubmit},l.a.createElement("label",null,"Level Name: "),l.a.createElement("input",{type:"text",name:"levelName",value:this.state.levelName,onChange:this.changeName}),l.a.createElement("br",null),l.a.createElement("label",null,"Level Timer: "),l.a.createElement("input",{type:"text",name:"levelTimer",value:this.state.levelTimer,onChange:this.changeTimer}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null," Cards ")," ",l.a.createElement("button",{type:"button",onClick:this.addCard},"New Card"),l.a.createElement("br",null),l.a.createElement("div",{id:"cards"},this.state.cards.map((function(e){return console.log(e),e}))),l.a.createElement("br",null),l.a.createElement("label",null,"Recipes")," ",l.a.createElement("button",{type:"button",onClick:this.addRecipe},"New Recipe"),l.a.createElement("br",null),l.a.createElement("div",{id:"recipes"},this.state.recipes.map((function(e){return e}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Get Level JSON"})),l.a.createElement("div",{id:"json-text-div"},l.a.createElement("br",null),l.a.createElement("label",null," JSON Text Output ")," ",l.a.createElement("br",null),l.a.createElement("textarea",{id:"json-textarea",style:{width:500,height:500}})))}}]),a}(l.a.Component);var E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(d,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.2ee58732.chunk.js.map