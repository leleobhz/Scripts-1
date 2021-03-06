include(["Engines", "Wine", "QuickScript", "OnlineInstallerScript"]);

new OnlineInstallerScript()
    .name("Origin")
    .editor("Electronic Arts")
    .applicationHomepage("https://www.origin.com/deu/en-us/store")
    .author("Plata")
    .url("https://www.dm.origin.com/download/OriginThinSetup.exe")
    .category("Games")
    .executable("Origin.exe")
    .wineVersion(LATEST_STAGING_VERSION)
    .wineDistribution("staging")
    .go();
