System.register(["./lib/countries", "./lib/jsvat"], function (exports_1, context_1) {
    "use strict";
    var countries_1, countries;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (countries_1_1) {
                countries_1 = countries_1_1;
                exports_1({
                    "andorra": countries_1_1["andorra"],
                    "austria": countries_1_1["austria"],
                    "belgium": countries_1_1["belgium"],
                    "brazil": countries_1_1["brazil"],
                    "bulgaria": countries_1_1["bulgaria"],
                    "croatia": countries_1_1["croatia"],
                    "cyprus": countries_1_1["cyprus"],
                    "czechRepublic": countries_1_1["czechRepublic"],
                    "denmark": countries_1_1["denmark"],
                    "estonia": countries_1_1["estonia"],
                    "europe": countries_1_1["europe"],
                    "finland": countries_1_1["finland"],
                    "france": countries_1_1["france"],
                    "germany": countries_1_1["germany"],
                    "greece": countries_1_1["greece"],
                    "hungary": countries_1_1["hungary"],
                    "ireland": countries_1_1["ireland"],
                    "italy": countries_1_1["italy"],
                    "latvia": countries_1_1["latvia"],
                    "lithuania": countries_1_1["lithuania"],
                    "luxembourg": countries_1_1["luxembourg"],
                    "malta": countries_1_1["malta"],
                    "netherlands": countries_1_1["netherlands"],
                    "norway": countries_1_1["norway"],
                    "poland": countries_1_1["poland"],
                    "portugal": countries_1_1["portugal"],
                    "romania": countries_1_1["romania"],
                    "russia": countries_1_1["russia"],
                    "serbia": countries_1_1["serbia"],
                    "slovakiaRepublic": countries_1_1["slovakiaRepublic"],
                    "slovenia": countries_1_1["slovenia"],
                    "spain": countries_1_1["spain"],
                    "sweden": countries_1_1["sweden"],
                    "switzerland": countries_1_1["switzerland"],
                    "unitedKingdom": countries_1_1["unitedKingdom"]
                });
            },
            function (jsvat_1_1) {
                exports_1({
                    "checkVAT": jsvat_1_1["checkVAT"]
                });
            }
        ],
        execute: function () {
            exports_1("countries", countries = [
                countries_1.andorra,
                countries_1.austria,
                countries_1.belgium,
                countries_1.brazil,
                countries_1.bulgaria,
                countries_1.croatia,
                countries_1.cyprus,
                countries_1.czechRepublic,
                countries_1.denmark,
                countries_1.estonia,
                countries_1.europe,
                countries_1.finland,
                countries_1.france,
                countries_1.germany,
                countries_1.greece,
                countries_1.hungary,
                countries_1.ireland,
                countries_1.italy,
                countries_1.latvia,
                countries_1.lithuania,
                countries_1.luxembourg,
                countries_1.malta,
                countries_1.netherlands,
                countries_1.norway,
                countries_1.poland,
                countries_1.portugal,
                countries_1.romania,
                countries_1.russia,
                countries_1.serbia,
                countries_1.slovakiaRepublic,
                countries_1.slovenia,
                countries_1.spain,
                countries_1.sweden,
                countries_1.switzerland,
                countries_1.unitedKingdom
            ]);
        }
    };
});
