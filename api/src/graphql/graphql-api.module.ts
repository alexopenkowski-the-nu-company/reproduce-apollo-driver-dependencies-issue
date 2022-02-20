import { Module } from "@nestjs/common"
import { GraphQLModule } from "@nestjs/graphql"
import { AppConfigModule } from "../config/app-config.module"
import { AppConfigService } from "../config/app-config.service"
import { join } from "path"
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {TestResolver} from "../auth/test.resolver";

@Module({
	imports: [
		GraphQLModule.forRootAsync<ApolloDriverConfig>({
			driver: ApolloDriver,
			imports: [AppConfigModule],
			inject: [AppConfigService],
			useFactory: (appConfig: AppConfigService) => ({
				debug: appConfig.get.graphql.debug,
				playground: appConfig.get.graphql.playground,
				autoSchemaFile: join(process.cwd(), "src/graphql/schema.gql"),
				cors: appConfig.get.cors,
			}),
		}),
	],
	providers: [TestResolver]
})
export class GraphqlApiModule {}
