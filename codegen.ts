import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig ={
    schema: "./src/schema.graphql",
    generates:{
        "./src/typpes.ts": {
            plugins:
                ["typescript", "typescript-resolvers"],
        },
    },
}

export default config