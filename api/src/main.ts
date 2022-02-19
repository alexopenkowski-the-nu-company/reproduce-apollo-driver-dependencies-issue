import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { AppConfigService } from "./config/app-config.service"
import cookieParser from "cookie-parser"

const bootstrap = async () => {
	const app = await NestFactory.create(AppModule)
	const appConfig = app.get(AppConfigService).get

	app.use(cookieParser())

	app.enableCors(appConfig.cors)

	await app.listen(appConfig.server.port)
}

bootstrap()
