import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {QuoteService} from "../../shared/services/quote.service";
import {Quote} from "../../shared/models/quote";
import {QuoteModel} from "../../shared/models/quote.model";


@Component({
  selector: 'app-contact',
  templateUrl: './app-contact.component.html',
  styleUrls: ['./app-contact.component.css']
})
export class ContactComponent implements OnInit {
  // @ts-ignore
  @ViewChild('quoteForm') quoteForm: any;
  public quote: Quote = new QuoteModel(QuoteModel.DEFAULT_CONFIG);
  isSubmitted = false;
  states: any = [
    'Select A State',
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'];
  projects: any = ['Select An Option', 'Option 1', 'Option 2', 'Option 3'];
  businessTypes: any = ['Select An Option', 'Option 1', 'Option 2', 'Option 3'];
  value: any = [0, 100000];
  budgets: any  = ['Slide for budget amount'];
  timelines: any = ['Slide for time frame'];
  timeframe: any = [0, 35];

  constructor(private quoteService: QuoteService) {

  }

  ngOnInit() {

  }

  public isMobileResolution(): boolean {
    let isMobileResolution: boolean = false;

    if (window.innerWidth < 768) {
      isMobileResolution = true;
    } else {
      isMobileResolution = false;
    }

    return isMobileResolution;
  }

  public onSubmit(): boolean {
    this.isSubmitted = true;
    if (!this.quoteForm.valid) {
      return false;
    } else {
      this.saveQuote();
    }
  }

  public reset(form: NgForm)  {
    form.resetForm();
  }

  private saveQuote() {
    if (this.quote !== null && this.quote !== undefined){
      this.quoteService.createQuote(this.quote).subscribe(newlyCreatedQuote => {
        // TODO should have a new object with IDs populated through out the object graph.
        console.log('newly created quote: ' + newlyCreatedQuote, newlyCreatedQuote);
      }, error => {
        // TODO should display error message at top of quote page.
        console.log('error: ' + error, error);
      });
    }
  }

  public changeBudget() {
    this.changeBudgetOnScroll();

    if (this.value[1] > 80000) {
      this.addNoCap();
    }
  }
  private addNoCap() {
    this.value[1].concat('and up');
    return this.value[1]
  }

  public changeTimeline() {
    this.changeTimelineDropdown();
  }
  public changeTimelineDropdown() {
    if (this.timeframe !== null && this.timeframe !== undefined) {
      const newMonth = 'Range: '.concat( this.timeframe[0] + (' Months - ') + this.timeframe[1] + (' Months' ));
      this.timelines.splice(0, 1, newMonth);
    }
  }
  public changeBudgetOnScroll() {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    const budgetMin = this.value[0];
    const budgetMax = this.value[1];
    const newBudget = 'Range'.concat((': ') + formatter.format(budgetMin) + ' - ' + formatter.format(budgetMax));
    this.budgets.splice(0, 1, newBudget);
  }

  public changeBudgetNoLimit() {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    const budgetMin = this.value[0];
    const budgetMax = this.value[1];
    const noLimit = 'Range'.concat((': ') + formatter.format(budgetMin) + ' - ' + formatter.format(budgetMax) + 'and up');
    this.budgets.splice(0, 1, noLimit);
  }

}
