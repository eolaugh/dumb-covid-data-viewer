(this["webpackJsonptable-practice"]=this["webpackJsonptable-practice"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),r=n.n(a),o=n(6),s=n.n(o),i=(n(12),n(13),n(4)),l=n(1),u=n(3),d=function(e){var t=e.columns,n=e.data,r=e.country;console.log(r),console.log(n);var o=n[r],s=t.map((function(e){return{Header:e.columnHeader,accessor:e.columnKey,id:e.columnKey}})),i=o.location,d=Object(a.useMemo)((function(){return[{Header:i,columns:s}]}),[]),j=Object(u.useTable)({columns:d,data:o.data,initialState:{pageSize:25}},u.useSortBy,u.usePagination),b=j.getTableProps,h=j.getTableBodyProps,O=j.headerGroups,p=j.page,g=j.prepareRow,x=j.canPreviousPage,f=j.canNextPage,m=j.pageOptions,v=j.pageCount,y=j.gotoPage,P=j.nextPage,w=j.previousPage,C=j.setPageSize,S=j.state,H=S.pageIndex,_=S.pageSize;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:o.location}),Object(c.jsxs)("table",Object(l.a)(Object(l.a)({},b()),{},{children:[Object(c.jsx)("thead",{children:O.filter((function(e){return e.headers.length>1})).map((function(e){return Object(c.jsx)("tr",Object(l.a)(Object(l.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsxs)("th",Object(l.a)(Object(l.a)({},e.getHeaderProps(e.getSortByToggleProps)),{},{children:[e.render("Header")," ",e.isSorted?e.isSortedDesc?Object(c.jsx)("span",{children:"desc"}):Object(c.jsx)("span",{children:"asc"}):""]}))}))}))}))}),Object(c.jsx)("tbody",Object(l.a)(Object(l.a)({},h()),{},{children:p.map((function(e,t){return g(e),Object(c.jsx)("tr",Object(l.a)(Object(l.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(c.jsx)("td",Object(l.a)(Object(l.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:function(){return y(0)},disabled:!x,children:"<<"})," ",Object(c.jsx)("button",{onClick:function(){return w()},disabled:!x,children:"<"})," ",Object(c.jsx)("button",{onClick:function(){return P()},disabled:!f,children:">"})," ",Object(c.jsx)("button",{onClick:function(){return y(v-1)},disabled:!f,children:">>"})," ",Object(c.jsxs)("span",{children:["Page"," ",Object(c.jsxs)("strong",{children:[H+1," of ",m.length]})," "]}),Object(c.jsxs)("span",{children:["| Go to page:"," ",Object(c.jsx)("input",{type:"number",defaultValue:H+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;y(t)},style:{width:"100px"}})]})," ",Object(c.jsx)("select",{value:_,onChange:function(e){C(Number(e.target.value))},children:[10,20,30,40,50].map((function(e){return Object(c.jsxs)("option",{value:e,children:["Show ",e]},e)}))})]})]})},j=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),s=Object(i.a)(o,2),l=s[0],u=s[1],j=Object(a.useState)("USA"),b=Object(i.a)(j,2),h=b[0],O=b[1],p=function(e){O(e.target.value)};Object(a.useEffect)((function(){fetch("https://covid.ourworldindata.org/data/owid-covid-data.json").then((function(e){return e.json()})).then((function(e){var t=Object.keys(e),n=[];t.forEach((function(t){e[t].tla=t,3===t.length&&n.push(e[t])})),console.log(n),u(n),O(n[0].tla),console.log(n),r(e)}))}),[]);return n?Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"COVID Data"}),Object(c.jsx)("select",{name:"countries",id:"countries",onChange:p,children:l.map((function(e){return Object(c.jsx)("option",{value:e.tla,children:e.location})}))}),Object(c.jsx)(d,{columns:[{columnHeader:"Date",columnKey:"date"},{columnHeader:"New Cases",columnKey:"new_cases"},{columnHeader:"New Cases (per Million)",columnKey:"new_cases_per_million"},{columnHeader:"New Deaths",columnKey:"new_deaths"},{columnHeader:"New Deaths (per Million)",columnKey:"new_deaths_per_million"},{columnHeader:"Stringency Index",columnKey:"stringency_index"}],data:n,country:h})]}):Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:"Main"})})};var b=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(j,{})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),h()}},[[17,1,2]]]);
//# sourceMappingURL=main.4abaadcc.chunk.js.map