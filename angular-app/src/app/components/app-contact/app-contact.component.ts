import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormArray, Validators, FormBuilder} from "@angular/forms";
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
  public newQuote: Quote = null;
  isSubmitted = false;
  contactForm: FormGroup;
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
    this.contactForm = new FormGroup({
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
      budget: new FormControl(''),
      timeline: new FormControl('', Validators.required),
      projectDescription: new FormControl('', Validators.required)
    })
  }

  public createQuote(newQuote){
    if (newQuote !== null && newQuote !== undefined){
      this.quoteService.createQuote(newQuote).subscribe(newlyCreatedQuote => {
        // TODO should have a new object with IDs populated through out the object graph.
      }, error => {
        // TODO should display error message at top of quote page.
      });
      console.log(this.contactForm);
    }
  }

  get firstName() {
    return this.contactForm.get('firstName')
  }

  get lastName() {
    return this.contactForm.get('lastName')
  }

  get number() {
    return this.contactForm.get('number')
  }

  get email() {
    return this.contactForm.get('email')
  }

  get venture() {
    return this.contactForm.get('venture')
  }

  get city() {
    return this.contactForm.get('city')
  }

  get state() {
    return this.contactForm.get('state')
  }

  changeState(e) {
    this.states.setValue(e.target.value, {
      onlySelf: true
    })
  }


  get businessName() {
    return this.contactForm.get('businessName')
  }

  get businessURL() {
    return this.contactForm.get('businessURL')
  }

  get projectType() {
    return this.contactForm.get('projectType')
  }

  changeProjectType(e) {
    this.projects.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get businessType() {
    return this.contactForm.get('businessType')
  }

  changeBusinessType(e) {
    this.businessTypes.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get budget() {
    return this.contactForm.get('budget')
  }

  changeBudget(e) {
    this.budgets.setValue(e.target.value, {
      onlySelf: true
    });

  }

  get timeline() {
    return this.contactForm.get('timeline')
  }

  changeTimeline(e) {
    this.timelines.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get projectDescription() {
    return this.contactForm.get('projectDescription')
  }

  public onSubmit(): boolean {
    this.isSubmitted = true;
    if (!this.contactForm.valid) {
      return false;
    } else {
     this.createQuote(this.contactForm);
    }
  }

  public changeBudgetOnScrollSmall() {
    const newSmall = 'Small'.concat((': ') + this.value[0] + (' - $30,000' ));
    this.budgets.splice(0, 1, newSmall)

  }


  public changeBudgetOnScrollMedium() {
    const newMed = 'Medium'.concat((': ') + this.value[0] + (' - $60,000' ));
    this.budgets.splice(0, 1, newMed)
  }

  public changeBudgetOnScrollLarge() {
    const newLarge = 'Large'.concat((': ') + this.value[0] + (' - $100,000' ));
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

  public change(){
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
