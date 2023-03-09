import { compileFromFile } from 'json-schema-to-typescript'
import * as fs from 'fs'
import * as path from 'path'

(async () => {
  // iterate over all schemas in the directory and compile them
  const schemas = fs.readdirSync(path.join(__dirname, 'cfn-json-schema'))
  // iterate asynchronously over all schemas
  for (const schema of schemas) {
    const [name, ext] = schema.split('.');
    const [org, service, resource] = name.split('-');
    await compileFromFile(path.join(__dirname, 'cfn-json-schema', schema))
      .then(ts => {
        // check if the directory exists
        if (!fs.existsSync(path.join(__dirname, 'types', org, service))) {
          fs.mkdirSync(path.join(__dirname, 'types', org, service), { recursive: true })
        }
        // write the file
        fs.writeFileSync(path.join(__dirname, 'types', org, service, `${resource}.d.ts`), ts)
      })
  }

  // iterate over all generated types and add an index file in the service directory
  const awsServices = fs.readdirSync(path.join(__dirname, 'types', 'aws'))
  for (const service of awsServices) {
    const resources = fs.readdirSync(path.join(__dirname, 'types', 'aws', service))
    const index = resources.map(resource => `export * from './${path.basename(resource, '.d.ts')}'`).join('\n')
    fs.writeFileSync(path.join(__dirname, 'types', 'aws', service, 'index.d.ts'), index)
  }

  const alexServices = fs.readdirSync(path.join(__dirname, 'types', 'alexa'))
  for (const service of alexServices) {
    const resources = fs.readdirSync(path.join(__dirname, 'types', 'alexa', service))
    const index = resources.map(resource => `export * from './${path.basename(resource, '.d.ts')}'`).join('\n')
    fs.writeFileSync(path.join(__dirname, 'types', 'alexa', service, 'index.d.ts'), index)
  }
})()
