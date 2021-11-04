(this.webpackJsonpemployees=this.webpackJsonpemployees||[]).push([[0],{10:function(e,t,a){e.exports={notificationContainer:"Toast_notificationContainer__VvZTL",notification:"Toast_notification__3FXtO","toast-in-left":"Toast_toast-in-left__2iGoQ",toast:"Toast_toast__1nY3-",notificationTitle:"Toast_notificationTitle__1zQZS",notificationMessage:"Toast_notificationMessage__3APss",notificationImage:"Toast_notificationImage__1C_Ei",closeButton:"Toast_closeButton__3dwAO"}},13:function(e,t,a){e.exports={header:"DeleteModal_header__1bBpK",title:"DeleteModal_title__2hy0w",close:"DeleteModal_close__2qVef",buttons:"DeleteModal_buttons__3S21H",btnDelete:"DeleteModal_btnDelete__2yTiL"}},24:function(e,t,a){e.exports={background:"Modal_background__2p0-F",modal:"Modal_modal__3Fbae"}},32:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),o=a(16),c=a.n(o),i=(a(32),a(6)),r=a.n(i),l=a(26),u=a(22),d=Object(u.createApi)({reducerPath:"personsApi",tagTypes:["Persons"],baseQuery:Object(u.fetchBaseQuery)({baseUrl:"http://localhost:9001/"}),endpoints:function(e){return{getPersons:e.query({query:function(){return"persons"},providesTags:function(e){return e?[].concat(Object(l.a)(e.map((function(e){return{type:"Persons",id:e.id}}))),[{type:"Persons",id:"LIST"}]):[{type:"Persons",id:"LIST"}]}}),addPerson:e.mutation({query:function(e){return{url:"persons",method:"POST",body:e}},invalidatesTags:[{type:"Persons",id:"LIST"}]}),deletePerson:e.mutation({query:function(e){return{url:"persons/".concat(e.id),method:"DELETE",body:e}},invalidatesTags:[{type:"Persons",id:"LIST"}]}),updatePerson:e.mutation({query:function(e){return{url:"persons/".concat(e.id),method:"PUT",body:e}},invalidatesTags:[{type:"Persons",id:"LIST"}]})}}}),b=d.useGetPersonsQuery,m=d.useAddPersonMutation,j=d.useDeletePersonMutation,p=d.useUpdatePersonMutation,f=a(12),O=a(11),_=a.n(O),h=a(19),x=a(24),N=a.n(x),T=a(25),v=a(7),C=a.n(v),S=a(2),w=Object(n.memo)((function(e){var t=e.title,a=e.onClose,s=e.actionCallback,o=Object(n.useState)(""),c=Object(T.a)(o,2),i=c[0],r=c[1],l=Object(n.useState)(""),u=Object(T.a)(l,2),d=u[0],b=u[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:C.a.header,children:[Object(S.jsx)("p",{className:C.a.title,children:t}),Object(S.jsx)("span",{className:C.a.close,onClick:a})]}),Object(S.jsxs)("div",{className:C.a.inputs,children:[Object(S.jsx)("label",{htmlFor:"first name",children:"First Name:"}),Object(S.jsx)("input",{type:"text",name:"first name",placeholder:"First Name",className:C.a.firstName,value:i,onChange:function(e){r(e.currentTarget.value)}}),Object(S.jsx)("label",{htmlFor:"last name",children:"Last Name:"}),Object(S.jsx)("input",{type:"text",name:"last name",placeholder:"Last Name",className:C.a.lastName,value:d,onChange:function(e){b(e.currentTarget.value)}})]}),Object(S.jsxs)("div",{className:C.a.buttons,children:[Object(S.jsx)("button",{onClick:a,className:C.a.btnClose,children:"Close"}),Object(S.jsx)("button",{onClick:function(){s({firstName:i,lastName:d})},className:C.a.btnSave,children:"Save"})]})]})})),y=a(13),M=a.n(y),g=Object(n.memo)((function(e){var t=e.title,a=e.itemName,n=e.onClose,s=e.deleteAction,o=a&&"".concat(a.firstName," ").concat(a.lastName);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:M.a.header,children:[Object(S.jsx)("p",{className:M.a.title,children:"".concat(t," ").concat(o,"?")}),Object(S.jsx)("span",{className:M.a.close,onClick:n})]}),Object(S.jsxs)("div",{className:M.a.buttons,children:[Object(S.jsx)("button",{onClick:n,children:"Close"}),Object(S.jsx)("button",{onClick:s,className:M.a.btnDelete,children:"Delete"})]})]})})),k=Object(n.memo)((function(e){var t=e.modal,a=e.modalActions;return t.isShow?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:N.a.background,onClick:a.backGroundOnClick}),Object(S.jsx)("div",{className:N.a.modal,children:function(){switch(e.modal.modalStatus){case"add-person":return Object(S.jsx)(w,{title:t.modalTitle,onClose:a.closeModal,actionCallback:a.addPerson});case"update-person":return Object(S.jsx)(w,{title:t.modalTitle,onClose:a.closeModal,actionCallback:a.updatePerson});case"delete-person":return Object(S.jsx)(g,{title:t.modalTitle,itemName:t.itemName,onClose:a.closeModal,deleteAction:a.deletePerson})}}()})]}):null})),P=a(3),I=Object(P.createSlice)({name:"app",initialState:{modal:{isShow:!1,modalTitle:"",modalStatus:"no-status",itemId:0,itemTitle:null},toast:[]},reducers:{setModalStatus:function(e,t){e.modal=t.payload},setToast:function(e,t){e.toast.push(t.payload)},deleteToast:function(e,t){return Object(f.a)(Object(f.a)({},e),{},{toast:e.toast.filter((function(e){return e.id!==t.payload}))})}}}),F=I.reducer,D=I.actions,A=D.setModalStatus,L=D.setToast,E=D.deleteToast,q=a(8),B=function(){return Object(q.useDispatch)()},R=q.useSelector,Q=a(45),U=function(){var e=B();return{setNewToast:function(t,a){var n=Object(Q.a)();e(L({id:n,toastType:t,toastTitle:"Title",toastMessage:a}))},deleteToast:function(t){e(E(t))}}},G=Object(n.memo)((function(){var e,t=R((function(e){return e.app.modal})),a=B(),s=U().setNewToast,o=m(),c=p(),i=j(),r={addPerson:Object(n.useCallback)(function(){var e=Object(h.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o[0](t).unwrap().then((function(){o[1].isSuccess&&s("success","New Person added successfully"),a(A({isShow:!1,modalStatus:"no-status",modalTitle:""}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[a,o,s]),updatePerson:Object(n.useCallback)(function(){var e=Object(h.a)(_.a.mark((function e(n){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.itemId){e.next=4;break}return e.next=3,c[0](Object(f.a)(Object(f.a)({},n),{},{id:t.itemId})).unwrap().then((function(){c[1].isSuccess&&s("success","Person updated successfully")}));case 3:a(A({isShow:!1,modalStatus:"no-status",modalTitle:""}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[a,c,t.itemId,s]),deletePerson:Object(n.useCallback)(Object(h.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.itemId){e.next=4;break}return e.next=3,i[0]({id:t.itemId}).unwrap().then((function(){var e;i[1].isSuccess&&s("success","Person ".concat(null===(e=t.itemName)||void 0===e?void 0:e.firstName," deleted successfully"))}));case 3:a(A({isShow:!1,modalStatus:"no-status",modalTitle:""}));case 4:case"end":return e.stop()}}),e)}))),[a,i,t.itemId,null===(e=t.itemName)||void 0===e?void 0:e.firstName,s]),backGroundOnClick:Object(n.useCallback)((function(){a(A({isShow:!1,modalStatus:"no-status",modalTitle:""}))}),[a]),closeModal:Object(n.useCallback)((function(){a(A({isShow:!1,modalStatus:"no-status",modalTitle:""}))}),[a])};return Object(S.jsx)(S.Fragment,{children:"no-status"===t.modalStatus?Object(S.jsx)(S.Fragment,{}):Object(S.jsx)(k,{modal:t,modalActions:r})})})),K=a(10),H=a.n(K),X=a(43),Y=Object(n.memo)((function(){var e=R((function(e){return e.app.toast})),t=U().deleteToast,a=function(e){switch(e){case"success":return Object(S.jsx)(X.a,{});case"info":return Object(S.jsx)(X.c,{});case"error":return Object(S.jsx)(X.b,{});default:return}},n=function(e){switch(e){case"success":return"#2AA80AFF";case"info":return"#10b795";case"error":return"#CC0707FF";default:return}};return Object(S.jsx)("div",{className:H.a.notificationContainer,children:e.map((function(e){return setTimeout((function(){t(e.id)}),3e3),Object(S.jsxs)("div",{className:"".concat(H.a.notification," ").concat(H.a.toast),style:{backgroundColor:n(e.toastType)},children:[Object(S.jsx)(X.d,{className:H.a.closeButton,onClick:function(){return t(e.id)}}),Object(S.jsx)("div",{className:H.a.notificationImage,children:a(e.toastType)}),Object(S.jsxs)("div",{children:[Object(S.jsx)("p",{className:H.a.notificationTitle,children:e.toastTitle}),Object(S.jsx)("p",{className:H.a.notificationMessage,children:e.toastMessage})]})]},e.id)}))})})),V=a(44),z=Object(n.memo)((function(){var e=b(""),t=e.data,a=e.isLoading,s=function(){var e=B();return function(t,a,n){var s=t.currentTarget.dataset.button;"add-person"===s&&e(A({isShow:!0,modalStatus:s,modalTitle:"Enter the person data"})),"update-person"===s&&e(A({isShow:!0,modalStatus:s,modalTitle:"Enter the new person data",itemId:a})),"delete-person"===s&&e(A({isShow:!0,modalStatus:s,modalTitle:"Do you want to delete",itemId:a,itemName:n}))}}(),o=Object(n.useCallback)((function(e,t){s(e,t.id,{firstName:t.firstName,lastName:t.lastName})}),[s]),c=Object(n.useCallback)((function(e,t){s(e,t)}),[s]);return a?Object(S.jsx)("h1",{children:"...Loading"}):Object(S.jsxs)("div",{className:r.a.wrapper,children:[Object(S.jsx)("button",{className:r.a.btnAdd,onClick:function(e){return s(e)},"data-button":"add-person",children:"ADD PERSON"}),Object(S.jsxs)("div",{className:r.a.container,children:[Object(S.jsxs)("div",{className:r.a.tableHeader,children:[Object(S.jsx)("p",{children:"First Name"}),Object(S.jsx)("p",{children:"Last Name"})]}),Object(S.jsx)("div",{className:r.a.table,children:t&&t.map((function(e){return Object(S.jsxs)("div",{className:r.a.tableRow,children:[Object(S.jsxs)("div",{className:r.a.personInfo,children:[Object(S.jsx)("p",{children:e.firstName}),Object(S.jsx)("p",{children:e.lastName})]}),Object(S.jsxs)("div",{className:r.a.buttons,children:[Object(S.jsx)(V.b,{className:r.a.btnEdit,onClick:function(t){return c(t,e.id)},"data-button":"update-person"}),Object(S.jsx)(V.a,{className:r.a.btnDelete,onClick:function(t){return o(t,e)},"data-button":"delete-person"})]})]},e.id)}))})]}),Object(S.jsx)(G,{}),Object(S.jsx)(Y,{})]})})),J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),o(e),c(e)}))},W=a(18),Z=a(5),$=Object(Z.d)(Object(W.a)({app:F},d.reducerPath,d.reducer)),ee=Object(P.configureStore)({reducer:$,middleware:function(e){return e().concat(d.middleware)}});c.a.render(Object(S.jsx)(q.Provider,{store:ee,children:Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(z,{})})}),document.getElementById("root")),J()},6:function(e,t,a){e.exports={wrapper:"Main_wrapper__2B1dy",btnAdd:"Main_btnAdd__10CIX",container:"Main_container__cQzMG",tableHeader:"Main_tableHeader__13TKT",table:"Main_table__ollvK",tableRow:"Main_tableRow__3UxK3",personInfo:"Main_personInfo__26YKF",buttons:"Main_buttons__c7D62",btnEdit:"Main_btnEdit__UmhRc",btnDelete:"Main_btnDelete__1qEqf"}},7:function(e,t,a){e.exports={header:"InputModal_header__2_RRR",title:"InputModal_title__3T3ES",close:"InputModal_close__2o0cn",inputs:"InputModal_inputs__1WYQ0",buttons:"InputModal_buttons__2CVWX",btnClose:"InputModal_btnClose__1XsYU"}}},[[41,1,2]]]);
//# sourceMappingURL=main.e2dda3bd.chunk.js.map