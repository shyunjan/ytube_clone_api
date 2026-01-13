// import { Global, Module, OnApplicationBootstrap } from "@nestjs/common";
import { AbstractHttpAdapter, HttpAdapterHost } from "@nestjs/core";
import { Global, Module } from "@nestjs/common";
import { Server } from "node:http";
import { AppController } from "./app.controller";
// import { config } from "src/config/config";
// import { MongooseModule } from "@nestjs/mongoose";
// import { PasswordModule } from "./libs/password.module";
// import { AuthModule } from "./auth/auth.module";

@Global()
@Module({
  imports: [
    // MongooseModule.forRoot(config.MONGO_DB_URL as string),
    // PasswordModule,
    // AuthModule,
  ],
  controllers: [AppController],
})
// export class AppModule implements OnApplicationBootstrap {
export class AppModule {
  constructor(private readonly refHost: HttpAdapterHost<AbstractHttpAdapter>) {}

  onApplicationBootstrap() {
    const server: Server = this.refHost.httpAdapter.getHttpServer();
    server.keepAliveTimeout = 61 * 1000;
    server.headersTimeout = 65 * 1000;
  }
}
