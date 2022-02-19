import { ConfigService } from "@nestjs/config"
import { Injectable } from "@nestjs/common"
import { Type, plainToClass } from "class-transformer"
import { IsBoolean, IsInt, IsString, IsUrl, ValidateNested, validateSync } from "class-validator"
import validator from "validator"
import IsURLOptions = validator.IsURLOptions

const withProtocolRequired: IsURLOptions = { require_protocol: true }

@Injectable()
export class AppConfigService {
	private readonly appConfig: AppConfig

	constructor(configService: ConfigService) {
		const appConfig = plainToClass(AppConfig, configService.get<AppConfig>("app"))
		const errors = validateSync(appConfig, { skipMissingProperties: false })

		if (errors.length > 0) {
			throw new Error(errors.toString())
		}

		this.appConfig = appConfig
	}

	get get(): AppConfig {
		return this.appConfig
	}
}

export class ServerConfig {
	@IsUrl(withProtocolRequired)
	url: string
	@IsInt()
	port: number
}

export class CorsConfig {
	@IsUrl(withProtocolRequired)
	origin: string
	@IsString()
	methods: string
	@IsBoolean()
	credentials: boolean
}

export class GraphQLConfig {
	@IsBoolean()
	debug: boolean
	@IsBoolean()
	playground: boolean
}


export class AppConfig {
	@Type(() => ServerConfig)
	@ValidateNested()
	server: ServerConfig
	@Type(() => CorsConfig)
	@ValidateNested()
	cors: CorsConfig
	@Type(() => GraphQLConfig)
	@ValidateNested()
	graphql: GraphQLConfig
}
