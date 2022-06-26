import { Body, Controller, Get, Post } from '@nestjs/common';
import { Financas } from '../models/financas';
import { FinancaService } from '../services/financas.service';
import { EnumApiTags } from 'src/financas/enums/api-tags';
import { ApiTags } from '@nestjs/swagger';

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
