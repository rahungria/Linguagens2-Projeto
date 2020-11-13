import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private customFormsService: CustomFormsService, private route:ActivatedRoute) { }

  ngOnInit(): void
  {
    this.isLoading = true;
    this.route.paramMap.subscribe( params => {
      if (params.has("id")){
        this.fetchFormData(params.get("id"))
      }
    });
  }

  fetchFormData(formId: string)
  {
    this.isLoading = true;

    this.customFormsService.getCustomForm(formId)
      .subscribe(
        (res) => {
          this.customFBs = res.content.form.controls;

          this.customFBs.sort( (a,b) => {
            return a.order - b.order;
          })

          this.customFormsService.asyncFormGroupBuilder<string>([...this.customFBs])
          .then((formGroup) => {
            this.dynForm = formGroup;
            this.isLoading = false;
          })
        },
        (error) => {
          console.log(error.error);
          // redirect to some 404
        }
      )
  }

  submitForm(form : FormGroup)
  {
    if (form.invalid){
      return;
    }
    this.customFormsService.submitForm(form.value)
      .subscribe( (res) => {
        console.log(res);
      })
  }

}
