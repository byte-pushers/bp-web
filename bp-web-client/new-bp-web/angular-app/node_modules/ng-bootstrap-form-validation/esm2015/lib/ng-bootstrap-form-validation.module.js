/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormValidationDirective } from "./Directives/form-validation.directive";
import { MessagesComponent } from "./Components/messages/messages.component";
import { ErrorMessageService } from "./Services/error-message.service";
import { CUSTOM_ERROR_MESSAGES, BOOTSTRAP_VERSION } from "./Tokens/tokens";
import { BootstrapVersion } from "./Enums/BootstrapVersion";
import { FormGroupComponent } from "./Components/form-group/form-group.component";
import { FormControlDirective } from "./Directives/form-control.directive";
export class NgBootstrapFormValidationModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uLyIsInNvdXJjZXMiOlsibGliL25nLWJvb3RzdHJhcC1mb3JtLXZhbGlkYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFbEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFpQjNFLE1BQU0sT0FBTywrQkFBK0I7Ozs7O0lBQzFDLE1BQU0sQ0FBQyxPQUFPLENBQ1osY0FBc0Q7UUFDcEQsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsSUFBSTtLQUN4QztRQUVELE9BQU87WUFDTCxRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUscUJBQXFCO29CQUM5QixRQUFRLEVBQUUsV0FBVyxDQUFDLG1CQUFtQixJQUFJLEVBQUU7b0JBQy9DLEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxpQkFBaUI7b0JBQzFCLFFBQVEsRUFBRSxXQUFXLENBQUMsZ0JBQWdCO2lCQUN2QztnQkFDRCxtQkFBbUI7YUFDcEI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBcENGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRTtvQkFDWix1QkFBdUI7b0JBQ3ZCLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixvQkFBb0I7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx1QkFBdUI7b0JBQ3ZCLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixvQkFBb0I7aUJBQ3JCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3JtVmFsaWRhdGlvbkRpcmVjdGl2ZSB9IGZyb20gXCIuL0RpcmVjdGl2ZXMvZm9ybS12YWxpZGF0aW9uLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgTWVzc2FnZXNDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXJyb3JNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuL1NlcnZpY2VzL2Vycm9yLW1lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgQ1VTVE9NX0VSUk9SX01FU1NBR0VTLCBCT09UU1RSQVBfVkVSU0lPTiB9IGZyb20gXCIuL1Rva2Vucy90b2tlbnNcIjtcbmltcG9ydCB7IEJvb3RzdHJhcFZlcnNpb24gfSBmcm9tIFwiLi9FbnVtcy9Cb290c3RyYXBWZXJzaW9uXCI7XG5pbXBvcnQgeyBGb3JtR3JvdXBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRzL2Zvcm0tZ3JvdXAvZm9ybS1ncm91cC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5nQm9vdHN0cmFwRm9ybVZhbGlkYXRpb25Nb2R1bGVPcHRpb25zIH0gZnJvbSBcIi4vTW9kZWxzL05nQm9vdHN0cmFwRm9ybVZhbGlkYXRpb25Nb2R1bGVPcHRpb25zXCI7XG5pbXBvcnQgeyBGb3JtQ29udHJvbERpcmVjdGl2ZSB9IGZyb20gXCIuL0RpcmVjdGl2ZXMvZm9ybS1jb250cm9sLmRpcmVjdGl2ZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRm9ybVZhbGlkYXRpb25EaXJlY3RpdmUsXG4gICAgRm9ybUdyb3VwQ29tcG9uZW50LFxuICAgIE1lc3NhZ2VzQ29tcG9uZW50LFxuICAgIEZvcm1Db250cm9sRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBGb3JtVmFsaWRhdGlvbkRpcmVjdGl2ZSxcbiAgICBGb3JtR3JvdXBDb21wb25lbnQsXG4gICAgTWVzc2FnZXNDb21wb25lbnQsXG4gICAgRm9ybUNvbnRyb2xEaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0Jvb3RzdHJhcEZvcm1WYWxpZGF0aW9uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoXG4gICAgdXNlck9wdGlvbnM6IE5nQm9vdHN0cmFwRm9ybVZhbGlkYXRpb25Nb2R1bGVPcHRpb25zID0ge1xuICAgICAgYm9vdHN0cmFwVmVyc2lvbjogQm9vdHN0cmFwVmVyc2lvbi5Gb3VyXG4gICAgfVxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nQm9vdHN0cmFwRm9ybVZhbGlkYXRpb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENVU1RPTV9FUlJPUl9NRVNTQUdFUyxcbiAgICAgICAgICB1c2VWYWx1ZTogdXNlck9wdGlvbnMuY3VzdG9tRXJyb3JNZXNzYWdlcyB8fCBbXSxcbiAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQk9PVFNUUkFQX1ZFUlNJT04sXG4gICAgICAgICAgdXNlVmFsdWU6IHVzZXJPcHRpb25zLmJvb3RzdHJhcFZlcnNpb25cbiAgICAgICAgfSxcbiAgICAgICAgRXJyb3JNZXNzYWdlU2VydmljZVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==