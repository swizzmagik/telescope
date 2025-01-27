import * as _102 from "./api/http";
import * as _103 from "./protobuf/any";
import * as _104 from "./protobuf/descriptor";
import * as _105 from "./protobuf/duration";
import * as _106 from "./protobuf/empty";
import * as _107 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _102.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Http;
            fromJSON(object: any): _102.Http;
            toJSON(message: _102.Http): unknown;
            fromPartial<I extends {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            } & {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[] & ({
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                } & {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    } & {
                        kind?: string;
                        path?: string;
                    } & Record<Exclude<keyof I["rules"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: {
                        selector?: string;
                        get?: string;
                        put?: string;
                        post?: string;
                        delete?: string;
                        patch?: string;
                        custom?: {
                            kind?: string;
                            path?: string;
                        };
                        body?: string;
                        responseBody?: string;
                        additionalBindings?: any[];
                    }[] & ({
                        selector?: string;
                        get?: string;
                        put?: string;
                        post?: string;
                        delete?: string;
                        patch?: string;
                        custom?: {
                            kind?: string;
                            path?: string;
                        };
                        body?: string;
                        responseBody?: string;
                        additionalBindings?: any[];
                    } & {
                        selector?: string;
                        get?: string;
                        put?: string;
                        post?: string;
                        delete?: string;
                        patch?: string;
                        custom?: {
                            kind?: string;
                            path?: string;
                        } & {
                            kind?: string;
                            path?: string;
                        } & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                        body?: string;
                        responseBody?: string;
                        additionalBindings?: {
                            selector?: string;
                            get?: string;
                            put?: string;
                            post?: string;
                            delete?: string;
                            patch?: string;
                            custom?: {
                                kind?: string;
                                path?: string;
                            };
                            body?: string;
                            responseBody?: string;
                            additionalBindings?: any[];
                        }[] & ({
                            selector?: string;
                            get?: string;
                            put?: string;
                            post?: string;
                            delete?: string;
                            patch?: string;
                            custom?: {
                                kind?: string;
                                path?: string;
                            };
                            body?: string;
                            responseBody?: string;
                            additionalBindings?: any[];
                        } & {
                            selector?: string;
                            get?: string;
                            put?: string;
                            post?: string;
                            delete?: string;
                            patch?: string;
                            custom?: {
                                kind?: string;
                                path?: string;
                            } & {
                                kind?: string;
                                path?: string;
                            } & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                            body?: string;
                            responseBody?: string;
                            additionalBindings?: {
                                selector?: string;
                                get?: string;
                                put?: string;
                                post?: string;
                                delete?: string;
                                patch?: string;
                                custom?: {
                                    kind?: string;
                                    path?: string;
                                };
                                body?: string;
                                responseBody?: string;
                                additionalBindings?: any[];
                            }[] & ({
                                selector?: string;
                                get?: string;
                                put?: string;
                                post?: string;
                                delete?: string;
                                patch?: string;
                                custom?: {
                                    kind?: string;
                                    path?: string;
                                };
                                body?: string;
                                responseBody?: string;
                                additionalBindings?: any[];
                            } & {
                                selector?: string;
                                get?: string;
                                put?: string;
                                post?: string;
                                delete?: string;
                                patch?: string;
                                custom?: {
                                    kind?: string;
                                    path?: string;
                                } & {
                                    kind?: string;
                                    path?: string;
                                } & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                                body?: string;
                                responseBody?: string;
                                additionalBindings?: {
                                    selector?: string;
                                    get?: string;
                                    put?: string;
                                    post?: string;
                                    delete?: string;
                                    patch?: string;
                                    custom?: {
                                        kind?: string;
                                        path?: string;
                                    };
                                    body?: string;
                                    responseBody?: string;
                                    additionalBindings?: any[];
                                }[] & ({
                                    selector?: string;
                                    get?: string;
                                    put?: string;
                                    post?: string;
                                    delete?: string;
                                    patch?: string;
                                    custom?: {
                                        kind?: string;
                                        path?: string;
                                    };
                                    body?: string;
                                    responseBody?: string;
                                    additionalBindings?: any[];
                                } & {
                                    selector?: string;
                                    get?: string;
                                    put?: string;
                                    post?: string;
                                    delete?: string;
                                    patch?: string;
                                    custom?: {
                                        kind?: string;
                                        path?: string;
                                    } & {
                                        kind?: string;
                                        path?: string;
                                    } & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                                    body?: string;
                                    responseBody?: string;
                                    additionalBindings?: {
                                        selector?: string;
                                        get?: string;
                                        put?: string;
                                        post?: string;
                                        delete?: string;
                                        patch?: string;
                                        custom?: {
                                            kind?: string;
                                            path?: string;
                                        };
                                        body?: string;
                                        responseBody?: string;
                                        additionalBindings?: any[];
                                    }[] & ({
                                        selector?: string;
                                        get?: string;
                                        put?: string;
                                        post?: string;
                                        delete?: string;
                                        patch?: string;
                                        custom?: {
                                            kind?: string;
                                            path?: string;
                                        };
                                        body?: string;
                                        responseBody?: string;
                                        additionalBindings?: any[];
                                    } & {
                                        selector?: string;
                                        get?: string;
                                        put?: string;
                                        post?: string;
                                        delete?: string;
                                        patch?: string;
                                        custom?: {
                                            kind?: string;
                                            path?: string;
                                        } & {
                                            kind?: string;
                                            path?: string;
                                        } & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                                        body?: string;
                                        responseBody?: string;
                                        additionalBindings?: {
                                            selector?: string;
                                            get?: string;
                                            put?: string;
                                            post?: string;
                                            delete?: string;
                                            patch?: string;
                                            custom?: {
                                                kind?: string;
                                                path?: string;
                                            };
                                            body?: string;
                                            responseBody?: string;
                                            additionalBindings?: any[];
                                        }[] & ({
                                            selector?: string;
                                            get?: string;
                                            put?: string;
                                            post?: string;
                                            delete?: string;
                                            patch?: string;
                                            custom?: {
                                                kind?: string;
                                                path?: string;
                                            };
                                            body?: string;
                                            responseBody?: string;
                                            additionalBindings?: any[];
                                        } & {
                                            selector?: string;
                                            get?: string;
                                            put?: string;
                                            post?: string;
                                            delete?: string;
                                            patch?: string;
                                            custom?: {
                                                kind?: string;
                                                path?: string;
                                            } & {
                                                kind?: string;
                                                path?: string;
                                            } & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                                            body?: string;
                                            responseBody?: string;
                                            additionalBindings?: {
                                                selector?: string;
                                                get?: string;
                                                put?: string;
                                                post?: string;
                                                delete?: string;
                                                patch?: string;
                                                custom?: {
                                                    kind?: string;
                                                    path?: string;
                                                };
                                                body?: string;
                                                responseBody?: string;
                                                additionalBindings?: any[];
                                            }[] & ({
                                                selector?: string;
                                                get?: string;
                                                put?: string;
                                                post?: string;
                                                delete?: string;
                                                patch?: string;
                                                custom?: {
                                                    kind?: string;
                                                    path?: string;
                                                };
                                                body?: string;
                                                responseBody?: string;
                                                additionalBindings?: any[];
                                            } & {
                                                selector?: string;
                                                get?: string;
                                                put?: string;
                                                post?: string;
                                                delete?: string;
                                                patch?: string;
                                                custom?: {
                                                    kind?: string;
                                                    path?: string;
                                                } & {
                                                    kind?: string;
                                                    path?: string;
                                                } & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                                                body?: string;
                                                responseBody?: string;
                                                additionalBindings?: {
                                                    selector?: string;
                                                    get?: string;
                                                    put?: string;
                                                    post?: string;
                                                    delete?: string;
                                                    patch?: string;
                                                    custom?: {
                                                        kind?: string;
                                                        path?: string;
                                                    };
                                                    body?: string;
                                                    responseBody?: string;
                                                    additionalBindings?: any[];
                                                }[] & ({
                                                    selector?: string;
                                                    get?: string;
                                                    put?: string;
                                                    post?: string;
                                                    delete?: string;
                                                    patch?: string;
                                                    custom?: {
                                                        kind?: string;
                                                        path?: string;
                                                    };
                                                    body?: string;
                                                    responseBody?: string;
                                                    additionalBindings?: any[];
                                                } & {
                                                    selector?: string;
                                                    get?: string;
                                                    put?: string;
                                                    post?: string;
                                                    delete?: string;
                                                    patch?: string;
                                                    custom?: {
                                                        kind?: string;
                                                        path?: string;
                                                    } & {
                                                        kind?: string;
                                                        path?: string;
                                                    } & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                                                    body?: string;
                                                    responseBody?: string;
                                                    additionalBindings?: {
                                                        selector?: string;
                                                        get?: string;
                                                        put?: string;
                                                        post?: string;
                                                        delete?: string;
                                                        patch?: string;
                                                        custom?: {
                                                            kind?: string;
                                                            path?: string;
                                                        };
                                                        body?: string;
                                                        responseBody?: string;
                                                        additionalBindings?: any[];
                                                    }[] & ({
                                                        selector?: string;
                                                        get?: string;
                                                        put?: string;
                                                        post?: string;
                                                        delete?: string;
                                                        patch?: string;
                                                        custom?: {
                                                            kind?: string;
                                                            path?: string;
                                                        };
                                                        body?: string;
                                                        responseBody?: string;
                                                        additionalBindings?: any[];
                                                    } & {
                                                        selector?: string;
                                                        get?: string;
                                                        put?: string;
                                                        post?: string;
                                                        delete?: string;
                                                        patch?: string;
                                                        custom?: {
                                                            kind?: string;
                                                            path?: string;
                                                        } & any & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                                                        body?: string;
                                                        responseBody?: string;
                                                        additionalBindings?: {
                                                            selector?: string;
                                                            get?: string;
                                                            put?: string;
                                                            post?: string;
                                                            delete?: string;
                                                            patch?: string;
                                                            custom?: {
                                                                kind?: string;
                                                                path?: string;
                                                            };
                                                            body?: string;
                                                            responseBody?: string;
                                                            additionalBindings?: any[];
                                                        }[] & ({
                                                            selector?: string;
                                                            get?: string;
                                                            put?: string;
                                                            post?: string;
                                                            delete?: string;
                                                            patch?: string;
                                                            custom?: {
                                                                kind?: string;
                                                                path?: string;
                                                            };
                                                            body?: string;
                                                            responseBody?: string;
                                                            additionalBindings?: any[];
                                                        } & any & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                                                            selector?: string;
                                                            get?: string;
                                                            put?: string;
                                                            post?: string;
                                                            delete?: string;
                                                            patch?: string;
                                                            custom?: {
                                                                kind?: string;
                                                                path?: string;
                                                            };
                                                            body?: string;
                                                            responseBody?: string;
                                                            additionalBindings?: any[];
                                                        }[]>, never>;
                                                    } & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                                                        selector?: string;
                                                        get?: string;
                                                        put?: string;
                                                        post?: string;
                                                        delete?: string;
                                                        patch?: string;
                                                        custom?: {
                                                            kind?: string;
                                                            path?: string;
                                                        };
                                                        body?: string;
                                                        responseBody?: string;
                                                        additionalBindings?: any[];
                                                    }[]>, never>;
                                                } & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                                                    selector?: string;
                                                    get?: string;
                                                    put?: string;
                                                    post?: string;
                                                    delete?: string;
                                                    patch?: string;
                                                    custom?: {
                                                        kind?: string;
                                                        path?: string;
                                                    };
                                                    body?: string;
                                                    responseBody?: string;
                                                    additionalBindings?: any[];
                                                }[]>, never>;
                                            } & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                                                selector?: string;
                                                get?: string;
                                                put?: string;
                                                post?: string;
                                                delete?: string;
                                                patch?: string;
                                                custom?: {
                                                    kind?: string;
                                                    path?: string;
                                                };
                                                body?: string;
                                                responseBody?: string;
                                                additionalBindings?: any[];
                                            }[]>, never>;
                                        } & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                                            selector?: string;
                                            get?: string;
                                            put?: string;
                                            post?: string;
                                            delete?: string;
                                            patch?: string;
                                            custom?: {
                                                kind?: string;
                                                path?: string;
                                            };
                                            body?: string;
                                            responseBody?: string;
                                            additionalBindings?: any[];
                                        }[]>, never>;
                                    } & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                                        selector?: string;
                                        get?: string;
                                        put?: string;
                                        post?: string;
                                        delete?: string;
                                        patch?: string;
                                        custom?: {
                                            kind?: string;
                                            path?: string;
                                        };
                                        body?: string;
                                        responseBody?: string;
                                        additionalBindings?: any[];
                                    }[]>, never>;
                                } & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                                    selector?: string;
                                    get?: string;
                                    put?: string;
                                    post?: string;
                                    delete?: string;
                                    patch?: string;
                                    custom?: {
                                        kind?: string;
                                        path?: string;
                                    };
                                    body?: string;
                                    responseBody?: string;
                                    additionalBindings?: any[];
                                }[]>, never>;
                            } & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                                selector?: string;
                                get?: string;
                                put?: string;
                                post?: string;
                                delete?: string;
                                patch?: string;
                                custom?: {
                                    kind?: string;
                                    path?: string;
                                };
                                body?: string;
                                responseBody?: string;
                                additionalBindings?: any[];
                            }[]>, never>;
                        } & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                            selector?: string;
                            get?: string;
                            put?: string;
                            post?: string;
                            delete?: string;
                            patch?: string;
                            custom?: {
                                kind?: string;
                                path?: string;
                            };
                            body?: string;
                            responseBody?: string;
                            additionalBindings?: any[];
                        }[]>, never>;
                    } & Record<Exclude<keyof I["rules"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I["rules"][number]["additionalBindings"], keyof {
                        selector?: string;
                        get?: string;
                        put?: string;
                        post?: string;
                        delete?: string;
                        patch?: string;
                        custom?: {
                            kind?: string;
                            path?: string;
                        };
                        body?: string;
                        responseBody?: string;
                        additionalBindings?: any[];
                    }[]>, never>;
                } & Record<Exclude<keyof I["rules"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I["rules"], keyof {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[]>, never>;
                fullyDecodeReservedExpansion?: boolean;
            } & Record<Exclude<keyof I, keyof _102.Http>, never>>(object: I): _102.Http;
        };
        HttpRule: {
            encode(message: _102.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.HttpRule;
            fromJSON(object: any): _102.HttpRule;
            toJSON(message: _102.HttpRule): unknown;
            fromPartial<I_1 extends {
                selector?: string;
                get?: string;
                put?: string;
                post?: string;
                delete?: string;
                patch?: string;
                custom?: {
                    kind?: string;
                    path?: string;
                };
                body?: string;
                responseBody?: string;
                additionalBindings?: any[];
            } & {
                selector?: string;
                get?: string;
                put?: string;
                post?: string;
                delete?: string;
                patch?: string;
                custom?: {
                    kind?: string;
                    path?: string;
                } & {
                    kind?: string;
                    path?: string;
                } & Record<Exclude<keyof I_1["custom"], keyof _102.CustomHttpPattern>, never>;
                body?: string;
                responseBody?: string;
                additionalBindings?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[] & ({
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                } & {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    } & {
                        kind?: string;
                        path?: string;
                    } & Record<Exclude<keyof I_1["additionalBindings"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: {
                        selector?: string;
                        get?: string;
                        put?: string;
                        post?: string;
                        delete?: string;
                        patch?: string;
                        custom?: {
                            kind?: string;
                            path?: string;
                        };
                        body?: string;
                        responseBody?: string;
                        additionalBindings?: any[];
                    }[] & ({
                        selector?: string;
                        get?: string;
                        put?: string;
                        post?: string;
                        delete?: string;
                        patch?: string;
                        custom?: {
                            kind?: string;
                            path?: string;
                        };
                        body?: string;
                        responseBody?: string;
                        additionalBindings?: any[];
                    } & {
                        selector?: string;
                        get?: string;
                        put?: string;
                        post?: string;
                        delete?: string;
                        patch?: string;
                        custom?: {
                            kind?: string;
                            path?: string;
                        } & {
                            kind?: string;
                            path?: string;
                        } & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                        body?: string;
                        responseBody?: string;
                        additionalBindings?: {
                            selector?: string;
                            get?: string;
                            put?: string;
                            post?: string;
                            delete?: string;
                            patch?: string;
                            custom?: {
                                kind?: string;
                                path?: string;
                            };
                            body?: string;
                            responseBody?: string;
                            additionalBindings?: any[];
                        }[] & ({
                            selector?: string;
                            get?: string;
                            put?: string;
                            post?: string;
                            delete?: string;
                            patch?: string;
                            custom?: {
                                kind?: string;
                                path?: string;
                            };
                            body?: string;
                            responseBody?: string;
                            additionalBindings?: any[];
                        } & {
                            selector?: string;
                            get?: string;
                            put?: string;
                            post?: string;
                            delete?: string;
                            patch?: string;
                            custom?: {
                                kind?: string;
                                path?: string;
                            } & {
                                kind?: string;
                                path?: string;
                            } & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                            body?: string;
                            responseBody?: string;
                            additionalBindings?: {
                                selector?: string;
                                get?: string;
                                put?: string;
                                post?: string;
                                delete?: string;
                                patch?: string;
                                custom?: {
                                    kind?: string;
                                    path?: string;
                                };
                                body?: string;
                                responseBody?: string;
                                additionalBindings?: any[];
                            }[] & ({
                                selector?: string;
                                get?: string;
                                put?: string;
                                post?: string;
                                delete?: string;
                                patch?: string;
                                custom?: {
                                    kind?: string;
                                    path?: string;
                                };
                                body?: string;
                                responseBody?: string;
                                additionalBindings?: any[];
                            } & {
                                selector?: string;
                                get?: string;
                                put?: string;
                                post?: string;
                                delete?: string;
                                patch?: string;
                                custom?: {
                                    kind?: string;
                                    path?: string;
                                } & {
                                    kind?: string;
                                    path?: string;
                                } & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                                body?: string;
                                responseBody?: string;
                                additionalBindings?: {
                                    selector?: string;
                                    get?: string;
                                    put?: string;
                                    post?: string;
                                    delete?: string;
                                    patch?: string;
                                    custom?: {
                                        kind?: string;
                                        path?: string;
                                    };
                                    body?: string;
                                    responseBody?: string;
                                    additionalBindings?: any[];
                                }[] & ({
                                    selector?: string;
                                    get?: string;
                                    put?: string;
                                    post?: string;
                                    delete?: string;
                                    patch?: string;
                                    custom?: {
                                        kind?: string;
                                        path?: string;
                                    };
                                    body?: string;
                                    responseBody?: string;
                                    additionalBindings?: any[];
                                } & {
                                    selector?: string;
                                    get?: string;
                                    put?: string;
                                    post?: string;
                                    delete?: string;
                                    patch?: string;
                                    custom?: {
                                        kind?: string;
                                        path?: string;
                                    } & {
                                        kind?: string;
                                        path?: string;
                                    } & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                                    body?: string;
                                    responseBody?: string;
                                    additionalBindings?: {
                                        selector?: string;
                                        get?: string;
                                        put?: string;
                                        post?: string;
                                        delete?: string;
                                        patch?: string;
                                        custom?: {
                                            kind?: string;
                                            path?: string;
                                        };
                                        body?: string;
                                        responseBody?: string;
                                        additionalBindings?: any[];
                                    }[] & ({
                                        selector?: string;
                                        get?: string;
                                        put?: string;
                                        post?: string;
                                        delete?: string;
                                        patch?: string;
                                        custom?: {
                                            kind?: string;
                                            path?: string;
                                        };
                                        body?: string;
                                        responseBody?: string;
                                        additionalBindings?: any[];
                                    } & {
                                        selector?: string;
                                        get?: string;
                                        put?: string;
                                        post?: string;
                                        delete?: string;
                                        patch?: string;
                                        custom?: {
                                            kind?: string;
                                            path?: string;
                                        } & {
                                            kind?: string;
                                            path?: string;
                                        } & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                                        body?: string;
                                        responseBody?: string;
                                        additionalBindings?: {
                                            selector?: string;
                                            get?: string;
                                            put?: string;
                                            post?: string;
                                            delete?: string;
                                            patch?: string;
                                            custom?: {
                                                kind?: string;
                                                path?: string;
                                            };
                                            body?: string;
                                            responseBody?: string;
                                            additionalBindings?: any[];
                                        }[] & ({
                                            selector?: string;
                                            get?: string;
                                            put?: string;
                                            post?: string;
                                            delete?: string;
                                            patch?: string;
                                            custom?: {
                                                kind?: string;
                                                path?: string;
                                            };
                                            body?: string;
                                            responseBody?: string;
                                            additionalBindings?: any[];
                                        } & {
                                            selector?: string;
                                            get?: string;
                                            put?: string;
                                            post?: string;
                                            delete?: string;
                                            patch?: string;
                                            custom?: {
                                                kind?: string;
                                                path?: string;
                                            } & {
                                                kind?: string;
                                                path?: string;
                                            } & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                                            body?: string;
                                            responseBody?: string;
                                            additionalBindings?: {
                                                selector?: string;
                                                get?: string;
                                                put?: string;
                                                post?: string;
                                                delete?: string;
                                                patch?: string;
                                                custom?: {
                                                    kind?: string;
                                                    path?: string;
                                                };
                                                body?: string;
                                                responseBody?: string;
                                                additionalBindings?: any[];
                                            }[] & ({
                                                selector?: string;
                                                get?: string;
                                                put?: string;
                                                post?: string;
                                                delete?: string;
                                                patch?: string;
                                                custom?: {
                                                    kind?: string;
                                                    path?: string;
                                                };
                                                body?: string;
                                                responseBody?: string;
                                                additionalBindings?: any[];
                                            } & {
                                                selector?: string;
                                                get?: string;
                                                put?: string;
                                                post?: string;
                                                delete?: string;
                                                patch?: string;
                                                custom?: {
                                                    kind?: string;
                                                    path?: string;
                                                } & {
                                                    kind?: string;
                                                    path?: string;
                                                } & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                                                body?: string;
                                                responseBody?: string;
                                                additionalBindings?: {
                                                    selector?: string;
                                                    get?: string;
                                                    put?: string;
                                                    post?: string;
                                                    delete?: string;
                                                    patch?: string;
                                                    custom?: {
                                                        kind?: string;
                                                        path?: string;
                                                    };
                                                    body?: string;
                                                    responseBody?: string;
                                                    additionalBindings?: any[];
                                                }[] & ({
                                                    selector?: string;
                                                    get?: string;
                                                    put?: string;
                                                    post?: string;
                                                    delete?: string;
                                                    patch?: string;
                                                    custom?: {
                                                        kind?: string;
                                                        path?: string;
                                                    };
                                                    body?: string;
                                                    responseBody?: string;
                                                    additionalBindings?: any[];
                                                } & {
                                                    selector?: string;
                                                    get?: string;
                                                    put?: string;
                                                    post?: string;
                                                    delete?: string;
                                                    patch?: string;
                                                    custom?: {
                                                        kind?: string;
                                                        path?: string;
                                                    } & {
                                                        kind?: string;
                                                        path?: string;
                                                    } & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                                                    body?: string;
                                                    responseBody?: string;
                                                    additionalBindings?: {
                                                        selector?: string;
                                                        get?: string;
                                                        put?: string;
                                                        post?: string;
                                                        delete?: string;
                                                        patch?: string;
                                                        custom?: {
                                                            kind?: string;
                                                            path?: string;
                                                        };
                                                        body?: string;
                                                        responseBody?: string;
                                                        additionalBindings?: any[];
                                                    }[] & ({
                                                        selector?: string;
                                                        get?: string;
                                                        put?: string;
                                                        post?: string;
                                                        delete?: string;
                                                        patch?: string;
                                                        custom?: {
                                                            kind?: string;
                                                            path?: string;
                                                        };
                                                        body?: string;
                                                        responseBody?: string;
                                                        additionalBindings?: any[];
                                                    } & {
                                                        selector?: string;
                                                        get?: string;
                                                        put?: string;
                                                        post?: string;
                                                        delete?: string;
                                                        patch?: string;
                                                        custom?: {
                                                            kind?: string;
                                                            path?: string;
                                                        } & any & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["custom"], keyof _102.CustomHttpPattern>, never>;
                                                        body?: string;
                                                        responseBody?: string;
                                                        additionalBindings?: {
                                                            selector?: string;
                                                            get?: string;
                                                            put?: string;
                                                            post?: string;
                                                            delete?: string;
                                                            patch?: string;
                                                            custom?: {
                                                                kind?: string;
                                                                path?: string;
                                                            };
                                                            body?: string;
                                                            responseBody?: string;
                                                            additionalBindings?: any[];
                                                        }[] & ({
                                                            selector?: string;
                                                            get?: string;
                                                            put?: string;
                                                            post?: string;
                                                            delete?: string;
                                                            patch?: string;
                                                            custom?: {
                                                                kind?: string;
                                                                path?: string;
                                                            };
                                                            body?: string;
                                                            responseBody?: string;
                                                            additionalBindings?: any[];
                                                        } & any & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                                                            selector?: string;
                                                            get?: string;
                                                            put?: string;
                                                            post?: string;
                                                            delete?: string;
                                                            patch?: string;
                                                            custom?: {
                                                                kind?: string;
                                                                path?: string;
                                                            };
                                                            body?: string;
                                                            responseBody?: string;
                                                            additionalBindings?: any[];
                                                        }[]>, never>;
                                                    } & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                                                        selector?: string;
                                                        get?: string;
                                                        put?: string;
                                                        post?: string;
                                                        delete?: string;
                                                        patch?: string;
                                                        custom?: {
                                                            kind?: string;
                                                            path?: string;
                                                        };
                                                        body?: string;
                                                        responseBody?: string;
                                                        additionalBindings?: any[];
                                                    }[]>, never>;
                                                } & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                                                    selector?: string;
                                                    get?: string;
                                                    put?: string;
                                                    post?: string;
                                                    delete?: string;
                                                    patch?: string;
                                                    custom?: {
                                                        kind?: string;
                                                        path?: string;
                                                    };
                                                    body?: string;
                                                    responseBody?: string;
                                                    additionalBindings?: any[];
                                                }[]>, never>;
                                            } & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                                                selector?: string;
                                                get?: string;
                                                put?: string;
                                                post?: string;
                                                delete?: string;
                                                patch?: string;
                                                custom?: {
                                                    kind?: string;
                                                    path?: string;
                                                };
                                                body?: string;
                                                responseBody?: string;
                                                additionalBindings?: any[];
                                            }[]>, never>;
                                        } & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                                            selector?: string;
                                            get?: string;
                                            put?: string;
                                            post?: string;
                                            delete?: string;
                                            patch?: string;
                                            custom?: {
                                                kind?: string;
                                                path?: string;
                                            };
                                            body?: string;
                                            responseBody?: string;
                                            additionalBindings?: any[];
                                        }[]>, never>;
                                    } & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                                        selector?: string;
                                        get?: string;
                                        put?: string;
                                        post?: string;
                                        delete?: string;
                                        patch?: string;
                                        custom?: {
                                            kind?: string;
                                            path?: string;
                                        };
                                        body?: string;
                                        responseBody?: string;
                                        additionalBindings?: any[];
                                    }[]>, never>;
                                } & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                                    selector?: string;
                                    get?: string;
                                    put?: string;
                                    post?: string;
                                    delete?: string;
                                    patch?: string;
                                    custom?: {
                                        kind?: string;
                                        path?: string;
                                    };
                                    body?: string;
                                    responseBody?: string;
                                    additionalBindings?: any[];
                                }[]>, never>;
                            } & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                                selector?: string;
                                get?: string;
                                put?: string;
                                post?: string;
                                delete?: string;
                                patch?: string;
                                custom?: {
                                    kind?: string;
                                    path?: string;
                                };
                                body?: string;
                                responseBody?: string;
                                additionalBindings?: any[];
                            }[]>, never>;
                        } & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number]["additionalBindings"], keyof {
                            selector?: string;
                            get?: string;
                            put?: string;
                            post?: string;
                            delete?: string;
                            patch?: string;
                            custom?: {
                                kind?: string;
                                path?: string;
                            };
                            body?: string;
                            responseBody?: string;
                            additionalBindings?: any[];
                        }[]>, never>;
                    } & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I_1["additionalBindings"][number]["additionalBindings"], keyof {
                        selector?: string;
                        get?: string;
                        put?: string;
                        post?: string;
                        delete?: string;
                        patch?: string;
                        custom?: {
                            kind?: string;
                            path?: string;
                        };
                        body?: string;
                        responseBody?: string;
                        additionalBindings?: any[];
                    }[]>, never>;
                } & Record<Exclude<keyof I_1["additionalBindings"][number], keyof _102.HttpRule>, never>)[] & Record<Exclude<keyof I_1["additionalBindings"], keyof {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[]>, never>;
            } & Record<Exclude<keyof I_1, keyof _102.HttpRule>, never>>(object: I_1): _102.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _102.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.CustomHttpPattern;
            fromJSON(object: any): _102.CustomHttpPattern;
            toJSON(message: _102.CustomHttpPattern): unknown;
            fromPartial<I_2 extends {
                kind?: string;
                path?: string;
            } & {
                kind?: string;
                path?: string;
            } & Record<Exclude<keyof I_2, keyof _102.CustomHttpPattern>, never>>(object: I_2): _102.CustomHttpPattern;
        };
    };
    const protobuf: {
        Timestamp: {
            encode(message: _107.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Timestamp;
            fromJSON(object: any): _107.Timestamp;
            toJSON(message: _107.Timestamp): unknown;
            fromPartial(object: {
                seconds?: any;
                nanos?: number;
            }): _107.Timestamp;
        };
        Empty: {
            encode(_: _106.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Empty;
            fromJSON(_: any): _106.Empty;
            toJSON(_: _106.Empty): unknown;
            fromPartial(_: {}): _106.Empty;
        };
        Duration: {
            encode(message: _105.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Duration;
            fromJSON(object: any): _105.Duration;
            toJSON(message: _105.Duration): unknown;
            fromPartial(object: {
                seconds?: any;
                nanos?: number;
            }): _105.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _104.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _104.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _104.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _104.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _104.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _104.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _104.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _104.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _104.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _104.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _104.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _104.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _104.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _104.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _104.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _104.FieldOptions_CType;
        FieldOptions_JSType: typeof _104.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _104.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _104.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.FileDescriptorSet;
            fromJSON(object: any): _104.FileDescriptorSet;
            toJSON(message: _104.FileDescriptorSet): unknown;
            fromPartial(object: _104.FileDescriptorSet): _104.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _104.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.FileDescriptorProto;
            fromJSON(object: any): _104.FileDescriptorProto;
            toJSON(message: _104.FileDescriptorProto): unknown;
            fromPartial(object: _104.FileDescriptorProto): _104.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _104.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.DescriptorProto;
            fromJSON(object: any): _104.DescriptorProto;
            toJSON(message: _104.DescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _104.FieldDescriptorProto_Label;
                    type?: _104.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _104.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _104.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: any;
                            negativeIntValue?: any;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _104.FieldDescriptorProto_Label;
                    type?: _104.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _104.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _104.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: any;
                            negativeIntValue?: any;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                nestedType?: any[];
                enumType?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: any;
                                negativeIntValue?: any;
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allowAlias?: boolean;
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: any;
                            negativeIntValue?: any;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                extensionRange?: {
                    start?: number;
                    end?: number;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: any;
                            negativeIntValue?: any;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                oneofDecl?: {
                    name?: string;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: any;
                            negativeIntValue?: any;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    messageSetWireFormat?: boolean;
                    noStandardDescriptorAccessor?: boolean;
                    deprecated?: boolean;
                    mapEntry?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: any;
                        negativeIntValue?: any;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                reservedRange?: {
                    start?: number;
                    end?: number;
                }[];
                reservedName?: string[];
            }): _104.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _104.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _104.DescriptorProto_ExtensionRange;
            toJSON(message: _104.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: any;
                        negativeIntValue?: any;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _104.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _104.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.DescriptorProto_ReservedRange;
            fromJSON(object: any): _104.DescriptorProto_ReservedRange;
            toJSON(message: _104.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _104.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _104.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ExtensionRangeOptions;
            fromJSON(object: any): _104.ExtensionRangeOptions;
            toJSON(message: _104.ExtensionRangeOptions): unknown;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: any;
                    negativeIntValue?: any;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _104.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _104.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.FieldDescriptorProto;
            fromJSON(object: any): _104.FieldDescriptorProto;
            toJSON(message: _104.FieldDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _104.FieldDescriptorProto_Label;
                type?: _104.FieldDescriptorProto_Type;
                typeName?: string;
                extendee?: string;
                defaultValue?: string;
                oneofIndex?: number;
                jsonName?: string;
                options?: {
                    ctype?: _104.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _104.FieldOptions_JSType;
                    lazy?: boolean;
                    deprecated?: boolean;
                    weak?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: any;
                        negativeIntValue?: any;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _104.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _104.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.OneofDescriptorProto;
            fromJSON(object: any): _104.OneofDescriptorProto;
            toJSON(message: _104.OneofDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: any;
                        negativeIntValue?: any;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _104.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _104.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EnumDescriptorProto;
            fromJSON(object: any): _104.EnumDescriptorProto;
            toJSON(message: _104.EnumDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                value?: {
                    name?: string;
                    number?: number;
                    options?: {
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: any;
                            negativeIntValue?: any;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    allowAlias?: boolean;
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: any;
                        negativeIntValue?: any;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                reservedRange?: {
                    start?: number;
                    end?: number;
                }[];
                reservedName?: string[];
            }): _104.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _104.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _104.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _104.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _104.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _104.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EnumValueDescriptorProto;
            fromJSON(object: any): _104.EnumValueDescriptorProto;
            toJSON(message: _104.EnumValueDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                number?: number;
                options?: {
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: any;
                        negativeIntValue?: any;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _104.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _104.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ServiceDescriptorProto;
            fromJSON(object: any): _104.ServiceDescriptorProto;
            toJSON(message: _104.ServiceDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    inputType?: string;
                    outputType?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotencyLevel?: _104.MethodOptions_IdempotencyLevel;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: any;
                            negativeIntValue?: any;
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    clientStreaming?: boolean;
                    serverStreaming?: boolean;
                }[];
                options?: {
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: any;
                        negativeIntValue?: any;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _104.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _104.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MethodDescriptorProto;
            fromJSON(object: any): _104.MethodDescriptorProto;
            toJSON(message: _104.MethodDescriptorProto): unknown;
            fromPartial(object: {
                name?: string;
                inputType?: string;
                outputType?: string;
                options?: {
                    deprecated?: boolean;
                    idempotencyLevel?: _104.MethodOptions_IdempotencyLevel;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: any;
                        negativeIntValue?: any;
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                clientStreaming?: boolean;
                serverStreaming?: boolean;
            }): _104.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _104.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.FileOptions;
            fromJSON(object: any): _104.FileOptions;
            toJSON(message: _104.FileOptions): unknown;
            fromPartial(object: {
                javaPackage?: string;
                javaOuterClassname?: string;
                javaMultipleFiles?: boolean;
                javaGenerateEqualsAndHash?: boolean;
                javaStringCheckUtf8?: boolean;
                optimizeFor?: _104.FileOptions_OptimizeMode;
                goPackage?: string;
                ccGenericServices?: boolean;
                javaGenericServices?: boolean;
                pyGenericServices?: boolean;
                phpGenericServices?: boolean;
                deprecated?: boolean;
                ccEnableArenas?: boolean;
                objcClassPrefix?: string;
                csharpNamespace?: string;
                swiftPrefix?: string;
                phpClassPrefix?: string;
                phpNamespace?: string;
                phpMetadataNamespace?: string;
                rubyPackage?: string;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: any;
                    negativeIntValue?: any;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _104.FileOptions;
        };
        MessageOptions: {
            encode(message: _104.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MessageOptions;
            fromJSON(object: any): _104.MessageOptions;
            toJSON(message: _104.MessageOptions): unknown;
            fromPartial(object: {
                messageSetWireFormat?: boolean;
                noStandardDescriptorAccessor?: boolean;
                deprecated?: boolean;
                mapEntry?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: any;
                    negativeIntValue?: any;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _104.MessageOptions;
        };
        FieldOptions: {
            encode(message: _104.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.FieldOptions;
            fromJSON(object: any): _104.FieldOptions;
            toJSON(message: _104.FieldOptions): unknown;
            fromPartial(object: {
                ctype?: _104.FieldOptions_CType;
                packed?: boolean;
                jstype?: _104.FieldOptions_JSType;
                lazy?: boolean;
                deprecated?: boolean;
                weak?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: any;
                    negativeIntValue?: any;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _104.FieldOptions;
        };
        OneofOptions: {
            encode(message: _104.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.OneofOptions;
            fromJSON(object: any): _104.OneofOptions;
            toJSON(message: _104.OneofOptions): unknown;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: any;
                    negativeIntValue?: any;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _104.OneofOptions;
        };
        EnumOptions: {
            encode(message: _104.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EnumOptions;
            fromJSON(object: any): _104.EnumOptions;
            toJSON(message: _104.EnumOptions): unknown;
            fromPartial(object: {
                allowAlias?: boolean;
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: any;
                    negativeIntValue?: any;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _104.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _104.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EnumValueOptions;
            fromJSON(object: any): _104.EnumValueOptions;
            toJSON(message: _104.EnumValueOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: any;
                    negativeIntValue?: any;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _104.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _104.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ServiceOptions;
            fromJSON(object: any): _104.ServiceOptions;
            toJSON(message: _104.ServiceOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: any;
                    negativeIntValue?: any;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _104.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _104.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MethodOptions;
            fromJSON(object: any): _104.MethodOptions;
            toJSON(message: _104.MethodOptions): unknown;
            fromPartial(object: {
                deprecated?: boolean;
                idempotencyLevel?: _104.MethodOptions_IdempotencyLevel;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: any;
                    negativeIntValue?: any;
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _104.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _104.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.UninterpretedOption;
            fromJSON(object: any): _104.UninterpretedOption;
            toJSON(message: _104.UninterpretedOption): unknown;
            fromPartial(object: {
                name?: {
                    namePart?: string;
                    isExtension?: boolean;
                }[];
                identifierValue?: string;
                positiveIntValue?: any;
                negativeIntValue?: any;
                doubleValue?: number;
                stringValue?: Uint8Array;
                aggregateValue?: string;
            }): _104.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _104.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.UninterpretedOption_NamePart;
            fromJSON(object: any): _104.UninterpretedOption_NamePart;
            toJSON(message: _104.UninterpretedOption_NamePart): unknown;
            fromPartial(object: {
                namePart?: string;
                isExtension?: boolean;
            }): _104.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _104.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.SourceCodeInfo;
            fromJSON(object: any): _104.SourceCodeInfo;
            toJSON(message: _104.SourceCodeInfo): unknown;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leadingComments?: string;
                    trailingComments?: string;
                    leadingDetachedComments?: string[];
                }[];
            }): _104.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _104.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.SourceCodeInfo_Location;
            fromJSON(object: any): _104.SourceCodeInfo_Location;
            toJSON(message: _104.SourceCodeInfo_Location): unknown;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leadingComments?: string;
                trailingComments?: string;
                leadingDetachedComments?: string[];
            }): _104.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _104.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GeneratedCodeInfo;
            fromJSON(object: any): _104.GeneratedCodeInfo;
            toJSON(message: _104.GeneratedCodeInfo): unknown;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    sourceFile?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _104.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _104.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _104.GeneratedCodeInfo_Annotation;
            toJSON(message: _104.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: {
                path?: number[];
                sourceFile?: string;
                begin?: number;
                end?: number;
            }): _104.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _103.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Any;
            fromJSON(object: any): _103.Any;
            toJSON(message: _103.Any): unknown;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _103.Any;
        };
    };
}
