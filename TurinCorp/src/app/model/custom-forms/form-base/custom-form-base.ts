export class CustomFormBase <T>{
  value: T;
  key: string;
  label: string;
  order: number;
  controlType: string;
  type: string;
  options: {key: string, value: string}[];
  validators: {
    required?: boolean;
    email?: boolean;
  }; // maybe find better way than if (form.validators.required) ...

  constructor( options: {
    value?: T;
    key?: string;
    label?: string;
    required?: boolean;
    order?: number;
    controlType?: string;
    type?: string;
    options?: {key: string, value: string}[];
    validators?: {required?: boolean, email?: boolean}
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.validators = options.validators;
  }
}
