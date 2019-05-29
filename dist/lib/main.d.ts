export declare type Multipliers = Array<number> | {
    readonly [key: string]: Array<number>;
};
export interface Rules {
    multipliers?: Multipliers;
    check?: RegExp;
    regex: ReadonlyArray<RegExp>;
    lookup?: ReadonlyArray<number>;
    typeFormats?: {
        readonly [key: string]: RegExp;
    };
    additional?: ReadonlyArray<RegExp>;
}
export interface Country {
    name: string;
    codes: ReadonlyArray<string>;
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
export declare function checkVAT(vat: string, countriesList?: ReadonlyArray<Country>): VatCheckResult;
