import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {QuoteService} from '../../shared/services/quote.service';
import {Quote} from '../../shared/models/quote';
import {QuoteModel} from '../../shared/models/quote.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {AppAlertOverlayModalService} from '../../shared/components/app-alert-overlay-modal.component/app-alert-overlay-modal.service';
import {ScrollToService} from '../../services/scroll-to.service';
import {AppAlertOverlayModalComponent} from '../../shared/components/app-alert-overlay-modal.component/app-alert-overlay-modal.component';
import {ComponentType} from '@angular/cdk/portal/portal';
import {StateNameService} from '../../services/state-name.service';


@Component({
  selector: 'app-contact',
  templateUrl: './app-contact.component.html',
  styleUrls: ['./app-contact.component.css']
})
export class ContactComponent implements OnInit {
  public errorMessage: string;
  public errorMessages: [string?] = ['Phone number is invalid.'];
  public showConfirmation = false;
  public phone: { number: string } = {number: ''};

  constructor(private quoteService: QuoteService,
              private spinner: NgxSpinnerService,
              private appAlertOverlayModalService: AppAlertOverlayModalService,
              public stateNameService: StateNameService,
              private scrollToService: ScrollToService) {

  }

  @ViewChild('quoteForm') quoteForm: any;
  @ViewChild('phoneNumber') phoneNumber: any;
  public quote: Quote = new QuoteModel(QuoteModel.DEFAULT_CONFIG);
  hidePersonal = false;
  hidePersonalBtn = true;
  hideBusiness = false;
  hideBusinessBtn = true;
  isSubmitted = false;
  projects: any = ['Business To Business (B2B)', 'Business To Consumer (B2C)', 'Custom App Development', 'Other'];
  projectPlatforms: any = ['Mobile', 'Desktop', 'Cloud', 'Web', 'Other'];
  value: any = [0, 105000];
  budgets: any = ['Slide for budget amount'];
  timelines: any = ['Slide for time frame'];
  timeframe: any = [0, 39];
  years = [];
  foundations: any = ['New Business', 'Existing Business'];

  ngOnInit() {
    this.years = this.calculateYears(+new Date().getFullYear(), 40);
    this.years.push('Older than 1980');
  }

  public calculateYears(yearList: number, yearsSpan: number): any [] {
    const yearArray = [];
    yearArray.push(yearList);
    for (let i = 1; i < yearsSpan; i++) {
      yearArray.push(yearList - i);
    }
    return yearArray;
  }


  public isMobileResolution(): boolean {
    let isMobileResolution = false;

    if (window.innerWidth < 768) {
      isMobileResolution = true;
    } else {
      isMobileResolution = false;
    }

    return isMobileResolution;
  }

  public onSubmit(): void {
    this.isSubmitted = true;

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
    document.getElementById('successTop').scrollIntoView();
  }

  public onSubmitBackToTopMobile() {
    document.getElementById('successTop').scrollIntoView();
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
    this.spinner.show();
    if (this.quote !== null && this.quote !== undefined) {
      this.quote.contact.phone.number = this.phoneNumber.control.value;
      this.quoteService.createQuote(this.quote).subscribe(newlyCreatedQuote => {
        // TODO should have a new object with IDs populated through out the object graph.
        console.log('newly created quote: ' + newlyCreatedQuote, newlyCreatedQuote);
        this.showConfirmation = true;
        this.spinner.hide();

        // TODO: Maybe we don't need this logic.
        if (this.isMobileResolution()) {
            this.onSubmitBackToTopMobile();
          } else {
            this.onSubmitBackToTopDesktop();
          }
      }, error => {
        // TODO should display error message at top of quote page.
        console.log('error: ' + error, error);
        this.errorMessages.push('Account was not created, internal error.');

        if (this.isMobileResolution()) {
          this.showOverlayModal(this.errorMessages[0]);
        }

        this.spinner.hide();
      });
    }
  }

  public showOverlayModal(message?: string) {
    const component: ComponentType<AppAlertOverlayModalComponent> = AppAlertOverlayModalComponent;
    this.appAlertOverlayModalService.setMessage(message);
    this.appAlertOverlayModalService.open(component);
  }

  public changeTimeline() {
    const timeFrameMin = this.timeframe[0];
    const timeFrameMax = this.timeframe[1];
    const newBudget = 'Range: '.concat(timeFrameMin + (' Months - ') + timeFrameMax + (' Months'));
    const newBudgetTop = 'Range: '.concat(timeFrameMin + (' Months - ') + timeFrameMax + (' Months and up'));

    if (timeFrameMax <= 32) {
      this.timelines.splice(0, 1, newBudget);
    } else {
      this.timelines.splice(0, 1, newBudgetTop);
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
    const newBudget = 'Range: '.concat(('$ ') + budgetMin + ' - ' + ('$ ') + budgetMax);
    const newBudgetTop = 'Range: '.concat(('$ ') + budgetMin + ' - ' + ('$ ') + budgetMax + (' and up'));

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
}
