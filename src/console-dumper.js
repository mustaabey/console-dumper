"use strict";

module.exports = class Dumper {

    constructor() {

        this._config = {
            DumperFuncName: "Dump",
            Prefix: "",
            Postfix: ""
        };

        this._configure = function (config = {}) {

            this._config.DumperFuncName = config.DumperFuncName || this._config.DumperFuncName;
            this._config.Prefix = config.Prefix || this._config.Prefix;
            this._config.Postfix = config.Postfix || this._config.Postfix;
        };

        this._print = function (val, args) {

            var argText = args.length > 0 ? " " : "";

            for (var i = 0; i < args.length; i++) {

                argText += args[i] + (i == args.length - 1 ? "" : " ");
            }

            console.log("%s%s%s%s", this._config.Prefix, val, argText, this._config.Postfix);
        };
    }

    init(config) {

        this._configure(config);

        var that = this;

        String.prototype[that._config.DumperFuncName] = function () {

            that._print(this, arguments);
        };

        Array.prototype[that._config.DumperFuncName] = function () {

            that._print(this, arguments);
        };

        Object.prototype[that._config.DumperFuncName] = function () {

            that._print(JSON.stringify(this), arguments);
        };

        Function.prototype[that._config.DumperFuncName] = function () {

            that._print(this, arguments);
        };
    }
};