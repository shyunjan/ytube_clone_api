// import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { NestFactory } from "@nestjs/core";
import { FastifyAdapter, type NestFastifyApplication } from "@nestjs/platform-fastify";
import { Logger } from "@nestjs/common";
import { AppModule } from "./app.module";

async function bootstrap() {
  const logger = new Logger(bootstrap.name);

  const fastifyAdapter = new FastifyAdapter({
    bodyLimit: 2 * 1024 * 1024,
  });
  const app: NestFastifyApplication = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastifyAdapter,
    {
      // logger: new AppLogger(),
      rawBody: true,
    }
  );

  const port = 3000;
  // app.useGlobalFilters(new AllExceptionsFilter(app.get(HttpAdapterHost)));

  await app.listen(port, "0.0.0.0");
  logger.log(`YTube Clone API Server is Running On: ${await app.getUrl()}`);
}

bootstrap();
