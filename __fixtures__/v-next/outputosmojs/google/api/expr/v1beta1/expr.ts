import { SourceInfo, SourceInfoSDKType } from "./source";
import { NullValue, NullValueSDKType, nullValueFromJSON, nullValueToJSON } from "../../../protobuf/struct";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "google.api.expr.v1beta1";
/** An expression together with source information as returned by the parser. */
export interface ParsedExpr {
  /** The parsed expression. */
  expr?: Expr;
  /** The source info derived from input that generated the parsed `expr`. */
  sourceInfo?: SourceInfo;
  /** The syntax version of the source, e.g. `cel1`. */
  syntaxVersion: string;
}
export interface ParsedExprProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.ParsedExpr";
  value: Uint8Array;
}
/** An expression together with source information as returned by the parser. */
export interface ParsedExprSDKType {
  expr?: ExprSDKType;
  source_info?: SourceInfoSDKType;
  syntax_version: string;
}
/**
 * An abstract representation of a common expression.
 * 
 * Expressions are abstractly represented as a collection of identifiers,
 * select statements, function calls, literals, and comprehensions. All
 * operators with the exception of the '.' operator are modelled as function
 * calls. This makes it easy to represent new operators into the existing AST.
 * 
 * All references within expressions must resolve to a [Decl][google.api.expr.v1beta1.Decl] provided at
 * type-check for an expression to be valid. A reference may either be a bare
 * identifier `name` or a qualified identifier `google.api.name`. References
 * may either refer to a value or a function declaration.
 * 
 * For example, the expression `google.api.name.startsWith('expr')` references
 * the declaration `google.api.name` within a [Expr.Select][google.api.expr.v1beta1.Expr.Select] expression, and
 * the function declaration `startsWith`.
 */
export interface Expr {
  /**
   * Required. An id assigned to this node by the parser which is unique in a
   * given expression tree. This is used to associate type information and other
   * attributes to a node in the parse tree.
   */
  id: number;
  /** A literal expression. */
  literalExpr?: Literal;
  /** An identifier expression. */
  identExpr?: Expr_Ident;
  /** A field selection expression, e.g. `request.auth`. */
  selectExpr?: Expr_Select;
  /** A call expression, including calls to predefined functions and operators. */
  callExpr?: Expr_Call;
  /** A list creation expression. */
  listExpr?: Expr_CreateList;
  /** A map or object creation expression. */
  structExpr?: Expr_CreateStruct;
  /** A comprehension expression. */
  comprehensionExpr?: Expr_Comprehension;
}
export interface ExprProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.Expr";
  value: Uint8Array;
}
/**
 * An abstract representation of a common expression.
 * 
 * Expressions are abstractly represented as a collection of identifiers,
 * select statements, function calls, literals, and comprehensions. All
 * operators with the exception of the '.' operator are modelled as function
 * calls. This makes it easy to represent new operators into the existing AST.
 * 
 * All references within expressions must resolve to a [Decl][google.api.expr.v1beta1.Decl] provided at
 * type-check for an expression to be valid. A reference may either be a bare
 * identifier `name` or a qualified identifier `google.api.name`. References
 * may either refer to a value or a function declaration.
 * 
 * For example, the expression `google.api.name.startsWith('expr')` references
 * the declaration `google.api.name` within a [Expr.Select][google.api.expr.v1beta1.Expr.Select] expression, and
 * the function declaration `startsWith`.
 */
export interface ExprSDKType {
  id: number;
  literal_expr?: LiteralSDKType;
  ident_expr?: Expr_IdentSDKType;
  select_expr?: Expr_SelectSDKType;
  call_expr?: Expr_CallSDKType;
  list_expr?: Expr_CreateListSDKType;
  struct_expr?: Expr_CreateStructSDKType;
  comprehension_expr?: Expr_ComprehensionSDKType;
}
/** An identifier expression. e.g. `request`. */
export interface Expr_Ident {
  /**
   * Required. Holds a single, unqualified identifier, possibly preceded by a
   * '.'.
   * 
   * Qualified names are represented by the [Expr.Select][google.api.expr.v1beta1.Expr.Select] expression.
   */
  name: string;
}
export interface Expr_IdentProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.Ident";
  value: Uint8Array;
}
/** An identifier expression. e.g. `request`. */
export interface Expr_IdentSDKType {
  name: string;
}
/** A field selection expression. e.g. `request.auth`. */
export interface Expr_Select {
  /**
   * Required. The target of the selection expression.
   * 
   * For example, in the select expression `request.auth`, the `request`
   * portion of the expression is the `operand`.
   */
  operand?: Expr;
  /**
   * Required. The name of the field to select.
   * 
   * For example, in the select expression `request.auth`, the `auth` portion
   * of the expression would be the `field`.
   */
  field: string;
  /**
   * Whether the select is to be interpreted as a field presence test.
   * 
   * This results from the macro `has(request.auth)`.
   */
  testOnly: boolean;
}
export interface Expr_SelectProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.Select";
  value: Uint8Array;
}
/** A field selection expression. e.g. `request.auth`. */
export interface Expr_SelectSDKType {
  operand?: ExprSDKType;
  field: string;
  test_only: boolean;
}
/**
 * A call expression, including calls to predefined functions and operators.
 * 
 * For example, `value == 10`, `size(map_value)`.
 */
export interface Expr_Call {
  /**
   * The target of an method call-style expression. For example, `x` in
   * `x.f()`.
   */
  target?: Expr;
  /** Required. The name of the function or method being called. */
  function: string;
  /** The arguments. */
  args: Expr[];
}
export interface Expr_CallProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.Call";
  value: Uint8Array;
}
/**
 * A call expression, including calls to predefined functions and operators.
 * 
 * For example, `value == 10`, `size(map_value)`.
 */
export interface Expr_CallSDKType {
  target?: ExprSDKType;
  function: string;
  args: ExprSDKType[];
}
/**
 * A list creation expression.
 * 
 * Lists may either be homogenous, e.g. `[1, 2, 3]`, or heterogenous, e.g.
 * `dyn([1, 'hello', 2.0])`
 */
export interface Expr_CreateList {
  /** The elements part of the list. */
  elements: Expr[];
}
export interface Expr_CreateListProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.CreateList";
  value: Uint8Array;
}
/**
 * A list creation expression.
 * 
 * Lists may either be homogenous, e.g. `[1, 2, 3]`, or heterogenous, e.g.
 * `dyn([1, 'hello', 2.0])`
 */
export interface Expr_CreateListSDKType {
  elements: ExprSDKType[];
}
/**
 * A map or message creation expression.
 * 
 * Maps are constructed as `{'key_name': 'value'}`. Message construction is
 * similar, but prefixed with a type name and composed of field ids:
 * `types.MyType{field_id: 'value'}`.
 */
export interface Expr_CreateStruct {
  /**
   * The type name of the message to be created, empty when creating map
   * literals.
   */
  type: string;
  /** The entries in the creation expression. */
  entries: Expr_CreateStruct_Entry[];
}
export interface Expr_CreateStructProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.CreateStruct";
  value: Uint8Array;
}
/**
 * A map or message creation expression.
 * 
 * Maps are constructed as `{'key_name': 'value'}`. Message construction is
 * similar, but prefixed with a type name and composed of field ids:
 * `types.MyType{field_id: 'value'}`.
 */
