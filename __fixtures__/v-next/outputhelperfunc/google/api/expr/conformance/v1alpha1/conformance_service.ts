import { ParsedExpr, ParsedExprAmino, ParsedExprSDKType, SourcePosition, SourcePositionAmino, SourcePositionSDKType } from "../../v1alpha1/syntax";
import { Decl, DeclAmino, DeclSDKType, CheckedExpr, CheckedExprAmino, CheckedExprSDKType } from "../../v1alpha1/checked";
import { ExprValue, ExprValueAmino, ExprValueSDKType } from "../../v1alpha1/eval";
import { Status, StatusAmino, StatusSDKType } from "../../../../rpc/status";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { isSet, DeepPartial, isObject } from "../../../../../helpers";
import { JsonSafe } from "../../../../../json-safe";
import { GlobalDecoderRegistry } from "../../../../../registry";
export const protobufPackage = "google.api.expr.conformance.v1alpha1";
/** Severities of issues. */
export enum IssueDetails_Severity {
  /** SEVERITY_UNSPECIFIED - An unspecified severity. */
  SEVERITY_UNSPECIFIED = 0,
  /**
   * DEPRECATION - Deprecation issue for statements and method that may no longer be
   * supported or maintained.
   */
  DEPRECATION = 1,
  /** WARNING - Warnings such as: unused variables. */
  WARNING = 2,
  /** ERROR - Errors such as: unmatched curly braces or variable redefinition. */
  ERROR = 3,
  UNRECOGNIZED = -1,
}
export const IssueDetails_SeveritySDKType = IssueDetails_Severity;
export const IssueDetails_SeverityAmino = IssueDetails_Severity;
export function issueDetails_SeverityFromJSON(object: any): IssueDetails_Severity {
  switch (object) {
    case 0:
    case "SEVERITY_UNSPECIFIED":
      return IssueDetails_Severity.SEVERITY_UNSPECIFIED;
    case 1:
    case "DEPRECATION":
      return IssueDetails_Severity.DEPRECATION;
    case 2:
    case "WARNING":
      return IssueDetails_Severity.WARNING;
    case 3:
    case "ERROR":
      return IssueDetails_Severity.ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return IssueDetails_Severity.UNRECOGNIZED;
  }
}
export function issueDetails_SeverityToJSON(object: IssueDetails_Severity): string {
  switch (object) {
    case IssueDetails_Severity.SEVERITY_UNSPECIFIED:
      return "SEVERITY_UNSPECIFIED";
    case IssueDetails_Severity.DEPRECATION:
      return "DEPRECATION";
    case IssueDetails_Severity.WARNING:
      return "WARNING";
    case IssueDetails_Severity.ERROR:
      return "ERROR";
    case IssueDetails_Severity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Request message for the Parse method. */
export interface ParseRequest {
  /** Required. Source text in CEL syntax. */
  celSource: string;
  /** Tag for version of CEL syntax, for future use. */
  syntaxVersion: string;
  /** File or resource for source text, used in [SourceInfo][google.api.SourceInfo]. */
  sourceLocation: string;
  /** Prevent macro expansion.  See "Macros" in Language Defiinition. */
  disableMacros: boolean;
}
export interface ParseRequestProtoMsg {
  typeUrl: "/google.api.expr.conformance.v1alpha1.ParseRequest";
  value: Uint8Array;
}
/** Request message for the Parse method. */
export interface ParseRequestAmino {
  /** Required. Source text in CEL syntax. */
  cel_source?: string;
  /** Tag for version of CEL syntax, for future use. */
  syntax_version?: string;
  /** File or resource for source text, used in [SourceInfo][google.api.SourceInfo]. */
  source_location?: string;
  /** Prevent macro expansion.  See "Macros" in Language Defiinition. */
  disable_macros?: boolean;
}
export interface ParseRequestAminoMsg {
  type: "/google.api.expr.conformance.v1alpha1.ParseRequest";
  value: ParseRequestAmino;
}
/** Request message for the Parse method. */
export interface ParseRequestSDKType {
  cel_source: string;
  syntax_version: string;
  source_location: string;
  disable_macros: boolean;
}
/** Response message for the Parse method. */
export interface ParseResponse {
  /** The parsed representation, or unset if parsing failed. */
  parsedExpr?: ParsedExpr;
  /** Any number of issues with [StatusDetails][] as the details. */
  issues: Status[];
}
export interface ParseResponseProtoMsg {
  typeUrl: "/google.api.expr.conformance.v1alpha1.ParseResponse";
  value: Uint8Array;
}
/** Response message for the Parse method. */
export interface ParseResponseAmino {
  /** The parsed representation, or unset if parsing failed. */
  parsed_expr?: ParsedExprAmino;
  /** Any number of issues with [StatusDetails][] as the details. */
  issues?: StatusAmino[];
}
export interface ParseResponseAminoMsg {
  type: "/google.api.expr.conformance.v1alpha1.ParseResponse";
  value: ParseResponseAmino;
}
/** Response message for the Parse method. */
export interface ParseResponseSDKType {
  parsed_expr?: ParsedExprSDKType;
  issues: StatusSDKType[];
}
/** Request message for the Check method. */
export interface CheckRequest {
  /** Required. The parsed representation of the CEL program. */
  parsedExpr?: ParsedExpr;
  /**
   * Declarations of types for external variables and functions.
   * Required if program uses external variables or functions
   * not in the default environment.
   */
  typeEnv: Decl[];
  /**
   * The protocol buffer context.  See "Name Resolution" in the
   * Language Definition.
   */
  container: string;
  /**
   * If true, use only the declarations in [type_env][google.api.expr.conformance.v1alpha1.CheckRequest.type_env].  If false (default),
   * add declarations for the standard definitions to the type environment.  See
   * "Standard Definitions" in the Language Definition.
   */
  noStdEnv: boolean;
}
export interface CheckRequestProtoMsg {
  typeUrl: "/google.api.expr.conformance.v1alpha1.CheckRequest";
  value: Uint8Array;
}
/** Request message for the Check method. */
export interface CheckRequestAmino {
  /** Required. The parsed representation of the CEL program. */
  parsed_expr?: ParsedExprAmino;
  /**
   * Declarations of types for external variables and functions.
   * Required if program uses external variables or functions
   * not in the default environment.
   */
  type_env?: DeclAmino[];
  /**
   * The protocol buffer context.  See "Name Resolution" in the
   * Language Definition.
   */
  container?: string;
  /**
   * If true, use only the declarations in [type_env][google.api.expr.conformance.v1alpha1.CheckRequest.type_env].  If false (default),
   * add declarations for the standard definitions to the type environment.  See
   * "Standard Definitions" in the Language Definition.
   */
  no_std_env?: boolean;
}
export interface CheckRequestAminoMsg {
  type: "/google.api.expr.conformance.v1alpha1.CheckRequest";
  value: CheckRequestAmino;
}
/** Request message for the Check method. */
export interface CheckRequestSDKType {
  parsed_expr?: ParsedExprSDKType;
  type_env: DeclSDKType[];
  container: string;
  no_std_env: boolean;
}
/** Response message for the Check method. */
export interface CheckResponse {
  /** The annotated representation, or unset if checking failed. */
  checkedExpr?: CheckedExpr;
  /** Any number of issues with [StatusDetails][] as the details. */
  issues: Status[];
}
export interface CheckResponseProtoMsg {
  typeUrl: "/google.api.expr.conformance.v1alpha1.CheckResponse";
  value: Uint8Array;
}
/** Response message for the Check method. */
export interface CheckResponseAmino {
  /** The annotated representation, or unset if checking failed. */
  checked_expr?: CheckedExprAmino;
  /** Any number of issues with [StatusDetails][] as the details. */
  issues?: StatusAmino[];
}
export interface CheckResponseAminoMsg {
  type: "/google.api.expr.conformance.v1alpha1.CheckResponse";
  value: CheckResponseAmino;
}
/** Response message for the Check method. */
export interface CheckResponseSDKType {
  checked_expr?: CheckedExprSDKType;
  issues: StatusSDKType[];
}
export interface EvalRequest_BindingsEntry {
  key: string;
  value?: ExprValue;
}
export interface EvalRequest_BindingsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface EvalRequest_BindingsEntryAmino {
  key?: string;
  value?: ExprValueAmino;
}
export interface EvalRequest_BindingsEntryAminoMsg {
  type: string;
  value: EvalRequest_BindingsEntryAmino;
}
export interface EvalRequest_BindingsEntrySDKType {
  key: string;
  value?: ExprValueSDKType;
}
/** Request message for the Eval method. */
export interface EvalRequest {
  /** Evaluate based on the parsed representation. */
  parsedExpr?: ParsedExpr;
  /** Evaluate based on the checked representation. */
  checkedExpr?: CheckedExpr;
  /**
   * Bindings for the external variables.  The types SHOULD be compatible
   * with the type environment in [CheckRequest][google.api.expr.conformance.v1alpha1.CheckRequest], if checked.
   */
  bindings: {
    [key: string]: ExprValue;
  };
  /** SHOULD be the same container as used in [CheckRequest][google.api.expr.conformance.v1alpha1.CheckRequest], if checked. */
  container: string;
}
export interface EvalRequestProtoMsg {
  typeUrl: "/google.api.expr.conformance.v1alpha1.EvalRequest";
  value: Uint8Array;
}
/** Request message for the Eval method. */
export interface EvalRequestAmino {
  /** Evaluate based on the parsed representation. */
  parsed_expr?: ParsedExprAmino;
  /** Evaluate based on the checked representation. */
  checked_expr?: CheckedExprAmino;
  /**
   * Bindings for the external variables.  The types SHOULD be compatible
   * with the type environment in [CheckRequest][google.api.expr.conformance.v1alpha1.CheckRequest], if checked.
   */
  bindings?: {
    [key: string]: ExprValueAmino;
  };
  /** SHOULD be the same container as used in [CheckRequest][google.api.expr.conformance.v1alpha1.CheckRequest], if checked. */
  container?: string;
}
export interface EvalRequestAminoMsg {
  type: "/google.api.expr.conformance.v1alpha1.EvalRequest";
  value: EvalRequestAmino;
}
/** Request message for the Eval method. */
export interface EvalRequestSDKType {
  parsed_expr?: ParsedExprSDKType;
  checked_expr?: CheckedExprSDKType;
  bindings: {
    [key: string]: ExprValueSDKType;
  };
  container: string;
}
/** Response message for the Eval method. */
export interface EvalResponse {
  /** The execution result, or unset if execution couldn't start. */
  result?: ExprValue;
  /**
   * Any number of issues with [StatusDetails][] as the details.
   * Note that CEL execution errors are reified into [ExprValue][].
   * Nevertheless, we'll allow out-of-band issues to be raised,
   * which also makes the replies more regular.
   */
  issues: Status[];
}
export interface EvalResponseProtoMsg {
  typeUrl: "/google.api.expr.conformance.v1alpha1.EvalResponse";
  value: Uint8Array;
}
/** Response message for the Eval method. */
export interface EvalResponseAmino {
  /** The execution result, or unset if execution couldn't start. */
  result?: ExprValueAmino;
  /**
   * Any number of issues with [StatusDetails][] as the details.
   * Note that CEL execution errors are reified into [ExprValue][].
   * Nevertheless, we'll allow out-of-band issues to be raised,
   * which also makes the replies more regular.
   */
  issues?: StatusAmino[];
}
export interface EvalResponseAminoMsg {
  type: "/google.api.expr.conformance.v1alpha1.EvalResponse";
  value: EvalResponseAmino;
}
/** Response message for the Eval method. */
export interface EvalResponseSDKType {
  result?: ExprValueSDKType;
  issues: StatusSDKType[];
}
/**
 * Warnings or errors in service execution are represented by
 * [google.rpc.Status][google.rpc.Status] messages, with the following message
 * in the details field.
 */
export interface IssueDetails {
  /** The severity of the issue. */
  severity: IssueDetails_Severity;
  /** Position in the source, if known. */
  position?: SourcePosition;
  /** Expression ID from [Expr][], 0 if unknown. */
  id: bigint;
}
export interface IssueDetailsProtoMsg {
  typeUrl: "/google.api.expr.conformance.v1alpha1.IssueDetails";
  value: Uint8Array;
}
/**
 * Warnings or errors in service execution are represented by
 * [google.rpc.Status][google.rpc.Status] messages, with the following message
 * in the details field.
 */
export interface IssueDetailsAmino {
  /** The severity of the issue. */
  severity?: IssueDetails_Severity;
  /** Position in the source, if known. */
  position?: SourcePositionAmino;
  /** Expression ID from [Expr][], 0 if unknown. */
  id?: string;
}
export interface IssueDetailsAminoMsg {
  type: "/google.api.expr.conformance.v1alpha1.IssueDetails";
  value: IssueDetailsAmino;
}
/**
 * Warnings or errors in service execution are represented by
 * [google.rpc.Status][google.rpc.Status] messages, with the following message
 * in the details field.
 */
export interface IssueDetailsSDKType {
  severity: IssueDetails_Severity;
  position?: SourcePositionSDKType;
  id: bigint;
}
function createBaseParseRequest(): ParseRequest {
  return {
    celSource: "",
    syntaxVersion: "",
    sourceLocation: "",
    disableMacros: false
  };
}
export const ParseRequest = {
  typeUrl: "/google.api.expr.conformance.v1alpha1.ParseRequest",
  is(o: any): o is ParseRequest {
    return o && (o.$typeUrl === ParseRequest.typeUrl || typeof o.celSource === "string" && typeof o.syntaxVersion === "string" && typeof o.sourceLocation === "string" && typeof o.disableMacros === "boolean");
  },
  isSDK(o: any): o is ParseRequestSDKType {
    return o && (o.$typeUrl === ParseRequest.typeUrl || typeof o.cel_source === "string" && typeof o.syntax_version === "string" && typeof o.source_location === "string" && typeof o.disable_macros === "boolean");
  },
  isAmino(o: any): o is ParseRequestAmino {
    return o && (o.$typeUrl === ParseRequest.typeUrl || typeof o.cel_source === "string" && typeof o.syntax_version === "string" && typeof o.source_location === "string" && typeof o.disable_macros === "boolean");
  },
  encode(message: ParseRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.celSource !== undefined) {
      writer.uint32(10).string(message.celSource);
    }
    if (message.syntaxVersion !== undefined) {
      writer.uint32(18).string(message.syntaxVersion);
    }
    if (message.sourceLocation !== undefined) {
      writer.uint32(26).string(message.sourceLocation);
    }
    if (message.disableMacros !== undefined) {
      writer.uint32(32).bool(message.disableMacros);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParseRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.celSource = reader.string();
          break;
        case 2:
          message.syntaxVersion = reader.string();
          break;
        case 3:
          message.sourceLocation = reader.string();
          break;
        case 4:
          message.disableMacros = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParseRequest {
    const obj = createBaseParseRequest();
    if (isSet(object.celSource)) obj.celSource = String(object.celSource);
    if (isSet(object.syntaxVersion)) obj.syntaxVersion = String(object.syntaxVersion);
    if (isSet(object.sourceLocation)) obj.sourceLocation = String(object.sourceLocation);
    if (isSet(object.disableMacros)) obj.disableMacros = Boolean(object.disableMacros);
    return obj;
  },
  toJSON(message: ParseRequest): JsonSafe<ParseRequest> {
    const obj: any = {};
    message.celSource !== undefined && (obj.celSource = message.celSource);
    message.syntaxVersion !== undefined && (obj.syntaxVersion = message.syntaxVersion);
    message.sourceLocation !== undefined && (obj.sourceLocation = message.sourceLocation);
    message.disableMacros !== undefined && (obj.disableMacros = message.disableMacros);
    return obj;
  },
  fromPartial(object: DeepPartial<ParseRequest>): ParseRequest {
    const message = createBaseParseRequest();
    message.celSource = object.celSource ?? "";
    message.syntaxVersion = object.syntaxVersion ?? "";
    message.sourceLocation = object.sourceLocation ?? "";
    message.disableMacros = object.disableMacros ?? false;
    return message;
  },
  fromSDK(object: ParseRequestSDKType): ParseRequest {
    return {
      celSource: object?.cel_source,
      syntaxVersion: object?.syntax_version,
      sourceLocation: object?.source_location,
      disableMacros: object?.disable_macros
    };
  },
  fromSDKJSON(object: any): ParseRequestSDKType {
    return {
      cel_source: isSet(object.cel_source) ? String(object.cel_source) : "",
      syntax_version: isSet(object.syntax_version) ? String(object.syntax_version) : "",
      source_location: isSet(object.source_location) ? String(object.source_location) : "",
      disable_macros: isSet(object.disable_macros) ? Boolean(object.disable_macros) : false
    };
  },
  toSDK(message: ParseRequest): ParseRequestSDKType {
    const obj: any = {};
    obj.cel_source = message.celSource;
    obj.syntax_version = message.syntaxVersion;
    obj.source_location = message.sourceLocation;
    obj.disable_macros = message.disableMacros;
    return obj;
  },
  fromAmino(object: ParseRequestAmino): ParseRequest {
    const message = createBaseParseRequest();
    if (object.cel_source !== undefined && object.cel_source !== null) {
      message.celSource = object.cel_source;
    }
    if (object.syntax_version !== undefined && object.syntax_version !== null) {
      message.syntaxVersion = object.syntax_version;
    }
    if (object.source_location !== undefined && object.source_location !== null) {
      message.sourceLocation = object.source_location;
    }
    if (object.disable_macros !== undefined && object.disable_macros !== null) {
      message.disableMacros = object.disable_macros;
    }
    return message;
  },
  toAmino(message: ParseRequest): ParseRequestAmino {
    const obj: any = {};
    obj.cel_source = message.celSource === "" ? undefined : message.celSource;
    obj.syntax_version = message.syntaxVersion === "" ? undefined : message.syntaxVersion;
    obj.source_location = message.sourceLocation === "" ? undefined : message.sourceLocation;
    obj.disable_macros = message.disableMacros === false ? undefined : message.disableMacros;
    return obj;
  },
  fromAminoMsg(object: ParseRequestAminoMsg): ParseRequest {
    return ParseRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ParseRequestProtoMsg): ParseRequest {
    return ParseRequest.decode(message.value);
  },
  toProto(message: ParseRequest): Uint8Array {
    return ParseRequest.encode(message).finish();
  },
  toProtoMsg(message: ParseRequest): ParseRequestProtoMsg {
    return {
      typeUrl: "/google.api.expr.conformance.v1alpha1.ParseRequest",
      value: ParseRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseParseResponse(): ParseResponse {
  return {
    parsedExpr: undefined,
    issues: []
  };
}
export const ParseResponse = {
  typeUrl: "/google.api.expr.conformance.v1alpha1.ParseResponse",
  is(o: any): o is ParseResponse {
    return o && (o.$typeUrl === ParseResponse.typeUrl || Array.isArray(o.issues) && (!o.issues.length || Status.is(o.issues[0])));
  },
  isSDK(o: any): o is ParseResponseSDKType {
    return o && (o.$typeUrl === ParseResponse.typeUrl || Array.isArray(o.issues) && (!o.issues.length || Status.isSDK(o.issues[0])));
  },
  isAmino(o: any): o is ParseResponseAmino {
    return o && (o.$typeUrl === ParseResponse.typeUrl || Array.isArray(o.issues) && (!o.issues.length || Status.isAmino(o.issues[0])));
  },
  encode(message: ParseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parsedExpr !== undefined) {
      ParsedExpr.encode(message.parsedExpr, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.issues) {
      Status.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParseResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parsedExpr = ParsedExpr.decode(reader, reader.uint32());
          break;
        case 2:
          message.issues.push(Status.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParseResponse {
    const obj = createBaseParseResponse();
    if (isSet(object.parsedExpr)) obj.parsedExpr = ParsedExpr.fromJSON(object.parsedExpr);
    if (Array.isArray(object?.issues)) obj.issues = object.issues.map((e: any) => Status.fromJSON(e));
    return obj;
  },
  toJSON(message: ParseResponse): JsonSafe<ParseResponse> {
    const obj: any = {};
    message.parsedExpr !== undefined && (obj.parsedExpr = message.parsedExpr ? ParsedExpr.toJSON(message.parsedExpr) : undefined);
    if (message.issues) {
      obj.issues = message.issues.map(e => e ? Status.toJSON(e) : undefined);
    } else {
      obj.issues = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ParseResponse>): ParseResponse {
    const message = createBaseParseResponse();
    if (object.parsedExpr !== undefined && object.parsedExpr !== null) {
      message.parsedExpr = ParsedExpr.fromPartial(object.parsedExpr);
    }
    message.issues = object.issues?.map(e => Status.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ParseResponseSDKType): ParseResponse {
    return {
      parsedExpr: object.parsed_expr ? ParsedExpr.fromSDK(object.parsed_expr) : undefined,
      issues: Array.isArray(object?.issues) ? object.issues.map((e: any) => Status.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): ParseResponseSDKType {
    return {
      parsed_expr: isSet(object.parsed_expr) ? ParsedExpr.fromSDKJSON(object.parsed_expr) : undefined,
      issues: Array.isArray(object?.issues) ? object.issues.map((e: any) => Status.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: ParseResponse): ParseResponseSDKType {
    const obj: any = {};
    message.parsedExpr !== undefined && (obj.parsed_expr = message.parsedExpr ? ParsedExpr.toSDK(message.parsedExpr) : undefined);
    if (message.issues) {
      obj.issues = message.issues.map(e => e ? Status.toSDK(e) : undefined);
    } else {
      obj.issues = [];
    }
    return obj;
  },
  fromAmino(object: ParseResponseAmino): ParseResponse {
    const message = createBaseParseResponse();
    if (object.parsed_expr !== undefined && object.parsed_expr !== null) {
      message.parsedExpr = ParsedExpr.fromAmino(object.parsed_expr);
    }
    message.issues = object.issues?.map(e => Status.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ParseResponse): ParseResponseAmino {
    const obj: any = {};
    obj.parsed_expr = message.parsedExpr ? ParsedExpr.toAmino(message.parsedExpr) : undefined;
    if (message.issues) {
      obj.issues = message.issues.map(e => e ? Status.toAmino(e) : undefined);
    } else {
      obj.issues = message.issues;
    }
    return obj;
  },
  fromAminoMsg(object: ParseResponseAminoMsg): ParseResponse {
    return ParseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ParseResponseProtoMsg): ParseResponse {
    return ParseResponse.decode(message.value);
  },
  toProto(message: ParseResponse): Uint8Array {
    return ParseResponse.encode(message).finish();
  },
  toProtoMsg(message: ParseResponse): ParseResponseProtoMsg {
    return {
      typeUrl: "/google.api.expr.conformance.v1alpha1.ParseResponse",
      value: ParseResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ParsedExpr.registerTypeUrl();
    Status.registerTypeUrl();
  }
};
function createBaseCheckRequest(): CheckRequest {
  return {
    parsedExpr: undefined,
    typeEnv: [],
    container: "",
    noStdEnv: false
  };
}
export const CheckRequest = {
  typeUrl: "/google.api.expr.conformance.v1alpha1.CheckRequest",
  is(o: any): o is CheckRequest {
    return o && (o.$typeUrl === CheckRequest.typeUrl || Array.isArray(o.typeEnv) && (!o.typeEnv.length || Decl.is(o.typeEnv[0])) && typeof o.container === "string" && typeof o.noStdEnv === "boolean");
  },
  isSDK(o: any): o is CheckRequestSDKType {
    return o && (o.$typeUrl === CheckRequest.typeUrl || Array.isArray(o.type_env) && (!o.type_env.length || Decl.isSDK(o.type_env[0])) && typeof o.container === "string" && typeof o.no_std_env === "boolean");
  },
  isAmino(o: any): o is CheckRequestAmino {
    return o && (o.$typeUrl === CheckRequest.typeUrl || Array.isArray(o.type_env) && (!o.type_env.length || Decl.isAmino(o.type_env[0])) && typeof o.container === "string" && typeof o.no_std_env === "boolean");
  },
  encode(message: CheckRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parsedExpr !== undefined) {
      ParsedExpr.encode(message.parsedExpr, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.typeEnv) {
      Decl.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.container !== undefined) {
      writer.uint32(26).string(message.container);
    }
    if (message.noStdEnv !== undefined) {
      writer.uint32(32).bool(message.noStdEnv);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CheckRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parsedExpr = ParsedExpr.decode(reader, reader.uint32());
          break;
        case 2:
          message.typeEnv.push(Decl.decode(reader, reader.uint32()));
          break;
        case 3:
          message.container = reader.string();
          break;
        case 4:
          message.noStdEnv = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CheckRequest {
    const obj = createBaseCheckRequest();
    if (isSet(object.parsedExpr)) obj.parsedExpr = ParsedExpr.fromJSON(object.parsedExpr);
    if (Array.isArray(object?.typeEnv)) obj.typeEnv = object.typeEnv.map((e: any) => Decl.fromJSON(e));
    if (isSet(object.container)) obj.container = String(object.container);
    if (isSet(object.noStdEnv)) obj.noStdEnv = Boolean(object.noStdEnv);
    return obj;
  },
  toJSON(message: CheckRequest): JsonSafe<CheckRequest> {
    const obj: any = {};
    message.parsedExpr !== undefined && (obj.parsedExpr = message.parsedExpr ? ParsedExpr.toJSON(message.parsedExpr) : undefined);
    if (message.typeEnv) {
      obj.typeEnv = message.typeEnv.map(e => e ? Decl.toJSON(e) : undefined);
    } else {
      obj.typeEnv = [];
    }
    message.container !== undefined && (obj.container = message.container);
    message.noStdEnv !== undefined && (obj.noStdEnv = message.noStdEnv);
    return obj;
  },
  fromPartial(object: DeepPartial<CheckRequest>): CheckRequest {
    const message = createBaseCheckRequest();
    if (object.parsedExpr !== undefined && object.parsedExpr !== null) {
      message.parsedExpr = ParsedExpr.fromPartial(object.parsedExpr);
    }
    message.typeEnv = object.typeEnv?.map(e => Decl.fromPartial(e)) || [];
    message.container = object.container ?? "";
    message.noStdEnv = object.noStdEnv ?? false;
    return message;
  },
  fromSDK(object: CheckRequestSDKType): CheckRequest {
    return {
      parsedExpr: object.parsed_expr ? ParsedExpr.fromSDK(object.parsed_expr) : undefined,
      typeEnv: Array.isArray(object?.type_env) ? object.type_env.map((e: any) => Decl.fromSDK(e)) : [],
      container: object?.container,
      noStdEnv: object?.no_std_env
    };
  },
  fromSDKJSON(object: any): CheckRequestSDKType {
    return {
      parsed_expr: isSet(object.parsed_expr) ? ParsedExpr.fromSDKJSON(object.parsed_expr) : undefined,
      type_env: Array.isArray(object?.type_env) ? object.type_env.map((e: any) => Decl.fromSDKJSON(e)) : [],
      container: isSet(object.container) ? String(object.container) : "",
      no_std_env: isSet(object.no_std_env) ? Boolean(object.no_std_env) : false
    };
  },
  toSDK(message: CheckRequest): CheckRequestSDKType {
    const obj: any = {};
    message.parsedExpr !== undefined && (obj.parsed_expr = message.parsedExpr ? ParsedExpr.toSDK(message.parsedExpr) : undefined);
    if (message.typeEnv) {
      obj.type_env = message.typeEnv.map(e => e ? Decl.toSDK(e) : undefined);
    } else {
      obj.type_env = [];
    }
    obj.container = message.container;
    obj.no_std_env = message.noStdEnv;
    return obj;
  },
  fromAmino(object: CheckRequestAmino): CheckRequest {
    const message = createBaseCheckRequest();
    if (object.parsed_expr !== undefined && object.parsed_expr !== null) {
      message.parsedExpr = ParsedExpr.fromAmino(object.parsed_expr);
    }
    message.typeEnv = object.type_env?.map(e => Decl.fromAmino(e)) || [];
    if (object.container !== undefined && object.container !== null) {
      message.container = object.container;
    }
    if (object.no_std_env !== undefined && object.no_std_env !== null) {
      message.noStdEnv = object.no_std_env;
    }
    return message;
  },
  toAmino(message: CheckRequest): CheckRequestAmino {
    const obj: any = {};
    obj.parsed_expr = message.parsedExpr ? ParsedExpr.toAmino(message.parsedExpr) : undefined;
    if (message.typeEnv) {
      obj.type_env = message.typeEnv.map(e => e ? Decl.toAmino(e) : undefined);
    } else {
      obj.type_env = message.typeEnv;
    }
    obj.container = message.container === "" ? undefined : message.container;
    obj.no_std_env = message.noStdEnv === false ? undefined : message.noStdEnv;
    return obj;
  },
  fromAminoMsg(object: CheckRequestAminoMsg): CheckRequest {
    return CheckRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CheckRequestProtoMsg): CheckRequest {
    return CheckRequest.decode(message.value);
  },
  toProto(message: CheckRequest): Uint8Array {
    return CheckRequest.encode(message).finish();
  },
  toProtoMsg(message: CheckRequest): CheckRequestProtoMsg {
    return {
      typeUrl: "/google.api.expr.conformance.v1alpha1.CheckRequest",
      value: CheckRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ParsedExpr.registerTypeUrl();
    Decl.registerTypeUrl();
  }
};
function createBaseCheckResponse(): CheckResponse {
  return {
    checkedExpr: undefined,
    issues: []
  };
}
export const CheckResponse = {
  typeUrl: "/google.api.expr.conformance.v1alpha1.CheckResponse",
  is(o: any): o is CheckResponse {
    return o && (o.$typeUrl === CheckResponse.typeUrl || Array.isArray(o.issues) && (!o.issues.length || Status.is(o.issues[0])));
  },
  isSDK(o: any): o is CheckResponseSDKType {
    return o && (o.$typeUrl === CheckResponse.typeUrl || Array.isArray(o.issues) && (!o.issues.length || Status.isSDK(o.issues[0])));
  },
  isAmino(o: any): o is CheckResponseAmino {
    return o && (o.$typeUrl === CheckResponse.typeUrl || Array.isArray(o.issues) && (!o.issues.length || Status.isAmino(o.issues[0])));
  },
  encode(message: CheckResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.checkedExpr !== undefined) {
      CheckedExpr.encode(message.checkedExpr, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.issues) {
      Status.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CheckResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.checkedExpr = CheckedExpr.decode(reader, reader.uint32());
          break;
        case 2:
          message.issues.push(Status.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CheckResponse {
    const obj = createBaseCheckResponse();
    if (isSet(object.checkedExpr)) obj.checkedExpr = CheckedExpr.fromJSON(object.checkedExpr);
    if (Array.isArray(object?.issues)) obj.issues = object.issues.map((e: any) => Status.fromJSON(e));
    return obj;
  },
  toJSON(message: CheckResponse): JsonSafe<CheckResponse> {
    const obj: any = {};
    message.checkedExpr !== undefined && (obj.checkedExpr = message.checkedExpr ? CheckedExpr.toJSON(message.checkedExpr) : undefined);
    if (message.issues) {
      obj.issues = message.issues.map(e => e ? Status.toJSON(e) : undefined);
    } else {
      obj.issues = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<CheckResponse>): CheckResponse {
    const message = createBaseCheckResponse();
    if (object.checkedExpr !== undefined && object.checkedExpr !== null) {
      message.checkedExpr = CheckedExpr.fromPartial(object.checkedExpr);
    }
    message.issues = object.issues?.map(e => Status.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: CheckResponseSDKType): CheckResponse {
    return {
      checkedExpr: object.checked_expr ? CheckedExpr.fromSDK(object.checked_expr) : undefined,
      issues: Array.isArray(object?.issues) ? object.issues.map((e: any) => Status.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): CheckResponseSDKType {
    return {
      checked_expr: isSet(object.checked_expr) ? CheckedExpr.fromSDKJSON(object.checked_expr) : undefined,
      issues: Array.isArray(object?.issues) ? object.issues.map((e: any) => Status.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: CheckResponse): CheckResponseSDKType {
    const obj: any = {};
    message.checkedExpr !== undefined && (obj.checked_expr = message.checkedExpr ? CheckedExpr.toSDK(message.checkedExpr) : undefined);
    if (message.issues) {
      obj.issues = message.issues.map(e => e ? Status.toSDK(e) : undefined);
    } else {
      obj.issues = [];
    }
    return obj;
  },
  fromAmino(object: CheckResponseAmino): CheckResponse {
    const message = createBaseCheckResponse();
    if (object.checked_expr !== undefined && object.checked_expr !== null) {
      message.checkedExpr = CheckedExpr.fromAmino(object.checked_expr);
    }
    message.issues = object.issues?.map(e => Status.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CheckResponse): CheckResponseAmino {
    const obj: any = {};
    obj.checked_expr = message.checkedExpr ? CheckedExpr.toAmino(message.checkedExpr) : undefined;
    if (message.issues) {
      obj.issues = message.issues.map(e => e ? Status.toAmino(e) : undefined);
    } else {
      obj.issues = message.issues;
    }
    return obj;
  },
  fromAminoMsg(object: CheckResponseAminoMsg): CheckResponse {
    return CheckResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: CheckResponseProtoMsg): CheckResponse {
    return CheckResponse.decode(message.value);
  },
  toProto(message: CheckResponse): Uint8Array {
    return CheckResponse.encode(message).finish();
  },
  toProtoMsg(message: CheckResponse): CheckResponseProtoMsg {
    return {
      typeUrl: "/google.api.expr.conformance.v1alpha1.CheckResponse",
      value: CheckResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    CheckedExpr.registerTypeUrl();
    Status.registerTypeUrl();
  }
};
function createBaseEvalRequest_BindingsEntry(): EvalRequest_BindingsEntry {
  return {
    key: "",
    value: undefined
  };
}
export const EvalRequest_BindingsEntry = {
  encode(message: EvalRequest_BindingsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ExprValue.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EvalRequest_BindingsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalRequest_BindingsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ExprValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvalRequest_BindingsEntry {
    const obj = createBaseEvalRequest_BindingsEntry();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = ExprValue.fromJSON(object.value);
    return obj;
  },
  toJSON(message: EvalRequest_BindingsEntry): JsonSafe<EvalRequest_BindingsEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? ExprValue.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<EvalRequest_BindingsEntry>): EvalRequest_BindingsEntry {
    const message = createBaseEvalRequest_BindingsEntry();
    message.key = object.key ?? "";
    if (object.value !== undefined && object.value !== null) {
      message.value = ExprValue.fromPartial(object.value);
    }
    return message;
  },
  fromSDK(object: EvalRequest_BindingsEntrySDKType): EvalRequest_BindingsEntry {
    return {
      key: object?.key,
      value: object.value ? ExprValue.fromSDK(object.value) : undefined
    };
  },
  fromSDKJSON(object: any): EvalRequest_BindingsEntrySDKType {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? ExprValue.fromSDKJSON(object.value) : undefined
    };
  },
  toSDK(message: EvalRequest_BindingsEntry): EvalRequest_BindingsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    message.value !== undefined && (obj.value = message.value ? ExprValue.toSDK(message.value) : undefined);
    return obj;
  },
  fromAmino(object: EvalRequest_BindingsEntryAmino): EvalRequest_BindingsEntry {
    const message = createBaseEvalRequest_BindingsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ExprValue.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: EvalRequest_BindingsEntry): EvalRequest_BindingsEntryAmino {
    const obj: any = {};
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value ? ExprValue.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: EvalRequest_BindingsEntryAminoMsg): EvalRequest_BindingsEntry {
    return EvalRequest_BindingsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: EvalRequest_BindingsEntryProtoMsg): EvalRequest_BindingsEntry {
    return EvalRequest_BindingsEntry.decode(message.value);
  },
  toProto(message: EvalRequest_BindingsEntry): Uint8Array {
    return EvalRequest_BindingsEntry.encode(message).finish();
  },
  registerTypeUrl() {
    ExprValue.registerTypeUrl();
  }
};
function createBaseEvalRequest(): EvalRequest {
  return {
    parsedExpr: undefined,
    checkedExpr: undefined,
    bindings: {},
    container: ""
  };
}
export const EvalRequest = {
  typeUrl: "/google.api.expr.conformance.v1alpha1.EvalRequest",
  is(o: any): o is EvalRequest {
    return o && (o.$typeUrl === EvalRequest.typeUrl || isSet(o.bindings) && typeof o.container === "string");
  },
  isSDK(o: any): o is EvalRequestSDKType {
    return o && (o.$typeUrl === EvalRequest.typeUrl || isSet(o.bindings) && typeof o.container === "string");
  },
  isAmino(o: any): o is EvalRequestAmino {
    return o && (o.$typeUrl === EvalRequest.typeUrl || isSet(o.bindings) && typeof o.container === "string");
  },
  encode(message: EvalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.parsedExpr !== undefined) {
      ParsedExpr.encode(message.parsedExpr, writer.uint32(10).fork()).ldelim();
    }
    if (message.checkedExpr !== undefined) {
      CheckedExpr.encode(message.checkedExpr, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.bindings).forEach(([key, value]) => {
      EvalRequest_BindingsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.container !== undefined) {
      writer.uint32(34).string(message.container);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EvalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parsedExpr = ParsedExpr.decode(reader, reader.uint32());
          break;
        case 2:
          message.checkedExpr = CheckedExpr.decode(reader, reader.uint32());
          break;
        case 3:
          const entry3 = EvalRequest_BindingsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.bindings[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.container = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvalRequest {
    const obj = createBaseEvalRequest();
    if (isSet(object.parsedExpr)) obj.parsedExpr = ParsedExpr.fromJSON(object.parsedExpr);
    if (isSet(object.checkedExpr)) obj.checkedExpr = CheckedExpr.fromJSON(object.checkedExpr);
    if (isObject(object.bindings)) obj.bindings = Object.entries(object.bindings).reduce<{
      [key: string]: ExprValue;
    }>((acc, [key, value]) => {
      acc[key] = ExprValue.fromJSON(value);
      return acc;
    }, {});
    if (isSet(object.container)) obj.container = String(object.container);
    return obj;
  },
  toJSON(message: EvalRequest): JsonSafe<EvalRequest> {
    const obj: any = {};
    message.parsedExpr !== undefined && (obj.parsedExpr = message.parsedExpr ? ParsedExpr.toJSON(message.parsedExpr) : undefined);
    message.checkedExpr !== undefined && (obj.checkedExpr = message.checkedExpr ? CheckedExpr.toJSON(message.checkedExpr) : undefined);
    obj.bindings = {};
    if (message.bindings) {
      Object.entries(message.bindings).forEach(([k, v]) => {
        obj.bindings[k] = ExprValue.toJSON(v);
      });
    }
    message.container !== undefined && (obj.container = message.container);
    return obj;
  },
  fromPartial(object: DeepPartial<EvalRequest>): EvalRequest {
    const message = createBaseEvalRequest();
    if (object.parsedExpr !== undefined && object.parsedExpr !== null) {
      message.parsedExpr = ParsedExpr.fromPartial(object.parsedExpr);
    }
    if (object.checkedExpr !== undefined && object.checkedExpr !== null) {
      message.checkedExpr = CheckedExpr.fromPartial(object.checkedExpr);
    }
    message.bindings = Object.entries(object.bindings ?? {}).reduce<{
      [key: string]: ExprValue;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ExprValue.fromPartial(value);
      }
      return acc;
    }, {});
    message.container = object.container ?? "";
    return message;
  },
  fromSDK(object: EvalRequestSDKType): EvalRequest {
    return {
      parsedExpr: object.parsed_expr ? ParsedExpr.fromSDK(object.parsed_expr) : undefined,
      checkedExpr: object.checked_expr ? CheckedExpr.fromSDK(object.checked_expr) : undefined,
      bindings: isObject(object.bindings) ? Object.entries(object.bindings).reduce<{
        [key: string]: ExprValue;
      }>((acc, [key, value]) => {
        acc[key] = ExprValue.fromSDK(value);
        return acc;
      }, {}) : {},
      container: object?.container
    };
  },
  fromSDKJSON(object: any): EvalRequestSDKType {
    return {
      parsed_expr: isSet(object.parsed_expr) ? ParsedExpr.fromSDKJSON(object.parsed_expr) : undefined,
      checked_expr: isSet(object.checked_expr) ? CheckedExpr.fromSDKJSON(object.checked_expr) : undefined,
      bindings: isObject(object.bindings) ? Object.entries(object.bindings).reduce<{
        [key: string]: ExprValue;
      }>((acc, [key, value]) => {
        acc[key] = ExprValue.fromSDKJSON(value);
        return acc;
      }, {}) : {},
      container: isSet(object.container) ? String(object.container) : ""
    };
  },
  toSDK(message: EvalRequest): EvalRequestSDKType {
    const obj: any = {};
    message.parsedExpr !== undefined && (obj.parsed_expr = message.parsedExpr ? ParsedExpr.toSDK(message.parsedExpr) : undefined);
    message.checkedExpr !== undefined && (obj.checked_expr = message.checkedExpr ? CheckedExpr.toSDK(message.checkedExpr) : undefined);
    obj.bindings = {};
    if (message.bindings) {
      Object.entries(message.bindings).forEach(([k, v]) => {
        obj.bindings[k] = ExprValue.toSDK(v);
      });
    }
    obj.container = message.container;
    return obj;
  },
  fromAmino(object: EvalRequestAmino): EvalRequest {
    const message = createBaseEvalRequest();
    if (object.parsed_expr !== undefined && object.parsed_expr !== null) {
      message.parsedExpr = ParsedExpr.fromAmino(object.parsed_expr);
    }
    if (object.checked_expr !== undefined && object.checked_expr !== null) {
      message.checkedExpr = CheckedExpr.fromAmino(object.checked_expr);
    }
    message.bindings = Object.entries(object.bindings ?? {}).reduce<{
      [key: string]: ExprValue;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ExprValue.fromAmino(value);
      }
      return acc;
    }, {});
    if (object.container !== undefined && object.container !== null) {
      message.container = object.container;
    }
    return message;
  },
  toAmino(message: EvalRequest): EvalRequestAmino {
    const obj: any = {};
    obj.parsed_expr = message.parsedExpr ? ParsedExpr.toAmino(message.parsedExpr) : undefined;
    obj.checked_expr = message.checkedExpr ? CheckedExpr.toAmino(message.checkedExpr) : undefined;
    obj.bindings = {};
    if (message.bindings) {
      Object.entries(message.bindings).forEach(([k, v]) => {
        obj.bindings[k] = ExprValue.toAmino(v);
      });
    }
    obj.container = message.container === "" ? undefined : message.container;
    return obj;
  },
  fromAminoMsg(object: EvalRequestAminoMsg): EvalRequest {
    return EvalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: EvalRequestProtoMsg): EvalRequest {
    return EvalRequest.decode(message.value);
  },
  toProto(message: EvalRequest): Uint8Array {
    return EvalRequest.encode(message).finish();
  },
  toProtoMsg(message: EvalRequest): EvalRequestProtoMsg {
    return {
      typeUrl: "/google.api.expr.conformance.v1alpha1.EvalRequest",
      value: EvalRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ParsedExpr.registerTypeUrl();
    CheckedExpr.registerTypeUrl();
    ExprValue.registerTypeUrl();
  }
};
function createBaseEvalResponse(): EvalResponse {
  return {
    result: undefined,
    issues: []
  };
}
export const EvalResponse = {
  typeUrl: "/google.api.expr.conformance.v1alpha1.EvalResponse",
  is(o: any): o is EvalResponse {
    return o && (o.$typeUrl === EvalResponse.typeUrl || Array.isArray(o.issues) && (!o.issues.length || Status.is(o.issues[0])));
  },
  isSDK(o: any): o is EvalResponseSDKType {
    return o && (o.$typeUrl === EvalResponse.typeUrl || Array.isArray(o.issues) && (!o.issues.length || Status.isSDK(o.issues[0])));
  },
  isAmino(o: any): o is EvalResponseAmino {
    return o && (o.$typeUrl === EvalResponse.typeUrl || Array.isArray(o.issues) && (!o.issues.length || Status.isAmino(o.issues[0])));
  },
  encode(message: EvalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== undefined) {
      ExprValue.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.issues) {
      Status.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EvalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = ExprValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.issues.push(Status.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvalResponse {
    const obj = createBaseEvalResponse();
    if (isSet(object.result)) obj.result = ExprValue.fromJSON(object.result);
    if (Array.isArray(object?.issues)) obj.issues = object.issues.map((e: any) => Status.fromJSON(e));
    return obj;
  },
  toJSON(message: EvalResponse): JsonSafe<EvalResponse> {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result ? ExprValue.toJSON(message.result) : undefined);
    if (message.issues) {
      obj.issues = message.issues.map(e => e ? Status.toJSON(e) : undefined);
    } else {
      obj.issues = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EvalResponse>): EvalResponse {
    const message = createBaseEvalResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = ExprValue.fromPartial(object.result);
    }
    message.issues = object.issues?.map(e => Status.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: EvalResponseSDKType): EvalResponse {
    return {
      result: object.result ? ExprValue.fromSDK(object.result) : undefined,
      issues: Array.isArray(object?.issues) ? object.issues.map((e: any) => Status.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): EvalResponseSDKType {
    return {
      result: isSet(object.result) ? ExprValue.fromSDKJSON(object.result) : undefined,
      issues: Array.isArray(object?.issues) ? object.issues.map((e: any) => Status.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: EvalResponse): EvalResponseSDKType {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result ? ExprValue.toSDK(message.result) : undefined);
    if (message.issues) {
      obj.issues = message.issues.map(e => e ? Status.toSDK(e) : undefined);
    } else {
      obj.issues = [];
    }
    return obj;
  },
  fromAmino(object: EvalResponseAmino): EvalResponse {
    const message = createBaseEvalResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = ExprValue.fromAmino(object.result);
    }
    message.issues = object.issues?.map(e => Status.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EvalResponse): EvalResponseAmino {
    const obj: any = {};
    obj.result = message.result ? ExprValue.toAmino(message.result) : undefined;
    if (message.issues) {
      obj.issues = message.issues.map(e => e ? Status.toAmino(e) : undefined);
    } else {
      obj.issues = message.issues;
    }
    return obj;
  },
  fromAminoMsg(object: EvalResponseAminoMsg): EvalResponse {
    return EvalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: EvalResponseProtoMsg): EvalResponse {
    return EvalResponse.decode(message.value);
  },
  toProto(message: EvalResponse): Uint8Array {
    return EvalResponse.encode(message).finish();
  },
  toProtoMsg(message: EvalResponse): EvalResponseProtoMsg {
    return {
      typeUrl: "/google.api.expr.conformance.v1alpha1.EvalResponse",
      value: EvalResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    ExprValue.registerTypeUrl();
    Status.registerTypeUrl();
  }
};
function createBaseIssueDetails(): IssueDetails {
  return {
    severity: 0,
    position: undefined,
    id: BigInt(0)
  };
}
export const IssueDetails = {
  typeUrl: "/google.api.expr.conformance.v1alpha1.IssueDetails",
  is(o: any): o is IssueDetails {
    return o && (o.$typeUrl === IssueDetails.typeUrl || isSet(o.severity) && typeof o.id === "bigint");
  },
  isSDK(o: any): o is IssueDetailsSDKType {
    return o && (o.$typeUrl === IssueDetails.typeUrl || isSet(o.severity) && typeof o.id === "bigint");
  },
  isAmino(o: any): o is IssueDetailsAmino {
    return o && (o.$typeUrl === IssueDetails.typeUrl || isSet(o.severity) && typeof o.id === "bigint");
  },
  encode(message: IssueDetails, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.severity !== 0) {
      writer.uint32(8).int32(message.severity);
    }
    if (message.position !== undefined) {
      SourcePosition.encode(message.position, writer.uint32(18).fork()).ldelim();
    }
    if (message.id !== undefined) {
      writer.uint32(24).int64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IssueDetails {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIssueDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.severity = (reader.int32() as any);
          break;
        case 2:
          message.position = SourcePosition.decode(reader, reader.uint32());
          break;
        case 3:
          message.id = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IssueDetails {
    const obj = createBaseIssueDetails();
    if (isSet(object.severity)) obj.severity = issueDetails_SeverityFromJSON(object.severity);
    if (isSet(object.position)) obj.position = SourcePosition.fromJSON(object.position);
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    return obj;
  },
  toJSON(message: IssueDetails): JsonSafe<IssueDetails> {
    const obj: any = {};
    message.severity !== undefined && (obj.severity = issueDetails_SeverityToJSON(message.severity));
    message.position !== undefined && (obj.position = message.position ? SourcePosition.toJSON(message.position) : undefined);
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<IssueDetails>): IssueDetails {
    const message = createBaseIssueDetails();
    message.severity = object.severity ?? 0;
    if (object.position !== undefined && object.position !== null) {
      message.position = SourcePosition.fromPartial(object.position);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    return message;
  },
  fromSDK(object: IssueDetailsSDKType): IssueDetails {
    return {
      severity: isSet(object.severity) ? issueDetails_SeverityFromJSON(object.severity) : -1,
      position: object.position ? SourcePosition.fromSDK(object.position) : undefined,
      id: object?.id
    };
  },
  fromSDKJSON(object: any): IssueDetailsSDKType {
    return {
      severity: isSet(object.severity) ? issueDetails_SeverityFromJSON(object.severity) : -1,
      position: isSet(object.position) ? SourcePosition.fromSDKJSON(object.position) : undefined,
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  toSDK(message: IssueDetails): IssueDetailsSDKType {
    const obj: any = {};
    message.severity !== undefined && (obj.severity = issueDetails_SeverityToJSON(message.severity));
    message.position !== undefined && (obj.position = message.position ? SourcePosition.toSDK(message.position) : undefined);
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: IssueDetailsAmino): IssueDetails {
    const message = createBaseIssueDetails();
    if (object.severity !== undefined && object.severity !== null) {
      message.severity = object.severity;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = SourcePosition.fromAmino(object.position);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: IssueDetails): IssueDetailsAmino {
    const obj: any = {};
    obj.severity = message.severity === 0 ? undefined : message.severity;
    obj.position = message.position ? SourcePosition.toAmino(message.position) : undefined;
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: IssueDetailsAminoMsg): IssueDetails {
    return IssueDetails.fromAmino(object.value);
  },
  fromProtoMsg(message: IssueDetailsProtoMsg): IssueDetails {
    return IssueDetails.decode(message.value);
  },
  toProto(message: IssueDetails): Uint8Array {
    return IssueDetails.encode(message).finish();
  },
  toProtoMsg(message: IssueDetails): IssueDetailsProtoMsg {
    return {
      typeUrl: "/google.api.expr.conformance.v1alpha1.IssueDetails",
      value: IssueDetails.encode(message).finish()
    };
  },
  registerTypeUrl() {
    SourcePosition.registerTypeUrl();
  }
};