"use strict";(self.webpackChunke_wallet=self.webpackChunke_wallet||[]).push([[231],{9231:function(n,e,t){t.r(e),t.d(e,{SummaryPage:function(){return fn},default:function(){return gn}});var i,r,a=t(9439),o=t(2791),l=t(168),d=t(7691),u=d.ZP.div(i||(i=(0,l.Z)(["\n  position: relative;\n  width: 280px;\n  height: 280px;\n  margin: 0 auto;\n  margin-bottom: 32px;\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n    height: 336px;\n    margin-right: 32px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 288px;\n    height: 288px;\n    margin: 0 auto;\n    margin-left: 69px;\n    margin-right: 32px;\n  }\n"]))),s=d.ZP.div(r||(r=(0,l.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.2;\n  color: #000000;\n\n  @media screen and (min-width: 768px) {\n  \n  }\n  @media screen and (min-width: 1280px) {\n  font-size: 20px;\n  }\n"]))),c=t(5967),x=t(5355),m=t(8687),p=t(4289);function h(n){var e=Math.abs(n).toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0}).split(","),t=(0,a.Z)(e,2),i=t[0],r=t[1];return"".concat(i,".").concat(r)}var f=function(n){return"&#8372; ".concat(function(n){var e=n.toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0}).split(","),t=(0,a.Z)(e,2),i=t[0],r=t[1];return"".concat(i,".").concat(r)}(n))},g=t(3329);c.kL.register(c.qi,c.u,c.De);var b,Z,w,v,j,y,C,S,k,P={plugins:{legend:{display:!1}},cutout:95},D=o.memo((function(n){var e=n.data,t=(0,m.useSelector)(p.selectBalance),i=(0,o.useRef)(null),r=(0,o.useMemo)((function(){return e&&e.length>0?{labels:e.map((function(n){return n.name})),datasets:[{data:e.map((function(n){return Math.abs(n.total)})),backgroundColor:e.map((function(n){return n.color})),borderWidth:1,hoverOffset:1}]}:{labels:["No expenses"],datasets:[{label:"",data:[1],backgroundColor:["rgb(230, 225, 213)"],hoverOffset:4}]}}),[e]),a=(0,o.useMemo)((function(){return f(t)}),[t]);return(0,g.jsxs)(u,{children:[(0,g.jsx)(x.$I,{data:r,options:P,ref:i}),(0,g.jsx)(s,{dangerouslySetInnerHTML:{__html:a}})]})})),M=t(1413),E=t(8997),F=t(2408),I=d.ZP.div(b||(b=(0,l.Z)(["\n  max-width: 336px;\n  height: 715px;\n  margin: 0 auto;\n"]))),L=d.ZP.div(Z||(Z=(0,l.Z)(["\n  display: flex;\n  max-width: 395px;\n  height: auto;\n  margin: 0 auto;\n  gap: 20px;\n  mix-blend-mode: 20px;\n  margin-bottom: 20px;\n  flex-direction: column;\n  align-items: center;\n\n  @media screen and (min-width: 768px) {\n    gap: 16px;\n    flex-direction: row;\n  }\n  @media screen and (min-width: 1280px) {\n    gap: 32px;\n    flex-direction: row;\n  }\n"]))),O=(0,d.ZP)(I)({borderRadius:"30px",overflow:"hidden",width:"280px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#fffff",border:"1px solid #000000","@media (min-width: 768px)":{width:"152px"},"@media (min-width: 1280px)":{width:"152px"}}),A=d.ZP.div(w||(w=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 16px;\n"]))),z=d.ZP.div(v||(v=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n  gap: 153px;\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 14px;\n  margin-left: 15px;\n"]))),R=d.ZP.div(j||(j=(0,l.Z)(["\n  color: #ff6596;\n  margin-right: 15px;\n"]))),T=d.ZP.div(y||(y=(0,l.Z)(["\n  color: #24cca7;\n  margin-right: 15px;\n"]))),Y=d.ZP.div(C||(C=(0,l.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--main-background-color);\n  border-radius: 30px;\n  width: 336px;\n  height: 58px;\n  background-color: var(--form-background-color);\n"]))),_=d.ZP.div(S||(S=(0,l.Z)(["\n  padding: 20px;\n  font-size: 18px;\n  font-weight: 700;\n"]))),q=d.ZP.div(k||(k=(0,l.Z)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 2px;\n  margin-left: 8px;\n  background-color: ",";\n"])),(function(n){return n.backgroundColor})),J={backgroundColor:"transparent"},N={padding:"0px",border:"none"},B={width:"100px",padding:"14px",paddingLeft:"0px"},G={width:"10px",margin:"0px",padding:"10px"},H=[{label:"January",id:1},{label:"February",id:2},{label:"March",id:3},{label:"April",id:4},{label:"May",id:5},{label:"June",id:6},{label:"July",id:7},{label:"August",id:8},{label:"September",id:9},{label:"October",id:10},{label:"November",id:11},{label:"December",id:12}],U=function(n){var e=n.getMonth,t=(0,o.useMemo)((function(){return H.find((function(n){return n.id===(new Date).getMonth()+1})).label}),[]);return(0,g.jsx)(E.Z,{id:"combo-box-demo",options:H,onChange:function(n,t){return function(n){n&&e(n.id)}(t)},isOptionEqualToValue:function(n,e){return n.id===e.id},renderInput:function(n){return(0,g.jsx)(O,{children:(0,g.jsx)(F.Z,(0,M.Z)((0,M.Z)({},n),{},{label:t}))})}})},V=[{label:"2019",id:1},{label:"2020",id:2},{label:"2021",id:3},{label:"2022",id:4},{label:"2023",id:5}],W=function(n){var e=n.getYear,t=(0,o.useMemo)((function(){return(new Date).toLocaleString("default",{year:"numeric"})}),[]),i=(0,o.useCallback)((function(n){if(n){var t=n.label;e(t)}}),[e]);return(0,g.jsx)(E.Z,{disablePortal:!0,id:"combo-box-demo",options:V,onChange:function(n,e){return i(e)},isOptionEqualToValue:function(n,e){return n.id===e.id},renderInput:function(n){return(0,g.jsx)(O,{children:(0,g.jsx)(F.Z,(0,M.Z)((0,M.Z)({},n),{},{label:t,variant:"outlined"}))})}})},$=t(9836),K=t(3382),Q=t(3994),X=t(9281),nn=t(5855),en=t(5527);function tn(n){return(0,g.jsx)(X.Z,{component:en.Z,style:J,children:(0,g.jsx)($.Z,{sx:{maxWidth:650},"aria-label":"simple table",children:(0,g.jsx)(K.Z,{style:N,children:n.tableData.map((function(n){return(0,g.jsxs)(nn.Z,{style:N,sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,g.jsx)(Q.Z,{style:G,children:(0,g.jsx)(q,{backgroundColor:n.color})}),(0,g.jsx)(Q.Z,{style:B,align:"left",children:n.name}),(0,g.jsx)(Q.Z,{style:B,align:"right",children:h(n.total)})]},n.name)}))})})})}var rn,an,on,ln=function(n){var e,t,i=n.data,r=n.handlePeriod,l=i||(null===i||void 0===i||null===(e=i.data)||void 0===e?void 0:e.length)>0||(null===i||void 0===i||null===(t=i.categoriesSummary)||void 0===t?void 0:t.length)>0,d=(0,o.useMemo)((function(){return(new Date).getMonth()+1}),[]),u=(0,o.useMemo)((function(){return(new Date).getFullYear()}),[]),s=(0,o.useState)(""),c=(0,a.Z)(s,2),x=c[0],m=c[1],p=(0,o.useState)(""),f=(0,a.Z)(p,2),b=f[0],Z=f[1],w=(0,o.useCallback)((function(n){m(n)}),[]),v=(0,o.useCallback)((function(n){Z(n)}),[]);return(0,o.useEffect)((function(){x&&b&&r(x,b),x&&!b&&r(x,u),!x&&b&&r(d,b)}),[x,b]),(0,g.jsxs)(I,{children:[(0,g.jsxs)(L,{children:[(0,g.jsx)(U,{getMonth:w}),(0,g.jsx)(W,{getYear:v})]}),l&&(0,g.jsxs)(Y,{children:[" ",(0,g.jsx)(_,{children:"Category"})," ",(0,g.jsx)(_,{children:"Sum"})]}),l&&(0,g.jsx)(tn,{tableData:i.categoriesSummary}),l&&(0,g.jsxs)(A,{children:[(0,g.jsxs)(z,{children:[(0,g.jsx)("p",{children:"Expenses: "}),(0,g.jsx)(R,{children:h(i.expenseSummary)})]}),(0,g.jsxs)(z,{children:[(0,g.jsx)("p",{children:"Income: "})," ",(0,g.jsx)(T,{children:h(i.incomeSummary)})]})]}),!l&&(0,g.jsx)("p",{children:"There is no data for this period"})]})},dn=t(6360),un=function(n){return n.summary.summaryData},sn=d.ZP.section(rn||(rn=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  background: 'transparent';\n  gap: 5px;\n\n  @media screen and (min-width: 768px) {\n  }\n\n  @media screen and (min-width: 1280px) {\n  }\n"]))),cn=d.ZP.section(an||(an=(0,l.Z)(["\n  max-height: 676px;\n  width: 280px;\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (min-width: 768px) {\n    width: 768px;\n    flex-direction: row;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 715px;\n  }\n"]))),xn=d.ZP.h2(on||(on=(0,l.Z)(["\n  font-size: 30px;\n  font-weight: 400;\n  line-height: 1.2;\n  color: var(--title-main-color);\n  margin-bottom: 8px;\n  margin-left: 20px;\n  margin-top: 40px;\n\n  @media screen and (min-width: 768px) {\n    margin-left: 32px;\n    margin-bottom: 20px;\n    margin-top: 32px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    margin-bottom: 20px;\n    margin-left: 84px;\n    margin-top: 32px;\n  }\n"]))),mn={Main:"#FED057",Car:"#FD9498","Child care":"#6E78E8","Self care":"#C5BAFF","Household products":"#4A56E2",Education:"#81E1FF",Leisure:"#24CCA7","Other expenses":"#00AD84","Main expenses":"#eba597",Products:"#6973e6",Entertainment:"#53daba"},pn=function(n){return n.filter((function(n){return"INCOME"!==n.type}))},hn=function(){var n=(0,m.useDispatch)(),e=(0,m.useSelector)(un),t=(0,o.useState)(""),i=(0,a.Z)(t,2),r=i[0],l=i[1],d=(0,o.useState)(""),u=(0,a.Z)(d,2),s=u[0],c=u[1],x={month:(new Date).getMonth()+1,year:(new Date).getFullYear()},p=x.month,h=x.year;(0,o.useEffect)((function(){n((0,dn.g)({month:p,year:h}))}),[n,p,h]);return(0,o.useEffect)((function(){if(0!==e.length&&void 0!==e){var n=function(n,e){return n.categoriesSummary.map((function(n){var t=e[n.name];return t?(0,M.Z)((0,M.Z)({},n),{},{color:t}):(0,M.Z)({},n)}))}(e,mn);l(pn(n)),c(function(n,e){var t=(0,M.Z)({},n);return t.categoriesSummary=e,t}(e,pn(n)))}}),[e]),(0,g.jsxs)(sn,{children:[(0,g.jsx)(xn,{children:"Statistics"}),(0,g.jsxs)(cn,{children:[(0,g.jsx)(D,{data:r}),(0,g.jsx)(ln,{data:s,handlePeriod:function(e,t){n((0,dn.g)({month:null!==e&&void 0!==e?e:p,year:null!==t&&void 0!==t?t:h}))}})]})]})},fn=function(){return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(hn,{})})},gn=fn}}]);
//# sourceMappingURL=231.6e320e88.chunk.js.map