export interface Expr_CreateStructSDKType {
  type: string;
  entries: Expr_CreateStruct_EntrySDKType[];
}
/** Represents an entry. */
export interface Expr_CreateStruct_Entry {
  /**
   * Required. An id assigned to this node by the parser which is unique
   * in a given expression tree. This is used to associate type
   * information and other attributes to the node.
   */
  id: number;
  /** The field key for a message creator statement. */
  fieldKey?: string;
  /** The key expression for a map creation statement. */
  mapKey?: Expr;
  /** Required. The value assigned to the key. */
  value?: Expr;
}
export interface Expr_CreateStruct_EntryProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.Entry";
  value: Uint8Array;
}
/** Represents an entry. */
export interface Expr_CreateStruct_EntrySDKType {
  id: number;
  field_key?: string;
  map_key?: ExprSDKType;
  value?: ExprSDKType;
}
/**
 * A comprehension expression applied to a list or map.
 * 
 * Comprehensions are not part of the core syntax, but enabled with macros.
 * A macro matches a specific call signature within a parsed AST and replaces
 * the call with an alternate AST block. Macro expansion happens at parse
 * time.
 * 
 * The following macros are supported within CEL:
 * 
 * Aggregate type macros may be applied to all elements in a list or all keys
 * in a map:
 * 
 * *  `all`, `exists`, `exists_one` -  test a predicate expression against
 *    the inputs and return `true` if the predicate is satisfied for all,
 *    any, or only one value `list.all(x, x < 10)`.
 * *  `filter` - test a predicate expression against the inputs and return
 *    the subset of elements which satisfy the predicate:
 *    `payments.filter(p, p > 1000)`.
 * *  `map` - apply an expression to all elements in the input and return the
 *    output aggregate type: `[1, 2, 3].map(i, i * i)`.
 * 
 * The `has(m.x)` macro tests whether the property `x` is present in struct
 * `m`. The semantics of this macro depend on the type of `m`. For proto2
 * messages `has(m.x)` is defined as 'defined, but not set`. For proto3, the
 * macro tests whether the property is set to its default. For map and struct
 * types, the macro tests whether the property `x` is defined on `m`.
 */
export interface Expr_Comprehension {
  /** The name of the iteration variable. */
  iterVar: string;
  /** The range over which var iterates. */
  iterRange?: Expr;
  /** The name of the variable used for accumulation of the result. */
  accuVar: string;
  /** The initial value of the accumulator. */
  accuInit?: Expr;
  /**
   * An expression which can contain iter_var and accu_var.
   * 
   * Returns false when the result has been computed and may be used as
   * a hint to short-circuit the remainder of the comprehension.
   */
  loopCondition?: Expr;
  /**
   * An expression which can contain iter_var and accu_var.
   * 
   * Computes the next value of accu_var.
   */
  loopStep?: Expr;
  /**
   * An expression which can contain accu_var.
   * 
   * Computes the result.
   */
  result?: Expr;
}
export interface Expr_ComprehensionProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.Comprehension";
  value: Uint8Array;
}
/**
 * A comprehension expression applied to a list or map.
 * 
 * Comprehensions are not part of the core syntax, but enabled with macros.
 * A macro matches a specific call signature within a parsed AST and replaces
 * the call with an alternate AST block. Macro expansion happens at parse
 * time.
 * 
 * The following macros are supported within CEL:
 * 
 * Aggregate type macros may be applied to all elements in a list or all keys
 * in a map:
 * 
 * *  `all`, `exists`, `exists_one` -  test a predicate expression against
 *    the inputs and return `true` if the predicate is satisfied for all,
 *    any, or only one value `list.all(x, x < 10)`.
 * *  `filter` - test a predicate expression against the inputs and return
 *    the subset of elements which satisfy the predicate:
 *    `payments.filter(p, p > 1000)`.
 * *  `map` - apply an expression to all elements in the input and return the
 *    output aggregate type: `[1, 2, 3].map(i, i * i)`.
 * 
 * The `has(m.x)` macro tests whether the property `x` is present in struct
 * `m`. The semantics of this macro depend on the type of `m`. For proto2
 * messages `has(m.x)` is defined as 'defined, but not set`. For proto3, the
 * macro tests whether the property is set to its default. For map and struct
 * types, the macro tests whether the property `x` is defined on `m`.
 */
export interface Expr_ComprehensionSDKType {
  iter_var: string;
  iter_range?: ExprSDKType;
  accu_var: string;
  accu_init?: ExprSDKType;
  loop_condition?: ExprSDKType;
  loop_step?: ExprSDKType;
  result?: ExprSDKType;
}
/**
 * Represents a primitive literal.
 * 
 * This is similar to the primitives supported in the well-known type
 * `google.protobuf.Value`, but richer so it can represent CEL's full range of
 * primitives.
 * 
 * Lists and structs are not included as constants as these aggregate types may
 * contain [Expr][google.api.expr.v1beta1.Expr] elements which require evaluation and are thus not constant.
 * 
 * Examples of literals include: `"hello"`, `b'bytes'`, `1u`, `4.2`, `-2`,
 * `true`, `null`.
 */
export interface Literal {
  /** null value. */
  nullValue?: NullValue;
  /** boolean value. */
  boolValue?: boolean;
  /** int64 value. */
  int64Value?: bigint;
  /** uint64 value. */
  uint64Value?: bigint;
  /** double value. */
  doubleValue?: number;
  /** string value. */
  stringValue?: string;
  /** bytes value. */
  bytesValue?: Uint8Array;
}
export interface LiteralProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.Literal";
  value: Uint8Array;
}
/**
 * Represents a primitive literal.
 * 
 * This is similar to the primitives supported in the well-known type
 * `google.protobuf.Value`, but richer so it can represent CEL's full range of
 * primitives.
 * 
 * Lists and structs are not included as constants as these aggregate types may
 * contain [Expr][google.api.expr.v1beta1.Expr] elements which require evaluation and are thus not constant.
 * 
 * Examples of literals include: `"hello"`, `b'bytes'`, `1u`, `4.2`, `-2`,
 * `true`, `null`.
 */
