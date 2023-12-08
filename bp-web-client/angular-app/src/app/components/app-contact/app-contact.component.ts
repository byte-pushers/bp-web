import {
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { QuoteService } from "../../shared/services/quote.service";
import { Quote } from "../../shared/models/quote";
import { QuoteModel } from "../../shared/models/quote.model";
// import { NgxSpinnerService } from "ngx-spinner";
import { AppAlertOverlayModalService } from "../../shared/components/app-alert-overlay-modal.component/app-alert-overlay-modal.service";
import { ScrollToService } from "../../services/scroll-to.service";
import { AppAlertOverlayModalComponent } from "../../shared/components/app-alert-overlay-modal.component/app-alert-overlay-modal.component";
import { ComponentType } from "@angular/cdk/portal";
import { StateNameService } from "../../services/state-name.service";
import { ContactButtonService } from "../../services/contact-button.service";
import { IDeactivateComponent } from "src/app/shared/components/iDeactivate/iDeactivate.component";
import { ActivatedRoute, Router } from "@angular/router";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { PopupModalService } from "src/app/modules/popup-modal/services/popup-modal.service";

import { PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { WindowRef } from "src/app/services/windowRef.service";

import { getWindow, getDocument } from "ssr-window";

@Component({
  selector: "app-contact",
  templateUrl: "./app-contact.component.html",
  styleUrls: ["./app-contact.component.css"],
})
export class ContactComponent
  implements IDeactivateComponent, OnInit, OnDestroy
{
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  public errorMessage: string;
  public errorMessages: [string?] = ["Phone number is invalid."];
  public showConfirmation = false;
  public phone: { number: string } = { number: "" };

  public formStartTime: number = null;
  public formSubmitTime: number = null;

  window = getWindow();
  document = getDocument();

  constructor(
    private quoteService: QuoteService,
    // private spinner: NgxSpinnerService,
    private router: Router,
    private appAlertOverlayModalService: AppAlertOverlayModalService,
    public stateNameService: StateNameService,
    private scrollToService: ScrollToService,
    private contactButtonService: ContactButtonService,
    private popupService: PopupModalService,
    private route: ActivatedRoute // @Inject(PLATFORM_ID) private platformId: any,
  ) // private windowRef: WindowRef
  {}

  @ViewChild("quoteForm") quoteForm: any;
  @ViewChild("phoneNumber") phoneNumber: any;
  public quote: Quote = new QuoteModel(QuoteModel.DEFAULT_CONFIG);
  hidePersonal = false;
  hidePersonalBtn = true;
  hideBusiness = false;
  hideBusinessBtn = true;
  isSubmitted = false;
  projects: any = [
    "Business To Business (B2B)",
    "Business To Consumer (B2C)",
    "Custom App Development",
    "Other",
  ];
  projectPlatforms: any = ["Mobile", "Desktop", "Cloud", "Web", "Other"];
  value: any = [0, 105000];
  budgets: any = ["Slide for budget amount"];
  timelines: any = ["Slide for time frame"];
  timeframe: any = [0, 39];
  years = [];
  foundations: any = ["New Business", "Existing Business"];

  ngOnInit() {
    // if (isPlatformBrowser(this.platformId)) {
    //   console.log(this.windowRef);
    // }
    this.years = this.calculateYears(+new Date().getFullYear(), 40);
    this.years.push("Older than 1980");
    this.setOnContactView(false);
  }

  //Check if there any unsaved data etc. If yes then as for confirmation
  canExit(): boolean {
    if (this.quoteForm.touched) {
      // if (isPlatformBrowser(this.platformId)) {
      //   this.windowRef.nativeWindow.dataLayer =
      //     this.windowRef.nativeWindow.dataLayer || [];
      //   this.windowRef.nativeWindow.dataLayer.push({
      //     event: "formAbandonment",
      //     eventCategory: "Form Abandonment",
      //     eventAction: `User Navigated Away From Request Quote Form`,
      //   });
      // } else {
      this.window.dataLayer = this.window.dataLayer || [];
      this.window.dataLayer.push({
        event: "formAbandonment",
        eventCategory: "Form Abandonment",
        eventAction: `User Navigated Away From Request Quote Form`,
      });
      // }
    }
    return true;
  }

  ngOnDestroy() {
    this.setOnContactView(true);
    this.formStartTime = null;
    this.window.localStorage?.clear();
  }
  public setOnContactView(setView): void {
    this.contactButtonService.isOnContactView(setView);
  }
  public calculateYears(yearList: number, yearsSpan: number): any[] {
    const yearArray = [];
    yearArray.push(yearList);
    for (let i = 1; i < yearsSpan; i++) {
      yearArray.push(yearList - i);
    }
    return yearArray;
  }

  public isMobileResolution(): boolean {
    let isMobileResolution = false;
    // if (!isPlatformBrowser(this.platformId)) {
    if (this.window.innerWidth < 768) {
      isMobileResolution = true;
    } else {
      isMobileResolution = false;
    }
    // }

    return isMobileResolution;
  }

  public onSubmit(): void {
    this.isSubmitted = true;
    this.formSubmitTime = Date.now();
    const formDuration = this.formSubmitTime - this.formStartTime;
    // if (isPlatformBrowser(this.platformId)) {
    //   this.windowRef.nativeWindow.dataLayer.push({
    //     event: "requestQuoteFormSubmitted",
    //     timeFormSubmitted: this.formSubmitTime,
    //     formSubmissionDuration2: formDuration,
    //   });
    // } else {
    this.window.dataLayer.push({
      event: "requestQuoteFormSubmitted",
      timeFormSubmitted: this.formSubmitTime,
      formSubmissionDuration2: formDuration,
    });
    // }
    if (!this.quoteForm.valid) {
      this.isSubmitted = false;
    } else {
      this.saveQuote();
    }
  }
  public backToTop() {
    this.scrollToService.toTopOfPage();
  }

  public onSubmitBackToTopDesktop() {
    document.getElementById("successTop").scrollIntoView();
  }

  public onSubmitBackToTopMobile() {
    document.getElementById("successTop").scrollIntoView();
  }

  public reset(form: NgForm) {
    form.resetForm();
  }

  public retrieveTimeframe(timeframe: number) {
    if (timeframe !== null && timeframe !== undefined) {
      this.quote.getCompany().getTimeline().setMinTimeline(timeframe[0]);
      this.quote.getCompany().getTimeline().setMaxTimeline(timeframe[1]);
    }
  }

  public retrieveBudget(value: number) {
    if (value !== null && value !== undefined) {
      this.quote.getCompany().getBudget().setMinBudget(value[0]);
      this.quote.getCompany().getBudget().setMaxBudget(value[1]);
    }
  }

  private saveQuote() {
    // this.spinner.show();
    if (this.quote !== null && this.quote !== undefined) {
      this.quote.contact.phone.number = this.phoneNumber.control.value;
      this.quoteService.createQuote(this.quote).subscribe(
        (newlyCreatedQuote) => {
          // TODO should have a new object with IDs populated through out the object graph.
          console.log(
            "newly created quote: " + newlyCreatedQuote,
            newlyCreatedQuote
          );
          this.showConfirmation = true;
          // this.spinner.hide();
          this.quoteForm.reset();
          // TODO: Maybe we don't need this logic.
          if (this.isMobileResolution()) {
            this.onSubmitBackToTopMobile();
          } else {
            this.onSubmitBackToTopDesktop();
          }
        },
        (error) => {
          // TODO should display error message at top of quote page.
          this.errorMessages.push("Account was not created, internal error.");

          if (this.isMobileResolution()) {
            this.showOverlayModal(this.errorMessages[0]);
          }

          // this.spinner.hide();
          this.quoteForm.reset();
          this.popupService.throwError({
            type: "Error",
            title:
              "An error occurred while trying to submit a Request Quote request",
            messages: [`${error.getMessage()}`],
          });
        }
      );
    }
  }

  public showOverlayModal(message?: string) {
    const component: ComponentType<AppAlertOverlayModalComponent> =
      AppAlertOverlayModalComponent;
    this.appAlertOverlayModalService.setMessage(message);
    this.appAlertOverlayModalService.open(component);
  }

  public changeTimeline() {
    const timeFrameMin = this.timeframe[0];
    const timeFrameMax = this.timeframe[1];
    const newTimeline = "".concat(
      timeFrameMin + " mo - " + timeFrameMax + " mo"
    );
    const newTimelineTop = "".concat(
      timeFrameMin + " mo - " + timeFrameMax + " mo or longer"
    );

    if (timeFrameMax <= 32) {
      this.timelines.splice(0, 1, newTimeline);
    } else {
      this.timelines.splice(0, 1, newTimelineTop);
    }

    /* const newMonth = 'Range: '.concat(this.timeframe[0] + (' Months - ') + this.timeframe[1] + (' Months'));
    const newTop = 'Range: '.concat(this.timeframe[0] + (' Months - ') + this.timeframe[1] + (' Months'));
    if (this.timeframe !== null && this.timeframe !== undefined) {

      this.timelines.splice(0, 1, newMonth);
    }*/
  }

  public changeBudgetOnScroll() {
    const budgetMin = this.value[0];
    const budgetMax = this.value[1];
    const newBudget = "".concat("$ " + budgetMin + " - " + "$" + budgetMax);
    const newBudgetTop = "".concat(
      "$ " + budgetMin + " - " + "$" + budgetMax + " and up"
    );

    if (budgetMax <= 97000) {
      this.budgets.splice(0, 1, newBudget);
    } else {
      this.budgets.splice(0, 1, newBudgetTop);
    }
  }

  public togglePersonal(): void {
    if (this.hidePersonal === true) {
      this.hidePersonal = false;
      this.hidePersonalBtn = true;
    } else {
      this.hidePersonal = true;
      this.hidePersonalBtn = false;
    }
  }

  public toggleBusiness(): void {
    if (this.hideBusiness === true) {
      this.hideBusiness = false;
      this.hideBusinessBtn = true;
    } else {
      this.hideBusiness = true;
      this.hideBusinessBtn = false;
    }
  }
  captureStartTime() {
    if (this.formStartTime == null) {
      this.formStartTime = Date.now();
      // if (isPlatformBrowser(this.platformId)) {
      //   console.log(this.windowRef);
      //   this.windowRef.nativeWindow.dataLayer =
      //     this.windowRef.nativeWindow.dataLayer || [];
      //   this.windowRef.nativeWindow.dataLayer.push({
      //     event: "formStarted",
      //     timeFormStarted: this.formStartTime,
      //   });
      // } else {
      this.window.dataLayer = this.window.dataLayer || [];
      this.window.dataLayer.push({
        event: "formStarted",
        timeFormStarted: this.formStartTime,
      });
      // }
    }
  }

  setThemeBGImg() {
    let styles = {
      background: `url('assets/images/contactPage/contactPageSplashBackground.jpg')
        center no-repeat`,
      "background-size": "cover",
    };
    return styles;
  }

  showBorders(): boolean | void {
    let isBorders;
    this.route.queryParams.subscribe((params) => {
      if (params?.showBorder == "true") {
        isBorders = params?.showBorder;
      }
    });
    return isBorders;
  }
}
