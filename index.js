var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var CardLinkOriginal = /** @class */ (function (_super) {
    __extends(CardLinkOriginal, _super);
    function CardLinkOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardLinkOriginal.prototype.establishWSS = function (arg0) { return cordova(this, "establishWSS", {}, arguments); };
    CardLinkOriginal.prototype.isConnectedWSS = function () { return cordova(this, "isConnectedWSS", {}, arguments); };
    CardLinkOriginal.prototype.sendRequestSMSCodeMessage = function (arg0) { return cordova(this, "sendRequestSMSCodeMessage", {}, arguments); };
    CardLinkOriginal.prototype.verifyCode = function (arg0) { return cordova(this, "verifyCode", {}, arguments); };
    CardLinkOriginal.prototype.isSMSCodeCorrect = function () { return cordova(this, "isSMSCodeCorrect", {}, arguments); };
    CardLinkOriginal.prototype.setCanNumber = function (arg0) { return cordova(this, "setCanNumber", {}, arguments); };
    CardLinkOriginal.prototype.startReadCard = function () { return cordova(this, "startReadCard", {}, arguments); };
    CardLinkOriginal.prototype.isCardScanned = function () { return cordova(this, "isCardScanned", {}, arguments); };
    CardLinkOriginal.prototype.getERezeptTokensFromAVS = function () { return cordova(this, "getERezeptTokensFromAVS", {}, arguments); };
    CardLinkOriginal.prototype.getERezeptBundlesFromAVS = function () { return cordova(this, "getERezeptBundlesFromAVS", {}, arguments); };
    CardLinkOriginal.pluginName = "CardLink";
    CardLinkOriginal.plugin = "CardLink";
    CardLinkOriginal.pluginRef = "CardLink";
    CardLinkOriginal.repo = "https://github.com/tobiasjostarndt/CardLink";
    CardLinkOriginal.platforms = ["iOS"];
    return CardLinkOriginal;
}(AwesomeCordovaNativePlugin));
var CardLink = new CardLinkOriginal();
export { CardLink };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2FyZC1saW5rL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBVTlELDRCQUEwQjs7OztJQUd0RCwrQkFBWSxhQUFDLElBQVk7SUFLekIsaUNBQWM7SUFLZCw0Q0FBeUIsYUFBQyxJQUFZO0lBS3RDLDZCQUFVLGFBQUMsSUFBWTtJQUt2QixtQ0FBZ0I7SUFLaEIsK0JBQVksYUFBQyxJQUFZO0lBS3pCLGdDQUFhO0lBS2IsZ0NBQWE7SUFLYiwwQ0FBdUI7SUFLdkIsMkNBQXdCOzs7Ozs7bUJBM0QxQjtFQVc4QiwwQkFBMEI7U0FBM0MsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FyZExpbmsnLFxuICBwbHVnaW46ICdDYXJkTGluaycsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdDYXJkTGluaycsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90b2JpYXNqb3N0YXJuZHQvQ2FyZExpbmsnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIHBsYXRmb3JtczogWydpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FyZExpbmsgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG5cbiAgQENvcmRvdmEoKVxuICBlc3RhYmxpc2hXU1MoYXJnMDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGlzQ29ubmVjdGVkV1NTKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzZW5kUmVxdWVzdFNNU0NvZGVNZXNzYWdlKGFyZzA6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICB2ZXJpZnlDb2RlKGFyZzA6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBpc1NNU0NvZGVDb3JyZWN0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzZXRDYW5OdW1iZXIoYXJnMDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHN0YXJ0UmVhZENhcmQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGlzQ2FyZFNjYW5uZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGdldEVSZXplcHRUb2tlbnNGcm9tQVZTKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBnZXRFUmV6ZXB0QnVuZGxlc0Zyb21BVlMoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19