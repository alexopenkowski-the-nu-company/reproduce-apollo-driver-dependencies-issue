import {Field, ObjectType, Query, Resolver} from "@nestjs/graphql"

@ObjectType({description: "Something"})
export class TestResponse {
	@Field()
	test: string
}

@Resolver(() => TestResponse)
export class TestResolver {

	@Query(() => TestResponse)
	test(): TestResponse {
		return { test: "Test123" }
	}
}
