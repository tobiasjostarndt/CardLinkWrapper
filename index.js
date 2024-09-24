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
    CardLinkOriginal.pluginName = "CardLink";
    CardLinkOriginal.plugin = "CardLink";
    CardLinkOriginal.pluginRef = "CardLink";
    CardLinkOriginal.repo = "https://github.com/tobiasjostarndt/CardLink";
    CardLinkOriginal.platforms = ["iOS"];
    return CardLinkOriginal;
}(AwesomeCordovaNativePlugin));
var CardLink = new CardLinkOriginal();
export { CardLink };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2FyZC1saW5rL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBVTlELDRCQUEwQjs7OztJQUd0RCwrQkFBWSxhQUFDLElBQVk7SUFLekIsaUNBQWM7SUFLZCw0Q0FBeUIsYUFBQyxJQUFZO0lBS3RDLDZCQUFVLGFBQUMsSUFBWTtJQUt2QixtQ0FBZ0I7Ozs7OzttQkFsQ2xCO0VBVzhCLDBCQUEwQjtTQUEzQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDYXJkTGluaycsXG4gIHBsdWdpbjogJ0NhcmRMaW5rJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ0NhcmRMaW5rJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RvYmlhc2pvc3Rhcm5kdC9DYXJkTGluaycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgcGxhdGZvcm1zOiBbJ2lPUyddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJkTGluayBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcblxuICBAQ29yZG92YSgpXG4gIGVzdGFibGlzaFdTUyhhcmcwOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgaXNDb25uZWN0ZWRXU1MoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHNlbmRSZXF1ZXN0U01TQ29kZU1lc3NhZ2UoYXJnMDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHZlcmlmeUNvZGUoYXJnMDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGlzU01TQ29kZUNvcnJlY3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19