import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var CardLink = /** @class */ (function (_super) {
    __extends(CardLink, _super);
    function CardLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardLink.prototype.establishWSS = function (arg0) { return cordova(this, "establishWSS", {}, arguments); };
    CardLink.prototype.isConnectedWSS = function () { return cordova(this, "isConnectedWSS", {}, arguments); };
    CardLink.prototype.sendRequestSMSCodeMessage = function (arg0) { return cordova(this, "sendRequestSMSCodeMessage", {}, arguments); };
    CardLink.prototype.verifyCode = function (arg0) { return cordova(this, "verifyCode", {}, arguments); };
    CardLink.prototype.isSMSCodeCorrect = function () { return cordova(this, "isSMSCodeCorrect", {}, arguments); };
    CardLink.prototype.setCanNumber = function (arg0) { return cordova(this, "setCanNumber", {}, arguments); };
    CardLink.prototype.startReadCard = function () { return cordova(this, "startReadCard", {}, arguments); };
    CardLink.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardLink, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    CardLink.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardLink });
    CardLink.pluginName = "CardLink";
    CardLink.plugin = "CardLink";
    CardLink.pluginRef = "CardLink";
    CardLink.repo = "https://github.com/tobiasjostarndt/CardLink";
    CardLink.platforms = ["iOS"];
    CardLink = __decorate([], CardLink);
    return CardLink;
}(AwesomeCordovaNativePlugin));
export { CardLink };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: CardLink, decorators: [{
            type: Injectable
        }], propDecorators: { establishWSS: [], isConnectedWSS: [], sendRequestSMSCodeMessage: [], verifyCode: [], isSMSCodeCorrect: [], setCanNumber: [], startReadCard: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2FyZC1saW5rL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUFVOUQsNEJBQTBCOzs7O0lBR3RELCtCQUFZLGFBQUMsSUFBWTtJQUt6QixpQ0FBYztJQUtkLDRDQUF5QixhQUFDLElBQVk7SUFLdEMsNkJBQVUsYUFBQyxJQUFZO0lBS3ZCLG1DQUFnQjtJQUtoQiwrQkFBWSxhQUFDLElBQVk7SUFLekIsZ0NBQWE7MEdBakNGLFFBQVE7OEdBQVIsUUFBUTs7Ozs7O0lBQVIsUUFBUSxrQkFBUixRQUFRO21CQVhyQjtFQVc4QiwwQkFBMEI7U0FBM0MsUUFBUTs0RkFBUixRQUFRO2tCQURwQixVQUFVOzhCQUlULFlBQVksTUFLWixjQUFjLE1BS2QseUJBQXlCLE1BS3pCLFVBQVUsTUFLVixnQkFBZ0IsTUFLaEIsWUFBWSxNQUtaLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NhcmRMaW5rJyxcbiAgcGx1Z2luOiAnQ2FyZExpbmsnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnQ2FyZExpbmsnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vdG9iaWFzam9zdGFybmR0L0NhcmRMaW5rJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBwbGF0Zm9ybXM6IFsnaU9TJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcmRMaW5rIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhKClcbiAgZXN0YWJsaXNoV1NTKGFyZzA6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBpc0Nvbm5lY3RlZFdTUygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc2VuZFJlcXVlc3RTTVNDb2RlTWVzc2FnZShhcmcwOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgdmVyaWZ5Q29kZShhcmcwOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgaXNTTVNDb2RlQ29ycmVjdCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc2V0Q2FuTnVtYmVyKGFyZzA6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzdGFydFJlYWRDYXJkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==