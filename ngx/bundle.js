'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var CardLink = /** @class */ (function (_super) {
    tslib.__extends(CardLink, _super);
    function CardLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardLink.prototype.establishWSS = function (arg0) { return core.cordova(this, "establishWSS", {}, arguments); };
    CardLink.prototype.isConnectedWSS = function () { return core.cordova(this, "isConnectedWSS", {}, arguments); };
    CardLink.prototype.sendRequestSMSCodeMessage = function (arg0) { return core.cordova(this, "sendRequestSMSCodeMessage", {}, arguments); };
    CardLink.prototype.verifyCode = function (arg0) { return core.cordova(this, "verifyCode", {}, arguments); };
    CardLink.prototype.isSMSCodeCorrect = function () { return core.cordova(this, "isSMSCodeCorrect", {}, arguments); };
    CardLink.prototype.setCanNumber = function (arg0) { return core.cordova(this, "setCanNumber", {}, arguments); };
    CardLink.prototype.startReadCard = function () { return core.cordova(this, "startReadCard", {}, arguments); };
    CardLink.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardLink, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    CardLink.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardLink });
    CardLink.pluginName = "CardLink";
    CardLink.plugin = "CardLink";
    CardLink.pluginRef = "CardLink";
    CardLink.repo = "https://github.com/tobiasjostarndt/CardLink";
    CardLink.platforms = ["iOS"];
    CardLink = tslib.__decorate([], CardLink);
    return CardLink;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0__namespace, type: CardLink, decorators: [{
            type: i0.Injectable
        }], propDecorators: { establishWSS: [], isConnectedWSS: [], sendRequestSMSCodeMessage: [], verifyCode: [], isSMSCodeCorrect: [], setCanNumber: [], startReadCard: [] } });

exports.CardLink = CardLink;
