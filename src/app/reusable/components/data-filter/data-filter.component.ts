import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'ev-data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.scss'],
})
export class DataFilterComponent implements OnInit {
  @Input() title: any;
  @Input() selectOptions: any;
  @Input() settings: any;
  @Input() dataPoints: any;
  isDesiable: boolean;

  consolidatedForm: FormGroup;
  accountwiseForm: FormGroup;
  submitted = false;
  selectedCountryAdvanced: any[];
  filteredCountries: any[];
  countries :any[];

  streets: string[] = ['2019', '2020', '2021'];
 
  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.consolidatedForm = this.formBuilder.group({
      yearList: ['', Validators.required],
      selectFormat: ['yearly',Validators.required]
    });
  this.accountwiseForm = this.formBuilder.group({
    accountList: ['', Validators.required],
    yearList: ['', Validators.required],
    selectFormat: ['yearly',Validators.required]
    });

    if(this.title == 'News and Events') {
      this.isDesiable = false
    }else {
      this.isDesiable = false //added to hide consolidated and account wise kebab menu in graph headers
    }
    this.countries = [
      {"name": "Honduras", "code": "HN"}, 
      {"name": "Hong Kong", "code": "HK"}, 
      {"name": "Hungary", "code": "HU"}, 
      {"name": "Iceland", "code": "IS"}, 
      {"name": "India", "code": "IN"}, 
    ];
  }
  filterCountry(event) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;
    for(let i = 0; i < this.countries.length; i++) {
        let country = this.countries[i];
        if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
        }
    }
    
    this.filteredCountries = filtered;
}

  onSubmit() {
    this.submitted = true;
    if (this.consolidatedForm.invalid) {
        return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.consolidatedForm.value))
}
onSubmitAccountInfo(){
  this.submitted = true;
  if (this.accountwiseForm.invalid) {
    return;
}
alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.accountwiseForm.value))
}
onCancel(){
  this.consolidatedForm.reset();
}
onCancelAccountInfo(){
  this.accountwiseForm.reset();
}

}
