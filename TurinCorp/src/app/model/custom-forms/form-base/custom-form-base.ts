export class CustomFormBase <T>{
  value: T;
  key: string;
  label: string;
  order: number;
  controlType: string;
  type: string;
  multiple: string;
  options: {key: string, value: string}[];
  hint: string;
  error: string;
  validators: {
    // required?: boolean;
    // email?: boolean;
    [key: string]: boolean;
  }; // maybe find better way than if (form.validators.required) ...


  constructor( options: {
    value?: T;
    key?: string;
    label?: string;
    order?: number;
    controlType?: string;
    type?: string;
    multiple?: boolean;
    hint?: string;
    error?: string;
    options?: {key: string, value: string}[];
    validators?: {required?: boolean, email?: boolean} // ou {[key: string]: boolean} e so ir adicionando?
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.validators = options.validators;
    this.hint = options.hint;
    this.error = options.error;
  }
}
