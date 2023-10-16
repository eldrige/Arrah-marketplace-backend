import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class GetProductsDto {
  @Field({ nullable: true })
  @IsString()
  take: number;

  @Field({ nullable: true })
  @IsString()
  skip: number;
}
