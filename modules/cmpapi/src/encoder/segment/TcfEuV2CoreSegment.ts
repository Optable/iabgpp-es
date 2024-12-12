import { AbstractBase64UrlEncoder } from "../base64/AbstractBase64UrlEncoder.js";
import { TraditionalBase64UrlEncoder } from "../base64/TraditionalBase64UrlEncoder.js";
import { BitStringEncoder } from "../bitstring/BitStringEncoder.js";
import { EncodableArrayOfFixedIntegerRanges } from "../datatype/EncodableArrayOfFixedIntegerRanges.js";
import { EncodableBoolean } from "../datatype/EncodableBoolean.js";
import { EncodableDatetime } from "../datatype/EncodableDatetime.js";
import { EncodableFixedBitfield } from "../datatype/EncodableFixedBitfield.js";
import { EncodableFixedInteger } from "../datatype/EncodableFixedInteger.js";
import { EncodableFixedString } from "../datatype/EncodableFixedString.js";
import { EncodableOptimizedFixedRange } from "../datatype/EncodableOptimizedFixedRange.js";
import { DecodingError } from "../error/DecodingError.js";
import { EncodableBitStringFields } from "../field/EncodableBitStringFields.js";
import { TCFEUV2_CORE_SEGMENT_FIELD_NAMES } from "../field/TcfEuV2Field.js";
import { TcfEuV2Field } from "../field/TcfEuV2Field.js";
import { TcfEuV2 } from "../section/TcfEuV2.js";
import { AbstractLazilyEncodableSegment } from "./AbstractLazilyEncodableSegment.js";

export class TcfEuV2CoreSegment extends AbstractLazilyEncodableSegment<EncodableBitStringFields> {
  private base64UrlEncoder: AbstractBase64UrlEncoder = TraditionalBase64UrlEncoder.getInstance();
  private bitStringEncoder: BitStringEncoder = BitStringEncoder.getInstance();

  constructor(encodedString?: string) {
    super();
    if (encodedString) {
      this.decode(encodedString);
    }
  }

  // overriden
  public getFieldNames(): string[] {
    return TCFEUV2_CORE_SEGMENT_FIELD_NAMES;
  }

  // overriden
  public toObj(): any {
    return {
      Version: this.getFieldValue(TcfEuV2Field.VERSION),
      Created: this.getFieldValue(TcfEuV2Field.CREATED),
      LastUpdated: this.getFieldValue(TcfEuV2Field.LAST_UPDATED),
      CmpId: this.getFieldValue(TcfEuV2Field.CMP_ID),
      CmpVersion: this.getFieldValue(TcfEuV2Field.CMP_VERSION),
      ConsentScreen: this.getFieldValue(TcfEuV2Field.CONSENT_SCREEN),
      ConsentLanguage: this.getFieldValue(TcfEuV2Field.CONSENT_LANGUAGE),
      VendorListVersion: this.getFieldValue(TcfEuV2Field.VENDOR_LIST_VERSION),
      TcfPolicyVersion: this.getFieldValue(TcfEuV2Field.POLICY_VERSION),
      IsServiceSpecific: this.getFieldValue(TcfEuV2Field.IS_SERVICE_SPECIFIC),
      UseNonStandardTexts: this.getFieldValue(TcfEuV2Field.USE_NON_STANDARD_STACKS),
      SpecialFeatureOptins: this.getFieldValue(TcfEuV2Field.SPECIAL_FEATURE_OPTINS),
      PurposeConsent: this.getFieldValue(TcfEuV2Field.PURPOSE_CONSENTS),
      PurposesLITransparency: this.getFieldValue(TcfEuV2Field.PURPOSE_LEGITIMATE_INTERESTS),
      PurposeOneTreatment: this.getFieldValue(TcfEuV2Field.PURPOSE_ONE_TREATMENT),
      PublisherCC: this.getFieldValue(TcfEuV2Field.PUBLISHER_COUNTRY_CODE),
      VendorConsent: this.getFieldValue(TcfEuV2Field.VENDOR_CONSENTS),
      VendorLegitimateInterest: this.getFieldValue(TcfEuV2Field.VENDOR_LEGITIMATE_INTERESTS),
      PubRestrictions: this.getFieldValue(TcfEuV2Field.PUBLISHER_RESTRICTIONS),
    }
  }

