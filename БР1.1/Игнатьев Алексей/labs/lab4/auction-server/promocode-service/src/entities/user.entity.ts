import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { UserDetailDto } from '../dto/user-detail.dto';
import { IsOptional } from 'class-validator';
import { AddressEntity } from './address.entity';
import { IpDetailEntity } from './ip-detail.entity';

export class UserEntity implements User {
  @ApiProperty({ description: 'ID пользователя' })
  user_id: number;
  @ApiProperty({ description: 'Дата создания' })
  created_at: Date;
  @ApiProperty({ description: 'Дата обновления' })
  updated_at: Date;
  @ApiProperty({ description: 'Email', required: false, type: String })
  email: string | null;
  @ApiProperty({
    description: 'Имя пользователя',
    required: false,
    type: String,
  })
  username: string | null;
  @ApiProperty({
    description: 'URL изображения',
    required: false,
    type: String,
  })
  avatar_url: string | null;
  @ApiProperty({ description: 'Язык', required: false, type: String })
  language: string | null;
  @ApiProperty({
    description: 'Получать промо-рассылки',
    required: false,
    type: Boolean,
  })
  mail_promo: boolean;
  @ApiProperty({
    description: 'Получать результаты аукционов',
    required: false,
    type: Boolean,
  })
  mail_rate_result: boolean;
  @ApiProperty({
    description: 'Получать новые аукционы',
    required: false,
    type: Boolean,
  })
  mail_new_auctions: boolean;
  @ApiProperty({
    description: 'Получать промо-рассылки',
    required: false,
    type: Boolean,
  })
  mail_confirmed: boolean;
  @ApiProperty({ description: 'Имя', required: false, type: String })
  first_name: string | null;
  @ApiProperty({ description: 'Instagram', required: false, type: String })
  instagram: string | null;
  @ApiProperty({ description: 'Номер телефона', required: false, type: String })
  phone_number: string | null;
  @ApiProperty({ description: 'Фамилия', required: false, type: String })
  last_name: string | null;
  @ApiProperty({ description: 'Баланс RATO', required: false, type: Number })
  rato_balance: number;
  @ApiProperty({ description: 'Баланс Бонусов', required: false, type: Number })
  bonus_balance: number;
  @ApiProperty({ description: 'Адрес', required: false, type: AddressEntity })
  address: AddressEntity | null;
  @ApiProperty({ description: 'Код реферала', required: false, type: String })
  referral_code: string | null;
  @ApiProperty({
    description: 'Сумма бесплатных спинов',
    required: false,
    type: Number,
  })
  free_spin_amount: number;
  @ApiProperty({
    description: 'Статистика',
    required: false,
    type: UserDetailDto,
  })
  stats?: UserDetailDto;
  @ApiProperty({
    description: 'IP адрес',
    required: false,
    type: String,
  })
  ip_address: string | null;
  @ApiProperty({
    description: 'Является ли ботом',
    required: false,
    type: Boolean,
  })
  is_bot: boolean;
  @ApiProperty({
    description: 'IP адрес',
    required: false,
    type: IpDetailEntity,
  })
  @IsOptional()
  ip_detail?: IpDetailEntity | null;
}
