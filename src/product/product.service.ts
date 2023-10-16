import { EditDto } from './dto/edit.dto';
import { PrismaService } from './../prisma/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductDto } from './dto/product.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  async findAll(take?: number, skip?: number): Promise<Product[]> {
    const products = await this.prisma.product.findMany({
      take: take || undefined,
      skip: skip || undefined,
    });
    return products;
  }

  async findById(id: number): Promise<Product> {
    const product = await this.prisma.product.findFirstOrThrow({
      where: {
        id: id,
      },
    });
    return product;
  }

  async createProduct(dto: ProductDto): Promise<Product> {
    try {
      const product = await this.prisma.product.create({
        data: dto,
      });

      return product;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async editProduct(dto: EditDto): Promise<Product> {
    try {
      const product = await this.prisma.product.update({
        where: {
          id: dto.id,
        },
        data: {
          amount: dto.amount,
          currency: dto.currency,
          image: dto.image,
          name: dto.name,
        },
      });

      return product;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }
}
