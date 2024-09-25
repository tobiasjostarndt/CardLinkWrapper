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
    CardLinkOriginal.pluginName = "CardLink";
    CardLinkOriginal.plugin = "CardLink";
    CardLinkOriginal.pluginRef = "CardLink";
    CardLinkOriginal.repo = "https://github.com/tobiasjostarndt/CardLink";
    CardLinkOriginal.platforms = ["iOS"];
    return CardLinkOriginal;
}(AwesomeCordovaNativePlugin));
var CardLink = new CardLinkOriginal();
export { CardLink };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2FyZC1saW5rL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBVTlELDRCQUEwQjs7OztJQUd0RCwrQkFBWSxhQUFDLElBQVk7SUFLekIsaUNBQWM7SUFLZCw0Q0FBeUIsYUFBQyxJQUFZO0lBS3RDLDZCQUFVLGFBQUMsSUFBWTtJQUt2QixtQ0FBZ0I7SUFLaEIsK0JBQVksYUFBQyxJQUFZO0lBS3pCLGdDQUFhO0lBS2IsZ0NBQWE7Ozs7OzttQkFqRGY7RUFXOEIsMEJBQTBCO1NBQTNDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NhcmRMaW5rJyxcbiAgcGx1Z2luOiAnQ2FyZExpbmsnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnQ2FyZExpbmsnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdG9iaWFzam9zdGFybmR0L0NhcmRMaW5rJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBwbGF0Zm9ybXM6IFsnaU9TJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcmRMaW5rIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhKClcbiAgZXN0YWJsaXNoV1NTKGFyZzA6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBpc0Nvbm5lY3RlZFdTUygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc2VuZFJlcXVlc3RTTVNDb2RlTWVzc2FnZShhcmcwOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgdmVyaWZ5Q29kZShhcmcwOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgaXNTTVNDb2RlQ29ycmVjdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc2V0Q2FuTnVtYmVyKGFyZzA6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzdGFydFJlYWRDYXJkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBpc0NhcmRTY2FubmVkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==