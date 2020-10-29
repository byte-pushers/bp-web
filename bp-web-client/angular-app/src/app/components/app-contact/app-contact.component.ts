import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {QuoteService} from "../../shared/services/quote.service";
import {Quote} from "../../shared/models/quote";
import {QuoteModel} from "../../shared/models/quote.model";
import {add} from "ngx-bootstrap/chronos";
import {$} from "protractor";


@Component({
  selector: 'app-contact',
  templateUrl: './app-contact.component.html',
  styleUrls: ['./app-contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private quoteService: QuoteService) {

  }

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
  budgets: any = ['Slide for budget amount'];
  timelines: any = ['Slide for time frame'];
  timeframe: any = [0, 35];
  years: any = ['1980 and older', 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
foundations: any = ['New Business', 'Existing Business'];
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

  public reset(form: NgForm) {
    form.resetForm();
  }

  private saveQuote() {
    if (this.quote !== null && this.quote !== undefined) {
      this.quoteService.createQuote(this.quote).subscribe(newlyCreatedQuote => {
        // TODO should have a new object with IDs populated through out the object graph.
        console.log('newly created quote: ' + newlyCreatedQuote, newlyCreatedQuote);
      }, error => {
        // TODO should display error message at top of quote page.
        console.log('error: ' + error, error);
      });
    }
  }


  public changeTimeline() {
    if (this.timeframe !== null && this.timeframe !== undefined) {
      const newMonth = 'Range: '.concat(this.timeframe[0] + (' Months - ') + this.timeframe[1] + (' Months'));
      this.timelines.splice(0, 1, newMonth);
    }
  }

  public changeBudgetOnScroll() {

    const budgetMin = this.value[0];
    const budgetMax = this.value[1];
    const newBudget = 'Range'.concat((': ') + ('$ ') + budgetMin + ' - ' + ('$ ') + budgetMax + ' and up');
    this.budgets.splice(0, 1, newBudget);
  }

  public changeEstablishedBusiness() {
    const yearValue = (document.getElementById('year') as HTMLSelectElement).value;
    if (yearValue <= this.years[34]) {
      document.getElementById('newBusiness').setAttribute('checked', 'checked');
      document.getElementById('establishedBusiness').setAttribute('checked', '');
      document.getElementById('establishedBusiness').removeAttribute('checked');
       } else {
      document.getElementById('establishedBusiness').setAttribute('checked', 'checked');
      document.getElementById('newBusiness').setAttribute('checked', '');
      document.getElementById('newBusiness').removeAttribute('checked');
    }
  }

}
