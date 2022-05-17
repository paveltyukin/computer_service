import { Module } from '@nestjs/common'
import { AppController } from './app/app.controller'
import { AppService } from './app/app.service'
import { join } from 'path'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { ManufacturerModule } from './manufacturer/manufacturer.module'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { DeviceModule } from './device/device.module'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'bundles'),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(__dirname, 'schema.gql'),
      sortSchema: true,
      debug: false,
      playground: false,
    }),
    ManufacturerModule,
    DeviceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
