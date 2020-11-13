import { addForm } from '@controller/seguro.controller';
import mongoose, { Schema, Document } from 'mongoose';

import { ISeguro } from "src/model/seguro.model";

type SeguroModel = ISeguro & Document;

const SeguroSchema : Schema<SeguroModel> = new Schema<SeguroModel>({
  name: {type: String, required: true, unique: true},
  imageurl: {type: String, required: true},
  brief: {type: String, required: true},
  description: {type: String, required: true},
});

const Seguro = mongoose.model<SeguroModel>('Seguro', SeguroSchema);

export { 
  SeguroModel as SeguroDBModel, 
  Seguro,
}