"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TcfEuV2CoreSegment=void 0;const TraditionalBase64UrlEncoder_js_1=require("../base64/TraditionalBase64UrlEncoder.js"),BitStringEncoder_js_1=require("../bitstring/BitStringEncoder.js"),EncodableArrayOfFixedIntegerRanges_js_1=require("../datatype/EncodableArrayOfFixedIntegerRanges.js"),EncodableBoolean_js_1=require("../datatype/EncodableBoolean.js"),EncodableDatetime_js_1=require("../datatype/EncodableDatetime.js"),EncodableFixedBitfield_js_1=require("../datatype/EncodableFixedBitfield.js"),EncodableFixedInteger_js_1=require("../datatype/EncodableFixedInteger.js"),EncodableFixedString_js_1=require("../datatype/EncodableFixedString.js"),EncodableOptimizedFixedRange_js_1=require("../datatype/EncodableOptimizedFixedRange.js"),DecodingError_js_1=require("../error/DecodingError.js"),EncodableBitStringFields_js_1=require("../field/EncodableBitStringFields.js"),TcfEuV2Field_js_1=require("../field/TcfEuV2Field.js"),TcfEuV2Field_js_2=require("../field/TcfEuV2Field.js"),TcfEuV2_js_1=require("../section/TcfEuV2.js"),AbstractLazilyEncodableSegment_js_1=require("./AbstractLazilyEncodableSegment.js");class TcfEuV2CoreSegment extends AbstractLazilyEncodableSegment_js_1.AbstractLazilyEncodableSegment{constructor(e){super(),this.base64UrlEncoder=TraditionalBase64UrlEncoder_js_1.TraditionalBase64UrlEncoder.getInstance(),this.bitStringEncoder=BitStringEncoder_js_1.BitStringEncoder.getInstance(),e&&this.decode(e)}getFieldNames(){return TcfEuV2Field_js_1.TCFEUV2_CORE_SEGMENT_FIELD_NAMES}initializeFields(){let e=new Date,i=new EncodableBitStringFields_js_1.EncodableBitStringFields;return i.put(TcfEuV2Field_js_2.TcfEuV2Field.VERSION.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(6,TcfEuV2_js_1.TcfEuV2.VERSION)),i.put(TcfEuV2Field_js_2.TcfEuV2Field.CREATED.toString(),new EncodableDatetime_js_1.EncodableDatetime(e)),i.put(TcfEuV2Field_js_2.TcfEuV2Field.LAST_UPDATED.toString(),new EncodableDatetime_js_1.EncodableDatetime(e)),i.put(TcfEuV2Field_js_2.TcfEuV2Field.CMP_ID.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(12,0)),i.put(TcfEuV2Field_js_2.TcfEuV2Field.CMP_VERSION.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(12,0)),i.put(TcfEuV2Field_js_2.TcfEuV2Field.CONSENT_SCREEN.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(6,0)),i.put(TcfEuV2Field_js_2.TcfEuV2Field.CONSENT_LANGUAGE.toString(),new EncodableFixedString_js_1.EncodableFixedString(2,"EN")),i.put(TcfEuV2Field_js_2.TcfEuV2Field.VENDOR_LIST_VERSION.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(12,0)),i.put(TcfEuV2Field_js_2.TcfEuV2Field.POLICY_VERSION.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(6,2)),i.put(TcfEuV2Field_js_2.TcfEuV2Field.IS_SERVICE_SPECIFIC.toString(),new EncodableBoolean_js_1.EncodableBoolean(!1)),i.put(TcfEuV2Field_js_2.TcfEuV2Field.USE_NON_STANDARD_STACKS.toString(),new EncodableBoolean_js_1.EncodableBoolean(!1)),i.put(TcfEuV2Field_js_2.TcfEuV2Field.SPECIAL_FEATURE_OPTINS.toString(),new EncodableFixedBitfield_js_1.EncodableFixedBitfield([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),i.put(TcfEuV2Field_js_2.TcfEuV2Field.PURPOSE_CONSENTS.toString(),new EncodableFixedBitfield_js_1.EncodableFixedBitfield([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),i.put(TcfEuV2Field_js_2.TcfEuV2Field.PURPOSE_LEGITIMATE_INTERESTS.toString(),new EncodableFixedBitfield_js_1.EncodableFixedBitfield([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),i.put(TcfEuV2Field_js_2.TcfEuV2Field.PURPOSE_ONE_TREATMENT.toString(),new EncodableBoolean_js_1.EncodableBoolean(!1)),i.put(TcfEuV2Field_js_2.TcfEuV2Field.PUBLISHER_COUNTRY_CODE.toString(),new EncodableFixedString_js_1.EncodableFixedString(2,"AA")),i.put(TcfEuV2Field_js_2.TcfEuV2Field.VENDOR_CONSENTS.toString(),new EncodableOptimizedFixedRange_js_1.EncodableOptimizedFixedRange([])),i.put(TcfEuV2Field_js_2.TcfEuV2Field.VENDOR_LEGITIMATE_INTERESTS.toString(),new EncodableOptimizedFixedRange_js_1.EncodableOptimizedFixedRange([])),i.put(TcfEuV2Field_js_2.TcfEuV2Field.PUBLISHER_RESTRICTIONS.toString(),new EncodableArrayOfFixedIntegerRanges_js_1.EncodableArrayOfFixedIntegerRanges(6,2,[],!1)),i}encodeSegment(e){let i=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(i)}decodeSegment(e,i){null!=e&&0!==e.length||this.fields.reset(i);try{let d=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(d,this.getFieldNames(),i)}catch(i){throw new DecodingError_js_1.DecodingError("Unable to decode TcfEuV2CoreSegment '"+e+"'")}}}exports.TcfEuV2CoreSegment=TcfEuV2CoreSegment;