"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FixedIntegerListEncoder=void 0;const DecodingError_js_1=require("../../error/DecodingError.js"),EncodingError_js_1=require("../../error/EncodingError.js"),FixedIntegerEncoder_js_1=require("./FixedIntegerEncoder.js");class FixedIntegerListEncoder{static encode(e,r,n){if(e.length>n)throw new EncodingError_js_1.EncodingError("Too many values '"+e.length+"'");let o="";for(let n=0;n<e.length;n++)o+=FixedIntegerEncoder_js_1.FixedIntegerEncoder.encode(e[n],r);for(;o.length<r*n;)o+="0";return o}static decode(e,r,n){if(!/^[0-1]*$/.test(e))throw new DecodingError_js_1.DecodingError("Undecodable FixedInteger '"+e+"'");if(e.length>r*n)throw new DecodingError_js_1.DecodingError("Undecodable FixedIntegerList '"+e+"'");if(e.length%r!=0)throw new DecodingError_js_1.DecodingError("Undecodable FixedIntegerList '"+e+"'");for(;e.length<r*n;)e+="0";e.length>r*n&&(e=e.substring(0,r*n));let o=[];for(let n=0;n<e.length;n+=r)o.push(FixedIntegerEncoder_js_1.FixedIntegerEncoder.decode(e.substring(n,n+r)));for(;o.length<n;)o.push(0);return o}}exports.FixedIntegerListEncoder=FixedIntegerListEncoder;