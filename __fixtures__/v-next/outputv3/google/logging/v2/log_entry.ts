import { MonitoredResource, MonitoredResourceAmino, MonitoredResourceSDKType } from "../../api/monitored_resource";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../protobuf/any";
import { Struct, StructAmino, StructSDKType } from "../../protobuf/struct";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../protobuf/timestamp";
import { LogSeverity, LogSeveritySDKType, logSeverityFromJSON, logSeverityToJSON } from "../type/log_severity";
import { HttpRequest, HttpRequestAmino, HttpRequestSDKType } from "../type/http_request";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, isObject } from "../../../helpers";
export const protobufPackage = "google.logging.v2";
export interface LogEntry_LabelsEntry {
  key: string;
  value: string;
}
export interface LogEntry_LabelsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface LogEntry_LabelsEntryAmino {
  key?: string;
  value?: string;
}
export interface LogEntry_LabelsEntrySDKType {
  key: string;
  value: string;
}
/** An individual entry in a log. */
export interface LogEntry {
  /**
   * Required. The resource name of the log to which this log entry belongs:
   * 
   *     "projects/[PROJECT_ID]/logs/[LOG_ID]"
   *     "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
   *     "folders/[FOLDER_ID]/logs/[LOG_ID]"
   * 
   * A project number may be used in place of PROJECT_ID. The project number is
   * translated to its corresponding PROJECT_ID internally and the `log_name`
   * field will contain PROJECT_ID in queries and exports.
   * 
   * `[LOG_ID]` must be URL-encoded within `log_name`. Example:
   * `"organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"`.
   * 
   * `[LOG_ID]` must be less than 512 characters long and can only include the
   * following characters: upper and lower case alphanumeric characters,
   * forward-slash, underscore, hyphen, and period.
   * 
   * For backward compatibility, if `log_name` begins with a forward-slash, such
   * as `/projects/...`, then the log entry is ingested as usual, but the
   * forward-slash is removed. Listing the log entry will not show the leading
   * slash and filtering for a log name with a leading slash will never return
   * any results.
   */
  logName: string;
  /**
   * Required. The monitored resource that produced this log entry.
   * 
   * Example: a log entry that reports a database error would be associated with
   * the monitored resource designating the particular database that reported
   * the error.
   */
  resource?: MonitoredResource;
  /**
   * The log entry payload, represented as a protocol buffer. Some Google
   * Cloud Platform services use this field for their log entry payloads.
   * 
   * The following protocol buffer types are supported; user-defined types
   * are not supported:
   * 
   *   "type.googleapis.com/google.cloud.audit.AuditLog"
   *   "type.googleapis.com/google.appengine.logging.v1.RequestLog"
   */
  protoPayload?: Any;
  /** The log entry payload, represented as a Unicode string (UTF-8). */
  textPayload?: string;
  /**
   * The log entry payload, represented as a structure that is
   * expressed as a JSON object.
   */
  jsonPayload?: Struct;
  /**
   * Optional. The time the event described by the log entry occurred. This time is used
   * to compute the log entry's age and to enforce the logs retention period.
   * If this field is omitted in a new log entry, then Logging assigns it the
   * current time. Timestamps have nanosecond accuracy, but trailing zeros in
   * the fractional seconds might be omitted when the timestamp is displayed.
   * 
   * Incoming log entries must have timestamps that don't exceed the
   * [logs retention
   * period](https://cloud.google.com/logging/quotas#logs_retention_periods) in
   * the past, and that don't exceed 24 hours in the future. Log entries outside
   * those time boundaries aren't ingested by Logging.
   */
  timestamp?: Date;
  /** Output only. The time the log entry was received by Logging. */
  receiveTimestamp?: Date;
  /** Optional. The severity of the log entry. The default value is `LogSeverity.DEFAULT`. */
  severity: LogSeverity;
  /**
   * Optional. A unique identifier for the log entry. If you provide a value, then
   * Logging considers other log entries in the same project, with the same
   * `timestamp`, and with the same `insert_id` to be duplicates which are
   * removed in a single query result. However, there are no guarantees of
   * de-duplication in the export of logs.
   * 
   * If the `insert_id` is omitted when writing a log entry, the Logging API
   * assigns its own unique identifier in this field.
   * 
   * In queries, the `insert_id` is also used to order log entries that have
   * the same `log_name` and `timestamp` values.
   */
  insertId: string;
  /**
   * Optional. Information about the HTTP request associated with this log entry, if
   * applicable.
   */
  httpRequest?: HttpRequest;
  /**
   * Optional. A map of key, value pairs that provides additional information about the
   * log entry. The labels can be user-defined or system-defined.
   * 
   * User-defined labels are arbitrary key, value pairs that you can use to
   * classify logs.
   * 
   * System-defined labels are defined by GCP services for platform logs.
   * They have two components - a service namespace component and the
   * attribute name. For example: `compute.googleapis.com/resource_name`.
   * 
   * Cloud Logging truncates label keys that exceed 512 B and label
   * values that exceed 64 KB upon their associated log entry being
   * written. The truncation is indicated by an ellipsis at the
   * end of the character string.
   */
  labels: {
    [key: string]: string;
  };
  /**
   * Optional. Information about an operation associated with the log entry, if
   * applicable.
   */
  operation?: LogEntryOperation;
  /**
   * Optional. Resource name of the trace associated with the log entry, if any. If it
   * contains a relative resource name, the name is assumed to be relative to
   * `//tracing.googleapis.com`. Example:
   * `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
   */
  trace: string;
  /**
   * Optional. The span ID within the trace associated with the log entry.
   * 
   * For Trace spans, this is the same format that the Trace API v2 uses: a
   * 16-character hexadecimal encoding of an 8-byte array, such as
   * `000000000000004a`.
   */
  spanId: string;
  /**
   * Optional. The sampling decision of the trace associated with the log entry.
   * 
   * True means that the trace resource name in the `trace` field was sampled
   * for storage in a trace backend. False means that the trace was not sampled
   * for storage when this log entry was written, or the sampling decision was
   * unknown at the time. A non-sampled `trace` value is still useful as a
   * request correlation identifier. The default is False.
   */
  traceSampled: boolean;
  /** Optional. Source code location information associated with the log entry, if any. */
  sourceLocation?: LogEntrySourceLocation;
  /**
   * Optional. Information indicating this LogEntry is part of a sequence of multiple log
   * entries split from a single LogEntry.
   */
  split?: LogSplit;
}
export interface LogEntryProtoMsg {
  typeUrl: "/google.logging.v2.LogEntry";
  value: Uint8Array;
}
/** An individual entry in a log. */
export interface LogEntryAmino {
  /**
   * Required. The resource name of the log to which this log entry belongs:
   * 
   *     "projects/[PROJECT_ID]/logs/[LOG_ID]"
   *     "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
   *     "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
   *     "folders/[FOLDER_ID]/logs/[LOG_ID]"
   * 
   * A project number may be used in place of PROJECT_ID. The project number is
   * translated to its corresponding PROJECT_ID internally and the `log_name`
   * field will contain PROJECT_ID in queries and exports.
   * 
   * `[LOG_ID]` must be URL-encoded within `log_name`. Example:
   * `"organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity"`.
   * 
   * `[LOG_ID]` must be less than 512 characters long and can only include the
   * following characters: upper and lower case alphanumeric characters,
   * forward-slash, underscore, hyphen, and period.
   * 
   * For backward compatibility, if `log_name` begins with a forward-slash, such
   * as `/projects/...`, then the log entry is ingested as usual, but the
   * forward-slash is removed. Listing the log entry will not show the leading
   * slash and filtering for a log name with a leading slash will never return
   * any results.
   */
  log_name?: string;
  /**
   * Required. The monitored resource that produced this log entry.
   * 
   * Example: a log entry that reports a database error would be associated with
   * the monitored resource designating the particular database that reported
   * the error.
   */
  resource?: MonitoredResourceAmino;
  /**
   * The log entry payload, represented as a protocol buffer. Some Google
   * Cloud Platform services use this field for their log entry payloads.
   * 
   * The following protocol buffer types are supported; user-defined types
   * are not supported:
   * 
   *   "type.googleapis.com/google.cloud.audit.AuditLog"
   *   "type.googleapis.com/google.appengine.logging.v1.RequestLog"
   */
  proto_payload?: AnyAmino;
  /** The log entry payload, represented as a Unicode string (UTF-8). */
  text_payload?: string;
  /**
   * The log entry payload, represented as a structure that is
   * expressed as a JSON object.
   */
  json_payload?: StructAmino;
  /**
   * Optional. The time the event described by the log entry occurred. This time is used
   * to compute the log entry's age and to enforce the logs retention period.
   * If this field is omitted in a new log entry, then Logging assigns it the
   * current time. Timestamps have nanosecond accuracy, but trailing zeros in
   * the fractional seconds might be omitted when the timestamp is displayed.
   * 
   * Incoming log entries must have timestamps that don't exceed the
   * [logs retention
   * period](https://cloud.google.com/logging/quotas#logs_retention_periods) in
   * the past, and that don't exceed 24 hours in the future. Log entries outside
   * those time boundaries aren't ingested by Logging.
   */
  timestamp?: string;
  /** Output only. The time the log entry was received by Logging. */
  receive_timestamp?: string;
  /** Optional. The severity of the log entry. The default value is `LogSeverity.DEFAULT`. */
  severity?: LogSeverity;
  /**
   * Optional. A unique identifier for the log entry. If you provide a value, then
   * Logging considers other log entries in the same project, with the same
   * `timestamp`, and with the same `insert_id` to be duplicates which are
   * removed in a single query result. However, there are no guarantees of
   * de-duplication in the export of logs.
   * 
   * If the `insert_id` is omitted when writing a log entry, the Logging API
   * assigns its own unique identifier in this field.
   * 
   * In queries, the `insert_id` is also used to order log entries that have
   * the same `log_name` and `timestamp` values.
   */
  insert_id?: string;
  /**
   * Optional. Information about the HTTP request associated with this log entry, if
   * applicable.
   */
  http_request?: HttpRequestAmino;
  /**
   * Optional. A map of key, value pairs that provides additional information about the
   * log entry. The labels can be user-defined or system-defined.
   * 
   * User-defined labels are arbitrary key, value pairs that you can use to
   * classify logs.
   * 
   * System-defined labels are defined by GCP services for platform logs.
   * They have two components - a service namespace component and the
   * attribute name. For example: `compute.googleapis.com/resource_name`.
   * 
   * Cloud Logging truncates label keys that exceed 512 B and label
   * values that exceed 64 KB upon their associated log entry being
   * written. The truncation is indicated by an ellipsis at the
   * end of the character string.
   */
  labels?: {
    [key: string]: string;
  };
  /**
   * Optional. Information about an operation associated with the log entry, if
   * applicable.
   */
  operation?: LogEntryOperationAmino;
  /**
   * Optional. Resource name of the trace associated with the log entry, if any. If it
   * contains a relative resource name, the name is assumed to be relative to
   * `//tracing.googleapis.com`. Example:
   * `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
   */
  trace?: string;
  /**
   * Optional. The span ID within the trace associated with the log entry.
   * 
   * For Trace spans, this is the same format that the Trace API v2 uses: a
   * 16-character hexadecimal encoding of an 8-byte array, such as
   * `000000000000004a`.
   */
  span_id?: string;
  /**
   * Optional. The sampling decision of the trace associated with the log entry.
   * 
   * True means that the trace resource name in the `trace` field was sampled
   * for storage in a trace backend. False means that the trace was not sampled
   * for storage when this log entry was written, or the sampling decision was
   * unknown at the time. A non-sampled `trace` value is still useful as a
   * request correlation identifier. The default is False.
   */
  trace_sampled?: boolean;
  /** Optional. Source code location information associated with the log entry, if any. */
  source_location?: LogEntrySourceLocationAmino;
  /**
   * Optional. Information indicating this LogEntry is part of a sequence of multiple log
   * entries split from a single LogEntry.
   */
  split?: LogSplitAmino;
}
/** An individual entry in a log. */
export interface LogEntrySDKType {
  log_name: string;
  resource?: MonitoredResourceSDKType;
  proto_payload?: AnySDKType;
  text_payload?: string;
  json_payload?: StructSDKType;
  timestamp?: Date;
  receive_timestamp?: Date;
  severity: LogSeverity;
  insert_id: string;
  http_request?: HttpRequestSDKType;
  labels: {
    [key: string]: string;
  };
  operation?: LogEntryOperationSDKType;
  trace: string;
  span_id: string;
  trace_sampled: boolean;
  source_location?: LogEntrySourceLocationSDKType;
  split?: LogSplitSDKType;
}
/**
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 */
export interface LogEntryOperation {
  /**
   * Optional. An arbitrary operation identifier. Log entries with the same
   * identifier are assumed to be part of the same operation.
   */
  id: string;
  /**
   * Optional. An arbitrary producer identifier. The combination of `id` and
   * `producer` must be globally unique. Examples for `producer`:
   * `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`.
   */
  producer: string;
  /** Optional. Set this to True if this is the first log entry in the operation. */
  first: boolean;
  /** Optional. Set this to True if this is the last log entry in the operation. */
  last: boolean;
}
export interface LogEntryOperationProtoMsg {
  typeUrl: "/google.logging.v2.LogEntryOperation";
  value: Uint8Array;
}
/**
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 */
export interface LogEntryOperationAmino {
  /**
   * Optional. An arbitrary operation identifier. Log entries with the same
   * identifier are assumed to be part of the same operation.
   */
  id?: string;
  /**
   * Optional. An arbitrary producer identifier. The combination of `id` and
   * `producer` must be globally unique. Examples for `producer`:
   * `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`.
   */
  producer?: string;
  /** Optional. Set this to True if this is the first log entry in the operation. */
  first?: boolean;
  /** Optional. Set this to True if this is the last log entry in the operation. */
  last?: boolean;
}
/**
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 */
export interface LogEntryOperationSDKType {
  id: string;
  producer: string;
  first: boolean;
  last: boolean;
}
/**
 * Additional information about the source code location that produced the log
 * entry.
 */
