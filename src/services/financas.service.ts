import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Financas } from '../dataBase/models/financas';

@Injectable()
export class FinancaService {
  constructor(
    @InjectModel('Financas') private readonly financasModel: Model<Financas>,
  ) {}

  async getAll() {
    return this.financasModel.find().exec();
  }
  async create(financa: Financas) {
    const createFinanca = new this.financasModel(financa);
    return await createFinanca.save();
  }
}
