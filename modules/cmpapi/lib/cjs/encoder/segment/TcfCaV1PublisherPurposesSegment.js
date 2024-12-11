"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TcfCaV1PublisherPurposesSegment=void 0;const CompressedBase64UrlEncoder_js_1=require("../base64/CompressedBase64UrlEncoder.js"),BitStringEncoder_js_1=require("../bitstring/BitStringEncoder.js"),EncodableFixedBitfield_js_1=require("../datatype/EncodableFixedBitfield.js"),EncodableFixedInteger_js_1=require("../datatype/EncodableFixedInteger.js"),EncodableFlexibleBitfield_js_1=require("../datatype/EncodableFlexibleBitfield.js"),DecodingError_js_1=require("../error/DecodingError.js"),EncodableBitStringFields_js_1=require("../field/EncodableBitStringFields.js"),TcfCaV1Field_js_1=require("../field/TcfCaV1Field.js"),TcfCaV1Field_js_2=require("../field/TcfCaV1Field.js"),AbstractLazilyEncodableSegment_js_1=require("./AbstractLazilyEncodableSegment.js");class TcfCaV1PublisherPurposesSegment extends AbstractLazilyEncodableSegment_js_1.AbstractLazilyEncodableSegment{constructor(e){super(),this.base64UrlEncoder=CompressedBase64UrlEncoder_js_1.CompressedBase64UrlEncoder.getInstance(),this.bitStringEncoder=BitStringEncoder_js_1.BitStringEncoder.getInstance(),e&&this.decode(e)}getFieldNames(){return TcfCaV1Field_js_1.TCFCAV1_PUBLISHER_PURPOSES_SEGMENT_FIELD_NAMES}initializeFields(){let e=new EncodableBitStringFields_js_1.EncodableBitStringFields;e.put(TcfCaV1Field_js_2.TcfCaV1Field.PUB_PURPOSES_SEGMENT_TYPE.toString(),new EncodableFixedInteger_js_1.EncodableFixedInteger(3,3)),e.put(TcfCaV1Field_js_2.TcfCaV1Field.PUB_PURPOSES_EXPRESS_CONSENT.toString(),new EncodableFixedBitfield_js_1.EncodableFixedBitfield([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1])),e.put(TcfCaV1Field_js_2.TcfCaV1Field.PUB_PURPOSES_IMPLIED_CONSENT.toString(),new EncodableFixedBitfield_js_1.EncodableFixedBitfield([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]));let i=new EncodableFixedInteger_js_1.EncodableFixedInteger(6,0);return e.put(TcfCaV1Field_js_2.TcfCaV1Field.NUM_CUSTOM_PURPOSES.toString(),i),e.put(TcfCaV1Field_js_2.TcfCaV1Field.CUSTOM_PURPOSES_EXPRESS_CONSENT.toString(),new EncodableFlexibleBitfield_js_1.EncodableFlexibleBitfield((()=>i.getValue()),[])),e.put(TcfCaV1Field_js_2.TcfCaV1Field.CUSTOM_PURPOSES_IMPLIED_CONSENT.toString(),new EncodableFlexibleBitfield_js_1.EncodableFlexibleBitfield((()=>i.getValue()),[])),e}encodeSegment(e){let i=this.bitStringEncoder.encode(e,this.getFieldNames());return this.base64UrlEncoder.encode(i)}decodeSegment(e,i){null!=e&&0!==e.length||this.fields.reset(i);try{let t=this.base64UrlEncoder.decode(e);this.bitStringEncoder.decode(t,this.getFieldNames(),i)}catch(i){throw new DecodingError_js_1.DecodingError("Unable to decode TcfCaV1PublisherPurposesSegment '"+e+"'")}}toObj(){return Object.assign({SubsectionType:3},super.toObj())}}exports.TcfCaV1PublisherPurposesSegment=TcfCaV1PublisherPurposesSegment;