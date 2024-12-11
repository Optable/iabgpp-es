import { EncodableBitStringFields } from "../field/EncodableBitStringFields.js";
import { AbstractLazilyEncodableSegment } from "./AbstractLazilyEncodableSegment.js";
export declare class TcfEuV2PublisherPurposesSegment extends AbstractLazilyEncodableSegment<EncodableBitStringFields> {
    private base64UrlEncoder;
    private bitStringEncoder;
    constructor(encodedString?: string);
    getFieldNames(): string[];
    toObj(): any;
    protected initializeFields(): EncodableBitStringFields;
    protected encodeSegment(fields: EncodableBitStringFields): string;
    protected decodeSegment(encodedString: string, fields: EncodableBitStringFields): void;
}
