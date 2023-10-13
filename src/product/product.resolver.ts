import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ProductDto } from './dto/product.dto';

@Resolver((of) => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query((returns) => [Product])
  products(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Mutation((returns) => Product)
  createProduct(@Args('input') input: ProductDto): Promise<Product> {
    return this.productService.createProduct(input);
  }
}
