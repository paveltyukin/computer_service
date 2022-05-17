import { Module } from '@nestjs/common'
import { DeviceRepository } from './device.repository'
import { DeviceResolver } from './resolvers/device.resolver'

@Module({
  imports: [],
  providers: [DeviceRepository, DeviceResolver],
})
export class DeviceModule {}
