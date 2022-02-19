import { Module } from "@nestjs/common"
import { AppConfigModule } from "./config/app-config.module"
import { GraphqlApiModule } from "./graphql/graphql-api.module"

@Module({
	imports: [AppConfigModule, GraphqlApiModule],
})
export class AppModule {}
