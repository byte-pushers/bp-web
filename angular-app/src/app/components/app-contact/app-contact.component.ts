import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {phoneNumberValidator} from "../../services/phone-validator.service";
import {emailValidator} from "../../services/email-validator.service";
import {QuoteService} from "../../shared/services/quote.service";
import {NgxBootstrapSliderService} from "ngx-bootstrap-slider";
import {concat} from "rxjs";
import {Quote} from "../../shared/models/quote";


@Component({
  selector: 'app-contact',
  templateUrl: './app-contact.component.html',
  styleUrls: ['./app-contact.component.css']
})
export class ContactComponent implements OnInit {
  public quote: Quote = null;
  isSubmitted = false;
  quoteForm = new FormGroup({
    contact: new FormGroup({
      firstName: new FormControl('', [
        Validators.required, Validators.min(2), Validators.pattern(/^[a-zA-Z]*$/)]),
      lastName: new FormControl('', [
        Validators.required, Validators.min(2), Validators.pattern(/^[a-zA-Z]*$/)]),
      email: new FormControl('', [Validators.required, emailValidator]),
      number: new FormControl('', [Validators.required, phoneNumberValidator]),
      address: new FormGroup({
        city: new FormControl('', [
          Validators.required, Validators.min(2), Validators.pattern(/^[a-z\sA-Z]*$/)]),
        state: new FormControl('', Validators.required),
        zip: new FormControl(''),
        street: new FormControl(''),
        country: new FormControl('')
      }),
    }),
    company: new FormGroup({
      name: new FormControl('', [
        Validators.required, Validators.min(2), Validators.pattern(/^[a-zA-Z]*$/)]),
      type: new FormControl(''),
      budget: new FormGroup({
        min: new FormControl(''),
        max: new FormControl('')
      }),
      url: new FormControl('', [Validators.min(2), Validators.pattern(/^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/)]),
      timeline: new FormGroup({
        min: new FormControl(''),
        max: new FormControl('')
      }),
      desc: new FormControl(''),
      est: new FormControl('')
    })
  });
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
  timelines: any = ['1-3 Months', '3-6 Months', '6+ Months'];


  constructor(public quoteService: QuoteService) {

  }

  ngOnInit() {

  }

  public createQuote(newQuote){
    newQuote = this.quoteForm.value;
    if (newQuote !== null && newQuote !== undefined){
      this.quoteService.createQuote(newQuote).subscribe(newlyCreatedQuote => {
        // TODO should have a new object with IDs populated through out the object graph.
        console.log('newly created quote: ' + newlyCreatedQuote, newlyCreatedQuote);
        console.log(newQuote.firstName)
        alert('Sucessfully submitted quote');

      }, error => {
        // TODO should display error message at top of quote page.
        console.log('error: ' + error, error);
      });
      console.log(this.quoteForm);
    }
  }

  get firstName() {
    return this.quoteForm.get(['contact', 'firstName']);
  }

  get lastName() {
    return this.quoteForm.get(['contact', 'lastName']);
  }

  get number() {
    return this.quoteForm.get(['contact', 'number']);
  }

  get email() {
    return this.quoteForm.get(['contact', 'email']);
  }

  get venture() {
    return this.quoteForm.get(['company', 'venture']);
  }

  get city() {
    return this.quoteForm.get(['contact', 'address', 'city']);
  }

  get state() {
    return this.quoteForm.get(['contact', 'address', 'state']);
  }

  changeState(e) {
    this.states.setValue(e.target.value, {
      onlySelf: true
    });
  }


  get name() {
    return this.quoteForm.get(['company', 'name']);
  }

  get url() {
    return this.quoteForm.get(['company', 'url']);
  }

  get type() {
    return this.quoteForm.get(['company', 'type']);
  }

  changeProjectType(e) {
    this.projects.setValue(e.target.value, {
      onlySelf: true
    });
  }

  get est() {
    return this.quoteForm.get(['company', 'type']);
  }

  changeBusinessType(e) {
    this.businessTypes.setValue(e.target.value, {
      onlySelf: true
    });
  }

  get budget() {
    return this.quoteForm.get(['company', 'est']);
  }

  changeBudget(e) {
    this.budgets.setValue(e.target.value, {
      onlySelf: true
    });

  }

  get timeline() {
    return this.quoteForm.get(['company', 'timeline']);
  }

  changeTimeline(e) {
    this.timelines.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get desc() {
    return this.quoteForm.get(['company', 'desc']);
  }

  public onSubmit(): boolean {
    this.isSubmitted = true;
    if (!this.quoteForm.valid) {
      return false;
    } else {
      this.createQuote(this.quote);
    }
  }

  /*public changeBudgetOnScrollSmall() {
    const newSmall = 'Small'.concat((': ') + this.value[0] + (' - $30,000' ));
    this.budgets.splice(0, 1, newSmall);

  }


  public changeBudgetOnScrollMedium() {
    const newMed = 'Medium'.concat((': ') + this.value[0] + (' - $60,000' ));
    this.budgets.splice(0, 1, newMed);
  }

  public changeBudgetOnScrollLarge() {
    const newLarge = 'Large'.concat((': ') + this.value[0] + (' - $100,000' ));
    this.budgets.splice(0, 1, newLarge);
  }

  public changeTimelineOnScrollSmall() {
    this.timeline.setValue(this.timelines[0]);
  }

  public changeTimelineOnScrollMedium() {
    this.timeline.setValue(this.timelines[1]);
  }

  public changeTimelineOnScrollLarge() {
    this.timeline.setValue(this.timelines[2]);
  }*/

  /*  public change() {
      this.changeBudgetDropdown();
      this.changeTimelineDropdown();
    }*/

  /*  public changeBudgetDropdown() {
      if (this.value[0] <= 30000) {
        this.changeBudgetOnScrollSmall();
      } else if (this.value[0] > 30 && this.value[1] < 60000) {
        this.changeBudgetOnScrollMedium();
      } else if (this.value[1] > 60000) {
        this.changeBudgetOnScrollLarge();
      }
    }*/

  /*  public changeTimelineDropdown() {
      if (this.value[0] <= 30000) {
        this.changeTimelineOnScrollSmall();
      } else if (this.value[0] > 30000 && this.value[1] < 60000) {
        this.changeTimelineOnScrollMedium();
      } else if (this.value[1] > 60000) {
        this.changeTimelineOnScrollLarge();
      }
    }*/


}
