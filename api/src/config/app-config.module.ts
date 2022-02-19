import { Global, Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import appConfigLoader from "./app-config.loader"
import { AppConfigService } from "./app-config.service"

@Global()
@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: [`.env.${process.env.NODE_ENV}`, ".env"],
			load: [appConfigLoader],
			expandVariables: true,
		}),
	],
	providers: [AppConfigService],
	exports: [AppConfigService],
})
export class AppConfigModule {}
