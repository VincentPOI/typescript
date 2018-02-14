"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (nom) {
            this._nom = nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        set: function (prix) {
            this._prix = prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = new Array();
        this._sejours.push(new Sejour("paris", 100));
        this._sejours.push(new Sejour("nyc", 500));
        this._sejours.push(new Sejour("rio-de-janeiro", 800));
    }
    SejourService.prototype.findSejour = function (nom) {
        return this._sejours.filter(function (s) { return s.nom == nom; });
    };
    return SejourService;
}());
var sejourService = new SejourService();
var sejoursRecherches = new Array();
sejoursRecherches = sejourService.findSejour("paris");
sejoursRecherches.forEach(function (s) { return console.log(s.nom); });
