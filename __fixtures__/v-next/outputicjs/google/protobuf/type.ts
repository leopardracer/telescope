import { SourceContext, SourceContextAmino } from "./source_context";
import { Any, AnyAmino } from "./any";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** Basic field types. */
export enum Field_Kind {
  /** TYPE_UNKNOWN - Field type unknown. */
  TYPE_UNKNOWN = 0,
  /** TYPE_DOUBLE - Field type double. */
  TYPE_DOUBLE = 1,
  /** TYPE_FLOAT - Field type float. */
  TYPE_FLOAT = 2,
  /** TYPE_INT64 - Field type int64. */
  TYPE_INT64 = 3,
  /** TYPE_UINT64 - Field type uint64. */
  TYPE_UINT64 = 4,
  /** TYPE_INT32 - Field type int32. */
  TYPE_INT32 = 5,
  /** TYPE_FIXED64 - Field type fixed64. */
  TYPE_FIXED64 = 6,
  /** TYPE_FIXED32 - Field type fixed32. */
  TYPE_FIXED32 = 7,
  /** TYPE_BOOL - Field type bool. */
  TYPE_BOOL = 8,
  /** TYPE_STRING - Field type string. */
  TYPE_STRING = 9,
  /** TYPE_GROUP - Field type group. Proto2 syntax only, and deprecated. */
  TYPE_GROUP = 10,
  /** TYPE_MESSAGE - Field type message. */
  TYPE_MESSAGE = 11,
  /** TYPE_BYTES - Field type bytes. */
  TYPE_BYTES = 12,
  /** TYPE_UINT32 - Field type uint32. */
  TYPE_UINT32 = 13,
  /** TYPE_ENUM - Field type enum. */
  TYPE_ENUM = 14,
  /** TYPE_SFIXED32 - Field type sfixed32. */
  TYPE_SFIXED32 = 15,
  /** TYPE_SFIXED64 - Field type sfixed64. */
  TYPE_SFIXED64 = 16,
  /** TYPE_SINT32 - Field type sint32. */
  TYPE_SINT32 = 17,
  /** TYPE_SINT64 - Field type sint64. */
  TYPE_SINT64 = 18,
  UNRECOGNIZED = -1,
}
export const Field_KindAmino = Field_Kind;
export function field_KindFromJSON(object: any): Field_Kind {
  switch (object) {
    case 0:
    case "TYPE_UNKNOWN":
      return Field_Kind.TYPE_UNKNOWN;
    case 1:
    case "TYPE_DOUBLE":
      return Field_Kind.TYPE_DOUBLE;
    case 2:
    case "TYPE_FLOAT":
      return Field_Kind.TYPE_FLOAT;
    case 3:
    case "TYPE_INT64":
      return Field_Kind.TYPE_INT64;
    case 4:
    case "TYPE_UINT64":
      return Field_Kind.TYPE_UINT64;
    case 5:
    case "TYPE_INT32":
      return Field_Kind.TYPE_INT32;
    case 6:
    case "TYPE_FIXED64":
      return Field_Kind.TYPE_FIXED64;
    case 7:
    case "TYPE_FIXED32":
      return Field_Kind.TYPE_FIXED32;
    case 8:
    case "TYPE_BOOL":
      return Field_Kind.TYPE_BOOL;
    case 9:
    case "TYPE_STRING":
      return Field_Kind.TYPE_STRING;
    case 10:
    case "TYPE_GROUP":
      return Field_Kind.TYPE_GROUP;
    case 11:
    case "TYPE_MESSAGE":
      return Field_Kind.TYPE_MESSAGE;
    case 12:
    case "TYPE_BYTES":
      return Field_Kind.TYPE_BYTES;
    case 13:
    case "TYPE_UINT32":
      return Field_Kind.TYPE_UINT32;
    case 14:
    case "TYPE_ENUM":
      return Field_Kind.TYPE_ENUM;
    case 15:
    case "TYPE_SFIXED32":
      return Field_Kind.TYPE_SFIXED32;
    case 16:
    case "TYPE_SFIXED64":
      return Field_Kind.TYPE_SFIXED64;
    case 17:
    case "TYPE_SINT32":
      return Field_Kind.TYPE_SINT32;
    case 18:
    case "TYPE_SINT64":
      return Field_Kind.TYPE_SINT64;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Field_Kind.UNRECOGNIZED;
  }
}
export function field_KindToJSON(object: Field_Kind): string {
  switch (object) {
    case Field_Kind.TYPE_UNKNOWN:
      return "TYPE_UNKNOWN";
    case Field_Kind.TYPE_DOUBLE:
      return "TYPE_DOUBLE";
    case Field_Kind.TYPE_FLOAT:
      return "TYPE_FLOAT";
    case Field_Kind.TYPE_INT64:
      return "TYPE_INT64";
    case Field_Kind.TYPE_UINT64:
      return "TYPE_UINT64";
    case Field_Kind.TYPE_INT32:
      return "TYPE_INT32";
    case Field_Kind.TYPE_FIXED64:
      return "TYPE_FIXED64";
    case Field_Kind.TYPE_FIXED32:
      return "TYPE_FIXED32";
    case Field_Kind.TYPE_BOOL:
      return "TYPE_BOOL";
    case Field_Kind.TYPE_STRING:
      return "TYPE_STRING";
    case Field_Kind.TYPE_GROUP:
      return "TYPE_GROUP";
    case Field_Kind.TYPE_MESSAGE:
      return "TYPE_MESSAGE";
    case Field_Kind.TYPE_BYTES:
      return "TYPE_BYTES";
    case Field_Kind.TYPE_UINT32:
      return "TYPE_UINT32";
    case Field_Kind.TYPE_ENUM:
      return "TYPE_ENUM";
    case Field_Kind.TYPE_SFIXED32:
      return "TYPE_SFIXED32";
    case Field_Kind.TYPE_SFIXED64:
      return "TYPE_SFIXED64";
    case Field_Kind.TYPE_SINT32:
      return "TYPE_SINT32";
    case Field_Kind.TYPE_SINT64:
      return "TYPE_SINT64";
    case Field_Kind.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Whether a field is optional, required, or repeated. */
export enum Field_Cardinality {
  /** CARDINALITY_UNKNOWN - For fields with unknown cardinality. */
  CARDINALITY_UNKNOWN = 0,
  /** CARDINALITY_OPTIONAL - For optional fields. */
  CARDINALITY_OPTIONAL = 1,
  /** CARDINALITY_REQUIRED - For required fields. Proto2 syntax only. */
  CARDINALITY_REQUIRED = 2,
  /** CARDINALITY_REPEATED - For repeated fields. */
  CARDINALITY_REPEATED = 3,
  UNRECOGNIZED = -1,
}
export const Field_CardinalityAmino = Field_Cardinality;
export function field_CardinalityFromJSON(object: any): Field_Cardinality {
  switch (object) {
    case 0:
    case "CARDINALITY_UNKNOWN":
      return Field_Cardinality.CARDINALITY_UNKNOWN;
    case 1:
    case "CARDINALITY_OPTIONAL":
      return Field_Cardinality.CARDINALITY_OPTIONAL;
    case 2:
    case "CARDINALITY_REQUIRED":
      return Field_Cardinality.CARDINALITY_REQUIRED;
    case 3:
    case "CARDINALITY_REPEATED":
      return Field_Cardinality.CARDINALITY_REPEATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Field_Cardinality.UNRECOGNIZED;
  }
}
export function field_CardinalityToJSON(object: Field_Cardinality): string {
  switch (object) {
    case Field_Cardinality.CARDINALITY_UNKNOWN:
      return "CARDINALITY_UNKNOWN";
    case Field_Cardinality.CARDINALITY_OPTIONAL:
      return "CARDINALITY_OPTIONAL";
    case Field_Cardinality.CARDINALITY_REQUIRED:
      return "CARDINALITY_REQUIRED";
    case Field_Cardinality.CARDINALITY_REPEATED:
      return "CARDINALITY_REPEATED";
    case Field_Cardinality.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** The syntax in which a protocol buffer element is defined. */
export enum Syntax {
  /** SYNTAX_PROTO2 - Syntax `proto2`. */
  SYNTAX_PROTO2 = 0,
  /** SYNTAX_PROTO3 - Syntax `proto3`. */
  SYNTAX_PROTO3 = 1,
  UNRECOGNIZED = -1,
}
export const SyntaxAmino = Syntax;
export function syntaxFromJSON(object: any): Syntax {
  switch (object) {
    case 0:
    case "SYNTAX_PROTO2":
      return Syntax.SYNTAX_PROTO2;
    case 1:
    case "SYNTAX_PROTO3":
      return Syntax.SYNTAX_PROTO3;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Syntax.UNRECOGNIZED;
  }
}
export function syntaxToJSON(object: Syntax): string {
  switch (object) {
    case Syntax.SYNTAX_PROTO2:
      return "SYNTAX_PROTO2";
    case Syntax.SYNTAX_PROTO3:
      return "SYNTAX_PROTO3";
    case Syntax.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** A protocol buffer message type. */
export interface Type {
  /** The fully qualified message name. */
  name: string;
  /** The list of fields. */
  fields: Field[];
  /** The list of types appearing in `oneof` definitions in this type. */
  oneofs: string[];
  /** The protocol buffer options. */
  options: Option[];
  /** The source context. */
  sourceContext?: SourceContext;
  /** The source syntax. */
  syntax: Syntax;
}
export interface TypeProtoMsg {
  typeUrl: "/google.protobuf.Type";
  value: Uint8Array;
}
/** A protocol buffer message type. */
export interface TypeAmino {
  /** The fully qualified message name. */
  name: string;
  /** The list of fields. */
  fields: FieldAmino[];
  /** The list of types appearing in `oneof` definitions in this type. */
  oneofs: string[];
  /** The protocol buffer options. */
  options: OptionAmino[];
  /** The source context. */
  source_context?: SourceContextAmino;
  /** The source syntax. */
  syntax: Syntax;
}
export interface TypeAminoMsg {
  type: "/google.protobuf.Type";
  value: TypeAmino;
}
/** A single field of a message type. */
export interface Field {
  /** The field type. */
  kind: Field_Kind;
  /** The field cardinality. */
  cardinality: Field_Cardinality;
  /** The field number. */
  number: number;
  /** The field name. */
  name: string;
  /**
   * The field type URL, without the scheme, for message or enumeration
   * types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.
   */
  typeUrl: string;
  /**
   * The index of the field type in `Type.oneofs`, for message or enumeration
   * types. The first type has index 1; zero means the type is not in the list.
   */
  oneofIndex: number;
  /** Whether to use alternative packed wire representation. */
  packed: boolean;
  /** The protocol buffer options. */
  options: Option[];
  /** The field JSON name. */
  jsonName: string;
  /** The string value of the default value of this field. Proto2 syntax only. */
  defaultValue: string;
}
export interface FieldProtoMsg {
  typeUrl: "/google.protobuf.Field";
  value: Uint8Array;
}
/** A single field of a message type. */
export interface FieldAmino {
  /** The field type. */
  kind: Field_Kind;
  /** The field cardinality. */
  cardinality: Field_Cardinality;
  /** The field number. */
  number: number;
  /** The field name. */
  name: string;
  /**
   * The field type URL, without the scheme, for message or enumeration
   * types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.
   */
  type_url: string;
  /**
   * The index of the field type in `Type.oneofs`, for message or enumeration
   * types. The first type has index 1; zero means the type is not in the list.
   */
  oneof_index: number;
  /** Whether to use alternative packed wire representation. */
  packed: boolean;
  /** The protocol buffer options. */
  options: OptionAmino[];
  /** The field JSON name. */
  json_name: string;
  /** The string value of the default value of this field. Proto2 syntax only. */
  default_value: string;
}
export interface FieldAminoMsg {
  type: "/google.protobuf.Field";
  value: FieldAmino;
}
/** Enum type definition. */
export interface Enum {
  /** Enum type name. */
  name: string;
  /** Enum value definitions. */
  enumvalue: EnumValue[];
  /** Protocol buffer options. */
  options: Option[];
  /** The source context. */
  sourceContext?: SourceContext;
  /** The source syntax. */
  syntax: Syntax;
}
export interface EnumProtoMsg {
  typeUrl: "/google.protobuf.Enum";
  value: Uint8Array;
}
/** Enum type definition. */
export interface EnumAmino {
  /** Enum type name. */
  name: string;
  /** Enum value definitions. */
  enumvalue: EnumValueAmino[];
  /** Protocol buffer options. */
  options: OptionAmino[];
  /** The source context. */
  source_context?: SourceContextAmino;
  /** The source syntax. */
  syntax: Syntax;
}
export interface EnumAminoMsg {
  type: "/google.protobuf.Enum";
  value: EnumAmino;
}
/** Enum value definition. */
export interface EnumValue {
  /** Enum value name. */
  name: string;
  /** Enum value number. */
  number: number;
  /** Protocol buffer options. */
  options: Option[];
}
export interface EnumValueProtoMsg {
  typeUrl: "/google.protobuf.EnumValue";
  value: Uint8Array;
}
/** Enum value definition. */
export interface EnumValueAmino {
  /** Enum value name. */
  name: string;
  /** Enum value number. */
  number: number;
  /** Protocol buffer options. */
  options: OptionAmino[];
}
export interface EnumValueAminoMsg {
  type: "/google.protobuf.EnumValue";
  value: EnumValueAmino;
}
/**
 * A protocol buffer option, which can be attached to a message, field,
 * enumeration, etc.
 */
export interface Option {
  /**
   * The option's name. For protobuf built-in options (options defined in
   * descriptor.proto), this is the short name. For example, `"map_entry"`.
   * For custom options, it should be the fully-qualified name. For example,
   * `"google.api.http"`.
   */
  name: string;
  /**
   * The option's value packed in an Any message. If the value is a primitive,
   * the corresponding wrapper type defined in google/protobuf/wrappers.proto
   * should be used. If the value is an enum, it should be stored as an int32
   * value using the google.protobuf.Int32Value type.
   */
  value?: Any;
}
export interface OptionProtoMsg {
  typeUrl: "/google.protobuf.Option";
  value: Uint8Array;
}
/**
 * A protocol buffer option, which can be attached to a message, field,
 * enumeration, etc.
 */
export interface OptionAmino {
  /**
   * The option's name. For protobuf built-in options (options defined in
   * descriptor.proto), this is the short name. For example, `"map_entry"`.
   * For custom options, it should be the fully-qualified name. For example,
   * `"google.api.http"`.
   */
  name: string;
  /**
   * The option's value packed in an Any message. If the value is a primitive,
   * the corresponding wrapper type defined in google/protobuf/wrappers.proto
   * should be used. If the value is an enum, it should be stored as an int32
   * value using the google.protobuf.Int32Value type.
   */
  value?: AnyAmino;
}
export interface OptionAminoMsg {
  type: "/google.protobuf.Option";
  value: OptionAmino;
}
function createBaseType(): Type {
  return {
    name: "",
    fields: [],
    oneofs: [],
    options: [],
    sourceContext: undefined,
    syntax: 0
  };
}
export const Type = {
  typeUrl: "/google.protobuf.Type",
  encode(message: Type, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.fields) {
      Field.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.oneofs) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.options) {
      Option.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.sourceContext !== undefined) {
      SourceContext.encode(message.sourceContext, writer.uint32(42).fork()).ldelim();
    }
    if (message.syntax !== 0) {
      writer.uint32(48).int32(message.syntax);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Type {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.fields.push(Field.decode(reader, reader.uint32()));
          break;
        case 3:
          message.oneofs.push(reader.string());
          break;
        case 4:
          message.options.push(Option.decode(reader, reader.uint32()));
          break;
        case 5:
          message.sourceContext = SourceContext.decode(reader, reader.uint32());
          break;
        case 6:
          message.syntax = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Type>): Type {
    const message = createBaseType();
    message.name = object.name ?? "";
    message.fields = object.fields?.map(e => Field.fromPartial(e)) || [];
    message.oneofs = object.oneofs?.map(e => e) || [];
    message.options = object.options?.map(e => Option.fromPartial(e)) || [];
    message.sourceContext = object.sourceContext !== undefined && object.sourceContext !== null ? SourceContext.fromPartial(object.sourceContext) : undefined;
    message.syntax = object.syntax ?? 0;
    return message;
  },
  fromAmino(object: TypeAmino): Type {
    const message = createBaseType();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.fields = object.fields?.map(e => Field.fromAmino(e)) || [];
    message.oneofs = object.oneofs?.map(e => e) || [];
    message.options = object.options?.map(e => Option.fromAmino(e)) || [];
    if (object.source_context !== undefined && object.source_context !== null) {
      message.sourceContext = SourceContext.fromAmino(object.source_context);
    }
    if (object.syntax !== undefined && object.syntax !== null) {
      message.syntax = object.syntax;
    }
    return message;
  },
  toAmino(message: Type): TypeAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    if (message.fields) {
      obj.fields = message.fields.map(e => e ? Field.toAmino(e) : undefined);
    } else {
      obj.fields = message.fields;
    }
    if (message.oneofs) {
      obj.oneofs = message.oneofs.map(e => e);
    } else {
      obj.oneofs = message.oneofs;
    }
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toAmino(e) : undefined);
    } else {
      obj.options = message.options;
    }
    obj.source_context = message.sourceContext ? SourceContext.toAmino(message.sourceContext) : undefined;
    obj.syntax = message.syntax === 0 ? undefined : message.syntax;
    return obj;
  },
  fromAminoMsg(object: TypeAminoMsg): Type {
    return Type.fromAmino(object.value);
  },
  fromProtoMsg(message: TypeProtoMsg): Type {
    return Type.decode(message.value);
  },
  toProto(message: Type): Uint8Array {
    return Type.encode(message).finish();
  },
  toProtoMsg(message: Type): TypeProtoMsg {
    return {
      typeUrl: "/google.protobuf.Type",
      value: Type.encode(message).finish()
    };
  }
};
function createBaseField(): Field {
  return {
    kind: 0,
    cardinality: 0,
    number: 0,
    name: "",
    typeUrl: "",
    oneofIndex: 0,
    packed: false,
    options: [],
    jsonName: "",
    defaultValue: ""
  };
}
export const Field = {
  typeUrl: "/google.protobuf.Field",
  encode(message: Field, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    if (message.cardinality !== 0) {
      writer.uint32(16).int32(message.cardinality);
    }
    if (message.number !== 0) {
      writer.uint32(24).int32(message.number);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.typeUrl !== "") {
      writer.uint32(50).string(message.typeUrl);
    }
    if (message.oneofIndex !== 0) {
      writer.uint32(56).int32(message.oneofIndex);
    }
    if (message.packed === true) {
      writer.uint32(64).bool(message.packed);
    }
    for (const v of message.options) {
      Option.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.jsonName !== "") {
      writer.uint32(82).string(message.jsonName);
    }
    if (message.defaultValue !== "") {
      writer.uint32(90).string(message.defaultValue);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Field {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseField();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = (reader.int32() as any);
          break;
        case 2:
          message.cardinality = (reader.int32() as any);
          break;
        case 3:
          message.number = reader.int32();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 6:
          message.typeUrl = reader.string();
          break;
        case 7:
          message.oneofIndex = reader.int32();
          break;
        case 8:
          message.packed = reader.bool();
          break;
        case 9:
          message.options.push(Option.decode(reader, reader.uint32()));
          break;
        case 10:
          message.jsonName = reader.string();
          break;
        case 11:
          message.defaultValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Field>): Field {
    const message = createBaseField();
    message.kind = object.kind ?? 0;
    message.cardinality = object.cardinality ?? 0;
    message.number = object.number ?? 0;
    message.name = object.name ?? "";
    message.typeUrl = object.typeUrl ?? "";
    message.oneofIndex = object.oneofIndex ?? 0;
    message.packed = object.packed ?? false;
    message.options = object.options?.map(e => Option.fromPartial(e)) || [];
    message.jsonName = object.jsonName ?? "";
    message.defaultValue = object.defaultValue ?? "";
    return message;
  },
  fromAmino(object: FieldAmino): Field {
    const message = createBaseField();
    if (object.kind !== undefined && object.kind !== null) {
      message.kind = object.kind;
    }
    if (object.cardinality !== undefined && object.cardinality !== null) {
      message.cardinality = object.cardinality;
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.type_url !== undefined && object.type_url !== null) {
      message.typeUrl = object.type_url;
    }
    if (object.oneof_index !== undefined && object.oneof_index !== null) {
      message.oneofIndex = object.oneof_index;
    }
    if (object.packed !== undefined && object.packed !== null) {
      message.packed = object.packed;
    }
    message.options = object.options?.map(e => Option.fromAmino(e)) || [];
    if (object.json_name !== undefined && object.json_name !== null) {
      message.jsonName = object.json_name;
    }
    if (object.default_value !== undefined && object.default_value !== null) {
      message.defaultValue = object.default_value;
    }
    return message;
  },
  toAmino(message: Field): FieldAmino {
    const obj: any = {};
    obj.kind = message.kind === 0 ? undefined : message.kind;
    obj.cardinality = message.cardinality === 0 ? undefined : message.cardinality;
    obj.number = message.number === 0 ? undefined : message.number;
    obj.name = message.name === "" ? undefined : message.name;
    obj.type_url = message.typeUrl === "" ? undefined : message.typeUrl;
    obj.oneof_index = message.oneofIndex === 0 ? undefined : message.oneofIndex;
    obj.packed = message.packed === false ? undefined : message.packed;
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toAmino(e) : undefined);
    } else {
      obj.options = message.options;
    }
    obj.json_name = message.jsonName === "" ? undefined : message.jsonName;
    obj.default_value = message.defaultValue === "" ? undefined : message.defaultValue;
    return obj;
  },
  fromAminoMsg(object: FieldAminoMsg): Field {
    return Field.fromAmino(object.value);
  },
  fromProtoMsg(message: FieldProtoMsg): Field {
    return Field.decode(message.value);
  },
  toProto(message: Field): Uint8Array {
    return Field.encode(message).finish();
  },
  toProtoMsg(message: Field): FieldProtoMsg {
    return {
      typeUrl: "/google.protobuf.Field",
      value: Field.encode(message).finish()
    };
  }
};
function createBaseEnum(): Enum {
  return {
    name: "",
    enumvalue: [],
    options: [],
    sourceContext: undefined,
    syntax: 0
  };
}
export const Enum = {
  typeUrl: "/google.protobuf.Enum",
  encode(message: Enum, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.enumvalue) {
      EnumValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.options) {
      Option.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.sourceContext !== undefined) {
      SourceContext.encode(message.sourceContext, writer.uint32(34).fork()).ldelim();
    }
    if (message.syntax !== 0) {
      writer.uint32(40).int32(message.syntax);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Enum {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.enumvalue.push(EnumValue.decode(reader, reader.uint32()));
          break;
        case 3:
          message.options.push(Option.decode(reader, reader.uint32()));
          break;
        case 4:
          message.sourceContext = SourceContext.decode(reader, reader.uint32());
          break;
        case 5:
          message.syntax = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Enum>): Enum {
    const message = createBaseEnum();
    message.name = object.name ?? "";
    message.enumvalue = object.enumvalue?.map(e => EnumValue.fromPartial(e)) || [];
    message.options = object.options?.map(e => Option.fromPartial(e)) || [];
    message.sourceContext = object.sourceContext !== undefined && object.sourceContext !== null ? SourceContext.fromPartial(object.sourceContext) : undefined;
    message.syntax = object.syntax ?? 0;
    return message;
  },
  fromAmino(object: EnumAmino): Enum {
    const message = createBaseEnum();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.enumvalue = object.enumvalue?.map(e => EnumValue.fromAmino(e)) || [];
    message.options = object.options?.map(e => Option.fromAmino(e)) || [];
    if (object.source_context !== undefined && object.source_context !== null) {
      message.sourceContext = SourceContext.fromAmino(object.source_context);
    }
    if (object.syntax !== undefined && object.syntax !== null) {
      message.syntax = object.syntax;
    }
    return message;
  },
  toAmino(message: Enum): EnumAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    if (message.enumvalue) {
      obj.enumvalue = message.enumvalue.map(e => e ? EnumValue.toAmino(e) : undefined);
    } else {
      obj.enumvalue = message.enumvalue;
    }
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toAmino(e) : undefined);
    } else {
      obj.options = message.options;
    }
    obj.source_context = message.sourceContext ? SourceContext.toAmino(message.sourceContext) : undefined;
    obj.syntax = message.syntax === 0 ? undefined : message.syntax;
    return obj;
  },
  fromAminoMsg(object: EnumAminoMsg): Enum {
    return Enum.fromAmino(object.value);
  },
  fromProtoMsg(message: EnumProtoMsg): Enum {
    return Enum.decode(message.value);
  },
  toProto(message: Enum): Uint8Array {
    return Enum.encode(message).finish();
  },
  toProtoMsg(message: Enum): EnumProtoMsg {
    return {
      typeUrl: "/google.protobuf.Enum",
      value: Enum.encode(message).finish()
    };
  }
};
function createBaseEnumValue(): EnumValue {
  return {
    name: "",
    number: 0,
    options: []
  };
}
export const EnumValue = {
  typeUrl: "/google.protobuf.EnumValue",
  encode(message: EnumValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    for (const v of message.options) {
      Option.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EnumValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnumValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.number = reader.int32();
          break;
        case 3:
          message.options.push(Option.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EnumValue>): EnumValue {
    const message = createBaseEnumValue();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.options = object.options?.map(e => Option.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EnumValueAmino): EnumValue {
    const message = createBaseEnumValue();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    }
    message.options = object.options?.map(e => Option.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EnumValue): EnumValueAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.number = message.number === 0 ? undefined : message.number;
    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toAmino(e) : undefined);
    } else {
      obj.options = message.options;
    }
    return obj;
  },
  fromAminoMsg(object: EnumValueAminoMsg): EnumValue {
    return EnumValue.fromAmino(object.value);
  },
  fromProtoMsg(message: EnumValueProtoMsg): EnumValue {
    return EnumValue.decode(message.value);
  },
  toProto(message: EnumValue): Uint8Array {
    return EnumValue.encode(message).finish();
  },
  toProtoMsg(message: EnumValue): EnumValueProtoMsg {
    return {
      typeUrl: "/google.protobuf.EnumValue",
      value: EnumValue.encode(message).finish()
    };
  }
};
function createBaseOption(): Option {
  return {
    name: "",
    value: undefined
  };
}
export const Option = {
  typeUrl: "/google.protobuf.Option",
  encode(message: Option, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== undefined) {
      Any.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Option {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Option>): Option {
    const message = createBaseOption();
    message.name = object.name ?? "";
    message.value = object.value !== undefined && object.value !== null ? Any.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: OptionAmino): Option {
    const message = createBaseOption();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Any.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: Option): OptionAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.value = message.value ? Any.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: OptionAminoMsg): Option {
    return Option.fromAmino(object.value);
  },
  fromProtoMsg(message: OptionProtoMsg): Option {
    return Option.decode(message.value);
  },
  toProto(message: Option): Uint8Array {
    return Option.encode(message).finish();
  },
  toProtoMsg(message: Option): OptionProtoMsg {
    return {
      typeUrl: "/google.protobuf.Option",
      value: Option.encode(message).finish()
    };
  }
};