import { EventEmitter, Directive, Input, Output, HostListener, InjectionToken, Component, Inject, Injectable, ɵɵdefineInjectable, ɵɵinject, ElementRef, ContentChildren, HostBinding, ContentChild, Optional, Host, SkipSelf, NgModule } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormControlName, ControlContainer } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormValidationDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const BootstrapVersion = {
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
const CUSTOM_ERROR_MESSAGES = new InjectionToken("ng-bootstrap-form-validation custom error messages");
/** @type {?} */
const BOOTSTRAP_VERSION = new InjectionToken("ng-bootstrap-form-validation module options");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MessagesComponent {
    /**
     * @param {?} bootstrapVersion
     */
    constructor(bootstrapVersion) {
        this.bootstrapVersion = bootstrapVersion;
        this.messages = (/**
         * @return {?}
         */
        () => []);
    }
    /**
     * @return {?}
     */
    get className() {
        switch (this.bootstrapVersion) {
            case BootstrapVersion.Three:
                return "help-block";
            case BootstrapVersion.Four:
                return "invalid-feedback";
        }
    }
}
MessagesComponent.decorators = [
    { type: Component, args: [{
                selector: "bfv-messages",
                template: `
    <span [ngClass]="className" *ngFor="let message of messages()">{{message}}</span>
  `,
                styles: [`
      .invalid-feedback,
      .valid-feedback {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
MessagesComponent.ctorParameters = () => [
    { type: BootstrapVersion, decorators: [{ type: Inject, args: [BOOTSTRAP_VERSION,] }] }
];
MessagesComponent.propDecorators = {
    messages: [{ type: Input }]
};
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
const DEFAULT_ERRORS = [
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
class ErrorMessageService {
    /**
     * @param {?} customErrorMessages
     */
    constructor(customErrorMessages) {
        this.customErrorMessages = customErrorMessages;
        this.defaultErrors = DEFAULT_ERRORS;
        this.errorMessages = customErrorMessages.reduce((/**
         * @param {?} acc
         * @param {?} cur
         * @return {?}
         */
        (acc, cur) => acc.concat(cur)), this.defaultErrors);
    }
}
ErrorMessageService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
ErrorMessageService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [CUSTOM_ERROR_MESSAGES,] }] }
];
/** @nocollapse */ ErrorMessageService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ErrorMessageService_Factory() { return new ErrorMessageService(ɵɵinject(CUSTOM_ERROR_MESSAGES)); }, token: ErrorMessageService, providedIn: "root" });
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
class FormGroupComponent {
    /**
     * @param {?} elRef
     * @param {?} errorMessageService
     */
    constructor(elRef, errorMessageService) {
        this.elRef = elRef;
        this.errorMessageService = errorMessageService;
        this.customErrorMessages = [];
        this.validationDisabled = false;
        this.messages = (/**
         * @return {?}
         */
        () => this.getMessages());
    }
    /**
     * @return {?}
     */
    get hasErrors() {
        return (this.FormControlNames.some((/**
         * @param {?} c
         * @return {?}
         */
        c => !c.valid && c.dirty && c.touched)) &&
            !this.validationDisabled);
    }
    /**
     * @return {?}
     */
    get hasSuccess() {
        return (!this.FormControlNames.some((/**
         * @param {?} c
         * @return {?}
         */
        c => !c.valid)) &&
            this.FormControlNames.some((/**
             * @param {?} c
             * @return {?}
             */
            c => c.dirty && c.touched)) &&
            !this.validationDisabled);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.messagesBlock) {
            this.messagesBlock.messages = this.messages;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.errorMessages = this.errorMessageService.errorMessages
            .concat(this.customErrorMessages)
            .reverse();
    }
    /**
     * @return {?}
     */
    get label() {
        /** @type {?} */
        const label = this.elRef.nativeElement.querySelector("label");
        return label && label.textContent ? label.textContent.trim() : "This field";
    }
    /**
     * @return {?}
     */
    get isDirtyAndTouched() {
        return this.FormControlNames.some((/**
         * @param {?} c
         * @return {?}
         */
        c => c.dirty && c.touched));
    }
    /**
     * @private
     * @return {?}
     */
    getMessages() {
        /** @type {?} */
        const messages = [];
        if (!this.isDirtyAndTouched || this.validationDisabled) {
            return messages;
        }
        /** @type {?} */
        const names = this.FormControlNames.map((/**
         * @param {?} f
         * @return {?}
         */
        f => f.name));
        this.FormControlNames.filter((/**
         * @param {?} c
         * @param {?} i
         * @return {?}
         */
        (c, i) => !c.valid &&
            !!c.errors &&
            // filter out FormControlNames that share the same name - usually for radio buttons
            names.indexOf(c.name) === i)).forEach((/**
         * @param {?} control
         * @return {?}
         */
        control => {
            Object.keys(control.errors).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                /** @type {?} */
                const error = this.errorMessages.find((/**
                 * @param {?} err
                 * @return {?}
                 */
                err => err.error === key));
                if (!error) {
                    return;
                }
                messages.push(error.format(this.label, control.errors[key]));
            }));
        }));
        return messages;
    }
}
FormGroupComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable:component-selector
                selector: ".form-group",
                template: `
    <ng-content></ng-content>
    <bfv-messages *ngIf="!messagesBlock" [messages]="messages"></bfv-messages>
  `
            }] }
];
/** @nocollapse */
FormGroupComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ErrorMessageService }
];
FormGroupComponent.propDecorators = {
    FormControlNames: [{ type: ContentChildren, args: [FormControlName,] }],
    customErrorMessages: [{ type: Input }],
    validationDisabled: [{ type: Input }],
    hasErrors: [{ type: HostBinding, args: ["class.has-error",] }],
    hasSuccess: [{ type: HostBinding, args: ["class.has-success",] }],
    messagesBlock: [{ type: ContentChild, args: [MessagesComponent, { static: false },] }]
};
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
    return [...(/** @type {?} */ (parent.path)), name];
}
class FormControlDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgBootstrapFormValidationModule {
    /**
     * @param {?=} userOptions
     * @return {?}
     */
    static forRoot(userOptions = {
        bootstrapVersion: BootstrapVersion.Four
    }) {
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
    }
}
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
