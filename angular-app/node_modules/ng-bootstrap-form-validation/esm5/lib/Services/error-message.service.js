/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from "@angular/core";
import { DEFAULT_ERRORS } from "../default-errors";
import { CUSTOM_ERROR_MESSAGES } from "../Tokens/tokens";
import * as i0 from "@angular/core";
import * as i1 from "../Tokens/tokens";
var ErrorMessageService = /** @class */ (function () {
    function ErrorMessageService(customErrorMessages) {
        this.customErrorMessages = customErrorMessages;
        this.defaultErrors = DEFAULT_ERRORS;
        this.errorMessages = customErrorMessages.reduce((/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        function (acc, cur) { return acc.concat(cur); }), this.defaultErrors);
    }
    ErrorMessageService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    ErrorMessageService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: [CUSTOM_ERROR_MESSAGES,] }] }
    ]; };
    /** @nocollapse */ ErrorMessageService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ErrorMessageService_Factory() { return new ErrorMessageService(i0.ɵɵinject(i1.CUSTOM_ERROR_MESSAGES)); }, token: ErrorMessageService, providedIn: "root" });
    return ErrorMessageService;
}());
export { ErrorMessageService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ErrorMessageService.prototype.defaultErrors;
    /** @type {?} */
    ErrorMessageService.prototype.errorMessages;
    /** @type {?} */
    ErrorMessageService.prototype.customErrorMessages;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9TZXJ2aWNlcy9lcnJvci1tZXNzYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7O0FBR3pEO0lBUUUsNkJBQ3dDLG1CQUFxQztRQUFyQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQWtCO1FBTHJFLGtCQUFhLEdBQUcsY0FBYyxDQUFDO1FBT3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsbUJBQW1CLENBQUMsTUFBTTs7Ozs7UUFDN0MsVUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBZixDQUFlLEdBQzdCLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7SUFDSixDQUFDOztnQkFmRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7OzRDQU9JLE1BQU0sU0FBQyxxQkFBcUI7Ozs4QkFkakM7Q0FxQkMsQUFoQkQsSUFnQkM7U0FiWSxtQkFBbUI7Ozs7OztJQUM5Qiw0Q0FBdUM7O0lBRXZDLDRDQUFxQzs7SUFHbkMsa0RBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERFRkFVTFRfRVJST1JTIH0gZnJvbSBcIi4uL2RlZmF1bHQtZXJyb3JzXCI7XG5pbXBvcnQgeyBDVVNUT01fRVJST1JfTUVTU0FHRVMgfSBmcm9tIFwiLi4vVG9rZW5zL3Rva2Vuc1wiO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4uL01vZGVscy9lcnJvci1tZXNzYWdlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JNZXNzYWdlU2VydmljZSB7XG4gIHByaXZhdGUgZGVmYXVsdEVycm9ycyA9IERFRkFVTFRfRVJST1JTO1xuXG4gIHB1YmxpYyBlcnJvck1lc3NhZ2VzOiBFcnJvck1lc3NhZ2VbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KENVU1RPTV9FUlJPUl9NRVNTQUdFUykgcHVibGljIGN1c3RvbUVycm9yTWVzc2FnZXM6IEVycm9yTWVzc2FnZVtdW11cbiAgKSB7XG4gICAgdGhpcy5lcnJvck1lc3NhZ2VzID0gY3VzdG9tRXJyb3JNZXNzYWdlcy5yZWR1Y2UoXG4gICAgICAoYWNjLCBjdXIpID0+IGFjYy5jb25jYXQoY3VyKSxcbiAgICAgIHRoaXMuZGVmYXVsdEVycm9yc1xuICAgICk7XG4gIH1cbn1cbiJdfQ==