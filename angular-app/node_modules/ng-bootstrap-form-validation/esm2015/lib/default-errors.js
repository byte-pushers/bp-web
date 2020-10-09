/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = /**
 * @param {?} label
 * @return {?}
 */
label => `${label} is required`, ɵ1 = /**
 * @param {?} label
 * @return {?}
 */
label => `${label} is invalid`, ɵ2 = /**
 * @param {?} label
 * @param {?} error
 * @return {?}
 */
(label, error) => `${label} must be at least ${error.requiredLength} characters`, ɵ3 = /**
 * @param {?} label
 * @param {?} error
 * @return {?}
 */
(label, error) => `${label} must be no longer than ${error.requiredLength} characters`, ɵ4 = /**
 * @param {?} label
 * @param {?} error
 * @return {?}
 */
(label, error) => `${label} is required`, ɵ5 = /**
 * @param {?} label
 * @param {?} error
 * @return {?}
 */
(label, error) => `Invalid email address`, ɵ6 = /**
 * @param {?} label
 * @param {?} error
 * @return {?}
 */
(label, error) => `${label} must be no greater than ${error.max}`, ɵ7 = /**
 * @param {?} label
 * @param {?} error
 * @return {?}
 */
(label, error) => `${label} must be no less than ${error.min}`;
/** @type {?} */
export const DEFAULT_ERRORS = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lcnJvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL2RlZmF1bHQtZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBS1ksS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssY0FBYzs7OztBQUkvQixLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxhQUFhOzs7OztBQUk5QixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUN2QixHQUFHLEtBQUsscUJBQXFCLEtBQUssQ0FBQyxjQUFjLGFBQWE7Ozs7O0FBSXhELENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQ3ZCLEdBQUcsS0FBSywyQkFBMkIsS0FBSyxDQUFDLGNBQWMsYUFBYTs7Ozs7QUFJOUQsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssY0FBYzs7Ozs7QUFJeEMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyx1QkFBdUI7Ozs7O0FBSXpDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLDRCQUE0QixLQUFLLENBQUMsR0FBRyxFQUFFOzs7OztBQUlqRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyx5QkFBeUIsS0FBSyxDQUFDLEdBQUcsRUFBRTs7QUFqQzFFLE1BQU0sT0FBTyxjQUFjLEdBQW1CO0lBQzVDO1FBQ0UsS0FBSyxFQUFFLFVBQVU7UUFDakIsTUFBTSxNQUFpQztLQUN4QztJQUNEO1FBQ0UsS0FBSyxFQUFFLFNBQVM7UUFDaEIsTUFBTSxNQUFnQztLQUN2QztJQUNEO1FBQ0UsS0FBSyxFQUFFLFdBQVc7UUFDbEIsTUFBTSxNQUMwRDtLQUNqRTtJQUNEO1FBQ0UsS0FBSyxFQUFFLFdBQVc7UUFDbEIsTUFBTSxNQUNnRTtLQUN2RTtJQUNEO1FBQ0UsS0FBSyxFQUFFLGNBQWM7UUFDckIsTUFBTSxNQUEwQztLQUNqRDtJQUNEO1FBQ0UsS0FBSyxFQUFFLE9BQU87UUFDZCxNQUFNLE1BQTJDO0tBQ2xEO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsS0FBSztRQUNaLE1BQU0sTUFBbUU7S0FDMUU7SUFDRDtRQUNFLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxNQUFnRTtLQUN2RTtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JNZXNzYWdlIH0gZnJvbSBcIi4vTW9kZWxzL2Vycm9yLW1lc3NhZ2VcIjtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVJST1JTOiBFcnJvck1lc3NhZ2VbXSA9IFtcbiAge1xuICAgIGVycm9yOiBcInJlcXVpcmVkXCIsXG4gICAgZm9ybWF0OiBsYWJlbCA9PiBgJHtsYWJlbH0gaXMgcmVxdWlyZWRgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJwYXR0ZXJuXCIsXG4gICAgZm9ybWF0OiBsYWJlbCA9PiBgJHtsYWJlbH0gaXMgaW52YWxpZGBcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1pbmxlbmd0aFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT5cbiAgICAgIGAke2xhYmVsfSBtdXN0IGJlIGF0IGxlYXN0ICR7ZXJyb3IucmVxdWlyZWRMZW5ndGh9IGNoYXJhY3RlcnNgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJtYXhsZW5ndGhcIixcbiAgICBmb3JtYXQ6IChsYWJlbCwgZXJyb3IpID0+XG4gICAgICBgJHtsYWJlbH0gbXVzdCBiZSBubyBsb25nZXIgdGhhbiAke2Vycm9yLnJlcXVpcmVkTGVuZ3RofSBjaGFyYWN0ZXJzYFxuICB9LFxuICB7XG4gICAgZXJyb3I6IFwicmVxdWlyZWRUcnVlXCIsXG4gICAgZm9ybWF0OiAobGFiZWwsIGVycm9yKSA9PiBgJHtsYWJlbH0gaXMgcmVxdWlyZWRgXG4gIH0sXG4gIHtcbiAgICBlcnJvcjogXCJlbWFpbFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT4gYEludmFsaWQgZW1haWwgYWRkcmVzc2BcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1heFwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT4gYCR7bGFiZWx9IG11c3QgYmUgbm8gZ3JlYXRlciB0aGFuICR7ZXJyb3IubWF4fWBcbiAgfSxcbiAge1xuICAgIGVycm9yOiBcIm1pblwiLFxuICAgIGZvcm1hdDogKGxhYmVsLCBlcnJvcikgPT4gYCR7bGFiZWx9IG11c3QgYmUgbm8gbGVzcyB0aGFuICR7ZXJyb3IubWlufWBcbiAgfVxuXTtcbiJdfQ==