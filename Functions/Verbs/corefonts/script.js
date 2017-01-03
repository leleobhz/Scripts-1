include(["Functions", "Engines", "Wine"]);
include(["Functions", "Net", "Resource"]);
include(["Functions", "Verbs", "luna"]);

Wine.prototype.corefonts = function() {
    var fontResources =
    [
    new Resource()
        .wizard(this._wizard)
        .url("ftp://ftp.fi.debian.org/gentoo/distfiles/arial32.exe")
        .checksum("6d75f8436f39ab2da5c31ce651b7443b4ad2916e")
        .name("arial32.exe")
        .get(),

    new Resource()
        .wizard(this._wizard)
        .url("ftp://ftp.fi.debian.org/gentoo/distfiles/arialb32.exe")
        .checksum("d45cdab84b7f4c1efd6d1b369f50ed0390e3d344")
        .name("arialb32.exe")
        .get(),

    new Resource()
        .wizard(this._wizard)
        .url("ftp://ftp.fi.debian.org/gentoo/distfiles/comic32.exe")
        .checksum("2371d0327683dcc5ec1684fe7c275a8de1ef9a51")
        .name("comic32.exe")
        .get(),

    new Resource()
        .wizard(this._wizard)
        .url("ftp://ftp.fi.debian.org/gentoo/distfiles/courie32.exe")
        .checksum("06a745023c034f88b4135f5e294fece1a3c1b057")
        .name("courie32.exe")
        .get(),

    new Resource()
        .wizard(this._wizard)
        .url("ftp://ftp.fi.debian.org/gentoo/distfiles/georgi32.exe")
        .checksum("90e4070cb356f1d811acb943080bf97e419a8f1e")
        .name("georgi32.exe")
        .get(),

    new Resource()
        .wizard(this._wizard)
        .url("ftp://ftp.fi.debian.org/gentoo/distfiles/impact32.exe")
        .checksum("86b34d650cfbbe5d3512d49d2545f7509a55aad2")
        .name("impact32.exe")
        .get(),

    new Resource()
        .wizard(this._wizard)
        .url("ftp://ftp.fi.debian.org/gentoo/distfiles/times32.exe")
        .checksum("20b79e65cdef4e2d7195f84da202499e3aa83060")
        .name("times32.exe")
        .get(),

    new Resource()
        .wizard(this._wizard)
        .url("ftp://ftp.fi.debian.org/gentoo/distfiles/trebuc32.exe")
        .checksum("50aab0988423efcc9cf21fac7d64d534d6d0a34a")
        .name("trebuc32.exe")
        .get(),

    new Resource()
        .wizard(this._wizard)
        .url("ftp://ftp.fi.debian.org/gentoo/distfiles/verdan32.exe")
        .checksum("f5b93cedf500edc67502f116578123618c64a42a")
        .name("verdan32.exe")
        .get(),

    new Resource()
        .wizard(this._wizard)
        .url("ftp://ftp.fi.debian.org/gentoo/distfiles/webdin32.exe")
        .checksum("2fb4a42c53e50bc70707a7b3c57baf62ba58398f")
        .name("webdin32.exe")
        .get()
    ];

    var numFonts = myStringArray.length;
    for (var i = 0; i < numFonts; i++) {
        new CabExtract()
            .archive(fontResources[i])
            .wizard(this._wizard)
            .to(this.fontDirectory())
            .extract();
    }

    this.registerFont()
        .set("Arial", "Arial.TTF")
        .do();
    this.registerFont()
        .set("Arial Bold", "Arialbd.TTF")
        .do();
    this.registerFont()
        .set("Arial Bold Italic", "Arialbi.TTF")
        .do();
    this.registerFont()
        .set("Arial Italic", "Ariali.TTF")
        .do();
    this.registerFont()
        .set("Arial Black", "AriBlk.TTF")
        .do();
    this.registerFont()
        .set("Comic Sans MS", "Comic.TTF")
        .do();
    this.registerFont()
        .set("Comic Sans MS Bold", "Comicbd.TTF")
        .do();
    this.registerFont()
        .set("Courier New", "Cour.TTF")
        .do();
    this.registerFont()
        .set("Courier New Bold", "CourBD.TTF")
        .do();
    this.registerFont()
        .set("Courier New Bold Italic", "CourBI.TTF")
        .do();
    this.registerFont()
        .set("Courier New Italic", "Couri.TTF")
        .do();
    this.registerFont()
        .set("Georgia", "Georgia.TTF")
        .do();
    this.registerFont()
        .set("Georgia Bold", "Georgiab.TTF")
        .do();
    this.registerFont()
        .set("Georgia Bold Italic", "Georgiaz.TTF")
        .do();
    this.registerFont()
        .set("Georgia Italic", "Georgiai.TTF")
        .do();
    this.registerFont()
        .set("Impact", "Impact.TTF")
        .do();
    this.registerFont()
        .set("Times New Roman", "Times.TTF")
        .do();
    this.registerFont()
        .set("Times New Roman Bold", "Timesbd.TTF")
        .do();
    this.registerFont()
        .set("Times New Roman Bold Italic", "Timesbi.TTF")
        .do();
    this.registerFont()
        .set("Times New Roman Italic", "Timesi.TTF")
        .do();
    this.registerFont()
        .set("Trebucet MS", "Trebuc.TTF")
        .do();
    this.registerFont()
        .set("Trebucet MS Bold", "Trebucbd.TTF")
        .do();
    this.registerFont()
        .set("Trebucet MS Bold Italic", "Trebucbi.TTF")
        .do();
    this.registerFont()
        .set("Trebucet MS Italic", "Trebucit.TTF")
        .do();
    this.registerFont()
        .set("Verdana", "Verdana.TTF")
        .do();
    this.registerFont()
        .set("Verdana Bold", "Verdanab.TTF")
        .do();
    this.registerFont()
        .set("Verdana Bold Italic", "Verdanaz.TTF")
        .do();
    this.registerFont()
        .set("Verdana Italic", "Verdanai.TTF")
        .do();
    this.registerFont()
        .set("Webdings", "Webdings.TTF")
        .do();
    return this;
};
