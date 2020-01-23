import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormArray, Validators, FormBuilder} from "@angular/forms";
import {phoneNumberValidator} from "../../services/phone-validator.service";
import {emailValidator} from "../../services/email-validator.service";

@Component({
  selector: 'app-contact',
  templateUrl: './app-contact.component.html',
  styleUrls: ['./app-contact.component.css']
})
export class ContactComponent implements OnInit {
  isSubmitted = false;
  contactForm: FormGroup;
  States: any = ['Alabama',
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
  Projects: any = ['Option 1', 'Option 2', 'Option 3'];
  BusinessTypes: any = ['Option 1', 'Option 2', 'Option 3'];
  Budgets: any = ['Small', 'Medium', 'Large'];
  Timelines: any = ['1-3 Months', '3-6 Months', '6+ Months'];

  constructor() {
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
      venture: new FormControl('', Validators.required),
      businessName: new FormControl('', [
        Validators.required, Validators.min(2), Validators.pattern(/^[a-zA-Z]*$/)]),
      businessURL: new FormControl('', [
        Validators.required, Validators.min(2), Validators.pattern(/^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/)]),
      projectType: new FormControl('', Validators.required),
      businessType: new FormControl('', Validators.required),
      budget: new FormControl('', Validators.required),
      timeline: new FormControl('', Validators.required),
      projectDescription: new FormControl('', Validators.required)
    })
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
    this.States.setValue(e.target.value, {
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
    this.Projects.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get businessType() {
    return this.contactForm.get('businessType')
  }

  changeBusinessType(e) {
    this.BusinessTypes.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get budget() {
    return this.contactForm.get('budget')
  }

  changeBudget(e) {
    this.Budgets.setValue(e.target.value, {
      onlySelf: true
    })
  }

  get timeline() {
    return this.contactForm.get('timeline')
  }

  changeTimeline(e) {
    this.Timelines.setValue(e.target.value, {
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
      console.log("Success!")
    }
  }
}
