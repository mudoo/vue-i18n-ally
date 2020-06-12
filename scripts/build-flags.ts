import * as path from 'path'
import * as fg from 'fast-glob'
import * as fs from 'fs-extra'

;(async() => {
  const files = await fg('./res/flags/*.svg')
  const flags = files.map(file => path.basename(file, '.svg'))
  const output = path.resolve('./src/utils/flags.ts')

  await fs.writeFile(output, `// Generated by npm run flags:build\nexport default [\n${flags.map(f => `  '${f}',\n`).join('')}]\n`, 'utf-8')
})()
