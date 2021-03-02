(this["webpackJsonpthe-little-book-of-programming-challenges"]=this["webpackJsonpthe-little-book-of-programming-challenges"]||[]).push([[0],{176:function(e,t,c){"use strict";c.r(t);c(152);var r=c(0),n=c.n(r),a=c(26),s=c.n(a),i=c(55),l=c(27),h=c(185),j=c(186),o=c(180),d=c(72),b=c(52),u=Object(r.createContext)({alert:[],setAlert:""}),O="abcdefghijklmnopqrstuvwxyz".split(""),g=c(5),x=["hello","bye"],m=h.a.Paragraph,f=h.a.Text,p=function(){var e,t=Object(r.useState)((e=x)?e[Math.floor(Math.random()*e.length)]:""),c=Object(b.a)(t,1)[0],n=Object(r.useContext)(u).setAlert,a=Object(r.useState)(5),s=Object(b.a)(a,2),i=s[0],l=s[1],h=Object(r.useState)([]),o=Object(b.a)(h,2),p=o[0],y=o[1],w=Object(r.useState)(!0),v=Object(b.a)(w,2),T=v[0],F=v[1];return Object(g.jsx)(g.Fragment,{children:T?Object(g.jsxs)("div",{style:{textAlign:"center"},children:[Object(g.jsx)(m,{children:function(){var e=function(e,t){return e.split("").reduce((function(e,c){return t.includes(c)?e+c:e+"*"}),"")}(c,p);return e===c&&(n((function(e){return[].concat(Object(d.a)(e),["You win!"])})),F(!1)),e}()}),Object(g.jsxs)(m,{children:["Your have ",i," lives remaining."]}),O.map((function(e){return Object(g.jsx)(j.a,{onClick:function(){return t=e,void(c.includes(t)?(n((function(e){return[].concat(Object(d.a)(e),["You guessed correctly!"])})),y((function(e){return[].concat(Object(d.a)(e),[t])}))):(n((function(e){return[].concat(Object(d.a)(e),["Wrong, try again."])})),l((function(e){return e-1})),0===i&&(n((function(e){return[].concat(Object(d.a)(e),["You lose!"])})),F(!1))));var t},children:e},e)}))]}):Object(g.jsx)(f,{children:"Reload the page to play again."})})},y=c(184),w=h.a.Title,v=[Object(g.jsx)(g.Fragment,{children:"Create a program that allows users to guess a string one character at a time."}),Object(g.jsx)(g.Fragment,{children:"If the user guess a character correctly reveal occurences of that character in that string."}),Object(g.jsx)(g.Fragment,{children:"Characters the user has not guessed should be represented by asterisks."}),Object(g.jsx)(g.Fragment,{children:"The user is given 5 incorrect guesses before it's Game Over."})],T=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(w,{level:2,children:"Problem Description"}),Object(g.jsx)(y.b,{bordered:!0,dataSource:v,renderItem:function(e){return Object(g.jsx)(y.b.Item,{children:e})}})]})},F=h.a.Text,C=h.a.Title,S=[{title:Object(g.jsx)(g.Fragment,{children:"OUTPUT 'Guess a character!'"}),description:Object(g.jsx)(g.Fragment,{children:"Prompts the user to click a Character."})},{title:Object(g.jsx)(g.Fragment,{children:"OUTPUT magic(word, correctChars)"}),description:Object(g.jsx)(g.Fragment,{children:"Display the word using asterisks. This is done by a magic function which takes the word you need to guess and a list of your correctly guessed letters as arguements."})},{title:Object(g.jsx)(g.Fragment,{children:"DISPLAY ALPHABET AS BUTTON WHERE ONCLICK VALUE AS letter CALLS update(word, letter)"}),description:Object(g.jsx)(g.Fragment,{children:"Letters of the alphabet will be displayed as buttons. The button will call a function that checks if the character is in the string that the user is trying to guess."})},{title:Object(g.jsx)(g.Fragment,{children:"FUNCTION update(word, letter) RETURNS (letter IN word) THEN (ADD letter TO correctChars AND UPDATE) ELSE (lives MINUS 1)"}),description:Object(g.jsxs)(g.Fragment,{children:["If the guessed is in the word, the function will add it to the array of correctly guessed words and then call the magic function which will update the word.",Object(g.jsxs)("ol",{children:[Object(g.jsx)("li",{children:"If all the words have been guessed correctly we will infom the user that they have won the game."}),Object(g.jsx)("li",{children:"Otherwise the program will call itself (asking the user for to click a another character, etc...)"})]}),"Otherwise the program will inform the user that they had guessed incorrectly and decrement a life.",Object(g.jsxs)("ol",{children:[Object(g.jsx)("li",{children:"If the number of lives is 0 we display that they have lost the game."}),Object(g.jsx)("li",{children:"Otherwise the program will ask the user to try again."})]})]})}],k=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C,{level:2,children:"Possible Solution"}),Object(g.jsx)(F,{children:"The main component in this will be a function that takes the correctly guessed letters and is able to reveal only the characters in a string that are in that list."}),Object(g.jsx)(C,{level:3,children:"Pseudocode"}),Object(g.jsx)(y.b,{itemLayout:"horizontal",dataSource:S,renderItem:function(e){return Object(g.jsx)(y.b.Item,{children:Object(g.jsx)(y.b.Item.Meta,{title:e.title,description:e.description})})}})]})},I=h.a.Title,P=function(){var e=Object(l.f)();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(I,{children:"Challenge 24"}),Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{path:"".concat(e.path,"/play"),children:Object(g.jsx)(p,{})}),Object(g.jsx)(l.a,{path:e.path,children:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(i.b,{to:"".concat(e.url,"/play"),children:Object(g.jsx)(j.a,{children:"Play"})}),Object(g.jsx)(o.a,{}),Object(g.jsx)(T,{}),Object(g.jsx)(o.a,{}),Object(g.jsx)(k,{})]})})]})]})},A=h.a.Paragraph,L=h.a.Title,E=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(L,{children:"Home"}),Object(g.jsx)(A,{children:'Having a go at challenges from "The Little Book of Programming".'})]})},U=c(181),N=c(187),D=c(182),H=c(183),M=c(188),B=U.a.Content,Y=N.a.SubMenu,R=function(e){var t=e.children,c=Object(r.useState)("home"),n=Object(b.a)(c,2),a=n[0],s=n[1],l=Object(r.useState)([]),h=Object(b.a)(l,2),j=h[0],o=h[1];return Object(g.jsx)(U.a,{style:{minHeight:"100vh"},children:Object(g.jsxs)(B,{children:[Object(g.jsxs)(N.a,{onClick:function(e){return s(e.key)},selectedKeys:[a],mode:"horizontal",children:[Object(g.jsx)(N.a.Item,{children:Object(g.jsx)(i.b,{to:"/",children:"Home"})},"home"),Object(g.jsx)(Y,{title:"Challenges",children:Object(g.jsx)(N.a.Item,{children:Object(g.jsx)(i.b,{to:"/challenge-24",children:"Challenge 24"})},"challenge-24")})]}),Object(g.jsxs)(D.a,{children:[Object(g.jsx)(H.a,{sm:0,md:4,lg:8}),Object(g.jsx)(H.a,{sm:24,md:16,lg:8,children:Object(g.jsxs)(u.Provider,{value:{alert:j,setAlert:o},children:[j.map((function(e){return Object(g.jsx)(M.a,{message:e,closable:!0})})),t]})}),Object(g.jsx)(H.a,{sm:0,md:4,lg:8})]})]})})},z=function(){return Object(g.jsx)(i.a,{children:Object(g.jsx)(R,{children:Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{path:"/challenge-24",children:Object(g.jsx)(P,{})}),Object(g.jsx)(l.a,{path:"/",children:Object(g.jsx)(E,{})})]})})})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,189)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))};s.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(z,{})}),document.getElementById("root")),G()}},[[176,1,2]]]);
//# sourceMappingURL=main.8225db04.chunk.js.map