/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = /**
 * @param {?} label
 * @return {?}
 */
function (label) { return label + " is required"; }, ɵ1 = /**
 * @param {?} label
 * @return {?}
 */
function (label) { return label + " is invalid"; }, ɵ2 = /**
 * @param {?} label
 * @param {?} error
 * @return {?}
 */
function (label, error) {
    return label + " must be at least " + error.requiredLength + " characters";
}, ɵ3 = /**
 * @param {?} label
 * @param {?} error
 * @return {?}
 */
function (label, error) {
    return label + " must be no longer than " + error.requiredLength + " characters";
}, ɵ4 = /**
 * @param {?} label
 * @param {?} error
 * @return {?}
 */
function (label, error) { return label + " is required"; }, ɵ5 = /**
 * @param {?} label
 * @param {?} error
 * @return {?}
 */
function (label, error) { return "Invalid email address"; }, ɵ6 = /**
 * @param {?} label
 * @param {?} error
 * @return {?}
 */
function (label, error) { return label + " must be no greater than " + error.max; }, ɵ7 = /**
 * @param {?} label
 * @param {?} error
 * @return {?}
 */
function (label, error) { return label + " must be no less than " + error.min; };
/** @type {?} */
export var DEFAULT_ERRORS = [
    {
        error: "required",
        format: (ɵ0)
    },
    {
        error: "pattern",
        format: (ɵ1)
    },
    {
        error: "minlength",
        format: (ɵ2)
    },
    {
        error: "maxlength",
        format: (ɵ3)
    },
    {
        error: "requiredTrue",
        format: (ɵ4)
    },
    {
        error: "email",
        format: (ɵ5)
    },
    {
        error: "max",
        format: (ɵ6)
    },
    {
        error: "min",
        format: (ɵ7)
    }
];
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6, ɵ7 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lcnJvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2RlZmF1bHQtZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS1ksVUFBQSxLQUFLLElBQUksT0FBRyxLQUFLLGlCQUFjLEVBQXRCLENBQXNCOzs7O0FBSS9CLFVBQUEsS0FBSyxJQUFJLE9BQUcsS0FBSyxnQkFBYSxFQUFyQixDQUFxQjs7Ozs7QUFJOUIsVUFBQyxLQUFLLEVBQUUsS0FBSztJQUNuQixPQUFHLEtBQUssMEJBQXFCLEtBQUssQ0FBQyxjQUFjLGdCQUFhO0FBQTlELENBQThEOzs7OztBQUl4RCxVQUFDLEtBQUssRUFBRSxLQUFLO0lBQ25CLE9BQUcsS0FBSyxnQ0FBMkIsS0FBSyxDQUFDLGNBQWMsZ0JBQWE7QUFBcEUsQ0FBb0U7Ozs7O0FBSTlELFVBQUMsS0FBSyxFQUFFLEtBQUssSUFBSyxPQUFHLEtBQUssaUJBQWMsRUFBdEIsQ0FBc0I7Ozs7O0FBSXhDLFVBQUMsS0FBSyxFQUFFLEtBQUssSUFBSyxPQUFBLHVCQUF1QixFQUF2QixDQUF1Qjs7Ozs7QUFJekMsVUFBQyxLQUFLLEVBQUUsS0FBSyxJQUFLLE9BQUcsS0FBSyxpQ0FBNEIsS0FBSyxDQUFDLEdBQUssRUFBL0MsQ0FBK0M7Ozs7O0FBSWpFLFVBQUMsS0FBSyxFQUFFLEtBQUssSUFBSyxPQUFHLEtBQUssOEJBQXlCLEtBQUssQ0FBQyxHQUFLLEVBQTVDLENBQTRDOztBQWpDMUUsTUFBTSxLQUFPLGNBQWMsR0FBbUI7SUFDNUM7UUFDRSxLQUFLLEVBQUUsVUFBVTtRQUNqQixNQUFNLE1BQWlDO0tBQ3hDO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsU0FBUztRQUNoQixNQUFNLE1BQWdDO0tBQ3ZDO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsV0FBVztRQUNsQixNQUFNLE1BQzBEO0tBQ2pFO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsV0FBVztRQUNsQixNQUFNLE1BQ2dFO0tBQ3ZFO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsY0FBYztRQUNyQixNQUFNLE1BQTBDO0tBQ2pEO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsT0FBTztRQUNkLE1BQU0sTUFBMkM7S0FDbEQ7SUFDRDtRQUNFLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxNQUFtRTtLQUMxRTtJQUNEO1FBQ0UsS0FBSyxFQUFFLEtBQUs7UUFDWixNQUFNLE1BQWdFO0tBQ3ZFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi9Nb2RlbHMvZXJyb3ItbWVzc2FnZVwiO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9FUlJPUlM6IEVycm9yTWVzc2FnZVtdID0gW1xuICB7XG4gICAgZXJyb3I6IFwicmVxdWlyZWRcIixcbiAgICBmb3JtYXQ6IGxhYmVsID0+IGAke2xhYmVsfSBpcyByZXF1aXJlZGBcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcInBhdHRlcm5cIixcbiAgICBmb3JtYXQ6IGxhYmVsID0+IGAke2xhYmVsfSBpcyBpbnZhbGlkYFxuICB9LFxuICB7XG4gICAgZXJyb3I6IFwibWlubGVuZ3RoXCIsXG4gICAgZm9ybWF0OiAobGFiZWwsIGVycm9yKSA9PlxuICAgICAgYCR7bGFiZWx9IG11c3QgYmUgYXQgbGVhc3QgJHtlcnJvci5yZXF1aXJlZExlbmd0aH0gY2hhcmFjdGVyc2BcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1heGxlbmd0aFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT5cbiAgICAgIGAke2xhYmVsfSBtdXN0IGJlIG5vIGxvbmdlciB0aGFuICR7ZXJyb3IucmVxdWlyZWRMZW5ndGh9IGNoYXJhY3RlcnNgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJyZXF1aXJlZFRydWVcIixcbiAgICBmb3JtYXQ6IChsYWJlbCwgZXJyb3IpID0+IGAke2xhYmVsfSBpcyByZXF1aXJlZGBcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcImVtYWlsXCIsXG4gICAgZm9ybWF0OiAobGFiZWwsIGVycm9yKSA9PiBgSW52YWxpZCBlbWFpbCBhZGRyZXNzYFxuICB9LFxuICB7XG4gICAgZXJyb3I6IFwibWF4XCIsXG4gICAgZm9ybWF0OiAobGFiZWwsIGVycm9yKSA9PiBgJHtsYWJlbH0gbXVzdCBiZSBubyBncmVhdGVyIHRoYW4gJHtlcnJvci5tYXh9YFxuICB9LFxuICB7XG4gICAgZXJyb3I6IFwibWluXCIsXG4gICAgZm9ybWF0OiAobGFiZWwsIGVycm9yKSA9PiBgJHtsYWJlbH0gbXVzdCBiZSBubyBsZXNzIHRoYW4gJHtlcnJvci5taW59YFxuICB9XG5dO1xuIl19