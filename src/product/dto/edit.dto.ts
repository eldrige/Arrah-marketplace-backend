import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

@InputType()
export class EditDto {
  @Field()
  @IsInt()
  @IsNotEmpty()
  id: number;

  @Field({ nullable: true })
  @IsString()
  name: string;

  @Field({ nullable: true })
  @IsString()
  image: string;

  @Field({ nullable: true })
  @IsInt()
  amount: number;

  @Field({ nullable: true })
  @IsString()
  currency: string;
}
