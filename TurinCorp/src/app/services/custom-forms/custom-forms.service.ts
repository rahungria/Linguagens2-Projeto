import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomFormBase } from 'src/app/model/custom-forms/form-base/custom-form-base';

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
      (`http://localhost:3000/api/seguro/${identifier}`)
  }

  asyncFormGroupBuilder<T>(customForms: CustomFormBase<T>[]) : Promise<FormGroup>
  {
    return new Promise<FormGroup>((resolve, reject) => {
      try
      {
        // const group : {[key:string]: AbstractControl} = {}
        let group = new FormGroup({});

        customForms.forEach((cControl: CustomFormBase<T>, index: number, array:CustomFormBase<T>[]) => {
          let val :T = cControl.value;

          if (cControl.validators.required){
            group.registerControl(cControl.key, new FormControl(cControl.value, Validators.required));
          }
          else {
            group.registerControl(cControl.key, new FormControl(cControl.value));
          }
          // group[cControl.key] = (cControl.required ? new FormControl(val, Validators.required) : new FormControl(val))

        });
        console.log(group);
        resolve(group)
      }
      catch (err)
      {
        reject(err);
      }
    });
  }

  formGroupBuilder<T>(customForms: CustomFormBase<T>[]) : FormGroup
  {
      const group : {[key:string]: AbstractControl} = {}

      let formgroup : FormGroup = new FormGroup({});

      customForms.forEach((cControl: CustomFormBase<T>, index: number, array:CustomFormBase<T>[]) => {
        let val: T = cControl.value;
        // group[cControl.key] = (cControl.required ? new FormControl(val, Validators.required) : new FormControl(val))
        (cControl.validators.required ? formgroup.registerControl(cControl.key, new FormControl(cControl.value, [Validators.required])) : formgroup.registerControl(cControl.key, new FormControl(cControl.value)))
      });
      console.log(formgroup);

      return formgroup;
  }
}
