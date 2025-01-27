import { makeAminoTypeInterface } from './index';
import { ProtoStore } from '@osmonauts/proto-parser'
import { camel, snake } from 'case';
import { prepareContext, expectCode, printCode } from '../../../../test-utils';
const store = new ProtoStore([__dirname + '/../../../../../../__fixtures__/chain1']);
store.traverseAll();

describe('osmosis/gamm/v1beta1/tx', () => {

    const {
        context, protos
    } = prepareContext(store, 'osmosis/gamm/v1beta1/tx.proto')

    it('Interfaces', () => {
        context.options = {
            aminoCasingFn: camel
        };
        expectCode(makeAminoTypeInterface(
            {
                context,
                proto: protos.find(p => p.name === 'MsgJoinPool'),
            }
        ))
    })
});


describe('cosmos/staking/v1beta1/tx', () => {
    const {
        context, protos
    } = prepareContext(store, 'cosmos/staking/v1beta1/tx.proto')

    it('MsgCreateValidator', () => {
        context.options = {
            aminoCasingFn: snake
        }

        expectCode(makeAminoTypeInterface(
            {
                context,
                proto: protos.find(p => p.name === 'MsgCreateValidator'),
            }
        ))
    })
    it('MsgEditValidator', () => {
        context.options = {
            aminoCasingFn: snake
        }

        expectCode(makeAminoTypeInterface(
            {
                context,
                proto: protos.find(p => p.name === 'MsgEditValidator'),
            }
        ))
    })
    it('MsgUndelegate', () => {
        context.options = {
            aminoCasingFn: snake
        }

        expectCode(makeAminoTypeInterface(
            {
                context,
                proto: protos.find(p => p.name === 'MsgUndelegate'),
            }
        ))
    })
});

