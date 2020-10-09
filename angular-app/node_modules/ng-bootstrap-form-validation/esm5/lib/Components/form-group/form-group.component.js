/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, ContentChild, ElementRef, HostBinding, Input, QueryList } from "@angular/core";
import { FormControlName } from "@angular/forms";
import { ErrorMessageService } from "../../Services/error-message.service";
import { MessagesComponent } from "../messages/messages.component";
var FormGroupComponent = /** @class */ (function () {
    function FormGroupComponent(elRef, errorMessageService) {
        var _this = this;
        this.elRef = elRef;
        this.errorMessageService = errorMessageService;
        this.customErrorMessages = [];
        this.validationDisabled = false;
        this.messages = (/**
         * @return {?}
         */
        function () { return _this.getMessages(); });
    }
    Object.defineProperty(FormGroupComponent.prototype, "hasErrors", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.FormControlNames.some((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return !c.valid && c.dirty && c.touched; })) &&
                !this.validationDisabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "hasSuccess", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.FormControlNames.some((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return !c.valid; })) &&
                this.FormControlNames.some((/**
                 * @param {?} c
                 * @return {?}
                 */
                function (c) { return c.dirty && c.touched; })) &&
                !this.validationDisabled);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormGroupComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.messagesBlock) {
            this.messagesBlock.messages = this.messages;
        }
    };
    /**
     * @return {?}
     */
    FormGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.errorMessages = this.errorMessageService.errorMessages
            .concat(this.customErrorMessages)
            .reverse();
    };
    Object.defineProperty(FormGroupComponent.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var label = this.elRef.nativeElement.querySelector("label");
            return label && label.textContent ? label.textContent.trim() : "This field";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "isDirtyAndTouched", {
        get: /**
         * @return {?}
         */
        function () {
            return this.FormControlNames.some((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return c.dirty && c.touched; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    FormGroupComponent.prototype.getMessages = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var messages = [];
        if (!this.isDirtyAndTouched || this.validationDisabled) {
            return messages;
        }
        /** @type {?} */
        var names = this.FormControlNames.map((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.name; }));
        this.FormControlNames.filter((/**
         * @param {?} c
         * @param {?} i
         * @return {?}
         */
        function (c, i) {
            return !c.valid &&
                !!c.errors &&
                // filter out FormControlNames that share the same name - usually for radio buttons
                names.indexOf(c.name) === i;
        })).forEach((/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            Object.keys(control.errors).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                /** @type {?} */
                var error = _this.errorMessages.find((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) { return err.error === key; }));
                if (!error) {
                    return;
                }
                messages.push(error.format(_this.label, control.errors[key]));
            }));
        }));
        return messages;
    };
    FormGroupComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable:component-selector
                    selector: ".form-group",
                    template: "\n    <ng-content></ng-content>\n    <bfv-messages *ngIf=\"!messagesBlock\" [messages]=\"messages\"></bfv-messages>\n  "
                }] }
    ];
    /** @nocollapse */
    FormGroupComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ErrorMessageService }
    ]; };
    FormGroupComponent.propDecorators = {
        FormControlNames: [{ type: ContentChildren, args: [FormControlName,] }],
        customErrorMessages: [{ type: Input }],
        validationDisabled: [{ type: Input }],
        hasErrors: [{ type: HostBinding, args: ["class.has-error",] }],
        hasSuccess: [{ type: HostBinding, args: ["class.has-success",] }],
        messagesBlock: [{ type: ContentChild, args: [MessagesComponent, { static: false },] }]
    };
    return FormGroupComponent;
}());
export { FormGroupComponent };
if (false) {
    /** @type {?} */
    FormGroupComponent.prototype.FormControlNames;
    /** @type {?} */
    FormGroupComponent.prototype.customErrorMessages;
    /** @type {?} */
    FormGroupComponent.prototype.validationDisabled;
    /** @type {?} */
    FormGroupComponent.prototype.messagesBlock;
    /**
     * @type {?}
     * @private
     */
    FormGroupComponent.prototype.errorMessages;
    /** @type {?} */
    FormGroupComponent.prototype.messages;
    /**
     * @type {?}
     * @private
     */
    FormGroupComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    FormGroupComponent.prototype.errorMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudHMvZm9ybS1ncm91cC9mb3JtLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsRUFHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHbkU7SUEwQ0UsNEJBQ1UsS0FBaUIsRUFDakIsbUJBQXdDO1FBRmxELGlCQUdJO1FBRk0sVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBL0JsRCx3QkFBbUIsR0FBbUIsRUFBRSxDQUFDO1FBR3pDLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQXdCcEIsYUFBUTs7O1FBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsRUFBQztJQUt4QyxDQUFDO0lBM0JKLHNCQUNJLHlDQUFTOzs7O1FBRGI7WUFFRSxPQUFPLENBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUk7Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQWhDLENBQWdDLEVBQUM7Z0JBQ2pFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUN6QixDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRCxzQkFD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TCxDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7O2dCQTdGRixTQUFTLFNBQUM7O29CQUVULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUseUhBR1Q7aUJBQ0Y7Ozs7Z0JBbkJDLFVBQVU7Z0JBUUgsbUJBQW1COzs7bUNBYXpCLGVBQWUsU0FBQyxlQUFlO3NDQUcvQixLQUFLO3FDQUdMLEtBQUs7NEJBR0wsV0FBVyxTQUFDLGlCQUFpQjs2QkFRN0IsV0FBVyxTQUFDLG1CQUFtQjtnQ0FTL0IsWUFBWSxTQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUEyRHBELHlCQUFDO0NBQUEsQUE5RkQsSUE4RkM7U0F0Rlksa0JBQWtCOzs7SUFDN0IsOENBQzZDOztJQUU3QyxpREFDeUM7O0lBRXpDLGdEQUMyQjs7SUFtQjNCLDJDQUN3Qzs7Ozs7SUFFeEMsMkNBQXNDOztJQUV0QyxzQ0FBMkM7Ozs7O0lBR3pDLG1DQUF5Qjs7Ozs7SUFDekIsaURBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBRdWVyeUxpc3QsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xOYW1lIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL1NlcnZpY2VzL2Vycm9yLW1lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgTWVzc2FnZXNDb21wb25lbnQgfSBmcm9tIFwiLi4vbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFcnJvck1lc3NhZ2UgfSBmcm9tIFwiLi4vLi4vTW9kZWxzL2Vycm9yLW1lc3NhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogXCIuZm9ybS1ncm91cFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8YmZ2LW1lc3NhZ2VzICpuZ0lmPVwiIW1lc3NhZ2VzQmxvY2tcIiBbbWVzc2FnZXNdPVwibWVzc2FnZXNcIj48L2Jmdi1tZXNzYWdlcz5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKEZvcm1Db250cm9sTmFtZSlcbiAgRm9ybUNvbnRyb2xOYW1lczogUXVlcnlMaXN0PEZvcm1Db250cm9sTmFtZT47XG5cbiAgQElucHV0KClcbiAgY3VzdG9tRXJyb3JNZXNzYWdlczogRXJyb3JNZXNzYWdlW10gPSBbXTtcblxuICBASW5wdXQoKVxuICB2YWxpZGF0aW9uRGlzYWJsZWQgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoXCJjbGFzcy5oYXMtZXJyb3JcIilcbiAgZ2V0IGhhc0Vycm9ycygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5Gb3JtQ29udHJvbE5hbWVzLnNvbWUoYyA9PiAhYy52YWxpZCAmJiBjLmRpcnR5ICYmIGMudG91Y2hlZCkgJiZcbiAgICAgICF0aGlzLnZhbGlkYXRpb25EaXNhYmxlZFxuICAgICk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoXCJjbGFzcy5oYXMtc3VjY2Vzc1wiKVxuICBnZXQgaGFzU3VjY2VzcygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgIXRoaXMuRm9ybUNvbnRyb2xOYW1lcy5zb21lKGMgPT4gIWMudmFsaWQpICYmXG4gICAgICB0aGlzLkZvcm1Db250cm9sTmFtZXMuc29tZShjID0+IGMuZGlydHkgJiYgYy50b3VjaGVkKSAmJlxuICAgICAgIXRoaXMudmFsaWRhdGlvbkRpc2FibGVkXG4gICAgKTtcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGQoTWVzc2FnZXNDb21wb25lbnQsIHsgc3RhdGljOiBmYWxzZSB9KVxuICBwdWJsaWMgbWVzc2FnZXNCbG9jazogTWVzc2FnZXNDb21wb25lbnQ7XG5cbiAgcHJpdmF0ZSBlcnJvck1lc3NhZ2VzOiBFcnJvck1lc3NhZ2VbXTtcblxuICBwdWJsaWMgbWVzc2FnZXMgPSAoKSA9PiB0aGlzLmdldE1lc3NhZ2VzKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGVycm9yTWVzc2FnZVNlcnZpY2U6IEVycm9yTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5tZXNzYWdlc0Jsb2NrKSB7XG4gICAgICB0aGlzLm1lc3NhZ2VzQmxvY2subWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VzO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlcyA9IHRoaXMuZXJyb3JNZXNzYWdlU2VydmljZS5lcnJvck1lc3NhZ2VzXG4gICAgICAuY29uY2F0KHRoaXMuY3VzdG9tRXJyb3JNZXNzYWdlcylcbiAgICAgIC5yZXZlcnNlKCk7XG4gIH1cblxuICBnZXQgbGFiZWwoKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO1xuICAgIHJldHVybiBsYWJlbCAmJiBsYWJlbC50ZXh0Q29udGVudCA/IGxhYmVsLnRleHRDb250ZW50LnRyaW0oKSA6IFwiVGhpcyBmaWVsZFwiO1xuICB9XG5cbiAgZ2V0IGlzRGlydHlBbmRUb3VjaGVkKCkge1xuICAgIHJldHVybiB0aGlzLkZvcm1Db250cm9sTmFtZXMuc29tZShjID0+IGMuZGlydHkgJiYgYy50b3VjaGVkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWVzc2FnZXMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW107XG4gICAgaWYgKCF0aGlzLmlzRGlydHlBbmRUb3VjaGVkIHx8IHRoaXMudmFsaWRhdGlvbkRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gbWVzc2FnZXM7XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZXMgPSB0aGlzLkZvcm1Db250cm9sTmFtZXMubWFwKGYgPT4gZi5uYW1lKTtcblxuICAgIHRoaXMuRm9ybUNvbnRyb2xOYW1lcy5maWx0ZXIoXG4gICAgICAoYywgaSkgPT5cbiAgICAgICAgIWMudmFsaWQgJiZcbiAgICAgICAgISFjLmVycm9ycyAmJlxuICAgICAgICAvLyBmaWx0ZXIgb3V0IEZvcm1Db250cm9sTmFtZXMgdGhhdCBzaGFyZSB0aGUgc2FtZSBuYW1lIC0gdXN1YWxseSBmb3IgcmFkaW8gYnV0dG9uc1xuICAgICAgICBuYW1lcy5pbmRleE9mKGMubmFtZSkgPT09IGlcbiAgICApLmZvckVhY2goY29udHJvbCA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhjb250cm9sLmVycm9ycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuZXJyb3JNZXNzYWdlcy5maW5kKGVyciA9PiBlcnIuZXJyb3IgPT09IGtleSk7XG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbWVzc2FnZXMucHVzaChlcnJvci5mb3JtYXQodGhpcy5sYWJlbCwgY29udHJvbC5lcnJvcnNba2V5XSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVzc2FnZXM7XG4gIH1cbn1cbiJdfQ==