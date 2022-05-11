import * as _2 from "../../cosmos/app/v1alpha1/config";
import * as _3 from "../../cosmos/app/v1alpha1/module";
import * as _4 from "../../cosmos/app/v1alpha1/query";
import * as _5 from "../../cosmos/auth/v1beta1/auth";
import * as _6 from "../../cosmos/auth/v1beta1/genesis";
import * as _7 from "../../cosmos/auth/v1beta1/query";
import * as _8 from "../../cosmos/authz/v1beta1/authz";
import * as _9 from "../../cosmos/authz/v1beta1/event";
import * as _10 from "../../cosmos/authz/v1beta1/genesis";
import * as _11 from "../../cosmos/authz/v1beta1/query";
import * as _12 from "../../cosmos/authz/v1beta1/tx";
import * as _13 from "../../cosmos/bank/v1beta1/authz";
import * as _14 from "../../cosmos/bank/v1beta1/bank";
import * as _15 from "../../cosmos/bank/v1beta1/genesis";
import * as _16 from "../../cosmos/bank/v1beta1/query";
import * as _17 from "../../cosmos/bank/v1beta1/tx";
import * as _18 from "../../cosmos/base/abci/v1beta1/abci";
import * as _19 from "../../cosmos/base/kv/v1beta1/kv";
import * as _20 from "../../cosmos/base/query/v1beta1/pagination";
import * as _21 from "../../cosmos/base/reflection/v1beta1/reflection";
import * as _22 from "../../cosmos/base/reflection/v2alpha1/reflection";
import * as _23 from "../../cosmos/base/snapshots/v1beta1/snapshot";
import * as _24 from "../../cosmos/base/store/v1beta1/commit_info";
import * as _25 from "../../cosmos/base/store/v1beta1/listening";
import * as _26 from "../../cosmos/base/tendermint/v1beta1/query";
import * as _27 from "../../cosmos/base/v1beta1/coin";
import * as _28 from "../../cosmos/capability/v1beta1/capability";
import * as _29 from "../../cosmos/capability/v1beta1/genesis";
import * as _30 from "../../cosmos/crisis/v1beta1/genesis";
import * as _31 from "../../cosmos/crisis/v1beta1/tx";
import * as _32 from "../../cosmos/crypto/ed25519/keys";
import * as _33 from "../../cosmos/crypto/hd/v1/hd";
import * as _34 from "../../cosmos/crypto/keyring/v1/record";
import * as _35 from "../../cosmos/crypto/multisig/keys";
import * as _36 from "../../cosmos/crypto/secp256k1/keys";
import * as _37 from "../../cosmos/crypto/secp256r1/keys";
import * as _38 from "../../cosmos/distribution/v1beta1/distribution";
import * as _39 from "../../cosmos/distribution/v1beta1/genesis";
import * as _40 from "../../cosmos/distribution/v1beta1/query";
import * as _41 from "../../cosmos/distribution/v1beta1/tx";
import * as _42 from "../../cosmos/evidence/v1beta1/evidence";
import * as _43 from "../../cosmos/evidence/v1beta1/genesis";
import * as _44 from "../../cosmos/evidence/v1beta1/query";
import * as _45 from "../../cosmos/evidence/v1beta1/tx";
import * as _46 from "../../cosmos/feegrant/v1beta1/feegrant";
import * as _47 from "../../cosmos/feegrant/v1beta1/genesis";
import * as _48 from "../../cosmos/feegrant/v1beta1/query";
import * as _49 from "../../cosmos/feegrant/v1beta1/tx";
import * as _50 from "../../cosmos/genutil/v1beta1/genesis";
import * as _51 from "../../cosmos/gov/v1/genesis";
import * as _52 from "../../cosmos/gov/v1/gov";
import * as _53 from "../../cosmos/gov/v1/query";
import * as _54 from "../../cosmos/gov/v1/tx";
import * as _55 from "../../cosmos/gov/v1beta1/genesis";
import * as _56 from "../../cosmos/gov/v1beta1/gov";
import * as _57 from "../../cosmos/gov/v1beta1/query";
import * as _58 from "../../cosmos/gov/v1beta1/tx";
import * as _59 from "../../cosmos/group/v1/events";
import * as _60 from "../../cosmos/group/v1/genesis";
import * as _61 from "../../cosmos/group/v1/query";
import * as _62 from "../../cosmos/group/v1/tx";
import * as _63 from "../../cosmos/group/v1/types";
import * as _64 from "../../cosmos/mint/v1beta1/genesis";
import * as _65 from "../../cosmos/mint/v1beta1/mint";
import * as _66 from "../../cosmos/mint/v1beta1/query";
import * as _67 from "../../cosmos/msg/v1/msg";
import * as _68 from "../../cosmos/nft/v1beta1/event";
import * as _69 from "../../cosmos/nft/v1beta1/genesis";
import * as _70 from "../../cosmos/nft/v1beta1/nft";
import * as _71 from "../../cosmos/nft/v1beta1/query";
import * as _72 from "../../cosmos/nft/v1beta1/tx";
import * as _73 from "../../cosmos/orm/v1/orm";
import * as _74 from "../../cosmos/orm/v1alpha1/schema";
import * as _75 from "../../cosmos/params/v1beta1/params";
import * as _76 from "../../cosmos/params/v1beta1/query";
import * as _77 from "../../cosmos/slashing/v1beta1/genesis";
import * as _78 from "../../cosmos/slashing/v1beta1/query";
import * as _79 from "../../cosmos/slashing/v1beta1/slashing";
import * as _80 from "../../cosmos/slashing/v1beta1/tx";
import * as _81 from "../../cosmos/staking/v1beta1/authz";
import * as _82 from "../../cosmos/staking/v1beta1/genesis";
import * as _83 from "../../cosmos/staking/v1beta1/query";
import * as _84 from "../../cosmos/staking/v1beta1/staking";
import * as _85 from "../../cosmos/staking/v1beta1/tx";
import * as _86 from "../../cosmos/tx/signing/v1beta1/signing";
import * as _87 from "../../cosmos/tx/v1beta1/service";
import * as _88 from "../../cosmos/tx/v1beta1/tx";
import * as _89 from "../../cosmos/upgrade/v1beta1/query";
import * as _90 from "../../cosmos/upgrade/v1beta1/tx";
import * as _91 from "../../cosmos/upgrade/v1beta1/upgrade";
import * as _92 from "../../cosmos/vesting/v1beta1/tx";
import * as _93 from "../../cosmos/vesting/v1beta1/vesting";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = { ..._2,
      ..._3,
      ..._4
    };
  }
  export namespace auth {
    export const v1beta1 = { ..._5,
      ..._6,
      ..._7
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._12
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._17
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._18
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._19
      };
    }
    export namespace query {
      export const v1beta1 = { ..._20
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._21
      };
      export const v2alpha1 = { ..._22
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._23
      };
    }
    export namespace store {
      export const v1beta1 = { ..._24,
        ..._25
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._26
      };
    }
    export const v1beta1 = { ..._27
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._28,
      ..._29
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._30,
      ..._31
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._32
    };
    export namespace hd {
      export const v1 = { ..._33
      };
    }
    export namespace keyring {
      export const v1 = { ..._34
      };
    }
    export const multisig = { ..._35
    };
    export const secp256k1 = { ..._36
    };
    export const secp256r1 = { ..._37
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._38,
      ..._39,
      ..._40,
      ..._41
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._42,
      ..._43,
      ..._44,
      ..._45
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._46,
      ..._47,
      ..._48,
      ..._49
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._50
    };
  }
  export namespace gov {
    export const v1 = { ..._51,
      ..._52,
      ..._53,
      ..._54
    };
    export const v1beta1 = { ..._55,
      ..._56,
      ..._57,
      ..._58
    };
  }
  export namespace group {
    export const v1 = { ..._59,
      ..._60,
      ..._61,
      ..._62,
      ..._63
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._64,
      ..._65,
      ..._66
    };
  }
  export namespace msg {
    export const v1 = { ..._67
    };
  }
  export namespace nft {
    export const v1beta1 = { ..._68,
      ..._69,
      ..._70,
      ..._71,
      ..._72
    };
  }
  export namespace orm {
    export const v1 = { ..._73
    };
    export const v1alpha1 = { ..._74
    };
  }
  export namespace params {
    export const v1beta1 = { ..._75,
      ..._76
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._77,
      ..._78,
      ..._79,
      ..._80
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._85
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._86
      };
    }
    export const v1beta1 = { ..._87,
      ..._88
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._89,
      ..._90,
      ..._91
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._92,
      ..._93
    };
  }
}