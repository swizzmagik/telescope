import dotty from 'dotty';
import { Service, Type, Enum, Root, Namespace } from 'protobufjs';
import { ProtoRoot } from '@osmonauts/types';

export const getNestedProto = (root: ProtoRoot) => {
    const nestedPath = 'root.nested.' + root.package.split('.').join('.nested.') + '.nested';
    return dotty.get(root, nestedPath);
};

export const getNestedProtoGeneric = (root: ProtoRoot, path: string[]) => {
    path = root.package.split('.').concat(path);
    const nestedPath = 'root.nested.' + path.join('.nested.') + '.nested';
    return dotty.get(root, nestedPath);
};

export const getNested = (root: ProtoRoot, path: string[]) => {
    const nestedPath = 'root.nested.' + path.join('.nested.') + '.nested';
    return dotty.get(root, nestedPath);
};

// https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/descriptor.cc#L3798-L3812
export const lookupSymbolScopes = (name: string, relativeTo: string, list?: string[]) => {
    // fully-qualified name
    if (name.startsWith('.')) return [name.replace(/^\./, '')];

    if (!list) list = [];
    const relativeToParts = relativeTo.split('.');
    // This first searches siblings of relative_to (pop off relative_to)
    relativeToParts.pop();
    const newName = [...relativeToParts, ...name.split('.')].join('.');
    if (newName === name) return [...list, name];
    return lookupSymbolScopes(name, relativeToParts.join('.'), [...list, newName]);
};

export const getPackageAndNestedFromStr = (type: string, pkg: string) => {
    if (type.startsWith(pkg) && type.length > pkg.length) {
        const nested = type.substring(pkg.length + 1);
        return {
            nested,
            package: pkg
        };
    }
};

export const getServices = (root: ProtoRoot) => {
    const nested = getNestedProto(root);
    return Object.keys(nested).map(key => {
        return nested[key];
    }).filter(obj => {
        return obj instanceof Service;
    }).map(el => {
        return {
            name: el.name,
            ...el.toJSON({ keepComments: true })
        };
    });
};

export const getTypes = (root: ProtoRoot) => {
    const nested = getNestedProto(root);
    return Object.keys(nested).map(key => {
        return nested[key];
    }).filter(obj => {
        return obj instanceof Type;
    }).map(el => {
        return {
            name: el.name,
            ...el.toJSON({ keepComments: true })
        };
    });
};

export const getEnums = (root: ProtoRoot) => {
    const nested = getNestedProto(root);
    return Object.keys(nested).map(key => {
        return nested[key];
    }).filter(obj => {
        return obj instanceof Enum;
    }).map(el => {
        return {
            name: el.name,
            ...el.toJSON({ keepComments: true })
        };
    });
};

/*
    nested objects get a slightly different naming convention
    e.g. SignatureDescriptor_Data or SignatureDescriptor_Data_Multi
*/

export const getObjectName = (name: string, scope: string[] = []) => {
    if (!scope.length || scope.length === 1) return name;
    const [_pkg, ...scopes] = scope;
    return [...scopes, name].join('_')
};

export const NATIVE_TYPES = [
    "double",   // 0
    "float",    // 1
    "int32",    // 2
    "uint32",   // 3
    "sint32",   // 4
    "fixed32",  // 5
    "sfixed32", // 6
    "int64",    // 7
    "uint64",   // 8
    "sint64",   // 9
    "fixed64",  // 10
    "sfixed64", // 11
    "bool",     // 12
    "string",   // 13
    "bytes"     // 14
];

export const instanceType = (obj: any) => {
    if (obj instanceof Type) {
        return {
            name: obj.name,
            type: 'Type'
        };
    }
    if (obj instanceof Enum) {
        return {
            name: obj.name,
            type: 'Enum'
        };
    }
    if (obj instanceof Service) {
        return {
            name: obj.name,
            type: 'Service'
        };
    }
    if (obj instanceof Root) {
        return {
            type: 'Root'
        };
    }
    if (obj instanceof Namespace) {
        return {
            type: 'Namespace'
        };
    }
    // if (obj.name === 'Timestamp') {
    //     return {
    //         name: obj.name,
    //         type: 'google'
    //     };
    // }
    // if (obj.name === 'Duration') {
    //     return {
    //         name: obj.name,
    //         type: 'google'
    //     };
    // }
    if (obj.name.match(/^[a-z]/)) {
        throw new Error('instanceType() cannot find protobufjs Type')
    }
    // duck typing... 
    // TODO why did we lose instance types/names?
    if (obj.fields) {
        return {
            name: obj.name,
            type: 'Type'
        };
    }
    if (obj.values) {
        return {
            name: obj.name,
            type: 'Enum'
        };
    }
    throw new Error('instanceType() cannot find protobufjs Type')
};