export interface LogEntrySourceLocation {
  /**
   * Optional. Source file name. Depending on the runtime environment, this
   * might be a simple name or a fully-qualified name.
   */
  file: string;
  /**
   * Optional. Line within the source file. 1-based; 0 indicates no line number
   * available.
   */
  line: bigint;
  /**
   * Optional. Human-readable name of the function or method being invoked, with
   * optional context such as the class or package name. This information may be
   * used in contexts such as the logs viewer, where a file and line number are
   * less meaningful. The format can vary by language. For example:
   * `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function`
   * (Python).
   */
  function: string;
}
export interface LogEntrySourceLocationProtoMsg {
  typeUrl: "/google.logging.v2.LogEntrySourceLocation";
  value: Uint8Array;
}
/**
 * Additional information about the source code location that produced the log
 * entry.
 */
export interface LogEntrySourceLocationAmino {
  /**
   * Optional. Source file name. Depending on the runtime environment, this
   * might be a simple name or a fully-qualified name.
   */
  file?: string;
  /**
   * Optional. Line within the source file. 1-based; 0 indicates no line number
   * available.
   */
  line?: string;
  /**
   * Optional. Human-readable name of the function or method being invoked, with
   * optional context such as the class or package name. This information may be
   * used in contexts such as the logs viewer, where a file and line number are
   * less meaningful. The format can vary by language. For example:
   * `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function`
   * (Python).
   */
  function?: string;
}
/**
 * Additional information about the source code location that produced the log
 * entry.
 */
