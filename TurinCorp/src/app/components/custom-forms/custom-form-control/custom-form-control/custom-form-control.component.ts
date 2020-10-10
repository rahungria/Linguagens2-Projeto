import { Component, Input, OnInit } from '@angular/core';
import { CustomFormBase } from 'src/app/model/custom-forms/form-base/custom-form-base';

@Component({
  selector: 'app-custom-form-control',
  templateUrl: './custom-form-control.component.html',
  styleUrls: ['./custom-form-control.component.css']
})
export class CustomFormControlComponent implements OnInit {

  @Input('custom-fc')
  customFormControl : CustomFormBase<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
