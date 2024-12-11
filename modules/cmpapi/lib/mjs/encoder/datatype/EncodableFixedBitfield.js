import { FixedBitfieldEncoder } from "./encoder/FixedBitfieldEncoder.js";
import { AbstractEncodableBitStringDataType } from "./AbstractEncodableBitStringDataType.js";
import { EncodingError } from "../error/EncodingError.js";
import { DecodingError } from "../error/DecodingError.js";
import { SubstringError } from "./SubstringError.js";
import { StringUtil } from "../util/StringUtil.js";
export class EncodableFixedBitfield extends AbstractEncodableBitStringDataType {
    numElements;
    constructor(value, hardFailIfMissing = true) {
        super(hardFailIfMissing);
        this.numElements = value.length;
        this.setValue(value);
    }
    encode() {
        try {
            return FixedBitfieldEncoder.encode(this.value, this.numElements);
        }
        catch (e) {
            throw new EncodingError(e);
        }
    }
    decode(bitString) {
        try {
            this.value = FixedBitfieldEncoder.decode(bitString);
        }
        catch (e) {
            throw new DecodingError(e);
        }
    }
    substring(bitString, fromIndex) {
        try {
            return StringUtil.substring(bitString, fromIndex, fromIndex + this.numElements);
        }
        catch (e) {
            throw new SubstringError(e);
        }
    }
    // Overriden
    toObj() {
        const result = [];
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i]) {
                result.push(i + 1);
            }
        }
        return result;
    }
    // Overriden
    getValue() {
        return [...super.getValue()];
    }
    // Overriden
    setValue(value) {
        let v = [...value];
        for (let i = v.length; i < this.numElements; i++) {
            v.push(false);
        }
        if (v.length > this.numElements) {
            v = v.slice(0, this.numElements);
        }
        super.setValue(v);
    }
}
