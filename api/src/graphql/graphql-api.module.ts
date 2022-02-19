import {Injectable, Module} from "@nestjs/common"
import {GqlOptionsFactory, GraphQLModule} from "@nestjs/graphql"
import { AppConfigModule } from "../config/app-config.module"
import { AppConfigService } from "../config/app-config.service"
import { join } from "path"
import {ApolloDriver, ApolloDriverAsyncConfig, ApolloDriverConfig} from "@nestjs/apollo";

@Injectable()
class GqlConfigService implements GqlOptionsFactory {
	createGqlOptions(): ApolloDriverConfig {
		return {
			typePaths: ['./**/*.graphql'],
		};
	}
}

@Module({
	imports: [
		GraphQLModule.forRootAsync<ApolloDriverAsyncConfig>({
			driver: ApolloDriver,
			useClass: GqlConfigService,
		 // ^-- example from docs does not work
		}),
	],
})
export class GraphqlApiModule {}
