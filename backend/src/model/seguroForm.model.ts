interface ISeguroForm <T>
{
  identifier: string,
  //campo adicional de Identificação para o DB
  controls: {
    //matching CustomFormBase from front end
    value: T;
    key: string;
    label: string;
    order: number;
    controlType: string;
    type: string;
    multiple: string;
    options : {
      key: string,
      value: string,
    }[];
    hint: string;
    error: string;
    validators: { //ADD MORE AS NEED ARISES
      required?: boolean,
      email?: boolean,
      cpf?: boolean, 
      year?: boolean,
    }
  }[] // multiple possible controls per form
}

export { ISeguroForm }