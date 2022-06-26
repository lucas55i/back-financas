import { ApiPropertyOptional } from '@nestjs/swagger';
import { Document } from 'mongoose';

export class Financas extends Document {
  @ApiPropertyOptional({
    name: 'name',
    type: String,
    description: 'name of finances',
    required: false,
  })
  name: string;
}
