import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial, KeysOfUnion, Builtin } from "@osmonauts/helpers";
export interface Control {
  environment: string;
}

function createBaseControl(): Control {
  return {
    environment: ""
  };
}

export const Control = {
  encode(message: Control, writer = _m0.Writer.create()): _m0.Writer {
    if (message.environment !== "") {
      writer.uint32(10).string(message.environment);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Control {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControl();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.environment = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Control {
    return {
      environment: isSet(object.environment) ? String(object.environment) : ""
    };
  },

  toJSON(message: Control): unknown {
    const obj: any = {};
    message.environment !== undefined && (obj.environment = message.environment);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Control>, I>>(object: I): Control {
    const message = createBaseControl();
    message.environment = object.environment ?? "";
    return message;
  }

};