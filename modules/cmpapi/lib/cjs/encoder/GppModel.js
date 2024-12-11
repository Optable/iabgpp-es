"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GppModel=void 0;const HeaderV1_js_1=require("./section/HeaderV1.js"),Sections_js_1=require("./section/Sections.js"),TcfCaV1_js_1=require("./section/TcfCaV1.js"),TcfEuV2_js_1=require("./section/TcfEuV2.js"),UspV1_js_1=require("./section/UspV1.js"),UsNat_js_1=require("./section/UsNat.js"),UsCa_js_1=require("./section/UsCa.js"),UsVa_js_1=require("./section/UsVa.js"),UsCo_js_1=require("./section/UsCo.js"),UsUt_js_1=require("./section/UsUt.js"),UsCt_js_1=require("./section/UsCt.js"),UsFl_js_1=require("./section/UsFl.js"),UsMt_js_1=require("./section/UsMt.js"),UsOr_js_1=require("./section/UsOr.js"),UsTx_js_1=require("./section/UsTx.js"),InvalidFieldError_js_1=require("./error/InvalidFieldError.js"),DecodingError_js_1=require("./error/DecodingError.js"),HeaderV1Field_js_1=require("./field/HeaderV1Field.js");class GppModel{constructor(s){this.sections=new Map,this.encodedString=null,this.decoded=!0,this.dirty=!1,s&&this.decode(s)}setFieldValue(s,e,t){this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0);let i=null;if(this.sections.has(s)?i=this.sections.get(s):s===TcfCaV1_js_1.TcfCaV1.NAME?(i=new TcfCaV1_js_1.TcfCaV1,this.sections.set(TcfCaV1_js_1.TcfCaV1.NAME,i)):s===TcfEuV2_js_1.TcfEuV2.NAME?(i=new TcfEuV2_js_1.TcfEuV2,this.sections.set(TcfEuV2_js_1.TcfEuV2.NAME,i)):s===UspV1_js_1.UspV1.NAME?(i=new UspV1_js_1.UspV1,this.sections.set(UspV1_js_1.UspV1.NAME,i)):s===UsNat_js_1.UsNat.NAME?(i=new UsNat_js_1.UsNat,this.sections.set(UsNat_js_1.UsNat.NAME,i)):s===UsCa_js_1.UsCa.NAME?(i=new UsCa_js_1.UsCa,this.sections.set(UsCa_js_1.UsCa.NAME,i)):s===UsVa_js_1.UsVa.NAME?(i=new UsVa_js_1.UsVa,this.sections.set(UsVa_js_1.UsVa.NAME,i)):s===UsCo_js_1.UsCo.NAME?(i=new UsCo_js_1.UsCo,this.sections.set(UsCo_js_1.UsCo.NAME,i)):s===UsUt_js_1.UsUt.NAME?(i=new UsUt_js_1.UsUt,this.sections.set(UsUt_js_1.UsUt.NAME,i)):s===UsCt_js_1.UsCt.NAME?(i=new UsCt_js_1.UsCt,this.sections.set(UsCt_js_1.UsCt.NAME,i)):s===UsFl_js_1.UsFl.NAME?(i=new UsFl_js_1.UsFl,this.sections.set(UsFl_js_1.UsFl.NAME,i)):s===UsMt_js_1.UsMt.NAME?(i=new UsMt_js_1.UsMt,this.sections.set(UsMt_js_1.UsMt.NAME,i)):s===UsOr_js_1.UsOr.NAME?(i=new UsOr_js_1.UsOr,this.sections.set(UsOr_js_1.UsOr.NAME,i)):s===UsTx_js_1.UsTx.NAME&&(i=new UsTx_js_1.UsTx,this.sections.set(UsTx_js_1.UsTx.NAME,i)),!i)throw new InvalidFieldError_js_1.InvalidFieldError(s+"."+e+" not found");i.setFieldValue(e,t),this.dirty=!0}setFieldValueBySectionId(s,e,t){this.setFieldValue(Sections_js_1.Sections.SECTION_ID_NAME_MAP.get(s),e,t)}getFieldValue(s,e){return this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0),this.sections.has(s)?this.sections.get(s).getFieldValue(e):null}getFieldValueBySectionId(s,e){return this.getFieldValue(Sections_js_1.Sections.SECTION_ID_NAME_MAP.get(s),e)}hasField(s,e){return this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0),!!this.sections.has(s)&&this.sections.get(s).hasField(e)}hasFieldBySectionId(s,e){return this.hasField(Sections_js_1.Sections.SECTION_ID_NAME_MAP.get(s),e)}hasSection(s){return this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0),this.sections.has(s)}hasSectionId(s){return this.hasSection(Sections_js_1.Sections.SECTION_ID_NAME_MAP.get(s))}deleteSection(s){!this.decoded&&null!=this.encodedString&&this.encodedString.length>0&&this.decode(this.encodedString),this.sections.delete(s),this.dirty=!0}deleteSectionById(s){this.deleteSection(Sections_js_1.Sections.SECTION_ID_NAME_MAP.get(s))}clear(){this.sections.clear(),this.encodedString="DBAA",this.decoded=!1,this.dirty=!1}getHeader(){this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0);let s=new HeaderV1_js_1.HeaderV1;return s.setFieldValue("SectionIds",this.getSectionIds()),s.toObj()}getSection(s){return this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0),this.sections.has(s)?this.sections.get(s).toObj():null}getSectionIds(){this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0);let s=[];for(let e=0;e<Sections_js_1.Sections.SECTION_ORDER.length;e++){let t=Sections_js_1.Sections.SECTION_ORDER[e];if(this.sections.has(t)){let e=this.sections.get(t);s.push(e.getId())}}return s}encodeModel(s){let e=[],t=[];for(let i=0;i<Sections_js_1.Sections.SECTION_ORDER.length;i++){let _=Sections_js_1.Sections.SECTION_ORDER[i];if(s.has(_)){let i=s.get(_);e.push(i.encode()),t.push(i.getId())}}let i=new HeaderV1_js_1.HeaderV1;return i.setFieldValue("SectionIds",t),e.unshift(i.encode()),e.join("~")}decodeModel(s){if(!s||0==s.length||s.startsWith("DB")){let e=s.split("~"),t=new Map;if(e[0].startsWith("D")){let i=new HeaderV1_js_1.HeaderV1(e[0]).getFieldValue("SectionIds");if(i.length!==e.length-1)throw new DecodingError_js_1.DecodingError("Unable to decode '"+s+"'. The number of sections does not match the number of sections defined in the header.");for(let _=0;_<i.length;_++){if(""===e[_+1].trim())throw new DecodingError_js_1.DecodingError("Unable to decode '"+s+"'. Section "+(_+1)+" is blank.");if(i[_]===TcfCaV1_js_1.TcfCaV1.ID){let s=new TcfCaV1_js_1.TcfCaV1(e[_+1]);t.set(TcfCaV1_js_1.TcfCaV1.NAME,s)}else if(i[_]===TcfEuV2_js_1.TcfEuV2.ID){let s=new TcfEuV2_js_1.TcfEuV2(e[_+1]);t.set(TcfEuV2_js_1.TcfEuV2.NAME,s)}else if(i[_]===UspV1_js_1.UspV1.ID){let s=new UspV1_js_1.UspV1(e[_+1]);t.set(UspV1_js_1.UspV1.NAME,s)}else if(i[_]===UsNat_js_1.UsNat.ID){let s=new UsNat_js_1.UsNat(e[_+1]);t.set(UsNat_js_1.UsNat.NAME,s)}else if(i[_]===UsCa_js_1.UsCa.ID){let s=new UsCa_js_1.UsCa(e[_+1]);t.set(UsCa_js_1.UsCa.NAME,s)}else if(i[_]===UsVa_js_1.UsVa.ID){let s=new UsVa_js_1.UsVa(e[_+1]);t.set(UsVa_js_1.UsVa.NAME,s)}else if(i[_]===UsCo_js_1.UsCo.ID){let s=new UsCo_js_1.UsCo(e[_+1]);t.set(UsCo_js_1.UsCo.NAME,s)}else if(i[_]===UsUt_js_1.UsUt.ID){let s=new UsUt_js_1.UsUt(e[_+1]);t.set(UsUt_js_1.UsUt.NAME,s)}else if(i[_]===UsCt_js_1.UsCt.ID){let s=new UsCt_js_1.UsCt(e[_+1]);t.set(UsCt_js_1.UsCt.NAME,s)}else if(i[_]===UsFl_js_1.UsFl.ID){let s=new UsFl_js_1.UsFl(e[_+1]);t.set(UsFl_js_1.UsFl.NAME,s)}else if(i[_]===UsMt_js_1.UsMt.ID){let s=new UsMt_js_1.UsMt(e[_+1]);t.set(UsMt_js_1.UsMt.NAME,s)}else if(i[_]===UsOr_js_1.UsOr.ID){let s=new UsOr_js_1.UsOr(e[_+1]);t.set(UsOr_js_1.UsOr.NAME,s)}else if(i[_]===UsTx_js_1.UsTx.ID){let s=new UsTx_js_1.UsTx(e[_+1]);t.set(UsTx_js_1.UsTx.NAME,s)}}}return t}if(s.startsWith("C")){let e=new Map,t=new TcfEuV2_js_1.TcfEuV2(s);return e.set(TcfEuV2_js_1.TcfEuV2.NAME,t),(new HeaderV1_js_1.HeaderV1).setFieldValue(HeaderV1Field_js_1.HeaderV1Field.SECTION_IDS,[2]),e.set(HeaderV1_js_1.HeaderV1.NAME,t),e}throw new DecodingError_js_1.DecodingError("Unable to decode '"+s+"'")}encodeSection(s){return this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0),this.sections.has(s)?this.sections.get(s).encode():null}encodeSectionById(s){return this.encodeSection(Sections_js_1.Sections.SECTION_ID_NAME_MAP.get(s))}decodeSection(s,e){let t=null;this.sections.has(s)?t=this.sections.get(s):s===TcfCaV1_js_1.TcfCaV1.NAME?(t=new TcfCaV1_js_1.TcfCaV1,this.sections.set(TcfCaV1_js_1.TcfCaV1.NAME,t)):s===TcfEuV2_js_1.TcfEuV2.NAME?(t=new TcfEuV2_js_1.TcfEuV2,this.sections.set(TcfEuV2_js_1.TcfEuV2.NAME,t)):s===UspV1_js_1.UspV1.NAME?(t=new UspV1_js_1.UspV1,this.sections.set(UspV1_js_1.UspV1.NAME,t)):s===UsNat_js_1.UsNat.NAME?(t=new UsNat_js_1.UsNat,this.sections.set(UsNat_js_1.UsNat.NAME,t)):s===UsCa_js_1.UsCa.NAME?(t=new UsCa_js_1.UsCa,this.sections.set(UsCa_js_1.UsCa.NAME,t)):s===UsVa_js_1.UsVa.NAME?(t=new UsVa_js_1.UsVa,this.sections.set(UsVa_js_1.UsVa.NAME,t)):s===UsCo_js_1.UsCo.NAME?(t=new UsCo_js_1.UsCo,this.sections.set(UsCo_js_1.UsCo.NAME,t)):s===UsUt_js_1.UsUt.NAME?(t=new UsUt_js_1.UsUt,this.sections.set(UsUt_js_1.UsUt.NAME,t)):s===UsCt_js_1.UsCt.NAME?(t=new UsCt_js_1.UsCt,this.sections.set(UsCt_js_1.UsCt.NAME,t)):s===UsFl_js_1.UsFl.NAME?(t=new UsFl_js_1.UsFl,this.sections.set(UsFl_js_1.UsFl.NAME,t)):s===UsMt_js_1.UsMt.NAME?(t=new UsMt_js_1.UsMt,this.sections.set(UsMt_js_1.UsMt.NAME,t)):s===UsOr_js_1.UsOr.NAME?(t=new UsOr_js_1.UsOr,this.sections.set(UsOr_js_1.UsOr.NAME,t)):s===UsTx_js_1.UsTx.NAME&&(t=new UsTx_js_1.UsTx,this.sections.set(UsTx_js_1.UsTx.NAME,t)),t&&t.decode(e)}decodeSectionById(s,e){this.decodeSection(Sections_js_1.Sections.SECTION_ID_NAME_MAP.get(s),e)}toObject(){this.decoded||(this.sections=this.decodeModel(this.encodedString),this.dirty=!1,this.decoded=!0);let s={};for(let e=0;e<Sections_js_1.Sections.SECTION_ORDER.length;e++){let t=Sections_js_1.Sections.SECTION_ORDER[e];this.sections.has(t)&&(s[t]=this.sections.get(t).toObj())}return s}encode(){return(null==this.encodedString||0===this.encodedString.length||this.dirty)&&(this.encodedString=this.encodeModel(this.sections),this.dirty=!1,this.decoded=!0),this.encodedString}decode(s){this.encodedString=s,this.dirty=!1,this.decoded=!1}}exports.GppModel=GppModel;