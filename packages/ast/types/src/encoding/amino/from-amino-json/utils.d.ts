import * as t from '@babel/types';
import { FromAminoParseField } from './index';
export declare const fromAmino: {
    defaultType(args: FromAminoParseField): t.ObjectProperty;
    string(args: FromAminoParseField): t.ObjectProperty;
    long(args: FromAminoParseField): t.ObjectProperty;
    duration(args: FromAminoParseField): t.ObjectProperty;
    height(args: FromAminoParseField): t.ObjectProperty;
    enum({ context, field, currentProtoPath, scope, nested, isOptional }: FromAminoParseField): t.ObjectProperty;
    enumArray({ context, field, currentProtoPath, scope, nested, isOptional }: FromAminoParseField): t.ObjectProperty;
    type({ context, field, currentProtoPath, scope, nested, isOptional }: FromAminoParseField): any;
    typeArray({ context, field, currentProtoPath, scope, nested, isOptional }: FromAminoParseField): t.ObjectProperty;
    arrayFrom(args: FromAminoParseField): t.ObjectProperty;
    pubkey(args: FromAminoParseField): t.ObjectProperty;
};