  // overriden
  protected initializeFields(): EncodableBitStringFields {
    let date = new Date();

    let fields: EncodableBitStringFields = new EncodableBitStringFields();
    fields.put(TcfEuV2Field.VERSION.toString(), new EncodableFixedInteger(6, TcfEuV2.VERSION));
    fields.put(TcfEuV2Field.CREATED.toString(), new EncodableDatetime(date));
    fields.put(TcfEuV2Field.LAST_UPDATED.toString(), new EncodableDatetime(date));
    fields.put(TcfEuV2Field.CMP_ID.toString(), new EncodableFixedInteger(12, 0));
    fields.put(TcfEuV2Field.CMP_VERSION.toString(), new EncodableFixedInteger(12, 0));
    fields.put(TcfEuV2Field.CONSENT_SCREEN.toString(), new EncodableFixedInteger(6, 0));
    fields.put(TcfEuV2Field.CONSENT_LANGUAGE.toString(), new EncodableFixedString(2, "EN"));
    fields.put(TcfEuV2Field.VENDOR_LIST_VERSION.toString(), new EncodableFixedInteger(12, 0));
    fields.put(TcfEuV2Field.POLICY_VERSION.toString(), new EncodableFixedInteger(6, 2));
    fields.put(TcfEuV2Field.IS_SERVICE_SPECIFIC.toString(), new EncodableBoolean(false));
    fields.put(TcfEuV2Field.USE_NON_STANDARD_STACKS.toString(), new EncodableBoolean(false));
    fields.put(
      TcfEuV2Field.SPECIAL_FEATURE_OPTINS.toString(),
      new EncodableFixedBitfield([false, false, false, false, false, false, false, false, false, false, false, false])
    );
    fields.put(
      TcfEuV2Field.PURPOSE_CONSENTS.toString(),
      new EncodableFixedBitfield([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ])
    );
    fields.put(
      TcfEuV2Field.PURPOSE_LEGITIMATE_INTERESTS.toString(),
      new EncodableFixedBitfield([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ])
    );
    fields.put(TcfEuV2Field.PURPOSE_ONE_TREATMENT.toString(), new EncodableBoolean(false));
    fields.put(TcfEuV2Field.PUBLISHER_COUNTRY_CODE.toString(), new EncodableFixedString(2, "AA"));
    fields.put(TcfEuV2Field.VENDOR_CONSENTS.toString(), new EncodableOptimizedFixedRange([]));
    fields.put(TcfEuV2Field.VENDOR_LEGITIMATE_INTERESTS.toString(), new EncodableOptimizedFixedRange([]));

    fields.put(TcfEuV2Field.PUBLISHER_RESTRICTIONS.toString(), new EncodableArrayOfFixedIntegerRanges(6, 2, [], false));
    return fields;
  }

  // overriden
  protected encodeSegment(fields: EncodableBitStringFields): string {
    let bitString: string = this.bitStringEncoder.encode(fields, this.getFieldNames());
    let encodedString: string = this.base64UrlEncoder.encode(bitString);
    return encodedString;
  }

  // overriden
  protected decodeSegment(encodedString: string, fields: EncodableBitStringFields): void {
    if (encodedString == null || encodedString.length === 0) {
      this.fields.reset(fields);
    }
    try {
      let bitString: string = this.base64UrlEncoder.decode(encodedString);
      this.bitStringEncoder.decode(bitString, this.getFieldNames(), fields);
    } catch (e) {
      throw new DecodingError("Unable to decode TcfEuV2CoreSegment '" + encodedString + "'");
    }
  }
}
