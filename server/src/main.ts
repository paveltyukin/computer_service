import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { corsOptions } from './utils/corsOptions'
import { ValidationPipe } from './pipes/validation.pipe'
import { NestExpressApplication } from '@nestjs/platform-express'

const PORT = process.env.PORT
const HOST = process.env.HOST

async function start() {
  const app = await NestFactory.create(AppModule)
  app.enableCors(corsOptions)
  app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix('api')

  await app.listen(PORT, HOST, () =>
    console.log(`Server start on PORT=${PORT}, HOST=${HOST}`),
  )
}

start().catch((error) => `Error: ${error}`)
