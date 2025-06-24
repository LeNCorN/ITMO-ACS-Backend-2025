import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { RatoTaskType, RewardType } from '@prisma/client';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ enum: RatoTaskType, description: 'Тип задачи' })
  @IsNotEmpty()
  type: RatoTaskType;
  @ApiPropertyOptional({
    description: 'Данные задачи',
    type: String,
    required: false,
  })
  @IsString()
  @IsOptional()
  data?: string;
  @ApiProperty({ enum: RewardType, description: 'Тип награды' })
  @IsNotEmpty()
  reward_type: RewardType;
  @ApiProperty({ description: 'Сумма награды' })
  @IsNotEmpty()
  reward_amount: number;
}
