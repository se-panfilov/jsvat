System.register(["./lib/countries", "./lib"], function (exports_1, context_1) {
    "use strict";
    var countries;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (countries_1) {
                countries = countries_1;
                exports_1({
                    "austria": countries_1["austria"],
                    "belgium": countries_1["belgium"],
                    "bulgaria": countries_1["bulgaria"],
                    "croatia": countries_1["croatia"],
                    "cyprus": countries_1["cyprus"],
                    "czechRepublic": countries_1["czechRepublic"],
                    "denmark": countries_1["denmark"],
                    "estonia": countries_1["estonia"],
                    "europe": countries_1["europe"],
                    "finland": countries_1["finland"],
                    "france": countries_1["france"],
                    "germany": countries_1["germany"],
                    "greece": countries_1["greece"],
                    "hungary": countries_1["hungary"],
                    "ireland": countries_1["ireland"],
                    "italy": countries_1["italy"],
                    "latvia": countries_1["latvia"],
                    "lithuania": countries_1["lithuania"],
                    "luxembourg": countries_1["luxembourg"],
                    "malta": countries_1["malta"],
                    "netherlands": countries_1["netherlands"],
                    "norway": countries_1["norway"],
                    "poland": countries_1["poland"],
                    "portugal": countries_1["portugal"],
                    "romania": countries_1["romania"],
                    "russia": countries_1["russia"],
                    "serbia": countries_1["serbia"],
                    "slovakiaRepublic": countries_1["slovakiaRepublic"],
                    "slovenia": countries_1["slovenia"],
                    "spain": countries_1["spain"],
                    "sweden": countries_1["sweden"],
                    "switzerland": countries_1["switzerland"],
                    "unitedKingdom": countries_1["unitedKingdom"]
                });
            },
            function (lib_1_1) {
                exports_1({
                    "checkVAT": lib_1_1["checkVAT"]
                });
            }
        ],
        execute: function () {
            exports_1("countries", countries);
        }
    };
});
