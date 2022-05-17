import { Module } from '@nestjs/common'
import { ManufacturerRepository } from './manufacturer.repository'
import { ManufacturerResolver } from './resolvers/manufacturer.resolver'

@Module({
  imports: [],
  providers: [ManufacturerRepository, ManufacturerResolver],
})
export class ManufacturerModule {}
