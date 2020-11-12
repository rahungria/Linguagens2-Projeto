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
    this.route.paramMap.subscribe( params => {
      if (params.has("id")){
        console.log(params);
        this.fetchFormData(params.get("id"))
      }
    });
    // substituir por um valor inputado de fora ou passado de outro jeito
    // até possivel tirar do OnInit se for o caso (handle em uma pagina sem form)
    // this.fetchFormData('auto');
  }

  fetchFormData(formId: string)
  {
    this.isLoading = true;

    this.customFormsService.getCustomForm(formId)
      .subscribe( (res) => {
        if (res.statusCode === 200){
          this.customFBs = res.content.form.controls;

          this.customFBs.sort( (a,b) => {
            return a.order - b.order;
          })

          this.customFormsService.asyncFormGroupBuilder<string>([...this.customFBs])
          .then((formGroup) => {
            this.dynForm = formGroup;
            this.isLoading = false;
          })
        }
        else if (res.statusCode === 404) {
          // identificador usado para buscar seguros nao encontrado no sistema
          //exibir alguma mensagem de erro, navegar para outra pagina etc
          this.isLoading = false;
          console.log(res.message);
        }
        else if (res.statusCode === 400) {
          // algum erro nao identificado ao buscar os dados do banco de dados
          //exibir alguma mensagem de erro, navegar para outra pagina etc
          this.isLoading = false;
          console.log(res.message);
        }
      })
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
