import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule, Validators} from "@angular/forms";
import {phoneNumberValidator} from "../../services/phone-validator.service";
import {emailValidator} from "../../services/email-validator.service";
import {QuoteService} from "../../shared/services/quote.service";
import {NgxBootstrapSliderService} from "ngx-bootstrap-slider";
import {concat} from "rxjs";
import {Quote} from "../../shared/models/quote";
import {QuoteModel} from "../../shared/models/quote.model";



@Component({
  selector: 'app-contact',
  templateUrl: './app-contact.component.html',
  styleUrls: ['./app-contact.component.css']
})
export class ContactComponent implements OnInit {

  quote: Quote = new QuoteModel(QuoteModel.DEFAULT_CONFIG);
  isSubmitted: boolean = false;
  quoteForm: FormGroup;
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
  budgets: any = ['Slide for budget amount'];
  timelines: any = ['1-3 Months', '3-6 Months', '6+ Months'];


  constructor(private quoteService: QuoteService) {
    this.quoteForm = new FormGroup({
      /**------Personal Form -----**/
      firstName: new FormControl('', [
        Validators.required, Validators.min(2), Validators.pattern(/^[a-zA-Z]*$/)]),
      lastName: new FormControl('', [
        Validators.required, Validators.min(2), Validators.pattern(/^[a-zA-Z]*$/)]),
      email: new FormControl('', [Validators.required, emailValidator]),
      number: new FormControl('', [Validators.required, phoneNumberValidator]),
      city: new FormControl('', [
        Validators.required, Validators.min(2), Validators.pattern(/^[a-z\sA-Z]*$/)]),
      state: new FormControl('', Validators.required),
      /**------Business Form -----**/
      venture: new FormControl(''),
      businessName: new FormControl('', [
        Validators.min(2), Validators.pattern(/^[a-zA-Z]*$/)]),
      businessURL: new FormControl('', [Validators.min(2), Validators.pattern(/^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/)]),
      projectType: new FormControl(''),
      businessType: new FormControl(''),
      budget: new FormControl('', Validators.required),
      timeline: new FormControl('', Validators.required),
      projectDescription: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {


  }

  public createQuote(newQuote) {
    if (newQuote !== null && newQuote !== undefined) {
      this.quoteService.createQuote(newQuote).subscribe(newlyCreatedQuote => {
        // TODO should have a new object with IDs populated through out the object graph.
        console.log('newly created quote: ' + newlyCreatedQuote, newlyCreatedQuote);
        console.log(newQuote.firstName);
        alert('Sucessfully submitted quote');

      }, error => {
        // TODO should display error message at top of quote page.
        console.log('error: ' + error, error);
      });
      console.log(this.quoteForm);
    }
  }



  get number() {
    return this.quoteForm.get('number')
  }

  get state() {
    return this.quoteForm.get('state')
  }

  changeState(e) {
    this.states.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeProjectType(e) {
    this.projects.setValue(e.target.value, {
      onlySelf: true
    })
  }



  get budget() {
    return this.quoteForm.get('budget')
  }

  changeBudget(e) {
    this.budgets.setValue(e.target.value, {
      onlySelf: true
    });

  }

  get timeline() {
    return this.quoteForm.get('timeline')
  }

  changeTimeline(e) {
    this.timelines.setValue(e.target.value, {
      onlySelf: true
    })
  }

  public onSubmit(): boolean {
    this.isSubmitted = true;
    if (!this.quoteForm.valid) {
      return false;
    } else {
      this.createQuote(this.quote);
    }
  }

  public changeBudgetOnScrollSmall() {
    const newSmall = 'Small'.concat((': ') + this.value[0] + (' - $30,000'));
    this.budgets.splice(0, 1, newSmall)

  }


  public changeBudgetOnScrollMedium() {
    const newMed = 'Medium'.concat((': ') + this.value[0] + (' - $60,000'));
    this.budgets.splice(0, 1, newMed)
  }

  public changeBudgetOnScrollLarge() {
    const newLarge = 'Large'.concat((': ') + this.value[0] + (' - $100,000'));
    this.budgets.splice(0, 1, newLarge)
  }

  public changeTimelineOnScrollSmall() {
    this.timeline.setValue(this.timelines[0]);
  }

  public changeTimelineOnScrollMedium() {
    this.timeline.setValue(this.timelines[1]);
  }

  public changeTimelineOnScrollLarge() {
    this.timeline.setValue(this.timelines[2]);
  }

  public change() {
    this.changeBudgetDropdown();
    this.changeTimelineDropdown();
  }

  public changeBudgetDropdown() {
    if (this.value[0] <= 30000) {
      this.changeBudgetOnScrollSmall();
    } else if (this.value[0] > 30 && this.value[1] < 60000) {
      this.changeBudgetOnScrollMedium();
    } else if (this.value[1] > 60000) {
      this.changeBudgetOnScrollLarge();
    }
  }

  public changeTimelineDropdown() {
    if (this.value[0] <= 30000) {
      this.changeTimelineOnScrollSmall();
    } else if (this.value[0] > 30000 && this.value[1] < 60000) {
      this.changeTimelineOnScrollMedium();
    } else if (this.value[1] > 60000) {
      this.changeTimelineOnScrollLarge();
    }
  }


}
