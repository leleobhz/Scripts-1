include(["Functions", "QuickScript", "SteamScript"]);
include(["Functions", "Verbs", "uplay"]);

new SteamScript()
    .name("Rayman® Legends")
    .editor("Ubisoft")
    .author("Plata")
    .appId(242550)
    .wineVersion("2.5")
    .wineDistribution("staging")
    .postInstall(function(wine, wizard) {
        wine.uplay();
    })
    .go();
