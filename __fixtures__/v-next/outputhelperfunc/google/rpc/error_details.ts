import { Duration, DurationAmino, DurationSDKType } from "../protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
import { isSet, DeepPartial, isObject } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "google.rpc";
/**
 * Describes when the clients can retry a failed request. Clients could ignore
 * the recommendation here or retry when this information is missing from error
 * responses.
 * 
 * It's always recommended that clients should use exponential backoff when
 * retrying.
 * 
 * Clients should wait until `retry_delay` amount of time has passed since
 * receiving the error response before retrying.  If retrying requests also
 * fail, clients should use an exponential backoff scheme to gradually increase
 * the delay between retries based on `retry_delay`, until either a maximum
 * number of retries have been reached or a maximum retry delay cap has been
 * reached.
 */
export interface RetryInfo {
  /** Clients should wait at least this long between retrying the same request. */
  retryDelay?: Duration;
}
export interface RetryInfoProtoMsg {
  typeUrl: "/google.rpc.RetryInfo";
  value: Uint8Array;
}
/**
 * Describes when the clients can retry a failed request. Clients could ignore
 * the recommendation here or retry when this information is missing from error
 * responses.
 * 
 * It's always recommended that clients should use exponential backoff when
 * retrying.
 * 
 * Clients should wait until `retry_delay` amount of time has passed since
 * receiving the error response before retrying.  If retrying requests also
 * fail, clients should use an exponential backoff scheme to gradually increase
 * the delay between retries based on `retry_delay`, until either a maximum
 * number of retries have been reached or a maximum retry delay cap has been
 * reached.
 */
export interface RetryInfoAmino {
  /** Clients should wait at least this long between retrying the same request. */
  retry_delay?: DurationAmino;
}
export interface RetryInfoAminoMsg {
  type: "/google.rpc.RetryInfo";
  value: RetryInfoAmino;
}
/**
 * Describes when the clients can retry a failed request. Clients could ignore
 * the recommendation here or retry when this information is missing from error
 * responses.
 * 
 * It's always recommended that clients should use exponential backoff when
 * retrying.
 * 
 * Clients should wait until `retry_delay` amount of time has passed since
 * receiving the error response before retrying.  If retrying requests also
 * fail, clients should use an exponential backoff scheme to gradually increase
 * the delay between retries based on `retry_delay`, until either a maximum
 * number of retries have been reached or a maximum retry delay cap has been
 * reached.
 */
export interface RetryInfoSDKType {
  retry_delay?: DurationSDKType;
}
/** Describes additional debugging info. */
export interface DebugInfo {
  /** The stack trace entries indicating where the error occurred. */
  stackEntries: string[];
  /** Additional debugging information provided by the server. */
  detail: string;
}
export interface DebugInfoProtoMsg {
  typeUrl: "/google.rpc.DebugInfo";
  value: Uint8Array;
}
/** Describes additional debugging info. */
export interface DebugInfoAmino {
  /** The stack trace entries indicating where the error occurred. */
  stack_entries?: string[];
  /** Additional debugging information provided by the server. */
  detail?: string;
}
export interface DebugInfoAminoMsg {
  type: "/google.rpc.DebugInfo";
  value: DebugInfoAmino;
}
/** Describes additional debugging info. */
export interface DebugInfoSDKType {
  stack_entries: string[];
  detail: string;
}
/**
 * Describes how a quota check failed.
 * 
 * For example if a daily limit was exceeded for the calling project,
 * a service could respond with a QuotaFailure detail containing the project
 * id and the description of the quota limit that was exceeded.  If the
 * calling project hasn't enabled the service in the developer console, then
 * a service could respond with the project id and set `service_disabled`
 * to true.
 * 
 * Also see RetryInfo and Help types for other details about handling a
 * quota failure.
 */
export interface QuotaFailure {
  /** Describes all quota violations. */
  violations: QuotaFailure_Violation[];
}
export interface QuotaFailureProtoMsg {
  typeUrl: "/google.rpc.QuotaFailure";
  value: Uint8Array;
}
/**
 * Describes how a quota check failed.
 * 
 * For example if a daily limit was exceeded for the calling project,
 * a service could respond with a QuotaFailure detail containing the project
 * id and the description of the quota limit that was exceeded.  If the
 * calling project hasn't enabled the service in the developer console, then
 * a service could respond with the project id and set `service_disabled`
 * to true.
 * 
 * Also see RetryInfo and Help types for other details about handling a
 * quota failure.
 */
export interface QuotaFailureAmino {
  /** Describes all quota violations. */
  violations?: QuotaFailure_ViolationAmino[];
}
export interface QuotaFailureAminoMsg {
  type: "/google.rpc.QuotaFailure";
  value: QuotaFailureAmino;
}
/**
 * Describes how a quota check failed.
 * 
 * For example if a daily limit was exceeded for the calling project,
 * a service could respond with a QuotaFailure detail containing the project
 * id and the description of the quota limit that was exceeded.  If the
 * calling project hasn't enabled the service in the developer console, then
 * a service could respond with the project id and set `service_disabled`
 * to true.
 * 
 * Also see RetryInfo and Help types for other details about handling a
 * quota failure.
 */
export interface QuotaFailureSDKType {
  violations: QuotaFailure_ViolationSDKType[];
}
/**
 * A message type used to describe a single quota violation.  For example, a
 * daily quota or a custom quota that was exceeded.
 */
export interface QuotaFailure_Violation {
  /**
   * The subject on which the quota check failed.
   * For example, "clientip:<ip address of client>" or "project:<Google
   * developer project id>".
   */
  subject: string;
  /**
   * A description of how the quota check failed. Clients can use this
   * description to find more about the quota configuration in the service's
   * public documentation, or find the relevant quota limit to adjust through
   * developer console.
   * 
   * For example: "Service disabled" or "Daily Limit for read operations
   * exceeded".
   */
  description: string;
}
export interface QuotaFailure_ViolationProtoMsg {
  typeUrl: "/google.rpc.Violation";
  value: Uint8Array;
}
/**
 * A message type used to describe a single quota violation.  For example, a
 * daily quota or a custom quota that was exceeded.
 */
export interface QuotaFailure_ViolationAmino {
  /**
   * The subject on which the quota check failed.
   * For example, "clientip:<ip address of client>" or "project:<Google
   * developer project id>".
   */
  subject?: string;
  /**
   * A description of how the quota check failed. Clients can use this
   * description to find more about the quota configuration in the service's
   * public documentation, or find the relevant quota limit to adjust through
   * developer console.
   * 
   * For example: "Service disabled" or "Daily Limit for read operations
   * exceeded".
   */
  description?: string;
}
export interface QuotaFailure_ViolationAminoMsg {
  type: "/google.rpc.Violation";
  value: QuotaFailure_ViolationAmino;
}
/**
 * A message type used to describe a single quota violation.  For example, a
 * daily quota or a custom quota that was exceeded.
 */
export interface QuotaFailure_ViolationSDKType {
  subject: string;
  description: string;
}
export interface ErrorInfo_MetadataEntry {
  key: string;
  value: string;
}
export interface ErrorInfo_MetadataEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface ErrorInfo_MetadataEntryAmino {
  key?: string;
  value?: string;
}
export interface ErrorInfo_MetadataEntryAminoMsg {
  type: string;
  value: ErrorInfo_MetadataEntryAmino;
}
export interface ErrorInfo_MetadataEntrySDKType {
  key: string;
  value: string;
}
/**
 * Describes the cause of the error with structured details.
 * 
 * Example of an error when contacting the "pubsub.googleapis.com" API when it
 * is not enabled:
 * 
 *     { "reason": "API_DISABLED"
 *       "domain": "googleapis.com"
 *       "metadata": {
 *         "resource": "projects/123",
 *         "service": "pubsub.googleapis.com"
 *       }
 *     }
 * 
 * This response indicates that the pubsub.googleapis.com API is not enabled.
 * 
 * Example of an error that is returned when attempting to create a Spanner
 * instance in a region that is out of stock:
 * 
 *     { "reason": "STOCKOUT"
 *       "domain": "spanner.googleapis.com",
 *       "metadata": {
 *         "availableRegions": "us-central1,us-east2"
 *       }
 *     }
 */
