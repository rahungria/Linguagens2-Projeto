import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomFormBase } from 'src/app/model/custom-forms/form-base/custom-form-base';
import { CustomFormsService } from 'src/app/services/custom-forms/custom-forms.service';

@Component({
  selector: 'app-custom-form-group',
  templateUrl: './custom-form-group.component.html',
  styleUrls: ['./custom-form-group.component.css']
})
export class CustomFormGroupComponent implements OnInit {

  dynForm : FormGroup = new FormGroup({});

  customFBs : CustomFormBase<string>[];

  constructor(private customFormsService: CustomFormsService) { }

  ngOnInit(): void
  {
    this.customFBs  = [
      new CustomFormBase({
        label:"Nome",
        key: "Nome",
        required: true,
        type: "textarea",
      }),
      new CustomFormBase({
        label:"E-Mail",
        key: "email",
        required: true,
        type: "text",
      })
  ]

    this.dynForm = this.customFormsService.formGroupBuilder([...this.customFBs]);
    // this.customFormsService.asyncFormGroupBuilder<string>([...this.customFBs])
    //   .then((formGroup) => {
    //     console.log("Formou o form group")
    //     this.dynForm = formGroup;
    //   })
  }

  submitForm(form : FormGroup)
  {
    console.log(form.value)
  }

}
