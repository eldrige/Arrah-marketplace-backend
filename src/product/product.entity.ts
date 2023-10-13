import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  image: string;

  @Field((type) => Int)
  amount: number;

  @Field()
  currency: string;
}
