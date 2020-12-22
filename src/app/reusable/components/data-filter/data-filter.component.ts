import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
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

  streets: string[] = ['2019', '2020', '2021'];
  filteredStreets: Observable<string[]>;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.consolidatedForm = this.formBuilder.group({
      yearList: ['', Validators.required],
      selectFormat: ['',Validators.required]
  });
  this.accountwiseForm = this.formBuilder.group({
    accountList: ['', Validators.required],
    yearList: ['', Validators.required],
    selectFormat: ['',Validators.required]
});

    if(this.title == 'News and Events') {
      this.isDesiable = false
    }else {this.isDesiable = true}
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
