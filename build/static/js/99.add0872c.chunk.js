(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[99],{2175:function(e,a,t){"use strict";t.r(a);var n=t(8),i=t(14),l=t(15),r=t(16),s=t(0),o=t.n(s),d=t(100),c=t(864),g=t.n(c),m=t(866),u=t.n(m),p=t(938),x=t(6),h=t.n(x),b=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={userList:[]},e.defaultSorted=[{dataField:"name",order:"asc"}],e.columns=[{dataField:"index",text:"No"},{dataField:"name",text:"User Name"},{dataField:"email",text:"User Email"},{dataField:"company",text:"Company"},{dataField:"balance",text:"Balance",align:"center",headerAlign:"center"},{dataField:"age",text:"Age",align:"center",headerAlign:"center"}],e.sortableColumn=[{dataField:"index",text:"No",sort:!0},{dataField:"name",text:"User Name",sort:!0},{dataField:"email",text:"User Email",sort:!0},{dataField:"company",text:"Company",sort:!0},{dataField:"balance",text:"Balance",sort:!0,align:"center",headerAlign:"center"},{dataField:"age",text:"Age",sort:!0,align:"center",headerAlign:"center"}],e.paginationOptions={paginationSize:5,pageStartIndex:1,firstPageText:"First",prePageText:"Back",nextPageText:"Next",lastPageText:"Last",nextPageTitle:"First page",prePageTitle:"Pre page",firstPageTitle:"Next page",lastPageTitle:"Last page",showTotal:!0,totalSize:e.state.userList.length},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("/api/user/all").then((function(a){var t=a.data.map((function(e,a){var t=e.id,n=e.name,i=e.email,l=e.age,r=e.company;return{id:t,name:n,email:i,age:l,balance:e.balance,company:r,index:a+1}}));e.setState({userList:t})}))}},{key:"render",value:function(){var e=this.state.userList;p.Search.SearchBar;return o.a.createElement("div",null,o.a.createElement(d.a,{routeSegments:[{name:"Dashboard",path:"/"},{name:"Data Table",path:"data-table"},{name:"Multi Column Ordering Data Table"}]}),o.a.createElement(d.h,{title:"Multi Column Ordering Data Table"},o.a.createElement(g.a,{bootstrap4:!0,keyField:"id",data:e,columns:this.sortableColumn,pagination:u()(this.paginationOptions),noDataIndication:"Table is empty"})))}}]),t}(s.Component);a.default=b}}]);
//# sourceMappingURL=99.add0872c.chunk.js.map