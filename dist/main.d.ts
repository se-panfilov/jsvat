export declare type Multipliers = Array<number> | {
    readonly [key: string]: Array<number>;
};
export interface Rules {
    multipliers?: Multipliers;
    check?: RegExp;
    regex: Array<RegExp>;
    lookup?: Array<number>;
    typeFormats?: {
        readonly [key: string]: RegExp;
    };
    additional?: Array<RegExp>;
}
export interface Country {
    name: string;
    codes: Array<string>;
    calcFn: (vat: string) => boolean;
    rules: Rules;
}
export interface VatCheckResult {
    value?: string;
    isValid: boolean;
    country?: {
        name: string;
        isoCode: {
            short: string;
            long: string;
            numeric: string;
        };
    };
}
export declare const blocked: Array<string>;
export declare const allowed: Array<string>;
export declare const countries: {
    [key: string]: Country;
};
export declare function checkVAT(vat: string, _blocked?: Array<string>, _allowed?: Array<string>, _countries?: {
    [key: string]: Country;
}): VatCheckResult;
