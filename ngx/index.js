import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import * as i0 from "@angular/core";
var CardLink = /** @class */ (function (_super) {
    __extends(CardLink, _super);
    function CardLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardLink.prototype.cardlink = function (arg0) { return cordova(this, "cardlink", {}, arguments); };
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
        }], propDecorators: { cardlink: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2FyZC1saW5rL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7SUFVOUQsNEJBQTBCOzs7O0lBR3RELDJCQUFRLGFBQUMsSUFBWTswR0FIVixRQUFROzhHQUFSLFFBQVE7Ozs7OztJQUFSLFFBQVEsa0JBQVIsUUFBUTttQkFYckI7RUFXOEIsMEJBQTBCO1NBQTNDLFFBQVE7NEZBQVIsUUFBUTtrQkFEcEIsVUFBVTs4QkFJVCxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdDYXJkTGluaycsXG4gIHBsdWdpbjogJ0NhcmRMaW5rJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ0NhcmRMaW5rJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RvYmlhc2pvc3Rhcm5kdC9DYXJkTGluaycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgcGxhdGZvcm1zOiBbJ2lPUyddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJkTGluayBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcblxuICBAQ29yZG92YSgpXG4gIGNhcmRsaW5rKGFyZzA6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==