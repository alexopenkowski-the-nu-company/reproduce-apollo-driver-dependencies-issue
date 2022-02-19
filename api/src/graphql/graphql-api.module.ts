import { Module } from "@nestjs/common"
import { GraphQLModule } from "@nestjs/graphql"
import { AppConfigModule } from "../config/app-config.module"
import { AppConfigService } from "../config/app-config.service"
import {ApolloDriver, ApolloDriverAsyncConfig} from "@nestjs/apollo";

@Module({
	imports: [
		GraphQLModule.forRootAsync<ApolloDriverAsyncConfig>({
			driver: ApolloDriver,
			imports: [AppConfigModule],
			useFactory: async (configService: AppConfigService) => ({
				// ^-- example from docs does not work.
				typePaths: "some_path",
				// TODO: How to configure other options below?
				//  debug: appConfig.get.graphql.debug,
				//  playground: appConfig.get.graphql.playground,
				//  autoSchemaFile: join(process.cwd(), "src/graphql/schema.gql"),
				//  cors: appConfig.get.cors,
			}),
			inject: [AppConfigService],
		}),
	],
})
export class GraphqlApiModule {}