export interface ErrorInfo {
  /**
   * The reason of the error. This is a constant value that identifies the
   * proximate cause of the error. Error reasons are unique within a particular
   * domain of errors. This should be at most 63 characters and match
   * /[A-Z0-9_]+/.
   */
  reason: string;
  /**
   * The logical grouping to which the "reason" belongs. The error domain
   * is typically the registered service name of the tool or product that
   * generates the error. Example: "pubsub.googleapis.com". If the error is
   * generated by some common infrastructure, the error domain must be a
   * globally unique value that identifies the infrastructure. For Google API
   * infrastructure, the error domain is "googleapis.com".
   */
  domain: string;
  /**
   * Additional structured details about this error.
   * 
   * Keys should match /[a-zA-Z0-9-_]/ and be limited to 64 characters in
   * length. When identifying the current value of an exceeded limit, the units
   * should be contained in the key, not the value.  For example, rather than
   * {"instanceLimit": "100/request"}, should be returned as,
   * {"instanceLimitPerRequest": "100"}, if the client exceeds the number of
   * instances that can be created in a single (batch) request.
   */
  metadata: {
    [key: string]: string;
  };
}
export interface ErrorInfoProtoMsg {
  typeUrl: "/google.rpc.ErrorInfo";
  value: Uint8Array;
}
/**
 * Describes the cause of the error with structured details.
 * 
 * Example of an error when contacting the "pubsub.googleapis.com" API when it
 * is not enabled:
 * 
 *     { "reason": "API_DISABLED"
 *       "domain": "googleapis.com"
 *       "metadata": {
 *         "resource": "projects/123",
 *         "service": "pubsub.googleapis.com"
 *       }
 *     }
 * 
 * This response indicates that the pubsub.googleapis.com API is not enabled.
 * 
 * Example of an error that is returned when attempting to create a Spanner
 * instance in a region that is out of stock:
 * 
 *     { "reason": "STOCKOUT"
 *       "domain": "spanner.googleapis.com",
 *       "metadata": {
 *         "availableRegions": "us-central1,us-east2"
 *       }
 *     }
 */
export interface ErrorInfoAmino {
  /**
   * The reason of the error. This is a constant value that identifies the
   * proximate cause of the error. Error reasons are unique within a particular
   * domain of errors. This should be at most 63 characters and match
   * /[A-Z0-9_]+/.
   */
  reason?: string;
  /**
   * The logical grouping to which the "reason" belongs. The error domain
   * is typically the registered service name of the tool or product that
   * generates the error. Example: "pubsub.googleapis.com". If the error is
   * generated by some common infrastructure, the error domain must be a
   * globally unique value that identifies the infrastructure. For Google API
   * infrastructure, the error domain is "googleapis.com".
   */
  domain?: string;
  /**
   * Additional structured details about this error.
   * 
   * Keys should match /[a-zA-Z0-9-_]/ and be limited to 64 characters in
   * length. When identifying the current value of an exceeded limit, the units
   * should be contained in the key, not the value.  For example, rather than
   * {"instanceLimit": "100/request"}, should be returned as,
   * {"instanceLimitPerRequest": "100"}, if the client exceeds the number of
   * instances that can be created in a single (batch) request.
   */
  metadata?: {
    [key: string]: string;
  };
}
export interface ErrorInfoAminoMsg {
  type: "/google.rpc.ErrorInfo";
  value: ErrorInfoAmino;
}
/**
 * Describes the cause of the error with structured details.
 * 
 * Example of an error when contacting the "pubsub.googleapis.com" API when it
 * is not enabled:
 * 
 *     { "reason": "API_DISABLED"
 *       "domain": "googleapis.com"
 *       "metadata": {
 *         "resource": "projects/123",
 *         "service": "pubsub.googleapis.com"
 *       }
 *     }
 * 
 * This response indicates that the pubsub.googleapis.com API is not enabled.
 * 
 * Example of an error that is returned when attempting to create a Spanner
 * instance in a region that is out of stock:
 * 
 *     { "reason": "STOCKOUT"
 *       "domain": "spanner.googleapis.com",
 *       "metadata": {
 *         "availableRegions": "us-central1,us-east2"
 *       }
 *     }
 */
export interface ErrorInfoSDKType {
  reason: string;
  domain: string;
  metadata: {
    [key: string]: string;
  };
}
/**
 * Describes what preconditions have failed.
 * 
 * For example, if an RPC failed because it required the Terms of Service to be
 * acknowledged, it could list the terms of service violation in the
 * PreconditionFailure message.
 */
export interface PreconditionFailure {
  /** Describes all precondition violations. */
  violations: PreconditionFailure_Violation[];
}
export interface PreconditionFailureProtoMsg {
  typeUrl: "/google.rpc.PreconditionFailure";
  value: Uint8Array;
}
/**
 * Describes what preconditions have failed.
 * 
 * For example, if an RPC failed because it required the Terms of Service to be
 * acknowledged, it could list the terms of service violation in the
 * PreconditionFailure message.
 */
export interface PreconditionFailureAmino {
  /** Describes all precondition violations. */
  violations?: PreconditionFailure_ViolationAmino[];
}
export interface PreconditionFailureAminoMsg {
  type: "/google.rpc.PreconditionFailure";
  value: PreconditionFailureAmino;
}
/**
 * Describes what preconditions have failed.
 * 
 * For example, if an RPC failed because it required the Terms of Service to be
 * acknowledged, it could list the terms of service violation in the
 * PreconditionFailure message.
 */
export interface PreconditionFailureSDKType {
  violations: PreconditionFailure_ViolationSDKType[];
}
/** A message type used to describe a single precondition failure. */
export interface PreconditionFailure_Violation {
  /**
   * The type of PreconditionFailure. We recommend using a service-specific
   * enum type to define the supported precondition violation subjects. For
   * example, "TOS" for "Terms of Service violation".
   */
  type: string;
  /**
   * The subject, relative to the type, that failed.
   * For example, "google.com/cloud" relative to the "TOS" type would indicate
   * which terms of service is being referenced.
   */
  subject: string;
  /**
   * A description of how the precondition failed. Developers can use this
   * description to understand how to fix the failure.
   * 
   * For example: "Terms of service not accepted".
   */
  description: string;
}
export interface PreconditionFailure_ViolationProtoMsg {
  typeUrl: "/google.rpc.Violation";
  value: Uint8Array;
}
/** A message type used to describe a single precondition failure. */
export interface PreconditionFailure_ViolationAmino {
  /**
   * The type of PreconditionFailure. We recommend using a service-specific
   * enum type to define the supported precondition violation subjects. For
   * example, "TOS" for "Terms of Service violation".
   */
  type?: string;
  /**
   * The subject, relative to the type, that failed.
   * For example, "google.com/cloud" relative to the "TOS" type would indicate
   * which terms of service is being referenced.
   */
  subject?: string;
  /**
   * A description of how the precondition failed. Developers can use this
   * description to understand how to fix the failure.
   * 
   * For example: "Terms of service not accepted".
   */
  description?: string;
}
export interface PreconditionFailure_ViolationAminoMsg {
  type: "/google.rpc.Violation";
  value: PreconditionFailure_ViolationAmino;
}
/** A message type used to describe a single precondition failure. */
export interface PreconditionFailure_ViolationSDKType {
  type: string;
  subject: string;
  description: string;
}
/**
 * Describes violations in a client request. This error type focuses on the
 * syntactic aspects of the request.
 */
export interface BadRequest {
  /** Describes all violations in a client request. */
  fieldViolations: BadRequest_FieldViolation[];
}
export interface BadRequestProtoMsg {
  typeUrl: "/google.rpc.BadRequest";
  value: Uint8Array;
}
/**
 * Describes violations in a client request. This error type focuses on the
 * syntactic aspects of the request.
 */
export interface BadRequestAmino {
  /** Describes all violations in a client request. */
  field_violations?: BadRequest_FieldViolationAmino[];
}
export interface BadRequestAminoMsg {
  type: "/google.rpc.BadRequest";
  value: BadRequestAmino;
}
/**
 * Describes violations in a client request. This error type focuses on the
 * syntactic aspects of the request.
 */
export interface BadRequestSDKType {
  field_violations: BadRequest_FieldViolationSDKType[];
}
/** A message type used to describe a single bad request field. */
export interface BadRequest_FieldViolation {
  /**
   * A path leading to a field in the request body. The value will be a
   * sequence of dot-separated identifiers that identify a protocol buffer
   * field. E.g., "field_violations.field" would identify this field.
   */
  field: string;
  /** A description of why the request element is bad. */
  description: string;
}
export interface BadRequest_FieldViolationProtoMsg {
  typeUrl: "/google.rpc.FieldViolation";
  value: Uint8Array;
}
/** A message type used to describe a single bad request field. */
export interface BadRequest_FieldViolationAmino {
  /**
   * A path leading to a field in the request body. The value will be a
   * sequence of dot-separated identifiers that identify a protocol buffer
   * field. E.g., "field_violations.field" would identify this field.
   */
  field?: string;
  /** A description of why the request element is bad. */
  description?: string;
}
export interface BadRequest_FieldViolationAminoMsg {
  type: "/google.rpc.FieldViolation";
  value: BadRequest_FieldViolationAmino;
}
/** A message type used to describe a single bad request field. */
export interface BadRequest_FieldViolationSDKType {
  field: string;
  description: string;
}
/**
 * Contains metadata about the request that clients can attach when filing a bug
 * or providing other forms of feedback.
 */
export interface RequestInfo {
  /**
   * An opaque string that should only be interpreted by the service generating
   * it. For example, it can be used to identify requests in the service's logs.
   */
  requestId: string;
  /**
   * Any data that was used to serve this request. For example, an encrypted
   * stack trace that can be sent back to the service provider for debugging.
   */
  servingData: string;
}
export interface RequestInfoProtoMsg {
  typeUrl: "/google.rpc.RequestInfo";
  value: Uint8Array;
}
/**
 * Contains metadata about the request that clients can attach when filing a bug
 * or providing other forms of feedback.
 */
