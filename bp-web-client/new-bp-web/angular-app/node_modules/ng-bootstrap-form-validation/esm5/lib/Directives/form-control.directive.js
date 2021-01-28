/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, HostBinding, Optional, Host, SkipSelf, Inject } from "@angular/core";
import { ControlContainer } from "@angular/forms";
import { BootstrapVersion } from "../Enums/BootstrapVersion";
import { BOOTSTRAP_VERSION } from "../Tokens/tokens";
/**
 * @param {?} name
 * @param {?} parent
 * @return {?}
 */
export function controlPath(name, parent) {
    // tslint:disable-next-line:no-non-null-assertion
    return tslib_1.__spread((/** @type {?} */ (parent.path)), [name]);
}
var FormControlDirective = /** @class */ (function () {
    function FormControlDirective(parent, bootstrapVersion) {
        this.parent = parent;
        this.bootstrapVersion = bootstrapVersion;
    }
    Object.defineProperty(FormControlDirective.prototype, "validClass", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.control) {
                return false;
            }
            return (this.bootstrapFour &&
                this.control.valid &&
                (this.control.touched || this.control.dirty));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "invalidClass", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.control) {
                return false;
            }
            return (this.bootstrapFour &&
                this.control.invalid &&
                this.control.touched &&
                this.control.dirty);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "path", {
        get: /**
         * @return {?}
         */
        function () {
            return controlPath(this.formControlName, this.parent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formDirective && this.formDirective.getControl(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "formDirective", {
        get: /**
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.formDirective : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlDirective.prototype, "bootstrapFour", {
        get: /**
         * @return {?}
         */
        function () {
            return this.bootstrapVersion === BootstrapVersion.Four;
        },
        enumerable: true,
        configurable: true
    });
    FormControlDirective.decorators = [
        { type: Directive, args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: ".form-control,.form-check-input,.custom-control-input"
                },] }
    ];
    /** @nocollapse */
    FormControlDirective.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
        { type: BootstrapVersion, decorators: [{ type: Inject, args: [BOOTSTRAP_VERSION,] }] }
    ]; };
    FormControlDirective.propDecorators = {
        formControlName: [{ type: Input }],
        formControl: [{ type: Input }],
        validClass: [{ type: HostBinding, args: ["class.is-valid",] }],
        invalidClass: [{ type: HostBinding, args: ["class.is-invalid",] }]
    };
    return FormControlDirective;
}());
export { FormControlDirective };
if (false) {
    /** @type {?} */
    FormControlDirective.prototype.formControlName;
    /** @type {?} */
    FormControlDirective.prototype.formControl;
    /**
     * @type {?}
     * @private
     */
    FormControlDirective.prototype.parent;
    /**
     * @type {?}
     * @private
     */
    FormControlDirective.prototype.bootstrapVersion;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24vIiwic291cmNlcyI6WyJsaWIvRGlyZWN0aXZlcy9mb3JtLWNvbnRyb2wuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFFBQVEsRUFDUixJQUFJLEVBQ0osUUFBUSxFQUNSLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQWUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7O0FBRXJELE1BQU0sVUFBVSxXQUFXLENBQUMsSUFBWSxFQUFFLE1BQXdCO0lBQ2hFLGlEQUFpRDtJQUNqRCx3QkFBVyxtQkFBQSxNQUFNLENBQUMsSUFBSSxFQUFDLEdBQUUsSUFBSSxHQUFFO0FBQ2pDLENBQUM7QUFFRDtJQW1ERSw4QkFNVSxNQUF3QixFQUNHLGdCQUFrQztRQUQ3RCxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUNHLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDcEUsQ0FBQztJQWpESixzQkFDSSw0Q0FBVTs7OztRQURkO1lBRUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLENBQ0wsSUFBSSxDQUFDLGFBQWE7Z0JBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztnQkFDbEIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUM3QyxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSw4Q0FBWTs7OztRQURoQjtZQUVFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNqQixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsT0FBTyxDQUNMLElBQUksQ0FBQyxhQUFhO2dCQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTztnQkFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQ25CLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHNDQUFJOzs7O1FBQVI7WUFDRSxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkUsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQ0FBYTs7OztRQUFqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN4RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtDQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1FBQ3pELENBQUM7OztPQUFBOztnQkFqREYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsdURBQXVEO2lCQUNsRTs7OztnQkFaUSxnQkFBZ0IsdUJBK0RwQixRQUFRLFlBQ1IsSUFBSSxZQUNKLFFBQVE7Z0JBaEVKLGdCQUFnQix1QkFrRXBCLE1BQU0sU0FBQyxpQkFBaUI7OztrQ0FyRDFCLEtBQUs7OEJBRUwsS0FBSzs2QkFHTCxXQUFXLFNBQUMsZ0JBQWdCOytCQVk1QixXQUFXLFNBQUMsa0JBQWtCOztJQXNDakMsMkJBQUM7Q0FBQSxBQTVERCxJQTREQztTQXhEWSxvQkFBb0I7OztJQUMvQiwrQ0FDd0I7O0lBQ3hCLDJDQUNvQjs7Ozs7SUE4Q2xCLHNDQUdnQzs7Ozs7SUFDaEMsZ0RBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIE9wdGlvbmFsLFxuICBIb3N0LFxuICBTa2lwU2VsZixcbiAgSW5qZWN0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb250cm9sQ29udGFpbmVyLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQm9vdHN0cmFwVmVyc2lvbiB9IGZyb20gXCIuLi9FbnVtcy9Cb290c3RyYXBWZXJzaW9uXCI7XG5pbXBvcnQgeyBCT09UU1RSQVBfVkVSU0lPTiB9IGZyb20gXCIuLi9Ub2tlbnMvdG9rZW5zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250cm9sUGF0aChuYW1lOiBzdHJpbmcsIHBhcmVudDogQ29udHJvbENvbnRhaW5lcik6IHN0cmluZ1tdIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW5vbi1udWxsLWFzc2VydGlvblxuICByZXR1cm4gWy4uLnBhcmVudC5wYXRoISwgbmFtZV07XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiBcIi5mb3JtLWNvbnRyb2wsLmZvcm0tY2hlY2staW5wdXQsLmN1c3RvbS1jb250cm9sLWlucHV0XCJcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xEaXJlY3RpdmUge1xuICBASW5wdXQoKVxuICBmb3JtQ29udHJvbE5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgZm9ybUNvbnRyb2w6IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoXCJjbGFzcy5pcy12YWxpZFwiKVxuICBnZXQgdmFsaWRDbGFzcygpIHtcbiAgICBpZiAoIXRoaXMuY29udHJvbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5ib290c3RyYXBGb3VyICYmXG4gICAgICB0aGlzLmNvbnRyb2wudmFsaWQgJiZcbiAgICAgICh0aGlzLmNvbnRyb2wudG91Y2hlZCB8fCB0aGlzLmNvbnRyb2wuZGlydHkpXG4gICAgKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhcImNsYXNzLmlzLWludmFsaWRcIilcbiAgZ2V0IGludmFsaWRDbGFzcygpIHtcbiAgICBpZiAoIXRoaXMuY29udHJvbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5ib290c3RyYXBGb3VyICYmXG4gICAgICB0aGlzLmNvbnRyb2wuaW52YWxpZCAmJlxuICAgICAgdGhpcy5jb250cm9sLnRvdWNoZWQgJiZcbiAgICAgIHRoaXMuY29udHJvbC5kaXJ0eVxuICAgICk7XG4gIH1cblxuICBnZXQgcGF0aCgpIHtcbiAgICByZXR1cm4gY29udHJvbFBhdGgodGhpcy5mb3JtQ29udHJvbE5hbWUsIHRoaXMucGFyZW50KTtcbiAgfVxuXG4gIGdldCBjb250cm9sKCk6IEZvcm1Db250cm9sIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtRGlyZWN0aXZlICYmIHRoaXMuZm9ybURpcmVjdGl2ZS5nZXRDb250cm9sKHRoaXMpO1xuICB9XG5cbiAgZ2V0IGZvcm1EaXJlY3RpdmUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5mb3JtRGlyZWN0aXZlIDogbnVsbDtcbiAgfVxuXG4gIGdldCBib290c3RyYXBGb3VyKCkge1xuICAgIHJldHVybiB0aGlzLmJvb3RzdHJhcFZlcnNpb24gPT09IEJvb3RzdHJhcFZlcnNpb24uRm91cjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIHRoaXMgdmFsdWUgbWlnaHQgYmUgbnVsbCwgYnV0IHdlIHVuaW9uIHR5cGUgaXQgYXMgc3VjaCB1bnRpbFxuICAgIC8vIHRoaXMgaXNzdWUgaXMgcmVzb2x2ZWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzI1NTQ0XG4gICAgQE9wdGlvbmFsKClcbiAgICBASG9zdCgpXG4gICAgQFNraXBTZWxmKClcbiAgICBwcml2YXRlIHBhcmVudDogQ29udHJvbENvbnRhaW5lcixcbiAgICBASW5qZWN0KEJPT1RTVFJBUF9WRVJTSU9OKSBwcml2YXRlIGJvb3RzdHJhcFZlcnNpb246IEJvb3RzdHJhcFZlcnNpb25cbiAgKSB7fVxufVxuIl19