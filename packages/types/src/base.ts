import { TelescopeOptions } from "./telescope";

export const TX_SVC_TYPES = [
    'Msg',
];

export const QUERY_SVC_TYPES = [
    'Query',
    'Service',
    'ReflectionService',
    'ABCIApplication'
];

export const ENUM_PROTO2_DEFAULT = 1;
export const ENUM_PROTO3_DEFAULT = 0;

export interface IParseContext {
    ref: ProtoRef;
    options: TelescopeOptions;
    imports: ImportUsage[];
    utils: Record<string, boolean>;
    addUtil: Function;
    pluginValue(name);
}

export interface ImportUsage {
    type: 'typeImport' | 'toJSONEnum' | 'fromJSONEnum';
    name: string;
    import: string;
    importedAs?: string;
}

export interface ProtoEnum {
    type?: 'Enum';
    name?: string;
    package?: string; // added by parser
    values: { [key: string]: number };
    valuesOptions?: {
        [key: string]: {
            '(gogoproto.enumvalue_customname)'?: string;
            [key: string]: any;
        };
    };
    comment?: string;
    comments?: { [key: string]: string };
};
export interface ProtoType {
    type?: 'Type';
    name?: string;
    package?: string; // added by parser
    oneofs?: { [key: string]: { oneof: string[], comment: string | undefined } },
    options?: {
        [key: string]: any;
        deprecated?: boolean;
        "(cosmos_proto.implements_interface)"?: string;
        "(amino.name)"?: string;
    },
    fields: {
        [key: string]: ProtoField;
    },
    comment: string | undefined;
};
export interface ProtoField {
    type?:
    'string' |
    'double' |
    'float' |
    'int32' |
    'uint32' |
    'sint32' |
    'fixed32' |
    'sfixed32' |
    'uint64' |
    'int64' |
    'sint64' |
    'fixed64' |
    'sfixed64' |
    'bytes' |
    'bool' |
    string;

    name?: string;
    scope?: string[];
    parsedType?: {
        name: string;
        type: string;
    },
    message?: string; // added by parser
    package?: string; // added by parser

    keyType?: string;
    rule?: string;
    id: number;
    options: {
        [key: string]: any;
        deprecated?: boolean;

        // it changes the ProtoJSON field name, doesn't impact amino
        json_name?: string;

        // impacts amino encoding. It's in the format of (gogoproto.jsontag) = "foo_bar,omitempty", and the omitempty part is optional. This means that the field name will be foo_bar
        "(cosmos_proto.json_tag)"?: string;

        "(cosmos_proto.accepts_interface)"?: string;
        "(cosmos_proto.scalar)"?: string;
        "(telescope:name)"?: string;
        "(telescope:orig)"?: string;
        "(telescope:camel)"?: string;
        "(telescope:map_entry_type_field)"?: boolean;
        "(gogoproto.casttype)"?: string;
        "(gogoproto.customtype)"?: string;
        "(gogoproto.moretags)"?: string;
        "(gogoproto.nullable)"?: boolean;
    }
    comment?: string;
    import?: string;
    importedName?: string;
    scopeType?: string;
    isNestedMsg?: boolean;
};

// MOVE TO OPTIONS
export const ALLOWED_RPC_SERVICES = [
    'Msg', // keep first

    ///
    'Query',
    'Service',
    'ReflectionService',
    'ABCIApplication'
];
export interface ProtoServiceMethodInfo {
    method: 'get' | 'post';
    url: string;
    pathParams: string[];
    queryParams: string[];
    paramMap: Record<string, string>;
    casing: Record<string, string>;
};

export interface ProtoServiceMethod {
    type: 'ServiceMethod';
    info?: ProtoServiceMethodInfo;
    name: string;
    options: {
        [key: string]: any;
        "(google.api.http).get"?: string;
        "(google.api.http).post"?: string;
        "(google.api.http)"?: {
            post: string;
            body: string;
        }
    }
    comment?: string;
    requestType: string;
    responseType: string;
    fields: Record<string, ProtoField>
};
export interface ProtoService {
    type: 'Service';
    name: 'Msg' | 'Query' | 'Service' | string;
    methods: Record<string, ProtoServiceMethod>;
    comment?: string;
};
export interface ProtoAny {
    type: string;
    name: string;
    [key: string]: any;
};
export interface ProtoDep {
    filename: string;
    package: string;
    imports: string[]
}
export interface ProtoRef {
    absolute: string;
    filename: string;
    proto: ProtoRoot;
    traversed?: TraversedProtoRoot;
}
export interface ProtoRoot {
    syntax?: string;
    package: string;
    imports: string[];
    importNames?: Record<string, Record<string, string>>;
    options?: {
      [key: string]: any;
      "go_package"?: string;
    };
    root: any;
};

// TRAVERSAL

export interface TraverseRecord {
    filename: string;
    implementsType: string;
    msgName: string;
}
export interface TraverseLocalSymbol {
    type: 'import' | 'export' | 'importFromImplements'
    symbolName: string;
    readAs: string;
    source: string;
    implementsType?: string;
    // msgName: string;
}

export type TraverseImportNames = Record<string, Record<string, string>>;
export type TraverseImport = Record<string, string[]>;
export type TraverseAccept = Record<string, string[]>;
export type TraverseImplement = Record<string, string[]>;
export type TraverseExport = Record<string, boolean>;
export interface TypeUrlRef {
    typeUrl: string;
    aminoType: string;
    type: string;
    importAs: string;
};

export interface TraverseTypeUrlRef {
    ref: string;
    pkg: string;
    types: TypeUrlRef[]
};

export type TraversedProtoRoot = ProtoRoot & {
    parsedImports: TraverseImport;
    parsedExports: TraverseExport;
    acceptsInterface: TraverseAccept;
    implementsInterface: TraverseImplement;
    importNames: TraverseImportNames | null;
    symbols: TraverseLocalSymbol | null;
};

export type InterfaceTypeUrlMap = Record<string, TraverseTypeUrlRef[]>

export type TraversalSymbol = TraverseLocalSymbol & {
    ref: string;
}

export interface Lookup {
    obj: any;
    name: string;
    import: string;
    importType: string;
    importedName: string;
    package: string;
    isNestedMsg?: boolean;
}

export interface IProtoStore {
  requests: Record<string, ProtoServiceMethod>;
  responses: Record<string, ProtoServiceMethod>;
  _symbols: TraversalSymbol[];
  findProto(filename): ProtoRef;
  get(from: ProtoRef, name: string): Lookup;
  getTypeUrlMap(ref: ProtoRef);
  setEnumValues(pkg: string, name: string, protoSyntex:string, values: number[]): void;
  getDefaultOrExistingSmallestEnumValue(pkg: string, name: string): number;
}