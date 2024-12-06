"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CallResponder=void 0;const GppCommand_js_1=require("./command/GppCommand.js"),CommandMap_js_1=require("./command/CommandMap.js");class CallResponder{constructor(o,n){if(this.cmpApiContext=o,n){let o=GppCommand_js_1.GppCommand.ADD_EVENT_LISTENER;if(null==n?void 0:n[o])throw new Error(`Built-In Custom Commmand for ${o} not allowed`);if(o=GppCommand_js_1.GppCommand.REMOVE_EVENT_LISTENER,null==n?void 0:n[o])throw new Error(`Built-In Custom Commmand for ${o} not allowed`);this.customCommands=n}try{this.callQueue=window.__gpp()||[]}catch(o){this.callQueue=[]}finally{window.__gpp=this.apiCall.bind(this),this.purgeQueuedCalls()}}apiCall(o,n,m,t){if("string"!=typeof o)n(null,!1);else{if(n&&"function"!=typeof n)throw new Error("invalid callback function");this.isCustomCommand(o)?this.customCommands[o](n,m):this.isBuiltInCommand(o)?new CommandMap_js_1.CommandMap[o](this.cmpApiContext,n,m).execute():n&&n(null,!1)}}purgeQueuedCalls(){const o=this.callQueue;this.callQueue=[],o.forEach((o=>{window.__gpp(...o)}))}isCustomCommand(o){return this.customCommands&&"function"==typeof this.customCommands[o]}isBuiltInCommand(o){return void 0!==CommandMap_js_1.CommandMap[o]}}exports.CallResponder=CallResponder;