import { ApiProperty } from '@nestjs/swagger';
import { PaginatedResponse } from 'src/common/entities/pagination.entity';

export class ReferralEntity {
  @ApiProperty({ description: 'ID реферала' })
  referral_id: number;
  @ApiProperty({
    description: 'Имя пользователя',
    required: false,
    nullable: true,
    type: String,
  })
  username: string | null;
  @ApiProperty({
    description: 'Имя',
    required: false,
    nullable: true,
    type: String,
  })
  first_name: string | null;
  @ApiProperty({
    description: 'Фамилия',
    required: false,
    nullable: true,
    type: String,
  })
  last_name: string | null;
  @ApiProperty({
    description: 'Instagram',
    required: false,
    nullable: true,
    type: String,
  })
  instagram: string | null;
}

export class ReferralResponseEntity extends PaginatedResponse {
  @ApiProperty({ type: [ReferralEntity] })
  items: ReferralEntity[];
}
