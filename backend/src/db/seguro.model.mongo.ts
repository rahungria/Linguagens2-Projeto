import mongoose, { Schema } from 'mongoose';

import { ISeguro } from "src/model/seguro.model";

type SeguroModel = ISeguro & mongoose.Document;

const SeguroSchema : Schema<SeguroModel> = new mongoose.Schema<SeguroModel>({
  // declaração do schema
});

const Seguro = mongoose.model<SeguroModel>('Seguro', SeguroSchema);