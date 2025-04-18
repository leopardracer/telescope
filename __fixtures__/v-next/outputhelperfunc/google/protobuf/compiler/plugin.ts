import { FileDescriptorProto, FileDescriptorProtoAmino, FileDescriptorProtoSDKType } from "../descriptor";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "google.protobuf.compiler";
/** The version number of protocol compiler. */
export interface Version {
  major: number;
  minor: number;
  patch: number;
  /**
   * A suffix for alpha, beta or rc release, e.g., "alpha-1", "rc2". It should
   * be empty for mainline stable releases.
   */
  suffix: string;
}
export interface VersionProtoMsg {
  typeUrl: "/google.protobuf.compiler.Version";
  value: Uint8Array;
}
/** The version number of protocol compiler. */
export interface VersionAmino {
  major?: number;
  minor?: number;
  patch?: number;
  /**
   * A suffix for alpha, beta or rc release, e.g., "alpha-1", "rc2". It should
   * be empty for mainline stable releases.
   */
  suffix?: string;
}
export interface VersionAminoMsg {
  type: "/google.protobuf.compiler.Version";
  value: VersionAmino;
}
/** The version number of protocol compiler. */
export interface VersionSDKType {
  major: number;
  minor: number;
  patch: number;
  suffix: string;
}
/** An encoded CodeGeneratorRequest is written to the plugin's stdin. */
export interface CodeGeneratorRequest {
  /**
   * The .proto files that were explicitly listed on the command-line.  The
   * code generator should generate code only for these files.  Each file's
   * descriptor will be included in proto_file, below.
   */
  fileToGenerate: string[];
  /** The generator parameter passed on the command-line. */
  parameter: string;
  /**
   * FileDescriptorProtos for all files in files_to_generate and everything
   * they import.  The files will appear in topological order, so each file
   * appears before any file that imports it.
   * 
   * protoc guarantees that all proto_files will be written after
   * the fields above, even though this is not technically guaranteed by the
   * protobuf wire format.  This theoretically could allow a plugin to stream
   * in the FileDescriptorProtos and handle them one by one rather than read
   * the entire set into memory at once.  However, as of this writing, this
   * is not similarly optimized on protoc's end -- it will store all fields in
   * memory at once before sending them to the plugin.
   * 
   * Type names of fields and extensions in the FileDescriptorProto are always
   * fully qualified.
   */
  protoFile: FileDescriptorProto[];
  /** The version number of protocol compiler. */
  compilerVersion?: Version;
}
export interface CodeGeneratorRequestProtoMsg {
  typeUrl: "/google.protobuf.compiler.CodeGeneratorRequest";
  value: Uint8Array;
}
/** An encoded CodeGeneratorRequest is written to the plugin's stdin. */
export interface CodeGeneratorRequestAmino {
  /**
   * The .proto files that were explicitly listed on the command-line.  The
   * code generator should generate code only for these files.  Each file's
   * descriptor will be included in proto_file, below.
   */
  file_to_generate?: string[];
  /** The generator parameter passed on the command-line. */
  parameter?: string;
  /**
   * FileDescriptorProtos for all files in files_to_generate and everything
   * they import.  The files will appear in topological order, so each file
   * appears before any file that imports it.
   * 
   * protoc guarantees that all proto_files will be written after
   * the fields above, even though this is not technically guaranteed by the
   * protobuf wire format.  This theoretically could allow a plugin to stream
   * in the FileDescriptorProtos and handle them one by one rather than read
   * the entire set into memory at once.  However, as of this writing, this
   * is not similarly optimized on protoc's end -- it will store all fields in
   * memory at once before sending them to the plugin.
   * 
   * Type names of fields and extensions in the FileDescriptorProto are always
   * fully qualified.
   */
  proto_file?: FileDescriptorProtoAmino[];
  /** The version number of protocol compiler. */
  compiler_version?: VersionAmino;
}
export interface CodeGeneratorRequestAminoMsg {
  type: "/google.protobuf.compiler.CodeGeneratorRequest";
  value: CodeGeneratorRequestAmino;
}
/** An encoded CodeGeneratorRequest is written to the plugin's stdin. */
export interface CodeGeneratorRequestSDKType {
  file_to_generate: string[];
  parameter: string;
  proto_file: FileDescriptorProtoSDKType[];
  compiler_version?: VersionSDKType;
}
/** The plugin writes an encoded CodeGeneratorResponse to stdout. */
export interface CodeGeneratorResponse {
  /**
   * Error message.  If non-empty, code generation failed.  The plugin process
   * should exit with status code zero even if it reports an error in this way.
   * 
   * This should be used to indicate errors in .proto files which prevent the
   * code generator from generating correct code.  Errors which indicate a
   * problem in protoc itself -- such as the input CodeGeneratorRequest being
   * unparseable -- should be reported by writing a message to stderr and
   * exiting with a non-zero status code.
   */
  error: string;
  file: CodeGeneratorResponse_File[];
}
export interface CodeGeneratorResponseProtoMsg {
  typeUrl: "/google.protobuf.compiler.CodeGeneratorResponse";
  value: Uint8Array;
}
/** The plugin writes an encoded CodeGeneratorResponse to stdout. */
export interface CodeGeneratorResponseAmino {
  /**
   * Error message.  If non-empty, code generation failed.  The plugin process
   * should exit with status code zero even if it reports an error in this way.
   * 
   * This should be used to indicate errors in .proto files which prevent the
   * code generator from generating correct code.  Errors which indicate a
   * problem in protoc itself -- such as the input CodeGeneratorRequest being
   * unparseable -- should be reported by writing a message to stderr and
   * exiting with a non-zero status code.
   */
  error?: string;
  file?: CodeGeneratorResponse_FileAmino[];
}
export interface CodeGeneratorResponseAminoMsg {
  type: "/google.protobuf.compiler.CodeGeneratorResponse";
  value: CodeGeneratorResponseAmino;
}
/** The plugin writes an encoded CodeGeneratorResponse to stdout. */
export interface CodeGeneratorResponseSDKType {
  error: string;
  file: CodeGeneratorResponse_FileSDKType[];
}
/** Represents a single generated file. */
export interface CodeGeneratorResponse_File {
  /**
   * The file name, relative to the output directory.  The name must not
   * contain "." or ".." components and must be relative, not be absolute (so,
   * the file cannot lie outside the output directory).  "/" must be used as
   * the path separator, not "\".
   * 
   * If the name is omitted, the content will be appended to the previous
   * file.  This allows the generator to break large files into small chunks,
   * and allows the generated text to be streamed back to protoc so that large
   * files need not reside completely in memory at one time.  Note that as of
   * this writing protoc does not optimize for this -- it will read the entire
   * CodeGeneratorResponse before writing files to disk.
   */
  name: string;
  /**
   * If non-empty, indicates that the named file should already exist, and the
   * content here is to be inserted into that file at a defined insertion
   * point.  This feature allows a code generator to extend the output
   * produced by another code generator.  The original generator may provide
   * insertion points by placing special annotations in the file that look
   * like:
   *   @@protoc_insertion_point(NAME)
   * The annotation can have arbitrary text before and after it on the line,
   * which allows it to be placed in a comment.  NAME should be replaced with
   * an identifier naming the point -- this is what other generators will use
   * as the insertion_point.  Code inserted at this point will be placed
   * immediately above the line containing the insertion point (thus multiple
   * insertions to the same point will come out in the order they were added).
   * The double-@ is intended to make it unlikely that the generated code
   * could contain things that look like insertion points by accident.
   * 
   * For example, the C++ code generator places the following line in the
   * .pb.h files that it generates:
   *   // @@protoc_insertion_point(namespace_scope)
   * This line appears within the scope of the file's package namespace, but
   * outside of any particular class.  Another plugin can then specify the
   * insertion_point "namespace_scope" to generate additional classes or
   * other declarations that should be placed in this scope.
   * 
   * Note that if the line containing the insertion point begins with
   * whitespace, the same whitespace will be added to every line of the
   * inserted text.  This is useful for languages like Python, where
   * indentation matters.  In these languages, the insertion point comment
   * should be indented the same amount as any inserted code will need to be
   * in order to work correctly in that context.
   * 
   * The code generator that generates the initial file and the one which
   * inserts into it must both run as part of a single invocation of protoc.
   * Code generators are executed in the order in which they appear on the
   * command line.
   * 
   * If |insertion_point| is present, |name| must also be present.
   */
  insertionPoint: string;
  /** The file contents. */
  content: string;
}
export interface CodeGeneratorResponse_FileProtoMsg {
  typeUrl: "/google.protobuf.compiler.File";
  value: Uint8Array;
}
/** Represents a single generated file. */
export interface CodeGeneratorResponse_FileAmino {
  /**
   * The file name, relative to the output directory.  The name must not
   * contain "." or ".." components and must be relative, not be absolute (so,
   * the file cannot lie outside the output directory).  "/" must be used as
   * the path separator, not "\".
   * 
   * If the name is omitted, the content will be appended to the previous
   * file.  This allows the generator to break large files into small chunks,
   * and allows the generated text to be streamed back to protoc so that large
   * files need not reside completely in memory at one time.  Note that as of
   * this writing protoc does not optimize for this -- it will read the entire
   * CodeGeneratorResponse before writing files to disk.
   */
  name?: string;
  /**
   * If non-empty, indicates that the named file should already exist, and the
   * content here is to be inserted into that file at a defined insertion
   * point.  This feature allows a code generator to extend the output
   * produced by another code generator.  The original generator may provide
   * insertion points by placing special annotations in the file that look
   * like:
   *   @@protoc_insertion_point(NAME)
   * The annotation can have arbitrary text before and after it on the line,
   * which allows it to be placed in a comment.  NAME should be replaced with
   * an identifier naming the point -- this is what other generators will use
   * as the insertion_point.  Code inserted at this point will be placed
   * immediately above the line containing the insertion point (thus multiple
   * insertions to the same point will come out in the order they were added).
   * The double-@ is intended to make it unlikely that the generated code
   * could contain things that look like insertion points by accident.
   * 
   * For example, the C++ code generator places the following line in the
   * .pb.h files that it generates:
   *   // @@protoc_insertion_point(namespace_scope)
   * This line appears within the scope of the file's package namespace, but
   * outside of any particular class.  Another plugin can then specify the
   * insertion_point "namespace_scope" to generate additional classes or
   * other declarations that should be placed in this scope.
   * 
   * Note that if the line containing the insertion point begins with
   * whitespace, the same whitespace will be added to every line of the
   * inserted text.  This is useful for languages like Python, where
   * indentation matters.  In these languages, the insertion point comment
   * should be indented the same amount as any inserted code will need to be
   * in order to work correctly in that context.
   * 
   * The code generator that generates the initial file and the one which
   * inserts into it must both run as part of a single invocation of protoc.
   * Code generators are executed in the order in which they appear on the
   * command line.
   * 
   * If |insertion_point| is present, |name| must also be present.
   */
  insertion_point?: string;
  /** The file contents. */
  content?: string;
}
export interface CodeGeneratorResponse_FileAminoMsg {
  type: "/google.protobuf.compiler.File";
  value: CodeGeneratorResponse_FileAmino;
}
/** Represents a single generated file. */
export interface CodeGeneratorResponse_FileSDKType {
  name: string;
  insertion_point: string;
  content: string;
}
function createBaseVersion(): Version {
  return {
    major: 0,
    minor: 0,
    patch: 0,
    suffix: ""
  };
}
export const Version = {
  typeUrl: "/google.protobuf.compiler.Version",
  is(o: any): o is Version {
    return o && (o.$typeUrl === Version.typeUrl || typeof o.major === "number" && typeof o.minor === "number" && typeof o.patch === "number" && typeof o.suffix === "string");
  },
  isSDK(o: any): o is VersionSDKType {
    return o && (o.$typeUrl === Version.typeUrl || typeof o.major === "number" && typeof o.minor === "number" && typeof o.patch === "number" && typeof o.suffix === "string");
  },
  isAmino(o: any): o is VersionAmino {
    return o && (o.$typeUrl === Version.typeUrl || typeof o.major === "number" && typeof o.minor === "number" && typeof o.patch === "number" && typeof o.suffix === "string");
  },
  encode(message: Version, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.major !== undefined) {
      writer.uint32(8).int32(message.major);
    }
    if (message.minor !== undefined) {
      writer.uint32(16).int32(message.minor);
    }
    if (message.patch !== undefined) {
      writer.uint32(24).int32(message.patch);
    }
    if (message.suffix !== undefined) {
      writer.uint32(34).string(message.suffix);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Version {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.major = reader.int32();
          break;
        case 2:
          message.minor = reader.int32();
          break;
        case 3:
          message.patch = reader.int32();
          break;
        case 4:
          message.suffix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Version {
    const obj = createBaseVersion();
    if (isSet(object.major)) obj.major = Number(object.major);
    if (isSet(object.minor)) obj.minor = Number(object.minor);
    if (isSet(object.patch)) obj.patch = Number(object.patch);
    if (isSet(object.suffix)) obj.suffix = String(object.suffix);
    return obj;
  },
  toJSON(message: Version): JsonSafe<Version> {
    const obj: any = {};
    message.major !== undefined && (obj.major = Math.round(message.major));
    message.minor !== undefined && (obj.minor = Math.round(message.minor));
    message.patch !== undefined && (obj.patch = Math.round(message.patch));
    message.suffix !== undefined && (obj.suffix = message.suffix);
    return obj;
  },
  fromPartial(object: DeepPartial<Version>): Version {
    const message = createBaseVersion();
    message.major = object.major ?? 0;
    message.minor = object.minor ?? 0;
    message.patch = object.patch ?? 0;
    message.suffix = object.suffix ?? "";
    return message;
  },
  fromSDK(object: VersionSDKType): Version {
    return {
      major: object?.major,
      minor: object?.minor,
      patch: object?.patch,
      suffix: object?.suffix
    };
  },
  fromSDKJSON(object: any): VersionSDKType {
    return {
      major: isSet(object.major) ? Number(object.major) : 0,
      minor: isSet(object.minor) ? Number(object.minor) : 0,
      patch: isSet(object.patch) ? Number(object.patch) : 0,
      suffix: isSet(object.suffix) ? String(object.suffix) : ""
    };
  },
  toSDK(message: Version): VersionSDKType {
    const obj: any = {};
    obj.major = message.major;
    obj.minor = message.minor;
    obj.patch = message.patch;
    obj.suffix = message.suffix;
    return obj;
  },
  fromAmino(object: VersionAmino): Version {
    const message = createBaseVersion();
    if (object.major !== undefined && object.major !== null) {
      message.major = object.major;
    }
    if (object.minor !== undefined && object.minor !== null) {
      message.minor = object.minor;
    }
    if (object.patch !== undefined && object.patch !== null) {
      message.patch = object.patch;
    }
    if (object.suffix !== undefined && object.suffix !== null) {
      message.suffix = object.suffix;
    }
    return message;
  },
  toAmino(message: Version): VersionAmino {
    const obj: any = {};
    obj.major = message.major === 0 ? undefined : message.major;
    obj.minor = message.minor === 0 ? undefined : message.minor;
    obj.patch = message.patch === 0 ? undefined : message.patch;
    obj.suffix = message.suffix === "" ? undefined : message.suffix;
    return obj;
  },
  fromAminoMsg(object: VersionAminoMsg): Version {
    return Version.fromAmino(object.value);
  },
  fromProtoMsg(message: VersionProtoMsg): Version {
    return Version.decode(message.value);
  },
  toProto(message: Version): Uint8Array {
    return Version.encode(message).finish();
  },
  toProtoMsg(message: Version): VersionProtoMsg {
    return {
      typeUrl: "/google.protobuf.compiler.Version",
      value: Version.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseCodeGeneratorRequest(): CodeGeneratorRequest {
  return {
    fileToGenerate: [],
    parameter: "",
    protoFile: [],
    compilerVersion: undefined
  };
}
export const CodeGeneratorRequest = {
  typeUrl: "/google.protobuf.compiler.CodeGeneratorRequest",
  is(o: any): o is CodeGeneratorRequest {
    return o && (o.$typeUrl === CodeGeneratorRequest.typeUrl || Array.isArray(o.fileToGenerate) && (!o.fileToGenerate.length || typeof o.fileToGenerate[0] === "string") && typeof o.parameter === "string" && Array.isArray(o.protoFile) && (!o.protoFile.length || FileDescriptorProto.is(o.protoFile[0])));
  },
  isSDK(o: any): o is CodeGeneratorRequestSDKType {
    return o && (o.$typeUrl === CodeGeneratorRequest.typeUrl || Array.isArray(o.file_to_generate) && (!o.file_to_generate.length || typeof o.file_to_generate[0] === "string") && typeof o.parameter === "string" && Array.isArray(o.proto_file) && (!o.proto_file.length || FileDescriptorProto.isSDK(o.proto_file[0])));
  },
  isAmino(o: any): o is CodeGeneratorRequestAmino {
    return o && (o.$typeUrl === CodeGeneratorRequest.typeUrl || Array.isArray(o.file_to_generate) && (!o.file_to_generate.length || typeof o.file_to_generate[0] === "string") && typeof o.parameter === "string" && Array.isArray(o.proto_file) && (!o.proto_file.length || FileDescriptorProto.isAmino(o.proto_file[0])));
  },
  encode(message: CodeGeneratorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.fileToGenerate) {
      writer.uint32(10).string(v!);
    }
    if (message.parameter !== undefined) {
      writer.uint32(18).string(message.parameter);
    }
    for (const v of message.protoFile) {
      FileDescriptorProto.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.compilerVersion !== undefined) {
      Version.encode(message.compilerVersion, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CodeGeneratorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeGeneratorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileToGenerate.push(reader.string());
          break;
        case 2:
          message.parameter = reader.string();
          break;
        case 15:
          message.protoFile.push(FileDescriptorProto.decode(reader, reader.uint32()));
          break;
        case 3:
          message.compilerVersion = Version.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CodeGeneratorRequest {
    const obj = createBaseCodeGeneratorRequest();
    if (Array.isArray(object?.fileToGenerate)) obj.fileToGenerate = object.fileToGenerate.map((e: any) => String(e));
    if (isSet(object.parameter)) obj.parameter = String(object.parameter);
    if (Array.isArray(object?.protoFile)) obj.protoFile = object.protoFile.map((e: any) => FileDescriptorProto.fromJSON(e));
    if (isSet(object.compilerVersion)) obj.compilerVersion = Version.fromJSON(object.compilerVersion);
    return obj;
  },
  toJSON(message: CodeGeneratorRequest): JsonSafe<CodeGeneratorRequest> {
    const obj: any = {};
    if (message.fileToGenerate) {
      obj.fileToGenerate = message.fileToGenerate.map(e => e);
    } else {
      obj.fileToGenerate = [];
    }
    message.parameter !== undefined && (obj.parameter = message.parameter);
    if (message.protoFile) {
      obj.protoFile = message.protoFile.map(e => e ? FileDescriptorProto.toJSON(e) : undefined);
    } else {
      obj.protoFile = [];
    }
    message.compilerVersion !== undefined && (obj.compilerVersion = message.compilerVersion ? Version.toJSON(message.compilerVersion) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CodeGeneratorRequest>): CodeGeneratorRequest {
    const message = createBaseCodeGeneratorRequest();
    message.fileToGenerate = object.fileToGenerate?.map(e => e) || [];
    message.parameter = object.parameter ?? "";
    message.protoFile = object.protoFile?.map(e => FileDescriptorProto.fromPartial(e)) || [];
    if (object.compilerVersion !== undefined && object.compilerVersion !== null) {
      message.compilerVersion = Version.fromPartial(object.compilerVersion);
    }
    return message;
  },
  fromSDK(object: CodeGeneratorRequestSDKType): CodeGeneratorRequest {
    return {
      fileToGenerate: Array.isArray(object?.file_to_generate) ? object.file_to_generate.map((e: any) => e) : [],
      parameter: object?.parameter,
      protoFile: Array.isArray(object?.proto_file) ? object.proto_file.map((e: any) => FileDescriptorProto.fromSDK(e)) : [],
      compilerVersion: object.compiler_version ? Version.fromSDK(object.compiler_version) : undefined
    };
  },
  fromSDKJSON(object: any): CodeGeneratorRequestSDKType {
    return {
      file_to_generate: Array.isArray(object?.file_to_generate) ? object.file_to_generate.map((e: any) => String(e)) : [],
      parameter: isSet(object.parameter) ? String(object.parameter) : "",
      proto_file: Array.isArray(object?.proto_file) ? object.proto_file.map((e: any) => FileDescriptorProto.fromSDKJSON(e)) : [],
      compiler_version: isSet(object.compiler_version) ? Version.fromSDKJSON(object.compiler_version) : undefined
    };
  },
  toSDK(message: CodeGeneratorRequest): CodeGeneratorRequestSDKType {
    const obj: any = {};
    if (message.fileToGenerate) {
      obj.file_to_generate = message.fileToGenerate.map(e => e);
    } else {
      obj.file_to_generate = [];
    }
    obj.parameter = message.parameter;
    if (message.protoFile) {
      obj.proto_file = message.protoFile.map(e => e ? FileDescriptorProto.toSDK(e) : undefined);
    } else {
      obj.proto_file = [];
    }
    message.compilerVersion !== undefined && (obj.compiler_version = message.compilerVersion ? Version.toSDK(message.compilerVersion) : undefined);
    return obj;
  },
  fromAmino(object: CodeGeneratorRequestAmino): CodeGeneratorRequest {
    const message = createBaseCodeGeneratorRequest();
    message.fileToGenerate = object.file_to_generate?.map(e => e) || [];
    if (object.parameter !== undefined && object.parameter !== null) {
      message.parameter = object.parameter;
    }
    message.protoFile = object.proto_file?.map(e => FileDescriptorProto.fromAmino(e)) || [];
    if (object.compiler_version !== undefined && object.compiler_version !== null) {
      message.compilerVersion = Version.fromAmino(object.compiler_version);
    }
    return message;
  },
  toAmino(message: CodeGeneratorRequest): CodeGeneratorRequestAmino {
    const obj: any = {};
    if (message.fileToGenerate) {
      obj.file_to_generate = message.fileToGenerate.map(e => e);
    } else {
      obj.file_to_generate = message.fileToGenerate;
    }
    obj.parameter = message.parameter === "" ? undefined : message.parameter;
    if (message.protoFile) {
      obj.proto_file = message.protoFile.map(e => e ? FileDescriptorProto.toAmino(e) : undefined);
    } else {
      obj.proto_file = message.protoFile;
    }
    obj.compiler_version = message.compilerVersion ? Version.toAmino(message.compilerVersion) : undefined;
    return obj;
  },
  fromAminoMsg(object: CodeGeneratorRequestAminoMsg): CodeGeneratorRequest {
    return CodeGeneratorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CodeGeneratorRequestProtoMsg): CodeGeneratorRequest {
    return CodeGeneratorRequest.decode(message.value);
  },
  toProto(message: CodeGeneratorRequest): Uint8Array {
    return CodeGeneratorRequest.encode(message).finish();
  },
  toProtoMsg(message: CodeGeneratorRequest): CodeGeneratorRequestProtoMsg {
    return {
      typeUrl: "/google.protobuf.compiler.CodeGeneratorRequest",
      value: CodeGeneratorRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    FileDescriptorProto.registerTypeUrl();
    Version.registerTypeUrl();
  }
};
function createBaseCodeGeneratorResponse(): CodeGeneratorResponse {
  return {
    error: "",
    file: []
  };
}
export const CodeGeneratorResponse = {
  typeUrl: "/google.protobuf.compiler.CodeGeneratorResponse",
  is(o: any): o is CodeGeneratorResponse {
    return o && (o.$typeUrl === CodeGeneratorResponse.typeUrl || typeof o.error === "string" && Array.isArray(o.file) && (!o.file.length || CodeGeneratorResponse_File.is(o.file[0])));
  },
  isSDK(o: any): o is CodeGeneratorResponseSDKType {
    return o && (o.$typeUrl === CodeGeneratorResponse.typeUrl || typeof o.error === "string" && Array.isArray(o.file) && (!o.file.length || CodeGeneratorResponse_File.isSDK(o.file[0])));
  },
  isAmino(o: any): o is CodeGeneratorResponseAmino {
    return o && (o.$typeUrl === CodeGeneratorResponse.typeUrl || typeof o.error === "string" && Array.isArray(o.file) && (!o.file.length || CodeGeneratorResponse_File.isAmino(o.file[0])));
  },
  encode(message: CodeGeneratorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.error !== undefined) {
      writer.uint32(10).string(message.error);
    }
    for (const v of message.file) {
      CodeGeneratorResponse_File.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CodeGeneratorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeGeneratorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.string();
          break;
        case 15:
          message.file.push(CodeGeneratorResponse_File.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CodeGeneratorResponse {
    const obj = createBaseCodeGeneratorResponse();
    if (isSet(object.error)) obj.error = String(object.error);
    if (Array.isArray(object?.file)) obj.file = object.file.map((e: any) => CodeGeneratorResponse_File.fromJSON(e));
    return obj;
  },
  toJSON(message: CodeGeneratorResponse): JsonSafe<CodeGeneratorResponse> {
    const obj: any = {};
    message.error !== undefined && (obj.error = message.error);
    if (message.file) {
      obj.file = message.file.map(e => e ? CodeGeneratorResponse_File.toJSON(e) : undefined);
    } else {
      obj.file = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<CodeGeneratorResponse>): CodeGeneratorResponse {
    const message = createBaseCodeGeneratorResponse();
    message.error = object.error ?? "";
    message.file = object.file?.map(e => CodeGeneratorResponse_File.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: CodeGeneratorResponseSDKType): CodeGeneratorResponse {
    return {
      error: object?.error,
      file: Array.isArray(object?.file) ? object.file.map((e: any) => CodeGeneratorResponse_File.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): CodeGeneratorResponseSDKType {
    return {
      error: isSet(object.error) ? String(object.error) : "",
      file: Array.isArray(object?.file) ? object.file.map((e: any) => CodeGeneratorResponse_File.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: CodeGeneratorResponse): CodeGeneratorResponseSDKType {
    const obj: any = {};
    obj.error = message.error;
    if (message.file) {
      obj.file = message.file.map(e => e ? CodeGeneratorResponse_File.toSDK(e) : undefined);
    } else {
      obj.file = [];
    }
    return obj;
  },
  fromAmino(object: CodeGeneratorResponseAmino): CodeGeneratorResponse {
    const message = createBaseCodeGeneratorResponse();
    if (object.error !== undefined && object.error !== null) {
      message.error = object.error;
    }
    message.file = object.file?.map(e => CodeGeneratorResponse_File.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CodeGeneratorResponse): CodeGeneratorResponseAmino {
    const obj: any = {};
    obj.error = message.error === "" ? undefined : message.error;
    if (message.file) {
      obj.file = message.file.map(e => e ? CodeGeneratorResponse_File.toAmino(e) : undefined);
    } else {
      obj.file = message.file;
    }
    return obj;
  },
  fromAminoMsg(object: CodeGeneratorResponseAminoMsg): CodeGeneratorResponse {
    return CodeGeneratorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: CodeGeneratorResponseProtoMsg): CodeGeneratorResponse {
    return CodeGeneratorResponse.decode(message.value);
  },
  toProto(message: CodeGeneratorResponse): Uint8Array {
    return CodeGeneratorResponse.encode(message).finish();
  },
  toProtoMsg(message: CodeGeneratorResponse): CodeGeneratorResponseProtoMsg {
    return {
      typeUrl: "/google.protobuf.compiler.CodeGeneratorResponse",
      value: CodeGeneratorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    CodeGeneratorResponse_File.registerTypeUrl();
  }
};
function createBaseCodeGeneratorResponse_File(): CodeGeneratorResponse_File {
  return {
    name: "",
    insertionPoint: "",
    content: ""
  };
}
export const CodeGeneratorResponse_File = {
  typeUrl: "/google.protobuf.compiler.File",
  is(o: any): o is CodeGeneratorResponse_File {
    return o && (o.$typeUrl === CodeGeneratorResponse_File.typeUrl || typeof o.name === "string" && typeof o.insertionPoint === "string" && typeof o.content === "string");
  },
  isSDK(o: any): o is CodeGeneratorResponse_FileSDKType {
    return o && (o.$typeUrl === CodeGeneratorResponse_File.typeUrl || typeof o.name === "string" && typeof o.insertion_point === "string" && typeof o.content === "string");
  },
  isAmino(o: any): o is CodeGeneratorResponse_FileAmino {
    return o && (o.$typeUrl === CodeGeneratorResponse_File.typeUrl || typeof o.name === "string" && typeof o.insertion_point === "string" && typeof o.content === "string");
  },
  encode(message: CodeGeneratorResponse_File, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.insertionPoint !== undefined) {
      writer.uint32(18).string(message.insertionPoint);
    }
    if (message.content !== undefined) {
      writer.uint32(122).string(message.content);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CodeGeneratorResponse_File {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeGeneratorResponse_File();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.insertionPoint = reader.string();
          break;
        case 15:
          message.content = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CodeGeneratorResponse_File {
    const obj = createBaseCodeGeneratorResponse_File();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.insertionPoint)) obj.insertionPoint = String(object.insertionPoint);
    if (isSet(object.content)) obj.content = String(object.content);
    return obj;
  },
  toJSON(message: CodeGeneratorResponse_File): JsonSafe<CodeGeneratorResponse_File> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.insertionPoint !== undefined && (obj.insertionPoint = message.insertionPoint);
    message.content !== undefined && (obj.content = message.content);
    return obj;
  },
  fromPartial(object: DeepPartial<CodeGeneratorResponse_File>): CodeGeneratorResponse_File {
    const message = createBaseCodeGeneratorResponse_File();
    message.name = object.name ?? "";
    message.insertionPoint = object.insertionPoint ?? "";
    message.content = object.content ?? "";
    return message;
  },
  fromSDK(object: CodeGeneratorResponse_FileSDKType): CodeGeneratorResponse_File {
    return {
      name: object?.name,
      insertionPoint: object?.insertion_point,
      content: object?.content
    };
  },
  fromSDKJSON(object: any): CodeGeneratorResponse_FileSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      insertion_point: isSet(object.insertion_point) ? String(object.insertion_point) : "",
      content: isSet(object.content) ? String(object.content) : ""
    };
  },
  toSDK(message: CodeGeneratorResponse_File): CodeGeneratorResponse_FileSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.insertion_point = message.insertionPoint;
    obj.content = message.content;
    return obj;
  },
  fromAmino(object: CodeGeneratorResponse_FileAmino): CodeGeneratorResponse_File {
    const message = createBaseCodeGeneratorResponse_File();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.insertion_point !== undefined && object.insertion_point !== null) {
      message.insertionPoint = object.insertion_point;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    }
    return message;
  },
  toAmino(message: CodeGeneratorResponse_File): CodeGeneratorResponse_FileAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.insertion_point = message.insertionPoint === "" ? undefined : message.insertionPoint;
    obj.content = message.content === "" ? undefined : message.content;
    return obj;
  },
  fromAminoMsg(object: CodeGeneratorResponse_FileAminoMsg): CodeGeneratorResponse_File {
    return CodeGeneratorResponse_File.fromAmino(object.value);
  },
  fromProtoMsg(message: CodeGeneratorResponse_FileProtoMsg): CodeGeneratorResponse_File {
    return CodeGeneratorResponse_File.decode(message.value);
  },
  toProto(message: CodeGeneratorResponse_File): Uint8Array {
    return CodeGeneratorResponse_File.encode(message).finish();
  },
  toProtoMsg(message: CodeGeneratorResponse_File): CodeGeneratorResponse_FileProtoMsg {
    return {
      typeUrl: "/google.protobuf.compiler.File",
      value: CodeGeneratorResponse_File.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};