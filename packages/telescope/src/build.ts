import { ProtoRef } from '@osmonauts/types';
import { getNestedProto, ProtoStore } from '@osmonauts/proto-parser';
import {
    AminoParseContext,
    createAminoConverter,
    createCreateProtoType,
    createObjectWithMethods,
    createProtoEnum,
    createProtoEnumToJSON,
    createProtoEnumFromJSON,
    createProtoType,
    makeAminoTypeInterface,
    GenericParseContext,
    ProtoParseContext,
    // registry 
    createTypeRegistry,
    createRegistryLoader,
    // helper
    createHelperObject,
} from '@osmonauts/ast';
import { ServiceMutation, ServiceQuery } from './types';

export const getMutations = (mutations: ServiceMutation[]) => {
    return mutations.map((mutation: ServiceMutation) => {
        return {
            typeUrl: `/${mutation.package}.${mutation.message}`,
            TypeName: mutation.message,
            methodName: mutation.methodName
        }
    });
};

export const getAminoProtos = (mutations: ServiceMutation[], store: ProtoStore) => {
    return mutations.map(mutation => {
        const ref = store.findProto(mutation.messageImport);
        return store.get(ref, mutation.message).obj;
    });
};

export const buildBaseTypeScriptClass = (
    context: TelescopeParseContext,
    name: string,
    obj: any
) => {
    context.body.push(createCreateProtoType(name, obj));
    context.body.push(createObjectWithMethods(context.proto, name, obj));
};

export const buildBaseTypeScriptInterface = (
    context: TelescopeParseContext,
    name: string,
    obj: any
) => {
    context.body.push(createProtoType(context.proto, name, obj));
};

export const buildEnums = (
    context: TelescopeParseContext,
    name: string,
    obj: any
) => {
    context.body.push(createProtoEnum(name, obj));
    context.body.push(createProtoEnumFromJSON(name, obj));
    context.body.push(createProtoEnumToJSON(name, obj));
};
export interface TelescopeParseContext {
    generic: GenericParseContext;
    proto: ProtoParseContext;
    amino: AminoParseContext;
    store: ProtoStore;
    ref: ProtoRef;
    parsedImports: Record<string, any>;
    body: any[];
    mutations: ServiceMutation[];
    queries: any[];
    types: any[];
    options: any;
}
export class TelescopeParseContext implements TelescopeParseContext {
    constructor(ref: ProtoRef, store: ProtoStore) {
        this.generic = new GenericParseContext(
            ref, store
        );
        this.proto = new ProtoParseContext(
            ref, store
        );
        this.amino = new AminoParseContext(
            ref, store
        );
        this.ref = ref;
        this.store = store;
        this.parsedImports = {};
        this.body = [];
        this.queries = [];
        this.mutations = [];
        this.types = [];
    }

    hasMutations() {
        return this.mutations.length > 0;
    }

    addType(name: string, obj: any, isNested: boolean) {
        this.types.push({
            name,
            obj,
            isNested
        });
    }
    addMutation(mutation: ServiceMutation) {
        this.mutations.push(mutation);
    }
    addQuery(query: ServiceQuery) {
        this.queries.push(query);
    }
    // build main Class with methods
    buildBase() {
        this.types.forEach(typeReg => {
            const { name, obj } = typeReg;
            if (obj.type === 'Enum') {
                buildEnums(this, name, obj);
            }
        })
        this.types.forEach(typeReg => {
            const { name, obj } = typeReg;
            if (obj.type === 'Type') {
                buildBaseTypeScriptInterface(this, name, obj);
            }
        })
        this.types.forEach(typeReg => {
            const { name, obj } = typeReg;
            if (obj.type === 'Type') {
                buildBaseTypeScriptClass(this, name, obj);
            }
        })
    }

    buildRegistry() {
        this.body.push(createTypeRegistry(this.amino, getMutations(this.mutations)));
    }
    buildRegistryLoader() {
        this.body.push(createRegistryLoader(this.amino));
    }
    buildAminoInterfaces() {
        const protos = getAminoProtos(this.mutations, this.store);
        protos.forEach(proto => {
            this.body.push(makeAminoTypeInterface({
                context: this.amino,
                proto
            }));
        });
    }
    buildAminoConverter() {
        this.body.push(createAminoConverter({
            name: 'AminoConverter',
            context: this.amino,
            root: this.ref.traversed,
            protos: getAminoProtos(this.mutations, this.store)
        }));
    }
    buildHelperObject() {
        // add methods
        this.body.push(createHelperObject({
            name: 'MessageComposer',
            mutations: getMutations(this.mutations)
        }));
    }
}