export interface LiteralSDKType {
  null_value?: NullValue;
  bool_value?: boolean;
  int64_value?: bigint;
  uint64_value?: bigint;
  double_value?: number;
  string_value?: string;
  bytes_value?: Uint8Array;
}
function createBaseParsedExpr(): ParsedExpr {
  return {
    expr: undefined,
    sourceInfo: undefined,
    syntaxVersion: ""
  };
}
export const ParsedExpr = {
  typeUrl: "/google.api.expr.v1beta1.ParsedExpr",
  encode(message: ParsedExpr, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.expr !== undefined) {
      Expr.encode(message.expr, writer.uint32(18).fork()).ldelim();
    }
    if (message.sourceInfo !== undefined) {
      SourceInfo.encode(message.sourceInfo, writer.uint32(26).fork()).ldelim();
    }
    if (message.syntaxVersion !== "") {
      writer.uint32(34).string(message.syntaxVersion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParsedExpr {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParsedExpr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.expr = Expr.decode(reader, reader.uint32());
          break;
        case 3:
          message.sourceInfo = SourceInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.syntaxVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParsedExpr {
    return {
      expr: isSet(object.expr) ? Expr.fromJSON(object.expr) : undefined,
      sourceInfo: isSet(object.sourceInfo) ? SourceInfo.fromJSON(object.sourceInfo) : undefined,
      syntaxVersion: isSet(object.syntaxVersion) ? String(object.syntaxVersion) : ""
    };
  },
  toJSON(message: ParsedExpr): JsonSafe<ParsedExpr> {
    const obj: any = {};
    message.expr !== undefined && (obj.expr = message.expr ? Expr.toJSON(message.expr) : undefined);
    message.sourceInfo !== undefined && (obj.sourceInfo = message.sourceInfo ? SourceInfo.toJSON(message.sourceInfo) : undefined);
    message.syntaxVersion !== undefined && (obj.syntaxVersion = message.syntaxVersion);
    return obj;
  },
  fromPartial(object: DeepPartial<ParsedExpr>): ParsedExpr {
    const message = createBaseParsedExpr();
    message.expr = object.expr !== undefined && object.expr !== null ? Expr.fromPartial(object.expr) : undefined;
    message.sourceInfo = object.sourceInfo !== undefined && object.sourceInfo !== null ? SourceInfo.fromPartial(object.sourceInfo) : undefined;
    message.syntaxVersion = object.syntaxVersion ?? "";
    return message;
  },
  fromSDK(object: ParsedExprSDKType): ParsedExpr {
    return {
      expr: object.expr ? Expr.fromSDK(object.expr) : undefined,
      sourceInfo: object.source_info ? SourceInfo.fromSDK(object.source_info) : undefined,
      syntaxVersion: object?.syntax_version
    };
  },
  fromSDKJSON(object: any): ParsedExprSDKType {
    return {
      expr: isSet(object.expr) ? Expr.fromSDKJSON(object.expr) : undefined,
      source_info: isSet(object.source_info) ? SourceInfo.fromSDKJSON(object.source_info) : undefined,
      syntax_version: isSet(object.syntax_version) ? String(object.syntax_version) : ""
    };
  },
  toSDK(message: ParsedExpr): ParsedExprSDKType {
    const obj: any = {};
    message.expr !== undefined && (obj.expr = message.expr ? Expr.toSDK(message.expr) : undefined);
    message.sourceInfo !== undefined && (obj.source_info = message.sourceInfo ? SourceInfo.toSDK(message.sourceInfo) : undefined);
    obj.syntax_version = message.syntaxVersion;
    return obj;
  },
  fromAmino(object: ParsedExprAmino): ParsedExpr {
    const message = createBaseParsedExpr();
    if (object.expr !== undefined && object.expr !== null) {
      message.expr = Expr.fromAmino(object.expr);
    }
    if (object.source_info !== undefined && object.source_info !== null) {
      message.sourceInfo = SourceInfo.fromAmino(object.source_info);
    }
    if (object.syntax_version !== undefined && object.syntax_version !== null) {
      message.syntaxVersion = object.syntax_version;
    }
    return message;
  },
  toAmino(message: ParsedExpr): ParsedExprAmino {
    const obj: any = {};
    obj.expr = message.expr ? Expr.toAmino(message.expr) : undefined;
    obj.source_info = message.sourceInfo ? SourceInfo.toAmino(message.sourceInfo) : undefined;
    obj.syntax_version = message.syntaxVersion === "" ? undefined : message.syntaxVersion;
    return obj;
  },
  fromAminoMsg(object: ParsedExprAminoMsg): ParsedExpr {
    return ParsedExpr.fromAmino(object.value);
  },
  fromProtoMsg(message: ParsedExprProtoMsg): ParsedExpr {
    return ParsedExpr.decode(message.value);
  },
  toProto(message: ParsedExpr): Uint8Array {
    return ParsedExpr.encode(message).finish();
  },
  toProtoMsg(message: ParsedExpr): ParsedExprProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.ParsedExpr",
      value: ParsedExpr.encode(message).finish()
    };
  }
};
function createBaseExpr(): Expr {
  return {
    id: 0,
    literalExpr: undefined,
    identExpr: undefined,
    selectExpr: undefined,
    callExpr: undefined,
    listExpr: undefined,
    structExpr: undefined,
    comprehensionExpr: undefined
  };
}
export const Expr = {
  typeUrl: "/google.api.expr.v1beta1.Expr",
  encode(message: Expr, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(16).int32(message.id);
    }
    if (message.literalExpr !== undefined) {
      Literal.encode(message.literalExpr, writer.uint32(26).fork()).ldelim();
    }
    if (message.identExpr !== undefined) {
      Expr_Ident.encode(message.identExpr, writer.uint32(34).fork()).ldelim();
    }
    if (message.selectExpr !== undefined) {
      Expr_Select.encode(message.selectExpr, writer.uint32(42).fork()).ldelim();
    }
    if (message.callExpr !== undefined) {
      Expr_Call.encode(message.callExpr, writer.uint32(50).fork()).ldelim();
    }
    if (message.listExpr !== undefined) {
      Expr_CreateList.encode(message.listExpr, writer.uint32(58).fork()).ldelim();
    }
    if (message.structExpr !== undefined) {
      Expr_CreateStruct.encode(message.structExpr, writer.uint32(66).fork()).ldelim();
    }
    if (message.comprehensionExpr !== undefined) {
      Expr_Comprehension.encode(message.comprehensionExpr, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Expr {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.id = reader.int32();
          break;
        case 3:
          message.literalExpr = Literal.decode(reader, reader.uint32());
          break;
        case 4:
          message.identExpr = Expr_Ident.decode(reader, reader.uint32());
          break;
        case 5:
          message.selectExpr = Expr_Select.decode(reader, reader.uint32());
          break;
        case 6:
          message.callExpr = Expr_Call.decode(reader, reader.uint32());
          break;
        case 7:
          message.listExpr = Expr_CreateList.decode(reader, reader.uint32());
          break;
        case 8:
          message.structExpr = Expr_CreateStruct.decode(reader, reader.uint32());
          break;
        case 9:
          message.comprehensionExpr = Expr_Comprehension.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      literalExpr: isSet(object.literalExpr) ? Literal.fromJSON(object.literalExpr) : undefined,
      identExpr: isSet(object.identExpr) ? Expr_Ident.fromJSON(object.identExpr) : undefined,
      selectExpr: isSet(object.selectExpr) ? Expr_Select.fromJSON(object.selectExpr) : undefined,
      callExpr: isSet(object.callExpr) ? Expr_Call.fromJSON(object.callExpr) : undefined,
      listExpr: isSet(object.listExpr) ? Expr_CreateList.fromJSON(object.listExpr) : undefined,
      structExpr: isSet(object.structExpr) ? Expr_CreateStruct.fromJSON(object.structExpr) : undefined,
      comprehensionExpr: isSet(object.comprehensionExpr) ? Expr_Comprehension.fromJSON(object.comprehensionExpr) : undefined
    };
  },
  toJSON(message: Expr): JsonSafe<Expr> {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.literalExpr !== undefined && (obj.literalExpr = message.literalExpr ? Literal.toJSON(message.literalExpr) : undefined);
    message.identExpr !== undefined && (obj.identExpr = message.identExpr ? Expr_Ident.toJSON(message.identExpr) : undefined);
    message.selectExpr !== undefined && (obj.selectExpr = message.selectExpr ? Expr_Select.toJSON(message.selectExpr) : undefined);
    message.callExpr !== undefined && (obj.callExpr = message.callExpr ? Expr_Call.toJSON(message.callExpr) : undefined);
    message.listExpr !== undefined && (obj.listExpr = message.listExpr ? Expr_CreateList.toJSON(message.listExpr) : undefined);
    message.structExpr !== undefined && (obj.structExpr = message.structExpr ? Expr_CreateStruct.toJSON(message.structExpr) : undefined);
    message.comprehensionExpr !== undefined && (obj.comprehensionExpr = message.comprehensionExpr ? Expr_Comprehension.toJSON(message.comprehensionExpr) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Expr>): Expr {
    const message = createBaseExpr();
    message.id = object.id ?? 0;
    message.literalExpr = object.literalExpr !== undefined && object.literalExpr !== null ? Literal.fromPartial(object.literalExpr) : undefined;
    message.identExpr = object.identExpr !== undefined && object.identExpr !== null ? Expr_Ident.fromPartial(object.identExpr) : undefined;
    message.selectExpr = object.selectExpr !== undefined && object.selectExpr !== null ? Expr_Select.fromPartial(object.selectExpr) : undefined;
    message.callExpr = object.callExpr !== undefined && object.callExpr !== null ? Expr_Call.fromPartial(object.callExpr) : undefined;
    message.listExpr = object.listExpr !== undefined && object.listExpr !== null ? Expr_CreateList.fromPartial(object.listExpr) : undefined;
    message.structExpr = object.structExpr !== undefined && object.structExpr !== null ? Expr_CreateStruct.fromPartial(object.structExpr) : undefined;
    message.comprehensionExpr = object.comprehensionExpr !== undefined && object.comprehensionExpr !== null ? Expr_Comprehension.fromPartial(object.comprehensionExpr) : undefined;
    return message;
  },
  fromSDK(object: ExprSDKType): Expr {
    return {
      id: object?.id,
      literalExpr: object.literal_expr ? Literal.fromSDK(object.literal_expr) : undefined,
      identExpr: object.ident_expr ? Expr_Ident.fromSDK(object.ident_expr) : undefined,
      selectExpr: object.select_expr ? Expr_Select.fromSDK(object.select_expr) : undefined,
      callExpr: object.call_expr ? Expr_Call.fromSDK(object.call_expr) : undefined,
      listExpr: object.list_expr ? Expr_CreateList.fromSDK(object.list_expr) : undefined,
      structExpr: object.struct_expr ? Expr_CreateStruct.fromSDK(object.struct_expr) : undefined,
      comprehensionExpr: object.comprehension_expr ? Expr_Comprehension.fromSDK(object.comprehension_expr) : undefined
    };
  },
  fromSDKJSON(object: any): ExprSDKType {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      literal_expr: isSet(object.literal_expr) ? Literal.fromSDKJSON(object.literal_expr) : undefined,
      ident_expr: isSet(object.ident_expr) ? Expr_Ident.fromSDKJSON(object.ident_expr) : undefined,
      select_expr: isSet(object.select_expr) ? Expr_Select.fromSDKJSON(object.select_expr) : undefined,
      call_expr: isSet(object.call_expr) ? Expr_Call.fromSDKJSON(object.call_expr) : undefined,
      list_expr: isSet(object.list_expr) ? Expr_CreateList.fromSDKJSON(object.list_expr) : undefined,
      struct_expr: isSet(object.struct_expr) ? Expr_CreateStruct.fromSDKJSON(object.struct_expr) : undefined,
      comprehension_expr: isSet(object.comprehension_expr) ? Expr_Comprehension.fromSDKJSON(object.comprehension_expr) : undefined
    };
  },
  toSDK(message: Expr): ExprSDKType {
    const obj: any = {};
    obj.id = message.id;
    message.literalExpr !== undefined && (obj.literal_expr = message.literalExpr ? Literal.toSDK(message.literalExpr) : undefined);
    message.identExpr !== undefined && (obj.ident_expr = message.identExpr ? Expr_Ident.toSDK(message.identExpr) : undefined);
    message.selectExpr !== undefined && (obj.select_expr = message.selectExpr ? Expr_Select.toSDK(message.selectExpr) : undefined);
    message.callExpr !== undefined && (obj.call_expr = message.callExpr ? Expr_Call.toSDK(message.callExpr) : undefined);
    message.listExpr !== undefined && (obj.list_expr = message.listExpr ? Expr_CreateList.toSDK(message.listExpr) : undefined);
    message.structExpr !== undefined && (obj.struct_expr = message.structExpr ? Expr_CreateStruct.toSDK(message.structExpr) : undefined);
    message.comprehensionExpr !== undefined && (obj.comprehension_expr = message.comprehensionExpr ? Expr_Comprehension.toSDK(message.comprehensionExpr) : undefined);
    return obj;
  },
  fromAmino(object: ExprAmino): Expr {
    const message = createBaseExpr();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.literal_expr !== undefined && object.literal_expr !== null) {
      message.literalExpr = Literal.fromAmino(object.literal_expr);
    }
    if (object.ident_expr !== undefined && object.ident_expr !== null) {
      message.identExpr = Expr_Ident.fromAmino(object.ident_expr);
    }
    if (object.select_expr !== undefined && object.select_expr !== null) {
      message.selectExpr = Expr_Select.fromAmino(object.select_expr);
    }
    if (object.call_expr !== undefined && object.call_expr !== null) {
      message.callExpr = Expr_Call.fromAmino(object.call_expr);
    }
    if (object.list_expr !== undefined && object.list_expr !== null) {
      message.listExpr = Expr_CreateList.fromAmino(object.list_expr);
    }
    if (object.struct_expr !== undefined && object.struct_expr !== null) {
      message.structExpr = Expr_CreateStruct.fromAmino(object.struct_expr);
    }
    if (object.comprehension_expr !== undefined && object.comprehension_expr !== null) {
      message.comprehensionExpr = Expr_Comprehension.fromAmino(object.comprehension_expr);
    }
    return message;
  },
  toAmino(message: Expr): ExprAmino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    obj.literal_expr = message.literalExpr ? Literal.toAmino(message.literalExpr) : undefined;
    obj.ident_expr = message.identExpr ? Expr_Ident.toAmino(message.identExpr) : undefined;
    obj.select_expr = message.selectExpr ? Expr_Select.toAmino(message.selectExpr) : undefined;
    obj.call_expr = message.callExpr ? Expr_Call.toAmino(message.callExpr) : undefined;
    obj.list_expr = message.listExpr ? Expr_CreateList.toAmino(message.listExpr) : undefined;
    obj.struct_expr = message.structExpr ? Expr_CreateStruct.toAmino(message.structExpr) : undefined;
    obj.comprehension_expr = message.comprehensionExpr ? Expr_Comprehension.toAmino(message.comprehensionExpr) : undefined;
    return obj;
  },
  fromAminoMsg(object: ExprAminoMsg): Expr {
    return Expr.fromAmino(object.value);
  },
  fromProtoMsg(message: ExprProtoMsg): Expr {
    return Expr.decode(message.value);
  },
  toProto(message: Expr): Uint8Array {
    return Expr.encode(message).finish();
  },
  toProtoMsg(message: Expr): ExprProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.Expr",
      value: Expr.encode(message).finish()
    };
  }
};
function createBaseExpr_Ident(): Expr_Ident {
  return {
    name: ""
  };
}
export const Expr_Ident = {
  typeUrl: "/google.api.expr.v1beta1.Ident",
  encode(message: Expr_Ident, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Expr_Ident {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_Ident();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr_Ident {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: Expr_Ident): JsonSafe<Expr_Ident> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<Expr_Ident>): Expr_Ident {
    const message = createBaseExpr_Ident();
    message.name = object.name ?? "";
    return message;
  },
  fromSDK(object: Expr_IdentSDKType): Expr_Ident {
    return {
      name: object?.name
    };
  },
  fromSDKJSON(object: any): Expr_IdentSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toSDK(message: Expr_Ident): Expr_IdentSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: Expr_IdentAmino): Expr_Ident {
    const message = createBaseExpr_Ident();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: Expr_Ident): Expr_IdentAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: Expr_IdentAminoMsg): Expr_Ident {
    return Expr_Ident.fromAmino(object.value);
  },
  fromProtoMsg(message: Expr_IdentProtoMsg): Expr_Ident {
    return Expr_Ident.decode(message.value);
  },
  toProto(message: Expr_Ident): Uint8Array {
    return Expr_Ident.encode(message).finish();
  },
  toProtoMsg(message: Expr_Ident): Expr_IdentProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.Ident",
      value: Expr_Ident.encode(message).finish()
    };
  }
};
function createBaseExpr_Select(): Expr_Select {
  return {
    operand: undefined,
    field: "",
    testOnly: false
  };
}
export const Expr_Select = {
  typeUrl: "/google.api.expr.v1beta1.Select",
  encode(message: Expr_Select, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operand !== undefined) {
      Expr.encode(message.operand, writer.uint32(10).fork()).ldelim();
    }
    if (message.field !== "") {
      writer.uint32(18).string(message.field);
    }
    if (message.testOnly === true) {
      writer.uint32(24).bool(message.testOnly);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Expr_Select {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_Select();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operand = Expr.decode(reader, reader.uint32());
          break;
        case 2:
          message.field = reader.string();
          break;
        case 3:
          message.testOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr_Select {
    return {
      operand: isSet(object.operand) ? Expr.fromJSON(object.operand) : undefined,
      field: isSet(object.field) ? String(object.field) : "",
      testOnly: isSet(object.testOnly) ? Boolean(object.testOnly) : false
    };
  },
  toJSON(message: Expr_Select): JsonSafe<Expr_Select> {
    const obj: any = {};
    message.operand !== undefined && (obj.operand = message.operand ? Expr.toJSON(message.operand) : undefined);
    message.field !== undefined && (obj.field = message.field);
    message.testOnly !== undefined && (obj.testOnly = message.testOnly);
    return obj;
  },
  fromPartial(object: DeepPartial<Expr_Select>): Expr_Select {
    const message = createBaseExpr_Select();
    message.operand = object.operand !== undefined && object.operand !== null ? Expr.fromPartial(object.operand) : undefined;
    message.field = object.field ?? "";
    message.testOnly = object.testOnly ?? false;
    return message;
  },
  fromSDK(object: Expr_SelectSDKType): Expr_Select {
    return {
      operand: object.operand ? Expr.fromSDK(object.operand) : undefined,
      field: object?.field,
      testOnly: object?.test_only
    };
  },
  fromSDKJSON(object: any): Expr_SelectSDKType {
    return {
      operand: isSet(object.operand) ? Expr.fromSDKJSON(object.operand) : undefined,
      field: isSet(object.field) ? String(object.field) : "",
      test_only: isSet(object.test_only) ? Boolean(object.test_only) : false
    };
  },
  toSDK(message: Expr_Select): Expr_SelectSDKType {
    const obj: any = {};
    message.operand !== undefined && (obj.operand = message.operand ? Expr.toSDK(message.operand) : undefined);
    obj.field = message.field;
    obj.test_only = message.testOnly;
    return obj;
  },
  fromAmino(object: Expr_SelectAmino): Expr_Select {
    const message = createBaseExpr_Select();
    if (object.operand !== undefined && object.operand !== null) {
      message.operand = Expr.fromAmino(object.operand);
    }
    if (object.field !== undefined && object.field !== null) {
      message.field = object.field;
    }
    if (object.test_only !== undefined && object.test_only !== null) {
      message.testOnly = object.test_only;
    }
    return message;
  },
  toAmino(message: Expr_Select): Expr_SelectAmino {
    const obj: any = {};
    obj.operand = message.operand ? Expr.toAmino(message.operand) : undefined;
    obj.field = message.field === "" ? undefined : message.field;
    obj.test_only = message.testOnly === false ? undefined : message.testOnly;
    return obj;
  },
  fromAminoMsg(object: Expr_SelectAminoMsg): Expr_Select {
    return Expr_Select.fromAmino(object.value);
  },
  fromProtoMsg(message: Expr_SelectProtoMsg): Expr_Select {
    return Expr_Select.decode(message.value);
  },
  toProto(message: Expr_Select): Uint8Array {
    return Expr_Select.encode(message).finish();
  },
  toProtoMsg(message: Expr_Select): Expr_SelectProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.Select",
      value: Expr_Select.encode(message).finish()
    };
  }
};
function createBaseExpr_Call(): Expr_Call {
  return {
    target: undefined,
    function: "",
    args: []
  };
}
export const Expr_Call = {
  typeUrl: "/google.api.expr.v1beta1.Call",
  encode(message: Expr_Call, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.target !== undefined) {
      Expr.encode(message.target, writer.uint32(10).fork()).ldelim();
    }
    if (message.function !== "") {
      writer.uint32(18).string(message.function);
    }
    for (const v of message.args) {
      Expr.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Expr_Call {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_Call();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.target = Expr.decode(reader, reader.uint32());
          break;
        case 2:
          message.function = reader.string();
          break;
        case 3:
          message.args.push(Expr.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr_Call {
    return {
      target: isSet(object.target) ? Expr.fromJSON(object.target) : undefined,
      function: isSet(object.function) ? String(object.function) : "",
      args: Array.isArray(object?.args) ? object.args.map((e: any) => Expr.fromJSON(e)) : []
    };
  },
  toJSON(message: Expr_Call): JsonSafe<Expr_Call> {
    const obj: any = {};
    message.target !== undefined && (obj.target = message.target ? Expr.toJSON(message.target) : undefined);
    message.function !== undefined && (obj.function = message.function);
    if (message.args) {
      obj.args = message.args.map(e => e ? Expr.toJSON(e) : undefined);
    } else {
      obj.args = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Expr_Call>): Expr_Call {
    const message = createBaseExpr_Call();
    message.target = object.target !== undefined && object.target !== null ? Expr.fromPartial(object.target) : undefined;
    message.function = object.function ?? "";
    message.args = object.args?.map(e => Expr.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: Expr_CallSDKType): Expr_Call {
    return {
      target: object.target ? Expr.fromSDK(object.target) : undefined,
      function: object?.function,
      args: Array.isArray(object?.args) ? object.args.map((e: any) => Expr.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): Expr_CallSDKType {
    return {
      target: isSet(object.target) ? Expr.fromSDKJSON(object.target) : undefined,
      function: isSet(object.function) ? String(object.function) : "",
      args: Array.isArray(object?.args) ? object.args.map((e: any) => Expr.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Expr_Call): Expr_CallSDKType {
    const obj: any = {};
    message.target !== undefined && (obj.target = message.target ? Expr.toSDK(message.target) : undefined);
    obj.function = message.function;
    if (message.args) {
      obj.args = message.args.map(e => e ? Expr.toSDK(e) : undefined);
    } else {
      obj.args = [];
    }
    return obj;
  },
  fromAmino(object: Expr_CallAmino): Expr_Call {
    const message = createBaseExpr_Call();
    if (object.target !== undefined && object.target !== null) {
      message.target = Expr.fromAmino(object.target);
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    }
    message.args = object.args?.map(e => Expr.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Expr_Call): Expr_CallAmino {
    const obj: any = {};
    obj.target = message.target ? Expr.toAmino(message.target) : undefined;
    obj.function = message.function === "" ? undefined : message.function;
    if (message.args) {
      obj.args = message.args.map(e => e ? Expr.toAmino(e) : undefined);
    } else {
      obj.args = message.args;
    }
    return obj;
  },
  fromAminoMsg(object: Expr_CallAminoMsg): Expr_Call {
    return Expr_Call.fromAmino(object.value);
  },
  fromProtoMsg(message: Expr_CallProtoMsg): Expr_Call {
    return Expr_Call.decode(message.value);
  },
  toProto(message: Expr_Call): Uint8Array {
    return Expr_Call.encode(message).finish();
  },
  toProtoMsg(message: Expr_Call): Expr_CallProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.Call",
      value: Expr_Call.encode(message).finish()
    };
  }
};
function createBaseExpr_CreateList(): Expr_CreateList {
  return {
    elements: []
  };
}
export const Expr_CreateList = {
  typeUrl: "/google.api.expr.v1beta1.CreateList",
  encode(message: Expr_CreateList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.elements) {
      Expr.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Expr_CreateList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_CreateList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.elements.push(Expr.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr_CreateList {
    return {
      elements: Array.isArray(object?.elements) ? object.elements.map((e: any) => Expr.fromJSON(e)) : []
    };
  },
  toJSON(message: Expr_CreateList): JsonSafe<Expr_CreateList> {
    const obj: any = {};
    if (message.elements) {
      obj.elements = message.elements.map(e => e ? Expr.toJSON(e) : undefined);
    } else {
      obj.elements = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Expr_CreateList>): Expr_CreateList {
    const message = createBaseExpr_CreateList();
    message.elements = object.elements?.map(e => Expr.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: Expr_CreateListSDKType): Expr_CreateList {
    return {
      elements: Array.isArray(object?.elements) ? object.elements.map((e: any) => Expr.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): Expr_CreateListSDKType {
    return {
      elements: Array.isArray(object?.elements) ? object.elements.map((e: any) => Expr.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Expr_CreateList): Expr_CreateListSDKType {
    const obj: any = {};
    if (message.elements) {
      obj.elements = message.elements.map(e => e ? Expr.toSDK(e) : undefined);
    } else {
      obj.elements = [];
    }
    return obj;
  },
  fromAmino(object: Expr_CreateListAmino): Expr_CreateList {
    const message = createBaseExpr_CreateList();
    message.elements = object.elements?.map(e => Expr.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Expr_CreateList): Expr_CreateListAmino {
    const obj: any = {};
    if (message.elements) {
      obj.elements = message.elements.map(e => e ? Expr.toAmino(e) : undefined);
    } else {
      obj.elements = message.elements;
    }
    return obj;
  },
  fromAminoMsg(object: Expr_CreateListAminoMsg): Expr_CreateList {
    return Expr_CreateList.fromAmino(object.value);
  },
  fromProtoMsg(message: Expr_CreateListProtoMsg): Expr_CreateList {
    return Expr_CreateList.decode(message.value);
  },
  toProto(message: Expr_CreateList): Uint8Array {
    return Expr_CreateList.encode(message).finish();
  },
  toProtoMsg(message: Expr_CreateList): Expr_CreateListProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.CreateList",
      value: Expr_CreateList.encode(message).finish()
    };
  }
};
function createBaseExpr_CreateStruct(): Expr_CreateStruct {
  return {
    type: "",
    entries: []
  };
}
export const Expr_CreateStruct = {
  typeUrl: "/google.api.expr.v1beta1.CreateStruct",
  encode(message: Expr_CreateStruct, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    for (const v of message.entries) {
      Expr_CreateStruct_Entry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Expr_CreateStruct {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_CreateStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.entries.push(Expr_CreateStruct_Entry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr_CreateStruct {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => Expr_CreateStruct_Entry.fromJSON(e)) : []
    };
  },
  toJSON(message: Expr_CreateStruct): JsonSafe<Expr_CreateStruct> {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Expr_CreateStruct_Entry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Expr_CreateStruct>): Expr_CreateStruct {
    const message = createBaseExpr_CreateStruct();
    message.type = object.type ?? "";
    message.entries = object.entries?.map(e => Expr_CreateStruct_Entry.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: Expr_CreateStructSDKType): Expr_CreateStruct {
    return {
      type: object?.type,
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => Expr_CreateStruct_Entry.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): Expr_CreateStructSDKType {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => Expr_CreateStruct_Entry.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Expr_CreateStruct): Expr_CreateStructSDKType {
    const obj: any = {};
    obj.type = message.type;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Expr_CreateStruct_Entry.toSDK(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromAmino(object: Expr_CreateStructAmino): Expr_CreateStruct {
    const message = createBaseExpr_CreateStruct();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    message.entries = object.entries?.map(e => Expr_CreateStruct_Entry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Expr_CreateStruct): Expr_CreateStructAmino {
    const obj: any = {};
    obj.type = message.type === "" ? undefined : message.type;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Expr_CreateStruct_Entry.toAmino(e) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromAminoMsg(object: Expr_CreateStructAminoMsg): Expr_CreateStruct {
    return Expr_CreateStruct.fromAmino(object.value);
  },
  fromProtoMsg(message: Expr_CreateStructProtoMsg): Expr_CreateStruct {
    return Expr_CreateStruct.decode(message.value);
  },
  toProto(message: Expr_CreateStruct): Uint8Array {
    return Expr_CreateStruct.encode(message).finish();
  },
  toProtoMsg(message: Expr_CreateStruct): Expr_CreateStructProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.CreateStruct",
      value: Expr_CreateStruct.encode(message).finish()
    };
  }
};
function createBaseExpr_CreateStruct_Entry(): Expr_CreateStruct_Entry {
  return {
    id: 0,
    fieldKey: undefined,
    mapKey: undefined,
    value: undefined
  };
}
export const Expr_CreateStruct_Entry = {
  typeUrl: "/google.api.expr.v1beta1.Entry",
  encode(message: Expr_CreateStruct_Entry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.fieldKey !== undefined) {
      writer.uint32(18).string(message.fieldKey);
    }
    if (message.mapKey !== undefined) {
      Expr.encode(message.mapKey, writer.uint32(26).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Expr.encode(message.value, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Expr_CreateStruct_Entry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_CreateStruct_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.fieldKey = reader.string();
          break;
        case 3:
          message.mapKey = Expr.decode(reader, reader.uint32());
          break;
        case 4:
          message.value = Expr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr_CreateStruct_Entry {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      fieldKey: isSet(object.fieldKey) ? String(object.fieldKey) : undefined,
      mapKey: isSet(object.mapKey) ? Expr.fromJSON(object.mapKey) : undefined,
      value: isSet(object.value) ? Expr.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: Expr_CreateStruct_Entry): JsonSafe<Expr_CreateStruct_Entry> {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.fieldKey !== undefined && (obj.fieldKey = message.fieldKey);
    message.mapKey !== undefined && (obj.mapKey = message.mapKey ? Expr.toJSON(message.mapKey) : undefined);
    message.value !== undefined && (obj.value = message.value ? Expr.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Expr_CreateStruct_Entry>): Expr_CreateStruct_Entry {
    const message = createBaseExpr_CreateStruct_Entry();
    message.id = object.id ?? 0;
    message.fieldKey = object.fieldKey ?? undefined;
    message.mapKey = object.mapKey !== undefined && object.mapKey !== null ? Expr.fromPartial(object.mapKey) : undefined;
    message.value = object.value !== undefined && object.value !== null ? Expr.fromPartial(object.value) : undefined;
    return message;
  },
  fromSDK(object: Expr_CreateStruct_EntrySDKType): Expr_CreateStruct_Entry {
    return {
      id: object?.id,
      fieldKey: object?.field_key,
      mapKey: object.map_key ? Expr.fromSDK(object.map_key) : undefined,
      value: object.value ? Expr.fromSDK(object.value) : undefined
    };
  },
  fromSDKJSON(object: any): Expr_CreateStruct_EntrySDKType {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      field_key: isSet(object.field_key) ? String(object.field_key) : undefined,
      map_key: isSet(object.map_key) ? Expr.fromSDKJSON(object.map_key) : undefined,
      value: isSet(object.value) ? Expr.fromSDKJSON(object.value) : undefined
    };
  },
  toSDK(message: Expr_CreateStruct_Entry): Expr_CreateStruct_EntrySDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.field_key = message.fieldKey;
    message.mapKey !== undefined && (obj.map_key = message.mapKey ? Expr.toSDK(message.mapKey) : undefined);
    message.value !== undefined && (obj.value = message.value ? Expr.toSDK(message.value) : undefined);
    return obj;
  },
  fromAmino(object: Expr_CreateStruct_EntryAmino): Expr_CreateStruct_Entry {
    const message = createBaseExpr_CreateStruct_Entry();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.field_key !== undefined && object.field_key !== null) {
      message.fieldKey = object.field_key;
    }
    if (object.map_key !== undefined && object.map_key !== null) {
      message.mapKey = Expr.fromAmino(object.map_key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Expr.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: Expr_CreateStruct_Entry): Expr_CreateStruct_EntryAmino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    obj.field_key = message.fieldKey === null ? undefined : message.fieldKey;
    obj.map_key = message.mapKey ? Expr.toAmino(message.mapKey) : undefined;
    obj.value = message.value ? Expr.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: Expr_CreateStruct_EntryAminoMsg): Expr_CreateStruct_Entry {
    return Expr_CreateStruct_Entry.fromAmino(object.value);
  },
  fromProtoMsg(message: Expr_CreateStruct_EntryProtoMsg): Expr_CreateStruct_Entry {
    return Expr_CreateStruct_Entry.decode(message.value);
  },
  toProto(message: Expr_CreateStruct_Entry): Uint8Array {
    return Expr_CreateStruct_Entry.encode(message).finish();
  },
  toProtoMsg(message: Expr_CreateStruct_Entry): Expr_CreateStruct_EntryProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.Entry",
      value: Expr_CreateStruct_Entry.encode(message).finish()
    };
  }
};
function createBaseExpr_Comprehension(): Expr_Comprehension {
  return {
    iterVar: "",
    iterRange: undefined,
    accuVar: "",
    accuInit: undefined,
    loopCondition: undefined,
    loopStep: undefined,
    result: undefined
  };
}
export const Expr_Comprehension = {
  typeUrl: "/google.api.expr.v1beta1.Comprehension",
  encode(message: Expr_Comprehension, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iterVar !== "") {
      writer.uint32(10).string(message.iterVar);
    }
    if (message.iterRange !== undefined) {
      Expr.encode(message.iterRange, writer.uint32(18).fork()).ldelim();
    }
    if (message.accuVar !== "") {
      writer.uint32(26).string(message.accuVar);
    }
    if (message.accuInit !== undefined) {
      Expr.encode(message.accuInit, writer.uint32(34).fork()).ldelim();
    }
    if (message.loopCondition !== undefined) {
      Expr.encode(message.loopCondition, writer.uint32(42).fork()).ldelim();
    }
    if (message.loopStep !== undefined) {
      Expr.encode(message.loopStep, writer.uint32(50).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Expr.encode(message.result, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Expr_Comprehension {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_Comprehension();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iterVar = reader.string();
          break;
        case 2:
          message.iterRange = Expr.decode(reader, reader.uint32());
          break;
        case 3:
          message.accuVar = reader.string();
          break;
        case 4:
          message.accuInit = Expr.decode(reader, reader.uint32());
          break;
        case 5:
          message.loopCondition = Expr.decode(reader, reader.uint32());
          break;
        case 6:
          message.loopStep = Expr.decode(reader, reader.uint32());
          break;
        case 7:
          message.result = Expr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr_Comprehension {
    return {
      iterVar: isSet(object.iterVar) ? String(object.iterVar) : "",
      iterRange: isSet(object.iterRange) ? Expr.fromJSON(object.iterRange) : undefined,
      accuVar: isSet(object.accuVar) ? String(object.accuVar) : "",
      accuInit: isSet(object.accuInit) ? Expr.fromJSON(object.accuInit) : undefined,
      loopCondition: isSet(object.loopCondition) ? Expr.fromJSON(object.loopCondition) : undefined,
      loopStep: isSet(object.loopStep) ? Expr.fromJSON(object.loopStep) : undefined,
      result: isSet(object.result) ? Expr.fromJSON(object.result) : undefined
    };
  },
  toJSON(message: Expr_Comprehension): JsonSafe<Expr_Comprehension> {
    const obj: any = {};
    message.iterVar !== undefined && (obj.iterVar = message.iterVar);
    message.iterRange !== undefined && (obj.iterRange = message.iterRange ? Expr.toJSON(message.iterRange) : undefined);
    message.accuVar !== undefined && (obj.accuVar = message.accuVar);
    message.accuInit !== undefined && (obj.accuInit = message.accuInit ? Expr.toJSON(message.accuInit) : undefined);
    message.loopCondition !== undefined && (obj.loopCondition = message.loopCondition ? Expr.toJSON(message.loopCondition) : undefined);
    message.loopStep !== undefined && (obj.loopStep = message.loopStep ? Expr.toJSON(message.loopStep) : undefined);
    message.result !== undefined && (obj.result = message.result ? Expr.toJSON(message.result) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Expr_Comprehension>): Expr_Comprehension {
    const message = createBaseExpr_Comprehension();
    message.iterVar = object.iterVar ?? "";
    message.iterRange = object.iterRange !== undefined && object.iterRange !== null ? Expr.fromPartial(object.iterRange) : undefined;
    message.accuVar = object.accuVar ?? "";
    message.accuInit = object.accuInit !== undefined && object.accuInit !== null ? Expr.fromPartial(object.accuInit) : undefined;
    message.loopCondition = object.loopCondition !== undefined && object.loopCondition !== null ? Expr.fromPartial(object.loopCondition) : undefined;
    message.loopStep = object.loopStep !== undefined && object.loopStep !== null ? Expr.fromPartial(object.loopStep) : undefined;
    message.result = object.result !== undefined && object.result !== null ? Expr.fromPartial(object.result) : undefined;
    return message;
  },
  fromSDK(object: Expr_ComprehensionSDKType): Expr_Comprehension {
    return {
      iterVar: object?.iter_var,
      iterRange: object.iter_range ? Expr.fromSDK(object.iter_range) : undefined,
      accuVar: object?.accu_var,
      accuInit: object.accu_init ? Expr.fromSDK(object.accu_init) : undefined,
      loopCondition: object.loop_condition ? Expr.fromSDK(object.loop_condition) : undefined,
      loopStep: object.loop_step ? Expr.fromSDK(object.loop_step) : undefined,
      result: object.result ? Expr.fromSDK(object.result) : undefined
    };
  },
  fromSDKJSON(object: any): Expr_ComprehensionSDKType {
    return {
      iter_var: isSet(object.iter_var) ? String(object.iter_var) : "",
      iter_range: isSet(object.iter_range) ? Expr.fromSDKJSON(object.iter_range) : undefined,
      accu_var: isSet(object.accu_var) ? String(object.accu_var) : "",
      accu_init: isSet(object.accu_init) ? Expr.fromSDKJSON(object.accu_init) : undefined,
      loop_condition: isSet(object.loop_condition) ? Expr.fromSDKJSON(object.loop_condition) : undefined,
      loop_step: isSet(object.loop_step) ? Expr.fromSDKJSON(object.loop_step) : undefined,
      result: isSet(object.result) ? Expr.fromSDKJSON(object.result) : undefined
    };
  },
  toSDK(message: Expr_Comprehension): Expr_ComprehensionSDKType {
    const obj: any = {};
    obj.iter_var = message.iterVar;
    message.iterRange !== undefined && (obj.iter_range = message.iterRange ? Expr.toSDK(message.iterRange) : undefined);
    obj.accu_var = message.accuVar;
    message.accuInit !== undefined && (obj.accu_init = message.accuInit ? Expr.toSDK(message.accuInit) : undefined);
    message.loopCondition !== undefined && (obj.loop_condition = message.loopCondition ? Expr.toSDK(message.loopCondition) : undefined);
    message.loopStep !== undefined && (obj.loop_step = message.loopStep ? Expr.toSDK(message.loopStep) : undefined);
    message.result !== undefined && (obj.result = message.result ? Expr.toSDK(message.result) : undefined);
    return obj;
  },
  fromAmino(object: Expr_ComprehensionAmino): Expr_Comprehension {
    const message = createBaseExpr_Comprehension();
    if (object.iter_var !== undefined && object.iter_var !== null) {
      message.iterVar = object.iter_var;
    }
    if (object.iter_range !== undefined && object.iter_range !== null) {
      message.iterRange = Expr.fromAmino(object.iter_range);
    }
    if (object.accu_var !== undefined && object.accu_var !== null) {
      message.accuVar = object.accu_var;
    }
    if (object.accu_init !== undefined && object.accu_init !== null) {
      message.accuInit = Expr.fromAmino(object.accu_init);
    }
    if (object.loop_condition !== undefined && object.loop_condition !== null) {
      message.loopCondition = Expr.fromAmino(object.loop_condition);
    }
    if (object.loop_step !== undefined && object.loop_step !== null) {
      message.loopStep = Expr.fromAmino(object.loop_step);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = Expr.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message: Expr_Comprehension): Expr_ComprehensionAmino {
    const obj: any = {};
    obj.iter_var = message.iterVar === "" ? undefined : message.iterVar;
    obj.iter_range = message.iterRange ? Expr.toAmino(message.iterRange) : undefined;
    obj.accu_var = message.accuVar === "" ? undefined : message.accuVar;
    obj.accu_init = message.accuInit ? Expr.toAmino(message.accuInit) : undefined;
    obj.loop_condition = message.loopCondition ? Expr.toAmino(message.loopCondition) : undefined;
    obj.loop_step = message.loopStep ? Expr.toAmino(message.loopStep) : undefined;
    obj.result = message.result ? Expr.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: Expr_ComprehensionAminoMsg): Expr_Comprehension {
    return Expr_Comprehension.fromAmino(object.value);
  },
  fromProtoMsg(message: Expr_ComprehensionProtoMsg): Expr_Comprehension {
    return Expr_Comprehension.decode(message.value);
  },
  toProto(message: Expr_Comprehension): Uint8Array {
    return Expr_Comprehension.encode(message).finish();
  },
  toProtoMsg(message: Expr_Comprehension): Expr_ComprehensionProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.Comprehension",
      value: Expr_Comprehension.encode(message).finish()
    };
  }
};
function createBaseLiteral(): Literal {
  return {
    nullValue: undefined,
    boolValue: undefined,
    int64Value: undefined,
    uint64Value: undefined,
    doubleValue: undefined,
    stringValue: undefined,
    bytesValue: undefined
  };
}
export const Literal = {
  typeUrl: "/google.api.expr.v1beta1.Literal",
  encode(message: Literal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nullValue !== undefined) {
      writer.uint32(8).int32(message.nullValue);
    }
    if (message.boolValue !== undefined) {
      writer.uint32(16).bool(message.boolValue);
    }
    if (message.int64Value !== undefined) {
      writer.uint32(24).int64(message.int64Value);
    }
    if (message.uint64Value !== undefined) {
      writer.uint32(32).uint64(message.uint64Value);
    }
    if (message.doubleValue !== undefined) {
      writer.uint32(41).double(message.doubleValue);
    }
    if (message.stringValue !== undefined) {
      writer.uint32(50).string(message.stringValue);
    }
    if (message.bytesValue !== undefined) {
      writer.uint32(58).bytes(message.bytesValue);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Literal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiteral();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nullValue = (reader.int32() as any);
          break;
        case 2:
          message.boolValue = reader.bool();
          break;
        case 3:
          message.int64Value = reader.int64();
          break;
        case 4:
          message.uint64Value = reader.uint64();
          break;
        case 5:
          message.doubleValue = reader.double();
          break;
        case 6:
          message.stringValue = reader.string();
          break;
        case 7:
          message.bytesValue = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Literal {
    return {
      nullValue: isSet(object.nullValue) ? nullValueFromJSON(object.nullValue) : undefined,
      boolValue: isSet(object.boolValue) ? Boolean(object.boolValue) : undefined,
      int64Value: isSet(object.int64Value) ? BigInt(object.int64Value.toString()) : undefined,
      uint64Value: isSet(object.uint64Value) ? BigInt(object.uint64Value.toString()) : undefined,
      doubleValue: isSet(object.doubleValue) ? Number(object.doubleValue) : undefined,
      stringValue: isSet(object.stringValue) ? String(object.stringValue) : undefined,
      bytesValue: isSet(object.bytesValue) ? bytesFromBase64(object.bytesValue) : undefined
    };
  },
  toJSON(message: Literal): JsonSafe<Literal> {
    const obj: any = {};
    message.nullValue !== undefined && (obj.nullValue = nullValueToJSON(message.nullValue));
    message.boolValue !== undefined && (obj.boolValue = message.boolValue);
    if (message.int64Value !== undefined) {
      obj.int64Value = message.int64Value.toString();
    }
    if (message.uint64Value !== undefined) {
      obj.uint64Value = message.uint64Value.toString();
    }
    message.doubleValue !== undefined && (obj.doubleValue = message.doubleValue);
    message.stringValue !== undefined && (obj.stringValue = message.stringValue);
    message.bytesValue !== undefined && (obj.bytesValue = message.bytesValue !== undefined ? base64FromBytes(message.bytesValue) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Literal>): Literal {
    const message = createBaseLiteral();
    message.nullValue = object.nullValue ?? undefined;
    message.boolValue = object.boolValue ?? undefined;
    message.int64Value = object.int64Value !== undefined && object.int64Value !== null ? BigInt(object.int64Value.toString()) : undefined;
    message.uint64Value = object.uint64Value !== undefined && object.uint64Value !== null ? BigInt(object.uint64Value.toString()) : undefined;
    message.doubleValue = object.doubleValue ?? undefined;
    message.stringValue = object.stringValue ?? undefined;
    message.bytesValue = object.bytesValue ?? undefined;
    return message;
  },
  fromSDK(object: LiteralSDKType): Literal {
    return {
      nullValue: isSet(object.null_value) ? nullValueFromJSON(object.null_value) : undefined,
      boolValue: object?.bool_value,
      int64Value: object?.int64_value,
      uint64Value: object?.uint64_value,
      doubleValue: object?.double_value,
      stringValue: object?.string_value,
      bytesValue: object?.bytes_value
    };
  },
  fromSDKJSON(object: any): LiteralSDKType {
    return {
      null_value: isSet(object.null_value) ? nullValueFromJSON(object.null_value) : undefined,
      bool_value: isSet(object.bool_value) ? Boolean(object.bool_value) : undefined,
      int64_value: isSet(object.int64_value) ? BigInt(object.int64_value.toString()) : undefined,
      uint64_value: isSet(object.uint64_value) ? BigInt(object.uint64_value.toString()) : undefined,
      double_value: isSet(object.double_value) ? Number(object.double_value) : undefined,
      string_value: isSet(object.string_value) ? String(object.string_value) : undefined,
      bytes_value: isSet(object.bytes_value) ? bytesFromBase64(object.bytes_value) : undefined
    };
  },
  toSDK(message: Literal): LiteralSDKType {
    const obj: any = {};
    message.nullValue !== undefined && (obj.null_value = nullValueToJSON(message.nullValue));
    obj.bool_value = message.boolValue;
    obj.int64_value = message.int64Value;
    obj.uint64_value = message.uint64Value;
    obj.double_value = message.doubleValue;
    obj.string_value = message.stringValue;
    obj.bytes_value = message.bytesValue;
    return obj;
  },
  fromAmino(object: LiteralAmino): Literal {
    const message = createBaseLiteral();
    if (object.null_value !== undefined && object.null_value !== null) {
      message.nullValue = object.null_value;
    }
    if (object.bool_value !== undefined && object.bool_value !== null) {
      message.boolValue = object.bool_value;
    }
    if (object.int64_value !== undefined && object.int64_value !== null) {
      message.int64Value = BigInt(object.int64_value);
    }
    if (object.uint64_value !== undefined && object.uint64_value !== null) {
      message.uint64Value = BigInt(object.uint64_value);
    }
    if (object.double_value !== undefined && object.double_value !== null) {
      message.doubleValue = object.double_value;
    }
    if (object.string_value !== undefined && object.string_value !== null) {
      message.stringValue = object.string_value;
    }
    if (object.bytes_value !== undefined && object.bytes_value !== null) {
      message.bytesValue = bytesFromBase64(object.bytes_value);
    }
    return message;
  },
  toAmino(message: Literal): LiteralAmino {
    const obj: any = {};
    obj.null_value = message.nullValue === null ? undefined : message.nullValue;
    obj.bool_value = message.boolValue === null ? undefined : message.boolValue;
    obj.int64_value = message.int64Value !== BigInt(0) ? message.int64Value?.toString() : undefined;
    obj.uint64_value = message.uint64Value !== BigInt(0) ? message.uint64Value?.toString() : undefined;
    obj.double_value = message.doubleValue === null ? undefined : message.doubleValue;
    obj.string_value = message.stringValue === null ? undefined : message.stringValue;
    obj.bytes_value = message.bytesValue ? base64FromBytes(message.bytesValue) : undefined;
    return obj;
  },
  fromAminoMsg(object: LiteralAminoMsg): Literal {
    return Literal.fromAmino(object.value);
  },
  fromProtoMsg(message: LiteralProtoMsg): Literal {
    return Literal.decode(message.value);
  },
  toProto(message: Literal): Uint8Array {
    return Literal.encode(message).finish();
  },
  toProtoMsg(message: Literal): LiteralProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.Literal",
      value: Literal.encode(message).finish()
    };
  }
};