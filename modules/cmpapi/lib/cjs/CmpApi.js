"use strict";var __awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(p,s){function o(t){try{r(n.next(t))}catch(t){s(t)}}function c(t){try{r(n.throw(t))}catch(t){s(t)}}function r(t){var e;t.done?p(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,c)}r((n=n.apply(t,e||[])).next())}))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.CmpApi=void 0;const CmpApiContext_js_1=require("./cmpapi/CmpApiContext.js"),CallResponder_js_1=require("./cmpapi/CallResponder.js"),GVL_js_1=require("./GVL.js"),Sections_js_1=require("./encoder/section/Sections.js");class CmpApi{constructor(t,e,i){this.cmpApiContext=new CmpApiContext_js_1.CmpApiContext,this.cmpApiContext.cmpId=t,this.cmpApiContext.cmpVersion=e,this.callResponder=new CallResponder_js_1.CallResponder(this.cmpApiContext,i)}fireEvent(t,e){this.cmpApiContext.eventQueue.exec(t,e)}fireErrorEvent(t){this.cmpApiContext.eventQueue.exec("error",t)}fireSectionChange(t){this.cmpApiContext.eventQueue.exec("sectionChange",t)}getEventStatus(){return this.cmpApiContext.eventStatus}setEventStatus(t){this.cmpApiContext.eventStatus=t}getCmpStatus(){return this.cmpApiContext.cmpStatus}setCmpStatus(t){this.cmpApiContext.cmpStatus=t,this.cmpApiContext.eventQueue.exec("cmpStatus",t)}getCmpDisplayStatus(){return this.cmpApiContext.cmpDisplayStatus}setCmpDisplayStatus(t){this.cmpApiContext.cmpDisplayStatus=t,this.cmpApiContext.eventQueue.exec("cmpDisplayStatus",t)}getSignalStatus(){return this.cmpApiContext.signalStatus}setSignalStatus(t){this.cmpApiContext.signalStatus=t,this.cmpApiContext.eventQueue.exec("signalStatus",t)}getApplicableSections(){return this.cmpApiContext.applicableSections}setApplicableSections(t){this.cmpApiContext.applicableSections=t}getSupportedAPIs(){return this.cmpApiContext.supportedAPIs}setSupportedAPIs(t){this.cmpApiContext.supportedAPIs=t}setGppString(t){this.cmpApiContext.gppModel.decode(t)}getGppString(){return this.cmpApiContext.gppModel.encode()}setSectionString(t,e){this.cmpApiContext.gppModel.decodeSection(t,e)}setSectionStringById(t,e){this.setSectionString(Sections_js_1.Sections.SECTION_ID_NAME_MAP.get(t),e)}getSectionString(t){return this.cmpApiContext.gppModel.encodeSection(t)}getSectionStringById(t){return this.getSectionString(Sections_js_1.Sections.SECTION_ID_NAME_MAP.get(t))}setFieldValue(t,e,i){this.cmpApiContext.gppModel.setFieldValue(t,e,i)}setFieldValueBySectionId(t,e,i){this.setFieldValue(Sections_js_1.Sections.SECTION_ID_NAME_MAP.get(t),e,i)}getFieldValue(t,e){return this.cmpApiContext.gppModel.getFieldValue(t,e)}getFieldValueBySectionId(t,e){return this.getFieldValue(Sections_js_1.Sections.SECTION_ID_NAME_MAP.get(t),e)}getSection(t){return this.cmpApiContext.gppModel.getSection(t)}getSectionById(t){return this.getSection(Sections_js_1.Sections.SECTION_ID_NAME_MAP.get(t))}hasSection(t){return this.cmpApiContext.gppModel.hasSection(t)}hasSectionId(t){return this.hasSection(Sections_js_1.Sections.SECTION_ID_NAME_MAP.get(t))}deleteSection(t){this.cmpApiContext.gppModel.deleteSection(t)}deleteSectionById(t){this.deleteSection(Sections_js_1.Sections.SECTION_ID_NAME_MAP.get(t))}clear(){this.cmpApiContext.gppModel.clear()}getObject(){return this.cmpApiContext.gppModel.toObject()}getGvlFromVendorList(t){return GVL_js_1.GVL.fromVendorList(t)}getGvlFromUrl(t){return __awaiter(this,void 0,void 0,(function*(){return GVL_js_1.GVL.fromUrl(t)}))}}exports.CmpApi=CmpApi;