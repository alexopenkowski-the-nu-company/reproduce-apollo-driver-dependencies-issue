import * as yaml from "js-yaml"
import envsub from "envsub"
import { join } from "path"

interface EnvVarsSubstituted {
	outputContents: string
}

const yamlConfigFilename = "config.yaml"

export default async () => {
	const yamlFile = join(__dirname, yamlConfigFilename)
	return yaml.load(await withEnvVarsSubstituted(yamlFile)) as Record<string, unknown>
}

const withEnvVarsSubstituted = async (filePath: string): Promise<string> => {
	const substituteEnvironmentVariables = envsub({
		templateFile: filePath,
		outputFile: "/dev/null",
	})
	return substituteEnvironmentVariables.then((substituted: EnvVarsSubstituted) => substituted.outputContents)
}
