"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.OptimizedFibonacciRangeEncoder=void 0;const DecodingError_js_1=require("../../error/DecodingError.js"),FibonacciIntegerRangeEncoder_js_1=require("./FibonacciIntegerRangeEncoder.js"),FixedBitfieldEncoder_js_1=require("./FixedBitfieldEncoder.js"),FixedIntegerEncoder_js_1=require("./FixedIntegerEncoder.js");class OptimizedFibonacciRangeEncoder{static encode(e){let n=e.length>0?e[e.length-1]:0,r=FibonacciIntegerRangeEncoder_js_1.FibonacciIntegerRangeEncoder.encode(e),i=n;if(r.length<=i)return FixedIntegerEncoder_js_1.FixedIntegerEncoder.encode(n,16)+"1"+r;{let r=[],d=0;for(let i=0;i<n;i++)i==e[d]-1?(r[i]=!0,d++):r[i]=!1;return FixedIntegerEncoder_js_1.FixedIntegerEncoder.encode(n,16)+"0"+FixedBitfieldEncoder_js_1.FixedBitfieldEncoder.encode(r,i)}}static decode(e){if(!/^[0-1]*$/.test(e)||e.length<2||e.indexOf("11")!==e.length-2)throw new DecodingError_js_1.DecodingError("Undecodable FibonacciInteger '"+e+"'");if("1"===e.charAt(16))return FibonacciIntegerRangeEncoder_js_1.FibonacciIntegerRangeEncoder.decode(e.substring(17));{let n=[],r=FixedBitfieldEncoder_js_1.FixedBitfieldEncoder.decode(e.substring(17));for(let e=0;e<r.length;e++)!0===r[e]&&n.push(e+1);return n}}}exports.OptimizedFibonacciRangeEncoder=OptimizedFibonacciRangeEncoder;