import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomFormBase } from 'src/app/model/custom-forms/form-base/custom-form-base';

@Injectable({
  providedIn: 'root'
})
export class CustomFormsService {

  // FLOW
  // 1. http get seguro schema for given id
  // 2. parse json create custom forms
  // 3. build the FormGroup

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
        const group : {[key:string]: AbstractControl} = {}

        customForms.map((cControl: CustomFormBase<T>, index: number, array:CustomFormBase<T>[]) => {
          let val :T = cControl.value;
          group[cControl.key] = (cControl.required ? new FormControl(val, Validators.required) : new FormControl(val))
        });

        resolve(new FormGroup(group))
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

      customForms.map((cControl: CustomFormBase<T>, index: number, array:CustomFormBase<T>[]) => {
        let val: T = cControl.value;
        group[cControl.key] = (cControl.required ? new FormControl(val, Validators.required) : new FormControl(val))
      });

      return new FormGroup(group);
  }
}
