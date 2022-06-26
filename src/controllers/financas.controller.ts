import { Body, Controller, Get, Post } from '@nestjs/common';
import { Financas } from '../dataBase/models/financas';
import { FinancaService } from '../services/financas.service';
import { ApiTags } from '@nestjs/swagger';
import { EnumApiTags } from 'src/enums/api-tags';

@ApiTags(EnumApiTags.FINANCAS)
@Controller('financas')
export class FinancasController {
  constructor(private financasService: FinancaService) {}

  @Get()
  async getAll(): Promise<Array<Financas>> {
    return this.financasService.getAll();
  }

  @Post()
  async create(@Body() task: Financas): Promise<Financas> {
    return this.financasService.create(task);
  }
}
