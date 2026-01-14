import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("/")
  healthCheck(): string {
    return "YTube Clone API Server is running!";
  }

  @Get("/welcome")
  welcome(): string {
    return "Welcome to YTube Clone API Server!! 🎉🎊🎐";
  }
}
