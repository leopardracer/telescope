import { NullValue, NullValueSDKType, nullValueFromJSON, nullValueToJSON } from "../../../protobuf/struct";
import { Duration, DurationAmino, DurationSDKType } from "../../../protobuf/duration";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes, isObject } from "../../../../helpers";
export const protobufPackage = "google.api.expr.v1alpha1";
/** An expression together with source information as returned by the parser. */
export interface ParsedExpr {
  /** The parsed expression. */
  expr?: Expr;
  /** The source info derived from input that generated the parsed `expr`. */
  sourceInfo?: SourceInfo;
}
export interface ParsedExprProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.ParsedExpr";
  value: Uint8Array;
}
/** An expression together with source information as returned by the parser. */
export interface ParsedExprAmino {
  /** The parsed expression. */
  expr?: ExprAmino;
  /** The source info derived from input that generated the parsed `expr`. */
  source_info?: SourceInfoAmino;
}
/** An expression together with source information as returned by the parser. */
export interface ParsedExprSDKType {
  expr?: ExprSDKType;
  source_info?: SourceInfoSDKType;
}
/**
 * An abstract representation of a common expression.
 * 
 * Expressions are abstractly represented as a collection of identifiers,
 * select statements, function calls, literals, and comprehensions. All
 * operators with the exception of the '.' operator are modelled as function
 * calls. This makes it easy to represent new operators into the existing AST.
 * 
 * All references within expressions must resolve to a [Decl][google.api.expr.v1alpha1.Decl] provided at
 * type-check for an expression to be valid. A reference may either be a bare
 * identifier `name` or a qualified identifier `google.api.name`. References
 * may either refer to a value or a function declaration.
 * 
 * For example, the expression `google.api.name.startsWith('expr')` references
 * the declaration `google.api.name` within a [Expr.Select][google.api.expr.v1alpha1.Expr.Select] expression, and
 * the function declaration `startsWith`.
 */
export interface Expr {
  /**
   * Required. An id assigned to this node by the parser which is unique in a
   * given expression tree. This is used to associate type information and other
   * attributes to a node in the parse tree.
   */
  id: bigint;
  /** A literal expression. */
  constExpr?: Constant;
  /** An identifier expression. */
  identExpr?: Expr_Ident;
  /** A field selection expression, e.g. `request.auth`. */
  selectExpr?: Expr_Select;
  /** A call expression, including calls to predefined functions and operators. */
  callExpr?: Expr_Call;
  /** A list creation expression. */
  listExpr?: Expr_CreateList;
  /** A map or message creation expression. */
  structExpr?: Expr_CreateStruct;
  /** A comprehension expression. */
  comprehensionExpr?: Expr_Comprehension;
}
export interface ExprProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.Expr";
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
 * All references within expressions must resolve to a [Decl][google.api.expr.v1alpha1.Decl] provided at
 * type-check for an expression to be valid. A reference may either be a bare
 * identifier `name` or a qualified identifier `google.api.name`. References
 * may either refer to a value or a function declaration.
 * 
 * For example, the expression `google.api.name.startsWith('expr')` references
 * the declaration `google.api.name` within a [Expr.Select][google.api.expr.v1alpha1.Expr.Select] expression, and
 * the function declaration `startsWith`.
 */
export interface ExprAmino {
  /**
   * Required. An id assigned to this node by the parser which is unique in a
   * given expression tree. This is used to associate type information and other
   * attributes to a node in the parse tree.
   */
  id?: string;
  /** A literal expression. */
  const_expr?: ConstantAmino;
  /** An identifier expression. */
  ident_expr?: Expr_IdentAmino;
  /** A field selection expression, e.g. `request.auth`. */
  select_expr?: Expr_SelectAmino;
  /** A call expression, including calls to predefined functions and operators. */
  call_expr?: Expr_CallAmino;
  /** A list creation expression. */
  list_expr?: Expr_CreateListAmino;
  /** A map or message creation expression. */
  struct_expr?: Expr_CreateStructAmino;
  /** A comprehension expression. */
  comprehension_expr?: Expr_ComprehensionAmino;
}
/**
 * An abstract representation of a common expression.
 * 
 * Expressions are abstractly represented as a collection of identifiers,
 * select statements, function calls, literals, and comprehensions. All
 * operators with the exception of the '.' operator are modelled as function
 * calls. This makes it easy to represent new operators into the existing AST.
 * 
 * All references within expressions must resolve to a [Decl][google.api.expr.v1alpha1.Decl] provided at
 * type-check for an expression to be valid. A reference may either be a bare
 * identifier `name` or a qualified identifier `google.api.name`. References
 * may either refer to a value or a function declaration.
 * 
 * For example, the expression `google.api.name.startsWith('expr')` references
 * the declaration `google.api.name` within a [Expr.Select][google.api.expr.v1alpha1.Expr.Select] expression, and
 * the function declaration `startsWith`.
 */
export interface ExprSDKType {
  id: bigint;
  const_expr?: ConstantSDKType;
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
   * Qualified names are represented by the [Expr.Select][google.api.expr.v1alpha1.Expr.Select] expression.
   */
  name: string;
}
export interface Expr_IdentProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.Ident";
  value: Uint8Array;
}
/** An identifier expression. e.g. `request`. */
export interface Expr_IdentAmino {
  /**
   * Required. Holds a single, unqualified identifier, possibly preceded by a
   * '.'.
   * 
   * Qualified names are represented by the [Expr.Select][google.api.expr.v1alpha1.Expr.Select] expression.
   */
  name?: string;
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
  typeUrl: "/google.api.expr.v1alpha1.Select";
  value: Uint8Array;
}
/** A field selection expression. e.g. `request.auth`. */
export interface Expr_SelectAmino {
  /**
   * Required. The target of the selection expression.
   * 
   * For example, in the select expression `request.auth`, the `request`
   * portion of the expression is the `operand`.
   */
  operand?: ExprAmino;
  /**
   * Required. The name of the field to select.
   * 
   * For example, in the select expression `request.auth`, the `auth` portion
   * of the expression would be the `field`.
   */
  field?: string;
  /**
   * Whether the select is to be interpreted as a field presence test.
   * 
   * This results from the macro `has(request.auth)`.
   */
  test_only?: boolean;
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
  typeUrl: "/google.api.expr.v1alpha1.Call";
  value: Uint8Array;
}
/**
 * A call expression, including calls to predefined functions and operators.
 * 
 * For example, `value == 10`, `size(map_value)`.
 */
export interface Expr_CallAmino {
  /**
   * The target of an method call-style expression. For example, `x` in
   * `x.f()`.
   */
  target?: ExprAmino;
  /** Required. The name of the function or method being called. */
  function?: string;
  /** The arguments. */
  args?: ExprAmino[];
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
 * Lists may either be homogenous, e.g. `[1, 2, 3]`, or heterogeneous, e.g.
 * `dyn([1, 'hello', 2.0])`
 */
export interface Expr_CreateList {
  /** The elements part of the list. */
  elements: Expr[];
}
export interface Expr_CreateListProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.CreateList";
  value: Uint8Array;
}
/**
 * A list creation expression.
 * 
 * Lists may either be homogenous, e.g. `[1, 2, 3]`, or heterogeneous, e.g.
 * `dyn([1, 'hello', 2.0])`
 */
