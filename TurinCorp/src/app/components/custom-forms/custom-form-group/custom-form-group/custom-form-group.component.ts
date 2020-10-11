import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
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
  isLoading: boolean = true;

  constructor(private customFormsService: CustomFormsService) { }

  ngOnInit(): void
  {
    this.isLoading = true;

    //get from service->backend
    this.customFBs  = [
      new CustomFormBase({
        label:"E-Mail: ",
        key: "email",
        validators: {
          required: true,
          email: true,
        },
        type: "email",
        controlType: "text",
        order: 2,
        hint: "email para contato",
        error: "POE CERTO DESSA VEZ",
      }),
      new CustomFormBase({
        label:"Nome: ",
        key: "name",
        validators: {
          required: true,
        },
        type: "textbox",
        controlType: "text",
        order: 3,
        hint: "dropando la hint",
        error: "Nome obrigatório",
      }),
      new CustomFormBase({
        label:"Voce da o Cú?: ",
        key: "status da bunda",
        validators: {
          required: true,
        },
        type: "text",
        controlType: "dropdown",
        order: 1,
        hint: "dropdown essencial",
        error: "tem que admitir",
        multiple: true,
        options: [{key: "LABEL1", value:'VAL1'}, {key:'LABEL2', value:"VAL2"}, {key:'LABEL3', value:'VAL3'}]
      }),
  ]
    // sync
    // this.dynForm = this.customFormsService.formGroupBuilder([...this.customFBs]);
    // this.isLoading = false;

    this.customFBs.sort( (a,b) => {
      return a.order - b.order;
    });

    // async
    // this.customFormsService.asyncFormGroupBuilder<string>([...this.customFBs])
    //   .then((formGroup) => {
    //     this.dynForm = formGroup;
    //     this.isLoading = false;
    //   })

    // debug async
    this.customFormsService.asyncFormGroupBuilder<string>([...this.customFBs])
      .then((formGroup) => {
        setTimeout(() => {
          this.dynForm = formGroup;
          this.isLoading = false;
        }, 1500);
      })
  }

  submitForm(form : FormGroup)
  {
    if (form.invalid){
      return;
    }
    console.log(form.value);
  }

}
