import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import { CustomFormBase } from 'src/app/model/custom-forms/form-base/custom-form-base';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomFormsService {

  // TODO:
  // CREATE DYNAMIC FORM CONTROL COMPONENT
  // CREATE DYNAMIC FORM GROUP COMPONENT TO LOOP THROUGH INPUTED DYNAMIC FORM CONTROL
  constructor(private http: HttpClient) {
  }

  /**
   * @param identifier identifier for the insurance model on the backend
   * @returns Observable of the HTTP GET REQUEST
   */
  getCustomForm(identifier: string)
  {
    return this.http.get
    <{form: CustomFormBase<string>[],
      statusCode: number,
      message: string}>
      (`${environment.protocol}://${environment.api_uri}/api/seguro/${identifier}`)
  }

  submitForm(formValue:any) {
    return this.http.post
    <{message: string,
    statusCode: number}>
    (`${environment.protocol}://${environment.api_uri}/api/seguro/answer`, formValue)
  }

  asyncFormGroupBuilder<T>(customForms: CustomFormBase<T>[]) : Promise<FormGroup>
  {
    return new Promise<FormGroup>((resolve, reject) => {
      try
      {
        let formgroup = new FormGroup({});

        customForms.forEach((cControl: CustomFormBase<T>, index: number, array:CustomFormBase<T>[]) => {

          let validators : ValidatorFn[] = [];
          if (cControl.validators.required){
            validators.push(Validators.required);
          }
          if (cControl.validators.email){
            validators.push(Validators.email);
          }
          formgroup.registerControl(cControl.key, new FormControl(cControl.value, validators));
        });
        resolve(formgroup);
      }
      catch (err)
      {
        reject(err);
      }
    });
  }

  formGroupBuilder<T>(customForms: CustomFormBase<T>[]) : FormGroup
  {
      let formgroup : FormGroup = new FormGroup({});

      customForms.forEach((cControl: CustomFormBase<T>, index: number, array:CustomFormBase<T>[]) => {

        let validators : ValidatorFn[] = [];
        if (cControl.validators.required){
          validators.push(Validators.required);
        }
        if (cControl.validators.email){
          validators.push(Validators.email);
        }
        formgroup.registerControl(cControl.key, new FormControl(cControl.value, validators));
        // (cControl.validators.required ? formgroup.registerControl(cControl.key, new FormControl(cControl.value, [Validators.required])) : formgroup.registerControl(cControl.key, new FormControl(cControl.value)))
      });
      console.log(formgroup);

      return formgroup;
  }
}
