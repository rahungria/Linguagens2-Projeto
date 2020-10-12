import mongoose, { Schema, Document } from 'mongoose';

import { ISeguro } from "src/model/seguro.model";

type SeguroModel = ISeguro & Document;

const SeguroSchema : Schema<SeguroModel> = new Schema<SeguroModel>({
  // declaração do schema
});

const Seguro = mongoose.model<SeguroModel>('Seguro', SeguroSchema);

export { 
  SeguroModel as SeguroDBModel, 
  Seguro,
}