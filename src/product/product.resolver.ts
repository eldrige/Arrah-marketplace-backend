import { EditDto } from './dto/edit.dto';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { ProductDto } from './dto/product.dto';
import { GetProductsDto } from './dto/get-products.dto';

@Resolver((of) => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query((returns) => [Product])
  products(@Args('input') input: GetProductsDto): Promise<Product[]> {
    return this.productService.findAll(input.take, input.skip);
  }

  @Query((returns) => Product)
  product(@Args('id') id: number): Promise<Product> {
    return this.productService.findById(id);
  }

  @Mutation((returns) => Product)
  createProduct(@Args('input') input: ProductDto): Promise<Product> {
    return this.productService.createProduct(input);
  }

  @Mutation((returns) => Product)
  editProduct(@Args('input') input: EditDto): Promise<Product> {
    return this.productService.editProduct(input);
  }
}
