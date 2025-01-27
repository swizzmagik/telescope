import * as t from '@babel/types';
import { DEFAULT_AMINO_EXCEPTIONS, ProtoAny, ProtoRoot, ProtoType } from '@osmonauts/types';
import { kebab } from "case";

export const getTypeUrl = (root: ProtoRoot, proto: ProtoAny | ProtoType) => {
    return `/${root.package}.${proto.name}`;
}

export const arrayTypeNDim = (body, n) => {
    if (!n || n <= 1) return t.tsArrayType(body);
    return t.tsArrayType(
        arrayTypeNDim(body, n - 1)
    );
};

export const typeUrlToAmino = (typeUrl, exceptions = {}) => {
    const exceptionsToCheck = {
        ...exceptions,
        ...DEFAULT_AMINO_EXCEPTIONS
    }
    const exceptionAminoName = exceptionsToCheck?.[typeUrl]?.aminoType;
    if (exceptionAminoName) return exceptionAminoName;

    const name = typeUrl.replace(/^\//, '');
    const elements = name.split('.');
    const pkg = elements[0];
    switch (pkg) {
        case 'cosmos':
        case 'ibc':
            return `cosmos-sdk/${elements[elements.length - 1]}`;
        case 'osmosis': {
            const n = elements.filter(a => !a.match(/v1beta1/));
            n[n.length - 1] = kebab(n[n.length - 1]);
            n[n.length - 1] = n[n.length - 1].replace(/^msg-/, '');
            return n.join('/');
        } default:
            return typeUrl;
    }
}

export const protoFieldsToArray = (proto: ProtoType) => {
    return Object.keys(proto.fields).map(name => {
        return {
            name,
            ...proto.fields[name]
        };
    })
}