import { InvalidFieldError } from "../error/InvalidFieldError.js";
export class AbstractLazilyEncodableSegment {
    fields;
    encodedString = null;
    dirty = false;
    decoded = true;
    constructor() {
        this.fields = this.initializeFields();
    }
    //Overriden
    validate() { }
    hasField(fieldName) {
        return this.fields.containsKey(fieldName);
    }
    getFieldValue(fieldName) {
        return this.getField(fieldName).getValue();
    }
    setFieldValue(fieldName, value) {
        const field = this.getField(fieldName);
        this.dirty = true;
        field.setValue(value);
    }
    //Overriden
    toObj() {
        let obj = {};
        let fieldNames = this.getFieldNames();
        for (let i = 0; i < fieldNames.length; i++) {
            let fieldName = fieldNames[i];
            let value = this.getField(fieldName).toObj();
            obj[fieldName] = value;
        }
        return obj;
    }
    encode() {
        if (this.encodedString == null || this.encodedString.length === 0 || this.dirty) {
            this.validate();
            this.encodedString = this.encodeSegment(this.fields);
            this.dirty = false;
            this.decoded = true;
        }
        return this.encodedString;
    }
    decode(encodedString) {
        this.encodedString = encodedString;
        this.dirty = false;
        this.decoded = false;
    }
    getField(fieldName) {
        if (!this.decoded) {
            this.decodeSegment(this.encodedString, this.fields);
            this.dirty = false;
            this.decoded = true;
        }
        if (this.fields.containsKey(fieldName)) {
            return this.fields.get(fieldName);
        }
        else {
            throw new InvalidFieldError("Invalid field: '" + fieldName + "'");
        }
    }
}
