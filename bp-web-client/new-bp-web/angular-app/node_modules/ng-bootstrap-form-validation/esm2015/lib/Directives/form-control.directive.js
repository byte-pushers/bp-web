/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    return [...(/** @type {?} */ (parent.path)), name];
}
export class FormControlDirective {
    /**
     * @param {?} parent
     * @param {?} bootstrapVersion
     */
    constructor(parent, bootstrapVersion) {
        this.parent = parent;
        this.bootstrapVersion = bootstrapVersion;
    }
    /**
     * @return {?}
     */
    get validClass() {
        if (!this.control) {
            return false;
        }
        return (this.bootstrapFour &&
            this.control.valid &&
            (this.control.touched || this.control.dirty));
    }
    /**
     * @return {?}
     */
    get invalidClass() {
        if (!this.control) {
            return false;
        }
        return (this.bootstrapFour &&
            this.control.invalid &&
            this.control.touched &&
            this.control.dirty);
    }
    /**
     * @return {?}
     */
    get path() {
        return controlPath(this.formControlName, this.parent);
    }
    /**
     * @return {?}
     */
    get control() {
        return this.formDirective && this.formDirective.getControl(this);
    }
    /**
     * @return {?}
     */
    get formDirective() {
        return this.parent ? this.parent.formDirective : null;
    }
    /**
     * @return {?}
     */
    get bootstrapFour() {
        return this.bootstrapVersion === BootstrapVersion.Four;
    }
}
FormControlDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: ".form-control,.form-check-input,.custom-control-input"
            },] }
];
/** @nocollapse */
FormControlDirective.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
    { type: BootstrapVersion, decorators: [{ type: Inject, args: [BOOTSTRAP_VERSION,] }] }
];
FormControlDirective.propDecorators = {
    formControlName: [{ type: Input }],
    formControl: [{ type: Input }],
    validClass: [{ type: HostBinding, args: ["class.is-valid",] }],
    invalidClass: [{ type: HostBinding, args: ["class.is-invalid",] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24vIiwic291cmNlcyI6WyJsaWIvRGlyZWN0aXZlcy9mb3JtLWNvbnRyb2wuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsUUFBUSxFQUNSLElBQUksRUFDSixRQUFRLEVBQ1IsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBZSxNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7QUFFckQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxJQUFZLEVBQUUsTUFBd0I7SUFDaEUsaURBQWlEO0lBQ2pELE9BQU8sQ0FBQyxHQUFHLG1CQUFBLE1BQU0sQ0FBQyxJQUFJLEVBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBTUQsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUErQy9CLFlBTVUsTUFBd0IsRUFDRyxnQkFBa0M7UUFEN0QsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDRyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3BFLENBQUM7Ozs7SUFqREosSUFDSSxVQUFVO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sQ0FDTCxJQUFJLENBQUMsYUFBYTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDbEIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUM3QyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELElBQ0ksWUFBWTtRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLENBQ0wsSUFBSSxDQUFDLGFBQWE7WUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTztZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FDbkIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixLQUFLLGdCQUFnQixDQUFDLElBQUksQ0FBQztJQUN6RCxDQUFDOzs7WUFqREYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsdURBQXVEO2FBQ2xFOzs7O1lBWlEsZ0JBQWdCLHVCQStEcEIsUUFBUSxZQUNSLElBQUksWUFDSixRQUFRO1lBaEVKLGdCQUFnQix1QkFrRXBCLE1BQU0sU0FBQyxpQkFBaUI7Ozs4QkFyRDFCLEtBQUs7MEJBRUwsS0FBSzt5QkFHTCxXQUFXLFNBQUMsZ0JBQWdCOzJCQVk1QixXQUFXLFNBQUMsa0JBQWtCOzs7O0lBakIvQiwrQ0FDd0I7O0lBQ3hCLDJDQUNvQjs7Ozs7SUE4Q2xCLHNDQUdnQzs7Ozs7SUFDaEMsZ0RBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIE9wdGlvbmFsLFxuICBIb3N0LFxuICBTa2lwU2VsZixcbiAgSW5qZWN0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb250cm9sQ29udGFpbmVyLCBGb3JtQ29udHJvbCB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQm9vdHN0cmFwVmVyc2lvbiB9IGZyb20gXCIuLi9FbnVtcy9Cb290c3RyYXBWZXJzaW9uXCI7XG5pbXBvcnQgeyBCT09UU1RSQVBfVkVSU0lPTiB9IGZyb20gXCIuLi9Ub2tlbnMvdG9rZW5zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250cm9sUGF0aChuYW1lOiBzdHJpbmcsIHBhcmVudDogQ29udHJvbENvbnRhaW5lcik6IHN0cmluZ1tdIHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW5vbi1udWxsLWFzc2VydGlvblxuICByZXR1cm4gWy4uLnBhcmVudC5wYXRoISwgbmFtZV07XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGlyZWN0aXZlLXNlbGVjdG9yXG4gIHNlbGVjdG9yOiBcIi5mb3JtLWNvbnRyb2wsLmZvcm0tY2hlY2staW5wdXQsLmN1c3RvbS1jb250cm9sLWlucHV0XCJcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xEaXJlY3RpdmUge1xuICBASW5wdXQoKVxuICBmb3JtQ29udHJvbE5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgZm9ybUNvbnRyb2w6IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoXCJjbGFzcy5pcy12YWxpZFwiKVxuICBnZXQgdmFsaWRDbGFzcygpIHtcbiAgICBpZiAoIXRoaXMuY29udHJvbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5ib290c3RyYXBGb3VyICYmXG4gICAgICB0aGlzLmNvbnRyb2wudmFsaWQgJiZcbiAgICAgICh0aGlzLmNvbnRyb2wudG91Y2hlZCB8fCB0aGlzLmNvbnRyb2wuZGlydHkpXG4gICAgKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZyhcImNsYXNzLmlzLWludmFsaWRcIilcbiAgZ2V0IGludmFsaWRDbGFzcygpIHtcbiAgICBpZiAoIXRoaXMuY29udHJvbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5ib290c3RyYXBGb3VyICYmXG4gICAgICB0aGlzLmNvbnRyb2wuaW52YWxpZCAmJlxuICAgICAgdGhpcy5jb250cm9sLnRvdWNoZWQgJiZcbiAgICAgIHRoaXMuY29udHJvbC5kaXJ0eVxuICAgICk7XG4gIH1cblxuICBnZXQgcGF0aCgpIHtcbiAgICByZXR1cm4gY29udHJvbFBhdGgodGhpcy5mb3JtQ29udHJvbE5hbWUsIHRoaXMucGFyZW50KTtcbiAgfVxuXG4gIGdldCBjb250cm9sKCk6IEZvcm1Db250cm9sIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtRGlyZWN0aXZlICYmIHRoaXMuZm9ybURpcmVjdGl2ZS5nZXRDb250cm9sKHRoaXMpO1xuICB9XG5cbiAgZ2V0IGZvcm1EaXJlY3RpdmUoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5mb3JtRGlyZWN0aXZlIDogbnVsbDtcbiAgfVxuXG4gIGdldCBib290c3RyYXBGb3VyKCkge1xuICAgIHJldHVybiB0aGlzLmJvb3RzdHJhcFZlcnNpb24gPT09IEJvb3RzdHJhcFZlcnNpb24uRm91cjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIHRoaXMgdmFsdWUgbWlnaHQgYmUgbnVsbCwgYnV0IHdlIHVuaW9uIHR5cGUgaXQgYXMgc3VjaCB1bnRpbFxuICAgIC8vIHRoaXMgaXNzdWUgaXMgcmVzb2x2ZWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzI1NTQ0XG4gICAgQE9wdGlvbmFsKClcbiAgICBASG9zdCgpXG4gICAgQFNraXBTZWxmKClcbiAgICBwcml2YXRlIHBhcmVudDogQ29udHJvbENvbnRhaW5lcixcbiAgICBASW5qZWN0KEJPT1RTVFJBUF9WRVJTSU9OKSBwcml2YXRlIGJvb3RzdHJhcFZlcnNpb246IEJvb3RzdHJhcFZlcnNpb25cbiAgKSB7fVxufVxuIl19