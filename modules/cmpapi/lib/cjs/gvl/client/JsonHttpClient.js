"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.JsonHttpClient=void 0;class JsonHttpClient{static absCall(t,e,s,r){return new Promise(((n,o)=>{const i=new XMLHttpRequest;i.withCredentials=s,i.addEventListener("load",(()=>{if(i.readyState==XMLHttpRequest.DONE)if(i.status>=200&&i.status<300){let t=i.response;if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}n(t)}else o(new Error(`HTTP Status: ${i.status} response type: ${i.responseType}`))})),i.addEventListener("error",(()=>{o(new Error("error"))})),i.addEventListener("abort",(()=>{o(new Error("aborted"))})),null===e?i.open("GET",t,!0):i.open("POST",t,!0),i.responseType="json",i.timeout=r,i.ontimeout=()=>{o(new Error("Timeout "+r+"ms "+t))},i.send(e)}))}static post(t,e,s=!1,r=0){return this.absCall(t,JSON.stringify(e),s,r)}static fetch(t,e=!1,s=0){return this.absCall(t,null,e,s)}}exports.JsonHttpClient=JsonHttpClient;