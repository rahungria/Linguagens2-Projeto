import mongoose, { Document, Schema } from "mongoose";

import { ISeguroForm } from "@model/seguroForm.model";

type SeguroFormModel = ISeguroForm<string> & Document;

const SeguroFormSchemaValidators = new Schema (
  { // validators to be added to validate Form
    required: {type: Boolean, required: false},
    email: {type: Boolean, required: false},
    cpf: {type: Boolean, required: false},
    year: {type: Boolean, required: false},
  }
)

const SeguroFormSchemaOptions = new Schema(
  { // multiple options possible for dropdown
    key: String,
    value: String,
  }
)

const SeguroFormSchemaContent = new Schema(
  {
    value: {type: String, required: true}, // Form Control default value
    key: {type: String, required: true}, // formcontrolname, to identify in the form group
    label: {type: String, required: true}, // label to place on the input
    order: {type: Number, required: true}, // order to be displayed in the form group
    controlType: {type: String, required: true}, // type of the input (i.e.: 'dropdown', 'text' ) only these 2 supported yet
    type: {type: String, required: true}, // html input tag ('textbox', 'email', 'color', 'date', etc)
    hint: {type: String, required: false}, // Hint to be displayed
    error: {type: String, required: false}, // Error to be displayed 
    
    // MATCH CLOSELY WITH THE MODEL!!!
    validators: SeguroFormSchemaValidators,

    // Info for dropdown
    multiple: {type: Boolean, required: false}, // multiple dropdown select (doesn't work yet)
    options: [SeguroFormSchemaOptions]
  }
)

const SeguroFormSchema : Schema<SeguroFormModel> = new Schema<SeguroFormModel>(
  {
    identifier: {type: String, required: true, unique: true},
    // one identifier ('auto', 'vida'), varios controls
    controls: [SeguroFormSchemaContent]
  }
);

let SeguroFormMongoModel = mongoose.model<SeguroFormModel>('SeguroForm', SeguroFormSchema);

export { SeguroFormModel, SeguroFormMongoModel }
