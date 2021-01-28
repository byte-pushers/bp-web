/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, Input, Output, HostListener } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
export class FormValidationDirective {
    constructor() {
        this.validSubmit = new EventEmitter();
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.markAsTouchedAndDirty(this.formGroup);
        if (this.formGroup.valid) {
            this.validSubmit.emit(this.formGroup.value);
        }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    markAsTouchedAndDirty(control) {
        if (control instanceof FormGroup) {
            Object.keys(control.controls).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => this.markAsTouchedAndDirty(control.controls[key])));
        }
        else if (control instanceof FormArray) {
            control.controls.forEach((/**
             * @param {?} c
             * @return {?}
             */
            c => this.markAsTouchedAndDirty(c)));
        }
        else if (control instanceof FormControl && control.enabled) {
            control.markAsDirty();
            control.markAsTouched();
            control.updateValueAndValidity();
        }
    }
}
FormValidationDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: "[formGroup]"
            },] }
];
FormValidationDirective.propDecorators = {
    formGroup: [{ type: Input }],
    validSubmit: [{ type: Output }],
    onSubmit: [{ type: HostListener, args: ["submit",] }]
};
if (false) {
    /** @type {?} */
    FormValidationDirective.prototype.formGroup;
    /** @type {?} */
    FormValidationDirective.prototype.validSubmit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS12YWxpZGF0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24vIiwic291cmNlcyI6WyJsaWIvRGlyZWN0aXZlcy9mb3JtLXZhbGlkYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBRUwsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxnQkFBZ0IsQ0FBQztBQU14QixNQUFNLE9BQU8sdUJBQXVCO0lBSnBDO1FBUUUsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBdUJ4QyxDQUFDOzs7O0lBcEJDLFFBQVE7UUFDTixJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztJQUNILENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsT0FBd0I7UUFDNUMsSUFBSSxPQUFPLFlBQVksU0FBUyxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxHQUFHLENBQUMsRUFBRSxDQUMxQyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUNsRCxDQUFDO1NBQ0g7YUFBTSxJQUFJLE9BQU8sWUFBWSxTQUFTLEVBQUU7WUFDdkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztTQUM5RDthQUFNLElBQUksT0FBTyxZQUFZLFdBQVcsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQzVELE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QixPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7WUE5QkYsU0FBUyxTQUFDOztnQkFFVCxRQUFRLEVBQUUsYUFBYTthQUN4Qjs7O3dCQUVFLEtBQUs7MEJBRUwsTUFBTTt1QkFHTixZQUFZLFNBQUMsUUFBUTs7OztJQUx0Qiw0Q0FDcUI7O0lBQ3JCLDhDQUNzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBIb3N0TGlzdGVuZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgRm9ybUFycmF5LFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUdyb3VwXG59IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuXG5ARGlyZWN0aXZlKHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICBzZWxlY3RvcjogXCJbZm9ybUdyb3VwXVwiXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0aW9uRGlyZWN0aXZlIHtcbiAgQElucHV0KClcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIEBPdXRwdXQoKVxuICB2YWxpZFN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBIb3N0TGlzdGVuZXIoXCJzdWJtaXRcIilcbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5tYXJrQXNUb3VjaGVkQW5kRGlydHkodGhpcy5mb3JtR3JvdXApO1xuICAgIGlmICh0aGlzLmZvcm1Hcm91cC52YWxpZCkge1xuICAgICAgdGhpcy52YWxpZFN1Ym1pdC5lbWl0KHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBtYXJrQXNUb3VjaGVkQW5kRGlydHkoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG4gICAgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBGb3JtR3JvdXApIHtcbiAgICAgIE9iamVjdC5rZXlzKGNvbnRyb2wuY29udHJvbHMpLmZvckVhY2goa2V5ID0+XG4gICAgICAgIHRoaXMubWFya0FzVG91Y2hlZEFuZERpcnR5KGNvbnRyb2wuY29udHJvbHNba2V5XSlcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChjb250cm9sIGluc3RhbmNlb2YgRm9ybUFycmF5KSB7XG4gICAgICBjb250cm9sLmNvbnRyb2xzLmZvckVhY2goYyA9PiB0aGlzLm1hcmtBc1RvdWNoZWRBbmREaXJ0eShjKSk7XG4gICAgfSBlbHNlIGlmIChjb250cm9sIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wgJiYgY29udHJvbC5lbmFibGVkKSB7XG4gICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgIH1cbiAgfVxufVxuIl19