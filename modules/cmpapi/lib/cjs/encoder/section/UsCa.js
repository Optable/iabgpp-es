"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UsCa=void 0;const UsCaField_js_1=require("../field/UsCaField.js"),UsCaCoreSegment_js_1=require("../segment/UsCaCoreSegment.js"),UsCaGpcSegment_js_1=require("../segment/UsCaGpcSegment.js"),AbstractLazilyEncodableSection_js_1=require("./AbstractLazilyEncodableSection.js");class UsCa extends AbstractLazilyEncodableSection_js_1.AbstractLazilyEncodableSection{constructor(e){super(),e&&e.length>0&&this.decode(e)}getId(){return UsCa.ID}getName(){return UsCa.NAME}getVersion(){return UsCa.VERSION}initializeSegments(){let e=[];return e.push(new UsCaCoreSegment_js_1.UsCaCoreSegment),e.push(new UsCaGpcSegment_js_1.UsCaGpcSegment),e}decodeSection(e){let s=this.initializeSegments();if(null!=e&&0!==e.length){let t=e.split(".");t.length>0&&s[0].decode(t[0]),t.length>1?(s[1].setFieldValue(UsCaField_js_1.UsCaField.GPC_SEGMENT_INCLUDED,!0),s[1].decode(t[1])):s[1].setFieldValue(UsCaField_js_1.UsCaField.GPC_SEGMENT_INCLUDED,!1)}return s}encodeSection(e){let s=[];return e.length>=1&&(s.push(e[0].encode()),e.length>=2&&!0===e[1].getFieldValue(UsCaField_js_1.UsCaField.GPC_SEGMENT_INCLUDED)&&s.push(e[1].encode())),s.join(".")}}exports.UsCa=UsCa,UsCa.ID=8,UsCa.VERSION=1,UsCa.NAME="usca";