export interface RequestInfoAmino {
  /**
   * An opaque string that should only be interpreted by the service generating
   * it. For example, it can be used to identify requests in the service's logs.
   */
  request_id?: string;
  /**
   * Any data that was used to serve this request. For example, an encrypted
   * stack trace that can be sent back to the service provider for debugging.
   */
  serving_data?: string;
}
export interface RequestInfoAminoMsg {
  type: "/google.rpc.RequestInfo";
  value: RequestInfoAmino;
}
/**
 * Contains metadata about the request that clients can attach when filing a bug
 * or providing other forms of feedback.
 */
export interface RequestInfoSDKType {
  request_id: string;
  serving_data: string;
}
/** Describes the resource that is being accessed. */
export interface ResourceInfo {
  /**
   * A name for the type of resource being accessed, e.g. "sql table",
   * "cloud storage bucket", "file", "Google calendar"; or the type URL
   * of the resource: e.g. "type.googleapis.com/google.pubsub.v1.Topic".
   */
  resourceType: string;
  /**
   * The name of the resource being accessed.  For example, a shared calendar
   * name: "example.com_4fghdhgsrgh@group.calendar.google.com", if the current
   * error is [google.rpc.Code.PERMISSION_DENIED][google.rpc.Code.PERMISSION_DENIED].
   */
  resourceName: string;
  /**
   * The owner of the resource (optional).
   * For example, "user:<owner email>" or "project:<Google developer project
   * id>".
   */
  owner: string;
  /**
   * Describes what error is encountered when accessing this resource.
   * For example, updating a cloud project may require the `writer` permission
   * on the developer console project.
   */
  description: string;
}
export interface ResourceInfoProtoMsg {
  typeUrl: "/google.rpc.ResourceInfo";
  value: Uint8Array;
}
/** Describes the resource that is being accessed. */
export interface ResourceInfoAmino {
  /**
   * A name for the type of resource being accessed, e.g. "sql table",
   * "cloud storage bucket", "file", "Google calendar"; or the type URL
   * of the resource: e.g. "type.googleapis.com/google.pubsub.v1.Topic".
   */
  resource_type?: string;
  /**
   * The name of the resource being accessed.  For example, a shared calendar
   * name: "example.com_4fghdhgsrgh@group.calendar.google.com", if the current
   * error is [google.rpc.Code.PERMISSION_DENIED][google.rpc.Code.PERMISSION_DENIED].
   */
  resource_name?: string;
  /**
   * The owner of the resource (optional).
   * For example, "user:<owner email>" or "project:<Google developer project
   * id>".
   */
  owner?: string;
  /**
   * Describes what error is encountered when accessing this resource.
   * For example, updating a cloud project may require the `writer` permission
   * on the developer console project.
   */
  description?: string;
}
export interface ResourceInfoAminoMsg {
  type: "/google.rpc.ResourceInfo";
  value: ResourceInfoAmino;
}
/** Describes the resource that is being accessed. */
export interface ResourceInfoSDKType {
  resource_type: string;
  resource_name: string;
  owner: string;
  description: string;
}
/**
 * Provides links to documentation or for performing an out of band action.
 * 
 * For example, if a quota check failed with an error indicating the calling
 * project hasn't enabled the accessed service, this can contain a URL pointing
 * directly to the right place in the developer console to flip the bit.
 */
export interface Help {
  /** URL(s) pointing to additional information on handling the current error. */
  links: Help_Link[];
}
export interface HelpProtoMsg {
  typeUrl: "/google.rpc.Help";
  value: Uint8Array;
}
/**
 * Provides links to documentation or for performing an out of band action.
 * 
 * For example, if a quota check failed with an error indicating the calling
 * project hasn't enabled the accessed service, this can contain a URL pointing
 * directly to the right place in the developer console to flip the bit.
 */
export interface HelpAmino {
  /** URL(s) pointing to additional information on handling the current error. */
  links?: Help_LinkAmino[];
}
export interface HelpAminoMsg {
  type: "/google.rpc.Help";
  value: HelpAmino;
}
/**
 * Provides links to documentation or for performing an out of band action.
 * 
 * For example, if a quota check failed with an error indicating the calling
 * project hasn't enabled the accessed service, this can contain a URL pointing
 * directly to the right place in the developer console to flip the bit.
 */
export interface HelpSDKType {
  links: Help_LinkSDKType[];
}
/** Describes a URL link. */
export interface Help_Link {
  /** Describes what the link offers. */
  description: string;
  /** The URL of the link. */
  url: string;
}
export interface Help_LinkProtoMsg {
  typeUrl: "/google.rpc.Link";
  value: Uint8Array;
}
/** Describes a URL link. */
export interface Help_LinkAmino {
  /** Describes what the link offers. */
  description?: string;
  /** The URL of the link. */
  url?: string;
}
export interface Help_LinkAminoMsg {
  type: "/google.rpc.Link";
  value: Help_LinkAmino;
}
/** Describes a URL link. */
export interface Help_LinkSDKType {
  description: string;
  url: string;
}
/**
 * Provides a localized error message that is safe to return to the user
 * which can be attached to an RPC error.
 */
export interface LocalizedMessage {
  /**
   * The locale used following the specification defined at
   * http://www.rfc-editor.org/rfc/bcp/bcp47.txt.
   * Examples are: "en-US", "fr-CH", "es-MX"
   */
  locale: string;
  /** The localized error message in the above locale. */
  message: string;
}
export interface LocalizedMessageProtoMsg {
  typeUrl: "/google.rpc.LocalizedMessage";
  value: Uint8Array;
}
/**
 * Provides a localized error message that is safe to return to the user
 * which can be attached to an RPC error.
 */
export interface LocalizedMessageAmino {
  /**
   * The locale used following the specification defined at
   * http://www.rfc-editor.org/rfc/bcp/bcp47.txt.
   * Examples are: "en-US", "fr-CH", "es-MX"
   */
  locale?: string;
  /** The localized error message in the above locale. */
  message?: string;
}
export interface LocalizedMessageAminoMsg {
  type: "/google.rpc.LocalizedMessage";
  value: LocalizedMessageAmino;
}
/**
 * Provides a localized error message that is safe to return to the user
 * which can be attached to an RPC error.
 */
