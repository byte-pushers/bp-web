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
  states: any = ['Alabama',
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
  projects: any = ['Option 1', 'Option 2', 'Option 3'];
  businessTypes: any = ['Option 1', 'Option 2', 'Option 3'];
  value: any = [0, 100000];
  budgets: any  = ['Slide for budget amount'];
  timelines: any = ['Slide for time frame'];
  timeframe: any = [0, 35];

  constructor(private quoteService: QuoteService) {

  }

  ngOnInit() {

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
      })
    }
  }

  public changeBudget() {
    this.changeBudgetDropdown();
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
  public changeBudgetDropdown() {
    if (this.value[0] <= 30000) {
      this.changeBudgetOnScrollSmall();
    } else if (this.value[0] > 30 && this.value[1] < 60000) {
      this.changeBudgetOnScrollMedium();
    } else if (this.value[1] > 60000 && this.value[1] < 95000) {
      this.changeBudgetOnScrollLarge();
    } else if (this.value[1] === 100000) {
      this.changeBudgetNoLimit();
    }
  }
  public changeBudgetOnScrollSmall() {
    const newSmall = 'Small'.concat((': ') + this.value[0] + (' - $30,000' ));
    this.budgets.splice(0, 1, newSmall);

  }


  public changeBudgetOnScrollMedium() {
    const newMed = 'Medium'.concat((': ') + this.value[0] + (' - $60k' ));
    this.budgets.splice(0, 1, newMed);
  }

  public changeBudgetOnScrollLarge() {
    const newLarge = 'Large'.concat((': ') + this.value[0] + (' - $80k' ));
    this.budgets.splice(0, 1, newLarge);
  }

  public changeBudgetNoLimit() {
    const noLimit = 'Range'.concat((': ') + this.value[0] + (' - $100k and up' ));
    this.budgets.splice(0, 1, noLimit);
  }

}
