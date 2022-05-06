import { ProtoType, ProtoAny, ProtoField } from '../proto/types';
import { ProtoRoot } from '@osmonauts/proto-parser';
import { AminoParseContext } from '../context';
export declare const getTypeUrl: (root: ProtoRoot, proto: ProtoAny | ProtoType) => string;
export declare const arrayTypeNDim: (body: any, n: any) => any;
export declare const typeUrlToAmino: (typeUrl: any, exceptions?: {}) => any;
export declare const protoFieldsToArray: (proto: ProtoType) => {
    name: string;
    scope?: string[];
    parsedType?: {
        name: string;
        type: string;
    };
    keyType?: string;
    rule?: string;
    type: string;
    id: number;
    options: {
        [key: string]: any;
        "(gogoproto.nullable)"?: boolean;
        "(cosmos_proto.scalar)"?: string;
        "(gogoproto.customtype)"?: string;
        "(gogoproto.moretags)"?: string;
        "(cosmos_proto.accepts_interface)"?: string;
    };
    comment?: string;
    import?: string;
    importedName?: string;
    scopeType?: string;
}[];
export declare const getTypeFromCurrentProtoPath: (field: ProtoField, currentProtoPath: string, context: AminoParseContext) => any;