export interface Expr_CreateListAmino {
  /** The elements part of the list. */
  elements?: ExprAmino[];
}
/**
 * A list creation expression.
 * 
 * Lists may either be homogenous, e.g. `[1, 2, 3]`, or heterogeneous, e.g.
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
  messageName: string;
  /** The entries in the creation expression. */
  entries: Expr_CreateStruct_Entry[];
}
export interface Expr_CreateStructProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.CreateStruct";
  value: Uint8Array;
}
/**
 * A map or message creation expression.
 * 
 * Maps are constructed as `{'key_name': 'value'}`. Message construction is
 * similar, but prefixed with a type name and composed of field ids:
 * `types.MyType{field_id: 'value'}`.
 */
export interface Expr_CreateStructAmino {
  /**
   * The type name of the message to be created, empty when creating map
   * literals.
   */
  message_name?: string;
  /** The entries in the creation expression. */
  entries?: Expr_CreateStruct_EntryAmino[];
}
/**
 * A map or message creation expression.
 * 
 * Maps are constructed as `{'key_name': 'value'}`. Message construction is
 * similar, but prefixed with a type name and composed of field ids:
 * `types.MyType{field_id: 'value'}`.
 */
export interface Expr_CreateStructSDKType {
  message_name: string;
  entries: Expr_CreateStruct_EntrySDKType[];
}
/** Represents an entry. */
export interface Expr_CreateStruct_Entry {
  /**
   * Required. An id assigned to this node by the parser which is unique
   * in a given expression tree. This is used to associate type
   * information and other attributes to the node.
   */
  id: bigint;
  /** The field key for a message creator statement. */
  fieldKey?: string;
  /** The key expression for a map creation statement. */
  mapKey?: Expr;
  /** Required. The value assigned to the key. */
  value?: Expr;
}
export interface Expr_CreateStruct_EntryProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.Entry";
  value: Uint8Array;
}
/** Represents an entry. */
export interface Expr_CreateStruct_EntryAmino {
  /**
   * Required. An id assigned to this node by the parser which is unique
   * in a given expression tree. This is used to associate type
   * information and other attributes to the node.
   */
  id?: string;
  /** The field key for a message creator statement. */
  field_key?: string;
  /** The key expression for a map creation statement. */
  map_key?: ExprAmino;
  /** Required. The value assigned to the key. */
  value?: ExprAmino;
}
/** Represents an entry. */
export interface Expr_CreateStruct_EntrySDKType {
  id: bigint;
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
  typeUrl: "/google.api.expr.v1alpha1.Comprehension";
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
export interface Expr_ComprehensionAmino {
  /** The name of the iteration variable. */
  iter_var?: string;
  /** The range over which var iterates. */
  iter_range?: ExprAmino;
  /** The name of the variable used for accumulation of the result. */
  accu_var?: string;
  /** The initial value of the accumulator. */
  accu_init?: ExprAmino;
  /**
   * An expression which can contain iter_var and accu_var.
   * 
   * Returns false when the result has been computed and may be used as
   * a hint to short-circuit the remainder of the comprehension.
   */
  loop_condition?: ExprAmino;
  /**
   * An expression which can contain iter_var and accu_var.
   * 
   * Computes the next value of accu_var.
   */
  loop_step?: ExprAmino;
  /**
   * An expression which can contain accu_var.
   * 
   * Computes the result.
   */
  result?: ExprAmino;
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
 * Named 'Constant' here for backwards compatibility.
 * 
 * This is similar as the primitives supported in the well-known type
 * `google.protobuf.Value`, but richer so it can represent CEL's full range of
 * primitives.
 * 
 * Lists and structs are not included as constants as these aggregate types may
 * contain [Expr][google.api.expr.v1alpha1.Expr] elements which require evaluation and are thus not constant.
 * 
 * Examples of literals include: `"hello"`, `b'bytes'`, `1u`, `4.2`, `-2`,
 * `true`, `null`.
 */
export interface Constant {
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
  /**
   * protobuf.Duration value.
   * 
   * Deprecated: duration is no longer considered a builtin cel type.
   */
  /** @deprecated */
  durationValue?: Duration;
  /**
   * protobuf.Timestamp value.
   * 
   * Deprecated: timestamp is no longer considered a builtin cel type.
   */
  /** @deprecated */
  timestampValue?: Date;
}
export interface ConstantProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.Constant";
  value: Uint8Array;
}
/**
 * Represents a primitive literal.
 * 
 * Named 'Constant' here for backwards compatibility.
 * 
 * This is similar as the primitives supported in the well-known type
 * `google.protobuf.Value`, but richer so it can represent CEL's full range of
 * primitives.
 * 
 * Lists and structs are not included as constants as these aggregate types may
 * contain [Expr][google.api.expr.v1alpha1.Expr] elements which require evaluation and are thus not constant.
 * 
 * Examples of literals include: `"hello"`, `b'bytes'`, `1u`, `4.2`, `-2`,
 * `true`, `null`.
 */
export interface ConstantAmino {
  /** null value. */
  null_value?: NullValue;
  /** boolean value. */
  bool_value?: boolean;
  /** int64 value. */
  int64_value?: string;
  /** uint64 value. */
  uint64_value?: string;
  /** double value. */
  double_value?: number;
  /** string value. */
  string_value?: string;
  /** bytes value. */
  bytes_value?: string;
  /**
   * protobuf.Duration value.
   * 
   * Deprecated: duration is no longer considered a builtin cel type.
   */
  /** @deprecated */
  duration_value?: DurationAmino;
  /**
   * protobuf.Timestamp value.
   * 
   * Deprecated: timestamp is no longer considered a builtin cel type.
   */
  /** @deprecated */
  timestamp_value?: string;
}
/**
 * Represents a primitive literal.
 * 
 * Named 'Constant' here for backwards compatibility.
 * 
 * This is similar as the primitives supported in the well-known type
 * `google.protobuf.Value`, but richer so it can represent CEL's full range of
 * primitives.
 * 
 * Lists and structs are not included as constants as these aggregate types may
 * contain [Expr][google.api.expr.v1alpha1.Expr] elements which require evaluation and are thus not constant.
 * 
 * Examples of literals include: `"hello"`, `b'bytes'`, `1u`, `4.2`, `-2`,
 * `true`, `null`.
 */
export interface ConstantSDKType {
  null_value?: NullValue;
  bool_value?: boolean;
  int64_value?: bigint;
  uint64_value?: bigint;
  double_value?: number;
  string_value?: string;
  bytes_value?: Uint8Array;
  /** @deprecated */
  duration_value?: DurationSDKType;
  /** @deprecated */
  timestamp_value?: Date;
}
export interface SourceInfo_PositionsEntry {
  key: bigint;
  value: number;
}
export interface SourceInfo_PositionsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface SourceInfo_PositionsEntryAmino {
  key?: string;
  value?: number;
}
export interface SourceInfo_PositionsEntrySDKType {
  key: bigint;
  value: number;
}
export interface SourceInfo_MacroCallsEntry {
  key: bigint;
  value?: Expr;
}
export interface SourceInfo_MacroCallsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface SourceInfo_MacroCallsEntryAmino {
  key?: string;
  value?: ExprAmino;
}
export interface SourceInfo_MacroCallsEntrySDKType {
  key: bigint;
  value?: ExprSDKType;
}
/** Source information collected at parse time. */
export interface SourceInfo {
  /** The syntax version of the source, e.g. `cel1`. */
  syntaxVersion: string;
  /**
   * The location name. All position information attached to an expression is
   * relative to this location.
   * 
   * The location could be a file, UI element, or similar. For example,
   * `acme/app/AnvilPolicy.cel`.
   */
  location: string;
  /**
   * Monotonically increasing list of code point offsets where newlines
   * `\n` appear.
   * 
   * The line number of a given position is the index `i` where for a given
   * `id` the `line_offsets[i] < id_positions[id] < line_offsets[i+1]`. The
   * column may be derivd from `id_positions[id] - line_offsets[i]`.
   */
  lineOffsets: number[];
  /**
   * A map from the parse node id (e.g. `Expr.id`) to the code point offset
   * within the source.
   */
  positions: {
    [key: bigint]: number;
  };
  /**
   * A map from the parse node id where a macro replacement was made to the
   * call `Expr` that resulted in a macro expansion.
   * 
   * For example, `has(value.field)` is a function call that is replaced by a
   * `test_only` field selection in the AST. Likewise, the call
   * `list.exists(e, e > 10)` translates to a comprehension expression. The key
   * in the map corresponds to the expression id of the expanded macro, and the
   * value is the call `Expr` that was replaced.
   */
  macroCalls: {
    [key: bigint]: Expr;
  };
}
export interface SourceInfoProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.SourceInfo";
  value: Uint8Array;
}
/** Source information collected at parse time. */
export interface SourceInfoAmino {
  /** The syntax version of the source, e.g. `cel1`. */
  syntax_version?: string;
  /**
   * The location name. All position information attached to an expression is
   * relative to this location.
   * 
   * The location could be a file, UI element, or similar. For example,
   * `acme/app/AnvilPolicy.cel`.
   */
  location?: string;
  /**
   * Monotonically increasing list of code point offsets where newlines
   * `\n` appear.
   * 
   * The line number of a given position is the index `i` where for a given
   * `id` the `line_offsets[i] < id_positions[id] < line_offsets[i+1]`. The
   * column may be derivd from `id_positions[id] - line_offsets[i]`.
   */
  line_offsets?: number[];
  /**
   * A map from the parse node id (e.g. `Expr.id`) to the code point offset
   * within the source.
   */
  positions?: {
    [key: string]: number;
  };
  /**
   * A map from the parse node id where a macro replacement was made to the
   * call `Expr` that resulted in a macro expansion.
   * 
   * For example, `has(value.field)` is a function call that is replaced by a
   * `test_only` field selection in the AST. Likewise, the call
   * `list.exists(e, e > 10)` translates to a comprehension expression. The key
   * in the map corresponds to the expression id of the expanded macro, and the
   * value is the call `Expr` that was replaced.
   */
  macro_calls?: {
    [key: string]: ExprAmino;
  };
}
/** Source information collected at parse time. */
export interface SourceInfoSDKType {
  syntax_version: string;
  location: string;
  line_offsets: number[];
  positions: {
    [key: bigint]: number;
  };
  macro_calls: {
    [key: bigint]: ExprSDKType;
  };
}
/** A specific position in source. */
export interface SourcePosition {
  /** The soucre location name (e.g. file name). */
  location: string;
  /** The UTF-8 code unit offset. */
  offset: number;
  /**
   * The 1-based index of the starting line in the source text
   * where the issue occurs, or 0 if unknown.
   */
  line: number;
  /**
   * The 0-based index of the starting position within the line of source text
   * where the issue occurs.  Only meaningful if line is nonzero.
   */
  column: number;
}
export interface SourcePositionProtoMsg {
  typeUrl: "/google.api.expr.v1alpha1.SourcePosition";
  value: Uint8Array;
}
/** A specific position in source. */
export interface SourcePositionAmino {
  /** The soucre location name (e.g. file name). */
  location?: string;
  /** The UTF-8 code unit offset. */
  offset?: number;
  /**
   * The 1-based index of the starting line in the source text
   * where the issue occurs, or 0 if unknown.
   */
  line?: number;
  /**
   * The 0-based index of the starting position within the line of source text
   * where the issue occurs.  Only meaningful if line is nonzero.
   */
  column?: number;
}
/** A specific position in source. */
export interface SourcePositionSDKType {
  location: string;
  offset: number;
  line: number;
  column: number;
}
function createBaseParsedExpr(): ParsedExpr {
  return {
    expr: undefined,
    sourceInfo: undefined
  };
}
export const ParsedExpr = {
  typeUrl: "/google.api.expr.v1alpha1.ParsedExpr",
  encode(message: ParsedExpr, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.expr !== undefined) {
      Expr.encode(message.expr, writer.uint32(18).fork()).ldelim();
    }
    if (message.sourceInfo !== undefined) {
      SourceInfo.encode(message.sourceInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): ParsedExpr {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParsedExpr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.expr = Expr.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.sourceInfo = SourceInfo.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParsedExpr {
    const obj = createBaseParsedExpr();
    if (isSet(object.expr)) obj.expr = Expr.fromJSON(object.expr);
    if (isSet(object.sourceInfo)) obj.sourceInfo = SourceInfo.fromJSON(object.sourceInfo);
    return obj;
  },
  fromPartial(object: DeepPartial<ParsedExpr>): ParsedExpr {
    const message = createBaseParsedExpr();
    if (object.expr !== undefined && object.expr !== null) {
      message.expr = Expr.fromPartial(object.expr);
    }
    if (object.sourceInfo !== undefined && object.sourceInfo !== null) {
      message.sourceInfo = SourceInfo.fromPartial(object.sourceInfo);
    }
    return message;
  },
  fromSDK(object: ParsedExprSDKType): ParsedExpr {
    return {
      expr: object.expr ? Expr.fromSDK(object.expr) : undefined,
      sourceInfo: object.source_info ? SourceInfo.fromSDK(object.source_info) : undefined
    };
  },
  toSDK(message: ParsedExpr): ParsedExprSDKType {
    const obj: any = {};
    message.expr !== undefined && (obj.expr = message.expr ? Expr.toSDK(message.expr) : undefined);
    message.sourceInfo !== undefined && (obj.source_info = message.sourceInfo ? SourceInfo.toSDK(message.sourceInfo) : undefined);
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
    return message;
  },
  toAmino(message: ParsedExpr, useInterfaces: boolean = true): ParsedExprAmino {
    const obj: any = {};
    obj.expr = message.expr ? Expr.toAmino(message.expr, useInterfaces) : undefined;
    obj.source_info = message.sourceInfo ? SourceInfo.toAmino(message.sourceInfo, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: ParsedExprProtoMsg, useInterfaces: boolean = true): ParsedExpr {
    return ParsedExpr.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: ParsedExpr): Uint8Array {
    return ParsedExpr.encode(message).finish();
  },
  toProtoMsg(message: ParsedExpr): ParsedExprProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.ParsedExpr",
      value: ParsedExpr.encode(message).finish()
    };
  }
};
function createBaseExpr(): Expr {
  return {
    id: BigInt(0),
    constExpr: undefined,
    identExpr: undefined,
    selectExpr: undefined,
    callExpr: undefined,
    listExpr: undefined,
    structExpr: undefined,
    comprehensionExpr: undefined
  };
}
export const Expr = {
  typeUrl: "/google.api.expr.v1alpha1.Expr",
  encode(message: Expr, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(16).int64(message.id);
    }
    if (message.constExpr !== undefined) {
      Constant.encode(message.constExpr, writer.uint32(26).fork()).ldelim();
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Expr {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.id = reader.int64();
          break;
        case 3:
          message.constExpr = Constant.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.identExpr = Expr_Ident.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.selectExpr = Expr_Select.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.callExpr = Expr_Call.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.listExpr = Expr_CreateList.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 8:
          message.structExpr = Expr_CreateStruct.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 9:
          message.comprehensionExpr = Expr_Comprehension.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr {
    const obj = createBaseExpr();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.constExpr)) obj.constExpr = Constant.fromJSON(object.constExpr);
    if (isSet(object.identExpr)) obj.identExpr = Expr_Ident.fromJSON(object.identExpr);
    if (isSet(object.selectExpr)) obj.selectExpr = Expr_Select.fromJSON(object.selectExpr);
    if (isSet(object.callExpr)) obj.callExpr = Expr_Call.fromJSON(object.callExpr);
    if (isSet(object.listExpr)) obj.listExpr = Expr_CreateList.fromJSON(object.listExpr);
    if (isSet(object.structExpr)) obj.structExpr = Expr_CreateStruct.fromJSON(object.structExpr);
    if (isSet(object.comprehensionExpr)) obj.comprehensionExpr = Expr_Comprehension.fromJSON(object.comprehensionExpr);
    return obj;
  },
  fromPartial(object: DeepPartial<Expr>): Expr {
    const message = createBaseExpr();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    if (object.constExpr !== undefined && object.constExpr !== null) {
      message.constExpr = Constant.fromPartial(object.constExpr);
    }
    if (object.identExpr !== undefined && object.identExpr !== null) {
      message.identExpr = Expr_Ident.fromPartial(object.identExpr);
    }
    if (object.selectExpr !== undefined && object.selectExpr !== null) {
      message.selectExpr = Expr_Select.fromPartial(object.selectExpr);
    }
    if (object.callExpr !== undefined && object.callExpr !== null) {
      message.callExpr = Expr_Call.fromPartial(object.callExpr);
    }
    if (object.listExpr !== undefined && object.listExpr !== null) {
      message.listExpr = Expr_CreateList.fromPartial(object.listExpr);
    }
    if (object.structExpr !== undefined && object.structExpr !== null) {
      message.structExpr = Expr_CreateStruct.fromPartial(object.structExpr);
    }
    if (object.comprehensionExpr !== undefined && object.comprehensionExpr !== null) {
      message.comprehensionExpr = Expr_Comprehension.fromPartial(object.comprehensionExpr);
    }
    return message;
  },
  fromSDK(object: ExprSDKType): Expr {
    return {
      id: object?.id,
      constExpr: object.const_expr ? Constant.fromSDK(object.const_expr) : undefined,
      identExpr: object.ident_expr ? Expr_Ident.fromSDK(object.ident_expr) : undefined,
      selectExpr: object.select_expr ? Expr_Select.fromSDK(object.select_expr) : undefined,
      callExpr: object.call_expr ? Expr_Call.fromSDK(object.call_expr) : undefined,
      listExpr: object.list_expr ? Expr_CreateList.fromSDK(object.list_expr) : undefined,
      structExpr: object.struct_expr ? Expr_CreateStruct.fromSDK(object.struct_expr) : undefined,
      comprehensionExpr: object.comprehension_expr ? Expr_Comprehension.fromSDK(object.comprehension_expr) : undefined
    };
  },
  toSDK(message: Expr): ExprSDKType {
    const obj: any = {};
    obj.id = message.id;
    message.constExpr !== undefined && (obj.const_expr = message.constExpr ? Constant.toSDK(message.constExpr) : undefined);
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
      message.id = BigInt(object.id);
    }
    if (object.const_expr !== undefined && object.const_expr !== null) {
      message.constExpr = Constant.fromAmino(object.const_expr);
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
  toAmino(message: Expr, useInterfaces: boolean = true): ExprAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.const_expr = message.constExpr ? Constant.toAmino(message.constExpr, useInterfaces) : undefined;
    obj.ident_expr = message.identExpr ? Expr_Ident.toAmino(message.identExpr, useInterfaces) : undefined;
    obj.select_expr = message.selectExpr ? Expr_Select.toAmino(message.selectExpr, useInterfaces) : undefined;
    obj.call_expr = message.callExpr ? Expr_Call.toAmino(message.callExpr, useInterfaces) : undefined;
    obj.list_expr = message.listExpr ? Expr_CreateList.toAmino(message.listExpr, useInterfaces) : undefined;
    obj.struct_expr = message.structExpr ? Expr_CreateStruct.toAmino(message.structExpr, useInterfaces) : undefined;
    obj.comprehension_expr = message.comprehensionExpr ? Expr_Comprehension.toAmino(message.comprehensionExpr, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: ExprProtoMsg, useInterfaces: boolean = true): Expr {
    return Expr.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Expr): Uint8Array {
    return Expr.encode(message).finish();
  },
  toProtoMsg(message: Expr): ExprProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.Expr",
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
  typeUrl: "/google.api.expr.v1alpha1.Ident",
  encode(message: Expr_Ident, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Expr_Ident {
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
    const obj = createBaseExpr_Ident();
    if (isSet(object.name)) obj.name = String(object.name);
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
  toAmino(message: Expr_Ident, useInterfaces: boolean = true): Expr_IdentAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromProtoMsg(message: Expr_IdentProtoMsg, useInterfaces: boolean = true): Expr_Ident {
    return Expr_Ident.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Expr_Ident): Uint8Array {
    return Expr_Ident.encode(message).finish();
  },
  toProtoMsg(message: Expr_Ident): Expr_IdentProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.Ident",
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
  typeUrl: "/google.api.expr.v1alpha1.Select",
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Expr_Select {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_Select();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operand = Expr.decode(reader, reader.uint32(), useInterfaces);
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
    const obj = createBaseExpr_Select();
    if (isSet(object.operand)) obj.operand = Expr.fromJSON(object.operand);
    if (isSet(object.field)) obj.field = String(object.field);
    if (isSet(object.testOnly)) obj.testOnly = Boolean(object.testOnly);
    return obj;
  },
  fromPartial(object: DeepPartial<Expr_Select>): Expr_Select {
    const message = createBaseExpr_Select();
    if (object.operand !== undefined && object.operand !== null) {
      message.operand = Expr.fromPartial(object.operand);
    }
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
  toAmino(message: Expr_Select, useInterfaces: boolean = true): Expr_SelectAmino {
    const obj: any = {};
    obj.operand = message.operand ? Expr.toAmino(message.operand, useInterfaces) : undefined;
    obj.field = message.field === "" ? undefined : message.field;
    obj.test_only = message.testOnly === false ? undefined : message.testOnly;
    return obj;
  },
  fromProtoMsg(message: Expr_SelectProtoMsg, useInterfaces: boolean = true): Expr_Select {
    return Expr_Select.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Expr_Select): Uint8Array {
    return Expr_Select.encode(message).finish();
  },
  toProtoMsg(message: Expr_Select): Expr_SelectProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.Select",
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
  typeUrl: "/google.api.expr.v1alpha1.Call",
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Expr_Call {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_Call();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.target = Expr.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 2:
          message.function = reader.string();
          break;
        case 3:
          message.args.push(Expr.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr_Call {
    const obj = createBaseExpr_Call();
    if (isSet(object.target)) obj.target = Expr.fromJSON(object.target);
    if (isSet(object.function)) obj.function = String(object.function);
    if (Array.isArray(object?.args)) obj.args = object.args.map((e: any) => Expr.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<Expr_Call>): Expr_Call {
    const message = createBaseExpr_Call();
    if (object.target !== undefined && object.target !== null) {
      message.target = Expr.fromPartial(object.target);
    }
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
  toAmino(message: Expr_Call, useInterfaces: boolean = true): Expr_CallAmino {
    const obj: any = {};
    obj.target = message.target ? Expr.toAmino(message.target, useInterfaces) : undefined;
    obj.function = message.function === "" ? undefined : message.function;
    if (message.args) {
      obj.args = message.args.map(e => e ? Expr.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.args = message.args;
    }
    return obj;
  },
  fromProtoMsg(message: Expr_CallProtoMsg, useInterfaces: boolean = true): Expr_Call {
    return Expr_Call.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Expr_Call): Uint8Array {
    return Expr_Call.encode(message).finish();
  },
  toProtoMsg(message: Expr_Call): Expr_CallProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.Call",
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
  typeUrl: "/google.api.expr.v1alpha1.CreateList",
  encode(message: Expr_CreateList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.elements) {
      Expr.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Expr_CreateList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_CreateList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.elements.push(Expr.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr_CreateList {
    const obj = createBaseExpr_CreateList();
    if (Array.isArray(object?.elements)) obj.elements = object.elements.map((e: any) => Expr.fromJSON(e));
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
  toAmino(message: Expr_CreateList, useInterfaces: boolean = true): Expr_CreateListAmino {
    const obj: any = {};
    if (message.elements) {
      obj.elements = message.elements.map(e => e ? Expr.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.elements = message.elements;
    }
    return obj;
  },
  fromProtoMsg(message: Expr_CreateListProtoMsg, useInterfaces: boolean = true): Expr_CreateList {
    return Expr_CreateList.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Expr_CreateList): Uint8Array {
    return Expr_CreateList.encode(message).finish();
  },
  toProtoMsg(message: Expr_CreateList): Expr_CreateListProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.CreateList",
      value: Expr_CreateList.encode(message).finish()
    };
  }
};
function createBaseExpr_CreateStruct(): Expr_CreateStruct {
  return {
    messageName: "",
    entries: []
  };
}
export const Expr_CreateStruct = {
  typeUrl: "/google.api.expr.v1alpha1.CreateStruct",
  encode(message: Expr_CreateStruct, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.messageName !== "") {
      writer.uint32(10).string(message.messageName);
    }
    for (const v of message.entries) {
      Expr_CreateStruct_Entry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Expr_CreateStruct {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_CreateStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messageName = reader.string();
          break;
        case 2:
          message.entries.push(Expr_CreateStruct_Entry.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr_CreateStruct {
    const obj = createBaseExpr_CreateStruct();
    if (isSet(object.messageName)) obj.messageName = String(object.messageName);
    if (Array.isArray(object?.entries)) obj.entries = object.entries.map((e: any) => Expr_CreateStruct_Entry.fromJSON(e));
    return obj;
  },
  fromPartial(object: DeepPartial<Expr_CreateStruct>): Expr_CreateStruct {
    const message = createBaseExpr_CreateStruct();
    message.messageName = object.messageName ?? "";
    message.entries = object.entries?.map(e => Expr_CreateStruct_Entry.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: Expr_CreateStructSDKType): Expr_CreateStruct {
    return {
      messageName: object?.message_name,
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => Expr_CreateStruct_Entry.fromSDK(e)) : []
    };
  },
  toSDK(message: Expr_CreateStruct): Expr_CreateStructSDKType {
    const obj: any = {};
    obj.message_name = message.messageName;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Expr_CreateStruct_Entry.toSDK(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromAmino(object: Expr_CreateStructAmino): Expr_CreateStruct {
    const message = createBaseExpr_CreateStruct();
    if (object.message_name !== undefined && object.message_name !== null) {
      message.messageName = object.message_name;
    }
    message.entries = object.entries?.map(e => Expr_CreateStruct_Entry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Expr_CreateStruct, useInterfaces: boolean = true): Expr_CreateStructAmino {
    const obj: any = {};
    obj.message_name = message.messageName === "" ? undefined : message.messageName;
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Expr_CreateStruct_Entry.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.entries = message.entries;
    }
    return obj;
  },
  fromProtoMsg(message: Expr_CreateStructProtoMsg, useInterfaces: boolean = true): Expr_CreateStruct {
    return Expr_CreateStruct.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Expr_CreateStruct): Uint8Array {
    return Expr_CreateStruct.encode(message).finish();
  },
  toProtoMsg(message: Expr_CreateStruct): Expr_CreateStructProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.CreateStruct",
      value: Expr_CreateStruct.encode(message).finish()
    };
  }
};
function createBaseExpr_CreateStruct_Entry(): Expr_CreateStruct_Entry {
  return {
    id: BigInt(0),
    fieldKey: undefined,
    mapKey: undefined,
    value: undefined
  };
}
export const Expr_CreateStruct_Entry = {
  typeUrl: "/google.api.expr.v1alpha1.Entry",
  encode(message: Expr_CreateStruct_Entry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).int64(message.id);
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Expr_CreateStruct_Entry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExpr_CreateStruct_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int64();
          break;
        case 2:
          message.fieldKey = reader.string();
          break;
        case 3:
          message.mapKey = Expr.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 4:
          message.value = Expr.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr_CreateStruct_Entry {
    const obj = createBaseExpr_CreateStruct_Entry();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.fieldKey)) obj.fieldKey = String(object.fieldKey);
    if (isSet(object.mapKey)) obj.mapKey = Expr.fromJSON(object.mapKey);
    if (isSet(object.value)) obj.value = Expr.fromJSON(object.value);
    return obj;
  },
  fromPartial(object: DeepPartial<Expr_CreateStruct_Entry>): Expr_CreateStruct_Entry {
    const message = createBaseExpr_CreateStruct_Entry();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    message.fieldKey = object.fieldKey ?? undefined;
    if (object.mapKey !== undefined && object.mapKey !== null) {
      message.mapKey = Expr.fromPartial(object.mapKey);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Expr.fromPartial(object.value);
    }
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
      message.id = BigInt(object.id);
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
  toAmino(message: Expr_CreateStruct_Entry, useInterfaces: boolean = true): Expr_CreateStruct_EntryAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    obj.field_key = message.fieldKey === null ? undefined : message.fieldKey;
    obj.map_key = message.mapKey ? Expr.toAmino(message.mapKey, useInterfaces) : undefined;
    obj.value = message.value ? Expr.toAmino(message.value, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: Expr_CreateStruct_EntryProtoMsg, useInterfaces: boolean = true): Expr_CreateStruct_Entry {
    return Expr_CreateStruct_Entry.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Expr_CreateStruct_Entry): Uint8Array {
    return Expr_CreateStruct_Entry.encode(message).finish();
  },
  toProtoMsg(message: Expr_CreateStruct_Entry): Expr_CreateStruct_EntryProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.Entry",
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
  typeUrl: "/google.api.expr.v1alpha1.Comprehension",
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Expr_Comprehension {
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
          message.iterRange = Expr.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 3:
          message.accuVar = reader.string();
          break;
        case 4:
          message.accuInit = Expr.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 5:
          message.loopCondition = Expr.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 6:
          message.loopStep = Expr.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 7:
          message.result = Expr.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Expr_Comprehension {
    const obj = createBaseExpr_Comprehension();
    if (isSet(object.iterVar)) obj.iterVar = String(object.iterVar);
    if (isSet(object.iterRange)) obj.iterRange = Expr.fromJSON(object.iterRange);
    if (isSet(object.accuVar)) obj.accuVar = String(object.accuVar);
    if (isSet(object.accuInit)) obj.accuInit = Expr.fromJSON(object.accuInit);
    if (isSet(object.loopCondition)) obj.loopCondition = Expr.fromJSON(object.loopCondition);
    if (isSet(object.loopStep)) obj.loopStep = Expr.fromJSON(object.loopStep);
    if (isSet(object.result)) obj.result = Expr.fromJSON(object.result);
    return obj;
  },
  fromPartial(object: DeepPartial<Expr_Comprehension>): Expr_Comprehension {
    const message = createBaseExpr_Comprehension();
    message.iterVar = object.iterVar ?? "";
    if (object.iterRange !== undefined && object.iterRange !== null) {
      message.iterRange = Expr.fromPartial(object.iterRange);
    }
    message.accuVar = object.accuVar ?? "";
    if (object.accuInit !== undefined && object.accuInit !== null) {
      message.accuInit = Expr.fromPartial(object.accuInit);
    }
    if (object.loopCondition !== undefined && object.loopCondition !== null) {
      message.loopCondition = Expr.fromPartial(object.loopCondition);
    }
    if (object.loopStep !== undefined && object.loopStep !== null) {
      message.loopStep = Expr.fromPartial(object.loopStep);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = Expr.fromPartial(object.result);
    }
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
  toAmino(message: Expr_Comprehension, useInterfaces: boolean = true): Expr_ComprehensionAmino {
    const obj: any = {};
    obj.iter_var = message.iterVar === "" ? undefined : message.iterVar;
    obj.iter_range = message.iterRange ? Expr.toAmino(message.iterRange, useInterfaces) : undefined;
    obj.accu_var = message.accuVar === "" ? undefined : message.accuVar;
    obj.accu_init = message.accuInit ? Expr.toAmino(message.accuInit, useInterfaces) : undefined;
    obj.loop_condition = message.loopCondition ? Expr.toAmino(message.loopCondition, useInterfaces) : undefined;
    obj.loop_step = message.loopStep ? Expr.toAmino(message.loopStep, useInterfaces) : undefined;
    obj.result = message.result ? Expr.toAmino(message.result, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: Expr_ComprehensionProtoMsg, useInterfaces: boolean = true): Expr_Comprehension {
    return Expr_Comprehension.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Expr_Comprehension): Uint8Array {
    return Expr_Comprehension.encode(message).finish();
  },
  toProtoMsg(message: Expr_Comprehension): Expr_ComprehensionProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.Comprehension",
      value: Expr_Comprehension.encode(message).finish()
    };
  }
};
function createBaseConstant(): Constant {
  return {
    nullValue: undefined,
    boolValue: undefined,
    int64Value: undefined,
    uint64Value: undefined,
    doubleValue: undefined,
    stringValue: undefined,
    bytesValue: undefined,
    durationValue: undefined,
    timestampValue: undefined
  };
}
export const Constant = {
  typeUrl: "/google.api.expr.v1alpha1.Constant",
  encode(message: Constant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.durationValue !== undefined) {
      Duration.encode(message.durationValue, writer.uint32(66).fork()).ldelim();
    }
    if (message.timestampValue !== undefined) {
      Timestamp.encode(toTimestamp(message.timestampValue), writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Constant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConstant();
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
        case 8:
          message.durationValue = Duration.decode(reader, reader.uint32(), useInterfaces);
          break;
        case 9:
          message.timestampValue = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Constant {
    const obj = createBaseConstant();
    if (isSet(object.nullValue)) obj.nullValue = nullValueFromJSON(object.nullValue);
    if (isSet(object.boolValue)) obj.boolValue = Boolean(object.boolValue);
    if (isSet(object.int64Value)) obj.int64Value = BigInt(object.int64Value.toString());
    if (isSet(object.uint64Value)) obj.uint64Value = BigInt(object.uint64Value.toString());
    if (isSet(object.doubleValue)) obj.doubleValue = Number(object.doubleValue);
    if (isSet(object.stringValue)) obj.stringValue = String(object.stringValue);
    if (isSet(object.bytesValue)) obj.bytesValue = bytesFromBase64(object.bytesValue);
    if (isSet(object.durationValue)) obj.durationValue = Duration.fromJSON(object.durationValue);
    if (isSet(object.timestampValue)) obj.timestampValue = new Date(object.timestampValue);
    return obj;
  },
  fromPartial(object: DeepPartial<Constant>): Constant {
    const message = createBaseConstant();
    message.nullValue = object.nullValue ?? undefined;
    message.boolValue = object.boolValue ?? undefined;
    if (object.int64Value !== undefined && object.int64Value !== null) {
      message.int64Value = BigInt(object.int64Value.toString());
    }
    if (object.uint64Value !== undefined && object.uint64Value !== null) {
      message.uint64Value = BigInt(object.uint64Value.toString());
    }
    message.doubleValue = object.doubleValue ?? undefined;
    message.stringValue = object.stringValue ?? undefined;
    message.bytesValue = object.bytesValue ?? undefined;
    if (object.durationValue !== undefined && object.durationValue !== null) {
      message.durationValue = Duration.fromPartial(object.durationValue);
    }
    message.timestampValue = object.timestampValue ?? undefined;
    return message;
  },
  fromSDK(object: ConstantSDKType): Constant {
    return {
      nullValue: isSet(object.null_value) ? nullValueFromJSON(object.null_value) : undefined,
      boolValue: object?.bool_value,
      int64Value: object?.int64_value,
      uint64Value: object?.uint64_value,
      doubleValue: object?.double_value,
      stringValue: object?.string_value,
      bytesValue: object?.bytes_value,
      durationValue: object.duration_value ? Duration.fromSDK(object.duration_value) : undefined,
      timestampValue: object.timestamp_value ?? undefined
    };
  },
  toSDK(message: Constant): ConstantSDKType {
    const obj: any = {};
    message.nullValue !== undefined && (obj.null_value = nullValueToJSON(message.nullValue));
    obj.bool_value = message.boolValue;
    obj.int64_value = message.int64Value;
    obj.uint64_value = message.uint64Value;
    obj.double_value = message.doubleValue;
    obj.string_value = message.stringValue;
    obj.bytes_value = message.bytesValue;
    message.durationValue !== undefined && (obj.duration_value = message.durationValue ? Duration.toSDK(message.durationValue) : undefined);
    message.timestampValue !== undefined && (obj.timestamp_value = message.timestampValue ?? undefined);
    return obj;
  },
  fromAmino(object: ConstantAmino): Constant {
    const message = createBaseConstant();
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
    if (object.duration_value !== undefined && object.duration_value !== null) {
      message.durationValue = Duration.fromAmino(object.duration_value);
    }
    if (object.timestamp_value !== undefined && object.timestamp_value !== null) {
      message.timestampValue = fromTimestamp(Timestamp.fromAmino(object.timestamp_value));
    }
    return message;
  },
  toAmino(message: Constant, useInterfaces: boolean = true): ConstantAmino {
    const obj: any = {};
    obj.null_value = message.nullValue === null ? undefined : message.nullValue;
    obj.bool_value = message.boolValue === null ? undefined : message.boolValue;
    obj.int64_value = message.int64Value !== BigInt(0) ? message.int64Value?.toString() : undefined;
    obj.uint64_value = message.uint64Value !== BigInt(0) ? message.uint64Value?.toString() : undefined;
    obj.double_value = message.doubleValue === null ? undefined : message.doubleValue;
    obj.string_value = message.stringValue === null ? undefined : message.stringValue;
    obj.bytes_value = message.bytesValue ? base64FromBytes(message.bytesValue) : undefined;
    obj.duration_value = message.durationValue ? Duration.toAmino(message.durationValue, useInterfaces) : undefined;
    obj.timestamp_value = message.timestampValue ? Timestamp.toAmino(toTimestamp(message.timestampValue)) : undefined;
    return obj;
  },
  fromProtoMsg(message: ConstantProtoMsg, useInterfaces: boolean = true): Constant {
    return Constant.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Constant): Uint8Array {
    return Constant.encode(message).finish();
  },
  toProtoMsg(message: Constant): ConstantProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.Constant",
      value: Constant.encode(message).finish()
    };
  }
};
function createBaseSourceInfo_PositionsEntry(): SourceInfo_PositionsEntry {
  return {
    key: BigInt(0),
    value: 0
  };
}
export const SourceInfo_PositionsEntry = {
  encode(message: SourceInfo_PositionsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== BigInt(0)) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== 0) {
      writer.uint32(16).int32(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SourceInfo_PositionsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo_PositionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int64();
          break;
        case 2:
          message.value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SourceInfo_PositionsEntry {
    const obj = createBaseSourceInfo_PositionsEntry();
    if (isSet(object.key)) obj.key = BigInt(object.key.toString());
    if (isSet(object.value)) obj.value = Number(object.value);
    return obj;
  },
  fromPartial(object: DeepPartial<SourceInfo_PositionsEntry>): SourceInfo_PositionsEntry {
    const message = createBaseSourceInfo_PositionsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = BigInt(object.key.toString());
    }
    message.value = object.value ?? 0;
    return message;
  },
  fromSDK(object: SourceInfo_PositionsEntrySDKType): SourceInfo_PositionsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: SourceInfo_PositionsEntry): SourceInfo_PositionsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: SourceInfo_PositionsEntryAmino): SourceInfo_PositionsEntry {
    const message = createBaseSourceInfo_PositionsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = BigInt(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: SourceInfo_PositionsEntry, useInterfaces: boolean = true): SourceInfo_PositionsEntryAmino {
    const obj: any = {};
    obj.key = message.key !== BigInt(0) ? message.key?.toString() : undefined;
    obj.value = message.value === 0 ? undefined : message.value;
    return obj;
  },
  fromProtoMsg(message: SourceInfo_PositionsEntryProtoMsg, useInterfaces: boolean = true): SourceInfo_PositionsEntry {
    return SourceInfo_PositionsEntry.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SourceInfo_PositionsEntry): Uint8Array {
    return SourceInfo_PositionsEntry.encode(message).finish();
  }
};
function createBaseSourceInfo_MacroCallsEntry(): SourceInfo_MacroCallsEntry {
  return {
    key: BigInt(0),
    value: undefined
  };
}
export const SourceInfo_MacroCallsEntry = {
  encode(message: SourceInfo_MacroCallsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== BigInt(0)) {
      writer.uint32(8).int64(message.key);
    }
    if (message.value !== undefined) {
      Expr.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SourceInfo_MacroCallsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo_MacroCallsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.int64();
          break;
        case 2:
          message.value = Expr.decode(reader, reader.uint32(), useInterfaces);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SourceInfo_MacroCallsEntry {
    const obj = createBaseSourceInfo_MacroCallsEntry();
    if (isSet(object.key)) obj.key = BigInt(object.key.toString());
    if (isSet(object.value)) obj.value = Expr.fromJSON(object.value);
    return obj;
  },
  fromPartial(object: DeepPartial<SourceInfo_MacroCallsEntry>): SourceInfo_MacroCallsEntry {
    const message = createBaseSourceInfo_MacroCallsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = BigInt(object.key.toString());
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Expr.fromPartial(object.value);
    }
    return message;
  },
  fromSDK(object: SourceInfo_MacroCallsEntrySDKType): SourceInfo_MacroCallsEntry {
    return {
      key: object?.key,
      value: object.value ? Expr.fromSDK(object.value) : undefined
    };
  },
  toSDK(message: SourceInfo_MacroCallsEntry): SourceInfo_MacroCallsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    message.value !== undefined && (obj.value = message.value ? Expr.toSDK(message.value) : undefined);
    return obj;
  },
  fromAmino(object: SourceInfo_MacroCallsEntryAmino): SourceInfo_MacroCallsEntry {
    const message = createBaseSourceInfo_MacroCallsEntry();
    if (object.key !== undefined && object.key !== null) {
      message.key = BigInt(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Expr.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: SourceInfo_MacroCallsEntry, useInterfaces: boolean = true): SourceInfo_MacroCallsEntryAmino {
    const obj: any = {};
    obj.key = message.key !== BigInt(0) ? message.key?.toString() : undefined;
    obj.value = message.value ? Expr.toAmino(message.value, useInterfaces) : undefined;
    return obj;
  },
  fromProtoMsg(message: SourceInfo_MacroCallsEntryProtoMsg, useInterfaces: boolean = true): SourceInfo_MacroCallsEntry {
    return SourceInfo_MacroCallsEntry.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SourceInfo_MacroCallsEntry): Uint8Array {
    return SourceInfo_MacroCallsEntry.encode(message).finish();
  }
};
function createBaseSourceInfo(): SourceInfo {
  return {
    syntaxVersion: "",
    location: "",
    lineOffsets: [],
    positions: {},
    macroCalls: {}
  };
}
export const SourceInfo = {
  typeUrl: "/google.api.expr.v1alpha1.SourceInfo",
  encode(message: SourceInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.syntaxVersion !== "") {
      writer.uint32(10).string(message.syntaxVersion);
    }
    if (message.location !== "") {
      writer.uint32(18).string(message.location);
    }
    writer.uint32(26).fork();
    for (const v of message.lineOffsets) {
      writer.int32(v);
    }
    writer.ldelim();
    Object.entries(message.positions).forEach(([key, value]) => {
      SourceInfo_PositionsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(32).fork()).ldelim();
    });
    Object.entries(message.macroCalls).forEach(([key, value]) => {
      SourceInfo_MacroCallsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(42).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SourceInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syntaxVersion = reader.string();
          break;
        case 2:
          message.location = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.lineOffsets.push(reader.int32());
            }
          } else {
            message.lineOffsets.push(reader.int32());
          }
          break;
        case 4:
          const entry4 = SourceInfo_PositionsEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.positions[entry4.key] = entry4.value;
          }
          break;
        case 5:
          const entry5 = SourceInfo_MacroCallsEntry.decode(reader, reader.uint32());
          if (entry5.value !== undefined) {
            message.macroCalls[entry5.key] = entry5.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SourceInfo {
    const obj = createBaseSourceInfo();
    if (isSet(object.syntaxVersion)) obj.syntaxVersion = String(object.syntaxVersion);
    if (isSet(object.location)) obj.location = String(object.location);
    if (Array.isArray(object?.lineOffsets)) obj.lineOffsets = object.lineOffsets.map((e: any) => Number(e));
    if (isObject(object.positions)) obj.positions = Object.entries(object.positions).reduce<{
      [key: bigint]: number;
    }>((acc, [key, value]) => {
      acc[Number(key)] = Number(value);
      return acc;
    }, {});
    if (isObject(object.macroCalls)) obj.macroCalls = Object.entries(object.macroCalls).reduce<{
      [key: bigint]: Expr;
    }>((acc, [key, value]) => {
      acc[Number(key)] = Expr.fromJSON(value);
      return acc;
    }, {});
    return obj;
  },
  fromPartial(object: DeepPartial<SourceInfo>): SourceInfo {
    const message = createBaseSourceInfo();
    message.syntaxVersion = object.syntaxVersion ?? "";
    message.location = object.location ?? "";
    message.lineOffsets = object.lineOffsets?.map(e => e) || [];
    message.positions = Object.entries(object.positions ?? {}).reduce<{
      [key: bigint]: number;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Number(value);
      }
      return acc;
    }, {});
    message.macroCalls = Object.entries(object.macroCalls ?? {}).reduce<{
      [key: bigint]: Expr;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Expr.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromSDK(object: SourceInfoSDKType): SourceInfo {
    return {
      syntaxVersion: object?.syntax_version,
      location: object?.location,
      lineOffsets: Array.isArray(object?.line_offsets) ? object.line_offsets.map((e: any) => e) : [],
      positions: isObject(object.positions) ? Object.entries(object.positions).reduce<{
        [key: bigint]: number;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Number(value);
        return acc;
      }, {}) : {},
      macroCalls: isObject(object.macro_calls) ? Object.entries(object.macro_calls).reduce<{
        [key: bigint]: Expr;
      }>((acc, [key, value]) => {
        acc[Number(key)] = Expr.fromSDK(value);
        return acc;
      }, {}) : {}
    };
  },
  toSDK(message: SourceInfo): SourceInfoSDKType {
    const obj: any = {};
    obj.syntax_version = message.syntaxVersion;
    obj.location = message.location;
    if (message.lineOffsets) {
      obj.line_offsets = message.lineOffsets.map(e => e);
    } else {
      obj.line_offsets = [];
    }
    obj.positions = {};
    if (message.positions) {
      Object.entries(message.positions).forEach(([k, v]) => {
        obj.positions[k] = Math.round(v);
      });
    }
    obj.macro_calls = {};
    if (message.macroCalls) {
      Object.entries(message.macroCalls).forEach(([k, v]) => {
        obj.macro_calls[k] = Expr.toSDK(v);
      });
    }
    return obj;
  },
  fromAmino(object: SourceInfoAmino): SourceInfo {
    const message = createBaseSourceInfo();
    if (object.syntax_version !== undefined && object.syntax_version !== null) {
      message.syntaxVersion = object.syntax_version;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    }
    message.lineOffsets = object.line_offsets?.map(e => e) || [];
    message.positions = Object.entries(object.positions ?? {}).reduce<{
      [key: bigint]: number;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Number(value);
      }
      return acc;
    }, {});
    message.macroCalls = Object.entries(object.macro_calls ?? {}).reduce<{
      [key: bigint]: Expr;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[Number(key)] = Expr.fromAmino(value);
      }
      return acc;
    }, {});
    return message;
  },
  toAmino(message: SourceInfo, useInterfaces: boolean = true): SourceInfoAmino {
    const obj: any = {};
    obj.syntax_version = message.syntaxVersion === "" ? undefined : message.syntaxVersion;
    obj.location = message.location === "" ? undefined : message.location;
    if (message.lineOffsets) {
      obj.line_offsets = message.lineOffsets.map(e => e);
    } else {
      obj.line_offsets = message.lineOffsets;
    }
    obj.positions = {};
    if (message.positions) {
      Object.entries(message.positions).forEach(([k, v]) => {
        obj.positions[k] = Math.round(v);
      });
    }
    obj.macro_calls = {};
    if (message.macroCalls) {
      Object.entries(message.macroCalls).forEach(([k, v]) => {
        obj.macro_calls[k] = Expr.toAmino(v);
      });
    }
    return obj;
  },
  fromProtoMsg(message: SourceInfoProtoMsg, useInterfaces: boolean = true): SourceInfo {
    return SourceInfo.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SourceInfo): Uint8Array {
    return SourceInfo.encode(message).finish();
  },
  toProtoMsg(message: SourceInfo): SourceInfoProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.SourceInfo",
      value: SourceInfo.encode(message).finish()
    };
  }
};
function createBaseSourcePosition(): SourcePosition {
  return {
    location: "",
    offset: 0,
    line: 0,
    column: 0
  };
}
export const SourcePosition = {
  typeUrl: "/google.api.expr.v1alpha1.SourcePosition",
  encode(message: SourcePosition, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.location !== "") {
      writer.uint32(10).string(message.location);
    }
    if (message.offset !== 0) {
      writer.uint32(16).int32(message.offset);
    }
    if (message.line !== 0) {
      writer.uint32(24).int32(message.line);
    }
    if (message.column !== 0) {
      writer.uint32(32).int32(message.column);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): SourcePosition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourcePosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.location = reader.string();
          break;
        case 2:
          message.offset = reader.int32();
          break;
        case 3:
          message.line = reader.int32();
          break;
        case 4:
          message.column = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SourcePosition {
    const obj = createBaseSourcePosition();
    if (isSet(object.location)) obj.location = String(object.location);
    if (isSet(object.offset)) obj.offset = Number(object.offset);
    if (isSet(object.line)) obj.line = Number(object.line);
    if (isSet(object.column)) obj.column = Number(object.column);
    return obj;
  },
  fromPartial(object: DeepPartial<SourcePosition>): SourcePosition {
    const message = createBaseSourcePosition();
    message.location = object.location ?? "";
    message.offset = object.offset ?? 0;
    message.line = object.line ?? 0;
    message.column = object.column ?? 0;
    return message;
  },
  fromSDK(object: SourcePositionSDKType): SourcePosition {
    return {
      location: object?.location,
      offset: object?.offset,
      line: object?.line,
      column: object?.column
    };
  },
  toSDK(message: SourcePosition): SourcePositionSDKType {
    const obj: any = {};
    obj.location = message.location;
    obj.offset = message.offset;
    obj.line = message.line;
    obj.column = message.column;
    return obj;
  },
  fromAmino(object: SourcePositionAmino): SourcePosition {
    const message = createBaseSourcePosition();
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    }
    if (object.offset !== undefined && object.offset !== null) {
      message.offset = object.offset;
    }
    if (object.line !== undefined && object.line !== null) {
      message.line = object.line;
    }
    if (object.column !== undefined && object.column !== null) {
      message.column = object.column;
    }
    return message;
  },
  toAmino(message: SourcePosition, useInterfaces: boolean = true): SourcePositionAmino {
    const obj: any = {};
    obj.location = message.location === "" ? undefined : message.location;
    obj.offset = message.offset === 0 ? undefined : message.offset;
    obj.line = message.line === 0 ? undefined : message.line;
    obj.column = message.column === 0 ? undefined : message.column;
    return obj;
  },
  fromProtoMsg(message: SourcePositionProtoMsg, useInterfaces: boolean = true): SourcePosition {
    return SourcePosition.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: SourcePosition): Uint8Array {
    return SourcePosition.encode(message).finish();
  },
  toProtoMsg(message: SourcePosition): SourcePositionProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1alpha1.SourcePosition",
      value: SourcePosition.encode(message).finish()
    };
  }
};