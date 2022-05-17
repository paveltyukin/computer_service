import { Query, Resolver } from '@nestjs/graphql'
import { Device } from '../device'
import { Inject } from '@nestjs/common'
import { PrismaService } from '../../../prisma/prisma.service'

@Resolver('Manufacturer')
export class DeviceResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(() => [Device], { nullable: true })
  async allUsers() {
    return this.prismaService.manufacturer.findMany()
  }
}