export interface LogEntrySourceLocationSDKType {
  file: string;
  line: bigint;
  function: string;
}
/**
 * Additional information used to correlate multiple log entries. Used when a
 * single LogEntry would exceed the Google Cloud Logging size limit and is
 * split across multiple log entries.
 */
export interface LogSplit {
  /**
   * A globally unique identifier for all log entries in a sequence of split log
   * entries. All log entries with the same |LogSplit.uid| are assumed to be
   * part of the same sequence of split log entries.
   */
  uid: string;
  /**
   * The index of this LogEntry in the sequence of split log entries. Log
   * entries are given |index| values 0, 1, ..., n-1 for a sequence of n log
   * entries.
   */
  index: number;
  /** The total number of log entries that the original LogEntry was split into. */
  totalSplits: number;
}
export interface LogSplitProtoMsg {
  typeUrl: "/google.logging.v2.LogSplit";
  value: Uint8Array;
}
/**
 * Additional information used to correlate multiple log entries. Used when a
 * single LogEntry would exceed the Google Cloud Logging size limit and is
 * split across multiple log entries.
 */
export interface LogSplitAmino {
  /**
   * A globally unique identifier for all log entries in a sequence of split log
   * entries. All log entries with the same |LogSplit.uid| are assumed to be
   * part of the same sequence of split log entries.
   */
  uid?: string;
  /**
   * The index of this LogEntry in the sequence of split log entries. Log
   * entries are given |index| values 0, 1, ..., n-1 for a sequence of n log
   * entries.
   */
  index?: number;
  /** The total number of log entries that the original LogEntry was split into. */
  total_splits?: number;
}
/**
 * Additional information used to correlate multiple log entries. Used when a
 * single LogEntry would exceed the Google Cloud Logging size limit and is
 * split across multiple log entries.
 */
