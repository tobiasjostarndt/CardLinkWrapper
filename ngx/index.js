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
        }], propDecorators: { establishWSS: [], isConnectedWSS: [], sendRequestSMSCodeMessage: [], verifyCode: [], isSMSCodeCorrect: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2FyZC1saW5rL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUFVOUQsNEJBQTBCOzs7O0lBR3RELCtCQUFZLGFBQUMsSUFBWTtJQUt6QixpQ0FBYztJQUtkLDRDQUF5QixhQUFDLElBQVk7SUFLdEMsNkJBQVUsYUFBQyxJQUFZO0lBS3ZCLG1DQUFnQjswR0F2QkwsUUFBUTs4R0FBUixRQUFROzs7Ozs7SUFBUixRQUFRLGtCQUFSLFFBQVE7bUJBWHJCO0VBVzhCLDBCQUEwQjtTQUEzQyxRQUFROzRGQUFSLFFBQVE7a0JBRHBCLFVBQVU7OEJBSVQsWUFBWSxNQUtaLGNBQWMsTUFLZCx5QkFBeUIsTUFLekIsVUFBVSxNQUtWLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FyZExpbmsnLFxuICBwbHVnaW46ICdDYXJkTGluaycsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdDYXJkTGluaycsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90b2JpYXNqb3N0YXJuZHQvQ2FyZExpbmsnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIHBsYXRmb3JtczogWydpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FyZExpbmsgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XG5cbiAgQENvcmRvdmEoKVxuICBlc3RhYmxpc2hXU1MoYXJnMDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIGlzQ29ubmVjdGVkV1NTKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzZW5kUmVxdWVzdFNNU0NvZGVNZXNzYWdlKGFyZzA6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICB2ZXJpZnlDb2RlKGFyZzA6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBpc1NNU0NvZGVDb3JyZWN0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==