import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

@InputType()
export class ProductDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  image: string;

  @Field()
  @IsInt()
  @IsNotEmpty()
  amount: number;

  @Field()
  @IsString()
  @IsNotEmpty()
  currency: string;
}
