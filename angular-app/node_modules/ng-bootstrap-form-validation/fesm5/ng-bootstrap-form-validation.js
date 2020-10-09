import { EventEmitter, Directive, Input, Output, HostListener, InjectionToken, Component, Inject, Injectable, ɵɵdefineInjectable, ɵɵinject, ElementRef, ContentChildren, HostBinding, ContentChild, Optional, Host, SkipSelf, NgModule } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormControlName, ControlContainer } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { __spread } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormValidationDirective = /** @class */ (function () {
    function FormValidationDirective() {
        this.validSubmit = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FormValidationDirective.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        this.markAsTouchedAndDirty(this.formGroup);
        if (this.formGroup.valid) {
            this.validSubmit.emit(this.formGroup.value);
        }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    FormValidationDirective.prototype.markAsTouchedAndDirty = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        var _this = this;
        if (control instanceof FormGroup) {
            Object.keys(control.controls).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                return _this.markAsTouchedAndDirty(control.controls[key]);
            }));
        }
        else if (control instanceof FormArray) {
            control.controls.forEach((/**
             * @param {?} c
             * @return {?}
             */
            function (c) { return _this.markAsTouchedAndDirty(c); }));
        }
        else if (control instanceof FormControl && control.enabled) {
            control.markAsDirty();
            control.markAsTouched();
            control.updateValueAndValidity();
        }
    };
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
    return FormValidationDirective;
}());
if (false) {
    /** @type {?} */
    FormValidationDirective.prototype.formGroup;
    /** @type {?} */
    FormValidationDirective.prototype.validSubmit;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var BootstrapVersion = {
    Three: 0,
    Four: 1,
};
BootstrapVersion[BootstrapVersion.Three] = 'Three';
BootstrapVersion[BootstrapVersion.Four] = 'Four';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var CUSTOM_ERROR_MESSAGES = new InjectionToken("ng-bootstrap-form-validation custom error messages");
/** @type {?} */
var BOOTSTRAP_VERSION = new InjectionToken("ng-bootstrap-form-validation module options");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(bootstrapVersion) {
        this.bootstrapVersion = bootstrapVersion;
        this.messages = (/**
         * @return {?}
         */
        function () { return []; });
    }
    Object.defineProperty(MessagesComponent.prototype, "className", {
        get: /**
         * @return {?}
         */
        function () {
            switch (this.bootstrapVersion) {
                case BootstrapVersion.Three:
                    return "help-block";
                case BootstrapVersion.Four:
                    return "invalid-feedback";
            }
        },
        enumerable: true,
        configurable: true
    });
    MessagesComponent.decorators = [
        { type: Component, args: [{
                    selector: "bfv-messages",
                    template: "\n    <span [ngClass]=\"className\" *ngFor=\"let message of messages()\">{{message}}</span>\n  ",
                    styles: ["\n      .invalid-feedback,\n      .valid-feedback {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    MessagesComponent.ctorParameters = function () { return [
        { type: BootstrapVersion, decorators: [{ type: Inject, args: [BOOTSTRAP_VERSION,] }] }
    ]; };
    MessagesComponent.propDecorators = {
        messages: [{ type: Input }]
    };
    return MessagesComponent;
}());
if (false) {
    /** @type {?} */
    MessagesComponent.prototype.messages;
    /**
     * @type {?}
     * @private
     */
    MessagesComponent.prototype.bootstrapVersion;
}

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
var DEFAULT_ERRORS = [
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ ErrorMessageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ErrorMessageService_Factory() { return new ErrorMessageService(ɵɵinject(CUSTOM_ERROR_MESSAGES)); }, token: ErrorMessageService, providedIn: "root" });
    return ErrorMessageService;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} name
 * @param {?} parent
 * @return {?}
 */
function controlPath(name, parent) {
    // tslint:disable-next-line:no-non-null-assertion
    return __spread((/** @type {?} */ (parent.path)), [name]);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgBootstrapFormValidationModule = /** @class */ (function () {
    function NgBootstrapFormValidationModule() {
    }
    /**
     * @param {?=} userOptions
     * @return {?}
     */
    NgBootstrapFormValidationModule.forRoot = /**
     * @param {?=} userOptions
     * @return {?}
     */
    function (userOptions) {
        if (userOptions === void 0) { userOptions = {
            bootstrapVersion: BootstrapVersion.Four
        }; }
        return {
            ngModule: NgBootstrapFormValidationModule,
            providers: [
                {
                    provide: CUSTOM_ERROR_MESSAGES,
                    useValue: userOptions.customErrorMessages || [],
                    multi: true
                },
                {
                    provide: BOOTSTRAP_VERSION,
                    useValue: userOptions.bootstrapVersion
                },
                ErrorMessageService
            ]
        };
    };
    NgBootstrapFormValidationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [
                        FormValidationDirective,
                        FormGroupComponent,
                        MessagesComponent,
                        FormControlDirective
                    ],
                    exports: [
                        FormValidationDirective,
                        FormGroupComponent,
                        MessagesComponent,
                        FormControlDirective
                    ]
                },] }
    ];
    return NgBootstrapFormValidationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BOOTSTRAP_VERSION, BootstrapVersion, CUSTOM_ERROR_MESSAGES, FormGroupComponent, FormValidationDirective, MessagesComponent, NgBootstrapFormValidationModule, ErrorMessageService as ɵa, FormControlDirective as ɵb };
//# sourceMappingURL=ng-bootstrap-form-validation.js.map