export interface LocalizedMessageSDKType {
  locale: string;
  message: string;
}
function createBaseRetryInfo(): RetryInfo {
  return {
    retryDelay: undefined
  };
}
export const RetryInfo = {
  typeUrl: "/google.rpc.RetryInfo",
  is(o: any): o is RetryInfo {
    return o && o.$typeUrl === RetryInfo.typeUrl;
  },
  isSDK(o: any): o is RetryInfoSDKType {
    return o && o.$typeUrl === RetryInfo.typeUrl;
  },
  isAmino(o: any): o is RetryInfoAmino {
    return o && o.$typeUrl === RetryInfo.typeUrl;
  },
  encode(message: RetryInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.retryDelay !== undefined) {
      Duration.encode(message.retryDelay, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RetryInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetryInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.retryDelay = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RetryInfo {
    const obj = createBaseRetryInfo();
    if (isSet(object.retryDelay)) obj.retryDelay = Duration.fromJSON(object.retryDelay);
    return obj;
  },
  toJSON(message: RetryInfo): JsonSafe<RetryInfo> {
    const obj: any = {};
    message.retryDelay !== undefined && (obj.retryDelay = message.retryDelay ? Duration.toJSON(message.retryDelay) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<RetryInfo>): RetryInfo {
    const message = createBaseRetryInfo();
    if (object.retryDelay !== undefined && object.retryDelay !== null) {
      message.retryDelay = Duration.fromPartial(object.retryDelay);
    }
    return message;
  },
  fromSDK(object: RetryInfoSDKType): RetryInfo {
    return {
      retryDelay: object.retry_delay ? Duration.fromSDK(object.retry_delay) : undefined
    };
  },
  fromSDKJSON(object: any): RetryInfoSDKType {
    return {
      retry_delay: isSet(object.retry_delay) ? Duration.fromSDKJSON(object.retry_delay) : undefined
    };
  },
  toSDK(message: RetryInfo): RetryInfoSDKType {
    const obj: any = {};
    message.retryDelay !== undefined && (obj.retry_delay = message.retryDelay ? Duration.toSDK(message.retryDelay) : undefined);
    return obj;
  },
  fromAmino(object: RetryInfoAmino): RetryInfo {
    const message = createBaseRetryInfo();
    if (object.retry_delay !== undefined && object.retry_delay !== null) {
      message.retryDelay = Duration.fromAmino(object.retry_delay);
    }
    return message;
  },
  toAmino(message: RetryInfo): RetryInfoAmino {
    const obj: any = {};
    obj.retry_delay = message.retryDelay ? Duration.toAmino(message.retryDelay) : undefined;
    return obj;
  },
  fromAminoMsg(object: RetryInfoAminoMsg): RetryInfo {
    return RetryInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: RetryInfoProtoMsg): RetryInfo {
    return RetryInfo.decode(message.value);
  },
  toProto(message: RetryInfo): Uint8Array {
    return RetryInfo.encode(message).finish();
  },
  toProtoMsg(message: RetryInfo): RetryInfoProtoMsg {
    return {
      typeUrl: "/google.rpc.RetryInfo",
      value: RetryInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseDebugInfo(): DebugInfo {
  return {
    stackEntries: [],
    detail: ""
  };
}
export const DebugInfo = {
  typeUrl: "/google.rpc.DebugInfo",
  is(o: any): o is DebugInfo {
    return o && (o.$typeUrl === DebugInfo.typeUrl || Array.isArray(o.stackEntries) && (!o.stackEntries.length || typeof o.stackEntries[0] === "string") && typeof o.detail === "string");
  },
  isSDK(o: any): o is DebugInfoSDKType {
    return o && (o.$typeUrl === DebugInfo.typeUrl || Array.isArray(o.stack_entries) && (!o.stack_entries.length || typeof o.stack_entries[0] === "string") && typeof o.detail === "string");
  },
  isAmino(o: any): o is DebugInfoAmino {
    return o && (o.$typeUrl === DebugInfo.typeUrl || Array.isArray(o.stack_entries) && (!o.stack_entries.length || typeof o.stack_entries[0] === "string") && typeof o.detail === "string");
  },
  encode(message: DebugInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.stackEntries) {
      writer.uint32(10).string(v!);
    }
    if (message.detail !== undefined) {
      writer.uint32(18).string(message.detail);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DebugInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebugInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stackEntries.push(reader.string());
          break;
        case 2:
          message.detail = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DebugInfo {
    const obj = createBaseDebugInfo();
    if (Array.isArray(object?.stackEntries)) obj.stackEntries = object.stackEntries.map((e: any) => String(e));
    if (isSet(object.detail)) obj.detail = String(object.detail);
    return obj;
  },
  toJSON(message: DebugInfo): JsonSafe<DebugInfo> {
    const obj: any = {};
    if (message.stackEntries) {
      obj.stackEntries = message.stackEntries.map(e => e);
    } else {
      obj.stackEntries = [];
    }
    message.detail !== undefined && (obj.detail = message.detail);
    return obj;
  },
  fromPartial(object: DeepPartial<DebugInfo>): DebugInfo {
    const message = createBaseDebugInfo();
    message.stackEntries = object.stackEntries?.map(e => e) || [];
    message.detail = object.detail ?? "";
    return message;
  },
  fromSDK(object: DebugInfoSDKType): DebugInfo {
    return {
      stackEntries: Array.isArray(object?.stack_entries) ? object.stack_entries.map((e: any) => e) : [],
      detail: object?.detail
    };
  },
  fromSDKJSON(object: any): DebugInfoSDKType {
    return {
      stack_entries: Array.isArray(object?.stack_entries) ? object.stack_entries.map((e: any) => String(e)) : [],
      detail: isSet(object.detail) ? String(object.detail) : ""
    };
  },
  toSDK(message: DebugInfo): DebugInfoSDKType {
    const obj: any = {};
    if (message.stackEntries) {
      obj.stack_entries = message.stackEntries.map(e => e);
    } else {
      obj.stack_entries = [];
    }
    obj.detail = message.detail;
    return obj;
  },
  fromAmino(object: DebugInfoAmino): DebugInfo {
    const message = createBaseDebugInfo();
    message.stackEntries = object.stack_entries?.map(e => e) || [];
    if (object.detail !== undefined && object.detail !== null) {
      message.detail = object.detail;
    }
    return message;
  },
  toAmino(message: DebugInfo): DebugInfoAmino {
    const obj: any = {};
    if (message.stackEntries) {
      obj.stack_entries = message.stackEntries.map(e => e);
    } else {
      obj.stack_entries = message.stackEntries;
    }
    obj.detail = message.detail === "" ? undefined : message.detail;
    return obj;
  },
  fromAminoMsg(object: DebugInfoAminoMsg): DebugInfo {
    return DebugInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: DebugInfoProtoMsg): DebugInfo {
    return DebugInfo.decode(message.value);
  },
  toProto(message: DebugInfo): Uint8Array {
    return DebugInfo.encode(message).finish();
  },
  toProtoMsg(message: DebugInfo): DebugInfoProtoMsg {
    return {
      typeUrl: "/google.rpc.DebugInfo",
      value: DebugInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuotaFailure(): QuotaFailure {
  return {
    violations: []
  };
}
export const QuotaFailure = {
  typeUrl: "/google.rpc.QuotaFailure",
  is(o: any): o is QuotaFailure {
    return o && (o.$typeUrl === QuotaFailure.typeUrl || Array.isArray(o.violations) && (!o.violations.length || QuotaFailure_Violation.is(o.violations[0])));
  },
  isSDK(o: any): o is QuotaFailureSDKType {
    return o && (o.$typeUrl === QuotaFailure.typeUrl || Array.isArray(o.violations) && (!o.violations.length || QuotaFailure_Violation.isSDK(o.violations[0])));
  },
  isAmino(o: any): o is QuotaFailureAmino {
    return o && (o.$typeUrl === QuotaFailure.typeUrl || Array.isArray(o.violations) && (!o.violations.length || QuotaFailure_Violation.isAmino(o.violations[0])));
  },
  encode(message: QuotaFailure, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.violations) {
      QuotaFailure_Violation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaFailure {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.violations.push(QuotaFailure_Violation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuotaFailure {
    const obj = createBaseQuotaFailure();
    if (Array.isArray(object?.violations)) obj.violations = object.violations.map((e: any) => QuotaFailure_Violation.fromJSON(e));
    return obj;
  },
  toJSON(message: QuotaFailure): JsonSafe<QuotaFailure> {
    const obj: any = {};
    if (message.violations) {
      obj.violations = message.violations.map(e => e ? QuotaFailure_Violation.toJSON(e) : undefined);
    } else {
      obj.violations = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QuotaFailure>): QuotaFailure {
    const message = createBaseQuotaFailure();
    message.violations = object.violations?.map(e => QuotaFailure_Violation.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QuotaFailureSDKType): QuotaFailure {
    return {
      violations: Array.isArray(object?.violations) ? object.violations.map((e: any) => QuotaFailure_Violation.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QuotaFailureSDKType {
    return {
      violations: Array.isArray(object?.violations) ? object.violations.map((e: any) => QuotaFailure_Violation.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QuotaFailure): QuotaFailureSDKType {
    const obj: any = {};
    if (message.violations) {
      obj.violations = message.violations.map(e => e ? QuotaFailure_Violation.toSDK(e) : undefined);
    } else {
      obj.violations = [];
    }
    return obj;
  },
  fromAmino(object: QuotaFailureAmino): QuotaFailure {
    const message = createBaseQuotaFailure();
    message.violations = object.violations?.map(e => QuotaFailure_Violation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuotaFailure): QuotaFailureAmino {
    const obj: any = {};
    if (message.violations) {
      obj.violations = message.violations.map(e => e ? QuotaFailure_Violation.toAmino(e) : undefined);
    } else {
      obj.violations = message.violations;
    }
    return obj;
  },
  fromAminoMsg(object: QuotaFailureAminoMsg): QuotaFailure {
    return QuotaFailure.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotaFailureProtoMsg): QuotaFailure {
    return QuotaFailure.decode(message.value);
  },
  toProto(message: QuotaFailure): Uint8Array {
    return QuotaFailure.encode(message).finish();
  },
  toProtoMsg(message: QuotaFailure): QuotaFailureProtoMsg {
    return {
      typeUrl: "/google.rpc.QuotaFailure",
      value: QuotaFailure.encode(message).finish()
    };
  },
  registerTypeUrl() {
    QuotaFailure_Violation.registerTypeUrl();
  }
};
function createBaseQuotaFailure_Violation(): QuotaFailure_Violation {
  return {
    subject: "",
    description: ""
  };
}
export const QuotaFailure_Violation = {
  typeUrl: "/google.rpc.Violation",
  is(o: any): o is QuotaFailure_Violation {
    return o && (o.$typeUrl === QuotaFailure_Violation.typeUrl || typeof o.subject === "string" && typeof o.description === "string");
  },
  isSDK(o: any): o is QuotaFailure_ViolationSDKType {
    return o && (o.$typeUrl === QuotaFailure_Violation.typeUrl || typeof o.subject === "string" && typeof o.description === "string");
  },
  isAmino(o: any): o is QuotaFailure_ViolationAmino {
    return o && (o.$typeUrl === QuotaFailure_Violation.typeUrl || typeof o.subject === "string" && typeof o.description === "string");
  },
  encode(message: QuotaFailure_Violation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subject !== undefined) {
      writer.uint32(10).string(message.subject);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaFailure_Violation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaFailure_Violation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subject = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuotaFailure_Violation {
    const obj = createBaseQuotaFailure_Violation();
    if (isSet(object.subject)) obj.subject = String(object.subject);
    if (isSet(object.description)) obj.description = String(object.description);
    return obj;
  },
  toJSON(message: QuotaFailure_Violation): JsonSafe<QuotaFailure_Violation> {
    const obj: any = {};
    message.subject !== undefined && (obj.subject = message.subject);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
  fromPartial(object: DeepPartial<QuotaFailure_Violation>): QuotaFailure_Violation {
    const message = createBaseQuotaFailure_Violation();
    message.subject = object.subject ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromSDK(object: QuotaFailure_ViolationSDKType): QuotaFailure_Violation {
    return {
      subject: object?.subject,
      description: object?.description
    };
  },
  fromSDKJSON(object: any): QuotaFailure_ViolationSDKType {
    return {
      subject: isSet(object.subject) ? String(object.subject) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toSDK(message: QuotaFailure_Violation): QuotaFailure_ViolationSDKType {
    const obj: any = {};
    obj.subject = message.subject;
    obj.description = message.description;
    return obj;
  },
  fromAmino(object: QuotaFailure_ViolationAmino): QuotaFailure_Violation {
    const message = createBaseQuotaFailure_Violation();
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = object.subject;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: QuotaFailure_Violation): QuotaFailure_ViolationAmino {
    const obj: any = {};
    obj.subject = message.subject === "" ? undefined : message.subject;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: QuotaFailure_ViolationAminoMsg): QuotaFailure_Violation {
    return QuotaFailure_Violation.fromAmino(object.value);
  },
  fromProtoMsg(message: QuotaFailure_ViolationProtoMsg): QuotaFailure_Violation {
    return QuotaFailure_Violation.decode(message.value);
  },
  toProto(message: QuotaFailure_Violation): Uint8Array {
    return QuotaFailure_Violation.encode(message).finish();
  },
  toProtoMsg(message: QuotaFailure_Violation): QuotaFailure_ViolationProtoMsg {
    return {
      typeUrl: "/google.rpc.Violation",
      value: QuotaFailure_Violation.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseErrorInfo_MetadataEntry(): ErrorInfo_MetadataEntry {
  return {
    key: "",
    value: ""
  };
}
export const ErrorInfo_MetadataEntry = {
  encode(message: ErrorInfo_MetadataEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ErrorInfo_MetadataEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorInfo_MetadataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ErrorInfo_MetadataEntry {
    const obj = createBaseErrorInfo_MetadataEntry();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = String(object.value);
    return obj;
  },
  toJSON(message: ErrorInfo_MetadataEntry): JsonSafe<ErrorInfo_MetadataEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<ErrorInfo_MetadataEntry>): ErrorInfo_MetadataEntry {
    const message = createBaseErrorInfo_MetadataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: ErrorInfo_MetadataEntrySDKType): ErrorInfo_MetadataEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  fromSDKJSON(object: any): ErrorInfo_MetadataEntrySDKType {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toSDK(message: ErrorInfo_MetadataEntry): ErrorInfo_MetadataEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: ErrorInfo_MetadataEntryAmino): ErrorInfo_MetadataEntry {
    const message = createBaseErrorInfo_MetadataEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: ErrorInfo_MetadataEntry): ErrorInfo_MetadataEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: ErrorInfo_MetadataEntryAminoMsg): ErrorInfo_MetadataEntry {
    return ErrorInfo_MetadataEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: ErrorInfo_MetadataEntryProtoMsg): ErrorInfo_MetadataEntry {
    return ErrorInfo_MetadataEntry.decode(message.value);
  },
  toProto(message: ErrorInfo_MetadataEntry): Uint8Array {
    return ErrorInfo_MetadataEntry.encode(message).finish();
  },
  registerTypeUrl() {}
};
function createBaseErrorInfo(): ErrorInfo {
  return {
    reason: "",
    domain: "",
    metadata: {}
  };
}
export const ErrorInfo = {
  typeUrl: "/google.rpc.ErrorInfo",
  is(o: any): o is ErrorInfo {
    return o && (o.$typeUrl === ErrorInfo.typeUrl || typeof o.reason === "string" && typeof o.domain === "string" && isSet(o.metadata));
  },
  isSDK(o: any): o is ErrorInfoSDKType {
    return o && (o.$typeUrl === ErrorInfo.typeUrl || typeof o.reason === "string" && typeof o.domain === "string" && isSet(o.metadata));
  },
  isAmino(o: any): o is ErrorInfoAmino {
    return o && (o.$typeUrl === ErrorInfo.typeUrl || typeof o.reason === "string" && typeof o.domain === "string" && isSet(o.metadata));
  },
  encode(message: ErrorInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.reason !== undefined) {
      writer.uint32(10).string(message.reason);
    }
    if (message.domain !== undefined) {
      writer.uint32(18).string(message.domain);
    }
    Object.entries(message.metadata).forEach(([key, value]) => {
      ErrorInfo_MetadataEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ErrorInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reason = reader.string();
          break;
        case 2:
          message.domain = reader.string();
          break;
        case 3:
          const entry3 = ErrorInfo_MetadataEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.metadata[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ErrorInfo {
    const obj = createBaseErrorInfo();
    if (isSet(object.reason)) obj.reason = String(object.reason);
    if (isSet(object.domain)) obj.domain = String(object.domain);
    if (isObject(object.metadata)) obj.metadata = Object.entries(object.metadata).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return obj;
  },
  toJSON(message: ErrorInfo): JsonSafe<ErrorInfo> {
    const obj: any = {};
    message.reason !== undefined && (obj.reason = message.reason);
    message.domain !== undefined && (obj.domain = message.domain);
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ErrorInfo>): ErrorInfo {
    const message = createBaseErrorInfo();
    message.reason = object.reason ?? "";
    message.domain = object.domain ?? "";
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromSDK(object: ErrorInfoSDKType): ErrorInfo {
    return {
      reason: object?.reason,
      domain: object?.domain,
      metadata: isObject(object.metadata) ? Object.entries(object.metadata).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  fromSDKJSON(object: any): ErrorInfoSDKType {
    return {
      reason: isSet(object.reason) ? String(object.reason) : "",
      domain: isSet(object.domain) ? String(object.domain) : "",
      metadata: isObject(object.metadata) ? Object.entries(object.metadata).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },
  toSDK(message: ErrorInfo): ErrorInfoSDKType {
    const obj: any = {};
    obj.reason = message.reason;
    obj.domain = message.domain;
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },
  fromAmino(object: ErrorInfoAmino): ErrorInfo {
    const message = createBaseErrorInfo();
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason;
    }
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    }
    message.metadata = Object.entries(object.metadata ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: ErrorInfo): ErrorInfoAmino {
    const obj: any = {};
    obj.reason = message.reason === "" ? undefined : message.reason;
    obj.domain = message.domain === "" ? undefined : message.domain;
    obj.metadata = {};
    if (message.metadata) {
      Object.entries(message.metadata).forEach(([k, v]) => {
        obj.metadata[k] = v;
      });
    }
    return obj;
  },
  fromAminoMsg(object: ErrorInfoAminoMsg): ErrorInfo {
    return ErrorInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ErrorInfoProtoMsg): ErrorInfo {
    return ErrorInfo.decode(message.value);
  },
  toProto(message: ErrorInfo): Uint8Array {
    return ErrorInfo.encode(message).finish();
  },
  toProtoMsg(message: ErrorInfo): ErrorInfoProtoMsg {
    return {
      typeUrl: "/google.rpc.ErrorInfo",
      value: ErrorInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePreconditionFailure(): PreconditionFailure {
  return {
    violations: []
  };
}
export const PreconditionFailure = {
  typeUrl: "/google.rpc.PreconditionFailure",
  is(o: any): o is PreconditionFailure {
    return o && (o.$typeUrl === PreconditionFailure.typeUrl || Array.isArray(o.violations) && (!o.violations.length || PreconditionFailure_Violation.is(o.violations[0])));
  },
  isSDK(o: any): o is PreconditionFailureSDKType {
    return o && (o.$typeUrl === PreconditionFailure.typeUrl || Array.isArray(o.violations) && (!o.violations.length || PreconditionFailure_Violation.isSDK(o.violations[0])));
  },
  isAmino(o: any): o is PreconditionFailureAmino {
    return o && (o.$typeUrl === PreconditionFailure.typeUrl || Array.isArray(o.violations) && (!o.violations.length || PreconditionFailure_Violation.isAmino(o.violations[0])));
  },
  encode(message: PreconditionFailure, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.violations) {
      PreconditionFailure_Violation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PreconditionFailure {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreconditionFailure();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.violations.push(PreconditionFailure_Violation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PreconditionFailure {
    const obj = createBasePreconditionFailure();
    if (Array.isArray(object?.violations)) obj.violations = object.violations.map((e: any) => PreconditionFailure_Violation.fromJSON(e));
    return obj;
  },
  toJSON(message: PreconditionFailure): JsonSafe<PreconditionFailure> {
    const obj: any = {};
    if (message.violations) {
      obj.violations = message.violations.map(e => e ? PreconditionFailure_Violation.toJSON(e) : undefined);
    } else {
      obj.violations = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<PreconditionFailure>): PreconditionFailure {
    const message = createBasePreconditionFailure();
    message.violations = object.violations?.map(e => PreconditionFailure_Violation.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: PreconditionFailureSDKType): PreconditionFailure {
    return {
      violations: Array.isArray(object?.violations) ? object.violations.map((e: any) => PreconditionFailure_Violation.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): PreconditionFailureSDKType {
    return {
      violations: Array.isArray(object?.violations) ? object.violations.map((e: any) => PreconditionFailure_Violation.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: PreconditionFailure): PreconditionFailureSDKType {
    const obj: any = {};
    if (message.violations) {
      obj.violations = message.violations.map(e => e ? PreconditionFailure_Violation.toSDK(e) : undefined);
    } else {
      obj.violations = [];
    }
    return obj;
  },
  fromAmino(object: PreconditionFailureAmino): PreconditionFailure {
    const message = createBasePreconditionFailure();
    message.violations = object.violations?.map(e => PreconditionFailure_Violation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PreconditionFailure): PreconditionFailureAmino {
    const obj: any = {};
    if (message.violations) {
      obj.violations = message.violations.map(e => e ? PreconditionFailure_Violation.toAmino(e) : undefined);
    } else {
      obj.violations = message.violations;
    }
    return obj;
  },
  fromAminoMsg(object: PreconditionFailureAminoMsg): PreconditionFailure {
    return PreconditionFailure.fromAmino(object.value);
  },
  fromProtoMsg(message: PreconditionFailureProtoMsg): PreconditionFailure {
    return PreconditionFailure.decode(message.value);
  },
  toProto(message: PreconditionFailure): Uint8Array {
    return PreconditionFailure.encode(message).finish();
  },
  toProtoMsg(message: PreconditionFailure): PreconditionFailureProtoMsg {
    return {
      typeUrl: "/google.rpc.PreconditionFailure",
      value: PreconditionFailure.encode(message).finish()
    };
  },
  registerTypeUrl() {
    PreconditionFailure_Violation.registerTypeUrl();
  }
};
function createBasePreconditionFailure_Violation(): PreconditionFailure_Violation {
  return {
    type: "",
    subject: "",
    description: ""
  };
}
export const PreconditionFailure_Violation = {
  typeUrl: "/google.rpc.Violation",
  is(o: any): o is PreconditionFailure_Violation {
    return o && (o.$typeUrl === PreconditionFailure_Violation.typeUrl || typeof o.type === "string" && typeof o.subject === "string" && typeof o.description === "string");
  },
  isSDK(o: any): o is PreconditionFailure_ViolationSDKType {
    return o && (o.$typeUrl === PreconditionFailure_Violation.typeUrl || typeof o.type === "string" && typeof o.subject === "string" && typeof o.description === "string");
  },
  isAmino(o: any): o is PreconditionFailure_ViolationAmino {
    return o && (o.$typeUrl === PreconditionFailure_Violation.typeUrl || typeof o.type === "string" && typeof o.subject === "string" && typeof o.description === "string");
  },
  encode(message: PreconditionFailure_Violation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== undefined) {
      writer.uint32(10).string(message.type);
    }
    if (message.subject !== undefined) {
      writer.uint32(18).string(message.subject);
    }
    if (message.description !== undefined) {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PreconditionFailure_Violation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreconditionFailure_Violation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.subject = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PreconditionFailure_Violation {
    const obj = createBasePreconditionFailure_Violation();
    if (isSet(object.type)) obj.type = String(object.type);
    if (isSet(object.subject)) obj.subject = String(object.subject);
    if (isSet(object.description)) obj.description = String(object.description);
    return obj;
  },
  toJSON(message: PreconditionFailure_Violation): JsonSafe<PreconditionFailure_Violation> {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.subject !== undefined && (obj.subject = message.subject);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
  fromPartial(object: DeepPartial<PreconditionFailure_Violation>): PreconditionFailure_Violation {
    const message = createBasePreconditionFailure_Violation();
    message.type = object.type ?? "";
    message.subject = object.subject ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromSDK(object: PreconditionFailure_ViolationSDKType): PreconditionFailure_Violation {
    return {
      type: object?.type,
      subject: object?.subject,
      description: object?.description
    };
  },
  fromSDKJSON(object: any): PreconditionFailure_ViolationSDKType {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      subject: isSet(object.subject) ? String(object.subject) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toSDK(message: PreconditionFailure_Violation): PreconditionFailure_ViolationSDKType {
    const obj: any = {};
    obj.type = message.type;
    obj.subject = message.subject;
    obj.description = message.description;
    return obj;
  },
  fromAmino(object: PreconditionFailure_ViolationAmino): PreconditionFailure_Violation {
    const message = createBasePreconditionFailure_Violation();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = object.subject;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: PreconditionFailure_Violation): PreconditionFailure_ViolationAmino {
    const obj: any = {};
    obj.type = message.type === "" ? undefined : message.type;
    obj.subject = message.subject === "" ? undefined : message.subject;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: PreconditionFailure_ViolationAminoMsg): PreconditionFailure_Violation {
    return PreconditionFailure_Violation.fromAmino(object.value);
  },
  fromProtoMsg(message: PreconditionFailure_ViolationProtoMsg): PreconditionFailure_Violation {
    return PreconditionFailure_Violation.decode(message.value);
  },
  toProto(message: PreconditionFailure_Violation): Uint8Array {
    return PreconditionFailure_Violation.encode(message).finish();
  },
  toProtoMsg(message: PreconditionFailure_Violation): PreconditionFailure_ViolationProtoMsg {
    return {
      typeUrl: "/google.rpc.Violation",
      value: PreconditionFailure_Violation.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseBadRequest(): BadRequest {
  return {
    fieldViolations: []
  };
}
export const BadRequest = {
  typeUrl: "/google.rpc.BadRequest",
  is(o: any): o is BadRequest {
    return o && (o.$typeUrl === BadRequest.typeUrl || Array.isArray(o.fieldViolations) && (!o.fieldViolations.length || BadRequest_FieldViolation.is(o.fieldViolations[0])));
  },
  isSDK(o: any): o is BadRequestSDKType {
    return o && (o.$typeUrl === BadRequest.typeUrl || Array.isArray(o.field_violations) && (!o.field_violations.length || BadRequest_FieldViolation.isSDK(o.field_violations[0])));
  },
  isAmino(o: any): o is BadRequestAmino {
    return o && (o.$typeUrl === BadRequest.typeUrl || Array.isArray(o.field_violations) && (!o.field_violations.length || BadRequest_FieldViolation.isAmino(o.field_violations[0])));
  },
  encode(message: BadRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.fieldViolations) {
      BadRequest_FieldViolation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BadRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBadRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fieldViolations.push(BadRequest_FieldViolation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BadRequest {
    const obj = createBaseBadRequest();
    if (Array.isArray(object?.fieldViolations)) obj.fieldViolations = object.fieldViolations.map((e: any) => BadRequest_FieldViolation.fromJSON(e));
    return obj;
  },
  toJSON(message: BadRequest): JsonSafe<BadRequest> {
    const obj: any = {};
    if (message.fieldViolations) {
      obj.fieldViolations = message.fieldViolations.map(e => e ? BadRequest_FieldViolation.toJSON(e) : undefined);
    } else {
      obj.fieldViolations = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<BadRequest>): BadRequest {
    const message = createBaseBadRequest();
    message.fieldViolations = object.fieldViolations?.map(e => BadRequest_FieldViolation.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: BadRequestSDKType): BadRequest {
    return {
      fieldViolations: Array.isArray(object?.field_violations) ? object.field_violations.map((e: any) => BadRequest_FieldViolation.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): BadRequestSDKType {
    return {
      field_violations: Array.isArray(object?.field_violations) ? object.field_violations.map((e: any) => BadRequest_FieldViolation.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: BadRequest): BadRequestSDKType {
    const obj: any = {};
    if (message.fieldViolations) {
      obj.field_violations = message.fieldViolations.map(e => e ? BadRequest_FieldViolation.toSDK(e) : undefined);
    } else {
      obj.field_violations = [];
    }
    return obj;
  },
  fromAmino(object: BadRequestAmino): BadRequest {
    const message = createBaseBadRequest();
    message.fieldViolations = object.field_violations?.map(e => BadRequest_FieldViolation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BadRequest): BadRequestAmino {
    const obj: any = {};
    if (message.fieldViolations) {
      obj.field_violations = message.fieldViolations.map(e => e ? BadRequest_FieldViolation.toAmino(e) : undefined);
    } else {
      obj.field_violations = message.fieldViolations;
    }
    return obj;
  },
  fromAminoMsg(object: BadRequestAminoMsg): BadRequest {
    return BadRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: BadRequestProtoMsg): BadRequest {
    return BadRequest.decode(message.value);
  },
  toProto(message: BadRequest): Uint8Array {
    return BadRequest.encode(message).finish();
  },
  toProtoMsg(message: BadRequest): BadRequestProtoMsg {
    return {
      typeUrl: "/google.rpc.BadRequest",
      value: BadRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    BadRequest_FieldViolation.registerTypeUrl();
  }
};
function createBaseBadRequest_FieldViolation(): BadRequest_FieldViolation {
  return {
    field: "",
    description: ""
  };
}
export const BadRequest_FieldViolation = {
  typeUrl: "/google.rpc.FieldViolation",
  is(o: any): o is BadRequest_FieldViolation {
    return o && (o.$typeUrl === BadRequest_FieldViolation.typeUrl || typeof o.field === "string" && typeof o.description === "string");
  },
  isSDK(o: any): o is BadRequest_FieldViolationSDKType {
    return o && (o.$typeUrl === BadRequest_FieldViolation.typeUrl || typeof o.field === "string" && typeof o.description === "string");
  },
  isAmino(o: any): o is BadRequest_FieldViolationAmino {
    return o && (o.$typeUrl === BadRequest_FieldViolation.typeUrl || typeof o.field === "string" && typeof o.description === "string");
  },
  encode(message: BadRequest_FieldViolation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.field !== undefined) {
      writer.uint32(10).string(message.field);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BadRequest_FieldViolation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBadRequest_FieldViolation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BadRequest_FieldViolation {
    const obj = createBaseBadRequest_FieldViolation();
    if (isSet(object.field)) obj.field = String(object.field);
    if (isSet(object.description)) obj.description = String(object.description);
    return obj;
  },
  toJSON(message: BadRequest_FieldViolation): JsonSafe<BadRequest_FieldViolation> {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
  fromPartial(object: DeepPartial<BadRequest_FieldViolation>): BadRequest_FieldViolation {
    const message = createBaseBadRequest_FieldViolation();
    message.field = object.field ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromSDK(object: BadRequest_FieldViolationSDKType): BadRequest_FieldViolation {
    return {
      field: object?.field,
      description: object?.description
    };
  },
  fromSDKJSON(object: any): BadRequest_FieldViolationSDKType {
    return {
      field: isSet(object.field) ? String(object.field) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toSDK(message: BadRequest_FieldViolation): BadRequest_FieldViolationSDKType {
    const obj: any = {};
    obj.field = message.field;
    obj.description = message.description;
    return obj;
  },
  fromAmino(object: BadRequest_FieldViolationAmino): BadRequest_FieldViolation {
    const message = createBaseBadRequest_FieldViolation();
    if (object.field !== undefined && object.field !== null) {
      message.field = object.field;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: BadRequest_FieldViolation): BadRequest_FieldViolationAmino {
    const obj: any = {};
    obj.field = message.field === "" ? undefined : message.field;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: BadRequest_FieldViolationAminoMsg): BadRequest_FieldViolation {
    return BadRequest_FieldViolation.fromAmino(object.value);
  },
  fromProtoMsg(message: BadRequest_FieldViolationProtoMsg): BadRequest_FieldViolation {
    return BadRequest_FieldViolation.decode(message.value);
  },
  toProto(message: BadRequest_FieldViolation): Uint8Array {
    return BadRequest_FieldViolation.encode(message).finish();
  },
  toProtoMsg(message: BadRequest_FieldViolation): BadRequest_FieldViolationProtoMsg {
    return {
      typeUrl: "/google.rpc.FieldViolation",
      value: BadRequest_FieldViolation.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseRequestInfo(): RequestInfo {
  return {
    requestId: "",
    servingData: ""
  };
}
export const RequestInfo = {
  typeUrl: "/google.rpc.RequestInfo",
  is(o: any): o is RequestInfo {
    return o && (o.$typeUrl === RequestInfo.typeUrl || typeof o.requestId === "string" && typeof o.servingData === "string");
  },
  isSDK(o: any): o is RequestInfoSDKType {
    return o && (o.$typeUrl === RequestInfo.typeUrl || typeof o.request_id === "string" && typeof o.serving_data === "string");
  },
  isAmino(o: any): o is RequestInfoAmino {
    return o && (o.$typeUrl === RequestInfo.typeUrl || typeof o.request_id === "string" && typeof o.serving_data === "string");
  },
  encode(message: RequestInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestId !== undefined) {
      writer.uint32(10).string(message.requestId);
    }
    if (message.servingData !== undefined) {
      writer.uint32(18).string(message.servingData);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RequestInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.string();
          break;
        case 2:
          message.servingData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RequestInfo {
    const obj = createBaseRequestInfo();
    if (isSet(object.requestId)) obj.requestId = String(object.requestId);
    if (isSet(object.servingData)) obj.servingData = String(object.servingData);
    return obj;
  },
  toJSON(message: RequestInfo): JsonSafe<RequestInfo> {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = message.requestId);
    message.servingData !== undefined && (obj.servingData = message.servingData);
    return obj;
  },
  fromPartial(object: DeepPartial<RequestInfo>): RequestInfo {
    const message = createBaseRequestInfo();
    message.requestId = object.requestId ?? "";
    message.servingData = object.servingData ?? "";
    return message;
  },
  fromSDK(object: RequestInfoSDKType): RequestInfo {
    return {
      requestId: object?.request_id,
      servingData: object?.serving_data
    };
  },
  fromSDKJSON(object: any): RequestInfoSDKType {
    return {
      request_id: isSet(object.request_id) ? String(object.request_id) : "",
      serving_data: isSet(object.serving_data) ? String(object.serving_data) : ""
    };
  },
  toSDK(message: RequestInfo): RequestInfoSDKType {
    const obj: any = {};
    obj.request_id = message.requestId;
    obj.serving_data = message.servingData;
    return obj;
  },
  fromAmino(object: RequestInfoAmino): RequestInfo {
    const message = createBaseRequestInfo();
    if (object.request_id !== undefined && object.request_id !== null) {
      message.requestId = object.request_id;
    }
    if (object.serving_data !== undefined && object.serving_data !== null) {
      message.servingData = object.serving_data;
    }
    return message;
  },
  toAmino(message: RequestInfo): RequestInfoAmino {
    const obj: any = {};
    obj.request_id = message.requestId === "" ? undefined : message.requestId;
    obj.serving_data = message.servingData === "" ? undefined : message.servingData;
    return obj;
  },
  fromAminoMsg(object: RequestInfoAminoMsg): RequestInfo {
    return RequestInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: RequestInfoProtoMsg): RequestInfo {
    return RequestInfo.decode(message.value);
  },
  toProto(message: RequestInfo): Uint8Array {
    return RequestInfo.encode(message).finish();
  },
  toProtoMsg(message: RequestInfo): RequestInfoProtoMsg {
    return {
      typeUrl: "/google.rpc.RequestInfo",
      value: RequestInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseResourceInfo(): ResourceInfo {
  return {
    resourceType: "",
    resourceName: "",
    owner: "",
    description: ""
  };
}
export const ResourceInfo = {
  typeUrl: "/google.rpc.ResourceInfo",
  is(o: any): o is ResourceInfo {
    return o && (o.$typeUrl === ResourceInfo.typeUrl || typeof o.resourceType === "string" && typeof o.resourceName === "string" && typeof o.owner === "string" && typeof o.description === "string");
  },
  isSDK(o: any): o is ResourceInfoSDKType {
    return o && (o.$typeUrl === ResourceInfo.typeUrl || typeof o.resource_type === "string" && typeof o.resource_name === "string" && typeof o.owner === "string" && typeof o.description === "string");
  },
  isAmino(o: any): o is ResourceInfoAmino {
    return o && (o.$typeUrl === ResourceInfo.typeUrl || typeof o.resource_type === "string" && typeof o.resource_name === "string" && typeof o.owner === "string" && typeof o.description === "string");
  },
  encode(message: ResourceInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resourceType !== undefined) {
      writer.uint32(10).string(message.resourceType);
    }
    if (message.resourceName !== undefined) {
      writer.uint32(18).string(message.resourceName);
    }
    if (message.owner !== undefined) {
      writer.uint32(26).string(message.owner);
    }
    if (message.description !== undefined) {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResourceInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceType = reader.string();
          break;
        case 2:
          message.resourceName = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ResourceInfo {
    const obj = createBaseResourceInfo();
    if (isSet(object.resourceType)) obj.resourceType = String(object.resourceType);
    if (isSet(object.resourceName)) obj.resourceName = String(object.resourceName);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.description)) obj.description = String(object.description);
    return obj;
  },
  toJSON(message: ResourceInfo): JsonSafe<ResourceInfo> {
    const obj: any = {};
    message.resourceType !== undefined && (obj.resourceType = message.resourceType);
    message.resourceName !== undefined && (obj.resourceName = message.resourceName);
    message.owner !== undefined && (obj.owner = message.owner);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
  fromPartial(object: DeepPartial<ResourceInfo>): ResourceInfo {
    const message = createBaseResourceInfo();
    message.resourceType = object.resourceType ?? "";
    message.resourceName = object.resourceName ?? "";
    message.owner = object.owner ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromSDK(object: ResourceInfoSDKType): ResourceInfo {
    return {
      resourceType: object?.resource_type,
      resourceName: object?.resource_name,
      owner: object?.owner,
      description: object?.description
    };
  },
  fromSDKJSON(object: any): ResourceInfoSDKType {
    return {
      resource_type: isSet(object.resource_type) ? String(object.resource_type) : "",
      resource_name: isSet(object.resource_name) ? String(object.resource_name) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toSDK(message: ResourceInfo): ResourceInfoSDKType {
    const obj: any = {};
    obj.resource_type = message.resourceType;
    obj.resource_name = message.resourceName;
    obj.owner = message.owner;
    obj.description = message.description;
    return obj;
  },
  fromAmino(object: ResourceInfoAmino): ResourceInfo {
    const message = createBaseResourceInfo();
    if (object.resource_type !== undefined && object.resource_type !== null) {
      message.resourceType = object.resource_type;
    }
    if (object.resource_name !== undefined && object.resource_name !== null) {
      message.resourceName = object.resource_name;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: ResourceInfo): ResourceInfoAmino {
    const obj: any = {};
    obj.resource_type = message.resourceType === "" ? undefined : message.resourceType;
    obj.resource_name = message.resourceName === "" ? undefined : message.resourceName;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: ResourceInfoAminoMsg): ResourceInfo {
    return ResourceInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourceInfoProtoMsg): ResourceInfo {
    return ResourceInfo.decode(message.value);
  },
  toProto(message: ResourceInfo): Uint8Array {
    return ResourceInfo.encode(message).finish();
  },
  toProtoMsg(message: ResourceInfo): ResourceInfoProtoMsg {
    return {
      typeUrl: "/google.rpc.ResourceInfo",
      value: ResourceInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseHelp(): Help {
  return {
    links: []
  };
}
export const Help = {
  typeUrl: "/google.rpc.Help",
  is(o: any): o is Help {
    return o && (o.$typeUrl === Help.typeUrl || Array.isArray(o.links) && (!o.links.length || Help_Link.is(o.links[0])));
  },
  isSDK(o: any): o is HelpSDKType {
    return o && (o.$typeUrl === Help.typeUrl || Array.isArray(o.links) && (!o.links.length || Help_Link.isSDK(o.links[0])));
  },
  isAmino(o: any): o is HelpAmino {
    return o && (o.$typeUrl === Help.typeUrl || Array.isArray(o.links) && (!o.links.length || Help_Link.isAmino(o.links[0])));
  },
  encode(message: Help, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.links) {
      Help_Link.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Help {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHelp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.links.push(Help_Link.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Help {
    const obj = createBaseHelp();
    if (Array.isArray(object?.links)) obj.links = object.links.map((e: any) => Help_Link.fromJSON(e));
    return obj;
  },
  toJSON(message: Help): JsonSafe<Help> {
    const obj: any = {};
    if (message.links) {
      obj.links = message.links.map(e => e ? Help_Link.toJSON(e) : undefined);
    } else {
      obj.links = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Help>): Help {
    const message = createBaseHelp();
    message.links = object.links?.map(e => Help_Link.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: HelpSDKType): Help {
    return {
      links: Array.isArray(object?.links) ? object.links.map((e: any) => Help_Link.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): HelpSDKType {
    return {
      links: Array.isArray(object?.links) ? object.links.map((e: any) => Help_Link.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Help): HelpSDKType {
    const obj: any = {};
    if (message.links) {
      obj.links = message.links.map(e => e ? Help_Link.toSDK(e) : undefined);
    } else {
      obj.links = [];
    }
    return obj;
  },
  fromAmino(object: HelpAmino): Help {
    const message = createBaseHelp();
    message.links = object.links?.map(e => Help_Link.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Help): HelpAmino {
    const obj: any = {};
    if (message.links) {
      obj.links = message.links.map(e => e ? Help_Link.toAmino(e) : undefined);
    } else {
      obj.links = message.links;
    }
    return obj;
  },
  fromAminoMsg(object: HelpAminoMsg): Help {
    return Help.fromAmino(object.value);
  },
  fromProtoMsg(message: HelpProtoMsg): Help {
    return Help.decode(message.value);
  },
  toProto(message: Help): Uint8Array {
    return Help.encode(message).finish();
  },
  toProtoMsg(message: Help): HelpProtoMsg {
    return {
      typeUrl: "/google.rpc.Help",
      value: Help.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Help_Link.registerTypeUrl();
  }
};
function createBaseHelp_Link(): Help_Link {
  return {
    description: "",
    url: ""
  };
}
export const Help_Link = {
  typeUrl: "/google.rpc.Link",
  is(o: any): o is Help_Link {
    return o && (o.$typeUrl === Help_Link.typeUrl || typeof o.description === "string" && typeof o.url === "string");
  },
  isSDK(o: any): o is Help_LinkSDKType {
    return o && (o.$typeUrl === Help_Link.typeUrl || typeof o.description === "string" && typeof o.url === "string");
  },
  isAmino(o: any): o is Help_LinkAmino {
    return o && (o.$typeUrl === Help_Link.typeUrl || typeof o.description === "string" && typeof o.url === "string");
  },
  encode(message: Help_Link, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.description !== undefined) {
      writer.uint32(10).string(message.description);
    }
    if (message.url !== undefined) {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Help_Link {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHelp_Link();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          message.url = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Help_Link {
    const obj = createBaseHelp_Link();
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.url)) obj.url = String(object.url);
    return obj;
  },
  toJSON(message: Help_Link): JsonSafe<Help_Link> {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },
  fromPartial(object: DeepPartial<Help_Link>): Help_Link {
    const message = createBaseHelp_Link();
    message.description = object.description ?? "";
    message.url = object.url ?? "";
    return message;
  },
  fromSDK(object: Help_LinkSDKType): Help_Link {
    return {
      description: object?.description,
      url: object?.url
    };
  },
  fromSDKJSON(object: any): Help_LinkSDKType {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      url: isSet(object.url) ? String(object.url) : ""
    };
  },
  toSDK(message: Help_Link): Help_LinkSDKType {
    const obj: any = {};
    obj.description = message.description;
    obj.url = message.url;
    return obj;
  },
  fromAmino(object: Help_LinkAmino): Help_Link {
    const message = createBaseHelp_Link();
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    return message;
  },
  toAmino(message: Help_Link): Help_LinkAmino {
    const obj: any = {};
    obj.description = message.description === "" ? undefined : message.description;
    obj.url = message.url === "" ? undefined : message.url;
    return obj;
  },
  fromAminoMsg(object: Help_LinkAminoMsg): Help_Link {
    return Help_Link.fromAmino(object.value);
  },
  fromProtoMsg(message: Help_LinkProtoMsg): Help_Link {
    return Help_Link.decode(message.value);
  },
  toProto(message: Help_Link): Uint8Array {
    return Help_Link.encode(message).finish();
  },
  toProtoMsg(message: Help_Link): Help_LinkProtoMsg {
    return {
      typeUrl: "/google.rpc.Link",
      value: Help_Link.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseLocalizedMessage(): LocalizedMessage {
  return {
    locale: "",
    message: ""
  };
}
export const LocalizedMessage = {
  typeUrl: "/google.rpc.LocalizedMessage",
  is(o: any): o is LocalizedMessage {
    return o && (o.$typeUrl === LocalizedMessage.typeUrl || typeof o.locale === "string" && typeof o.message === "string");
  },
  isSDK(o: any): o is LocalizedMessageSDKType {
    return o && (o.$typeUrl === LocalizedMessage.typeUrl || typeof o.locale === "string" && typeof o.message === "string");
  },
  isAmino(o: any): o is LocalizedMessageAmino {
    return o && (o.$typeUrl === LocalizedMessage.typeUrl || typeof o.locale === "string" && typeof o.message === "string");
  },
  encode(message: LocalizedMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.locale !== undefined) {
      writer.uint32(10).string(message.locale);
    }
    if (message.message !== undefined) {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LocalizedMessage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalizedMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locale = reader.string();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LocalizedMessage {
    const obj = createBaseLocalizedMessage();
    if (isSet(object.locale)) obj.locale = String(object.locale);
    if (isSet(object.message)) obj.message = String(object.message);
    return obj;
  },
  toJSON(message: LocalizedMessage): JsonSafe<LocalizedMessage> {
    const obj: any = {};
    message.locale !== undefined && (obj.locale = message.locale);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },
  fromPartial(object: DeepPartial<LocalizedMessage>): LocalizedMessage {
    const message = createBaseLocalizedMessage();
    message.locale = object.locale ?? "";
    message.message = object.message ?? "";
    return message;
  },
  fromSDK(object: LocalizedMessageSDKType): LocalizedMessage {
    return {
      locale: object?.locale,
      message: object?.message
    };
  },
  fromSDKJSON(object: any): LocalizedMessageSDKType {
    return {
      locale: isSet(object.locale) ? String(object.locale) : "",
      message: isSet(object.message) ? String(object.message) : ""
    };
  },
  toSDK(message: LocalizedMessage): LocalizedMessageSDKType {
    const obj: any = {};
    obj.locale = message.locale;
    obj.message = message.message;
    return obj;
  },
  fromAmino(object: LocalizedMessageAmino): LocalizedMessage {
    const message = createBaseLocalizedMessage();
    if (object.locale !== undefined && object.locale !== null) {
      message.locale = object.locale;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message: LocalizedMessage): LocalizedMessageAmino {
    const obj: any = {};
    obj.locale = message.locale === "" ? undefined : message.locale;
    obj.message = message.message === "" ? undefined : message.message;
    return obj;
  },
  fromAminoMsg(object: LocalizedMessageAminoMsg): LocalizedMessage {
    return LocalizedMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: LocalizedMessageProtoMsg): LocalizedMessage {
    return LocalizedMessage.decode(message.value);
  },
  toProto(message: LocalizedMessage): Uint8Array {
    return LocalizedMessage.encode(message).finish();
  },
  toProtoMsg(message: LocalizedMessage): LocalizedMessageProtoMsg {
    return {
      typeUrl: "/google.rpc.LocalizedMessage",
      value: LocalizedMessage.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};