export interface LogSplitSDKType {
  uid: string;
  index: number;
  total_splits: number;
}
function createBaseLogEntry_LabelsEntry(): LogEntry_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}
export const LogEntry_LabelsEntry = {
  encode(message: LogEntry_LabelsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): LogEntry_LabelsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEntry_LabelsEntry();
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
  fromJSON(object: any): LogEntry_LabelsEntry {
    const obj = createBaseLogEntry_LabelsEntry();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = String(object.value);
    return obj;
  },
  fromPartial(object: DeepPartial<LogEntry_LabelsEntry>): LogEntry_LabelsEntry {
    const message = createBaseLogEntry_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: LogEntry_LabelsEntrySDKType): LogEntry_LabelsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: LogEntry_LabelsEntry): LogEntry_LabelsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: LogEntry_LabelsEntryAmino): LogEntry_LabelsEntry {
    const message = createBaseLogEntry_LabelsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: LogEntry_LabelsEntry, useInterfaces: boolean = true): LogEntry_LabelsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromProtoMsg(message: LogEntry_LabelsEntryProtoMsg, useInterfaces: boolean = true): LogEntry_LabelsEntry {
    return LogEntry_LabelsEntry.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: LogEntry_LabelsEntry): Uint8Array {
    return LogEntry_LabelsEntry.encode(message).finish();
  }
};
function createBaseLogEntry(): LogEntry {
  return {
    logName: "",
    resource: undefined,
    protoPayload: undefined,
    textPayload: undefined,
    jsonPayload: undefined,
    timestamp: undefined,
    receiveTimestamp: undefined,
    severity: 0,
    insertId: "",
    httpRequest: undefined,
    labels: {},
    operation: undefined,
    trace: "",
    spanId: "",
    traceSampled: false,
    sourceLocation: undefined,
    split: undefined
  };
}
export const LogEntry = {
  typeUrl: "/google.logging.v2.LogEntry",
  encode(message: LogEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.logName !== "") {
      writer.uint32(98).string(message.logName);
    }
    if (message.resource !== undefined) {
      MonitoredResource.encode(message.resource, writer.uint32(66).fork()).ldelim();
    }
    if (message.protoPayload !== undefined) {
      Any.encode(message.protoPayload, writer.uint32(18).fork()).ldelim();
    }
    if (message.textPayload !== undefined) {
      writer.uint32(26).string(message.textPayload);
    }
    if (message.jsonPayload !== undefined) {
      Struct.encode(message.jsonPayload, writer.uint32(50).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(74).fork()).ldelim();
    }
    if (message.receiveTimestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.receiveTimestamp), writer.uint32(194).fork()).ldelim();
    }
    if (message.severity !== 0) {
      writer.uint32(80).int32(message.severity);
    }
    if (message.insertId !== "") {
      writer.uint32(34).string(message.insertId);
    }
    if (message.httpRequest !== undefined) {
      HttpRequest.encode(message.httpRequest, writer.uint32(58).fork()).ldelim();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      LogEntry_LabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(90).fork()).ldelim();
    });
    if (message.operation !== undefined) {
      LogEntryOperation.encode(message.operation, writer.uint32(122).fork()).ldelim();
    }
    if (message.trace !== "") {
      writer.uint32(178).string(message.trace);
    }
    if (message.spanId !== "") {
      writer.uint32(218).string(message.spanId);
    }
    if (message.traceSampled === true) {
      writer.uint32(240).bool(message.traceSampled);
    }
    if (message.sourceLocation !== undefined) {
      LogEntrySourceLocation.encode(message.sourceLocation, writer.uint32(186).fork()).ldelim();
    }
    if (message.split !== undefined) {
      LogSplit.encode(message.split, writer.uint32(282).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): LogEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 12:
          message.logName = reader.string();
          break;
        case 8:
          message.resource = MonitoredResource.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.protoPayload = Any.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.textPayload = reader.string();
          break;
        case 6:
          message.jsonPayload = Struct.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 9:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 24:
          message.receiveTimestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 10:
          message.severity = (reader.int32() as any);
          break;
        case 4:
          message.insertId = reader.string();
          break;
        case 7:
          message.httpRequest = HttpRequest.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 11:
          const entry11 = LogEntry_LabelsEntry.decode(reader, reader.uint32());
          if (entry11.value !== undefined) {
            message.labels[entry11.key] = entry11.value;
          }
          break;
        case 15:
          message.operation = LogEntryOperation.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 22:
          message.trace = reader.string();
          break;
        case 27:
          message.spanId = reader.string();
          break;
        case 30:
          message.traceSampled = reader.bool();
          break;
        case 23:
          message.sourceLocation = LogEntrySourceLocation.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 35:
          message.split = LogSplit.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LogEntry {
    const obj = createBaseLogEntry();
    if (isSet(object.logName)) obj.logName = String(object.logName);
    if (isSet(object.resource)) obj.resource = MonitoredResource.fromJSON(object.resource);
    if (isSet(object.protoPayload)) obj.protoPayload = Any.fromJSON(object.protoPayload);
    if (isSet(object.textPayload)) obj.textPayload = String(object.textPayload);
    if (isSet(object.jsonPayload)) obj.jsonPayload = Struct.fromJSON(object.jsonPayload);
    if (isSet(object.timestamp)) obj.timestamp = new Date(object.timestamp);
    if (isSet(object.receiveTimestamp)) obj.receiveTimestamp = new Date(object.receiveTimestamp);
    if (isSet(object.severity)) obj.severity = logSeverityFromJSON(object.severity);
    if (isSet(object.insertId)) obj.insertId = String(object.insertId);
    if (isSet(object.httpRequest)) obj.httpRequest = HttpRequest.fromJSON(object.httpRequest);
    if (isObject(object.labels)) obj.labels = Object.entries(object.labels).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    if (isSet(object.operation)) obj.operation = LogEntryOperation.fromJSON(object.operation);
    if (isSet(object.trace)) obj.trace = String(object.trace);
    if (isSet(object.spanId)) obj.spanId = String(object.spanId);
    if (isSet(object.traceSampled)) obj.traceSampled = Boolean(object.traceSampled);
    if (isSet(object.sourceLocation)) obj.sourceLocation = LogEntrySourceLocation.fromJSON(object.sourceLocation);
    if (isSet(object.split)) obj.split = LogSplit.fromJSON(object.split);
    return obj;
  },
  fromPartial(object: DeepPartial<LogEntry>): LogEntry {
    const message = createBaseLogEntry();
    message.logName = object.logName ?? "";
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = MonitoredResource.fromPartial(object.resource);
    }
    if (object.protoPayload !== undefined && object.protoPayload !== null) {
      message.protoPayload = Any.fromPartial(object.protoPayload);
    }
    message.textPayload = object.textPayload ?? undefined;
    if (object.jsonPayload !== undefined && object.jsonPayload !== null) {
      message.jsonPayload = Struct.fromPartial(object.jsonPayload);
    }
    message.timestamp = object.timestamp ?? undefined;
    message.receiveTimestamp = object.receiveTimestamp ?? undefined;
    message.severity = object.severity ?? 0;
    message.insertId = object.insertId ?? "";
    if (object.httpRequest !== undefined && object.httpRequest !== null) {
      message.httpRequest = HttpRequest.fromPartial(object.httpRequest);
    }
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = LogEntryOperation.fromPartial(object.operation);
    }
    message.trace = object.trace ?? "";
    message.spanId = object.spanId ?? "";
    message.traceSampled = object.traceSampled ?? false;
    if (object.sourceLocation !== undefined && object.sourceLocation !== null) {
      message.sourceLocation = LogEntrySourceLocation.fromPartial(object.sourceLocation);
    }
    if (object.split !== undefined && object.split !== null) {
      message.split = LogSplit.fromPartial(object.split);
    }
    return message;
  },
  fromSDK(object: LogEntrySDKType): LogEntry {
    return {
      logName: object?.log_name,
      resource: object.resource ? MonitoredResource.fromSDK(object.resource) : undefined,
      protoPayload: object.proto_payload ? Any.fromSDK(object.proto_payload) : undefined,
      textPayload: object?.text_payload,
      jsonPayload: object.json_payload ? Struct.fromSDK(object.json_payload) : undefined,
      timestamp: object.timestamp ?? undefined,
      receiveTimestamp: object.receive_timestamp ?? undefined,
      severity: isSet(object.severity) ? logSeverityFromJSON(object.severity) : -1,
      insertId: object?.insert_id,
      httpRequest: object.http_request ? HttpRequest.fromSDK(object.http_request) : undefined,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      operation: object.operation ? LogEntryOperation.fromSDK(object.operation) : undefined,
      trace: object?.trace,
      spanId: object?.span_id,
      traceSampled: object?.trace_sampled,
      sourceLocation: object.source_location ? LogEntrySourceLocation.fromSDK(object.source_location) : undefined,
      split: object.split ? LogSplit.fromSDK(object.split) : undefined
    };
  },
  toSDK(message: LogEntry): LogEntrySDKType {
    const obj: any = {};
    obj.log_name = message.logName;
    message.resource !== undefined && (obj.resource = message.resource ? MonitoredResource.toSDK(message.resource) : undefined);
    message.protoPayload !== undefined && (obj.proto_payload = message.protoPayload ? Any.toSDK(message.protoPayload) : undefined);
    obj.text_payload = message.textPayload;
    message.jsonPayload !== undefined && (obj.json_payload = message.jsonPayload ? Struct.toSDK(message.jsonPayload) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
    message.receiveTimestamp !== undefined && (obj.receive_timestamp = message.receiveTimestamp ?? undefined);
    message.severity !== undefined && (obj.severity = logSeverityToJSON(message.severity));
    obj.insert_id = message.insertId;
    message.httpRequest !== undefined && (obj.http_request = message.httpRequest ? HttpRequest.toSDK(message.httpRequest) : undefined);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.operation !== undefined && (obj.operation = message.operation ? LogEntryOperation.toSDK(message.operation) : undefined);
    obj.trace = message.trace;
    obj.span_id = message.spanId;
    obj.trace_sampled = message.traceSampled;
    message.sourceLocation !== undefined && (obj.source_location = message.sourceLocation ? LogEntrySourceLocation.toSDK(message.sourceLocation) : undefined);
    message.split !== undefined && (obj.split = message.split ? LogSplit.toSDK(message.split) : undefined);
    return obj;
  },
  fromAmino(object: LogEntryAmino): LogEntry {
    const message = createBaseLogEntry();
    if (object.log_name !== undefined && object.log_name !== null) {
      message.logName = object.log_name;
    }
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = MonitoredResource.fromAmino(object.resource);
    }
    if (object.proto_payload !== undefined && object.proto_payload !== null) {
      message.protoPayload = Any.fromAmino(object.proto_payload);
    }
    if (object.text_payload !== undefined && object.text_payload !== null) {
      message.textPayload = object.text_payload;
    }
    if (object.json_payload !== undefined && object.json_payload !== null) {
      message.jsonPayload = Struct.fromAmino(object.json_payload);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    if (object.receive_timestamp !== undefined && object.receive_timestamp !== null) {
      message.receiveTimestamp = fromTimestamp(Timestamp.fromAmino(object.receive_timestamp));
    }
    if (object.severity !== undefined && object.severity !== null) {
      message.severity = object.severity;
    }
    if (object.insert_id !== undefined && object.insert_id !== null) {
      message.insertId = object.insert_id;
    }
    if (object.http_request !== undefined && object.http_request !== null) {
      message.httpRequest = HttpRequest.fromAmino(object.http_request);
    }
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    if (object.operation !== undefined && object.operation !== null) {
      message.operation = LogEntryOperation.fromAmino(object.operation);
    }
    if (object.trace !== undefined && object.trace !== null) {
      message.trace = object.trace;
    }
    if (object.span_id !== undefined && object.span_id !== null) {
      message.spanId = object.span_id;
    }
    if (object.trace_sampled !== undefined && object.trace_sampled !== null) {
      message.traceSampled = object.trace_sampled;
    }
    if (object.source_location !== undefined && object.source_location !== null) {
      message.sourceLocation = LogEntrySourceLocation.fromAmino(object.source_location);
    }
    if (object.split !== undefined && object.split !== null) {
      message.split = LogSplit.fromAmino(object.split);
    }
    return message;
  },
  toAmino(message: LogEntry, useInterfaces: boolean = true): LogEntryAmino {
    const obj: any = {};
    obj.log_name = message.logName === "" ? undefined : message.logName;
    obj.resource = message.resource ? MonitoredResource.toAmino(message.resource, useInterfaces) : undefined;
    obj.proto_payload = message.protoPayload ? Any.toAmino(message.protoPayload, useInterfaces) : undefined;
    obj.text_payload = message.textPayload === null ? undefined : message.textPayload;
    obj.json_payload = message.jsonPayload ? Struct.toAmino(message.jsonPayload, useInterfaces) : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    obj.receive_timestamp = message.receiveTimestamp ? Timestamp.toAmino(toTimestamp(message.receiveTimestamp)) : undefined;
    obj.severity = message.severity === 0 ? undefined : message.severity;
    obj.insert_id = message.insertId === "" ? undefined : message.insertId;
    obj.http_request = message.httpRequest ? HttpRequest.toAmino(message.httpRequest, useInterfaces) : undefined;
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    obj.operation = message.operation ? LogEntryOperation.toAmino(message.operation, useInterfaces) : undefined;
    obj.trace = message.trace === "" ? undefined : message.trace;
    obj.span_id = message.spanId === "" ? undefined : message.spanId;
    obj.trace_sampled = message.traceSampled === false ? undefined : message.traceSampled;
    obj.source_location = message.sourceLocation ? LogEntrySourceLocation.toAmino(message.sourceLocation, useInterfaces) : undefined;
    obj.split = message.split ? LogSplit.toAmino(message.split, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: LogEntryProtoMsg, useInterfaces: boolean = true): LogEntry {
    return LogEntry.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: LogEntry): Uint8Array {
    return LogEntry.encode(message).finish();
  },
  toProtoMsg(message: LogEntry): LogEntryProtoMsg {
    return {
      typeUrl: "/google.logging.v2.LogEntry",
      value: LogEntry.encode(message).finish()
    };
  }
};
function createBaseLogEntryOperation(): LogEntryOperation {
  return {
    id: "",
    producer: "",
    first: false,
    last: false
  };
}
export const LogEntryOperation = {
  typeUrl: "/google.logging.v2.LogEntryOperation",
  encode(message: LogEntryOperation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.producer !== "") {
      writer.uint32(18).string(message.producer);
    }
    if (message.first === true) {
      writer.uint32(24).bool(message.first);
    }
    if (message.last === true) {
      writer.uint32(32).bool(message.last);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): LogEntryOperation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEntryOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.producer = reader.string();
          break;
        case 3:
          message.first = reader.bool();
          break;
        case 4:
          message.last = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LogEntryOperation {
    const obj = createBaseLogEntryOperation();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.producer)) obj.producer = String(object.producer);
    if (isSet(object.first)) obj.first = Boolean(object.first);
    if (isSet(object.last)) obj.last = Boolean(object.last);
    return obj;
  },
  fromPartial(object: DeepPartial<LogEntryOperation>): LogEntryOperation {
    const message = createBaseLogEntryOperation();
    message.id = object.id ?? "";
    message.producer = object.producer ?? "";
    message.first = object.first ?? false;
    message.last = object.last ?? false;
    return message;
  },
  fromSDK(object: LogEntryOperationSDKType): LogEntryOperation {
    return {
      id: object?.id,
      producer: object?.producer,
      first: object?.first,
      last: object?.last
    };
  },
  toSDK(message: LogEntryOperation): LogEntryOperationSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.producer = message.producer;
    obj.first = message.first;
    obj.last = message.last;
    return obj;
  },
  fromAmino(object: LogEntryOperationAmino): LogEntryOperation {
    const message = createBaseLogEntryOperation();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.producer !== undefined && object.producer !== null) {
      message.producer = object.producer;
    }
    if (object.first !== undefined && object.first !== null) {
      message.first = object.first;
    }
    if (object.last !== undefined && object.last !== null) {
      message.last = object.last;
    }
    return message;
  },
  toAmino(message: LogEntryOperation, useInterfaces: boolean = true): LogEntryOperationAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.producer = message.producer === "" ? undefined : message.producer;
    obj.first = message.first === false ? undefined : message.first;
    obj.last = message.last === false ? undefined : message.last;
    return obj;
  },
  fromProtoMsg(message: LogEntryOperationProtoMsg, useInterfaces: boolean = true): LogEntryOperation {
    return LogEntryOperation.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: LogEntryOperation): Uint8Array {
    return LogEntryOperation.encode(message).finish();
  },
  toProtoMsg(message: LogEntryOperation): LogEntryOperationProtoMsg {
    return {
      typeUrl: "/google.logging.v2.LogEntryOperation",
      value: LogEntryOperation.encode(message).finish()
    };
  }
};
function createBaseLogEntrySourceLocation(): LogEntrySourceLocation {
  return {
    file: "",
    line: BigInt(0),
    function: ""
  };
}
export const LogEntrySourceLocation = {
  typeUrl: "/google.logging.v2.LogEntrySourceLocation",
  encode(message: LogEntrySourceLocation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.file !== "") {
      writer.uint32(10).string(message.file);
    }
    if (message.line !== BigInt(0)) {
      writer.uint32(16).int64(message.line);
    }
    if (message.function !== "") {
      writer.uint32(26).string(message.function);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): LogEntrySourceLocation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEntrySourceLocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file = reader.string();
          break;
        case 2:
          message.line = reader.int64();
          break;
        case 3:
          message.function = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LogEntrySourceLocation {
    const obj = createBaseLogEntrySourceLocation();
    if (isSet(object.file)) obj.file = String(object.file);
    if (isSet(object.line)) obj.line = BigInt(object.line.toString());
    if (isSet(object.function)) obj.function = String(object.function);
    return obj;
  },
  fromPartial(object: DeepPartial<LogEntrySourceLocation>): LogEntrySourceLocation {
    const message = createBaseLogEntrySourceLocation();
    message.file = object.file ?? "";
    if (object.line !== undefined && object.line !== null) {
      message.line = BigInt(object.line.toString());
    }
    message.function = object.function ?? "";
    return message;
  },
  fromSDK(object: LogEntrySourceLocationSDKType): LogEntrySourceLocation {
    return {
      file: object?.file,
      line: object?.line,
      function: object?.function
    };
  },
  toSDK(message: LogEntrySourceLocation): LogEntrySourceLocationSDKType {
    const obj: any = {};
    obj.file = message.file;
    obj.line = message.line;
    obj.function = message.function;
    return obj;
  },
  fromAmino(object: LogEntrySourceLocationAmino): LogEntrySourceLocation {
    const message = createBaseLogEntrySourceLocation();
    if (object.file !== undefined && object.file !== null) {
      message.file = object.file;
    }
    if (object.line !== undefined && object.line !== null) {
      message.line = BigInt(object.line);
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    }
    return message;
  },
  toAmino(message: LogEntrySourceLocation, useInterfaces: boolean = true): LogEntrySourceLocationAmino {
    const obj: any = {};
    obj.file = message.file === "" ? undefined : message.file;
    obj.line = message.line !== BigInt(0) ? message.line?.toString() : undefined;
    obj.function = message.function === "" ? undefined : message.function;
    return obj;
  },
  fromProtoMsg(message: LogEntrySourceLocationProtoMsg, useInterfaces: boolean = true): LogEntrySourceLocation {
    return LogEntrySourceLocation.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: LogEntrySourceLocation): Uint8Array {
    return LogEntrySourceLocation.encode(message).finish();
  },
  toProtoMsg(message: LogEntrySourceLocation): LogEntrySourceLocationProtoMsg {
    return {
      typeUrl: "/google.logging.v2.LogEntrySourceLocation",
      value: LogEntrySourceLocation.encode(message).finish()
    };
  }
};
function createBaseLogSplit(): LogSplit {
  return {
    uid: "",
    index: 0,
    totalSplits: 0
  };
}
export const LogSplit = {
  typeUrl: "/google.logging.v2.LogSplit",
  encode(message: LogSplit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.index !== 0) {
      writer.uint32(16).int32(message.index);
    }
    if (message.totalSplits !== 0) {
      writer.uint32(24).int32(message.totalSplits);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): LogSplit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogSplit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = reader.string();
          break;
        case 2:
          message.index = reader.int32();
          break;
        case 3:
          message.totalSplits = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LogSplit {
    const obj = createBaseLogSplit();
    if (isSet(object.uid)) obj.uid = String(object.uid);
    if (isSet(object.index)) obj.index = Number(object.index);
    if (isSet(object.totalSplits)) obj.totalSplits = Number(object.totalSplits);
    return obj;
  },
  fromPartial(object: DeepPartial<LogSplit>): LogSplit {
    const message = createBaseLogSplit();
    message.uid = object.uid ?? "";
    message.index = object.index ?? 0;
    message.totalSplits = object.totalSplits ?? 0;
    return message;
  },
  fromSDK(object: LogSplitSDKType): LogSplit {
    return {
      uid: object?.uid,
      index: object?.index,
      totalSplits: object?.total_splits
    };
  },
  toSDK(message: LogSplit): LogSplitSDKType {
    const obj: any = {};
    obj.uid = message.uid;
    obj.index = message.index;
    obj.total_splits = message.totalSplits;
    return obj;
  },
  fromAmino(object: LogSplitAmino): LogSplit {
    const message = createBaseLogSplit();
    if (object.uid !== undefined && object.uid !== null) {
      message.uid = object.uid;
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    }
    if (object.total_splits !== undefined && object.total_splits !== null) {
      message.totalSplits = object.total_splits;
    }
    return message;
  },
  toAmino(message: LogSplit, useInterfaces: boolean = true): LogSplitAmino {
    const obj: any = {};
    obj.uid = message.uid === "" ? undefined : message.uid;
    obj.index = message.index === 0 ? undefined : message.index;
    obj.total_splits = message.totalSplits === 0 ? undefined : message.totalSplits;
    return obj;
  },
  fromProtoMsg(message: LogSplitProtoMsg, useInterfaces: boolean = true): LogSplit {
    return LogSplit.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: LogSplit): Uint8Array {
    return LogSplit.encode(message).finish();
  },
  toProtoMsg(message: LogSplit): LogSplitProtoMsg {
    return {
      typeUrl: "/google.logging.v2.LogSplit",
      value: LogSplit.encode(message).finish()
    };
  }
};