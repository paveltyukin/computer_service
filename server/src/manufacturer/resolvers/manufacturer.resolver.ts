import { Query, Resolver } from '@nestjs/graphql'
import { Manufacturer } from '../manufacturer'
import { Inject } from '@nestjs/common'
import { PrismaService } from '../../../prisma.service'

@Resolver('Manufacturer')
export class ManufacturerResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(() => [Manufacturer], { nullable: true })
  async allUsers() {
    return this.prismaService.manufacturer.findMany()
  }
}
